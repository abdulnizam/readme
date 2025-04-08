return [
    {
        'id': msg.id,
        'question': msg.question,
        'citations': [c.url for c in msg.messageCitations]
    }
    for msg in messages
]