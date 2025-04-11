@app.route("/query", methods=["POST"])
async def query():
    logger.info("DWPASK-BE-APP-02")
    try:
      if request.method == "POST":
        question = request.get_json()["query"]
        chat_history = request.get_json()["chat_history"]
        if config.countries:
            location = request.get_json()["location"]
            answer, citations = generate_response(
                question, chat_history, config, location
            )
        else:
            answer, citations = generate_response(
                question, chat_history, config, location=None
            )
        logger.info("DWPASK-BE-APP-03")
        message_id = await handle_request(
            request,
            chat_history[-1] if chat_history else {},
            question,
            answer,
            citations,
            "Query",
        )
        return {"answer": answer, "citations": citations, "id": message_id}
    except Exception as e:
      raise Exception(f"Something went wrong - {e}")


@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "error": "Internal Server Error",
        "message": str(error) - its not capturing exact error message which is (Something went wrong - 'HTTP_X_ACCESS_TOKEN')
    }), 500

it instead giving general message

{
    "error": "Internal Server Error",
    "message": "500 Internal Server Error: The server encountered an internal error and was unable to complete your request. Either the server is overloaded or there is an error in the application."
}
