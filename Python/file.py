import json
import logging
import threading
import concurrent.futures
from config import get_settings
from model.aws.aws_helpers import get_client, retry_if_invalid_settings
from fastapi import HTTPException


def read_json_file(file_path):
    """
    Read a JSON file and return its contents as a Python object.

    Args:
        file_path (str): The path to the JSON file to be read.

    Returns:
        dict: A Python dictionary representing the contents of the JSON file.
    """

    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data


DUMMY_PII_DATA = read_json_file("src/model/dummy_data.json")

logger = logging.getLogger()


def run_concurrent_pii_chunk_masking(
    chunks_list: list[dict],
    max_concurrent_requests: int = 2,
):
    """
    Run concurrent PII chunk masking using threading and a semaphore.

    Args:
        chunks_list (list[dict]): A list of dictionaries representing data chunks to be masked.
        max_concurrent_requests (int): Maximum number of concurrent masking requests allowed.

    Returns:
        tuple: A tuple containing a boolean indicating whether PII was detected in any chunk,
            and a list of masked chunks.
    """

    semaphore = threading.Semaphore(max_concurrent_requests)

    def run_pii_masking_with_semaphore(chunk_obj):
        with semaphore:
            return pii_mask_chunk(chunk_obj)

    with concurrent.futures.ThreadPoolExecutor() as executor:
        masked_chunks = list(executor.map(run_pii_masking_with_semaphore, chunks_list))

    pii_detected = check_pii_detected_in_any_chunk(masked_chunks)

    return pii_detected, masked_chunks


def check_pii_detected_in_any_chunk(chunk_objs: list[str]):
    """
    Check if any of the chunk objects have PII (Personally Identifiable Information) detected.

    Args:
        chunk_objs (list): A list of dictionaries representing chunk objects. Each dictionary may
            contain a key "pii_detected" with a boolean value indicating if PII was detected.

    Returns:
        bool: True if PII was detected in any chunk object, False otherwise.
    """

    for chunk_obj in chunk_objs:
        if chunk_obj.get("pii_detected", False):
            return True
    return False


def pii_mask_chunk(chunk_obj: dict[str]):
    """
    Apply PII guardrail to the raw text in the chunk object.

    Args:
        chunk_obj (dict): A dictionary object containing information about a text chunk.

    Returns:
        dict: The chunk object with PII guardrail applied to the raw text and pii_detected
            flag updated.
    """

    # Apply the PII guardrail to the raw text
    pii_detected, chunk_obj["raw_text"] = pii_guardrail_check(chunk_obj["raw_text"])

    chunk_obj["pii_detected"] = pii_detected

    return chunk_obj


@retry_if_invalid_settings
def pii_guardrail_check(input_text: str, source: str = "OUTPUT"):
    """
    Perform a guardrail check on personal identifiable information (PII) in the input text.

    Args:
        input_text (str): The text to be checked for PII.
        source (str): The source of the input text. Default is "OUTPUT".

    Returns:
        tuple: A tuple containing a boolean value indicating if PII was found (True)
            or not (False), and the processed text after replacing PII if found.

    Raises:
        Exception: If an error occurs during the guardrail check process.
    """

    logger.info("Entered guardrail_check")

    pii_guardrail_id = get_settings().bedrock_pii_guardrail_id
    pii_guardrail_version = get_settings().bedrock_pii_guardrail_version

    logger.info("Guardrail id: %s", get_settings().bedrock_pii_guardrail_id)

    # Format the content for guardrail check
    content = [{"text": {"text": input_text}}]

    client = get_client("bedrock-runtime")

    pii_guardrail_output = client.apply_guardrail(
        guardrailIdentifier=pii_guardrail_id,
        guardrailVersion=pii_guardrail_version,
        source=source,
        content=content,
    )

    if len(pii_guardrail_output["outputs"]) > 0:
        result = replace_pii(input_text, pii_guardrail_output)
        return True, result
    else:
        return False, input_text


def replace_pii(input_text, pii_guardrail_output):
    """ "
    Replace Personally Identifiable Information (PII) entities in the input text with dummy data.

    Args:
        input_text (str): The text containing PII entities to be masked.
        pii_guardrail_output (dict): The output from the PII detection guardrails (Bedrock)
            containing information about detected PII entities.

    Returns:
        str: The input text with PII entities masked with dummy data.

    Raises:
        Exception: If an error occurs during the PII replacement process.
    """

    logger.info("Entered replace_pii")

    try:
        masked_text = input_text

        # Extract all the PII detected entities
        pii_matches_array = pii_guardrail_output["assessments"][0][
            "sensitiveInformationPolicy"
        ]["piiEntities"]

        logger.info("Number of PII matches: %i", len(pii_matches_array))

        # Iterate through PII detected entities
        for pii_entity in pii_matches_array:
            text_match = pii_entity["match"]
            pii_type = pii_entity["type"]

            # Check if the type is available, for masking
            if pii_type in DUMMY_PII_DATA.keys():
                # Check if the text hasn't been masked already
                if text_match in masked_text:
                    # Mask the text with the relevant dummy data value
                    masked_text = masked_text.replace(
                        text_match, DUMMY_PII_DATA[pii_type]
                    )

        return masked_text

    except Exception as error:
        logger.error("Error occured in replace_pii: %s", error)
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred while getting the relevant chunks: {error}",
        ) from error
