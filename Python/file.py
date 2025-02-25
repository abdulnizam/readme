import logging
from typing import Optional, List
from pydantic import BaseModel
from fastapi import APIRouter, Request, HTTPException
from model.generate_core_content import (
    generate_topic_outlines,
    generate_facilitator_ppt,
    generate_speaker_notes,
    generate_knowledge_check_from_list_of_scripts,
    markdown_to_list,
)
from model.fetch_relevant_chunks import fetch_relevant_chunks
from model.fetch_content_for_methods import get_content_for_methods
from model.reprompt_content import (
    shorten_bullet_points,
    knowledge_check_case_study,
    harder_knowledge_check_open_ended,
    easier_knowledge_check_true_false,
    shorten_speaker_notes,
    elaborate_bullet_points,
    elaborate_speaker_notes,
    more_formal_bullet_points,
    more_formal_speaker_notes,
    less_formal_bullet_points,
    less_formal_speaker_notes,
    knowledge_check_add_question,
    harder_knowledge_check_multi_answer,
)
from model.scenario1_prompts import format_topic_outline_as_str
from model.regnerate_content import regenerate_topic_outline
from constants.constants import FACILITATOR_POWERPOINT_SCRIPT, POWERPOINT_SCRIPT


class TopicOutline(BaseModel):
    title: str
    objectives: str


class Citations(BaseModel):
    id: str
    title: str
    chunks: str


class RegenerateTopicOutlinesRequest(BaseModel):
    topic_outlines: List[TopicOutline]
    review_index: int
    citations: List[List[Citations]]


class FacilitatorPowerPoint(BaseModel):
    heading: str
    script: Optional[str] = None
    bullet_points: str


class CoreContentRequest(BaseModel):
    topic_outlines: List[TopicOutline]
    topic_index: int


class KnowledgeCheckRequest(BaseModel):
    slides: List[FacilitatorPowerPoint]
    topic_outline: TopicOutline
    contextual_content: Optional[str] = None  # this need to revisit by dev


class generatedSpeakerNotes(BaseModel):
    heading: str
    script: str


class slidesResponse(BaseModel):
    slides: generatedSpeakerNotes


class KnowledgeCheck(BaseModel):
    question: str
    choices: str
    answer: str


class RepromptPowerpoint(BaseModel):
    reprompt: str
    slides: List[FacilitatorPowerPoint]
    slide_index: int
    citations: List[Citations]


class RepromptKnowledgeCheck(BaseModel):
    reprompt: str
    current_question: KnowledgeCheck
    context: str


class AddQuestionRequest(BaseModel):
    question_list: List[KnowledgeCheck]
    context: str


logger = logging.getLogger(__name__)

generate_content_router_v1 = APIRouter(prefix="/generate")


def log_incoming_request(request: Request):
    reqid = request.headers.get("X-Request-ID")
    reqorigin = request.headers.get("X-Origin")

    logger.info("Recieved request_id: %s \n with Origin: %s", reqid, reqorigin)


@generate_content_router_v1.get("/topicoutlines")
async def router_generate_topic_outlines(request: Request):
    log_incoming_request(request)
    logger.info("Entered content generation request")
    learning_id = request.headers.get("Learning-ID")
    top_k = 2
    journey_type = request.headers.get("Journey-Type")

    if not learning_id:
        logger.error(
            "Error occured in generate_topic_outlines: missing learning_id header"
        )
        raise HTTPException(status_code=400, detail="Missing learning_id header")
    try:
        logger.info("Entered generate topic outlines")
        name_and_topics = await get_content_for_methods(learning_id)

        module_title = name_and_topics["name"]
        topic_descriptions_list = name_and_topics["topics"]
        # Fetch the relevant chunks using information from the request
        relevant_topic_citations, low_relevancy_flags = await fetch_relevant_chunks(
            learning_id, topic_descriptions_list, top_k, journey_type
        )

        generated_topic_outlines = await generate_topic_outlines(
            module_title,
            topic_descriptions_list,
            relevant_topic_citations,
            low_relevancy_flags,
        )
        return generated_topic_outlines

    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500,
            detail=f"An error occured in topic outline generation: {error}",
        ) from error


