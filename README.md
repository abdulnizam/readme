
Running Python script ...
Python script failed to execute. Exit code: 1
Traceback (most recent call last):
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/db/cron_job.py", line 64, in <module>
    asyncio.run(main())
  File "/Users/adbul.nizam1/.homebrew/Cellar/python@3.12/3.12.5/Frameworks/Python.framework/Versions/3.12/lib/python3.12/asyncio/runners.py", line 194, in run
    return runner.run(main)
           ^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/.homebrew/Cellar/python@3.12/3.12.5/Frameworks/Python.framework/Versions/3.12/lib/python3.12/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/.homebrew/Cellar/python@3.12/3.12.5/Frameworks/Python.framework/Versions/3.12/lib/python3.12/asyncio/base_events.py", line 687, in run_until_complete
    return future.result()
           ^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/db/cron_job.py", line 59, in main
    await setup_pg_cron(db)
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/db/cron_job.py", line 44, in setup_pg_cron
    await db.execute_raw('''
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/client.py", line 176, in execute_raw
    resp = await self._execute(
           ^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/_base_client.py", line 543, in _execute
    return await self._engine.query(builder.build(), tx_id=self._tx_id)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/engine/_query.py", line 402, in query
    return await self.request(
           ^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/engine/_http.py", line 233, in request
    return self._process_response_data(data=data, response=response)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/engine/_http.py", line 87, in _process_response_data
    return utils.handle_response_errors(response, errors_data)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/engine/utils.py", line 175, in handle_response_errors
    raise exc(error)
prisma.errors.RawQueryError: ERROR: schema "cron" does not exist




import asyncio
from prisma import Prisma
from dotenv import load_dotenv
import os

load_dotenv()

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
      '10 0 * * *',
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
