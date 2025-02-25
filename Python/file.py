import logging
import uuid
import lorem
from model.embeddings_model_config import get_bedrock_embeddings

logger = logging.getLogger()


def pad_chunks(chunks: list[str], chunk_size: int = 2048):
    """
    Adds padding to all chunks that are less than a specified chunk size.
    The padding is lorum ipsum text.

    Parameters:
    chunks (list[str]): A list of strings representing the chunks.
    chunk_size (int): The desired size of each chunk.

    Returns:
    list[str]: A list of strings representing the padded chunks.
    """

    padded_chunks = []

    lorem_text = ""
    while len(lorem_text) < chunk_size:
        lorem_text += lorem.text()

    for chunk in chunks:
        if len(chunk) < chunk_size:
            chunk += "\n"
            padding_size = chunk_size - len(chunk)
            padding = lorem_text[:padding_size]
            padded_chunk = chunk + padding
        else:
            padded_chunk = chunk
        padded_chunks.append(padded_chunk)
    return padded_chunks


def chunk_contents(contents: str, chunk_size: int = 2048, overlap: int = 512) -> list:
    """
    Split the contents of a string into chunks of a specified size with a specified overlap.

    Args:
        contents (str): The input string to be chunked.
        chunk_size (int, optional): The size of each chunk. Default is 2048.
        overlap (int, optional): The amount of overlap between chunks. Default is 512.

    Returns:
        list: A list of chunks, each of size chunk_size, with the specified overlap.
    """

    logger.info("Document chunking started")
    try:
        if len(contents) < chunk_size:
            logger.warning("Content size is smaller than the chunk size")
            return [contents]

        if chunk_size <= overlap:
            logger.warning("Chunk size is smaller than overlap")
            return [contents]

        chunks = []
        i = 0
        while i < len(contents):
            chunk = contents[i : i + chunk_size]
            chunks.append(chunk)
            i += chunk_size - overlap

        logger.info("Chunks being returned")
        return chunks
    except Exception as error:
        logger.error("The content could not be split into chunks: %s", error)
        return [contents]


async def chunk_and_vectorise(
    contents: str,
    doc_title: str,
    chunk_size: int = 2048,
    overlap: int = 512,
) -> list:
    """
    Chunks the input contents and vectorises each chunk using the specified embedding endpoint.

    Args:
        embedding_endpoint (BedrockEmbeddings): The embedding endpoint to be used for vectorisation.
        contents (str): The input text content to be chunked and vectorised.
        doc_title (str): The title of the document.
        chunk_size (int, optional): The size of each chunk. Defaults to 2048.
        overlap (int, optional): The amount of overlap between consecutive chunks. Defaults to 512.

    Returns:
        list: A list of dictionaries, each containing the document ID, document title, chunk ID,
        raw text, and vector for each chunk.
    """
    logger.info("Chunking and vectorisation")

    try:
        chunks_list = []
        chunks_raw = chunk_contents(contents, chunk_size, overlap)

        logger.info("Chunks now being vectorised")
        embeddings = get_bedrock_embeddings()

        chunks_vectorised = embeddings.embed_documents(
            pad_chunks(chunks_raw)
        )  # Pad out the chunks before embedding -> better performance

        doc_id = str(uuid.uuid4())

        for i, (raw_text, vector) in enumerate(zip(chunks_raw, chunks_vectorised)):
            chunk_obj = {
                "doc_id": doc_id,
                "doc_title": doc_title,
                "chunk_id": i,
                "raw_text": raw_text,
                "vector": vector,
            }
            chunks_list.append(chunk_obj)
        logger.info("Chunks have been vectorised")
        return chunks_list, doc_id

    except Exception as error:
        logger.error("Error occured in vectorisation and chunking: %s", error)
        return error