@generate_content_router_v1.post("/regeneratetopicoutlines")
async def router_regenerate_topic_outlines(
    request: Request, data: RegenerateTopicOutlinesRequest
):
    log_incoming_request(request)
    logger.info("Entered content generation request")
    learning_id = request.headers.get("Learning-ID")

    if not learning_id:
        logger.error(
            "Error occured in generate_topic_outlines: missing learning_id header"
        )
        raise HTTPException(status_code=400, detail="Missing learning_id header")
    try:
        request_data = data.model_dump()
        generated_topic_outlines = request_data["topic_outlines"]
        name_and_topics = await get_content_for_methods(learning_id)
        module_title = name_and_topics["name"]

        topic_descriptions_list = name_and_topics["topics"]
        relevant_topic_citations = request_data["citations"]

        topic_index = request_data["review_index"]
        logger.info("Entered generate topic outlines")
        regenerated_topic_outline = await regenerate_topic_outline(
            generated_topic_outlines,
            module_title,
            topic_descriptions_list,
            relevant_topic_citations,
            topic_index,
        )
        del regenerated_topic_outline["citations"]
        return regenerated_topic_outline

    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500,
            detail=f"An error occured in topic outline generation: {error}",
        ) from error


@generate_content_router_v1.post("/corecontent")
async def generate_speaker_notes_and_facilitator_powerpoint(
    request: Request, data: CoreContentRequest
):
    log_incoming_request(request)
    logger.info("Entered generate_speaker_notes_and_facilitator_powerpoint")
    learning_id = request.headers.get("Learning-ID")
    top_k = 4
    try:

        logger.info("Entered generate core content")
        request_data = data.model_dump()
        topic_index = request_data["topic_index"]
        query_string = format_topic_outline_as_str(
            request_data["topic_outlines"][topic_index]
        )

        relevant_topic_citations, _ = await fetch_relevant_chunks(
            learning_id, [query_string], top_k
        )
        relevant_topic_citations = relevant_topic_citations[0]

        logger.info("Generating content")
        generated_speaker_notes = await generate_speaker_notes(
            request_data["topic_outlines"], relevant_topic_citations, topic_index
        )
        generated_facilitator_ppt = await generate_facilitator_ppt(
            generated_speaker_notes, relevant_topic_citations
        )

        return generated_facilitator_ppt
    except Exception as error:
        logger.error("An error occured when generating content: %s", error)
        raise HTTPException(
            status_code=500,
            detail=f"An error occured when generating content with the header provided: {error}",
        ) from error


@generate_content_router_v1.post("/knowledgecheck")
async def router_generate_knowledge_check_for_facilitator_powerpoint(
    request: Request, data: KnowledgeCheckRequest
):
    logger.info("Entered content generation request")
    log_incoming_request(request)
    input_type = request.headers.get("Knowledge-Context")

    if (
        input_type is None
    ):  # Raise Exception if there is no Knowledge-Context header provided.
        raise HTTPException(
            status_code=400,
            detail="Malformed request, please provide the correct headers",
        )

    request_data = data.model_dump()
    try:
        logger.info("Entered generate knowledge check")
        if input_type == FACILITATOR_POWERPOINT_SCRIPT:
            logger.info("Using Facilitator script as context")
            knowledge_check = await generate_knowledge_check_from_list_of_scripts(
                request_data, request_data["topic_outline"]
            )
            logger.info(
                "Successfully Generated knowledge check with facilitator script as context"
            )
            return knowledge_check
        elif input_type == POWERPOINT_SCRIPT:
            logger.info("Using slide bullets as context")
            # the below line need to checked by dev
            knowledge_check = (
                request_data["contextual_content"],
                request_data["topic_outline"],
            )
            logger.info(
                "Successfully Generated knowledge check with slide bullets as context"
            )
            return knowledge_check
    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500, detail="An error occured in knowledge check generation"
        ) from error


