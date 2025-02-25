import pytest
from unittest.mock import patch, MagicMock


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global Llama3Handler, GuardrailsFilterError
    from model.llama3handler import Llama3Handler, GuardrailsFilterError


@pytest.fixture
def mock_llama_handler(mock_bedrock_llm):
    """Fixture to create a Llama3Handler instance with mocked AWS dependencies."""
    with patch("model.llama3handler.BedrockLLM", return_value=mock_bedrock_llm):
        return Llama3Handler({
            "model_id": "mock-llama3",
            "model_kwargs": {"temperature": 0.7, "top_p": 0.9, "max_gen_len": 100},
            "guardrail": {"guardrailIdentifier": "mock-guardrail", "guardrailVersion": "v1"},
            "blocked_guardrail_message": "Blocked by guardrail",
        })


def test_llama3handler_initialization(mock_llama_handler):
    """Ensure `Llama3Handler` initializes properly."""
    assert mock_llama_handler.llm is not None
    assert mock_llama_handler.guardrail_response == "Blocked by guardrail"


def test_format_prompt(mock_llama_handler):
    """Test formatting of prompts with different roles."""
    result = mock_llama_handler._Llama3Handler__format_prompt("user", "Hello")
    assert "<|start_header_id|>user<|end_header_id|>\n\nHello<|eot_id|>" in result

    result_no_close = mock_llama_handler._Llama3Handler__format_prompt("assistant", "Response", close_input=False)
    assert "<|start_header_id|>assistant<|end_header_id|>\n\nResponse" in result_no_close
    assert "<|eot_id|>" not in result_no_close


def test_format_llama3_input(mock_llama_handler):
    """Ensure input formatting works correctly."""
    formatted_input = mock_llama_handler._Llama3Handler__format_llama3_input(
        user_prompt="User prompt",
        system_prompt="System info",
        assistant_prompt="Assistant hint"
    )
    assert "<|begin_of_text|>" in formatted_input
    assert "<|start_header_id|>system<|end_header_id|>\n\nSystem info" in formatted_input
    assert "<|start_header_id|>user<|end_header_id|>\n\nUser prompt" in formatted_input
    assert "<|start_header_id|>assistant<|end_header_id|>\n\nAssistant hint" in formatted_input


def test_format_llama3_input_not_prompt(mock_llama_handler):
    """Ensure input formatting works correctly."""
    formatted_input = mock_llama_handler._Llama3Handler__format_llama3_input(
        user_prompt="User prompt",
        system_prompt="",
        assistant_prompt="Assistant hint"
    )
    assert "<|begin_of_text|>" in formatted_input


def test_format_one_shot(mock_llama_handler):
    """Ensure one-shot formatting works."""
    one_shot = mock_llama_handler.format_one_shot("What is AI?", "Artificial Intelligence is...")
    assert one_shot["user"] == "What is AI?"
    assert one_shot["assistant"] == "Artificial Intelligence is..."


MOCK_LLM_RESPONSE = "Quantum computing is a field of study that..."
MOCK_CONFIG = {
    "region_name": "us-west-2",
    "model_id": "meta-llama3",
    "model_kwargs": {
        "temperature": 0.7,
        "top_p": 0.9,
        "max_gen_len": 512
    }
}

USER_PROMPT = "Explain quantum computing."
SYSTEM_PROMPT = "You are a helpful AI assistant."
ASSISTANT_PROMPT = "Sure! Quantum computing is..."
FEW_SHOTS = [{"user": "What is AI?", "assistant": "AI stands for Artificial Intelligence."}]


@patch("model.llama3handler.BedrockLLM")
def test_invoke(mock_bedrock_llm):
    """Ensure `invoke()` calls BedrockLLM correctly."""

    mock_llm_instance = MagicMock()
    mock_llm_instance.invoke.return_value = MOCK_LLM_RESPONSE
    mock_bedrock_llm.return_value = mock_llm_instance

    handler = Llama3Handler(llm_config=MOCK_CONFIG)

    response = handler.invoke(USER_PROMPT, SYSTEM_PROMPT, ASSISTANT_PROMPT, FEW_SHOTS)

    assert response == MOCK_LLM_RESPONSE


@patch("model.llama3handler.BedrockLLM")
def test_invoke_guardrail_error(mock_bedrock_llm):
    """Ensure guardrail filter raises an error when triggered."""

    mock_llm_instance = MagicMock()
    mock_llm_instance.invoke.return_value = MOCK_LLM_RESPONSE
    mock_bedrock_llm.return_value = mock_llm_instance

    config_with_guardrail = MOCK_CONFIG.copy()
    config_with_guardrail["guardrail"] = {"guardrailIdentifier": "GR123", "guardrailVersion": "1.0"}
    config_with_guardrail["blocked_guardrail_message"] = "Quantum computing is a field of study that..."

    handler = Llama3Handler(llm_config=config_with_guardrail)

    with pytest.raises(GuardrailsFilterError):
        handler.invoke(USER_PROMPT, SYSTEM_PROMPT, ASSISTANT_PROMPT, FEW_SHOTS)
