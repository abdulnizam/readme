version: "3.8"

services:
  postgres:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: local_postgres
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: dwpask
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./postgresql.conf:/etc/postgresql/postgresql.conf
    command: ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]

volumes:
  postgres_data:




FROM postgres:16

RUN apt-get update \
  && apt-get install -y postgresql-server-dev-16 git make gcc \
  && git clone --branch v1.5.2 https://github.com/citusdata/pg_cron.git \
  && cd pg_cron \
  && make && make install \
  && cd .. && rm -rf pg_cron \
  && apt-get remove -y git make gcc \
  && apt-get autoremove -y && apt-get clean



postgresql.conf

# minimal config with pg_cron support
shared_preload_libraries = 'pg_cron'
cron.database_name = 'dwpask'


CREATE EXTENSION pg_cron;

CREATE EXTENSION IF NOT EXISTS pg_cron;

docker-compose up --build -d