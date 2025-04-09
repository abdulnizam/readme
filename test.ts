
 FAIL  app/utils/api/__tests__/generateFollowUpQs.test.ts
  Generating follow up questions
    ✕ should successfully call fetch with the correct params (1 ms)
    ✓ should handle errors and call catchError (1 ms)

  ● Generating follow up questions › should successfully call fetch with the correct params

    TypeError: AbortSignal.timeout is not a function

      87 |         location: "England",
      88 |       }),
    > 89 |       signal: AbortSignal.timeout(90000),
         |                           ^
      90 |     });
      91 |   });
      92 |

      at Object.<anonymous> (app/utils/api/__tests__/generateFollowUpQs.test.ts:89:27)

------------------------|---------|----------|---------|---------|---------------------------------------------------------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                   
------------------------|---------|----------|---------|---------|---------------------------------------------------------------------
All files               |   63.87 |       40 |   16.66 |   63.87 |                                                                     
 constants              |     100 |      100 |     100 |     100 |                                                                     
  ApiTests.ts           |     100 |      100 |     100 |     100 |                                                                     
 utils/api              |   67.56 |    33.33 |     100 |   67.56 |                                                                     
  generateFollowUpQs.ts |   67.56 |    33.33 |     100 |   67.56 | 42-65                                                               
 utils/storage          |   53.28 |       50 |    9.09 |   53.28 |                                                                     
  storage.ts            |   53.28 |       50 |    9.09 |   53.28 | 7-19,30-36,45-49,57-60,73-79,87-104,112-115,122-124,127-131,134-138 
------------------------|---------|----------|---------|---------|---------------------------------------------------------------------
Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.763 s, estimated 1 s
Ran all test suites matching /generateFollowUpQs.test/i.
