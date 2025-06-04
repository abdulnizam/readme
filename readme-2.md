from flask import Blueprint, request, send_file, jsonify
from docxtpl import DocxTemplate
import mammoth
import fitz
import os
import tempfile
import io
import textwrap
from datetime import datetime

pdf_routes = Blueprint("pdf_routes", __name__)

# You can tweak this
CHUNK_SIZE = 100
MAX_CHARS = 2000


async def stream_messages_in_batches(hashed_email, start_date, end_date):
    """
    Async generator that yields messages in chunks from DB.
    """
    page = 1
    while True:
        messages, total_pages = await get_messages(hashed_email, start_date, end_date, page)
        if not messages:
            break
        yield messages
        page += 1
        if page > total_pages:
            break


def render_docx_to_html(data_chunk):
    """
    Render a DOCX template for each chunk and convert to HTML using mammoth.
    """
    template_path = os.path.join("templates", "report-template.docx")
    doc = DocxTemplate(template_path)
    doc.render({"data": data_chunk})

    with tempfile.NamedTemporaryFile(suffix=".docx", delete=False) as tmp_docx:
        doc.save(tmp_docx.name)
        with open(tmp_docx.name, "rb") as f:
            result = mammoth.convert_to_html(f)
            html = result.value
        os.unlink(tmp_docx.name)

    return html


def build_pdf_stream(all_data_chunks):
    """
    Build PDF by combining multiple rendered chunks into one PDF stream.
    """
    pdf_doc = fitz.open()

    for chunk in all_data_chunks:
        html = render_docx_to_html(chunk)
        styled_html = f"<html><body>{html}</body></html>"
        pages = textwrap.wrap(styled_html, MAX_CHARS)

        for pg in pages:
            page = pdf_doc.new_page()
            page.insert_htmlbox(fitz.Rect(50, 50, 550, 800), f"<html>{pg}</html>")

    buffer = io.BytesIO()
    pdf_doc.save(buffer)
    pdf_doc.close()
    buffer.seek(0)
    return buffer


@pdf_routes.route("/generate-pdf", methods=["POST"])
async def generate_pdf():
    try:
        access_token = request.headers.get("x-access-token", None)
        hashed_email, *_ = await decode_token(access_token)

        message_data = request.get_json()
        start_date = message_data["start_date"]
        end_date = message_data["end_date"]

        # 👇 Stream and collect all batches
        data_stream = []
        async for batch in stream_messages_in_batches(hashed_email, start_date, end_date):
            data_stream.append(batch)

        # 👇 Build the final PDF from all streamed data
        pdf_buffer = build_pdf_stream(data_stream)

        return send_file(
            pdf_buffer,
            mimetype="application/pdf",
            as_attachment=True,
            download_name="report.pdf",
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    HOST_IP = "0.0.0.0"
    PORT = 5001
    THREADS = os.environ.get("THREADS", 100)
    is_ready = True  # Set readiness to true once the application is started
    # the version gets dynamically updated on gitlab-ci build
    logger.info("DWP Ask backend version - <docker-image-tag>")
    serve(app, host=HOST_IP, port=PORT, threads=THREADS)
    logger.info("DWPASK-BE-APP-01")
