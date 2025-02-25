
tests/tests_model/test_pii_mask.py FFF.                                                                                                                                                                       [100%]

===================================================================================================== FAILURES ======================================================================================================
_______________________________________________________________________________________________ test_guardrail_check ________________________________________________________________________________________________

mock_get_settings = <MagicMock name='get_settings' id='4562990608'>, mock_get_client = <MagicMock name='get_client' id='4724412944'>
mock_guardrail_response = {'assessments': [{'sensitiveInformationPolicy': {'piiEntities': [{'type': 'NAME'}]}}], 'outputs': [{'text': 'Hello, {NAME}'}]}

    @patch("model.pii_mask.get_client")
    @patch("model.pii_mask.get_settings")
    def test_guardrail_check(
        mock_get_settings, mock_get_client, mock_guardrail_response
    ):
        """Test guardrail_check function"""
    
        # Mock settings
        mock_settings = MagicMock()
        mock_settings.bedrock_pii_guardrail_id = "test-guardrail-id"
        mock_settings.bedrock_pii_guardrail_version = "v1"
        mock_get_settings.return_value = mock_settings
    
        # Mock Bedrock client
        mock_client = MagicMock()
        mock_get_client.return_value = mock_client
    
        # Mock Bedrock response
        mock_client.apply_guardrail.return_value = mock_guardrail_response
    
        # Call function
        input_text = "What is UC?"
        source = "test-source"
>       is_masked, output_text = pii_guardrail_check(input_text, source)
E       NameError: name 'pii_guardrail_check' is not defined

tests/tests_model/test_pii_mask.py:73: NameError
------------------------------------------------------------------------------------------------ Captured log setup -------------------------------------------------------------------------------------------------
ERROR    config:config.py:107 Unable to locate credentials
ERROR    config:config.py:107 Unable to locate credentials
_________________________________________________________________________________________________ test_replace_pii __________________________________________________________________________________________________

mock_open = <MagicMock name='open' id='4559362320'>, mock_json_load = <MagicMock name='load' id='4559027792'>
mock_guardrail_response = {'assessments': [{'sensitiveInformationPolicy': {'piiEntities': [{'type': 'NAME'}]}}], 'outputs': [{'text': 'Hello, {NAME}'}]}, mock_dummy_data = {'NAME': 'DWP Gail'}

    @patch("model.pii_mask.json.load")
    @patch("builtins.open", new_callable=MagicMock)
    def test_replace_pii(
        mock_open, mock_json_load, mock_guardrail_response, mock_dummy_data
    ):
        """Test replace_pii function"""
    
        # Mock loading dummy_data.json
        mock_json_load.return_value = mock_dummy_data
    
        # Call function
>       result = replace_pii(mock_guardrail_response)
E       TypeError: replace_pii() missing 1 required positional argument: 'pii_guardrail_output'

tests/tests_model/test_pii_mask.py:93: TypeError
____________________________________________________________________________________________ test_guardrail_check_no_pii ____________________________________________________________________________________________

mock_get_settings = <MagicMock name='get_settings' id='4559155792'>, mock_get_client = <MagicMock name='get_client' id='4559150096'>, mock_guardrail_response_no_outputs = {'outputs': []}

    @patch("model.pii_mask.get_client")
    @patch("model.pii_mask.get_settings")
    def test_guardrail_check_no_pii(
        mock_get_settings, mock_get_client, mock_guardrail_response_no_outputs
    ):
        """
        Test guardrail_check when no PII is detected.
        This covers where the response['outputs'] list is empty.
        """
    
        # Mock settings
        mock_settings = MagicMock()
        mock_settings.bedrock_pii_guardrail_id = "test-guardrail-id"
        mock_settings.bedrock_pii_guardrail_version = "v1"
        mock_get_settings.return_value = mock_settings
    
        # Mock Bedrock client
        mock_client = MagicMock()
        mock_get_client.return_value = mock_client
    
        # Mock Bedrock response (No outputs)
        mock_client.apply_guardrail.return_value = (
            mock_guardrail_response_no_outputs
        )
    
        # Call function
        input_text = "what is UC?"
        source = "test-source"
>       is_masked, output_text = pii_guardrail_check(input_text, source)
E       NameError: name 'pii_guardrail_check' is not defined

tests/tests_model/test_pii_mask.py:128: NameError
================================================================================================= warnings summary ==================================================================================================
tests/tests_model/test_pii_mask.py::test_guardrail_check
tests/tests_model/test_pii_mask.py::test_guardrail_check
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                                                Stmts   Miss  Cover
---------------------------------------------------------------------------------------
src/__init__.py                                                         0      0   100%
src/config.py                                                          48      7    85%
src/controller/__init__.py                                              0      0   100%
src/controller/routes.py                                              214    214     0%
src/main.py                                                             8      8     0%
src/model/__init__.py                                                   0      0   100%
src/model/aws/__init__.py                                               0      0   100%
src/model/aws/aws_helpers.py                                           38     26    32%
src/model/chunk_and_vectorise.py                                       56     56     0%
src/model/content_creation/__init__.py                                  0      0   100%
src/model/content_creation/content_creation_funcs.py                   56     56     0%
src/model/content_creation/llama3handler.py                            44     44     0%
src/model/content_creation/prompt_builder.py                           54     54     0%
src/model/csi/__init__.py                                               0      0   100%
src/model/csi/secrets_loader.py                                        22     22     0%
src/model/dao.py                                                      124    124     0%
src/model/db_connection.py                                             25     25     0%
src/model/doc_exporter.py                                              92     92     0%
src/model/embeddings_model_config.py                                    7      7     0%
src/model/gail_util_funcs.py                                           64     64     0%
src/model/generate_powerpoint/__init__.py                               0      0   100%
src/model/generate_powerpoint/combine_script_and_bullets.py            10     10     0%
src/model/generate_powerpoint/generate_powerpoint_presentation.py     226    226     0%
src/model/get_relevant_chunks.py                                      108    108     0%
src/model/pii_mask.py                                                  60     41    32%
src/model/process_uploaded_file.py                                     97     97     0%
src/model/scan_file_for_malware.py                                     22     22     0%
---------------------------------------------------------------------------------------
TOTAL                                                                1375   1303     5%

============================================================================================== short test summary info ==============================================================================================
FAILED tests/tests_model/test_pii_mask.py::test_guardrail_check - NameError: name 'pii_guardrail_check' is not defined
FAILED tests/tests_model/test_pii_mask.py::test_replace_pii - TypeError: replace_pii() missing 1 required positional argument: 'pii_guardrail_output'
FAILED tests/tests_model/test_pii_mask.py::test_guardrail_check_no_pii - NameError: name 'pii_guardrail_check' is not defined
====================================================================================== 3 failed, 1 passed, 2 warnings in
