2025-04-30 11:50:54 2025-04-30 10:50:54.364 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2025-04-30 11:50:54 2025-04-30 10:50:54.364 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2025-04-30 11:50:54 2025-04-30 10:50:54.365 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2025-04-30 11:50:54 2025-04-30 10:50:54.368 UTC [29] LOG:  database system was shut down at 2025-04-30 10:38:47 UTC
2025-04-30 11:50:54 2025-04-30 10:50:54.375 UTC [1] LOG:  database system is ready to accept connections
2025-04-30 11:51:04 2025-04-30 10:51:04.370 UTC [40] FATAL:  database "user" does not exist
2025-04-30 11:51:14 2025-04-30 10:51:14.441 UTC [49] FATAL:  database "user" does not exist
2025-04-30 11:51:24 2025-04-30 10:51:24.514 UTC [57] FATAL:  database "user" does not exist





FROM postgres:16

RUN apt-get update \
  && apt-get install -y postgresql-server-dev-16 git make gcc \
  && git clone https://github.com/citusdata/pg_cron.git \
  && cd pg_cron \
  && make && make install \
  && cd .. && rm -rf pg_cron \
  && apt-get remove -y git make gcc \
  && apt-get autoremove -y && apt-get clean



version: "3.8"

services:
  postgres:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: local_postgres_cron
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: dwpask
    ports:
      - "5433:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
