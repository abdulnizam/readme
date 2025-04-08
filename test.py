from datetime import datetime, timedelta

def normalize_date_range(start_date: datetime, end_date: datetime) -> tuple[datetime, datetime]:
    # If start == end, add 1 day to end to cover the full day
    if start_date == end_date:
        end_date += timedelta(days=1)
    return start_date, end_date


start_date, adjusted_end_date = normalize_date_range(start_date, end_date)