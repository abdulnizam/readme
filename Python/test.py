import pytest
from unittest.mock import patch
from fastapi import HTTPException, FastAPI
from fastapi.testclient import TestClient


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global client
    from controller.routes import generate_content_router_v1
    app = FastAPI()
    app.include_router(generate_content_router_v1)
    client = TestClient(app)

# Mock dependencies


@pytest.fixture(autouse=True)
def mock_functions():
    with patch("controller.routes.get_content_for_methods") as mock_get_content, \
         patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
         patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
         patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
         patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
         patch("controller.routes.generate_knowledge_check_from_list_of_scripts") as mock_generate_knowledge_check, \
         patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
         patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
         patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
         patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
         patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
         patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
         patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
         patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
         patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
         patch("controller.routes.knowledge_check_add_question") as mock_add_question:
        
        mock_get_content.return_value = {"name": "Module 1", "topics": ["Topic 1", "Topic 2"]}
        mock_fetch_chunks.return_value = {"Relevant chunk citations: ": {"relevant_chunks": ["Citation 1", "Citation 2"]}}
        mock_generate_topics.return_value = [{"title": "Generated Topic", "objectives": "Some objectives"}]
        mock_generate_speaker_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Speaker notes"}]}
        mock_generate_facilitator_ppt.return_value = {"slides": [{"heading": "Slide 1", "script": "Speaker notes", "bullet_points": "Bullets"}]}
        mock_generate_knowledge_check.return_value = {"questions": [{"question": "What is AI?", "choices": ["A", "B", "C"], "answer": "A"}]}
        mock_regenerate_topic_outline.return_value = {"title": "Regenerated Topic", "objectives": "Updated Objectives"}
        mock_shorten_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Shortened Speaker Notes"}]}
        mock_shorten_bullets.return_value = {"bullet_points": "- AI basics"}
        mock_elaborate_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Elaborated Speaker Notes"}]}
        mock_more_formal_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "More Formal Notes"}]}
        mock_less_formal_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Less Formal Notes"}]}
        mock_harder_multi.return_value = {"question": "Multi-choice question", "choices": ["A", "B", "C"], "answer": "A"}
        mock_true_false.return_value = {"question": "Is AI real?", "choices": ["True", "False"], "answer": "True"}
        mock_case_study.return_value = {"question": "Case Study Question", "choices": ["Option 1", "Option 2"], "answer": "Option 1"}
        mock_add_question.return_value = {"question": "New Question", "choices": ["X", "Y"], "answer": "X"}

        yield

# Test GET /topicoutlines


def test_router_generate_topic_outlines():
    response = client.get("/generate/topicoutlines", headers={"Learning-ID": "123"})
    assert response.status_code == 200
    assert "title" in response.json()[0]


def test_router_generate_topic_outlines_400():
    response = client.get("/generate/topicoutlines", headers={})
    assert response.status_code == 400


def test_router_generate_topic_outlines_500():
    """Test that an unexpected exception returns HTTP 500"""

    with patch("controller.routes.get_content_for_methods") as mock_get_content_for_methods:
        mock_get_content_for_methods.side_effect = Exception("Mocked function failure")

        response = client.get("/generate/topicoutlines", headers={"Learning-ID": "123"})
        assert response.status_code == 500

# Test POST /regeneratetopicoutlines


def test_router_regenerate_topic_outlines():
    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
        "review_index": 0,
        "citations": [[{"id": "1", "title": "Citation", "chunks": "Chunk"}]]
    }
    response = client.post("/generate/regeneratetopicoutlines", json=payload, headers={"Learning-ID": "123"})
    assert response.status_code == 200
    assert "title" in response.json()


def test_router_regenerate_topic_outlines_400():
    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
        "review_index": 0,
        "citations": [[{"id": "1", "title": "Citation", "chunks": "Chunk"}]]
    }
    response = client.post("/generate/regeneratetopicoutlines", json=payload, headers={})
    assert response.status_code == 400


