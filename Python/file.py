import pytest
from unittest.mock import patch

@pytest.fixture(scope="module", autouse=True)
def setup_mocked_ai_models(mock_get_settings_and_boto3):
    """Apply mocks before importing `llama3_8b` and `llama3_70b`"""
    with mock_get_settings_and_boto3:  # ✅ Use the fixture from `conftest.py`
        global llama3_8b, llama3_70b
        from model.ai_models_config import llama3_8b, llama3_70b  # ✅ Import AFTER mocks

@pytest.mark.usefixtures("setup_mocked_ai_models")
def test_llama3_8b_initialization():
    assert llama3_8b.llm is not None
    assert llama3_8b.llm.model_id == "test_model"


@pytest.mark.usefixtures("setup_mocked_ai_models")
def test_llama3_70b_initialization():
    assert llama3_70b.llm is not None
    assert llama3_70b.llm.model_id == "test_model"


@pytest.mark.usefixtures("setup_mocked_ai_models")
def test_llama3_8b_invoke():
    with patch.object(llama3_8b, "invoke", return_value="Mock Response") as mock_invoke:
        response = llama3_8b.invoke("Test prompt")
        mock_invoke.assert_called_once_with("Test prompt")
        assert response == "Mock Response"


@pytest.mark.usefixtures("setup_mocked_ai_models")
def test_llama3_70b_invoke():
    with patch.object(llama3_70b, "invoke", return_value="Mock Response") as mock_invoke:
        response = llama3_70b.invoke("Test prompt")
        mock_invoke.assert_called_once_with("Test prompt")
        assert response == "Mock Response"