import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_app_initialization():
    """Test that the FastAPI app initializes correctly."""
    response = client.get("/v1/liveness")  # Assuming `/v1/liveness` is a health check endpoint
    assert response.status_code == 200
    assert response.json() == {"message": "TODO: implement liveness route"}  # Modify based on actual response

def test_cors_middleware():
    """Test that CORS middleware is configured correctly."""
    assert app.middleware_stack is not None

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
    assert "/v1/topicoutlines" in routes  # Adjust based on actual endpoints
    assert "/v1/regeneratetopicoutlines" in routes  # Modify based on registered endpoints