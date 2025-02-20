
tests/test_main.py .FFFFFF.F.F                                                                                     [100%]

======================================================== FAILURES ========================================================
_________________________________________________ test_router_inclusion __________________________________________________

    def test_router_inclusion():
        """Test that `doc_manager_router_v1` is included in the app."""
        routes = [route.path for route in app.router.routes]
    
        assert "/v1/writeknowledgecheck" in routes
        assert "/v1/writepowerpoint" in routes
>       assert "/v1/liveness" in routes
E       AssertionError: assert '/v1/liveness' in ['/openapi.json', '/docs', '/docs/oauth2-redirect', '/redoc', '/v1/uploadnameandpurpose', '/v1/scanfile', ...]

tests/test_main.py:33: AssertionError
________________________ test_writeknowledgecheck_edge_cases[input_data0-200-expected_response0] _________________________

input_data = {'data': 'valid input'}, expected_status = 200, expected_response = {'result': 'success'}

    @pytest.mark.parametrize("input_data, expected_status, expected_response", [
        ({"data": "valid input"}, 200, {"result": "success"}),  # Happy path
        ({}, 400, {"detail": "Bad request, missing data"}),  # Missing data
        ({"data": None}, 422, {"detail": "Invalid input type"}),  # Invalid type
    ])
    def test_writeknowledgecheck_edge_cases(input_data, expected_status, expected_response):
        """Test /v1/writeknowledgecheck with various inputs"""
        response = client.post("/v1/writeknowledgecheck", json=input_data)
    
>       assert response.status_code == expected_status
E       assert 422 == 200
E        +  where 422 = <Response [422 Unprocessable Entity]>.status_code

tests/test_main.py:45: AssertionError
________________________ test_writeknowledgecheck_edge_cases[input_data1-400-expected_response1] _________________________

input_data = {}, expected_status = 400, expected_response = {'detail': 'Bad request, missing data'}

    @pytest.mark.parametrize("input_data, expected_status, expected_response", [
        ({"data": "valid input"}, 200, {"result": "success"}),  # Happy path
        ({}, 400, {"detail": "Bad request, missing data"}),  # Missing data
        ({"data": None}, 422, {"detail": "Invalid input type"}),  # Invalid type
    ])
    def test_writeknowledgecheck_edge_cases(input_data, expected_status, expected_response):
        """Test /v1/writeknowledgecheck with various inputs"""
        response = client.post("/v1/writeknowledgecheck", json=input_data)
    
>       assert response.status_code == expected_status
E       assert 422 == 400
E        +  where 422 = <Response [422 Unprocessable Entity]>.status_code

tests/test_main.py:45: AssertionError
________________________ test_writeknowledgecheck_edge_cases[input_data2-422-expected_response2] _________________________

input_data = {'data': None}, expected_status = 422, expected_response = {'detail': 'Invalid input type'}

    @pytest.mark.parametrize("input_data, expected_status, expected_response", [
        ({"data": "valid input"}, 200, {"result": "success"}),  # Happy path
        ({}, 400, {"detail": "Bad request, missing data"}),  # Missing data
        ({"data": None}, 422, {"detail": "Invalid input type"}),  # Invalid type
    ])
    def test_writeknowledgecheck_edge_cases(input_data, expected_status, expected_response):
        """Test /v1/writeknowledgecheck with various inputs"""
        response = client.post("/v1/writeknowledgecheck", json=input_data)
    
        assert response.status_code == expected_status
