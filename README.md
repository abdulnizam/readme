version: "3.8"

services:
  postgres:
    image: citusdata/citus:11.2.1
    container_name: local_pg_cron
    platform: linux/amd64
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
    command: postgres -c config_file=/etc/postgresql/postgresql.conf

volumes:
  postgres_data: