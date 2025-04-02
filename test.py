from flask import Flask, jsonify
import psycopg2
from psycopg2 import OperationalError

app = Flask(__name__)

# Replace with your Cosmos DB PostgreSQL config
DB_CONFIG = {
    'host': 'your-cosmos-postgres-db.postgres.database.azure.com',
    'dbname': 'your_db_name',
    'user': 'your_user@your-cosmos-postgres-db',
    'password': 'your_password',
    'port': 5432,
    'sslmode': 'require'  # Cosmos DB requires SSL
}

@app.route('/health/db')
def check_db_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        conn.close()
        return jsonify({'status': 'success', 'message': 'Connected to database'}), 200
    except OperationalError as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)




DB_CONFIG = {
    "dbname": "postgres",
    "user": "citus",
    "password": "jR[=m9DVoxV>]}a?",
    "host": "c-postgresqldb-replica-uks-devt1-sd-sib-dwpask.auprpts4zhpysg.privatelink.postgres.cosmos.azure.com",
    "port": 5432,
    "sslmode": "require"
}



def db_connection(): 
    con = psycopg2.connect(DB_CONFIG)
    con.close()
    return con.get_parameter_status("ssl_version"), con.get_parameter_status("ssl_ciper")  


@app.route('/health/db')
def check_db_connection():
    try:
        ssl_version, ssl_ciper = db_connection()
        return jsonify({'status': 'success', 'message': 'Connected to database', 'ssl_version': ssl_version, "ssl_ciper": ssl_ciper}), 200
    except OperationalError as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
