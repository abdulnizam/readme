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




get_content_for_methods


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


regenerate_topic_outline


async def regenerate_topic_outline(
    topic_outlines,
    module_title,
    topic_descriptions_list,
    relevant_topic_citations,
    topic_index,
):

    # Ensure topic outlines have objectives as list (not markdown)
    for to in topic_outlines:
        if isinstance(to["objectives"], str):
            to["objectives"] = markdown_to_list(to["objectives"])

    # Format a prompt to generate each topic outline
    topic_outline_prompts = make_topic_outline_prompts(
        module_title,
        topic_descriptions_list,
        relevant_topic_citations,
        TOPIC_OUTLINES_ONE_SHOT,
    )

    # Pick out the prompt for the single topic to regenerate
    regen_topic_outline_prompt = [topic_outline_prompts[topic_index]]

    # Regenerate response for the topic
    regenerated_topic_outline = run_concurrent_prompts(
        regen_topic_outline_prompt, llama3_70b, is_json=True, style_guide_llm=llama3_70b
    )[0]

    # Replace the topic outline that we regenerated
    topic_outlines[topic_index] = regenerated_topic_outline

    # Remove duplicates (compare with other topic outlines)
    topic_outlines, _ = deduplicate_topic_outlines_objectives(topic_outlines)

    # Apply post-processing
    topic_outlines = post_process_topic_outlines(
        topic_outlines,
        relevant_topic_citations,
    )

    renegerated_topic_outline = topic_outlines[topic_index]
    return renegerated_topic_outline
