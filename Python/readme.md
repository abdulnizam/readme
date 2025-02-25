
tests/tests_model/test_fetch_relevant_chunks.py .F...                                                                                                              [100%]

================================================================================ FAILURES ================================================================================
___________________________________________________________ test_fetch_relevant_chunks_invalid_json_structure ____________________________________________________________

learning_id = '12345', data = ['AI in finance'], top_k = 1, journey_type = None

    async def fetch_relevant_chunks(
        learning_id: str, data: List[str], top_k: int, journey_type: str = None
    ):
        logger.info("Entered fetch_relevant_chunks")
        try:
            http_request = requests
            url = f"{get_settings().services_doc_manager_host}/v1/getrelevantchunks"
            # Intercept headers from request where required.
            request_headers = {"Learning-ID": learning_id, "Journey-Type": journey_type}
    
            logger.info("Attempting to fetch_relevant_chunks")
            response = http_request.post(
                url,
                json={"query_strings": data, "top_k": top_k},
                headers=request_headers,
                timeout=10,
            )
    
            if response.status_code == 200:
                try:
                    relevant_data = response.json()
>                   relevant_chunks = relevant_data["relevant_chunks"]
E                   KeyError: 'relevant_chunks'

src/model/fetch_relevant_chunks.py:37: KeyError

The above exception was the direct cause of the following exception:

learning_id = '12345', data = ['AI in finance'], top_k = 1, journey_type = None

    async def fetch_relevant_chunks(
        learning_id: str, data: List[str], top_k: int, journey_type: str = None
    ):
        logger.info("Entered fetch_relevant_chunks")
        try:
            http_request = requests
            url = f"{get_settings().services_doc_manager_host}/v1/getrelevantchunks"
            # Intercept headers from request where required.
            request_headers = {"Learning-ID": learning_id, "Journey-Type": journey_type}
    
            logger.info("Attempting to fetch_relevant_chunks")
            response = http_request.post(
                url,
                json={"query_strings": data, "top_k": top_k},
                headers=request_headers,
                timeout=10,
            )
    
            if response.status_code == 200:
                try:
                    relevant_data = response.json()
                    relevant_chunks = relevant_data["relevant_chunks"]
                    low_relevancy_flags = relevant_data["low_relevancy_flags"]
                    logger.info("Relevant chunks received from Document Management Service")
                    return relevant_chunks, low_relevancy_flags
                except Exception as error:
>                   raise UnboundLocalError(error) from error
E                   UnboundLocalError: 'relevant_chunks'

src/model/fetch_relevant_chunks.py:42: UnboundLocalError

The above exception was the direct cause of the following exception:

mock_requests_post = <MagicMock name='post' id='4406883664'>, mock_invalid_json_response = <MagicMock name='post()' id='4406551696'>

    @patch("model.fetch_relevant_chunks.requests.post")
    @pytest.mark.asyncio
    async def test_fetch_relevant_chunks_invalid_json_structure(mock_requests_post, mock_invalid_json_response):
        """✅ Test case when response JSON is missing 'relevant_chunks' key"""
        mock_requests_post.return_value = mock_invalid_json_response
    
        learning_id = "12345"
        data = ["AI in finance"]
        top_k = 1
    
        with pytest.raises(UnboundLocalError):
>           await fetch_relevant_chunks(learning_id, data, top_k)

tests/tests_model/test_fetch_relevant_chunks.py:106: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

learning_id = '12345', data = ['AI in finance'], top_k = 1, journey_type = None

    async def fetch_relevant_chunks(
        learning_id: str, data: List[str], top_k: int, journey_type: str = None
    ):
        logger.info("Entered fetch_relevant_chunks")
        try:
            http_request = requests
            url = f"{get_settings().services_doc_manager_host}/v1/getrelevantchunks"
            # Intercept headers from request where required.
            request_headers = {"Learning-ID": learning_id, "Journey-Type": journey_type}
    
            logger.info("Attempting to fetch_relevant_chunks")
            response = http_request.post(
                url,
                json={"query_strings": data, "top_k": top_k},
                headers=request_headers,
                timeout=10,
            )
    
            if response.status_code == 200:
                try:
                    relevant_data = response.json()
                    relevant_chunks = relevant_data["relevant_chunks"]
                    low_relevancy_flags = relevant_data["low_relevancy_flags"]
                    logger.info("Relevant chunks received from Document Management Service")
                    return relevant_chunks, low_relevancy_flags
                except Exception as error:
                    raise UnboundLocalError(error) from error
            else:
                return "An error occurred in fetching relevant chunks, ensure you have the correct headers with the request"
        except Exception as error:
            logger.error("Error in network")
>           raise HTTPException(
                status_code=500,
                detail=f"An error occured in connecting to the document management service: {error}",
            ) from error
E           fastapi.exceptions.HTTPException: 500: An error occured in connecting to the document management service: 'relevant_chunks'

src/model/fetch_relevant_chunks.py:47: HTTPException
--------------------------------------------------------------------------- Captured log call ----------------------------------------------------------------------------
ERROR    model.fetch_relevant_chunks:fetch_relevant_chunks.py:46 Error in network
============================================================================ warnings summary ============================================================================
tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_success
tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_success
tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_success
tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_success
tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_success
tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_success
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                       Stmts   Miss  Cover
--------------------------------------------------------------
src/config.py                                 50      7    86%
src/controller/__init__.py                     0      0   100%
src/controller/routes.py                     238    238     0%
src/main.py                                    8      8     0%
src/model/__init__.py                          0      0   100%
src/model/ai_models_config.py                 10     10     0%
src/model/aws/__init__.py                      0      0   100%
src/model/aws/aws_helpers.py                  38     38     0%
src/model/content_creation_funcs.py          308    308     0%
src/model/continuous_learning_prompts.py      64     64     0%
src/model/fetch_content_for_methods.py        21     21     0%
src/model/fetch_relevant_chunks.py            30      0   100%
src/model/generate_continuous_content.py      67     67     0%
src/model/generate_core_content.py           136    136     0%
src/model/llama3handler.py                    80     80     0%
src/model/prompt_builder.py                   57     57     0%
src/model/regnerate_content.py                17     17     0%
src/model/reprompt_content.py                123    123     0%
src/model/scenario1_prompts.py               189    189     0%
--------------------------------------------------------------
TOTAL                                       1436   1363     5%

======================================================================== short test summary info =========================================================================
FAILED tests/tests_model/test_fetch_relevant_chunks.py::test_fetch_relevant_chunks_invalid_json_structure - fastapi.exceptions.HTTPException: 500: An error occured in connecting to the document management service: 'relevant_chunks'
