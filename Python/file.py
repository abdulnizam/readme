import logging
from typing import List
from pydantic import BaseModel
from fastapi import HTTPException
from bson import ObjectId
from model.db_connection import get_connection

SOURCE_CHUNKS_TYPE = "source-documents"  # Default type
JOURNEY_TYPE_CHUNK_MAPPING = {"continuous-learning-change": "change-documents"}


class NamePurposeTopics(BaseModel):
    name: str
    purpose: str
    topics: List[str]


logger = logging.getLogger()


async def connect_db():
    logger.debug("Establishing db connection")

    collection_name = "learning"

    db = await get_connection()

    return db[collection_name]


async def send_learning_to_db(data: NamePurposeTopics, learning_id: str):
    logger.debug("Entered send_learning_to_db")
    try:
        learning_data = data.model_dump()
        col = await connect_db()
        response = col.update_one(
            {"_id": ObjectId(learning_id)},
            {"$set": learning_data},
            upsert=True,
        )
        print(response.upserted_id)
        # set learning_id to response from upsert
        if response.upserted_id is not None:
            learning_id = str(response.upserted_id)

        # return learning_id to ui
        return {"learning_id": learning_id}

    except Exception as error:
        logger.error("Error occured in send_learning_to_db: %s", error)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error


async def send_chunks_to_db(learning_id: str, chunks_list: list, file_type: str):
    logger.debug("Entered send_chunks_to_db")
    try:
        col = await connect_db()

        # Prepare the update operation
        update = {"$push": {file_type: {"$each": chunks_list}}}
        # Perform the update operation
        response = col.update_one({"_id": ObjectId(learning_id)}, update, upsert=False)

        logger.debug(
            "Chunks successfully inserted for learning_id: %s",
            learning_id,
        )
        return response.modified_count

    except Exception as error:
        logger.error("Error occured in send_chunks_to_db: %s", error)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error


async def get_all_chunks(learning_id, chunks_type: str):
    logger.debug("Entered get chunks for content creation")
    try:
        col = await connect_db()

        logger.debug("Getting the database entry")
        response = col.find_one(
            {"_id": ObjectId(learning_id)}, {chunks_type: 1, "_id": 0}
        )

        # Return the right list response to get_all_chunks
        def get_documents(response):
            if chunks_type in response:
                return response[chunks_type]
            else:
                return None

        if response is None:
            logger.warning(
                "No response recieved from the database with learning_id: %s",
                learning_id,
            )
            raise HTTPException(
                status_code=404,
                detail="Chunks not found in database with provided ID",
            )

        chunks = get_documents(response)
        logger.debug("All chunks ready to send to get relevant chunks")

        return chunks

    except Exception as error:
        logger.error("Error occured in get_all_chunks: %s", error)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error


async def get_all_topics(learning_id):
    logger.debug("Entered get topics for content creation")
    try:
        col = await connect_db()

        logger.debug("Getting the database entry")

        response = col.find_one({"_id": ObjectId(learning_id)}, {"topics": 1, "_id": 0})

        # Return the right list response to get_all_topics
        def get_documents(response):
            if "topics" in response:
                return response["topics"]
            else:
                return None

        if response is None:
            logger.warning(
                "No response recieved from the database with learning_id: %s",
                learning_id,
            )
            raise HTTPException(status_code=404, detail="Topics not found in database")

        topics = get_documents(response)
        logger.debug("All topics ready to send to get relevant chunks")

        return topics

    except Exception as error:
        logger.error("Error occured in get_all_topics: %s", error)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error


async def get_name_from_datbase(learning_id):
    logger.debug("Entered get name from database")
    try:
        col = await connect_db()

        logger.debug("Requesting name from database")

        response = col.find_one({"_id": ObjectId(learning_id)}, {"name": 1, "_id": 0})

        logger.debug("Name has been received")
        string_response = response["name"]
        return string_response
    except Exception as error:
        if response is None:
            logger.error(
                "No response recieved from the database with learning_id: %s",
                learning_id,
            )
            raise HTTPException(
                status_code=400,
                detail="Learning Name not found in database with ID provided",
            ) from error

        if learning_id is None:
            logger.warning("No learning ID has been provdied")
            raise HTTPException(
                status_code=400,
                detail="Learning ID not provided for datbase call",
            ) from error

        logger.error("Error occured in get_all_topics: %s", error)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error


async def remove_by_learning_id(learning_id: str):
    logger.debug("Entered remove_by_learning_id with learning_id:  %s", learning_id)
    try:
        col = await connect_db()

        response = col.delete_one({"_id": ObjectId(learning_id)})

        if response.deleted_count == 0:
            logger.warning("No document found with learning_id: %s", learning_id)
            raise HTTPException(status_code=404, detail="Document not found")

        logger.debug("Successfully removed document with learning_id: %s", learning_id)
        return {"detail": "Document removed successfully"}

    except Exception as error:
        logger.error("Error occured in remove_by_learning_id: %s", error)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error


async def remove_document_from_source_documents(learning_id: str, document_id: str):
    logger.debug("Entered remove_document_from_source_documents")
    try:
        col = await connect_db()
        update_result = col.update_one(
            {"_id": ObjectId(learning_id)},
            {"$pull": {"source_documents": {"doc_id": document_id}}},
        )

        if update_result.modified_count == 0:
            logger.warning(
                "No document found with learning_id: %s or document_id: %s not in source_documents",
                learning_id,
                document_id,
            )
            raise HTTPException(
                status_code=404,
                detail="Document not found or not in source_documents",
            )

        logger.debug(
            "Successfully removed document_id: %s from learning_id: %s",
            document_id,
            learning_id,
        )
        return {"detail": "Document removed successfully"}

    except Exception as error:
        logger.error(
            "Error occurred in remove_document_from_source_documents: %s",
            error,
        )
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {error}"
        ) from error
