import os
import logging
import pytest
from unittest.mock import patch, MagicMock
from src.config import Settings, get_settings, refresh_settings


@pytest.fixture
def mock_env_vars():
    """Mock environment variables."""
    with patch.dict(os.environ, {
        "BEDROCK_PII_GUARDRAIL_ID": "mock-guardrail-id",
        "BEDROCK_PII_GUARDRAIL_VERSION": "mock-guardrail-version",
        "CONTAINER_AWS_ROLE": "arn:aws:iam::123456789012:role/example-role"
    }):
        yield


@pytest.fixture
def mock_boto3():
    """Mock boto3 STS client assume_role method."""
    with patch("boto3.client") as mock_client:
        mock_sts = MagicMock()
        mock_sts.assume_role.return_value = {
            "Credentials": {
                "AccessKeyId": "mock-access-key",
                "SecretAccessKey": "mock-secret-key",
                "SessionToken": "mock-session-token",
            }
        }
        mock_client.return_value = mock_sts
        yield mock_client


def test_logging_format():
    """Ensure logging format is set correctly."""
    logger = logging.getLogger("test_logger")
    assert "%(asctime)s" in logger.parent.handlers[0].formatter._fmt


def test_settings_initialization(mock_env_vars):
    """Ensure settings are loaded correctly."""
    settings = Settings()
    assert settings.bedrock_pii_guardrail_id == "mock-guardrail-id"
    assert settings.bedrock_pii_guardrail_version == "mock-guardrail-version"


def test_get_settings(mock_env_vars):
    """Ensure get_settings returns the correct instance."""
    settings = get_settings()
    assert settings.bedrock_pii_guardrail_id == "mock-guardrail-id"


def test_refresh_settings(mock_env_vars):
    """Ensure refresh_settings updates the settings instance."""
    old_settings = get_settings()
    refresh_settings()
    new_settings = get_settings()
    assert old_settings != new_settings


def test_aws_assume_role(mock_env_vars, mock_boto3):
    """Ensure AWS assume_role works correctly."""
    settings = Settings()
    sts_client = mock_boto3.return_value
    sts_client.assume_role.assert_called_once_with(
        RoleArn="arn:aws:iam::123456789012:role/example-role",
        RoleSessionName="CrossAccountSession"
    )


def test_aws_credentials_usage(mock_env_vars, mock_boto3):
    """Ensure correct AWS credentials are used for other services."""
    settings = Settings()
    boto3_client = mock_boto3.return_value
    boto3_client.get_parameter.assert_called()


def test_invalid_env_var_handling():
    """Ensure missing env vars don’t crash the system."""
    with patch.dict(os.environ, {}, clear=True):
        settings = Settings()
        assert settings.bedrock_pii_guardrail_id == ""
        assert settings.bedrock_pii_guardrail_version == ""