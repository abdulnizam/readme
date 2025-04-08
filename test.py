from datetime import timedelta

adjusted_end_date = end_date + timedelta(days=1)

message_links = await db.messageusers.find_many(
    where={
        'user_id': user.id,
        'message': {
            'created_at': {
                'gte': start_date,
                'lt': adjusted_end_date  # ✅ use 'lt' with +1 day
            },
            'requestType': {
                'is_active': True
            },
            'messageType': {
                'is_active': True
            }
        }
    },
    order={
        'message': {
            'created_at': 'desc'
        }
    },
    include={ ... }
)