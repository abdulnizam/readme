import logging
import signal
import time
import asyncio
from prisma import Prisma

from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from waitress import serve

from functions.searchresponse import generate_response
from functions.modifyresponse import (
    summarise_response,
    elaborate_response,
    generate_follow_up_qs,
)
from modules.errors import AzureOpenAIError
from modules.dwp_ask_config import DWPAskConfig

from werkzeug.exceptions import HTTPException

from db.utils.posting_utils import handle_request
from db.post_feedback import post_feedback
from db.get_messages import get_messages

from db.utils.decode_token import decode_token

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Variable to track readiness
is_ready = False

app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
logger.info("DWPASK-BE-APP-00")
config = DWPAskConfig("config.yaml")
# app.config.from_file("config.yaml", load=yaml.safe_load)
cors = CORS()
cors.init_app(app)
db = Prisma()

# Function to handle the SIGTERM signal for graceful shutdown
def handle_sigterm(signal, frame):
    global is_ready
    is_ready = False
    time.sleep(5)  # simulate graceful shutdown delay
    print("Graceful shutdown complete")
    exit(0)


def handle_azure_openai_error(e):
    return jsonify(e.to_dict()), e.status_code


# Register the SIGTERM signal handler
signal.signal(signal.SIGTERM, handle_sigterm)
app.register_error_handler(AzureOpenAIError, handle_azure_openai_error)

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

@app.route("/readiness")
def readiness_probe():
    if is_ready:
        # logger.info("DWPASK-BE-APP-10")
        return jsonify({"status": "ready"}), 200
    else:
        logger.warning("DWPASK-BE-APP-11")
        return jsonify({"status": "not ready"}), 503


@app.route("/liveness")
def liveness_probe():
    # Simply returning 200 OK indicates the application is alive
    # logger.info("DWPASK-BE-APP-12")
    return jsonify({"status": "alive"}), 200


@app.route("/health")
def healthcheck():
    logger.info("DWPASK-BE-APP-13")
    response = make_response("healthcheck", 200)
    response.mimetype = "text/plain"
    return response


@app.route('/health/db')
def check_db_health():
    try:
        # Run the async connection check
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        result = loop.run_until_complete(connect_and_check())

        if result:
            return jsonify({"status": "success", "message": "Connected to Cosmos DB"}), 200
        else:
            return jsonify({"status": "error", "message": "Could not connect"}), 500

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

async def connect_and_check():
    try:
        await db.connect()
        await db.disconnect()
        return True
    except Exception:
        return False

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
      raise Exception(e)
    


@app.route("/summarise", methods=["POST"])
async def summarise():
    logger.info("DWPASK-BE-APP-04")
    if request.method == "POST":
        prev_chat = request.get_json()["prev_chat"]
        prev_question = prev_chat["question"]
        prev_answer = prev_chat["answer"]
        summarised_answer = summarise_response(prev_question, prev_answer, config)
        logger.info("DWPASK-BE-APP-05")
        message_id = await handle_request(
            request, prev_chat, "Summarise", summarised_answer, [], "Summarise"
        )
        return {"summarised_answer": summarised_answer, "id": message_id}


@app.route("/elaborate", methods=["POST"])
async def elaborate():
    logger.info("DWPASK-BE-APP-06")
    if request.method == "POST":
        prev_chat = request.get_json()["prev_chat"]
        prev_question = prev_chat["question"]
        prev_answer = prev_chat["answer"]
        prev_context = prev_chat["citations"]
        elaborated_answer = elaborate_response(
            prev_question, prev_answer, prev_context, config
        )
        logger.info("DWPASK-BE-APP-07")
        message_id = await handle_request(
            request, prev_chat, "Elaborate", elaborated_answer, [], "Elaborate"
        )
        return {"elaborated_answer": elaborated_answer, "id": message_id}


@app.route("/followup", methods=["POST"])
async def followup():
    logger.info("DWPASK-BE-APP-08")
    if request.method == "POST":
        prev_chat = request.get_json()["prev_chat"]
        prev_question = prev_chat["question"]
        prev_answer = prev_chat["answer"]
        prev_context = prev_chat["citations"]
        follow_up_qs = generate_follow_up_qs(
            prev_question, prev_answer, prev_context, config
        )
        logger.info("DWPASK-BE-APP-09")
        message_id = await handle_request(
            request,
            prev_chat,
            "Generate related follow-up questions",
            follow_up_qs,
            [],
            "Follow Up",
        )
        return {"follow_up_qs": follow_up_qs, "id": message_id}
    
@app.route("/feedback", methods=["POST"])
async def feedback():
    logger.info("DWPASK-BE-APP-14")
    if request.method == "POST":
        feedback_data = request.get_json()
        message_id = feedback_data["id"]
        types = feedback_data["types"]
        text = feedback_data["message"]
        
        feedback_id  = await post_feedback(message_id, text, types)
        
        return {"id": feedback_id}
    
@app.route("/messages", methods=["POST"])
async def messages():
    logger.info("DWPASK-BE-APP-15")
    if request.method == "POST":
        
        access_token = request.headers["x-access-token"]
        unique_identifier, job_centre, given_name, family_name = await decode_token(
            access_token
        )
        
        message_data = request.get_json()
        start_date = message_data["start_date"]
        end_date = message_data["end_date"]
        page = message_data["page"]
        
        messages, total_pages  = await get_messages(unique_identifier, start_date, end_date, page)
        
        return {
            "data": messages,
            "total_count": total_pages
        }


if __name__ == "__main__":
    HOST_IP = "0.0.0.0"
    PORT = 5001
    is_ready = True  # Set readiness to true once the application is started
    # the version gets dynamically updated on gitlab-ci build
    logger.info("DWP Ask backend version - <docker-image-tag>")
    serve(app, host=HOST_IP, port=PORT)
    logger.info("DWPASK-BE-APP-01")
