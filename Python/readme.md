2025-02-07 15:36:02,040 - src.config - ERROR - config.py:79 - Parameter validation failed:
Invalid type for parameter RoleArn, value: None, type: <class 'NoneType'>, valid types: <class 'str'>
2025-02-07 15:36:04,046 - src.config - ERROR - config.py:79 - Parameter validation failed:
Invalid type for parameter RoleArn, value: None, type: <class 'NoneType'>, valid types: <class 'str'>
2025-02-07 15:36:05,053 - src.config - ERROR - config.py:79 - Parameter validation failed:
Invalid type for parameter RoleArn, value: None, type: <class 'NoneType'>, valid types: <class 'str'>
2025-02-07 15:36:05,059 - src.config - ERROR - config.py:79 - Parameter validation failed:
Invalid type for parameter RoleArn, value: None, type: <class 'NoneType'>, valid types: <class 'str'>
ImportError while loading conftest '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/tests/conftest.py'.
tests/conftest.py:6: in <module>
    from src.config import Settings
src/config.py:90: in <module>
    settings = Settings()
../venv3/lib/python3.13/site-packages/pydantic_settings/main.py:167: in __init__
    super().__init__(
E   pydantic_core._pydantic_core.ValidationError: 9 validation errors for Settings
E   bedrock_embedding_model_id
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   bedrock_harms_guardrail_id
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   bedrock_harms_guardrail_version
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   bedrock_llama3_8b_model_id
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   bedrock_llama3_70b_model_id
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   bedrock_pii_guardrail_id
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   bedrock_pii_guardrail_version
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   services_doc_manager_host
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
E   blocked_guardrail_message
E     Field required [type=missing, input_value={'app_log_level': 'debug'...ile_name': 'future-dev'}, input_type=dict]
E       For further information visit https://errors.pydantic.dev/2.10/v/missing
