import pytest
import boto3
import os
from unittest.mock import MagicMock
from botocore.exceptions import ClientError, NoCredentialsError, ParamValidationError

# Import after setting environment variables
from model.aws.aws_helpers import get_credentials, get_client, retry_if_invalid_settings
from config import refresh_settings, Settings

@pytest.fixture
def mock_sts_client(mocker):
    """Mocks boto3 STS client for assume_role."""
    mock_client = mocker.patch("boto3.client")
    mock_sts = MagicMock()
    mock_sts.assume_role.return_value = {
        "Credentials": {
            "AccessKeyId": "mock_access_key",
            "SecretAccessKey": "mock_secret_key",
            "SessionToken": "mock_session_token"
        }
    }
    mock_client.return_value = mock_sts
    return mock_sts


@pytest.fixture
def mock_boto_client(mocker):
    """Mocks boto3 client creation to return the correct mock client instance."""
    mock_service_client = MagicMock()
    mocker.patch("boto3.client", return_value=mock_service_client)  # Ensure boto3.client calls return the same object
    return mock_service_client


@pytest.fixture
def mock_settings(mocker):
    """Mocks the Settings class to avoid missing environment variables error."""
    mock_settings = mocker.patch("src.config.Settings", autospec=True)
    mock_settings.return_value = Settings(
        services_malware_host="mock_host",
        services_malware_port=8000,
        app_log_level="INFO",
        bedrock_pii_guardrail_id="mock_guardrail_id",
        bedrock_pii_guardrail_version="mock_version",
        bedrock_embedding_model_id="mock_model_id",
        db_hostname="mock_db_host",
        db_port="5432",
        db_name="mock_db"
    )
    return mock_settings

def test_get_client(mock_boto_client):
    """Tests get_client function."""
    client = get_client("s3")
    assert client == mock_boto_client, "Expected mock_boto_client to be returned."


def test_get_client_failure(mocker):
    """Tests get_client when credentials retrieval fails."""
    mocker.patch("model.aws.aws_helpers.get_credentials", side_effect=Exception("Credential error"))

    with pytest.raises(Exception, match="Credential error"):
        get_client("s3")


def test_retry_if_invalid_settings(mocker):
    """Tests retry_if_invalid_settings when encountering a validation error."""
    mock_refresh_settings = mocker.patch("src.config.refresh_settings")

    @retry_if_invalid_settings
    def failing_function():
        raise ClientError(
            {"Error": {"Code": "ValidationException"}},
            "TestOperation"
        )

    with pytest.raises(ClientError):
        failing_function()

    assert mock_refresh_settings.called, "refresh_settings() was not called!"


def test_retry_if_invalid_settings_non_validation_error(mocker):
    """Tests retry_if_invalid_settings when encountering a non-validation error."""
    mock_refresh_settings = mocker.patch("src.config.refresh_settings")

    @retry_if_invalid_settings
    def failing_function():
        raise ClientError(
            {"Error": {"Code": "SomeOtherError"}},
            "TestOperation"
        )

    with pytest.raises(ClientError, match="SomeOtherError"):
        failing_function()

    assert not mock_refresh_settings.called, "refresh_settings() should NOT be called for non-validation errors!"


def test_get_credentials_no_credentials(mocker):
    """Test get_credentials when AWS credentials are missing."""
    mock_sts = mocker.patch("boto3.client")
    mock_sts.return_value.assume_role.side_effect = NoCredentialsError()

    with pytest.raises(NoCredentialsError):
        get_credentials()


def test_get_credentials_invalid_params(mocker):
    """Test get_credentials when assume_role is called with invalid parameters."""
    mock_sts = mocker.patch("boto3.client")
    mock_sts.return_value.assume_role.side_effect = ParamValidationError(report="Invalid parameter")

    with pytest.raises(ParamValidationError):
        get_credentials()


def test_get_credentials_client_error(mocker):
    """Test get_credentials when STS returns a ClientError."""
    error_response = {"Error": {"Code": "AccessDenied", "Message": "User is not authorized"}}
    mock_sts = mocker.patch("boto3.client")
    mock_sts.return_value.assume_role.side_effect = ClientError(error_response, "AssumeRole")

    with pytest.raises(ClientError):
        get_credentials()
