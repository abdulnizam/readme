from prisma import Prisma
from datetime import datetime
from typing import List, Dict, Any

db = Prisma()

async def get_user_messages_raw(user_id: int, start_date: datetime, end_date: datetime) -> List[Dict[str, Any]]:
    await db.connect()

    query = """
    SELECT m.*
    FROM "Message" m
    JOIN "MessageUsers" mu ON mu.message_id = m.id
    JOIN "Users" u ON mu.user_id = u.id
    WHERE u.id = $1
    AND m.created_at BETWEEN $2 AND $3
    ORDER BY m.created_at DESC
    """

    messages = await db.query_raw(query, user_id, start_date, end_date)

    await db.disconnect()
    return messages



import asyncio
from datetime import datetime

async def main():
    user_id = 42
    start = datetime(2024, 1, 1)
    end = datetime(2024, 12, 31)

    messages = await get_user_messages_raw(user_id, start, end)
    for msg in messages:
        print(f"{msg['id']} → {msg['question']} @ {msg['created_at']}")

asyncio.run(main())