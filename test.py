from prisma import Prisma
from datetime import datetime
from typing import List, Dict, Any

db = Prisma()

async def get_user_messages_with_details(
    unique_identifier: str,
    start_date: datetime,
    end_date: datetime
) -> List[Dict[str, Any]]:
    await db.connect()

    # Step 1: Get user ID from Users table
    user = await db.users.find_first(
        where={'unique_identifier': unique_identifier}
    )

    if not user:
        await db.disconnect()
        return []

    # Step 2: Get messages filtered by:
    # - Active requestType/messageType
    # - Message.created_at in range
    # - MessageUsers.user_id = user.id
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

    await db.disconnect()

    # Step 3: Transform and return message objects
    results = []

    for link in message_links:
        msg = link.message
        feedback = msg.feedback[0] if msg.feedback else None

        feedback_types = [
            {'feedback_type': ft.feedbackType.name}
            for ft in (feedback.messageFeedback if feedback else [])
        ]

        source_links = [
            {'url': cite.url, 'title': cite.title}
            for cite in msg.messageCitations
        ]

        results.append({
            'message_id': msg.id,
            'question': msg.question,
            'response': msg.response,
            'previous_chat_history': msg.previous_chat_history,
            'message_country': msg.country.name if msg.country else None,
            'request_type': msg.requestType.name if msg.requestType else None,
            'message_type': msg.messageType.name if msg.messageType else None,
            'data_source': msg.dataSource.name if msg.dataSource else None,
            'message_sent_at': msg.created_at,
            'given_name': user.given_name,
            'family_name': user.family_name,
            'job_centre': user.job_centre,
            'feedback_free_text': feedback.feedback_free_text if feedback else None,
            'feedback_given_at': feedback.created_at if feedback else None,
            'feedback_types': feedback_types,
            'source_links': source_links
        })

    return results