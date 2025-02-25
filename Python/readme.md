
================================================================================ FAILURES ================================================================================
______________________________________________________________________ test_generate_topic_outlines ______________________________________________________________________

mock_deduplicate = <MagicMock name='deduplicate_topic_outlines_objectives' id='6149591952'>, mock_run = <MagicMock name='run_concurrent_prompts' id='6149583376'>
mock_llm = <MagicMock spec='Llama3Handler' id='6149600016'>

    @patch("model.generate_core_content.run_concurrent_prompts")
    @patch("model.generate_core_content.deduplicate_topic_outlines_objectives")
    async def test_generate_topic_outlines(mock_deduplicate, mock_run, mock_llm):
        mock_run.return_value = [
            {"title": "Topic 1", "objectives": ["Define AI", "Explain ML"]},
            {"title": "Topic 2", "objectives": ["Describe neural networks"]}
        ]
        mock_deduplicate.return_value = (mock_run.return_value, [])
    
        module_title = "AI Basics"
        topic_descriptions = ["AI Introduction", "Neural Networks"]
        relevant_citations = [[{"title": "AI Paper", "chunks": "AI research details"}],
                              [{"title": "Neural Networks", "chunks": "AI research details"}]]
    
>       result = await generate_topic_outlines(module_title, topic_descriptions, relevant_citations)
E       TypeError: generate_topic_outlines() missing 1 required positional argument: 'low_relevancy_flags'

tests/tests_model/test_generate_core_content.py:105: TypeError
============================================================================ warnings summary ============================================================================
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                       Stmts   Miss  Cover   Missing
------------------------------------------------------------------------
src/config.py                                 50      0   100%
src/constants/constants.py                     4      0   100%
src/controller/__init__.py                     0      0   100%
src/controller/routes.py                     238    162    32%   107-110, 115-147, 157-189, 199-228, 238-275, 282-344, 353-399, 408-421, 440
src/main.py                                    8      0   100%
src/model/__init__.py                          0      0   100%
src/model/ai_models_config.py                 10      0   100%
src/model/aws/__init__.py                      0      0   100%
src/model/aws/aws_helpers.py                  38      0   100%
src/model/content_creation_funcs.py          308     76    75%   193-200, 206-211, 265-282, 308, 347-349, 384, 394, 452-456, 485, 490, 521-523, 546-547, 554-557, 615, 624, 628-645, 681, 833-864
src/model/continuous_learning_prompts.py      64     64     0%   2-352
src/model/fetch_content_for_methods.py        21      0   100%
src/model/fetch_relevant_chunks.py            30      0   100%
src/model/generate_continuous_content.py      67     67     0%   1-212
src/model/generate_core_content.py           136     21    85%   90, 228, 245-270, 340-367
src/model/llama3handler.py                    80      1    99%   279
src/model/prompt_builder.py                   57      0   100%
src/model/regnerate_content.py                17      0   100%
src/model/reprompt_content.py                123      0   100%
src/model/scenario1_prompts.py               189      0   100%
------------------------------------------------------------------------
TOTAL                                       1440    391    73%

======================================================================== short test summary info =========================================================================
FAILED tests/tests_model/test_generate_core_content.py::test_generate_topic_outlines - TypeError: generate_topic_outlines() missing 1 required positional argument: 'low_relevancy_flags'
