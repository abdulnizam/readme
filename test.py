# error_handlers.py

import logging
from flask import jsonify
from werkzeug.exceptions import HTTPException
from prisma.errors import PrismaClientKnownRequestError, PrismaClientValidationError
from modules.errors import AzureOpenAIError

logger = logging.getLogger(__name__)


def register_error_handlers(app):
    @app.errorhandler(AzureOpenAIError)
    def handle_azure_openai_error(error):
        logger.error(f"AzureOpenAIError: {error.message}")
        return jsonify(error.to_dict()), error.status_code

    @app.errorhandler(PrismaClientKnownRequestError)
    def handle_prisma_known_error(error):
        logger.error(f"PrismaKnownError: {str(error)}")
        return jsonify({
            "error": "Database Error",
            "message": str(error)
        }), 400

    @app.errorhandler(PrismaClientValidationError)
    def handle_prisma_validation_error(error):
        logger.error(f"PrismaValidationError: {str(error)}")
        return jsonify({
            "error": "Validation Error",
            "message": str(error)
        }), 422

    @app.errorhandler(HTTPException)
    def handle_http_exception(error):
        logger.warning(f"HTTPException: {error.name} - {error.description}")
        return jsonify({
            "error": error.name,
            "message": error.description
        }), error.code

    @app.errorhandler(Exception)
    def handle_general_exception(error):
        logger.exception("Unhandled Exception")
        return jsonify({
            "error": "Internal Server Error",
            "message": str(error)
        }), 500



from error_handlers import register_error_handlers


register_error_handlers(app)