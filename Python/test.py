import pytest
import os
from unittest.mock import patch, MagicMock

# ✅ Define Environment Variables
required_env_vars = {
    "BEDROCK_PII_GUARDRAIL_ID": "spidt98ibszt",
    "BEDROCK_PII_GUARDRAIL_VERSION": "3",
    "BEDROCK_EMBEDDING_MODEL_ID": "mock_model_id",
    "BEDROCK_HARMS_GUARDRAIL_ID": "6qz78hvz3kfl",
    "BEDROCK_HARMS_GUARDRAIL_VERSION": "1",
    "BEDROCK_LLAMA3_8B_MODEL_ID": "test_model",
    "BEDROCK_LLAMA3_70B_MODEL_ID": "test_model",
    "BLOCKED_GUARDRAIL_MESSAGE": "Blocked",
    "SERVICES_DOC_MANAGER_HOST": "http://localhost",
    "CONTAINER_AWS_ROLE": "arn:aws:iam::123456789012:role/TestRole",
}
os.environ.update(required_env_vars)

@pytest.fixture(autouse=True)
def mock_get_settings_and_boto3():
    """Mock config.get_settings and boto3.client"""
    
    with patch("config.get_settings") as mock_get_settings, patch("boto3.client") as mock_boto_client:
        
        # ✅ Mock `config.get_settings`
        mock_instance = MagicMock()
        mock_instance.bedrock_llama3_8b_model_id = "test_model"
        mock_instance.bedrock_llama3_70b_model_id = "test_model"
        mock_instance.bedrock_embedding_model_id = "mock_model_id"
        mock_instance.bedrock_harms_guardrail_id = "6qz78hvz3kfl"
        mock_instance.bedrock_harms_guardrail_version = "1"
        mock_instance.blocked_guardrail_message = "Blocked"
        mock_instance.services_doc_manager_host = "http://localhost"
        mock_get_settings.return_value = mock_instance

        # ✅ Mock `boto3.client`
        mock_sts_client = MagicMock()
        mock_sts_client.assume_role.return_value = {
            "Credentials": {
                "AccessKeyId": "mock-access-key",
                "SecretAccessKey": "mock-secret-key",
                "SessionToken": "mock-session-token",
            }
        }

        mock_bedrock_client = MagicMock()

        def mock_boto_service(service_name, *args, **kwargs):
            if service_name == "sts":
                return mock_sts_client
            return mock_bedrock_client

        mock_boto_client.side_effect = mock_boto_service

        yield  # ✅ Ensures the mocks persist during tests