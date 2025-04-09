
 FAIL  app/utils/api/__tests__/sendQueryMessage.test.ts
  ● Test suite failed to run

    ReferenceError: Request is not defined

      14 | // ✅ Polyfill AbortSignal.timeout for test
      15 | beforeAll(() => {
    > 16 |   if (!("timeout" in AbortSignal)) {
         |                 ^
      17 |     (AbortSignal as any).timeout = (ms: number) => {
      18 |       const controller = new AbortController();
      19 |       setTimeout(() => controller.abort(), ms);

      at Object.<anonymous> (node_modules/next/src/server/web/spec-extension/request.ts:15:34)
      at Object.<anonymous> (node_modules/next/server.js:2:16)
      at Object.<anonymous> (app/utils/api/__tests__/sendQueryMessage.test.ts:16:17)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.731 s, estimated 1 s
