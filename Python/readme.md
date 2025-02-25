
tests/tests_model/test_dao.py .FF.FF.......FF.......                                                                                                             [100%]

=============================================================================== FAILURES ===============================================================================
___________________________________________________________________ test_send_chunks_to_db_exception ___________________________________________________________________

mock_connect_db = <AsyncMock name='connect_db' id='6053127760'>

    @pytest.mark.asyncio
    @patch("model.dao.connect_db", new_callable=AsyncMock)
    async def test_send_chunks_to_db_exception(mock_connect_db):
        """Test send_chunks_to_db when DB update fails."""
        mock_col = AsyncMock()
        mock_connect_db.return_value = mock_col
        mock_col.update_one.side_effect = Exception("Update error")
    
        learning_id = str(ObjectId())
        vectorised_chunks = [{"doc_id": "123", "text": "chunk"}]
    
        with pytest.raises(HTTPException) as exc:
>           await send_chunks_to_db(learning_id, vectorised_chunks)
E           TypeError: send_chunks_to_db() missing 1 required positional argument: 'file_type'

tests/tests_model/test_dao.py:57: TypeError
____________________________________________________________________ test_get_all_chunks_exception _____________________________________________________________________

mock_connect_db = <AsyncMock name='connect_db' id='6041007696'>

    @pytest.mark.asyncio
    @patch("model.dao.connect_db", new_callable=AsyncMock)
    async def test_get_all_chunks_exception(mock_connect_db):
        """Test get_all_chunks when DB query fails."""
        mock_col = AsyncMock()
        mock_connect_db.return_value = mock_col
        mock_col.find_one.side_effect = Exception("DB error")
    
        learning_id = str(ObjectId())
    
        with pytest.raises(HTTPException) as exc:
>           await get_all_chunks(learning_id)
E           TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'

tests/tests_model/test_dao.py:73: TypeError
________________________________________________________________________ test_send_chunks_to_db ________________________________________________________________________

mock_connect_db = <AsyncMock name='connect_db' id='6041674128'>

    @pytest.mark.asyncio
    @patch("model.dao.connect_db", new_callable=AsyncMock)
    async def test_send_chunks_to_db(mock_connect_db):
        """Test inserting vectorized chunks into the database."""
        mock_col = MagicMock()
        mock_connect_db.return_value = mock_col
    
        mock_col.update_one.return_value = MagicMock(modified_count=1)
    
        learning_id = str(ObjectId())
        vectorised_chunks = [
            {"doc_id": "123", "raw_text": "chunk", "vector": [0.1, 0.2]}
        ]
    
>       result = await send_chunks_to_db(learning_id, vectorised_chunks)
E       TypeError: send_chunks_to_db() missing 1 required positional argument: 'file_type'

tests/tests_model/test_dao.py:112: TypeError
_________________________________________________________________________ test_get_all_chunks __________________________________________________________________________

mock_connect_db = <AsyncMock name='connect_db' id='6040914768'>

    @pytest.mark.asyncio
    @patch("model.dao.connect_db", new_callable=AsyncMock)
    async def test_get_all_chunks(mock_connect_db):
        """Test retrieving all chunks from the database."""
        mock_col = MagicMock()
        mock_connect_db.return_value = mock_col
    
        mock_col.find_one.return_value = {
            "source_documents": [{"doc_id": "123", "text": "chunk"}]
        }
    
        learning_id = str(ObjectId())
    
>       result = await get_all_chunks(learning_id)
E       TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'

tests/tests_model/test_dao.py:129: TypeError
_______________________________________________________________________ test_get_all_chunks_none _______________________________________________________________________

mock_connect_db = <AsyncMock name='connect_db' id='6046423568'>

    @pytest.mark.asyncio
    @patch("model.dao.connect_db", new_callable=AsyncMock)
    async def test_get_all_chunks_none(mock_connect_db):
        """Test get_all_chunks when DB returns None."""
    
        mock_col = MagicMock()
        mock_col.find_one.return_value = None
        mock_connect_db.return_value = mock_col
    
        learning_id = str(ObjectId())
    
        with pytest.raises(HTTPException) as exc:
