======================================= ERRORS ==============================================================
_________________________________________ ERROR at setup of test_llama3_8b_initialization _________________________________________
ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped request object. Requesting fixture stack:
tests/tests_model/test_ai_models_config.py:4:  def setup_mocked_ai_models(mock_get_settings_and_boto3)
Requested fixture:
tests/conftest.py:35:  def mock_get_settings_and_boto3()
________________________________________ ERROR at setup of test_llama3_70b_initialization _________________________________________
ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped request object. Requesting fixture stack:
tests/tests_model/test_ai_models_config.py:4:  def setup_mocked_ai_models(mock_get_settings_and_boto3)
Requested fixture:
tests/conftest.py:35:  def mock_get_settings_and_boto3()
_____________________________________________ ERROR at setup of test_llama3_8b_invoke _____________________________________________
ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped request object. Requesting fixture stack:
tests/tests_model/test_ai_models_config.py:4:  def setup_mocked_ai_models(mock_get_settings_and_boto3)
Requested fixture:
tests/conftest.py:35:  def mock_get_settings_and_boto3()
____________________________________________ ERROR at setup of test_llama3_70b_invoke _____________________________________________
ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped request object. Requesting fixture stack:
tests/tests_model/test_ai_models_config.py:4:  def setup_mocked_ai_models(mock_get_settings_and_boto3)
Requested fixture:
tests/conftest.py:35:  def mock_get_settings_and_boto3()
===================================================== short test summary info =====================================================
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_8b_initialization - Failed: ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped reques...
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_70b_initialization - Failed: ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped reques...
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_8b_invoke - Failed: ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped reques...
ERROR tests/tests_model/test_ai_models_config.py::test_llama3_70b_invoke - Failed: ScopeMismatch: You tried to access the function scoped fixture mock_get_settings_and_boto3 with a module scoped reques...
======================================================== 4 errors in 0.02s