>       assert response.json() == expected_response
E       AssertionError: assert {'detail': [{...: 'missing'}]} == {'detail': 'I...d input type'}
E         
E         Differing items:
E         {'detail': [{'input': {'data': None}, 'loc': ['body', 'extension'], 'msg': 'Field required', 'type': 'missing'}, {'inp... 'type': 'missing'}, {'input': {'data': None}, 'loc': ['body', 'topics'], 'msg': 'Field required', 'type': 'missing'}]} != {'detail': 'Invalid input type'}
E         Use -v to get more diff

tests/test_main.py:46: AssertionError
____________________________________ test_writepowerpoint_edge_cases[input_data0-201] ____________________________________

input_data = {'content': 'Valid presentation', 'slides': 5}, expected_status = 201

    @pytest.mark.parametrize("input_data, expected_status", [
        ({"slides": 5, "content": "Valid presentation"}, 201),  # Normal case
        ({}, 400),  # Missing content
        ({"slides": "invalid"}, 422),  # Wrong type
    ])
    def test_writepowerpoint_edge_cases(input_data, expected_status):
        """Test /v1/writepowerpoint for valid and invalid input handling"""
        response = client.post("/v1/writepowerpoint", json=input_data)
    
>       assert response.status_code == expected_status
E       assert 422 == 201
E        +  where 422 = <Response [422 Unprocessable Entity]>.status_code

tests/test_main.py:58: AssertionError
____________________________________ test_writepowerpoint_edge_cases[input_data1-400] ____________________________________

input_data = {}, expected_status = 400

    @pytest.mark.parametrize("input_data, expected_status", [
        ({"slides": 5, "content": "Valid presentation"}, 201),  # Normal case
        ({}, 400),  # Missing content
        ({"slides": "invalid"}, 422),  # Wrong type
    ])
    def test_writepowerpoint_edge_cases(input_data, expected_status):
        """Test /v1/writepowerpoint for valid and invalid input handling"""
        response = client.post("/v1/writepowerpoint", json=input_data)
    
>       assert response.status_code == expected_status
E       assert 422 == 400
E        +  where 422 = <Response [422 Unprocessable Entity]>.status_code

tests/test_main.py:58: AssertionError
___________________________________________________ test_cors_enabled ____________________________________________________

    def test_cors_enabled():
        """Test that CORS middleware is working correctly"""
        response = client.options("/v1/liveness", headers={"Origin": "http://localhost"})
    
>       assert response.status_code == 200
E       assert 405 == 200
E        +  where 405 = <Response [405 Method Not Allowed]>.status_code

tests/test_main.py:65: AssertionError
____________________________________________________ test_healthcheck ____________________________________________________

    def test_healthcheck():
        """Test that a basic health check endpoint works"""
        response = client.get("/v1/health")
    
>       assert response.status_code == 200
E       assert 404 == 200
E        +  where 404 = <Response [404 Not Found]>.status_code

tests/test_main.py:79: AssertionError
==================================================== warnings summary ====================================================
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

<frozen importlib._bootstrap>:241
<frozen importlib._bootstrap>:241
  <frozen importlib._bootstrap>:241: DeprecationWarning: builtin type SwigPyPacked has no __module__ attribute

<frozen importlib._bootstrap>:241
<frozen importlib._bootstrap>:241
  <frozen importlib._bootstrap>:241: DeprecationWarning: builtin type SwigPyObject has no __module__ attribute

<frozen importlib._bootstrap>:241
  <frozen importlib._bootstrap>:241: DeprecationWarning: builtin type swigvarlink has no __module__ attribute

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                                                Stmts   Miss  Cover
---------------------------------------------------------------------------------------
src/__init__.py                                                         0      0   100%
src/config.py                                                          48      7    85%
src/controller/__init__.py                                              0      0   100%
src/controller/routes.py                                              263    176    33%
src/main.py                                                             8      0   100%
src/model/__init__.py                                                   0      0   100%
src/model/aws/__init__.py                                               0      0   100%
src/model/aws/aws_helpers.py                                           38     26    32%
src/model/chunk_and_vectorise.py                                       45     36    20%
src/model/content_creation/__init__.py                                  0      0   100%
src/model/content_creation/content_creation_funcs.py                   56     56     0%
src/model/content_creation/llama3handler.py                            44     44     0%
src/model/content_creation/prompt_builder.py                           54     54     0%
src/model/csi/__init__.py                                               0      0   100%
src/model/csi/secrets_loader.py                                        22     18    18%
src/model/dao.py                                                      131    111    15%
src/model/db_connection.py                                             25     19    24%
src/model/gail_util_funcs.py                                           64     55    14%
src/model/generate_powerpoint/__init__.py                               0      0   100%
src/model/generate_powerpoint/combine_script_and_bullets.py            10     10     0%
src/model/generate_powerpoint/generate_powerpoint_presentation.py     226    187    17%
src/model/get_relevant_chunks.py                                       64     51    20%
src/model/pii_mask.py                                                  38     30    21%
src/model/process_uploaded_file.py                                     88     71    19%
src/model/scan_file_for_malware.py                                     22     13    41%
---------------------------------------------------------------------------------------
TOTAL                                                                1246    964    23%

================================================ short test summary info =================================================
FAILED tests/test_main.py::test_router_inclusion - AssertionError: assert '/v1/liveness' in ['/openapi.json', '/docs', '/docs/oauth2-redirect', '/redoc', '/v1/uploadnam...
FAILED tests/test_main.py::test_writeknowledgecheck_edge_cases[input_data0-200-expected_response0] - assert 422 == 200
FAILED tests/test_main.py::test_writeknowledgecheck_edge_cases[input_data1-400-expected_response1] - assert 422 == 400
FAILED tests/test_main.py::test_writeknowledgecheck_edge_cases[input_data2-422-expected_response2] - AssertionError: assert {'detail': [{...: 'missing'}]} == {'detail': 'I...d input type'}
FAILED tests/test_main.py::test_writepowerpoint_edge_cases[input_data0-201] - assert 422 == 201
FAILED tests/test_main.py::test_writepowerpoint_edge_cases[input_data1-400] - assert 422 == 400
FAILED tests/test_main.py::test_cors_enabled - assert 405 == 200
FAILED tests/test_main.py::test_healthcheck - assert 404 == 200
======================================== 8 failed, 3 passed, 7 warnings in 2.81s =========================================
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
