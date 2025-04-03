from flask import Flask, jsonify
import asyncio
from prisma import Prisma

app = Flask(__name__)
db = Prisma()

@app.route('/health/db')
def check_db_health():
    try:
        # Run the async connection check
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        result = loop.run_until_complete(connect_and_check())

        if result:
            return jsonify({"status": "success", "message": "✅ Connected to Cosmos DB"}), 200
        else:
            return jsonify({"status": "error", "message": "❌ Could not connect"}), 500

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

async def connect_and_check():
    try:
        await db.connect()
        await db.disconnect()
        return True
    except Exception:
        return False