Jump to

Confluence navigation
Side navigation
Page

Home

Recent

Spaces

Teams

Apps
Templates

Create
Search

9+



Gen AI

Shortcuts

Content


Search by title
Results will update as you type.

Blogs




Gen AI
/
Ranj - Sprint 25 Handover






Share

Ranj - Sprint 25 Handover


Owned by Ranjeet Sidhu

Last updated: Mar 25, 2025
3 min read

3 people viewed
Teams Recording: Recap: Ranj - DWP Ask Handover 25 March

Question and Response Backend work

DB Design: A Free Database Designer for Developers and Analysts 

Branches:

Backend - feat/ga5669-response-storage

Frontend -  feat/ga-5669-frontend-response-storage

Note: these branches must be merged in together and deployed at the same time for the solution to work

 

Prerequisites:

You must add an access token to the frontend .env file. The variable name should be ACCESS_TOKEN=

This can be obtained through the Kong URL by sending a query, then going to the Devt Argo frontend container logs and copying the x-access-token header.

For the backend, a Postgres instance should be created locally though the docker-compose.yml file. Instructions to do this are included in the a-cubed-backend/db/docker-compose.yml file. For convenience, I’ll list them here:

Run pip install -r requirements.txt

Add LOCAL_CONN_STRING="postgresql://user:password@localhost:5432/dwpask" to the backend .env file

Ensure the db variable in a-cubed-backend/schema.prisma file on line 6 is env("LOCAL_CONN_STRING")

Run docker compose up 

Run prisma db push and prisma generate

Run python db/seed.py

The database is now ready to use and can be viewed in pgAdmin4 (preferred) or by running prisma studio.

 

Outstanding work

Pending confirmation from the DWP Identity Team, the code in a-cubed-backend/db/utils/decode_token.py needs to be updated. I have added placeholder code to retrieve the unique identifier (staff ID) and job centre (SLOC) which is commented for now. When we have confirmation these fields have been added to the access token, we can uncomment them and update the field names accordingly. Once this change comes through, GA-5669: BE Flow Step 2: Question & Response being stored
In Progress
  can be moved to done. 

Please note that the frontend and backend branches need to be merged and deployed together otherwise the app will not show responses even if a valid response was generated.

 

Backend app unit test implementation (no longer required in handover)

Jira link - GA-5002: Backend app Unit Test Implementation
Done
 

For this work, all the configuration has been done through pytest including coverage setup. Some tests have been written already including the Python equivalent of mocks (which are called fixtures). Examples of these mocks are in a-cubed-backend/tests/conftest.py. 

These tests have also been included as part of the pipeline.

The coverage can be checked by running pytest in the terminal for each file.

Open image-20250320-161041.png
image-20250320-161041.png
GA-5670 - Feedback flow

UI - GA-4979: DWP Ask response feedback feature second iteration refinement
Refine
 

Jira link - GA-5670: [Stretch] BE Flow Step 3: Feedback flow 
To Do
 

Relevant branches:

Frontend - feat/do-not-delete-feedback-v2 (Completed UI changes)

Backend - feat/ga5669-response-storage

If the backend branch has been merged into develop, then create a new branch from develop

Notes:

On the backend branch, there is a post_feedback.py function written which was copied from the tech spike. This function contains all the relevant calls to the database required to post feedback. It is also wrapped in a transaction to avoid corrupt data being sent to the database (if one call fails, then nothing is posted). A new route handler in app.py will need to be added where the request can be parsed and parameters sent to the post_feedback function.

The frontend branch is a standalone branch with the UI changes required to implement detailed feedback. This does not include any error handling states.

The way the feedback should be sent from the FeedbackExpanded.tsx component to the backend is something like this:



const response = await fetch("/api/feedback", 
  { 
    method: "POST", 
    body: JSON.stringify({
      feedback_free_text,
      feedback_types: checkboxesSelected 
    })
  })
