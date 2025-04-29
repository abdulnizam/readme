  File "/Users/adbul.nizam1/Developer/dwp-ask-test-data/.venv/lib/python3.12/site-packages/prisma/engine/utils.py", line 175, in handle_response_errors
    raise exc(error)
prisma.errors.FieldNotFoundError: Could not find field at `upsertOneSelectedFeedbackOptions.where`





    await db.selectedfeedbackoptions.upsert(
            where={"feedback_id": 8000012},
            data={
                "create": {"feedback_id": 8000012, "feedback_options_id": 2},
                "update": {"feedback_id": 8000012, "feedback_options_id": 2}
            }
        )


        model SelectedFeedbackOptions {
  feedback_id         Int
  feedback_options_id Int
  // Relations
  feedback            Feedback        @relation(fields: [feedback_id], references: [id])
  feedbackOptions     FeedbackOptions @relation(fields: [feedback_options_id], references: [id])

  // composite primary key
  @@id([feedback_options_id, feedback_id])
}