def test_router_regenerate_topic_outlines_500():
    """Test that an unexpected exception returns HTTP 500"""

    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
        "review_index": 0,
        "citations": [[{"id": "1", "title": "Citation", "chunks": "Chunk"}]]
    }

    with patch("controller.routes.get_content_for_methods") as mock_get_content_for_methods:
        mock_get_content_for_methods.side_effect = Exception("Mocked function failure")

        response = client.post("/generate/regeneratetopicoutlines", json=payload, headers={"Learning-ID": "123"})
        assert response.status_code == 500

# Test POST /corecontent


def test_generate_speaker_notes_and_facilitator_powerpoint():
    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
        "topic_index": 0
    }
    response = client.post("/generate/corecontent", json=payload, headers={"Learning-ID": "123"})
    assert response.status_code == 200
    assert "slides" in response.json()


def test_generate_speaker_notes_and_facilitator_powerpoint_500():
    """Test that an unexpected exception returns HTTP 500"""

    payload = {
        "topic_outlines": [{"title": "Topic 1", "objectives": "Objectives"}],
        "topic_index": 0
    }

    with patch("controller.routes.format_topic_outline_as_str") as mock_format_topic_outline_as_str:
        mock_format_topic_outline_as_str.side_effect = Exception("Mocked function failure")

        response = client.post("/generate/corecontent", json=payload, headers={"Learning-ID": "123"})
        assert response.status_code == 500

# Test POST /knowledgecheck


def test_router_generate_knowledge_check_for_facilitator_powerpoint():
    payload = {
        "slides": [
            {
                "heading": "Slide 1",
                "script": "Speaker Notes",
                "bullet_points": "- AI basics"
            }
        ],
        "topic_outline": {
            "title": "Topic 1",
            "objectives": "- Learn AI basics"
        }
    }
    response = client.post(
        "/generate/knowledgecheck",
        json=payload,
        headers={
            "Knowledge-Context": "facilitator-powerpoint-script"})
    assert response.status_code == 200


def test_router_generate_knowledge_check_powerpoint_script():
    """Test generating knowledge check using slide bullets as context (POWERPOINT_SCRIPT)"""
    payload = {
        "slides": [
            {
                "heading": "Slide 1",
                "script": "Speaker Notes",
                "bullet_points": "- AI helps"
            }
        ],
        "topic_outline": {
            "title": "Topic 1",
            "objectives": "Objectives"
        },
        "contextual_content": ""
    }

    response = client.post(
        "/generate/knowledgecheck",
        json=payload,
        headers={"Knowledge-Context": "powerpoint-script"}
    )

    assert response.status_code == 200


def test_router_generate_knowledge_check_500():
    """Test that an unexpected exception returns HTTP 500"""

    payload = {
        "slides": [
            {"heading": "Slide 1", "script": "Speaker Notes", "bullet_points": "- AI helps"}
        ],
        "topic_outline": {"title": "Topic 1", "objectives": "Objectives"},
        "contextual_content": "This is a slide bullet summary"
    }

    with patch("controller.routes.generate_knowledge_check_from_list_of_scripts") as mock_knowledge_check:
        mock_knowledge_check.side_effect = Exception("Mocked function failure")  # ❌ Simulating a failure

        response = client.post(
            "/generate/knowledgecheck",
            json=payload,
            headers={"Knowledge-Context": "facilitator-powerpoint-script"}
        )

    # Assertions
    assert response.status_code == 500


def test_router_generate_knowledge_check_400():
    """Test that an unexpected exception returns HTTP 500"""

    payload = {
        "slides": [
            {"heading": "Slide 1", "script": "Speaker Notes", "bullet_points": "- AI helps"}
        ],
        "topic_outline": {"title": "Topic 1", "objectives": "Objectives"},
        "contextual_content": "This is a slide bullet summary"
    }

    response = client.post(
        "/generate/knowledgecheck",
        json=payload,
        headers={}
    )

    assert response.status_code == 400

