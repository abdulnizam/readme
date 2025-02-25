import pytest
from unittest.mock import patch, MagicMock
from fastapi import HTTPException


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global fetch_relevant_chunks
    from model.fetch_relevant_chunks import fetch_relevant_chunks


@pytest.fixture
def mock_response():
    """Mock response with correct structure for `fetch_relevant_chunks`"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.return_value = {
        "relevant_chunks": [  # ✅ Updated key to match function expectation
            {"id": "123", "text": "AI is transforming industries"},
            {"id": "456", "text": "Machine Learning enhances automation"}
        ],
        "low_relevancy_flags": []  # ✅ Added to match expected structure
    }
    return mock_resp


@pytest.fixture
def mock_error_response():
    """Mock response with JSON decoding error"""
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.side_effect = Exception("Json Decoding error")
    return mock_resp


@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_success(mock_requests_post, mock_response):
    """Test successful retrieval of relevant chunks"""

    # Mock the request
    mock_requests_post.return_value = mock_response

    learning_id = "12345"
    data = ["AI in healthcare", "AI for automation"]
    top_k = 2

    result = await fetch_relevant_chunks(learning_id, data, top_k)

    # ✅ Updated assertion to expect a tuple (relevant_chunks, low_relevancy_flags)
    expected_result = (
        [
            {"id": "123", "text": "AI is transforming industries"},
            {"id": "456", "text": "Machine Learning enhances automation"}
        ],
        []  # Matching the function's expected return type
    )

    assert result == expected_result

    mock_requests_post.assert_called_once_with(
        "http://localhost/v1/getrelevantchunks",
        json={"query_strings": data, "top_k": top_k},
        headers={"Learning-ID": learning_id, "Journey-Type": None},
        timeout=10
    )