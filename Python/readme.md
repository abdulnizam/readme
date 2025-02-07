
tests/test_main.py FFF                                                                                                      [100%]

============================================================ FAILURES =============================================================
_____________________________________________________ test_app_initialization _____________________________________________________

    def test_app_initialization():
        """Test that the FastAPI app initializes correctly."""
        response = client.get("/v1/liveness")  # Assuming `/v1/liveness` is a health check endpoint
>       assert response.status_code == 200
E       assert 404 == 200
E        +  where 404 = <Response [404 Not Found]>.status_code

tests/test_main.py:14: AssertionError
------------------------------------------------------ Captured stderr setup ------------------------------------------------------
2025-02-07 16:43:49,733 - config - ERROR - config.py:79 - Unable to locate credentials
2025-02-07 16:43:49,736 - config - ERROR - config.py:79 - Unable to locate credentials
2025-02-07 16:43:49,739 - config - ERROR - config.py:79 - Unable to locate credentials
2025-02-07 16:43:49,741 - config - ERROR - config.py:79 - Unable to locate credentials
------------------------------------------------------- Captured log setup --------------------------------------------------------
ERROR    config:config.py:79 Unable to locate credentials
ERROR    config:config.py:79 Unable to locate credentials
ERROR    config:config.py:79 Unable to locate credentials
ERROR    config:config.py:79 Unable to locate credentials
------------------------------------------------------ Captured stderr call -------------------------------------------------------
2025-02-07 16:43:50,380 - httpx - INFO - _client.py:1025 - HTTP Request: GET http://testserver/v1/liveness "HTTP/1.1 404 Not Found"
-------------------------------------------------------- Captured log call --------------------------------------------------------
INFO     httpx:_client.py:1025 HTTP Request: GET http://testserver/v1/liveness "HTTP/1.1 404 Not Found"
______________________________________________________ test_cors_middleware _______________________________________________________

    def test_cors_middleware():
        """Test that CORS middleware is configured correctly."""
        assert app.middleware_stack is not None
    
        cors_config = None
        for middleware in app.user_middleware:
            if isinstance(middleware.cls, CORSMiddleware):
                cors_config = middleware
                break
    
>       assert cors_config is not None, "CORS middleware is missing"
E       AssertionError: CORS middleware is missing
E       assert None is not None

tests/test_main.py:27: AssertionError
______________________________________________________ test_router_inclusion ______________________________________________________

    def test_router_inclusion():
        """Test that `generate_content_router_v1` is included in the app."""
        routes = [route.path for route in app.router.routes]
>       assert "/v1/topicoutlines" in routes  # Adjust based on actual endpoints
E       AssertionError: assert '/v1/topicoutlines' in ['/openapi.json', '/docs', '/docs/oauth2-redirect', '/redoc', '/v1/generate/topicoutlines', '/v1/generate/regeneratetopicoutlines', ...]

tests/test_main.py:36: AssertionError
======================================================== warnings summary =========================================================
../venv3/lib/python3.13/site-packages/pydantic/fields.py:1032
../venv3/lib/python3.13/site-packages/pydantic/fields.py:1032
../venv3/lib/python3.13/site-packages/pydantic/fields.py:1032
../venv3/lib/python3.13/site-packages/pydantic/fields.py:1032
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv3/lib/python3.13/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
tests/test_main.py::test_app_initialization
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv3/lib/python3.13/site-packages/pydantic/v1/typing.py:68: DeprecationWarning: Failing to pass a value to the 'type_params' parameter of 'typing.ForwardRef._evaluate' is deprecated, as it leads to incorrect behaviour when calling typing.ForwardRef._evaluate on a stringified annotation that references a PEP 695 type parameter. It will be disallowed in Python 3.15.
    return cast(Any, type_)._evaluate(globalns, localns, recursive_guard=set())

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
===================================================== short test summary info =====================================================
FAILED tests/test_main.py::test_app_initialization - assert 404 == 200
FAILED tests/test_main.py::test_cors_middleware - AssertionError: CORS middleware is missing
FAILED tests/test_main.py::test_router_inclusion - AssertionError: assert '/v1/topicoutlines' in ['/openapi.json', '/docs', '/docs/oauth2-redirect', '/redoc', '/v1/generate/topi...
