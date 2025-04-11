import logging
from flask import jsonify
from werkzeug.exceptions import HTTPException
from prisma.errors import PrismaError
from modules.errors import AzureOpenAIError

logger = logging.getLogger(__name__)


def handle_http_exception(error):
    return jsonify({
        "error": error.name,
        "message": error.description,
    }), error.code


def handle_prisma_error(error):
    logger.error("Prisma error occurred: %s", error)
    return jsonify({
        "error": "Database Error",
        "message": str(error),
    }), 500


def handle_azure_openai_error(error: AzureOpenAIError):
    return jsonify(error.to_dict()), error.status_code


def handle_generic_exception(error):
    logger.error("Unexpected error: %s", error)
    return jsonify({
        "error": "Internal Server Error",
        "message": str(error),
    }), 500


def register_error_handlers(app):
    app.register_error_handler(HTTPException, handle_http_exception)
    app.register_error_handler(PrismaError, handle_prisma_error)
    app.register_error_handler(AzureOpenAIError, handle_azure_openai_error)
    app.register_error_handler(Exception, handle_generic_exception)