from prisma import Prisma
from datetime import datetime
from typing import List

db = Prisma()

async def get_messages_by_unique_identifier(unique_id: str, start_date: datetime, end_date: datetime) -> List:
    await db.connect()

    # Step 1: Find user by unique_identifier
    user = await db.users.find_unique(
        where={'unique_identifier': unique_id}
    )

    if not user:
        await db.disconnect()
        return []

    # Step 2: Find message links from MessageUsers where created_at matches
    message_links = await db.messageusers.find_many(
        where={
            'user_id': user.id,
            'message': {
                'created_at': {
                    'gte': start_date,
                    'lte': end_date
                }
            }
        },
        include={
            'message': {
                'include': {
                    'feedback': True,
                    'messageCitations': True
                }
            }
        }
    )

    await db.disconnect()

    # Step 3: Return just the messages
    return [link.message for link in message_links]


import asyncio
from datetime import datetime

async def main():
    messages = await get_messages_by_unique_identifier(
        unique_id="abc123",
        start_date=datetime(2024, 1, 1),
        end_date=datetime(2024, 12, 31)
    )

    for m in messages:
        print(f"[{m.created_at}] {m.question} → {m.response}")

asyncio.run(main())