 message_links = await db.messageusers.find_many(
            where={
                'user_id': user.id,
                'message': {
                    'created_at': {
                        'gte': start_date,
                        'lte': end_date
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
            include={
                'message': {
                    'include': {
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
                }
            }
        )



{
    "start_date": "2025-04-07T00:00:00.000Z",
    "end_date": "2025-04-09T00:00:00.000Z"
}