# Test POST /repromptpowerpoint


def test_router_reprompt_shorter_speaker_notes():
    payload = {
        "reprompt": "shorter",
        "slides": [
            {
                "heading": "Slide 1",
                "script": "AI is great",
                "bullet_points": "- AI helps"
            }
        ],
        "slide_index": 0,
        "citations": [{"id": "1", "title": "Citation 1", "chunks": "Chunk 1"}]
    }
    response = client.post("/generate/repromptpowerpoint", json=payload)
    assert response.status_code == 200
    assert response.json()["script"] == "Shortened Speaker Notes"


@pytest.mark.parametrize("reprompt_type, speaker_notes_mock, bullet_points_mock, expected_script, expected_bullets",
                         [("elaborate",
                           "controller.routes.elaborate_speaker_notes",
                           "controller.routes.elaborate_bullet_points",
                           "Elaborated Speaker Notes",
                           "Detailed Bullet Points"),
                          ("more-professional",
                           "controller.routes.more_formal_speaker_notes",
                             "controller.routes.more_formal_bullet_points",
                             "More Professional Speaker Notes",
                             "Professional Bullet Points"),
                             ("more-casual",
                              "controller.routes.less_formal_speaker_notes",
                              "controller.routes.less_formal_bullet_points",
                              "More Casual Speaker Notes",
                              "Casual Bullet Points"),
                          ])
def test_router_reprompt_speaker_notes(
        reprompt_type,
        speaker_notes_mock,
        bullet_points_mock,
        expected_script,
        expected_bullets):
    """Test reprompting speaker notes with different styles"""
    payload = {
        "reprompt": reprompt_type,
        "slides": [{"heading": "Slide 1", "script": "AI is great", "bullet_points": "- AI helps"}],
        "slide_index": 0,
        "citations": [{"id": "1", "title": "Citation 1", "chunks": "Chunk 1"}]
    }

    with patch(speaker_notes_mock) as mock_speaker_notes, patch(bullet_points_mock) as mock_bullets:
        mock_speaker_notes.return_value = {
            "slides": [{"heading": "Slide 1", "script": expected_script, "bullet_points": expected_bullets}]
        }
        mock_bullets.return_value = {"bullet_points": expected_bullets}

        response = client.post("/generate/repromptpowerpoint", json=payload)

        # Assertions
        assert response.status_code == 200
        assert "slides" in response.json()
        assert "bullet_points" in response.json()["slides"][0]  # Ensure bullet_points exists
        assert response.json()["slides"][0]["script"] == expected_script
        assert response.json()["slides"][0]["bullet_points"] == expected_bullets


@pytest.mark.parametrize("reprompt_type, expected_status, expected_detail", [
    ("invalid-type", 500, "An error occured in regenerating speaker notes"),
    ("elaborate", 500, "An error occured in regenerating speaker notes"),
])
def test_router_reprompt_speaker_notes_exceptions(reprompt_type, expected_status, expected_detail):
    """Test error handling in reprompting speaker notes"""
    payload = {
        "reprompt": reprompt_type,
        "slides": [{"heading": "Slide 1", "script": "AI is great", "bullet_points": "- AI helps"}],
        "slide_index": 0,
        "citations": [{"id": "1", "title": "Citation 1", "chunks": "Chunk 1"}]
    }

    with patch("controller.routes.elaborate_speaker_notes",
               side_effect=HTTPException(status_code=500,
                                         detail="An error occured in regenerating speaker notes")):
        response = client.post("/generate/repromptpowerpoint", json=payload)

        # Assertions
        assert response.status_code == expected_status
        assert response.json()["detail"] == expected_detail

# Test GET /liveness


def test_get_liveness():
    response = client.get("/generate/liveness")
    assert response.status_code == 200

# Test GET /readiness


def test_get_readiness():
    response = client.get("/generate/readiness")
    assert response.status_code == 200