>           await get_all_chunks(learning_id)
E           TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'

tests/tests_model/test_dao.py:274: TypeError
_________________________________________________________________ test_get_all_chunks_source_documents _________________________________________________________________

mock_connect_db = <AsyncMock name='connect_db' id='6054236752'>

    @pytest.mark.asyncio
    @patch("model.dao.connect_db", new_callable=AsyncMock)
    async def test_get_all_chunks_source_documents(mock_connect_db):
        """Test get_all_chunks when DB returns None."""
    
        mock_col = MagicMock()
        mock_col.find_one.return_value = {"_id": 0}
        mock_connect_db.return_value = mock_col
    
        learning_id = str(ObjectId())
    
>       results = await get_all_chunks(learning_id)
E       TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'

tests/tests_model/test_dao.py:290: TypeError
=========================================================================== warnings summary ===========================================================================
tests/tests_model/test_dao.py::test_send_learning_to_db_exception
tests/tests_model/test_dao.py::test_send_learning_to_db_exception
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

tests/tests_model/test_dao.py::test_remove_by_learning_id_delete_one
tests/tests_model/test_dao.py::test_remove_document_from_source_documents_update_one
  /Users/adbul.nizam1/.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:2178: RuntimeWarning: coroutine 'AsyncMockMixin._execute_mock_call' was never awaited
    def __init__(self, name, parent):
  Enable tracemalloc to get traceback where the object was allocated.
  See https://docs.pytest.org/en/stable/how-to/capture-warnings.html#resource-warnings for more info.

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
src/model/aws/aws_helpers.py                                           38     38     0%
src/model/chunk_and_vectorise.py                                       56     56     0%
src/model/content_creation/__init__.py                                  0      0   100%
src/model/content_creation/content_creation_funcs.py                   56     56     0%
src/model/content_creation/llama3handler.py                            44     44     0%
src/model/content_creation/prompt_builder.py                           54     54     0%
src/model/csi/__init__.py                                               0      0   100%
src/model/csi/secrets_loader.py                                        22     18    18%
src/model/dao.py                                                      124     28    77%
src/model/db_connection.py                                             25     19    24%
src/model/doc_exporter.py                                              92     92     0%
src/model/embeddings_model_config.py                                    7      7     0%
src/model/gail_util_funcs.py                                           64     64     0%
src/model/generate_powerpoint/__init__.py                               0      0   100%
src/model/generate_powerpoint/combine_script_and_bullets.py            10     10     0%
src/model/generate_powerpoint/generate_powerpoint_presentation.py     226    226     0%
src/model/get_relevant_chunks.py                                      108    108     0%
src/model/pii_mask.py                                                  60     60     0%
src/model/process_uploaded_file.py                                     97     97     0%
src/model/scan_file_for_malware.py                                     22     22     0%
---------------------------------------------------------------------------------------
TOTAL                                                                1375   1228    11%

======================================================================= short test summary info ========================================================================
FAILED tests/tests_model/test_dao.py::test_send_chunks_to_db_exception - TypeError: send_chunks_to_db() missing 1 required positional argument: 'file_type'
FAILED tests/tests_model/test_dao.py::test_get_all_chunks_exception - TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'
FAILED tests/tests_model/test_dao.py::test_send_chunks_to_db - TypeError: send_chunks_to_db() missing 1 required positional argument: 'file_type'
FAILED tests/tests_model/test_dao.py::test_get_all_chunks - TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'
FAILED tests/tests_model/test_dao.py::test_get_all_chunks_none - TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'
FAILED tests/tests_model/test_dao.py::test_get_all_chunks_source_documents - TypeError: get_all_chunks() missing 1 required positional argument: 'chunks_type'
