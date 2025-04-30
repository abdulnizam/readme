await db.execute_raw('''
SELECT cron.schedule(
  'daily_message_cleanup',
  '*/10 * * * *',
  $$SELECT cleanup_old_messages();$$
);
''')