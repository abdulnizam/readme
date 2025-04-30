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


FROM postgres:15-alpine

# Install build tools and dependencies
RUN apk add --no-cache build-base postgresql-dev git

# Clone and build pg_cron from GitHub
RUN git clone --branch v1.5.2 https://github.com/citusdata/pg_cron.git /pg_cron \
 && cd /pg_cron \
 && make && make install

# Enable pg_cron in config
RUN echo "shared_preload_libraries = 'pg_cron'" >> /usr/share/postgresql/postgresql.conf.sample