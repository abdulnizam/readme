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

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s",
)

logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    app_log_level: str
    bedrock_embedding_model_id: str
    bedrock_harms_guardrail_id: str = Field(
        metadata={"source_type": "ssm", "name": os.getenv("BEDROCK_HARMS_GUARDRAIL_ID")}
    )
    bedrock_harms_guardrail_version: str = Field(
        metadata={
            "source_type": "ssm",
            "name": os.getenv("BEDROCK_HARMS_GUARDRAIL_VERSION"),
        }
    )
    bedrock_guardrail_blocked_prompt_message: str = Field(
        metadata={
            "source_type": "ssm",
            "name": os.getenv("BEDROCK_GUARDRAIL_BLOCKED_PROMPT_MESSAGE"),
        }
    )
    bedrock_guardrail_blocked_response_message: str = Field(
        metadata={
            "source_type": "ssm",
            "name": os.getenv("BEDROCK_GUARDRAIL_BLOCKED_RESPONSE_MESSAGE"),
        }
    )
    bedrock_llama3_8b_model_id: str
    bedrock_llama3_70b_model_id: str
    bedrock_pii_guardrail_id: str = Field(
        metadata={"source_type": "ssm", "name": os.getenv("BEDROCK_PII_GUARDRAIL_ID")}
    )
    bedrock_pii_guardrail_version: str = Field(
        metadata={
            "source_type": "ssm",
            "name": os.getenv("BEDROCK_PII_GUARDRAIL_VERSION"),
        }
    )
    services_doc_manager_host: str

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", case_sensitive=False, extra="ignore"
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
            # Iterate over fields and check which ones are AWS secrets
            for field_name, field_model in cls.model_fields.items():
                if field_model.json_schema_extra and field_model.json_schema_extra.get(
                    "metadata"
                ):
                    source_type = field_model.json_schema_extra.get("metadata").get(
                        "source_type"
                    )
                    sts_client = boto3.client("sts", verify=False)
                    value_name = field_model.json_schema_extra.get("metadata").get(
                        "name", field_name
                    )
                    container_aws_role = os.getenv("CONTAINER_AWS_ROLE")

                    try:
                        response = sts_client.assume_role(
                            RoleArn=container_aws_role,
                            RoleSessionName="CrossAccountSession",
                        )

                        credentials = response["Credentials"]

                        # TODO: add DWP AWS CA chain
                        client = boto3.client(
                            source_type,
                            verify=False,
                            aws_access_key_id=credentials["AccessKeyId"],
                            aws_secret_access_key=credentials["SecretAccessKey"],
                            aws_session_token=credentials["SessionToken"],
                        )

                        response = client.get_parameter(Name=value_name)
                        value = response["Parameter"]["Value"]

                        data[field_name] = value
                    except Exception as e:
                        logger.error(e)

            return data

        # Return sources in the desired priority:
        # 1. AWS Secrets Manager
        # 2. Environment variables
        # 3. .env file
        return aws_source, env_settings, dotenv_settings


settings = Settings()

# Use get_settings to return the latest values (in case of refresh)


def get_settings():
    return settings


# Refresh the settings


def refresh_settings():
    global settings
    settings = Settings()