There are examples of existing code under a-cubed-new-frontend/app/utils/api/api.ts which can be copied over into a new function called postFeedback for example. A new folder with a new file in the api directory will need to be created as we are using Next.js route handlers. This will be api/feedback/route.ts. Again, existing code can be reused such as api/query/route.ts.

 

GA-5671 - Show history (UI)

GA-5674 - User accessing history

GA-5677 - User viewing history

GA-5756 - Q&R Error Handling

Jira links 

GA-5671: BE Flow Step 4: Show history 
To Do
 

GA-5674: User Accessing Chat Records View 
Refine
 

GA-5677: User Viewing Chat Records Available - PENDING DESIGN SESSION
Refine
 

GA-5756: BE Flow Step 2a: Question and Response Post Error Handling
To Do
 

These tickets have not been started yet

 

This query can be used to fetch all details about any given question/response

Open masterqueryv2.sql

masterqueryv2.sql
24 Mar 2025, 01:22 PM
 

Related content


2023-01-17 Discuss PostgresSQL review and FIFO SQS
2023-01-17 Discuss PostgresSQL review and FIFO SQS
Simon Harrison
More like this
PostgreSQL Azure Flexi Server
PostgreSQL Azure Flexi Server
Debt Transformation Programme
More like this
Sprint Exit Report - 2025-03-11 [Sprint 44]
Sprint Exit Report - 2025-03-11 [Sprint 44]
DC
More like this
Sprint Exit Report - 2025-01-28 [Sprint 41]
Sprint Exit Report - 2025-01-28 [Sprint 41]
DC
More like this
2.B1 [Completed] BACP issue - Immutable store connectivity
2.B1 [Completed] BACP issue - Immutable store connectivity
DWP Business Audit – ARA
More like this
Postgres Database Migration
Postgres Database Migration
HCS Manage and Deploy My Code
More like this

thumbs up

clapping hands

party popper

Be the first to add a reaction

Quickstart

masterqueryv2.sql
sql · 2 KB

WITH message_feedback_types AS ( 
  SELECT  
    fb.message_id, 
    json_agg(json_build_object('feedback_type', ft.name)) as types 
  FROM "Feedback" fb 
  JOIN "MessageFeedback" mf ON mf.feedback_id = fb.id 
  JOIN "FeedbackType" ft ON ft.id = mf.feedback_type_id 
  GROUP BY fb.message_id 
), 
message_source_links AS ( 
  SELECT 
    m.id as message_id, 
    json_agg(json_build_object('url', mc.url, 'title', mc.title)) as links 
  FROM "Message" m 
  JOIN "MessageCitations" mc ON mc.message_id = m.id 
  GROUP BY m.id 
) 
SELECT 
  m.id AS message_id, 
  m.question,  
  m.response, 
  m.previous_chat_history, 
  c.name AS message_country, 
  rt.name AS request_type,  
  mt.name AS message_type, 
  ds.name AS data_source,
  m.created_at AS message_sent_at, 
  u.given_name,
  u.family_name,
  u.job_centre AS job_centre, 
  fb.feedback_free_text, 
  fb.created_at AS feedback_given_at, 
  COALESCE(mft.types, '[]'::json) AS feedback_types, 
  COALESCE(msl.links, '[]'::json) AS source_links
FROM 
  "Message" AS m 
  LEFT JOIN "Country" c on c.id = m.country_id 
  LEFT JOIN "RequestType" rt ON rt.id = m.request_type_id 
  LEFT JOIN "MessageType" mt ON mt.id = m.message_type_id
  LEFT JOIN "DataSource" ds ON ds.id = m.data_source_id
  LEFT JOIN "MessageUsers" mu ON mu.message_id = m.id 
  LEFT JOIN "Users" u ON u.id = mu.user_id  
  LEFT JOIN "Feedback" fb ON fb.message_id = m.id 
  LEFT JOIN message_feedback_types mft ON mft.message_id = m.id 
  LEFT JOIN message_source_links msl ON msl.message_id = m.id 
WHERE rt.is_active = true AND mt.is_active = true 
ORDER BY m.created_at DESC 

