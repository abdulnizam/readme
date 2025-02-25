def test_router_regenerate_topic_outlines():
    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],  # ✅ Fix: Make objectives a string
        "review_index": 0,
        "citations": [[{"id": "1", "title": "Citation", "chunks": "Chunk"}]]  # ✅ Correct format
    }

    mock_content_response = {
        "name": "Module 1",
        "topics": ["Topic 1", "Topic 2"]
    }

    mock_regenerated_topic_outline = {
        "title": "Regenerated Topic",
        "objectives": "Updated Objectives",  # ✅ Fix: Make objectives a string
        "citations": [{"id": "1", "title": "Citation", "chunks": "Chunk"}]
    }

    with patch("controller.routes.get_content_for_methods", return_value=mock_content_response), \
         patch("controller.routes.regenerate_topic_outline", return_value=mock_regenerated_topic_outline):
        
        response = client.post("/generate/regeneratetopicoutlines", json=payload, headers={"Learning-ID": "123"})
        
        assert response.status_code == 200
        assert "title" in response.json()
        assert "objectives" in response.json()
        assert response.json()["title"] == "Regenerated Topic"