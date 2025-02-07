import pytest
from fastapi.testclient import TestClient
from fastapi.middleware.cors import CORSMiddleware

@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global client, app
    from main import app
    client = TestClient(app)

def test_app_initialization():
    """Test that the FastAPI app initializes correctly."""
    response = client.get("/v1/generate/liveness")  # ✅ Fixed route
    assert response.status_code == 200
    assert response.json() == {"message": "TODO: implement liveness route"}

def test_cors_middleware():
    """Test that CORS middleware is configured correctly."""
    cors_config = None
    for middleware in app.user_middleware:
        if isinstance(middleware.cls, CORSMiddleware):
            cors_config = middleware
            break

    assert cors_config is not None, "CORS middleware is missing"
    assert cors_config.options["allow_origins"] == ["http://localhost", "http://localhost:8083"]
    assert cors_config.options["allow_credentials"] is True
    assert cors_config.options["allow_methods"] == ["*"]
    assert cors_config.options["allow_headers"] == ["*"]

def test_router_inclusion():
    """Test that `generate_content_router_v1` is included in the app."""
    routes = [route.path for route in app.router.routes]

    # ✅ Adjusted paths to match actual routes
    assert "/v1/generate/topicoutlines" in routes
    assert "/v1/generate/regeneratetopicoutlines" in routes