from datetime import datetime, timedelta
from typing import Tuple

def normalize_date_range(start_date_str: str, end_date_str: str) -> Tuple[datetime, datetime]:
    # Parse ISO strings to datetime objects
    start_date = datetime.fromisoformat(start_date_str.replace('Z', '+00:00'))
    end_date = datetime.fromisoformat(end_date_str.replace('Z', '+00:00'))

    # If the dates are the same, extend end date by 1 day
    if start_date == end_date:
        end_date += timedelta(days=1)

    return start_date, end_date