from prisma import Prisma
from datetime import datetime

db = Prisma()

async def get_user_messages(user_id: int, start_date: datetime, end_date: datetime):
    await db.connect()

    # Step 1: Query MessageUsers for matching user_id and message.created_at range
    message_links = await db.messageusers.find_many(
        where={
            'user_id': user_id,
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

    # Step 2: Extract only the message objects
    messages = [link.message for link in message_links]

    await db.disconnect()
    return messages



import asyncio
from datetime import datetime

async def main():
    user_id = 42
    start_date = datetime(2024, 1, 1)
    end_date = datetime(2024, 12, 31)

    messages = await get_user_messages(user_id, start_date, end_date)
    for msg in messages:
        print(f"[{msg.created_at}] {msg.question} → {msg.response}")

asyncio.run(main())