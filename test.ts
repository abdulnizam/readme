if (!sessionStorage.getItem("session_id")) {
    sessionStorage.setItem("session_id", crypto.randomUUID());
  }



  model Message {
    id        Int     @id @default(autoincrement())
    question  String
    response  String
    ...
    session_id String // 👈 Add this to group messages
  }