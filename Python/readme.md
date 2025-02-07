
============================================================= ERRORS ==============================================================
_________________________________________ ERROR at setup of test_llama3_8b_initialization _________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4614027456'>, <MagicMock name='client' id='4627415792'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_ai_models(mock_get_settings_and_boto3):
        """Apply mocks before importing `llama3_8b` and `llama3_70b`"""
>       with mock_get_settings_and_boto3:  # ✅ Use the fixture from `conftest.py`
E       TypeError: 'tuple' object does not support the context manager protocol

tests/tests_model/test_ai_models_config.py:7: TypeError
------------------------------------------------------- Captured log setup --------------------------------------------------------
ERROR    config:config.py:79 Unable to locate credentials
ERROR    config:config.py:79 Unable to locate credentials
ERROR    config:config.py:79 Unable to locate credentials
ERROR    config:config.py:79 Unable to locate credentials
________________________________________ ERROR at setup of test_llama3_70b_initialization _________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4614027456'>, <MagicMock name='client' id='4627415792'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_ai_models(mock_get_settings_and_boto3):
        """Apply mocks before importing `llama3_8b` and `llama3_70b`"""
>       with mock_get_settings_and_boto3:  # ✅ Use the fixture from `conftest.py`
E       TypeError: 'tuple' object does not support the context manager protocol

tests/tests_model/test_ai_models_config.py:7: TypeError
_____________________________________________ ERROR at setup of test_llama3_8b_invoke _____________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4614027456'>, <MagicMock name='client' id='4627415792'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_ai_models(mock_get_settings_and_boto3):
        """Apply mocks before importing `llama3_8b` and `llama3_70b`"""
>       with mock_get_settings_and_boto3:  # ✅ Use the fixture from `conftest.py`
E       TypeError: 'tuple' object does not support the context manager protocol

tests/tests_model/test_ai_models_config.py:7: TypeError
____________________________________________ ERROR at setup of test_llama3_70b_invoke _____________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4614027456'>, <MagicMock name='client' id='4627415792'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_ai_models(mock_get_settings_and_boto3):
        """Apply mocks before importing `llama3_8b` and `llama3_70b`"""
>       with mock_get_settings_and_boto3:  # ✅ Use the fixture from `conftest.py`
E       TypeError: 'tuple' object does not support the context manager protocol

tests/tests_model/test_ai_models_config.py:7: TypeError
======================================================== warnings summary =========================================================
tests/tests_model/test_ai_models_config.py::test_llama3_8b_initialization
tests/tests_model/test_ai_models_config.py::test_llama3_8b_initialization
tests/tests_model/test_ai_models_config.py::test_llama3_8b_initialization
tests/tests_model/test_ai_models_config.py::test_llama3_8b_initialization
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv3/lib/python3.13/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
===================================================== short test summary info =====================================================
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_8b_initialization - TypeError: 'tuple' object does not support the context manager protocol
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_70b_initialization - TypeError: 'tuple' object does not support the context manager protocol
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_8b_invoke - TypeError: 'tuple' object does not support the context manager protocol
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_70b_invoke - TypeError: 'tuple' object does not support the context manager protocol
================================================== 4 warnings, 4 errors in 5.71s ======================================
