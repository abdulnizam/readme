
tests/tests_model/test_fetch_content_for_methods.py F..                                                                                    [100%]

==================================================================== FAILURES ====================================================================
______________________________________________________ test_get_content_for_methods_success ______________________________________________________

self = <MagicMock name='get' id='4684542160'>, args = ('http://localhost/v1/topicgenerationvariables',)
kwargs = {'headers': {'Learning-ID': '12345'}, 'timeout': 3}
expected = call('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': '12345'}, timeout=3)
actual = call('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': <MagicMock spec='Request' id='4628729872'>}, timeout=3)
_error_message = <function NonCallableMock.assert_called_with.<locals>._error_message at 0x1172fe5c0>, cause = None

    def assert_called_with(self, /, *args, **kwargs):
        """assert that the last call was made with the specified arguments.
    
        Raises an AssertionError if the args and keyword args passed in are
        different to the last call to the mock."""
        if self.call_args is None:
            expected = self._format_mock_call_signature(args, kwargs)
            actual = 'not called.'
            error_message = ('expected call not found.\nExpected: %s\n  Actual: %s'
                    % (expected, actual))
            raise AssertionError(error_message)
    
        def _error_message():
            msg = self._format_mock_failure_message(args, kwargs)
            return msg
        expected = self._call_matcher(_Call((args, kwargs), two=True))
        actual = self._call_matcher(self.call_args)
        if actual != expected:
            cause = expected if isinstance(expected, Exception) else None
>           raise AssertionError(_error_message()) from cause
E           AssertionError: expected call not found.
E           Expected: get('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': '12345'}, timeout=3)
E             Actual: get('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': <MagicMock spec='Request' id='4628729872'>}, timeout=3)

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:939: AssertionError

During handling of the above exception, another exception occurred:

self = <MagicMock name='get' id='4684542160'>, args = ('http://localhost/v1/topicgenerationvariables',)
kwargs = {'headers': {'Learning-ID': '12345'}, 'timeout': 3}

    def assert_called_once_with(self, /, *args, **kwargs):
        """assert that the mock was called exactly once and that that call was
        with the specified arguments."""
        if not self.call_count == 1:
            msg = ("Expected '%s' to be called once. Called %s times.%s"
                   % (self._mock_name or 'mock',
                      self.call_count,
                      self._calls_repr()))
            raise AssertionError(msg)
>       return self.assert_called_with(*args, **kwargs)
E       AssertionError: expected call not found.
E       Expected: get('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': '12345'}, timeout=3)
E         Actual: get('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': <MagicMock spec='Request' id='4628729872'>}, timeout=3)
E       
E       pytest introspection follows:
E       
E       Kwargs:
E       assert {'headers': {... 'timeout': 3} == {'headers': {... 'timeout': 3}
E         
E         Omitting 1 identical items, use -vv to show
E         Differing items:
E         {'headers': {'Learning-ID': <MagicMock spec='Request' id='4628729872'>}} != {'headers': {'Learning-ID': '12345'}}
E         Use -v to get more diff

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:951: AssertionError

During handling of the above exception, another exception occurred:

mock_requests_get = <MagicMock name='get' id='4684542160'>, mock_request = <MagicMock spec='Request' id='4628729872'>
mock_response = <MagicMock name='get()' id='4622350160'>

    @patch("model.fetch_content_for_methods.requests.get")
    @pytest.mark.asyncio
    async def test_get_content_for_methods_success(mock_requests_get, mock_request, mock_response):
        """Test successful content retrieval from Document Management Service"""
    
        # Mock get_settings to return fake config
    
        # Mock requests.get to return fake response
        mock_requests_get.return_value = mock_response
    
        result = await get_content_for_methods(mock_request)
    
        assert result == {
            "name": "AI Learning Module",
            "topics": ["Introduction to AI", "Deep Learning Basics"]
        }
    
>       mock_requests_get.assert_called_once_with(
            "http://localhost/v1/topicgenerationvariables",
            headers={"Learning-ID": "12345"},
            timeout=3
        )
E       AssertionError: expected call not found.
E       Expected: get('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': '12345'}, timeout=3)
E         Actual: get('http://localhost/v1/topicgenerationvariables', headers={'Learning-ID': <MagicMock spec='Request' id='4628729872'>}, timeout=3)
E       
E       pytest introspection follows:
E       
E       Kwargs:
E       assert {'headers': {... 'timeout': 3} == {'headers': {... 'timeout': 3}
E         
E         Omitting 1 identical items, use -vv to show
E         Differing items:
E         {'headers': {'Learning-ID': <MagicMock spec='Request' id='4628729872'>}} != {'headers': {'Learning-ID': '12345'}}
E         Use -v to get more diff

tests/tests_model/test_fetch_content_for_methods.py:50: AssertionError
--------------------------------------------------------------- Captured log setup ---------------------------------------------------------------
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
================================================================ warnings summary ================================================================
tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success
tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success
tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success
tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success
tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success
tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success
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
src/model/fetch_content_for_methods.py        21      0   100%
src/model/fetch_relevant_chunks.py            30     30     0%
src/model/generate_continuous_content.py      67     67     0%
src/model/generate_core_content.py           136    136     0%
src/model/llama3handler.py                    80     80     0%
src/model/prompt_builder.py                   57     57     0%
src/model/regnerate_content.py                17     17     0%
src/model/reprompt_content.py                123    123     0%
src/model/scenario1_prompts.py               189    189     0%
--------------------------------------------------------------
TOTAL                                       1436   1372     4%

============================================================ short test summary info =============================================================
FAILED tests/tests_model/test_fetch_content_for_methods.py::test_get_content_for_methods_success - AssertionError: expected call not found.
