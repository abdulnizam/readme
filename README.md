python3 -c "import socket; sock = socket.create_connection(('c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', 5432), timeout=5); print('✅ Port open')"



nc -zv c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com 5432



openssl s_client -connect c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com:5432




python3 -c "import psycopg2; import os; \
conn = psycopg2.connect(\
dbname='postgres', \
user='citus@c-postgresqldb-uks-devt1-sd-sib-dwpask', \
password='your_password_here', \
host='c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', \
port=5432, sslmode='require'); \
print('✅ Connected to Cosmos DB PostgreSQL'); conn.close()"