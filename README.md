# -------------------------------------------
# Dockerfile
# -------------------------------------------
FROM postgres:16

# Install pg_cron from source
RUN apt-get update \
  && apt-get install -y postgresql-server-dev-16 git make gcc \
  && git clone https://github.com/citusdata/pg_cron.git \
  && cd pg_cron \
  && make && make install \
  && cd .. && rm -rf pg_cron \
  && apt-get remove -y git make gcc \
  && apt-get autoremove -y && apt-get clean

# Copy custom config
COPY postgresql.conf /etc/postgresql/postgresql.conf

# Use custom config when starting
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]


# -------------------------------------------
# docker-compose.yml
# -------------------------------------------
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
      - ./postgresql.conf:/etc/postgresql/postgresql.conf
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:


# -------------------------------------------
# postgresql.conf (put in the same directory)
# -------------------------------------------
# Base config with required setting for pg_cron
include_if_exists = '/var/lib/postgresql/data/postgresql.auto.conf'

# Listen on all addresses
listen_addresses = '*'

# Default database for pg_cron jobs
cron.database_name = 'dwpask'