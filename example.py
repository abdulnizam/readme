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