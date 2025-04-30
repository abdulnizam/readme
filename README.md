version: "3.8"

services:
  postgres:
    image: citusdata/pg_cron:latest
    container_name: local_pg_cron
    restart: always
    platform: linux/amd64  # 👈 IMPORTANT for M1/M2 compatibility
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