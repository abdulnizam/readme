import traceback

@app.errorhandler(Exception)
def handle_exception(e):
    print(traceback.format_exc())  # logs full stack trace
    return jsonify({
        "error": "Internal Server Error",
        "message": str(e)
    }), 500