def test_router_add_new_question_to_knowledge_check():
    payload = {
        "question_list": [
            {
                "question": "What is AI?",
                "choices": "- Machine Learning\n- Deep Learning",
                "answer": "Machine Learning"
            }
        ],
        "context": "Artificial Intelligence Basics"
    }

    response = client.post("/generate/addnewquestion", json=payload)
    assert response.status_code == 200
    assert "question" in response.json()
    assert response.json()["question"] == "New Question"


def test_router_add_new_question_to_knowledge_check_failure():
    payload = {
        "question_list": [
            {
                "question": "What is AI?",
                "choices": "- Machine Learning\n- Deep Learning",
                "answer": "Machine Learning"
            }
        ],
        "context": "Artificial Intelligence Basics"
    }

    with patch("controller.routes.knowledge_check_add_question", side_effect=Exception("Database Error")):
        response = client.post("/generate/addnewquestion", json=payload)
        assert response.status_code == 500


def test_router_reprompt_knowledge_check():
    payload = {
        "reprompt": "true-false",
        "current_question": {
            "question": "Is AI real?",
            "choices": "True\nFalse",
            "answer": "True"
        },
        "context": "Artificial Intelligence Basics"
    }

    response = client.post("/generate/repromptknowledgecheck", json=payload)
    assert response.status_code == 200
    assert response.json()["question"] == "Is AI real?"


def test_router_reprompt_knowledge_check_scenario_based():
    payload = {
        "reprompt": "scenario-based",
        "current_question": {
            "question": "Is AI real?",
            "choices": "True\nFalse",
            "answer": "True"
        },
        "context": "Artificial Intelligence Basics"
    }

    response = client.post("/generate/repromptknowledgecheck", json=payload)
    assert response.status_code == 200


def test_router_reprompt_knowledge_check_open_ended():
    """Test reprompting knowledge check for open-ended question"""
    payload = {
        "reprompt": "open-ended",
        "current_question": {
            "question": "What is AI?",
            "choices": "- Machine Learning\n- Deep Learning",
            "answer": "Machine Learning"
        },
        "context": "Artificial Intelligence Basics"
    }

    with patch("controller.routes.harder_knowledge_check_open_ended") as mock_harder_open_ended:
        mock_harder_open_ended.return_value = {
            "question": "Explain AI",
            "choices": "Free response",
            "answer": "AI is a field of study"
        }

        response = client.post("/generate/repromptknowledgecheck", json=payload)

        # Assertions
        assert response.status_code == 200
        assert response.json()["question"] == "Explain AI"
        assert response.json()["choices"] == "Free response"
        assert response.json()["answer"] == "AI is a field of study"


def test_router_reprompt_knowledge_check_multi_select():
    """Test reprompting knowledge check for multi-select question"""
    payload = {
        "reprompt": "multi-select",
        "current_question": {
            "question": "Which of these are AI techniques?",
            "choices": "- Machine Learning\n- Deep Learning\n- Blockchain",
            "answer": "- Machine Learning\n- Deep Learning"
        },
        "context": "AI Techniques"
    }

    with patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi:
        mock_harder_multi.return_value = {
            "question": "Select all AI techniques",
            "choices": "- Neural Networks\n- Decision Trees\n- Random Forest",
            "answer": "- Neural Networks\n- Decision Trees"
        }

        response = client.post("/generate/repromptknowledgecheck", json=payload)

        # Assertions
        assert response.status_code == 200
        assert response.json()["question"] == "Select all AI techniques"
        assert response.json()["choices"] == "- Neural Networks\n- Decision Trees\n- Random Forest"
        assert response.json()["answer"] == "- Neural Networks\n- Decision Trees"


def test_router_reprompt_knowledge_check_500():
    payload = {
        "reprompt": "not",
        "current_question": {
            "question": "Is AI real?",
            "choices": "True\nFalse",
            "answer": "True"
        },
        "context": "Artificial Intelligence Basics"
    }

    response = client.post("/generate/repromptknowledgecheck", json=payload)
    assert response.status_code == 500
