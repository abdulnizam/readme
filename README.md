async def setup_pg_cron(db: Prisma):
    # Create or replace cleanup function
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

        DELETE FROM message
        WHERE created_at < NOW() - INTERVAL '2 years';
    END;
    $$ LANGUAGE plpgsql;
    ''')

    # Schedule the cron job at 8pm daily
    await db.execute_raw('''
    SELECT cron.schedule(
      'daily_message_cleanup',
      '0 20 * * *',
      $$CALL cleanup_old_messages();$$
    );
    ''')

    print("✅ pg_cron daily cleanup job scheduled for 8 PM.")


async def main():
    db = Prisma()
    await db.connect()
    
    await seed_request_users(db)
    await seed_request_users_session(db)
    await seed(db)
    
    await setup_pg_cron(db)  # <-- Add this here
    
    await db.disconnect()
    print("✅ All seeding and cron setup complete.")