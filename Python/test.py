import pytest
from unittest.mock import MagicMock, patch


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global generate_topic_outlines, \
        generate_speaker_notes, \
        generate_facilitator_ppt, \
        deduplicate_topic_outlines_objectives, \
        list_to_markdown, \
        markdown_to_list, \
        combine_script_and_bullets, \
        run_concurrent_prompts, \
        run_json_prompt, \
        llama3_70b
    from model.generate_core_content import (
        generate_topic_outlines,
        generate_speaker_notes,
        generate_facilitator_ppt,
        deduplicate_topic_outlines_objectives,
        list_to_markdown,
        markdown_to_list,
        combine_script_and_bullets
    )
    from model.content_creation_funcs import run_concurrent_prompts, run_json_prompt
    from model.ai_models_config import llama3_70b


@pytest.fixture
def mock_llm():
    return MagicMock(spec=llama3_70b)


@pytest.fixture
def sample_topic_outlines():
    return [
        {"title": "Topic 1", "objectives": ["Define AI", "Explain machine learning"]},
        {"title": "Topic 2", "objectives": ["Describe neural networks", "Outline AI applications"]}
    ]


@pytest.fixture
def sample_speaker_notes():
    return {"slides": [{"heading": "Intro to AI", "script": "AI is a field of study."}]}


@pytest.fixture
def sample_slide_bullets():
    return {"slides": [{"heading": "Intro to AI", "script": "AI is a field of study",
                        "bullet_points": ["AI is important", ["Used in automation", "Self-learning"]]}]}


@pytest.fixture
def sample_knowledge_check():
    return {"questions": [{"question": "What is AI?",
                           "choices": ["A. A programming language",
                                       "B. A field of study", "C. A robot", "D. A database"], "answer": "B"}]}


@pytest.fixture
def mock_remove_similarities():
    """Mock remove_similarities()"""
    with patch("model.generate_core_content.remove_similarities") as mock_func:
        # Simulate deduplication (removes "Explain machine learning")
        mock_func.return_value = ["Define AI", "Describe neural networks", "Outline AI applications"]
        yield mock_func


def test_deduplicate_topic_outlines_objectives(
    mock_bedrock_embeddings, mock_remove_similarities, sample_topic_outlines
):
    """Test deduplication of topic outlines"""

    # Run function
    result, removed = deduplicate_topic_outlines_objectives(sample_topic_outlines)

    # Expected result: "Explain machine learning" should be removed
    expected_result = [
        {"title": "Topic 1", "objectives": ["Define AI"]},
        {"title": "Topic 2", "objectives": ["Describe neural networks", "Outline AI applications"]}
    ]

    assert result == expected_result
    assert removed == ["Explain machine learning"]
    mock_remove_similarities.assert_called_once()

# Test generate_topic_outlines


@patch("model.generate_core_content.run_concurrent_prompts")
@patch("model.generate_core_content.deduplicate_topic_outlines_objectives")
async def test_generate_topic_outlines(mock_deduplicate, mock_run, mock_llm):
    mock_run.return_value = [
        {"title": "Topic 1", "objectives": ["Define AI", "Explain ML"]},
        {"title": "Topic 2", "objectives": ["Describe neural networks"]}
    ]
    mock_deduplicate.return_value = (mock_run.return_value, [])

    module_title = "AI Basics"
    topic_descriptions = ["AI Introduction", "Neural Networks"]
    relevant_citations = [[{"title": "AI Paper", "chunks": "AI research details"}],
                          [{"title": "Neural Networks", "chunks": "AI research details"}]]

    result = await generate_topic_outlines(module_title, topic_descriptions, relevant_citations)
    assert len(result) == 2
    assert "title" in result[0]


# Test generate_speaker_notes
@patch("model.generate_core_content.run_json_prompt")
async def test_generate_speaker_notes(mock_run, sample_topic_outlines, sample_speaker_notes):
    mock_run.return_value = sample_speaker_notes
    result = await generate_speaker_notes(sample_topic_outlines, [], 0)
    assert "slides" in result
    assert len(result["slides"]) == 1


# Test generate_facilitator_ppt
@patch("model.generate_core_content.run_json_prompt")
async def test_generate_facilitator_ppt(mock_run, sample_speaker_notes, sample_slide_bullets):
    mock_run.return_value = sample_slide_bullets
    result = await generate_facilitator_ppt(sample_speaker_notes, [])
    assert "slides" in result
    assert "citations" in result


def test_list_to_markdown():
    """Test converting nested lists to markdown bullet points"""

    input_list = ["Point 1", ["Subpoint 1.1", "Subpoint 1.2"], "Point 2"]

    expected_markdown = """- Point 1
    - Subpoint 1.1
    - Subpoint 1.2
- Point 2
"""

    assert list_to_markdown(input_list) == expected_markdown


def test_list_to_markdown_str():
    """Test converting nested lists to markdown bullet points"""

    input_list = "testing markdown string"

    expected_markdown = "testing markdown string"

    assert list_to_markdown(input_list) == expected_markdown


def test_list_to_markdown_not_str_and_list():
    """Test converting nested lists to markdown bullet points"""

    input_list = 1234

    expected_markdown = "1234"

    assert list_to_markdown(input_list) == expected_markdown


def test_markdown_to_list():
    """Test converting markdown bullet points to a nested list"""

    markdown_input = """- Point 1
    - Subpoint 1.1
    - Subpoint 1.2
- Point 2
"""

    expected_list = ["Point 1", ["Subpoint 1.1", "Subpoint 1.2"], "Point 2"]

    assert markdown_to_list(markdown_input) == expected_list


def test_markdown_to_list_stack_pop():
    """
    Test markdown_to_list() to ensure stack.pop() is executed
    when indentation decreases.
    """

    markdown_input = """- Main point
    - Subpoint A
        - Sub-subpoint A.1
    - Subpoint B
    - Main point 2
        - Subpoint C
"""
    expected_list = "Main point"

    result = markdown_to_list(markdown_input)

    assert expected_list in result


def test_combine_script_and_bullets():
    """Test merging speaker notes and slide content into a single object"""

    speaker_notes_json = {
        "slides": [
            {"heading": "Slide 1", "script": "This is the script for Slide 1"},
            {"heading": "Slide 2", "script": "This is the script for Slide 2"}
        ]
    }

    slide_content_json = {
        "slides": [
            {"heading": "Slide 1", "bullet_points": ["Point A", "Point B"]},
            {"heading": "Slide 2", "bullet_points": ["Point X", "Point Y"]}
        ]
    }

    expected_output = {
        "slides": [
            {"heading": "Slide 1", "script": "This is the script for Slide 1", "bullet_points": ["Point A", "Point B"]},
            {"heading": "Slide 2", "script": "This is the script for Slide 2", "bullet_points": ["Point X", "Point Y"]}
        ]
    }

    assert combine_script_and_bullets(speaker_notes_json, slide_content_json) == expected_output
