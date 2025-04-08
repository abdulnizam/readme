return [
            {
                'id': msg.id,
                'question': msg.question,
                'created_at': msg.created_at,
                'citations': [c.url for c in msg.messageCitations]
            }
            for msg in messages_data
        ]
