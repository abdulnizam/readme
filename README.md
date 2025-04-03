python3 -c "import socket; sock = socket.create_connection(('c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', 5432), timeout=5); print('✅ Port open')"



nc -zv c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com 5432



openssl s_client -connect c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com:5432




python3 -c "import psycopg2; import os; \
conn = psycopg2.connect( dbname='postgresql-cosmosdb-dwp-devt1-sib-dwpask', user='citus', password='AEIY0CPXYxUWGkva', host='c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', port=5432, sslmode='require'); \
print('✅ Connected to Cosmos DB PostgreSQL'); conn.close()"



>>> conn = psycopg2.connect( dbname='postgresql-cosmosdb-dwp-devt1-sib-dwpask',\
 user='citus', password='AEIY0CPXYxUWGkva', host='c-postgresqldb-uks-devt1-sd-s\
ib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', port=5432, ssl\
mode='require')
Traceback (most recent call last):
  File "<python-input-1>", line 1, in <module>
    conn = psycopg2.connect( dbname='postgresql-cosmosdb-dwp-devt1-sib-dwpask', user='citus', password='AEIY0CPXYxUWGkva', host='c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', port=5432, sslmode='require')
  File "/usr/local/lib/python3.13/site-packages/psycopg2/__init__.py", line 122, in connect
    conn = _connect(dsn, connection_factory=connection_factory, **kwasync)
psycopg2.OperationalError: connection to server at "c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com" (52.151.67.106), port 5432 failed: server closed the connection unexpectedly
        This probably means the server terminated abnormally
        before or while processing the request.
