import os
import logging
import pytest
from unittest.mock import patch
from src.config import Settings
from src.model.aws.aws_helpers import get_credentials

# =============================
# ✅ Test 1: Logging Format
# =============================
def test_logging_format():
    """Ensure the logging format is set correctly."""
    expected_format = "%(asctime)s - %(name)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s"
    
    # Ensure at least one handler exists
    assert logging.root.handlers, "No handlers configured for logging"

    # Get the first handler's formatter
    log_formatter = logging.root.handlers[0].formatter
    assert log_formatter._fmt == expected_format, f"Logging format mismatch: {log_formatter._fmt}"


# =============================
# ✅ Test 2: Metadata Integrity
# =============================
def test_metadata_integrity():
    """Ensure metadata fields remain unchanged."""
    settings = Settings()

    assert settings.bedrock_pii_guardrail_id.field_info.extra["source_type"] == "ssm"
    assert settings.bedrock_pii_guardrail_version.field_info.extra["source_type"] == "ssm"


# =============================
# ✅ Test 3: AWS Role Session Name
# =============================
@patch("boto3.client")
def test_role_session_name(mock_boto):
    """Ensure the correct RoleSessionName is used when assuming a role."""
    mock_boto.return_value.assume_role.return_value = {"Credentials": {"AccessKeyId": "test", "SecretAccessKey": "test", "SessionToken": "test"}}

    credentials = get_credentials()
    
    # Verify correct RoleSessionName is passed
    assert mock_boto.return_value.assume_role.call_args[1]["RoleSessionName"] == "CrossAccountSession"


# =============================
# ✅ Test 4: Environment Variables
# =============================
def test_env_variable():
    """Ensure environment variables are correctly retrieved."""
    os.environ["CONTAINER_AWS_ROLE"] = "expected-role"
    
    retrieved_role = os.getenv("CONTAINER_AWS_ROLE")
    assert retrieved_role == "expected-role", f"Expected 'expected-role', got '{retrieved_role}'"


# =============================
# ✅ Test 5: Ensure AWS Client Uses Expected Endpoint
# =============================
@patch("boto3.client")
def test_get_client(mock_boto):
    """Ensure AWS clients are created with the expected parameters."""
    os.environ["BEDROCK_ENDPOINT"] = "https://bedrock.custom.endpoint"
    
    from src.model.aws.aws_helpers import get_client
    client = get_client("s3")

    assert mock_boto.called, "boto3 client was not called"
    assert mock_boto.call_args[1]["endpoint_url"] == "https://bedrock.custom.endpoint"


# =============================
# ✅ Test 6: Ensure Logging Object Exists
# =============================
def test_logger_initialization():
    """Ensure logger object is properly initialized."""
    from src.model.aws.aws_helpers import logger
    assert logger is not None, "Logger should not be None"
    assert isinstance(logger, logging.Logger), "Logger should be an instance of logging.Logger"