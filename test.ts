message_links = await db.message.find_many(
    where={
        'user_id': user.id,
        'created_at': {
            'gte': start_date,
            'lt': adjusted_end_date
        },
        'requestType': {
            'is_active': True
        },
        'messageType': {
            'is_active': True
        }
    },
    order={
        'created_at': 'desc'
    },
    skip=skip,
    take=page_size,
    include={
        'country': True,
        'requestType': True,
        'messageType': True,
        'dataSource': True,
        'messageCitations': True,
        'feedback': {
            'include': {
                'messageFeedback': {
                    'include': {
                        'feedbackType': True
                    }
                }
            }
        }
    }
)