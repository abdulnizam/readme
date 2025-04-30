services:
  postgres:
    image: citusdata/citus:11.2.1  # use this for pg_cron support
    container_name: local_postgres_cron
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: dwpask
    ports:
      - "5433:5432"  # 👈 Host 5433 → Container 5432
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data: