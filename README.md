import os
import asyncio
from prisma import Prisma
from prisma.errors import PrismaError
from users import seed_request_users
from users_session import seed_request_users_session

async def safe_upsert(db_model, where, data):
    try:
        await db_model.upsert(
            where=where,
            data={"create": data, "update": data}
        )
    except PrismaError as e:
        print(f"Upsert failed for {db_model=} with {where=}: {e}")

async def seed(db: Prisma):
    starting_id = 9000001
    feedback_id_start = 8000001
    total = int(os.getenv("SEED_RECORD_COUNT", 50))

    # Define proportions
    proportions = {
        1: 0.2,  # citation only
        2: 0.2,  # feedback only
        3: 0.2,  # citation + feedback
        4: 0.2,  # citation + empty feedback
        5: 0.1,  # citation + feedback (null) + option
        6: 0.1,  # citation + feedback (text) + option
    }

    counts = {k: int(v * total) for k, v in proportions.items()}
    counts[6] += total - sum(counts.values())  # handle rounding

    scenario_ids = []
    for scenario, count in counts.items():
        scenario_ids.extend([scenario] * count)

    for i, scenario in enumerate(scenario_ids):
        message_id = starting_id + i
        feedback_id = feedback_id_start + i

        await safe_upsert(
            db.message,
            where={"id": message_id},
            data={
                "id": message_id,
                "question": f"Test question {i+1}",
                "response": f"Test response {i+1}",
                "previous_chat_history": "{}",
                "country_id": 1,
                "request_type_id": 1,
                "message_type_id": 2,
                "data_source_id": 1,
                "session_id": "test-session-id",
            }
        )

        if scenario in [1, 3, 4, 5, 6]:
            await safe_upsert(
                db.messagecitations,
                where={"id": message_id},
                data={
                    "id": message_id,
                    "message_id": message_id,
                    "title": f"Test Citation {i+1}",
                    "url": "https://example.com",
                    "source_extracts": "Citation content",
                }
            )

        if scenario in [2, 3]:
            await safe_upsert(
                db.feedback,
                where={"id": feedback_id},
                data={
                    "id": feedback_id,
                    "message_id": message_id,
                    "feedback_free_text": f"Feedback for message {i+1}"
                }
            )

        if scenario == 4:
            await safe_upsert(
                db.feedback,
                where={"id": feedback_id},
                data={
                    "id": feedback_id,
                    "message_id": message_id,
                    "feedback_free_text": ""
                }
            )

        if scenario == 5:
            await safe_upsert(
                db.feedback,
                where={"id": feedback_id},
                data={
                    "id": feedback_id,
                    "message_id": message_id,
                    "feedback_free_text": "null"
                }
            )
            await safe_upsert(
                db.selectedfeedbackoptions,
                where={"feedback_id_feedback_options_id": {"feedback_id": feedback_id, "feedback_options_id": 1}},
                data={"feedback_id": feedback_id, "feedback_options_id": 1}
            )

        if scenario == 6:
            await safe_upsert(
                db.feedback,
                where={"id": feedback_id},
                data={
                    "id": feedback_id,
                    "message_id": message_id,
                    "feedback_free_text": f"Non-empty feedback {i+1}"
                }
            )
            await safe_upsert(
                db.selectedfeedbackoptions,
                where={"feedback_id_feedback_options_id": {"feedback_id": feedback_id, "feedback_options_id": 2}},
                data={"feedback_id": feedback_id, "feedback_options_id": 2}
            )

async def main():
    db = Prisma()
    await db.connect()
    await seed_request_users(db)
    await seed_request_users_session(db)
    await seed(db)
    await db.disconnect()
    print("✅ Seed script complete.")

if __name__ == "__main__":
    asyncio.run(main())