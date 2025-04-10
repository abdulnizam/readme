from unittest.mock import patch
from utils.auth import decode_token

@patch("app.decode_token")
def test_query_endpoint(mock_decode_token, mock_generate_response, client, mock_config):
    """Test the query endpoint."""

    # 🔐 Mock decoded token values
    mock_decode_token.return_value = (
        "mock-user-id-123", "MockCentre", "Alice", "Smith"
    )

    # Set up mock return value
    mock_generate_response.return_value = (
        "This is a test answer",
        [{"title": "Source 1"}],
    )

    test_data = {
        "query": "What is a test?",
        "chat_history": [],
        "location": "england"
    }

    response = client.post(
        "/query",
        data=json.dumps(test_data),
        content_type="application/json",
        headers={"x-access-token": "mock-token"}
    )

    assert response.status_code == 200