> a-cubed-new-frontend@0.1.0 test
> jest generateFollowUpQs.test

 FAIL  app/utils/api/__tests__/generateFollowUpQs.test.ts
  ● Test suite failed to run

    ReferenceError: Request is not defined

      13 |   updateHistory: jest.fn(),
      14 |   loadHistory: jest.fn(),
    > 15 |   addHistory: jest.fn(),
         |                 ^
      16 |   calculateIndex: jest.fn(),
      17 |   filterChatHistory: jest.fn(),
      18 |   catchError: jest.fn(),

      at Object.<anonymous> (node_modules/next/src/server/web/spec-extension/request.ts:15:34)
      at Object.<anonymous> (node_modules/next/server.js:2:16)
      at Object.<anonymous> (app/utils/api/__tests__/generateFollowUpQs.test.ts:15:17)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.797 s, estimated 1 s
