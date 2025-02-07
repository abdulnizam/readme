
@pytest.fixture(scope="module")
def mock_settings():
    """Mocks the `Settings` class to avoid missing environment variables errors."""
    with patch("config.Settings", autospec=True) as mock_settings:  # ✅ Use correct import path
        mock_instance = MagicMock()
        
        # ✅ Define mocked settings values
        mock_instance.services_malware_host = "mock_host"
        mock_instance.services_malware_port = 8000
        mock_instance.app_log_level = "INFO"
        mock_instance.bedrock_pii_guardrail_id = "mock_guardrail_id"
        mock_instance.bedrock_pii_guardrail_version = "mock_version"
        mock_instance.bedrock_embedding_model_id = "mock_model_id"
        mock_instance.db_hostname = "mock_db_host"
        mock_instance.db_port = "5432"
        mock_instance.db_name = "mock_db"

        mock_settings.return_value = mock_instance  # ✅ Return mock instance
        yield mock_instance  # ✅ Yield so it works with `pytest`