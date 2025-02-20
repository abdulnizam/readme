import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch

# Import FastAPI app
from main import app

client = TestClient(app)


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_router():
    """Mock the router used in the FastAPI app."""
    with patch("controller.routes.doc_manager_router_v1") as mock_router:
        mock_router.return_value = "mocked_router"
        yield


def test_app_initialization():
    """Test that the FastAPI app initializes correctly and returns expected response."""
    response = client.get("/v1/liveness")

    assert response.status_code == 200
    assert response.json() == {"message": "TODO: implement liveness route"}


def test_router_inclusion():
    """Test that `doc_manager_router_v1` is included in the app."""
    routes = [route.path for route in app.router.routes]

    assert "/v1/writeknowledgecheck" in routes
    assert "/v1/writepowerpoint" in routes
    assert "/v1/liveness" in routes


@pytest.mark.parametrize("input_data, expected_status, expected_response", [
    ({"data": "valid input"}, 200, {"result": "success"}),  # Happy path
    ({}, 400, {"detail": "Bad request, missing data"}),  # Missing data
    ({"data": None}, 422, {"detail": "Invalid input type"}),  # Invalid type
])
def test_writeknowledgecheck_edge_cases(input_data, expected_status, expected_response):
    """Test /v1/writeknowledgecheck with various inputs"""
    response = client.post("/v1/writeknowledgecheck", json=input_data)

    assert response.status_code == expected_status
    assert response.json() == expected_response


@pytest.mark.parametrize("input_data, expected_status", [
    ({"slides": 5, "content": "Valid presentation"}, 201),  # Normal case
    ({}, 400),  # Missing content
    ({"slides": "invalid"}, 422),  # Wrong type
])
def test_writepowerpoint_edge_cases(input_data, expected_status):
    """Test /v1/writepowerpoint for valid and invalid input handling"""
    response = client.post("/v1/writepowerpoint", json=input_data)

    assert response.status_code == expected_status


def test_cors_enabled():
    """Test that CORS middleware is working correctly"""
    response = client.options("/v1/liveness", headers={"Origin": "http://localhost"})
    
    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://localhost"


def test_404_not_found():
    """Test that an invalid route returns 404"""
    response = client.get("/invalid-route")
    assert response.status_code == 404


def test_healthcheck():
    """Test that a basic health check endpoint works"""
    response = client.get("/v1/health")
    
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}