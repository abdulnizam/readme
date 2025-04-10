import pytest
import json
import sys
from unittest.mock import patch, MagicMock
from flask import Flask
from pathlib import Path

from app import handle_sigterm, handle_azure_openai_error


# Get the absolute path to the project root directory
project_root = Path(__file__).parent.parent.absolute()
sys.path.insert(0, str(project_root))


# Import app module
import app
from modules.errors import AzureOpenAIError


@pytest.fixture
def client():
    """Create a test client for the Flask application."""
    app.is_ready = True  # Set readiness to true for testing
    app.app.config["TESTING"] = True
    with app.app.test_client() as client:
        yield client


@pytest.fixture
def mock_config():
    """Mock the DWPAskConfig."""

    class MockConfig:
        def __init__(self):
            self.countries = ["England", "Wales", "Scotland"]
            self.summarise_prompt_template = "Summarise this."
            self.elaborate_prompt_template = "Elaborate on this."
            self.follow_up_prompt_template = "Generate follow-up questions."

    with patch("app.DWPAskConfig", return_value=MockConfig()):
        yield MockConfig()


# Health endpoint tests
def test_readiness_when_ready(client):
    """Test the readiness endpoint when the app is ready."""

    response = client.get("/readiness")
    assert response.status_code == 200
    assert json.loads(response.data) == {"status": "ready"}


def test_readiness_when_not_ready(client):
    """Test the readiness endpoint when the app is not ready."""

    app.is_ready = False
    response = client.get("/readiness")
    assert response.status_code == 503
    assert json.loads(response.data) == {"status": "not ready"}
    app.is_ready = True  # Reset for other tests


def test_liveness(client):
    """Test the liveness endpoint."""

    response = client.get("/liveness")
    assert response.status_code == 200
    assert json.loads(response.data) == {"status": "alive"}


def test_health(client):
    """Test the health endpoint."""

    response = client.get("/health")
    assert response.status_code == 200
    assert response.data == b"healthcheck"


# Query endpoint test
@patch("app.generate_response")
def test_query_endpoint(mock_generate_response, client, mock_config):
    """Test the query endpoint."""

    # Set up mock return value

    mock_generate_response.return_value = (
        "This is a test answer",
        [{"title": "Source 1"}],
    )

    # Create test data
    test_data = {"query": "What is a test?", "chat_history": [], "location": "england"}

    # Send request
    response = client.post(
        "/query", data=json.dumps(test_data), content_type="application/json"
    )

    # Check results
    assert response.status_code == 200
    response_data = json.loads(response.data)
    assert "answer" in response_data
    assert response_data["answer"] == "This is a test answer"
    assert "citations" in response_data

    # Verify mock was called with correct arguments
    mock_generate_response.assert_called_once()
    call_args = mock_generate_response.call_args
    assert call_args[0][0] == "What is a test?"  # question
    assert call_args[0][1] == []  # chat_history
    assert call_args[0][3] == "england"  # location


# Summarise endpoint test


@patch("app.summarise_response")
def test_summarise_endpoint(mock_summarise_response, client):
    """Test the summarise endpoint."""

    # Set up mock return value
    mock_summarise_response.return_value = "This is a summarized answer"

    # Create test data
    test_data = {
        "prev_chat": {
            "question": "What is a test?",
            "answer": "A test is a procedure to determine qualities, capabilities, etc.",
        }
    }

    # Send request
    response = client.post(
        "/summarise", data=json.dumps(test_data), content_type="application/json"
    )

    # Check results
    assert response.status_code == 200
    response_data = json.loads(response.data)
    assert "summarised_answer" in response_data
    assert response_data["summarised_answer"] == "This is a summarized answer"

    # Verify mock was called with correct arguments
    mock_summarise_response.assert_called_once()


# Elaborate endpoint test
@patch("app.elaborate_response")
def test_elaborate_endpoint(mock_elaborate_response, client):
    """Test the elaborate endpoint."""

    # Set up mock return value
    mock_elaborate_response.return_value = "This is an elaborated answer"

    # Create test data
    test_data = {
        "prev_chat": {
            "question": "What is a test?",
            "answer": "A test is a procedure.",
            "citations": [{"title": "Source 1"}],
        }
    }

    # Send request

    response = client.post(
        "/elaborate", data=json.dumps(test_data), content_type="application/json"
    )

    # Check results
    assert response.status_code == 200
    response_data = json.loads(response.data)
    assert "elaborated_answer" in response_data
    assert response_data["elaborated_answer"] == "This is an elaborated answer"

    # Verify mock was called with correct arguments
    mock_elaborate_response.assert_called_once()


# Followup endpoint test
@patch("app.generate_follow_up_qs")
def test_followup_endpoint(mock_generate_follow_up_qs, client):
    """Test the followup endpoint."""

    # Set up mock return value
    mock_generate_follow_up_qs.return_value = [
        "What are the types of tests?",
        "How to prepare for a test?",
        "Why are tests important?",
    ]

    # Create test data
    test_data = {
        "prev_chat": {
            "question": "What is a test?",
            "answer": "A test is a procedure.",
            "citations": [{"title": "Source 1"}],
        }
    }

    # Send request
    response = client.post(
        "/followup", data=json.dumps(test_data), content_type="application/json"
    )

    # Check results
    assert response.status_code == 200
    response_data = json.loads(response.data)
    assert "follow_up_qs" in response_data
    assert len(response_data["follow_up_qs"]) == 3
    assert "What are the types of tests?" in response_data["follow_up_qs"]

    # Verify mock was called with correct arguments
    mock_generate_follow_up_qs.assert_called_once()


