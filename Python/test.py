import pytest
from unittest.mock import patch, MagicMock
from fastapi import HTTPException


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global fetch_relevant_chunks
    from model.fetch_relevant_chunks import fetch_relevant_chunks


@pytest.fixture
def mock_response():
    """Mock response from the Document Management Service"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.return_value = {
        "chunks": [
            {"id": "123", "text": "AI is transforming industries"},
            {"id": "456", "text": "Machine Learning enhances automation"}
        ]
    }
    return mock_resp


@pytest.fixture
def mock_error_response():
    """Mock response from the Document Management Service"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.side_effect = Exception("Json Decoding error")
    return mock_resp


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_success(mock_requests_post, mock_response):
    """Test successful retrieval of relevant chunks"""

    # Mock requests.post to return fake response
    mock_requests_post.return_value = mock_response

    learning_id = "12345"
    data = ["AI in healthcare", "AI for automation"]
    top_k = 2

    result = await fetch_relevant_chunks(learning_id, data, top_k)

    assert result == {
        "Status code: ": 200,
        "Relevant chunk citations: ": {
            "chunks": [
                {"id": "123", "text": "AI is transforming industries"},
                {"id": "456", "text": "Machine Learning enhances automation"}
            ]
        }
    }

    mock_requests_post.assert_called_once_with(
        "http://localhost/v1/getrelevantchunks",
        json={"query_strings": data, "top_k": top_k},
        headers={"Learning-ID": learning_id},
        timeout=3
    )


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_http_error(mock_requests_post):
    """Test handling of network failure when fetching relevant chunks"""

    # Simulate a network error
    mock_requests_post.side_effect = Exception("Network error")

    learning_id = "12345"
    data = ["AI in finance"]
    top_k = 1

    with pytest.raises(HTTPException) as exc_info:
        await fetch_relevant_chunks(learning_id, data, top_k)

    assert exc_info.value.status_code == 500

    mock_requests_post.assert_called_once()


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_http_unbound_error(mock_requests_post, mock_error_response):
    """Test handling of network failure when fetching relevant chunks"""

    mock_requests_post.return_value = mock_error_response

    learning_id = "12345"
    data = ["AI in healthcare", "AI for automation"]
    top_k = 2

    with pytest.raises(HTTPException) as exc_info:
        await fetch_relevant_chunks(learning_id, data, top_k)

    assert exc_info.value.status_code == 500

    mock_requests_post.assert_called_once()


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_invalid_status(mock_requests_post):
    """Test when Document Management Service returns a non-200 status"""

    # Simulate a 400 Bad Request response
    mock_resp = MagicMock()
    mock_resp.status_code = 400
    mock_requests_post.return_value = mock_resp

    learning_id = "12345"
    data = ["AI in finance"]
    top_k = 1

    result = await fetch_relevant_chunks(learning_id, data, top_k)
    output = "An error occurred in fetching relevant chunks, ensure you have the correct headers with the request"
    # Function should return an error message instead of raising an exception
    assert result == output

    mock_requests_post.assert_called_once()
