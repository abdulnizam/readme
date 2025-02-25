
tests/test_routes.py F..F..F.....F..............                                                                                                                   [100%]

================================================================================ FAILURES ================================================================================
__________________________________________________________________ test_router_generate_topic_outlines ___________________________________________________________________

    def test_router_generate_topic_outlines():
        response = client.get("/generate/topicoutlines", headers={"Learning-ID": "123"})
>       assert response.status_code == 200
E       assert 500 == 200
E        +  where 500 = <Response [500 Internal Server Error]>.status_code

tests/test_routes.py:61: AssertionError
--------------------------------------------------------------------------- Captured log setup ---------------------------------------------------------------------------
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
ERROR    config:config.py:115 Unable to locate credentials
--------------------------------------------------------------------------- Captured log call ----------------------------------------------------------------------------
ERROR    controller.routes:routes.py:146 Error in network
_________________________________________________________________ test_router_regenerate_topic_outlines __________________________________________________________________

    def test_router_regenerate_topic_outlines():
        payload = {
            "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
            "review_index": 0,
            "citations": [[{"id": "1", "title": "Citation", "chunks": "Chunk"}]]
        }
        response = client.post("/generate/regeneratetopicoutlines", json=payload, headers={"Learning-ID": "123"})
>       assert response.status_code == 200
E       assert 500 == 200
E        +  where 500 = <Response [500 Internal Server Error]>.status_code

tests/test_routes.py:89: AssertionError
--------------------------------------------------------------------------- Captured log call ----------------------------------------------------------------------------
ERROR    controller.routes:routes.py:188 Error in network
_________________________________________________________ test_generate_speaker_notes_and_facilitator_powerpoint _________________________________________________________

    def test_generate_speaker_notes_and_facilitator_powerpoint():
        payload = {
            "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
            "topic_index": 0
        }
        response = client.post("/generate/corecontent", json=payload, headers={"Learning-ID": "123"})
>       assert response.status_code == 200
E       assert 500 == 200
E        +  where 500 = <Response [500 Internal Server Error]>.status_code

tests/test_routes.py:127: AssertionError
--------------------------------------------------------------------------- Captured log call ----------------------------------------------------------------------------
ERROR    controller.routes:routes.py:227 An error occured when generating content: not enough values to unpack (expected 2, got 1)
_______________________________________________________________ test_router_reprompt_shorter_speaker_notes _______________________________________________________________

    def test_router_reprompt_shorter_speaker_notes():
        payload = {
            "reprompt": "shorter",
            "slides": [
                {
                    "heading": "Slide 1",
                    "script": "AI is great",
                    "bullet_points": "- AI helps"
                }
            ],
            "slide_index": 0,
            "citations": [{"id": "1", "title": "Citation 1", "chunks": "Chunk 1"}]
        }
        response = client.post("/generate/repromptpowerpoint", json=payload)
        assert response.status_code == 200
>       assert response.json()["script"] == "Shortened Speaker Notes"
E       KeyError: 'script'

tests/test_routes.py:257: KeyError
============================================================================ warnings summary ============================================================================
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                       Stmts   Miss  Cover
--------------------------------------------------------------
src/config.py                                 50      7    86%
src/constants/constants.py                     4      0   100%
src/controller/__init__.py                     0      0   100%
src/controller/routes.py                     238      8    97%
src/main.py                                    8      8     0%
src/model/__init__.py                          0      0   100%
src/model/ai_models_config.py                 10      0   100%
src/model/aws/__init__.py                      0      0   100%
src/model/aws/aws_helpers.py                  38     18    53%
src/model/content_creation_funcs.py          308    241    22%
src/model/continuous_learning_prompts.py      64     64     0%
src/model/fetch_content_for_methods.py        21     15    29%
src/model/fetch_relevant_chunks.py            30     20    33%
src/model/generate_continuous_content.py      67     67     0%
src/model/generate_core_content.py           136     97    29%
src/model/llama3handler.py                    80     30    62%
src/model/prompt_builder.py                   53      2    96%
src/model/regnerate_content.py                17     11    35%
src/model/reprompt_content.py                123     87    29%
src/model/scenario1_prompts.py               189     17    91%
--------------------------------------------------------------
TOTAL                                       1436    692    52%

======================================================================== short test summary info =========================================================================
FAILED tests/test_routes.py::test_router_generate_topic_outlines - assert 500 == 200
FAILED tests/test_routes.py::test_router_regenerate_topic_outlines - assert 500 == 200
FAILED tests/test_routes.py::test_generate_speaker_notes_and_facilitator_powerpoint - assert 500 == 200
FAILED tests/test_routes.py::test_router_reprompt_shorter_speaker_notes - KeyError: 'script'
================================================================ 4 failed, 23 passed, 6 warnings in 8.25s ===
