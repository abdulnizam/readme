from prisma import Prisma
from datetime import datetime

db = Prisma()

async def get_messages_by_user_and_date(user_id: int, start_date: datetime, end_date: datetime):
    await db.connect()
    
    messages = await db.message.find_many(
        where={
            'created_at': {
                'gte': start_date,
                'lte': end_date,
            },
            'users': {
                'some': {
                    'user_id': user_id
                }
            }
        },
        include={
            'users': True,
            'feedback': True,
            'messageCitations': True,
        }
    )

    await db.disconnect()
    return messages



import asyncio
from datetime import datetime, timedelta

async def main():
    start = datetime(2024, 1, 1)
    end = datetime(2024, 12, 31)
    user_id = 42

    messages = await get_messages_by_user_and_date(user_id, start, end)
    for msg in messages:
        print(f"Question: {msg.question}, Created At: {msg.created_at}")

asyncio.run(main())