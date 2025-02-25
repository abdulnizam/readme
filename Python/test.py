import pytest
from unittest.mock import patch, MagicMock
from fastapi import HTTPException


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global fetch_relevant_chunks
    from model.fetch_relevant_chunks import fetch_relevant_chunks


@pytest.fixture
def mock_valid_response():
    """Mock response with correct structure for fetch_relevant_chunks"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.return_value = {
        "relevant_chunks": [  # ✅ Expected structure
            {"id": "123", "text": "AI is transforming industries"},
            {"id": "456", "text": "Machine Learning enhances automation"}
        ],
        "low_relevancy_flags": []  # ✅ Expected structure
    }
    return mock_resp


@pytest.fixture
def mock_invalid_json_response():
    """Mock response that is missing 'relevant_chunks' key"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.return_value = {
        "wrong_key": [  # ❌ Missing required keys
            {"id": "789", "text": "Data Science trends"}
        ]
    }
    return mock_resp


@pytest.fixture
def mock_json_error_response():
    """Mock response where JSON decoding raises an error"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.side_effect = Exception("JSON Decode Error")
    return mock_resp


@pytest.fixture
def mock_bad_status_response():
    """Mock response with a non-200 HTTP status code"""
    mock_resp = MagicMock()
    mock_resp.status_code = 400
    return mock_resp


@pytest.fixture
def mock_network_error():
    """Mock a network error when calling requests.post"""
    mock_resp = MagicMock()
    mock_resp.side_effect = Exception("Network error")
    return mock_resp


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_success(mock_requests_post, mock_valid_response):
    """✅ Test successful retrieval of relevant chunks"""
    mock_requests_post.return_value = mock_valid_response

    learning_id = "12345"
    data = ["AI in healthcare", "AI for automation"]
    top_k = 2

    result = await fetch_relevant_chunks(learning_id, data, top_k)

    expected_result = (
        [
            {"id": "123", "text": "AI is transforming industries"},
            {"id": "456", "text": "Machine Learning enhances automation"}
        ],
        []
    )

    assert result == expected_result

    mock_requests_post.assert_called_once_with(
        "http://localhost/v1/getrelevantchunks",
        json={"query_strings": data, "top_k": top_k},
        headers={"Learning-ID": learning_id, "Journey-Type": None},
        timeout=10
    )


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_invalid_json_structure(mock_requests_post, mock_invalid_json_response):
    """✅ Test case when response JSON is missing 'relevant_chunks' key"""
    mock_requests_post.return_value = mock_invalid_json_response

    learning_id = "12345"
    data = ["AI in finance"]
    top_k = 1

    with pytest.raises(UnboundLocalError):
        await fetch_relevant_chunks(learning_id, data, top_k)

    mock_requests_post.assert_called_once()


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_json_decoding_error(mock_requests_post, mock_json_error_response):
    """✅ Test case when JSON decoding raises an error"""
    mock_requests_post.return_value = mock_json_error_response

    learning_id = "12345"
    data = ["AI in robotics"]
    top_k = 3

    with pytest.raises(HTTPException) as exc_info:
        await fetch_relevant_chunks(learning_id, data, top_k)

    assert exc_info.value.status_code == 500
    assert "JSON Decode Error" in exc_info.value.detail

    mock_requests_post.assert_called_once()


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_bad_status(mock_requests_post, mock_bad_status_response):
    """✅ Test case when Document Management Service returns non-200 status"""
    mock_requests_post.return_value = mock_bad_status_response

    learning_id = "12345"
    data = ["AI in finance"]
    top_k = 1

    result = await fetch_relevant_chunks(learning_id, data, top_k)
    output = "An error occurred in fetching relevant chunks, ensure you have the correct headers with the request"

    assert result == output

    mock_requests_post.assert_called_once()


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_network_error(mock_requests_post, mock_network_error):
    """✅ Test case for network error"""
    mock_requests_post.side_effect = Exception("Network error")

    learning_id = "12345"
    data = ["AI in cybersecurity"]
    top_k = 2

    with pytest.raises(HTTPException) as exc_info:
        await fetch_relevant_chunks(learning_id, data, top_k)

    assert exc_info.value.status_code == 500
    assert "Network error" in exc_info.value.detail

    mock_requests_post.assert_called_once()