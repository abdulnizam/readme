ERROR:  cleanup_old_messages() is not a procedure
LINE 1: CALL cleanup_old_messages();
             ^
HINT:  To call a function, use SELECT.


import asyncio
from prisma import Prisma
from dotenv import load_dotenv
import os

load_dotenv()

async def setup_pg_cron(db: Prisma):
    # Create or replace cleanup function
    await db.execute_raw('''
    CREATE EXTENSION IF NOT EXISTS pg_cron;
    ''')
    await db.execute_raw('''
    CREATE OR REPLACE FUNCTION cleanup_old_messages()
    RETURNS void AS $$
    BEGIN
        DELETE FROM selectedfeedbackoptions
        WHERE feedback_id IN (
            SELECT id FROM feedback
            WHERE message_id IN (
                SELECT id FROM message WHERE created_at < NOW() - INTERVAL '2 years'
            )
        );

        DELETE FROM feedback
        WHERE message_id IN (
            SELECT id FROM message WHERE created_at < NOW() - INTERVAL '2 years'
        );

        DELETE FROM messagecitations
        WHERE message_id IN (
            SELECT id FROM message WHERE created_at < NOW() - INTERVAL '2 years'
        );
        
        DELETE FROM session
        WHERE id IN (
            SELECT session_id FROM message WHERE created_at < NOW() - INTERVAL '2 years'
        );

        DELETE FROM message
        WHERE created_at < NOW() - INTERVAL '2 years';
    END;
    $$ LANGUAGE plpgsql;
    ''')

    # Schedule the cron job at 8pm daily
    await db.execute_raw('''
    SELECT cron.schedule(
      'daily_message_cleanup',
      '*/10 * * * *',
      $$CALL cleanup_old_messages();$$
    );
    ''')

    print("pg_cron daily cleanup job scheduled for 8 PM.")


async def main():
    db = Prisma()
    await db.connect()
    
    await setup_pg_cron(db)
    
    await db.disconnect()
    
if __name__ == "__main__":
    asyncio.run(main())