@generate_content_router_v1.post("/repromptpowerpoint")
async def router_reprompt_speaker_notes(request: Request, data: RepromptPowerpoint):
    log_incoming_request(request)
    logger.info("Entered regenerating topic outlines")

    try:
        request_data = data.model_dump()
        logger.info("Reprompting speaker notes")
        restyle_type = request_data["reprompt"]
        slides = {"slides": request_data["slides"]}
        slide_index = request_data["slide_index"]
        citations = request_data["citations"]
        bullets_current = slides["slides"][slide_index]["bullet_points"]

        if restyle_type == "shorter":
            logger.info("Shorter notes requested")
            shortened_speaker_notes = await shorten_speaker_notes(slides, slide_index)
            shortened_bullet_points = await shorten_bullet_points(
                bullets_current, shortened_speaker_notes
            )
            shortened_speaker_notes["bullet_points"] = shortened_bullet_points[
                "bullet_points"
            ]
            return shortened_speaker_notes
        elif restyle_type == "elaborate":
            logger.info("Entered elaborate notes")
            elaborated_speaker_notes = await elaborate_speaker_notes(
                slides, citations, slide_index
            )
            elaborated_bullets = await elaborate_bullet_points(
                bullets_current, elaborated_speaker_notes
            )
            elaborated_speaker_notes["bullet_points"] = elaborated_bullets[
                "bullet_points"
            ]
            return elaborated_speaker_notes
        elif restyle_type == "more-professional":
            logger.info("Entered professional notes")
            formal_speaker_notes = await more_formal_speaker_notes(slides, slide_index)
            formal_bullet_points = await more_formal_bullet_points(
                bullets_current, formal_speaker_notes
            )
            formal_speaker_notes["bullet_points"] = formal_bullet_points[
                "bullet_points"
            ]
            return formal_speaker_notes
        elif restyle_type == "more-casual":
            logger.info("Entered casual notes")
            casual_speaker_notes = await less_formal_speaker_notes(slides, slide_index)
            casual_bullet_points = await less_formal_bullet_points(
                bullets_current, casual_speaker_notes
            )
            casual_speaker_notes["bullet_points"] = casual_bullet_points[
                "bullet_points"
            ]
            return casual_speaker_notes
        else:
            raise HTTPException(
                status_code=403,
                detail="An error occurred whilst restyling the content provided",
            )

    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500, detail="An error occured in regenerating speaker notes"
        ) from error


@generate_content_router_v1.post("/repromptknowledgecheck")
async def router_reprompt_knowledge_check(
    request: Request, data: RepromptKnowledgeCheck
):
    log_incoming_request(request)
    logger.info("Entered regenerating topic outlines")

    try:
        request_data = data.model_dump()
        logger.info("Reprompting speaker notes")
        restyle_type = request_data["reprompt"]
        question_current = request_data["current_question"]
        context = request_data["context"]

        question_current["choices"] = markdown_to_list(
            question_current["choices"]
        )  # Convert to list, for reprompting

        if restyle_type == "multi-select":
            logger.info("Multi select requested")
            multi_select_question = await harder_knowledge_check_multi_answer(
                context, question_current
            )
            return multi_select_question
        elif restyle_type == "true-false":
            logger.info("True False requested")
            true_false_question = await easier_knowledge_check_true_false(
                context, question_current
            )
            return true_false_question
        elif restyle_type == "open-ended":
            logger.info("Open ended requested")
            open_ended_question = await harder_knowledge_check_open_ended(
                context, question_current
            )
            return open_ended_question
        elif restyle_type == "scenario-based":
            logger.info("Senario based requested")
            scenario_based_question = await knowledge_check_case_study(
                context, question_current
            )
            return scenario_based_question
        else:
            raise HTTPException(
                status_code=403,
                detail="An error occurred whilst restyling the content provided",
            )

    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500, detail="An error occured in regenerating speaker notes"
        ) from error


@generate_content_router_v1.post("/addnewquestion")
async def router_add_new_question_to_knowledge_check(
    request: Request, data: AddQuestionRequest
):
    log_incoming_request(request)
    logger.info("Entered router_add_new_question_to_knowledge_check")

    try:
        request_data = data.model_dump()
        logger.info("Add new question to knowledge check")
        context = request_data["context"]
        question_list = request_data["question_list"]

        new_question = await knowledge_check_add_question(context, question_list)
        return new_question
    except Exception as error:
        logger.error("Error in network")
        raise HTTPException(
            status_code=500,
            detail=f"An error occured in regenerating knowledge checkL {error}",
        ) from error


@generate_content_router_v1.get("/liveness")
async def get_liveness():
    """
    Liveness API call for K8's
    """
    return {"message": "TODO: implement liveness route"}


@generate_content_router_v1.get("/readiness")
async def get_readiness():
    """
    Readiness API call for K8's
    """
    return {"message": "TODO: implement readiness route"}
