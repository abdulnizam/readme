import pytest
from botocore.exceptions import ClientError, NoCredentialsError, ParamValidationError

@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Apply mocks before importing `aws_helpers`."""
    
    # ✅ Unpack mocks
    mock_get_settings, mock_boto_client = mock_get_settings_and_boto3  

    # ✅ Import `aws_helpers` AFTER mocks
    global get_credentials, get_client, retry_if_invalid_settings
    from model.aws.aws_helpers import get_credentials, get_client, retry_if_invalid_settings  

# ✅ Tests that automatically use the setup
@pytest.mark.usefixtures("setup_mocked_aws_helpers")
def test_get_client():
    """Tests get_client function."""
    client = get_client("s3")
    assert client is not None

@pytest.mark.usefixtures("setup_mocked_aws_helpers")
def test_get_client_failure(mocker):
    """Tests get_client when credentials retrieval fails."""
    mocker.patch("model.aws.aws_helpers.get_credentials", side_effect=Exception("Credential error"))
    
    with pytest.raises(Exception, match="Credential error"):
        get_client("s3")