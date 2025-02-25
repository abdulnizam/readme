import pytest
from unittest.mock import patch, MagicMock


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Apply mocks before importing `aws_helpers`."""
    global guardrail_check, replace_pii
    from model.pii_mask import pii_guardrail_check, replace_pii


@pytest.fixture
def mock_get_settings():
    """Mock get_settings()"""
    return MagicMock(
        bedrock_pii_guardrail_id="test-guardrail-id",
        bedrock_pii_guardrail_version="v1",
    )


@pytest.fixture
def mock_guardrail_response():
    """Mock response from Bedrock Guardrail"""
    return {
        "outputs": [{"text": "Hello, {NAME}"}],
        "assessments": [
            {"sensitiveInformationPolicy": {"piiEntities": [{"type": "NAME"}]}}
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
def test_guardrail_check(
    mock_get_settings, mock_get_client, mock_guardrail_response
):
    """Test guardrail_check function"""

    # Mock settings
    mock_settings = MagicMock()
    mock_settings.bedrock_pii_guardrail_id = "test-guardrail-id"
    mock_settings.bedrock_pii_guardrail_version = "v1"
    mock_get_settings.return_value = mock_settings

    # Mock Bedrock client
    mock_client = MagicMock()
    mock_get_client.return_value = mock_client

    # Mock Bedrock response
    mock_client.apply_guardrail.return_value = mock_guardrail_response

    # Call function
    input_text = "What is UC?"
    source = "test-source"
    is_masked, output_text = pii_guardrail_check(input_text, source)

    # Assertions
    assert is_masked is True
    assert isinstance(output_text, str)
    assert mock_get_client.called
    assert mock_client.apply_guardrail.called


@patch("model.pii_mask.json.load")
@patch("builtins.open", new_callable=MagicMock)
def test_replace_pii(
    mock_open, mock_json_load, mock_guardrail_response, mock_dummy_data
):
    """Test replace_pii function"""

    # Mock loading dummy_data.json
    mock_json_load.return_value = mock_dummy_data

    # Call function
    result = replace_pii(mock_guardrail_response)

    # Assertions
    assert isinstance(result, str)
    assert "DWP Gail" in result


@patch("model.pii_mask.get_client")
@patch("model.pii_mask.get_settings")
def test_guardrail_check_no_pii(
    mock_get_settings, mock_get_client, mock_guardrail_response_no_outputs
):
    """
    Test guardrail_check when no PII is detected.
    This covers where the response['outputs'] list is empty.
    """

    # Mock settings
    mock_settings = MagicMock()
    mock_settings.bedrock_pii_guardrail_id = "test-guardrail-id"
    mock_settings.bedrock_pii_guardrail_version = "v1"
    mock_get_settings.return_value = mock_settings

    # Mock Bedrock client
    mock_client = MagicMock()
    mock_get_client.return_value = mock_client

    # Mock Bedrock response (No outputs)
    mock_client.apply_guardrail.return_value = (
        mock_guardrail_response_no_outputs
    )

    # Call function
    input_text = "what is UC?"
    source = "test-source"
    is_masked, output_text = pii_guardrail_check(input_text, source)

    # Assertions
    assert is_masked is False
    assert output_text == input_text  # Should return the original text


@patch("model.pii_mask.json.load")
@patch("builtins.open", new_callable=MagicMock)
def test_replace_pii_exception(
    mock_open, mock_json_load, mock_guardrail_response_missing_key
):
    """
    Test replace_pii when an exception occurs due to missing 'assessments' key.
    """

    mock_json_load.return_value = None

    with pytest.raises(Exception):
        results = replace_pii(mock_guardrail_response_missing_key)
        assert results == Exception
