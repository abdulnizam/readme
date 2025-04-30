DELETE FROM public."Session"
    WHERE id NOT IN (SELECT DISTINCT session_id FROM public."Message");