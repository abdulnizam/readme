ERROR:  update or delete on table "Session" violates foreign key constraint "Message_session_id_fkey" on table "Message"
DETAIL:  Key (id)=(a20a1bae-e304-9000002-8dc5-f4e10f9821e6) is still referenced from table "Message".
CONTEXT:  SQL statement "DELETE FROM public."Session"
        WHERE id IN (
            SELECT session_id FROM public."Message" WHERE created_at < NOW() - INTERVAL '2 years'
        )"
PL/pgSQL function cleanup_old_messages() line 21 at SQL statement
