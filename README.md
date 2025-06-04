from docxtpl import DocxTemplate
import mammoth
import fitz
import io
import tempfile
import os
import textwrap


def download_pdf(data):
    template_path = os.path.join("templates", "report-template.docx")
    doc = DocxTemplate(template_path)
    context = {"data": data}
    doc.render(context)

    with tempfile.TemporaryDirectory() as tmpdir:
        # Save rendered .docx
        docx_path = os.path.join(tmpdir, "filled.docx")
        doc.save(docx_path)

        # Convert DOCX to HTML using mammoth
        with open(docx_path, "rb") as f:
            result = mammoth.convert_to_html(f)
            raw_html = result.value

        # Inject inline styles manually
        # Simple replacement - apply style to <body>, <h2>, and <p>
        styled_html = f"<body>{raw_html}</body>"

        # Split into chunks and paginate
        MAX_CHARS = 2000
        chunks = textwrap.wrap(styled_html, MAX_CHARS)

        pdf_doc = fitz.open()
        for chunk in chunks:
            html_chunk = f"<html>{chunk}</html>"
            page = pdf_doc.new_page()
            page.insert_htmlbox(fitz.Rect(50, 50, 550, 800), html_chunk)

        # Return as downloadable PDF
        pdf_buffer = io.BytesIO()
        pdf_doc.save(pdf_buffer)
        pdf_doc.close()
        pdf_buffer.seek(0)

        return pdf_buffer






@app.route("/generate-pdf", methods=["POST"])
async def generate_pdf():
    logger.info("DWPASK-BE-APP-16")
    if request.method == "POST":
        try:
            access_token = request.headers.get("x-access-token", None)
            hashed_email, *_ = await decode_token(access_token)

            message_data = request.get_json()

            start_date = message_data["start_date"]
            end_date = message_data["end_date"]
            page = message_data["page"]
            data = message_data["data"]
            if data is None:
                messages, _ = await get_messages(
                    hashed_email, start_date, end_date, page
                )
                data = messages
            pdf_buffer = download_pdf(data)
            return send_file(
                pdf_buffer,
                mimetype="application/pdf",
                as_attachment=True,
                download_name="report.pdf",
            )

        except Exception as e:
            return jsonify({"error": str(e)}), 500





async def get_messages(
    hashed_email: str,
    start_date: datetime,
    end_date: datetime,
    page: int,
):
    """
    get messages given a request from the frontend

    Args:
        hashed_email (str): Hashed email from access token
        start_date (datetime): Starting date from frontend
        end_date (datetime): Ending date from from frontend
        page (int): Page number for pagination
    """
    db = Prisma()
    await db.connect()
    logger.info("DWPASK-BE-GM-01")
    try:
        user = await db.users.find_unique(where={"unique_identifier": hashed_email})
        if not user:
            return [], 0
        logger.info("DWPASK-BE-GM-02")
        page_size = 10
        start_date, adjusted_end_date = normalize_date_range(start_date, end_date)

        base_query = {
            "session": {"user_id": user.id},
            "created_at": {"gte": start_date, "lt": adjusted_end_date},
            "requestType": {"is_active": True},
            "messageType": {"is_active": True},
        }

        query_options = {
            "where": base_query,
            "order": {"created_at": "desc"},
            "include": {
                "messageCitations": True,
            },
        }
        if page != -1:
            skip = (page - 1) * page_size
            query_options["take"] = page_size
            query_options["skip"] = skip

        message_links = await db.message.find_many(**query_options)
        logger.info("DWPASK-BE-GM-03")

        total_count = await db.message.count(
            where=base_query,
        )
        logger.info("DWPASK-BE-GM-04")
        total_pages = math.ceil(total_count / page_size)
        results = []

        for msg in message_links:

            source_links = [
                {"title": c.title, "url": c.url, "chunks": c.source_extracts}
                for c in msg.messageCitations
            ]

            results.append(
                {
                    "id": msg.id,
                    "question": msg.question,
                    "answer": msg.response,
                    "previous_chat_history": msg.previous_chat_history,
                    "created_at": msg.created_at,
                    "citations": source_links,
                }
            )
        return results, total_pages

    finally:
        logger.info("DWPASK-BE-GM-05")
        await db.disconnect()
