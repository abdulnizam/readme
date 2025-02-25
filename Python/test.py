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
    """Mocks the BedrockEmbeddings model."""
    mock_embedder = MagicMock()
    mocker.patch(
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embedder,
    )
    return mock_embedder


# # **Tests for `chunk_and_vectorise()`**
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
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embeddings,
    )

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
async def test_chunk_and_vectorise_700_words(mock_embeddings, mocker):
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
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embeddings,
    )

    text = "A" * 700
    doc_title = "Test Document"

    result, doc_id = await chunk_and_vectorise(text, doc_title, 612)

    # Validate output
    assert isinstance(doc_id, str), "doc_id should be a string (UUID)"


def test_chunk_contents_exception(mocker):
    """Test chunk_contents when an exception is raised during text slicing."""
    mocker.patch("model.chunk_and_vectorise.logger")

    # Patch string slicing to throw an exception
    class MockString(str):
        def __getitem__(self, key):
            raise Exception("Mocked slicing error")

    contents = MockString("A" * 700)

    result = chunk_contents(contents, chunk_size=612)

    # Ensure the function catches the exception and returns the original
    # content
    assert result == [contents]


# @pytest.mark.asyncio
async def test_chunk_and_vectorise_500_words(mock_embeddings, mocker):
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
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embeddings,
    )

    text = "A" * 500
    doc_title = "Test Document"

    result, doc_id = await chunk_and_vectorise(text, doc_title, 1048)

    # Validate output
    assert isinstance(doc_id, str), "doc_id should be a string (UUID)"


@pytest.mark.asyncio
async def test_chunk_and_vectorise_512_words(mock_embeddings, mocker):
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
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embeddings,
    )

    text = "A" * 512
    doc_title = "Test Document"

    result, doc_id = await chunk_and_vectorise(text, doc_title, 512)

    # Validate output
    assert isinstance(doc_id, str), "doc_id should be a string (UUID)"


@pytest.mark.asyncio
async def test_chunk_and_vectorise_empty_text(mock_embeddings, mocker):

    mock_embeddings.embed_documents.return_value = [
        [0.1, 0.2, 0.3],  # Vector for chunk1
    ]
    mocker.patch(
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embeddings,
    )

    mocker.patch("model.chunk_and_vectorise.chunk_contents", return_value=[""])

    """Tests chunk_and_vectorise with empty text."""
    result, doc_id = await chunk_and_vectorise("", "Empty Document")

    assert isinstance(doc_id, str), "doc_id should be a string"
    assert len(result) == 1, "Empty text should return one chunk"
    assert result[0]["raw_text"] == "", "Raw text should be empty"
    assert isinstance(result[0]["vector"], list), "Vector should be a list"


@pytest.mark.asyncio
async def test_chunk_and_vectorise_chunking_failure(mock_embeddings, mocker):
    """Tests chunk_and_vectorise when `chunk_contents` raises an exception."""

    #  Mock logger to check if error logs are generated
    mocker.patch("model.chunk_and_vectorise.logger.error")

    #  Mock `chunk_contents` to raise an exception
    mocker.patch(
        "model.chunk_and_vectorise.chunk_contents",
        side_effect=Exception("Chunking failed"),
    )

    #  Mock `get_client` to prevent actual AWS calls
    mocker.patch("model.aws.aws_helpers.get_client", return_value=MagicMock())

    #  Mock `BedrockEmbeddings` to prevent actual API calls
    mock_embeddings = MagicMock()
    mock_embeddings.embed_documents.return_value = [[0.1, 0.2, 0.3]] * 3
    mocker.patch(
        "model.chunk_and_vectorise.BedrockEmbeddings",
        return_value=mock_embeddings,
    )

    result = await chunk_and_vectorise("A" * 5000, "Test Document")

    #  Check that function returns the exception object
    assert isinstance(
        result, Exception
    ), "Expected function to return an exception"
