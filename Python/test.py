@patch("model.fetch_relevant_chunks.requests.post")
@pytest.mark.asyncio
async def test_fetch_relevant_chunks_invalid_json_structure(mock_requests_post, mock_invalid_json_response):
    """✅ Test case when response JSON is missing 'relevant_chunks' key"""
    mock_requests_post.return_value = mock_invalid_json_response

    learning_id = "12345"
    data = ["AI in finance"]
    top_k = 1

    # Expecting HTTPException (500) instead of UnboundLocalError
    with pytest.raises(HTTPException) as exc_info:
        await fetch_relevant_chunks(learning_id, data, top_k)

    assert exc_info.value.status_code == 500
    assert "relevant_chunks" in exc_info.value.detail  # Ensure error message includes the missing key

    mock_requests_post.assert_called_once()