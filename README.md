from datetime import datetime, timedelta

# 2 years ago from now
two_years_ago = datetime.now() - timedelta(days=365 * 2)

# Prisma expects ISO format string
created_at = two_years_ago.isoformat()