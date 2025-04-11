# error_handler.py

from flask import jsonify
from werkzeug.exceptions import HTTPException
from prisma.errors import (
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientRustPanicError,
    PrismaClientInitializationError,
    PrismaError,
)

# ✅ Optional: Define your custom app-level exceptions
class InvalidInputError(Exception):
    pass

class MissingAuthTokenError(Exception):
    pass


def handle_prisma_exception(e: Exception):
    if isinstance(e, PrismaClientKnownRequestError):
        return jsonify({"error": "Bad Request", "message": str(e)}), 400
    elif isinstance(e, PrismaClientInitializationError):
        return jsonify({"error": "DB Init Error", "message": str(e)}), 500
    elif isinstance(e, PrismaClientRustPanicError):
        return jsonify({"error": "Prisma Engine Crashed", "message": str(e)}), 500
    elif isinstance(e, PrismaClientUnknownRequestError):
        return jsonify({"error": "Unknown Prisma Error", "message": str(e)}), 500
    elif isinstance(e, PrismaError):
        return jsonify({"error": "Prisma Error", "message": str(e)}), 500
    return None


def global_error_handler(e: Exception):
    # 🔹 Prisma DB error
    prisma_response = handle_prisma_exception(e)
    if prisma_response:
        return prisma_response

    # 🔹 HTTP built-in errors (e.g. 404, 403)
    if isinstance(e, HTTPException):
        return jsonify({
            "error": e.name,
            "message": e.description
        }), e.code

    # 🔹 Custom app errors
    if isinstance(e, InvalidInputError):
        return jsonify({"error": "Invalid Input", "message": str(e)}), 400

    if isinstance(e, MissingAuthTokenError):
        return jsonify({"error": "Authentication Error", "message": str(e)}), 401

    # 🔹 All other exceptions
    return jsonify({
        "error": "Internal Server Error",
        "message": str(e)
    }), 500


from flask import Flask
from error_handler import global_error_handler

app = Flask(__name__)

# Register the global exception handler
app.register_error_handler(Exception, global_error_handler)



from error_handler import InvalidInputError, MissingAuthTokenError
from flask import request

@app.route("/demo")
async def demo_route():
    token = request.headers.get("x-access-token")
    if not token:
        raise MissingAuthTokenError("x-access-token is missing in headers")

    if len(token) < 10:
        raise InvalidInputError("Provided token is too short")

    # Simulate Prisma error
    raise PrismaClientKnownRequestError("This is a Prisma error", code="P2002", meta={})