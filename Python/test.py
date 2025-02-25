@pytest.fixture(autouse=True)
def mock_functions():
    with patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks:
        # Fix the mock return to ensure it returns a tuple of two values
        mock_fetch_chunks.return_value = ([{"citation": "Sample Citation"}], False)


@pytest.fixture(scope="module", autouse=True)
def mock_aws_credentials():
    """Mock AWS credentials to prevent real API calls"""
    import os
    os.environ["AWS_ACCESS_KEY_ID"] = "testing"
    os.environ["AWS_SECRET_ACCESS_KEY"] = "testing"
    os.environ["AWS_SESSION_TOKEN"] = "testing"


mock_shorten_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Shortened Speaker Notes"}]}