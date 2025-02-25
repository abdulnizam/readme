import pytest
import logging
from unittest.mock import patch


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    global regenerate_topic_outline
    from model.regnerate_content import (
        regenerate_topic_outline
    )


logger = logging.getLogger()


@pytest.fixture(autouse=True)
def mock_run_concurrent_prompts():
    with patch("model.regnerate_content.run_concurrent_prompts") as mock_prompt:
        mock_prompt.return_value = [{"title": "New Topic", "objectives": ["Updated Objective"]}]
        yield mock_prompt


@pytest.fixture
def sample_topic_outlines():
    return [
        {"title": "Topic 1", "objectives": "obj"},
        {"title": "Topic 2", "objectives": ["Describe neural networks", "Outline AI applications"]}
    ]


@pytest.fixture
def sample_relevant_citations():
    return [
        [{"title": "AI Research", "chunks": "Some AI content"}],
        [{"title": "Neural Networks", "chunks": "Some AI content"}]
    ]

@pytest.mark.asyncio
async def test_regenerate_topic_outline(
    sample_topic_outlines, sample_relevant_citations, mock_run_concurrent_prompts,
):
    result = await regenerate_topic_outline(
        sample_topic_outlines,
        "Module Title",
        ["Description 1", "Description 2"],
        sample_relevant_citations,
        topic_index=0
    )

    assert isinstance(result, dict)
    assert result["title"] == "New Topic"
    assert "Updated Objective" in result["objectives"]
