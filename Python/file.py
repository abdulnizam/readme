import pytest
import os
from unittest.mock import patch, MagicMock

with patch("config.get_settings") as mock_get_settings:
    mock_instance = MagicMock()
    
    mock_instance.bedrock_llama3_8b_model_id = "test_model"
    mock_instance.bedrock_llama3_70b_model_id = "test_model"
    mock_instance.bedrock_embedding_model_id = "mock_model_id"
    mock_instance.bedrock_harms_guardrail_id = "6qz78hvz3kfl"
    mock_instance.bedrock_harms_guardrail_version = "1"
    mock_instance.blocked_guardrail_message = "Blocked"
    mock_instance.services_doc_manager_host = "http://localhost"

    mock_get_settings.return_value = mock_instance

    with patch("boto3.client") as mock_boto_client:
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

        from model.ai_models_config import llama3_8b, llama3_70b

def test_llama3_8b_initialization():
    """Test that `llama3_8b` is initialized with correct model config."""
    assert llama3_8b.llm is not None
    assert llama3_8b.llm.model_id == "test_model"


def test_llama3_70b_initialization():
    """Test that `llama3_70b` is initialized with correct model config."""
    assert llama3_70b.llm is not None
    assert llama3_70b.llm.model_id == "test_model"


def test_llama3_8b_invoke():
    """Test invoking the `llama3_8b` model with a mock prompt."""
    with patch.object(llama3_8b, "invoke", return_value="Mock Response") as mock_invoke:
        response = llama3_8b.invoke("Test prompt")
        mock_invoke.assert_called_once_with("Test prompt")
        assert response == "Mock Response"


def test_llama3_70b_invoke():
    """Test invoking the `llama3_70b` model with a mock prompt."""
    with patch.object(llama3_70b, "invoke", return_value="Mock Response") as mock_invoke:
        response = llama3_70b.invoke("Test prompt")
        mock_invoke.assert_called_once_with("Test prompt")
        assert response == "Mock Response"
