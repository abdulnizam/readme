import pytest
from unittest.mock import patch, MagicMock
from model.pii_mask import pii_guardrail_check, replace_pii


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Apply mocks before importing `aws_helpers`."""
    pass


@pytest.fixture
def mock_get_settings():
    """Mock get_settings()"""
    mock_settings = MagicMock()
    mock_settings.bedrock_pii_guardrail_id = "test-guardrail-id"
    mock_settings.bedrock_pii_guardrail_version = "v1"
    return mock_settings


@pytest.fixture
def mock_guardrail_response():
    """Mock response from Bedrock Guardrail"""
    return {
        "outputs": [{"text": "Hello, {NAME}"}],
        "assessments": [
            {"sensitiveInformationPolicy": {"piiEntities": [{"type": "NAME", "match": "John Doe"}]}}
        ],
    }


@pytest.fixture
def mock_dummy_data():
    """Mock dummy_data.json file content"""
    return {"NAME": "DWP Gail"}


@pytest.fixture
def mock_guardrail_response_no_outputs():
    """Mock response with no outputs from Bedrock Guardrail"""
    return {"outputs": []}  # No PII detected case


@pytest.fixture
def mock_guardrail_response_missing_key():
    """Mock response missing 'assessments' key"""
    return {"outputs": [{"text": "DWP"}]}  # No 'assessments' key


@patch("model.pii_mask.get_client")
@patch("model.pii_mask.get_settings")
def test_guardrail_check(mock_get_settings, mock_get_client, mock_guardrail_response):
    """Test pii_guardrail_check function"""

    # Mock settings
    mock_get_settings.return_value = MagicMock(
        bedrock_pii_guardrail_id="test-guardrail-id",
        bedrock_pii_guardrail_version="v1",
    )

    # Mock Bedrock client
    mock_client = MagicMock()
    mock_get_client.return_value = mock_client

    # Mock Bedrock response
    mock_client.apply_guardrail.return_value = mock_guardrail_response

    # Call function
    input_text = "John Doe is applying for UC."
    source = "test-source"
    is_masked, output_text = pii_guardrail_check(input_text, source)

    # Assertions
    assert is_masked is True
    assert isinstance(output_text, str)
    assert "John Doe" not in output_text  # Should be replaced
    assert "DWP Gail" in output_text  # Replaced value
    assert mock_get_client.called
    assert mock_client.apply_guardrail.called


@patch("model.pii_mask.read_json_file")
def test_replace_pii(mock_read_json, mock_guardrail_response, mock_dummy_data):
    """Test replace_pii function"""

    # Mock loading dummy_data.json
    mock_read_json.return_value = mock_dummy_data

    # Call function
    input_text = "Hello, John Doe"
    result = replace_pii(input_text, mock_guardrail_response)

    # Assertions
    assert isinstance(result, str)
    assert "John Doe" not in result
    assert "DWP Gail" in result  # Expected replacement


@patch("model.pii_mask.get_client")
@patch("model.pii_mask.get_settings")
def test_guardrail_check_no_pii(mock_get_settings, mock_get_client, mock_guardrail_response_no_outputs):
    """Test pii_guardrail_check when no PII is detected."""

    # Mock settings
    mock_get_settings.return_value = MagicMock(
        bedrock_pii_guardrail_id="test-guardrail-id",
        bedrock_pii_guardrail_version="v1",
    )

    # Mock Bedrock client
    mock_client = MagicMock()
    mock_get_client.return_value = mock_client

    # Mock Bedrock response (No outputs)
    mock_client.apply_guardrail.return_value = mock_guardrail_response_no_outputs

    # Call function
    input_text = "This text has no PII."
    source = "test-source"
    is_masked, output_text = pii_guardrail_check(input_text, source)

    # Assertions
    assert is_masked is False
    assert output_text == input_text  # Should return the original text


@patch("model.pii_mask.read_json_file")
def test_replace_pii_exception(mock_read_json, mock_guardrail_response_missing_key):
    """Test replace_pii when an exception occurs due to missing 'assessments' key."""

    mock_read_json.return_value = {}

    with pytest.raises(Exception):
        replace_pii("Sensitive text", mock_guardrail_response_missing_key)