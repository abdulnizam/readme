from flask import Flask, jsonify
from werkzeug.exceptions import HTTPException

@app.errorhandler(Exception)
def handle_exception(e):
    # If it's an HTTPException (e.g., 404, 500), use its code and description
    if isinstance(e, HTTPException):
        return jsonify({
            "error": e.name,
            "message": e.description,
        }), e.code

    # Otherwise, it's a custom exception like the one you raised
    return jsonify({
        "error": "Internal Server Error",
        "message": str(e)
    }), 500