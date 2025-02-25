def test_router_regenerate_topic_outlines():
    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": ["Objectives"]}],  # Ensure objectives is a list
        "review_index": 0,
        "citations": [[{"id": "1", "title": "Citation", "chunks": "Chunk"}]]
    }

    mock_content_response = {
        "name": "Module 1",
        "topics": ["Topic 1", "Topic 2"]
    }

    mock_regenerated_topic_outline = {
        "title": "Regenerated Topic",
        "objectives": ["Updated Objectives"],  # Ensure it's a list
        "citations": [{"id": "1", "title": "Citation", "chunks": "Chunk"}]
    }

    with patch("controller.routes.get_content_for_methods", return_value=mock_content_response), \
         patch("controller.routes.regenerate_topic_outline", return_value=mock_regenerated_topic_outline):
        
        response = client.post("/generate/regeneratetopicoutlines", json=payload, headers={"Learning-ID": "123"})
        
        assert response.status_code == 200
        assert "title" in response.json()
        assert "objectives" in response.json()
        assert response.json()["title"] == "Regenerated Topic"



@generate_content_router_v1.post("/regeneratetopicoutlines")
async def router_regenerate_topic_outlines(
    request: Request, data: RegenerateTopicOutlinesRequest
):
    log_incoming_request(request)
    logger.info("Entered content generation request")
    learning_id = request.headers.get("Learning-ID")

    if not learning_id:
        logger.error("Error occurred: missing learning_id header")
        raise HTTPException(status_code=400, detail="Missing learning_id header")

    try:
        request_data = data.model_dump()
        generated_topic_outlines = request_data["topic_outlines"]
        
        # ✅ Mocked in test, should return name and topics
        name_and_topics = await get_content_for_methods(learning_id)
        module_title = name_and_topics["name"]
        topic_descriptions_list = name_and_topics["topics"]
        relevant_topic_citations = request_data["citations"]
        topic_index = request_data["review_index"]

        logger.info("Generating topic outlines")
        regenerated_topic_outline = await regenerate_topic_outline(
            generated_topic_outlines,
            module_title,
            topic_descriptions_list,
            relevant_topic_citations,
            topic_index,
        )

        # ✅ Safe removal of "citations" to avoid KeyError
        regenerated_topic_outline.pop("citations", None)

        return regenerated_topic_outline

    except Exception as error:
        logger.error(f"Error in network: {error}")
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred in topic outline generation: {error}",
        ) from error