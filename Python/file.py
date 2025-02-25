import logging
from typing import List
import requests
from fastapi import HTTPException
from pydantic import BaseModel
from config import get_settings


class QueryString(BaseModel):
    query_strings: List[str]


logger = logging.getLogger(__name__)


async def fetch_relevant_chunks(
    learning_id: str, data: List[str], top_k: int, journey_type: str = None
):
    logger.info("Entered fetch_relevant_chunks")
    try:
        http_request = requests
        url = f"{get_settings().services_doc_manager_host}/v1/getrelevantchunks"
        # Intercept headers from request where required.
        request_headers = {"Learning-ID": learning_id, "Journey-Type": journey_type}

        logger.info("Attempting to fetch_relevant_chunks")
        response = http_request.post(
            url,
            json={"query_strings": data, "top_k": top_k},
            headers=request_headers,
            timeout=10,
        )

        if response.status_code == 200:
            try:
                relevant_data = response.json()
                relevant_chunks = relevant_data["relevant_chunks"]
                low_relevancy_flags = relevant_data["low_relevancy_flags"]
                logger.info("Relevant chunks received from Document Management Service")
                return relevant_chunks, low_relevancy_flags
            except Exception as error:
                raise UnboundLocalError(error) from error
        else:
            return "An error occurred in fetching relevant chunks, ensure you have the correct headers with the request"
    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500,
            detail=f"An error occured in connecting to the document management service: {error}",
        ) from error
