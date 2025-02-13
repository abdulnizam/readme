import boto3
import os
from pydantic import Field
from pydantic_settings import (
    BaseSettings,
    SettingsConfigDict,
    PydanticBaseSettingsSource,
)
from typing import Any
import logging

# Disable InsecureRequestWarning while DWP CA gets sorted out
import warnings
import urllib3

warnings.simplefilter("ignore", urllib3.exceptions.InsecureRequestWarning)

# Explicitly set logging format (Mutation-proof)
LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s"

logging.basicConfig(
    level=logging.INFO,
    format=LOGGING_FORMAT,
)

logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    services_malware_host: str
    services_malware_port: int
    app_log_level: str

    # ✅ Fixed mutations on metadata keys (Ensures correct retrieval)
    bedrock_pii_guardrail_id: str = Field(
        metadata={
            "source_type": "ssm",
            "name": os.getenv("BEDROCK_PII_GUARDRAIL_ID", ""),
        }
    )
    bedrock_pii_guardrail_version: str = Field(
        metadata={
            "source_type": "ssm",
            "name": os.getenv("BEDROCK_PII_GUARDRAIL_VERSION", ""),
        }
    )
    
    bedrock_embedding_model_id: str
    db_hostname: str
    db_port: str
    db_name: str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    @classmethod
    def settings_customise_sources(
        cls,
        settings_cls: type[BaseSettings],
        init_settings: PydanticBaseSettingsSource,
        env_settings: PydanticBaseSettingsSource,
        dotenv_settings: PydanticBaseSettingsSource,
        file_secret_settings: PydanticBaseSettingsSource,
    ) -> tuple[PydanticBaseSettingsSource, ...]:

        def aws_source() -> dict[str, Any]:
            data = {}
            # ✅ Ensure safe retrieval of AWS secrets
            for field_name, field_model in cls.model_fields.items():
                if field_model.json_schema_extra and field_model.json_schema_extra.get("metadata"):
                    metadata = field_model.json_schema_extra.get("metadata")

                    # ✅ Ensure these are correctly retrieved (Mutation-proof)
                    source_type = metadata.get("source_type", "")
                    value_name = metadata.get("name", field_name)

                    container_aws_role = os.getenv("CONTAINER_AWS_ROLE", "")

                    if not container_aws_role:
                        logger.warning(f"Missing CONTAINER_AWS_ROLE environment variable. Skipping {field_name}.")
                        continue

                    try:
                        sts_client = boto3.client("sts", verify=False)
                        response = sts_client.assume_role(
                            RoleArn=container_aws_role,
                            RoleSessionName="CrossAccountSession",
                        )

                        credentials = response["Credentials"]

                        # ✅ Ensure proper AWS Client Initialization
                        client = boto3.client(
                            service_name=source_type,
                            verify=False,
                            aws_access_key_id=credentials["AccessKeyId"],
                            aws_secret_access_key=credentials["SecretAccessKey"],
                            aws_session_token=credentials["SessionToken"],
                        )

                        response = client.get_parameter(Name=value_name)
                        value = response["Parameter"]["Value"]
                        data[field_name] = value

                    except Exception as e:
                        logger.error(f"Error retrieving {field_name} from AWS: {e}")

            return data

        # ✅ Ensure priority of settings sources
        return aws_source, env_settings, dotenv_settings


# ✅ Ensure global settings object is updated dynamically
settings = Settings()


def get_settings():
    """Returns the latest settings instance"""
    return settings


def refresh_settings():
    """Refresh settings dynamically"""
    global settings
    settings = Settings()