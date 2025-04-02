def db_connection():
    con = psycopg2.connect(**DB_CONFIG)
    cur = con.cursor()
    cur.execute("SELECT ssl, version, cipher FROM pg_stat_ssl WHERE pid = pg_backend_pid()")
    row = cur.fetchone()
    cur.close()
    con.close()

    if row and row[0]:
        return {
            "ssl": row[0],
            "ssl_version": row[1],
            "ssl_cipher": row[2]
        }
    else:
        return {
            "ssl": False,
            "ssl_version": None,
            "ssl_cipher": None
        }