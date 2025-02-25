import pytest
from unittest.mock import patch, MagicMock
from fastapi import HTTPException


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Apply mocks before importing `fetch_content_for_methods`."""
    global get_content_for_methods
    from model.fetch_content_for_methods import get_content_for_methods


@pytest.fixture
def mock_response():
    """Mock response from the Document Management Service"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.return_value = {
        "name": "AI Learning Module",
        "topic_outlines": ["Introduction to AI", "Deep Learning Basics"]
    }
    return mock_resp


@patch("model.fetch_content_for_methods.requests.get")
@pytest.mark.asyncio
async def test_get_content_for_methods_success(mock_requests_get, mock_response):
    """Test successful content retrieval from Document Management Service"""

    # Mock requests.get to return fake response
    mock_requests_get.return_value = mock_response

    result = await get_content_for_methods("12345")

    assert result == {
        "name": "AI Learning Module",
        "topics": ["Introduction to AI", "Deep Learning Basics"]
    }

    mock_requests_get.assert_called_once_with(
        "http://localhost/v1/topicgenerationvariables",
        headers={"Learning-ID": "12345"},
        timeout=3
    )


@patch("model.fetch_content_for_methods.requests.get")
@pytest.mark.asyncio
async def test_get_content_for_methods_http_error(mock_requests_get):
    """Test HTTP error handling when Document Management Service is down"""

    # Simulate an HTTP error
    mock_requests_get.side_effect = Exception("Network error")

    with pytest.raises(HTTPException) as exc_info:
        await get_content_for_methods("12345")

    assert exc_info.value.status_code == 500

    mock_requests_get.assert_called_once()


@patch("model.fetch_content_for_methods.get_settings")
@patch("model.fetch_content_for_methods.requests.get")
@pytest.mark.asyncio
async def test_get_content_for_methods_invalid_status(mock_requests_get):
    """Test when Document Management Service returns a non-200 status"""

    # Simulate a failed response
    mock_resp = MagicMock()
    mock_resp.status_code = 404
    mock_requests_get.return_value = mock_resp

    result = await get_content_for_methods("12345")

    # The function does not raise an error in this case, but returns None
    assert result is None

    mock_requests_get.assert_called_once()