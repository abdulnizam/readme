pg_dump \
  --host=c.postgres.cosmos.azure.com \
  --port=5432 \
  --username=user@your-db \
  --dbname=dwpask \
  --format=custom \
  --file=dwpask_backup_20250430.dump



pg_restore \
  --host=<your-host> \
  --port=5432 \
  --username=<your-username> \
  --dbname=dwpask \
  --clean \
  --format=custom \
  dwpask_backup_20250430.dump



brew install libpq
brew link --force libpq
pg_dump --version
pg_restore --version

# Backup (pg_dump)
pg_dump -U your_user -h localhost -p 5432 -d your_db -Fc -f backup.dump

# Restore (pg_restore)
pg_restore -U your_user -h localhost -p 5432 -d your_db -c backup.dump


pg_dump -h localhost -p 5432 -U user -d dwpask -n public --data-only -F c -f public_data.dump

pg_restore -h localhost -p 5432 -U user -d dwpask --data-only -n public public_data.dump