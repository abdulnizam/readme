
tests/tests_model/test_llama3handler.py F.....F                                                                                            [100%]

==================================================================== FAILURES ====================================================================
_______________________________________________________ test_llama3handler_initialization ________________________________________________________

mock_llama_handler = <model.llama3handler.Llama3Handler object at 0x10e44b390>

    def test_llama3handler_initialization(mock_llama_handler):
        """Ensure `Llama3Handler` initializes properly."""
        assert mock_llama_handler.llm is not None
>       assert mock_llama_handler.guardrail_response == "Blocked by guardrail"
E       AttributeError: 'Llama3Handler' object has no attribute 'guardrail_response'

tests/tests_model/test_llama3handler.py:26: AttributeError
--------------------------------------------------------------- Captured log setup ---------------------------------------------------------------
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
__________________________________________________________ test_invoke_guardrail_error ___________________________________________________________

mock_bedrock_llm = <MagicMock name='BedrockLLM' id='4520531088'>

    @patch("model.llama3handler.BedrockLLM")
    def test_invoke_guardrail_error(mock_bedrock_llm):
        """Ensure guardrail filter raises an error when triggered."""
    
        mock_llm_instance = MagicMock()
        mock_llm_instance.invoke.return_value = MOCK_LLM_RESPONSE
        mock_bedrock_llm.return_value = mock_llm_instance
    
        config_with_guardrail = MOCK_CONFIG.copy()
        config_with_guardrail["guardrail"] = {"guardrailIdentifier": "GR123", "guardrailVersion": "1.0"}
        config_with_guardrail["blocked_guardrail_message"] = "Quantum computing is a field of study that..."
    
        handler = Llama3Handler(llm_config=config_with_guardrail)
    
>       with pytest.raises(GuardrailsFilterError):
E       Failed: DID NOT RAISE <class 'model.llama3handler.GuardrailsFilterError'>

tests/tests_model/test_llama3handler.py:115: Failed
================================================================ warnings summary ================================================================
tests/tests_model/test_llama3handler.py::test_llama3handler_initialization
tests/tests_model/test_llama3handler.py::test_llama3handler_initialization
tests/tests_model/test_llama3handler.py::test_llama3handler_initialization
tests/tests_model/test_llama3handler.py::test_llama3handler_initialization
tests/tests_model/test_llama3handler.py::test_llama3handler_initialization
tests/tests_model/test_llama3handler.py::test_llama3handler_initialization
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
src/model/aws/aws_helpers.py                  38     18    53%
src/model/content_creation_funcs.py          308    308     0%
src/model/continuous_learning_prompts.py      64     64     0%
src/model/fetch_content_for_methods.py        21     21     0%
src/model/fetch_relevant_chunks.py            30     30     0%
src/model/generate_continuous_content.py      67     67     0%
src/model/generate_core_content.py           136    136     0%
src/model/llama3handler.py                    80      5    94%
src/model/prompt_builder.py                   57     57     0%
src/model/regnerate_content.py                17     17     0%
src/model/reprompt_content.py                123    123     0%
src/model/scenario1_prompts.py               189    189     0%
--------------------------------------------------------------
TOTAL                                       1436   1298    10%

============================================================ short test summary info =============================================================
FAILED tests/tests_model/test_llama3handler.py::test_llama3handler_initialization - AttributeError: 'Llama3Handler' object has no attribute 'guardrail_response'
FAILED tests/tests_model/test_llama3handler.py::test_invoke_guardrail_error - Failed: DID NOT RAISE <class 'model.llama3handler.GuardrailsFilterError'>
