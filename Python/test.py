import pytest
import uuid
from unittest.mock import MagicMock


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Apply mocks before importing `aws_helpers`."""
    global chunk_contents, chunk_and_vectorise
    from model.chunk_and_vectorise import chunk_contents, chunk_and_vectorise


@pytest.fixture
def mock_embeddings(mocker):
    """Mocks the get_bedrock_embeddings function."""
    mock_embedder = MagicMock()

    # Patch get_bedrock_embeddings instead of BedrockEmbeddings
    mocker.patch(
        "model.chunk_and_vectorise.get_bedrock_embeddings",
        return_value=mock_embedder,
    )
    return mock_embedder


@pytest.mark.asyncio
async def test_chunk_and_vectorise(mock_embeddings, mocker):
    """Tests chunk_and_vectorise function and verifies all internal calls are made correctly."""
    mocker.patch("model.chunk_and_vectorise.logger.info")
    mocker.patch(
        "uuid.uuid4",
        return_value=uuid.UUID("12345678-1234-5678-1234-567812345678"),
    )

    # Simulated vectorized output
    mock_embeddings.embed_documents.return_value = [
        [0.1, 0.2, 0.3],  # Vector for chunk1
        [0.4, 0.5, 0.6],  # Vector for chunk2
        [0.7, 0.8, 0.9],  # Vector for chunk3
    ]

    mocker.patch(
        "model.chunk_and_vectorise.chunk_contents",
        return_value=["chunk1", "chunk2", "chunk3"],
    )

    text = "A" * 5000
    doc_title = "Test Document"

    result, doc_id = await chunk_and_vectorise(text, doc_title)

    # Validate output
    assert isinstance(doc_id, str), "doc_id should be a string (UUID)"
    assert len(result) > 1, "Should have multiple vectorized chunks"
    assert "vector" in result[0], "Each chunk should contain a vector"
    assert "raw_text" in result[0], "Each chunk should contain raw_text"


@pytest.mark.asyncio
async def test_chunk_and_vectorise_small_text(mock_embeddings, mocker):
    """Tests chunk_and_vectorise with smaller text sizes."""
    mocker.patch("model.chunk_and_vectorise.logger.info")

    # Simulated vectorized output
    mock_embeddings.embed_documents.return_value = [[0.1, 0.2, 0.3]]

    text = "A" * 500
    doc_title = "Test Document"

    result, doc_id = await chunk_and_vectorise(text, doc_title, chunk_size=512)

    # Validate output
    assert isinstance(doc_id, str), "doc_id should be a string (UUID)"
    assert len(result) == 1, "Small text should return only one chunk"


def test_chunk_contents_exception(mocker):
    """Test chunk_contents when an exception is raised during text slicing."""
    mocker.patch("model.chunk_and_vectorise.logger")

    # Patch string slicing to throw an exception
    class MockString(str):
        def __getitem__(self, key):
            raise Exception("Mocked slicing error")

    contents = MockString("A" * 700)

    result = chunk_contents(contents, chunk_size=612)

    # Ensure the function catches the exception and returns the original content
    assert result == [contents]


@pytest.mark.asyncio
async def test_chunk_and_vectorise_empty_text(mock_embeddings, mocker):
    """Tests chunk_and_vectorise with empty text."""
    mock_embeddings.embed_documents.return_value = [[0.1, 0.2, 0.3]]

    mocker.patch("model.chunk_and_vectorise.chunk_contents", return_value=[""])

    result, doc_id = await chunk_and_vectorise("", "Empty Document")

    assert isinstance(doc_id, str), "doc_id should be a string"
    assert len(result) == 1, "Empty text should return one chunk"
    assert result[0]["raw_text"] == "", "Raw text should be empty"
    assert isinstance(result[0]["vector"], list), "Vector should be a list"


@pytest.mark.asyncio
async def test_chunk_and_vectorise_chunking_failure(mock_embeddings, mocker):
    """Tests chunk_and_vectorise when `chunk_contents` raises an exception."""
    mocker.patch("model.chunk_and_vectorise.logger.error")

    # Mock `chunk_contents` to raise an exception
    mocker.patch(
        "model.chunk_and_vectorise.chunk_contents",
        side_effect=Exception("Chunking failed"),
    )

    result = await chunk_and_vectorise("A" * 5000, "Test Document")

    assert isinstance(result, Exception), "Expected function to return an exception"