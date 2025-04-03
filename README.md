python3 -c "import socket; sock = socket.create_connection(('c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com', 5432), timeout=5); print('✅ Port open')"



nc -zv c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com 5432



openssl s_client -connect c-postgresqldb-uks-devt1-sd-sib-dwpask.ngi45w3dhlt6j7.privatelink.postgres.cosmos.azure.com:5432