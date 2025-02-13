import pytest
from unittest.mock import patch, MagicMock
from config import get_settings, refresh_settings, Settings


@pytest.fixture
def mock_boto3_client():
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
            return mock_ssm

        mock_boto.side_effect = boto3_side_effect
        yield mock_boto

def test_settings_customise_sources(mock_boto3_client):
    """Ensure `settings_customise_sources` calls AWS Secrets Manager"""

    with patch.object(Settings, "settings_customise_sources",
                      wraps=Settings.settings_customise_sources) as mock_sources:
        settings = Settings()
        assert settings is not None  # Ensure settings are loaded
        mock_sources.assert_called_once()  # Ensure method is executed


def test_aws_secrets_retrieval(mock_boto3_client):
    """Ensure AWS Secrets are fetched and used"""
    settings = get_settings()
    assert settings.bedrock_pii_guardrail_id == "spidt98ibszt"
    assert settings.bedrock_pii_guardrail_version == "3"


def test_refresh_settings():
    """Ensure refreshing settings reloads values properly"""
    refresh_settings()
    settings = get_settings()
    assert settings.bedrock_embedding_model_id == "mock_model_id"  # Ensure settings are refreshed