@patch("app.handle_sigterm")
def test_handle_sigterm(param):
    """
    Test the sigterm function
    """
    mock_signal = MagicMock()
    mock_frame = MagicMock()

    global is_ready
    is_ready = True

    with patch("time.sleep") as mock_sleep, patch(
        "builtins.print"
    ) as mock_print, patch("builtins.exit") as mock_exit:

        handle_sigterm(mock_signal, mock_frame)

        mock_sleep.assert_called_once_with(5)
        mock_print.assert_called_once_with("Graceful shutdown complete")
        mock_exit.assert_called_once_with(0)


def test_handle_azure_openai_error_app_context():
    """
    Test Azure OpenAI Error with app context
    """
    app = Flask(__name__)

    error_message = "Content filter triggered"
    status_code = 422
    payload = {"detail": "Response was filtered due to content policy"}

    mock_error = MagicMock(spec=AzureOpenAIError)
    mock_error.message = error_message
    mock_error.status_code = status_code

    expected_dict = payload.copy()
    expected_dict["message"] = error_message
    mock_error.to_dict.return_value = expected_dict

    with app.app_context():
        response, returned_status_code = handle_azure_openai_error(mock_error)

    assert returned_status_code == status_code

    response_data = json.loads(response.get_data(as_text=True))
    assert response_data == expected_dict
    assert response_data["message"] == error_message



FAILED tests/test_app.py::test_query_endpoint - KeyError: 'HTTP_X_ACCESS_TOKEN'
FAILED tests/test_app.py::test_summarise_endpoint - KeyError: 'HTTP_X_ACCESS_TOKEN'
FAILED tests/test_app.py::test_elaborate_endpoint - KeyError: 'HTTP_X_ACCESS_TOKEN'
FAILED tests/test_app.py::test_followup_endpoint - KeyError: 'HTTP_X_ACCESS_TOKEN'



tests/test_app.py:203: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
.venv/lib/python3.12/site-packages/werkzeug/test.py:1167: in post
    return self.open(*args, **kw)
.venv/lib/python3.12/site-packages/flask/testing.py:234: in open
    response = super().open(
.venv/lib/python3.12/site-packages/werkzeug/test.py:1116: in open
    response_parts = self.run_wsgi_app(request.environ, buffered=buffered)
.venv/lib/python3.12/site-packages/werkzeug/test.py:988: in run_wsgi_app
    rv = run_wsgi_app(self.application, environ, buffered=buffered)
.venv/lib/python3.12/site-packages/werkzeug/test.py:1264: in run_wsgi_app
    app_rv = app(environ, start_response)
.venv/lib/python3.12/site-packages/flask/app.py:1536: in __call__
    return self.wsgi_app(environ, start_response)
.venv/lib/python3.12/site-packages/flask/app.py:1514: in wsgi_app
    response = self.handle_exception(e)
.venv/lib/python3.12/site-packages/flask_cors/extension.py:194: in wrapped_function
    return cors_after_request(app.make_response(f(*args, **kwargs)))
.venv/lib/python3.12/site-packages/flask/app.py:1511: in wsgi_app
    response = self.full_dispatch_request()
.venv/lib/python3.12/site-packages/flask/app.py:919: in full_dispatch_request
    rv = self.handle_user_exception(e)
.venv/lib/python3.12/site-packages/flask_cors/extension.py:194: in wrapped_function
    return cors_after_request(app.make_response(f(*args, **kwargs)))
.venv/lib/python3.12/site-packages/flask/app.py:917: in full_dispatch_request
    rv = self.dispatch_request()
.venv/lib/python3.12/site-packages/flask/app.py:902: in dispatch_request
    return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]
.venv/lib/python3.12/site-packages/asgiref/sync.py:254: in __call__
    return call_result.result()
../../../../../.homebrew/Cellar/python@3.12/3.12.5/Frameworks/Python.framework/Versions/3.12/lib/python3.12/concurrent/futures/_base.py:449: in result
    return self.__get_result()
../../../../../.homebrew/Cellar/python@3.12/3.12.5/Frameworks/Python.framework/Versions/3.12/lib/python3.12/concurrent/futures/_base.py:401: in __get_result
    raise self._exception
.venv/lib/python3.12/site-packages/asgiref/sync.py:331: in main_wrap
    result = await self.awaitable(*args, **kwargs)
app.py:179: in followup
    message_id = await handle_request(
db/utils/posting_utils.py:198: in handle_request
    access_token = request.headers["x-access-token"]
.venv/lib/python3.12/site-packages/werkzeug/datastructures/headers.py:628: in __getitem__
    return self._get_key(key)
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = EnvironHeaders([('User-Agent', 'Werkzeug/3.1.3'), ('Host', 'localhost'), ('Content-Type', 'application/json'), ('Content-Length', '120')])
key = 'X_ACCESS_TOKEN'

    def _get_key(self, key: str) -> str:
        if not isinstance(key, str):
            raise BadRequestKeyError(key)
    
        key = key.upper().replace("-", "_")
    
        if key in {"CONTENT_TYPE", "CONTENT_LENGTH"}:
            return self.environ[key]  # type: ignore[no-any-return]
    
>       return self.environ[f"HTTP_{key}"]  # type: ignore[no-any-return]
E       KeyError: 'HTTP_X_ACCESS_TOKEN'

.venv/lib/python3.12/site-packages/werkzeug/datastructures/headers.py:639: KeyError
