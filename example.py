async def stream_messages_in_batches(hashed_email, start_date, end_date, batch_size=500):
    db = Prisma()
    await db.connect()

    try:
        user = await db.users.find_unique(where={"unique_identifier": hashed_email})
        if not user:
            return

        start_date, adjusted_end_date = normalize_date_range(start_date, end_date)
        offset = 0

        while True:
            query = {
                "where": {
                    "session": {"user_id": user.id},
                    "created_at": {"gte": start_date, "lt": adjusted_end_date},
                    "requestType": {"is_active": True},
                    "messageType": {"is_active": True},
                },
                "order": {"created_at": "desc"},
                "skip": offset,
                "take": batch_size,
                "include": {"messageCitations": True},
            }

            batch = await db.message.find_many(**query)
            if not batch:
                break

            yield [
                {
                    "id": msg.id,
                    "question": msg.question,
                    "answer": msg.response,
                    "previous_chat_history": msg.previous_chat_history,
                    "created_at": msg.created_at,
                    "citations": [
                        {"title": c.title, "url": c.url, "chunks": c.source_extracts}
                        for c in msg.messageCitations
                    ],
                }
                for msg in batch
            ]

            offset += batch_size
    finally:
        await db.disconnect()




import fitz
import io
import textwrap
import tempfile

def render_pdf_page_from_data(data_batch):
    # Render partial HTML content from batch
    html_parts = []
    for row in data_batch:
        text = f"<h2>{row['question']}</h2><p>{row['answer']}</p>"
        html_parts.append(text)

    html_chunk = "<html><body>" + "".join(html_parts) + "</body></html>"
    return html_chunk


def build_pdf_stream(message_batches):
    pdf_doc = fitz.open()
    for batch in message_batches:
        html = render_pdf_page_from_data(batch)
        page = pdf_doc.new_page()
        page.insert_htmlbox(fitz.Rect(50, 50, 550, 800), html)

    pdf_buffer = io.BytesIO()
    pdf_doc.save(pdf_buffer)
    pdf_doc.close()
    pdf_buffer.seek(0)
    return pdf_buffer



from flask import Response, stream_with_context, request, jsonify, send_file

@app.route("/generate-pdf", methods=["POST"])
async def generate_pdf():
    try:
        access_token = request.headers.get("x-access-token", None)
        hashed_email, *_ = await decode_token(access_token)
        message_data = request.get_json()
        start_date = message_data["start_date"]
        end_date = message_data["end_date"]

        # 👇 Stream messages in batches
        async def message_generator():
            async for batch in stream_messages_in_batches(hashed_email, start_date, end_date):
                yield batch

        # 👇 Generate the PDF from streamed batches
        data_stream = []
        async for batch in message_generator():
            data_stream.append(batch)

        pdf_buffer = build_pdf_stream(data_stream)

        return send_file(
            pdf_buffer,
            mimetype="application/pdf",
            as_attachment=True,
            download_name="report.pdf",
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    



import os
import io
import tempfile
import textwrap
import fitz  # PyMuPDF
import mammoth
from docxtpl import DocxTemplate


def chunk_data(data, chunk_size=100):
    """Yield successive chunks of data."""
    for i in range(0, len(data), chunk_size):
        yield data[i:i + chunk_size]


def render_docx_to_html(data_chunk):
    """Render a docx template with a chunk of data and return HTML."""
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


def generate_large_pdf(data, chunk_size=100):
    """Generate a large PDF from data in chunks using a Word template."""
    pdf_doc = fitz.open()

    for chunk in chunk_data(data, chunk_size):
        html = render_docx_to_html(chunk)
        styled_html = f"<html><body>{html}</body></html>"
        page = pdf_doc.new_page()
        page.insert_htmlbox(fitz.Rect(50, 50, 550, 800), styled_html)

    pdf_buffer = io.BytesIO()
    pdf_doc.save(pdf_buffer)
    pdf_doc.close()
    pdf_buffer.seek(0)
    return pdf_buffer