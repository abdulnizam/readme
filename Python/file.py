import logging
from fastapi import Request, HTTPException
import requests
from config import get_settings

logger = logging.getLogger(__name__)


async def get_content_for_methods(learning_id: str):
    logger.info("Retrieving headers and making call to Document Management Service")
    try:
        http_request = requests
        url = f"{get_settings().services_doc_manager_host}/v1/topicgenerationvariables"

        request_headers = {'Learning-ID': learning_id}

        logger.info("Retrieving required content from Document management service")
        response = http_request.get(url, headers=request_headers, timeout=3)

        if response.status_code == 200:
            returned_db_info = response.json()
            name = returned_db_info["name"]
            topic_descriptions_list = returned_db_info["topic_outlines"]
            return {"name": name, "topics": topic_descriptions_list}
    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500, detail=f"An error occured in content generation: {error}"
        ) from error
