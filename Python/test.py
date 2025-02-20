import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global client, app
    from main import app
    client = TestClient(app)


def test_app_initialization():
    """Test that the FastAPI app initializes correctly."""
    response = client.get("/v1/liveness")
    assert response.status_code == 200
    assert response.json() == {"message": "TODO: implement liveness route"}


def test_router_inclusion():
    """Test that `doc_manager_router_v1` is included in the app."""
    routes = [route.path for route in app.router.routes]

    assert "/v1/writeknowledgecheck" in routes
    assert "/v1/writepowerpoint" in routes
