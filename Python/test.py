import pytest
import logging
import json
from unittest.mock import patch, MagicMock
from config import get_settings, refresh_settings
from model.regnerate_content import regenerate_topic_outline


@pytest.fixture(scope="module", autouse=True)
def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
    """Ensure AWS helpers are mocked before tests."""
    pass


logger = logging.getLogger()


@pytest.fixture(autouse=True)
def mock_run_concurrent_prompts():
    """Mock the AI response to return a predefined new topic outline."""
    with patch("model.regnerate_content.run_concurrent_prompts") as mock_prompt:
        mock_prompt.return_value = [{"title": "New Topic", "objectives": ["Updated Objective"]}]
        yield mock_prompt


@pytest.fixture
def sample_topic_outlines():
    """Provide sample topic outlines for the test."""
    return [
        {"title": "Topic 1", "objectives": "obj"},
        {"title": "Topic 2", "objectives": ["Describe neural networks", "Outline AI applications"]}
    ]


@pytest.fixture
def sample_relevant_citations():
    """Provide sample relevant citations."""
    return [
        [{"title": "AI Research", "chunks": "Some AI content"}],
        [{"title": "Neural Networks", "chunks": "Some AI content"}]
    ]


@pytest.fixture(autouse=True)
def mock_bedrock_embedding():
    """Mock AWS Bedrock embedding function to avoid real API calls."""
    with patch("langchain_aws.embeddings.bedrock.BedrockEmbeddings.embed_documents") as mock_embed:
        # Mock the response to return fake embeddings
        mock_embed.return_value = [[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]]
        yield mock_embed


@pytest.fixture(autouse=True)
def mock_boto3_client():
    """Mock boto3.client calls to return expected JSON responses."""
    with patch("boto3.client") as mock_boto:
        # Mock STS client for role assumption
        mock_sts = MagicMock()
        mock_sts.assume_role.return_value = {
            "Credentials": {
                "AccessKeyId": "mock-access-key",
                "SecretAccessKey": "mock-secret-key",
                "SessionToken": "mock-session-token",
            }
        }

        # Mock Bedrock response with a valid JSON format
        mock_bedrock = MagicMock()
        mock_bedrock.invoke_model.return_value = {
            "body": MagicMock(read=lambda: json.dumps({"embedding": [[0.1, 0.2, 0.3]]}))
        }

        def mock_boto_side_effect(service_name, *args, **kwargs):
            if service_name == "sts":
                return mock_sts
            return mock_bedrock

        mock_boto.side_effect = mock_boto_side_effect
        yield mock_boto


@pytest.mark.asyncio
async def test_regenerate_topic_outline(
    sample_topic_outlines, sample_relevant_citations, mock_run_concurrent_prompts, mock_bedrock_embedding
):
    """Test topic outline regeneration to ensure AI response is properly handled."""
    
    result = await regenerate_topic_outline(
        sample_topic_outlines,
        "Module Title",
        ["Description 1", "Description 2"],
        sample_relevant_citations,
        topic_index=0
    )

    # Ensure the returned object is a dictionary
    assert isinstance(result, dict)

    # Ensure the AI-generated title is correctly assigned
    assert result["title"] == "New Topic"

    # Ensure AI-generated objectives are correctly set
    assert "Updated Objective" in result["objectives"]