Repo
Created automated seed & cleanup scripts using Prisma ORM to generate 50 realistic records in the message, message_citations, feedback, and feedback_options tables.
This enabled QA engineers to run isolated test cases across different feedback and citation scenarios quickly and consistently.

Additionally, a teardown script was added to remove test records in the correct dependency order, preventing DB conflicts and keeping the test environment clean after each run.