# prisma_error_handler.py

from flask import jsonify
from prisma.errors import (
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientRustPanicError,
    PrismaClientInitializationError,
    PrismaError,
)

def handle_prisma_exception(error: Exception):
    if isinstance(error, PrismaClientKnownRequestError):
        # You can inspect error.code here to return more specific messages
        return jsonify({
            "error": "Bad Request",
            "message": str(error)
        }), 400

    elif isinstance(error, PrismaClientUnknownRequestError):
        return jsonify({
            "error": "Unknown Prisma Error",
            "message": str(error)
        }), 500

    elif isinstance(error, PrismaClientRustPanicError):
        return jsonify({
            "error": "Prisma engine crashed",
            "message": str(error)
        }), 500

    elif isinstance(error, PrismaClientInitializationError):
        return jsonify({
            "error": "Database initialization error",
            "message": str(error)
        }), 500

    elif isinstance(error, PrismaError):
        return jsonify({
            "error": "Generic Prisma error",
            "message": str(error)
        }), 500

    else:
        return jsonify({
            "error": "Internal Server Error",
            "message": str(error)
        }), 500
    

from flask import Flask, request, jsonify
from prisma import Prisma
from prisma_error_handler import handle_prisma_exception

app = Flask(__name__)
db = Prisma()

@app.route("/user", methods=["POST"])
async def create_user():
    try:
        data = request.get_json()
        user = await db.users.create({
            "email": data["email"],
            "name": data["name"],
        })
        return jsonify(user), 201

    except Exception as e:
        return handle_prisma_exception(e)