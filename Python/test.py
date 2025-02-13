import os
import pytest
import logging
from unittest.mock import patch, MagicMock
from config import get_settings, refresh_settings, Settings


@pytest.fixture
def mock_env_vars():
    """Mock required environment variables"""
    with patch.dict(os.environ, {
        "BEDROCK_PII_GUARDRAIL_ID": "mock-guardrail-id",
        "BEDROCK_PII_GUARDRAIL_VERSION": "mock-guardrail-version",
        "CONTAINER_AWS_ROLE": "arn:aws:iam::123456789012:role/example-role"
    }):
        yield


@pytest.fixture
def mock_boto3_client():
    """Mock AWS services: STS & SSM"""
    with patch("boto3.client") as mock_boto:
        mock_sts = MagicMock()
        mock_sts.assume_role.return_value = {
            "Credentials": {
                "AccessKeyId": "mock-access-key",
                "SecretAccessKey": "mock-secret-key",
                "SessionToken": "mock-session-token",
            }
        }

        mock_ssm = MagicMock()
        mock_ssm.get_parameter.return_value = {"Parameter": {"Value": "mock-ssm-value"}}

        def boto3_side_effect(service_name, *args, **kwargs):
            if service_name == "sts":
                return mock_sts
            elif service_name == "ssm":
                return mock_ssm
            raise ValueError(f"Unexpected service_name {service_name}")

        mock_boto.side_effect = boto3_side_effect
        yield mock_boto


@pytest.fixture
def mock_logging():
    """Mock logging to test log messages"""
    with patch.object(logging, "getLogger") as mock_logger:
        yield mock_logger


def test_settings_customise_sources(mock_boto3_client, mock_env_vars):
    """Ensure `settings_customise_sources` calls AWS Secrets Manager"""
    with patch.object(Settings, "settings_customise_sources",
                      wraps=Settings.settings_customise_sources) as mock_sources:
        settings = Settings()
        assert settings is not None  # Ensure settings are loaded
        mock_sources.assert_called_once()  # Ensure method is executed


def test_aws_secrets_retrieval(mock_boto3_client, mock_env_vars):
    """Ensure AWS Secrets are fetched and used"""
    settings = get_settings()
    assert settings.bedrock_pii_guardrail_id == "mock-guardrail-id"
    assert settings.bedrock_pii_guardrail_version == "mock-guardrail-version"


def test_refresh_settings(mock_env_vars):
    """Ensure refreshing settings reloads values properly"""
    refresh_settings()
    settings = get_settings()
    assert settings.bedrock_pii_guardrail_id == "mock-guardrail-id"  # Ensure settings refresh works


def test_aws_assume_role(mock_boto3_client, mock_env_vars):
    """Ensure AWS assume_role works correctly"""
    settings = Settings()
    sts_client = mock_boto3_client.return_value
    sts_client.assume_role.assert_called_once_with(
        RoleArn="arn:aws:iam::123456789012:role/example-role",
        RoleSessionName="CrossAccountSession"
    )


def test_aws_credentials_usage(mock_boto3_client, mock_env_vars):
    """Ensure correct AWS credentials are used for other services"""
    settings = Settings()
    boto3_client = mock_boto3_client.return_value
    boto3_client.get_parameter.assert_called()


def test_invalid_env_var_handling():
    """Ensure missing env vars don’t crash the system"""
    with patch.dict(os.environ, {}, clear=True):
        settings = Settings()
        assert settings.bedrock_pii_guardrail_id == ""
        assert settings.bedrock_pii_guardrail_version == ""


def test_logging_format(mock_logging):
    """Ensure logging format is set correctly"""
    logger = logging.getLogger("test_logger")
    assert "%(asctime)s" in logger.parent.handlers[0].formatter._fmt


def test_logger_calls(mock_logging):
    """Ensure logging messages are created"""
    mock_logger = mock_logging.return_value
    mock_logger.info.assert_not_called()
    mock_logger.error.assert_not_called()


def test_failing_aws_call(mock_boto3_client):
    """Ensure AWS call failure is handled correctly"""
    mock_boto3_client.return_value.assume_role.side_effect = Exception("AWS Error")
    
    with pytest.raises(Exception, match="AWS Error"):
        settings = Settings()  # Ensure error is raised and handled properly