@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "error": "Internal Server Error",
        "message": str(error)
    }), 500



@app.route("/fail")
def fail():
    raise Exception("Something went really wrong")