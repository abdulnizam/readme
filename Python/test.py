import pytest
from unittest.mock import AsyncMock, MagicMock, patch
from bson import ObjectId
from fastapi import HTTPException


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Apply mocks before importing `aws_helpers`."""
    global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
        get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
        remove_document_from_source_documents, connect_db, NamePurposeTopics
    from model.dao import (
        send_file_to_db,
        send_learning_to_db,
        send_chunks_to_db,
        get_all_chunks,
        get_all_topics,
        get_name_from_datbase,
        remove_by_learning_id,
        remove_document_from_source_documents,
        connect_db,
    )
    from model.dao import NamePurposeTopics


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_send_learning_to_db_exception(mock_connect_db):
    """Test send_learning_to_db when insertion fails."""
    mock_col = AsyncMock()
    mock_connect_db.return_value = mock_col
    mock_col.insert_one.side_effect = Exception("Database error")

    data = NamePurposeTopics(
        name="AI Basics", purpose="Learn AI", topics=["ML"]
    )
    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await send_learning_to_db(data, learning_id)

    assert exc.value.status_code == 500


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
        await send_chunks_to_db(learning_id, vectorised_chunks)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_all_chunks_exception(mock_connect_db):
    """Test get_all_chunks when DB query fails."""
    mock_col = AsyncMock()
    mock_connect_db.return_value = mock_col
    mock_col.find_one.side_effect = Exception("DB error")

    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await get_all_chunks(learning_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_send_file_to_db(mock_connect_db):
    """Test inserting a file into the database."""
    mock_col = MagicMock()
    mock_connect_db.return_value = mock_col

    mock_col.insert_one.return_value = MagicMock(inserted_id=ObjectId())

    filename = "test.txt"
    mdtext = "# Test Markdown File"

    result = await send_file_to_db(filename, mdtext)
    assert isinstance(result, str)


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_send_file_to_db_exception(mock_connect_db):
    """Test send_file_to_db handles database exceptions."""

    mock_col = MagicMock()
    mock_col.insert_one.side_effect = Exception("Database error")

    mock_connect_db.return_value = mock_col

    filename = "test.txt"
    mdtext = "Sample content"

    response = await send_file_to_db(filename, mdtext)

    mock_connect_db.assert_called_once()  # Ensure `connect_db()` was called
    mock_col.insert_one.assert_called_once_with(
        {"name": filename, "content": mdtext}
    )  # Ensure `insert_one()` was called

    # Ensure function returns the exception
    assert isinstance(response, Exception)
    # Ensure correct exception message
    assert str(response) == "Database error"


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_send_learning_to_db(mock_connect_db):
    """Test inserting learning data into the database."""
    mock_col = MagicMock()
    mock_connect_db.return_value = mock_col

    mock_col.insert_one.return_value = MagicMock(inserted_id=ObjectId())

    data = NamePurposeTopics(
        name="AI Basics", purpose="Learn AI", topics=["ML", "Deep Learning"]
    )
    learning_id = str(ObjectId())

    result = await send_learning_to_db(data, learning_id)
    assert "learning_id" in result


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

    result = await send_chunks_to_db(learning_id, vectorised_chunks)
    assert result == 1


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

    result = await get_all_chunks(learning_id)
    assert isinstance(result, list)
    assert result[0]["doc_id"] == "123"


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_all_topics(mock_connect_db):
    """Test retrieving all topics from the database."""
    mock_col = MagicMock()
    mock_connect_db.return_value = mock_col

    mock_col.find_one.return_value = {"topics": ["AI", "ML"]}

    learning_id = str(ObjectId())

    result = await get_all_topics(learning_id)
    assert isinstance(result, list)
    assert "AI" in result


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_name_from_database(mock_connect_db):
    """Test retrieving the name from the database."""
    mock_col = MagicMock()
    mock_connect_db.return_value = mock_col

    mock_col.find_one.return_value = {"name": "AI Learning"}

    learning_id = str(ObjectId())

    result = await get_name_from_datbase(learning_id)
    assert result == "AI Learning"


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)  # Mock `connect_db()`
async def test_get_name_from_database_not_found(mock_connect_db):
    """Test get_name_from_datbase when no document is found (returns None)."""

    # Mock the collection with `find_one` returning None
    mock_col = MagicMock()
    mock_col.find_one.return_value = None  # Simulate no document found

    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    # Expect HTTPException with status 400
    with pytest.raises(HTTPException) as exc:
        await get_name_from_datbase(learning_id)

    assert exc.value.status_code == 400
    assert (
        exc.value.detail
        == "Learning Name not found in database with ID provided"
    )


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)  # Mock `connect_db()`
async def test_get_name_from_database_invalid_id(mock_connect_db):
    """Test get_name_from_datbase when `learning_id` is None."""

    mock_col = MagicMock()

    mock_col.find_one.return_value = {}  # Simulate no document found

    mock_connect_db.return_value = mock_col

    learning_id = None  # Simulating no learning_id

    # Expect HTTPException with status 400
    with pytest.raises(HTTPException) as exc:
        await get_name_from_datbase(learning_id)

    assert exc.value.status_code == 400
    assert exc.value.detail == "Learning ID not provided for datbase call"


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)  # Mock `connect_db()`
async def test_get_name_from_database_exception(mock_connect_db):
    """Test get_name_from_datbase when a database error occurs."""

    mock_col = MagicMock()

    mock_col.find_one.return_value = {}  # Simulate no document found

    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await get_name_from_datbase(learning_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_remove_by_learning_id(mock_connect_db):
    """Test removing a document by learning ID."""
    mock_col = MagicMock()
    mock_connect_db.return_value = mock_col

    mock_col.delete_one.return_value = MagicMock(deleted_count=1)

    learning_id = str(ObjectId())

    result = await remove_by_learning_id(learning_id)
    assert result == {"detail": "Document removed successfully"}


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_remove_document_from_source_documents(mock_connect_db):
    """Test removing a document from source documents."""
    mock_col = MagicMock()
    mock_connect_db.return_value = mock_col

    mock_col.update_one.return_value = MagicMock(modified_count=1)

    learning_id = str(ObjectId())
    document_id = "doc_123"

    result = await remove_document_from_source_documents(
        learning_id, document_id
    )
    assert result == {"detail": "Document removed successfully"}


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_all_chunks_none(mock_connect_db):
    """Test get_all_chunks when DB returns None."""

    mock_col = MagicMock()
    mock_col.find_one.return_value = None
    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await get_all_chunks(learning_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_all_chunks_source_documents(mock_connect_db):
    """Test get_all_chunks when DB returns None."""

    mock_col = MagicMock()
    mock_col.find_one.return_value = {"_id": 0}
    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    results = await get_all_chunks(learning_id)
    assert results is None


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_all_topics_none(mock_connect_db):
    """Test get_all_topics when DB returns None."""
    mock_col = MagicMock()
    mock_col.find_one.return_value = None
    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await get_all_topics(learning_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_get_all_topics_source_documents(mock_connect_db):
    """Test get_all_topics when DB returns None."""

    mock_col = MagicMock()
    mock_col.find_one.return_value = {"_id": 0}
    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    results = await get_all_topics(learning_id)
    assert results is None


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_remove_by_learning_id_not_found(mock_connect_db):
    """Test remove_by_learning_id when document is not found."""
    mock_col = AsyncMock()
    mock_connect_db.return_value = mock_col

    mock_col.delete_one.return_value = AsyncMock(
        deleted_count=0
    )  # Ensuring awaitable response

    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await remove_by_learning_id(learning_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_remove_by_learning_id_delete_one(mock_connect_db):
    """Test remove_by_learning_id when document is not found."""

    class DeleteOne:
        deleted_count = 0

    mock_col = MagicMock()
    mock_col.delete_one.return_value = DeleteOne()
    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())

    with pytest.raises(HTTPException) as exc:
        await remove_by_learning_id(learning_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_remove_document_from_source_documents_not_found(
    mock_connect_db,
):
    """Test remove_document_from_source_documents when no doc is removed."""
    mock_col = AsyncMock()
    mock_connect_db.return_value = mock_col

    mock_col.update_one.return_value = AsyncMock(
        modified_count=0
    )  # Ensuring awaitable response

    learning_id = str(ObjectId())
    document_id = "doc_123"

    with pytest.raises(HTTPException) as exc:
        await remove_document_from_source_documents(learning_id, document_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
@patch("model.dao.connect_db", new_callable=AsyncMock)
async def test_remove_document_from_source_documents_update_one(
    mock_connect_db,
):
    """Test remove_document_from_source_documents when no doc is removed."""

    class UpdateOne:
        modified_count = 0

    mock_col = MagicMock()
    mock_col.update_one.return_value = UpdateOne()
    mock_connect_db.return_value = mock_col

    learning_id = str(ObjectId())
    document_id = "doc_123"

    with pytest.raises(HTTPException) as exc:
        await remove_document_from_source_documents(learning_id, document_id)

    assert exc.value.status_code == 500


@pytest.mark.asyncio
# Mock get_connection()
@patch("model.dao.get_connection", new_callable=AsyncMock)
async def test_connect_db(mock_get_connection):
    """Test connect_db returns the correct collection."""

    # Mock the database object
    mock_db = MagicMock()
    mock_collection = MagicMock()

    # Simulate `db[collection_name]`
    mock_db.__getitem__.return_value = mock_collection
    mock_get_connection.return_value = (
        mock_db  # get_connection() returns a mock DB
    )

    collection = await connect_db()

    #  Assertions
    # Ensure `get_connection()` was called
    mock_get_connection.assert_called_once()
    mock_db.__getitem__.assert_called_once_with(
        "learning"
    )  # Ensure `db["learning"]` was accessed
    # Ensure the correct collection is returned
    assert collection == mock_collection
