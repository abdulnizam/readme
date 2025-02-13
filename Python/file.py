import boto3
import os
import logging
from functools import wraps
from botocore.exceptions import ClientError

logger = logging.getLogger()


def get_credentials():
    """Retrieve temporary AWS credentials using STS assume_role."""
    try:
        container_aws_role = os.getenv("CONTAINER_AWS_ROLE")

        sts_client = boto3.client("sts", verify=False)

        response = sts_client.assume_role(
            RoleArn=container_aws_role, RoleSessionName="CrossAccountSession"
        )

        logger.debug("%s credentials retrieved", container_aws_role)
        return response["Credentials"]
    except Exception as error:
        logger.error(f"Error retrieving credentials: {error}")
        raise error


def get_client(service: str):
    """Create a boto3 client with temporary credentials."""
    try:
        bedrock_endpoint = os.getenv("BEDROCK_ENDPOINT")

        credentials = get_credentials()
        # TODO: add DWP AWS CA chain
        client = boto3.client(
            service,
            endpoint_url=bedrock_endpoint or None,
            verify=False,
            aws_access_key_id=credentials["AccessKeyId"],
            aws_secret_access_key=credentials["SecretAccessKey"],
            aws_session_token=credentials["SessionToken"],
        )

        return client
    except Exception as e:  # Correctly capture the exception
        logger.error(f"Error in get_client: {e}")
        raise e


def retry_if_invalid_settings(func):
    """Decorator to retry function if settings are invalid."""

    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except ClientError as error:
            if hasattr(error, "response") and "Error" in error.response:
                # If validation error, refresh settings and try again
                if error.response["Error"]["Code"] == "ValidationException":
                    # Import inside function to avoid circular import
                    from config import refresh_settings

                    refresh_settings()
                    return func(*args, **kwargs)
            # Raise an exception for any other error
            raise error

    return wrapper
