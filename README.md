ImportError while loading conftest '/builds/dwp/a-cubed/a-cubed-backend/tests/conftest.py'.
tests/conftest.py:17: in <module>
    from app import app
app.py:11: in <module>
    from functions.searchresponse import generate_response
functions/searchresponse.py:43: in <module>
    AzureChatOpenAI.model_rebuild()
/usr/local/lib/python3.13/site-packages/pydantic/main.py:642: in model_rebuild
    raise exc from e
E   pydantic.errors.PydanticUndefinedAnnotation: name 'BaseCache' is not defined
E
E   For further information visit https://errors.pydantic.dev/2.11/u/undefined-annotation
