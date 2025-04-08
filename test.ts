// To create/edit a table, define/edit the model and run `prisma db push`
// To update the Prisma client types with db changes, run `prisma generate`
// To view the tables, run `prisma studio` or use pgAdmin

datasource db {
  url      = env("POSTGRES_CONN_STRING")
  provider = "postgresql"
}

generator client {
  provider = "prisma-client-py"
  recursive_type_depth = -1
}


model Message {
  id Int @id @default(autoincrement())
  question String
  response String
  previous_chat_history Json @default("{}")
  delete_date DateTime @default(dbgenerated("(NOW() + INTERVAL '2 years')"))
  created_at DateTime @default(now())
  // FKs
  country_id Int
  request_type_id Int
  message_type_id Int
  data_source_id Int
  // Relations
  country Country @relation(fields: [country_id], references: [id])
  requestType RequestType @relation(fields: [request_type_id], references: [id])
  messageType MessageType @relation(fields: [message_type_id], references: [id])
  dataSource DataSource @relation(fields: [data_source_id], references: [id])


  users MessageUsers[]
  feedback Feedback[]
  messageCitations MessageCitations[]
}


 model MessageUsers {
  user_id Int
  message_id Int
  // Relations
  user Users @relation(fields: [user_id], references: [id])
  message Message @relation(fields: [message_id], references: [id])
  // composite primary key
  @@id([user_id, message_id])
}

model MessageFeedback {
  feedback_id Int
  feedback_type_id Int
  // Relations
  feedback Feedback @relation(fields: [feedback_id], references: [id])
  feedbackType FeedbackType @relation(fields: [feedback_type_id], references: [id])
  // composite primary key
  @@id([feedback_type_id, feedback_id])
}

model MessageCitations {
  message_id Int
  title String
  url String
  // Relations
  message Message @relation(fields: [message_id], references: [id])

  @@id([message_id, title])
}


model Feedback {
    id Int @id @default(autoincrement())
    feedback_free_text String
    created_at DateTime @default(now())
    // FKs
    message_id Int
    // Relations
    message Message @relation(fields: [message_id], references: [id])
    messageFeedback MessageFeedback[]
}

model Users {
  id Int @id @default(autoincrement())
  given_name String
  family_name String
  job_centre String
  unique_identifier String
  created_at DateTime @default(now())

  messages MessageUsers[]
}

model Country {
  id Int @id @default(autoincrement())
  name String
  is_active Boolean @default(true)
  created_at DateTime @default(now())
  updated_at DateTime @default(now())
  // Relations
  messages Message[]
}

model MessageType {
  id Int @id @default(autoincrement())
  name String
  is_active Boolean @default(true)
  created_at DateTime @default(now())
  updated_at DateTime @default(now())
  // Relations
  messages Message[]
}


model RequestType {
  id Int @id @default(autoincrement())
  name String
  is_active Boolean @default(true)
  created_at DateTime @default(now())
  updated_at DateTime @default(now())
  // Relations
  messages Message[]
}

model FeedbackType {
  id Int @id @default(autoincrement())
  name String
  is_active Boolean @default(true)
  created_at DateTime @default(now())
  updated_at DateTime @default(now())
  // Relations
  messageFeedback MessageFeedback[]
}

model DataSource {
  id Int @id @default(autoincrement())
  name String
  is_active Boolean @default(true)
  created_at DateTime @default(now())
  updated_at DateTime @default(now())
  messages Message[]
}
