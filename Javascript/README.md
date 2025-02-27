 console.error
    Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'title')]
        at reportException (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
        at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
        at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
        at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
        at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
        at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
        at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
        at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
        at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
        at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
        at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26124:20)
        at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
        at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
        at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
        at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
        at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
        at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
        at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:87:15)
        at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
        at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
        at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
        at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
        at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
        at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
        at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
        at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34) {
      detail: TypeError: Cannot read properties of undefined (reading 'title')
          at title (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/page.tsx:47:96)
          at renderWithHooks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
          at updateFunctionComponent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:19617:20)
          at beginWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:21640:16)
          at HTMLUnknownElement.callCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
          at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
          at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
          at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
          at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
          at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26124:20)
          at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
          at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
          at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
          at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
          at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
          at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:87:15)
          at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
          at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34),
      type: 'unhandled exception'
    }

      85 |   test('handles button click correctly', () => {
      86 |     render(<Edit />);
    > 87 |     fireEvent.click(screen.getByText('Save'));
         |               ^
      88 |     expect(mockEditPrimaryClick).toHaveBeenCalled();
      89 |   });
      90 |

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27490:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26124:20)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:87:15)

  console.error
    Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'title')]
        at reportException (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
        at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
        at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
        at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
        at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
        at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
        at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
        at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
        at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
        at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
        at recoverFromConcurrentError (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
        at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26135:20)
        at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
        at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
        at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
        at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
        at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
        at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
        at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:87:15)
        at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
        at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
        at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
        at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
        at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
        at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
        at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
        at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34) {
      detail: TypeError: Cannot read properties of undefined (reading 'title')
          at title (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/page.tsx:47:96)
          at renderWithHooks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
          at updateFunctionComponent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:19617:20)
          at beginWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:21640:16)
          at HTMLUnknownElement.callCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
          at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
          at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
          at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
          at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
          at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at recoverFromConcurrentError (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
          at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26135:20)
          at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
          at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
          at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
          at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
          at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
          at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:87:15)
          at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
          at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34),
      type: 'unhandled exception'
    }

      85 |   test('handles button click correctly', () => {
      86 |     render(<Edit />);
    > 87 |     fireEvent.click(screen.getByText('Save'));
         |               ^
      88 |     expect(mockEditPrimaryClick).toHaveBeenCalled();
      89 |   });
      90 |

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27490:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at recoverFromConcurrentError (node_modules/react-dom/cjs/react-dom.development.js:25889:20)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26135:20)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:87:15)

  console.error
    The above error occurred in the <Edit> component:
    
        at Edit (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/page.tsx:41:45)
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

      85 |   test('handles button click correctly', () => {
      86 |     render(<Edit />);
    > 87 |     fireEvent.click(screen.getByText('Save'));
         |               ^
      88 |     expect(mockEditPrimaryClick).toHaveBeenCalled();
      89 |   });
      90 |

      at logCapturedError (node_modules/react-dom/cjs/react-dom.development.js:18704:23)
      at update.callback (node_modules/react-dom/cjs/react-dom.development.js:18737:5)
      at callCallback (node_modules/react-dom/cjs/react-dom.development.js:15036:12)
      at commitUpdateQueue (node_modules/react-dom/cjs/react-dom.development.js:15057:9)
      at commitLayoutEffectOnFiber (node_modules/react-dom/cjs/react-dom.development.js:23430:13)
      at commitLayoutMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24727:9)
      at commitLayoutEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24713:7)
      at commitLayoutEffects (node_modules/react-dom/cjs/react-dom.development.js:24651:3)
      at commitRootImpl (node_modules/react-dom/cjs/react-dom.development.js:26862:5)
      at commitRoot (node_modules/react-dom/cjs/react-dom.development.js:26721:5)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26156:3)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:87:15)

  console.error
    Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'title')]
        at reportException (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
        at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
        at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
        at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
        at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
        at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
        at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
        at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
        at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
        at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
        at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26124:20)
        at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
        at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
        at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
        at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
        at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
        at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
        at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:125:15)
        at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
        at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
        at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
        at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
        at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
        at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
        at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
        at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34) {
      detail: TypeError: Cannot read properties of undefined (reading 'title')
          at title (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/page.tsx:47:96)
          at renderWithHooks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
          at updateFunctionComponent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:19617:20)
          at beginWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:21640:16)
          at HTMLUnknownElement.callCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
          at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
          at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
          at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
          at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
          at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26124:20)
          at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
          at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
          at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
          at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
          at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
          at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:125:15)
          at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
          at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
          at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34),
      type: 'unhandled exception'
    }

      123 |     render(<Edit />);
      124 |     const editButton = screen.getByText('Save');
    > 125 |     fireEvent.click(editButton);
          |               ^
      126 |     expect(mockEditPrimaryClick).toHaveBeenCalled();
      127 |   });
      128 |

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27490:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26124:20)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:125:15)

  console.error
    Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'title')]
        at reportException (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
        at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
        at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
        at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
        at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
        at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
        at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
        at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
        at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
        at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
        at recoverFromConcurrentError (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
        at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26135:20)
        at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
        at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
        at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
        at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
        at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
        at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
        at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
        at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:125:15)
        at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
        at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
        at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
        at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
        at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
        at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
        at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
        at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
        at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34) {
      detail: TypeError: Cannot read properties of undefined (reading 'title')
          at title (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/page.tsx:47:96)
          at renderWithHooks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
          at updateFunctionComponent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:19617:20)
          at beginWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:21640:16)
          at HTMLUnknownElement.callCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
          at invokeEventListeners (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
          at HTMLUnknownElementImpl._dispatch (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
          at HTMLUnknownElementImpl.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
          at HTMLUnknownElement.dispatchEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
          at Object.invokeGuardedCallbackDev (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at recoverFromConcurrentError (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
          at performSyncWorkOnRoot (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:26135:20)
          at flushSyncCallbacks (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react-dom/cjs/react-dom.development.js:12042:22)
          at flushActQueue (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2667:24)
          at act (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/react/cjs/react.development.js:2582:11)
          at /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at Object.eventWrapper (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/pure.js:107:28)
          at fireEvent (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:12:35)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/dom/dist/events.js:110:36)
          at Function.fireEvent.<computed> [as click] (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/node_modules/@testing-library/react/dist/fire-event.js:15:52)
          at Object.click (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/Edit.test.tsx:125:15)
          at Promise.then.completed (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:316:40)
          at _runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:121:9)
          at run (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/Users/adbul.nizam1/.nvm/versions/node/v20.17.0/lib/node_modules/jest-cli/node_modules/jest-runner/build/runTest.js:444:34),
      type: 'unhandled exception'
    }

      123 |     render(<Edit />);
      124 |     const editButton = screen.getByText('Save');
    > 125 |     fireEvent.click(editButton);
          |               ^
      126 |     expect(mockEditPrimaryClick).toHaveBeenCalled();
      127 |   });
      128 |

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27490:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at recoverFromConcurrentError (node_modules/react-dom/cjs/react-dom.development.js:25889:20)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26135:20)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:125:15)

  console.error
    The above error occurred in the <Edit> component:
    
        at Edit (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/learning-and-development-front-end/app/[user-context]/edit/page.tsx:41:45)
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

      123 |     render(<Edit />);
      124 |     const editButton = screen.getByText('Save');
    > 125 |     fireEvent.click(editButton);
          |               ^
      126 |     expect(mockEditPrimaryClick).toHaveBeenCalled();
      127 |   });
      128 |

      at logCapturedError (node_modules/react-dom/cjs/react-dom.development.js:18704:23)
      at update.callback (node_modules/react-dom/cjs/react-dom.development.js:18737:5)
      at callCallback (node_modules/react-dom/cjs/react-dom.development.js:15036:12)
      at commitUpdateQueue (node_modules/react-dom/cjs/react-dom.development.js:15057:9)
      at commitLayoutEffectOnFiber (node_modules/react-dom/cjs/react-dom.development.js:23430:13)
      at commitLayoutMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24727:9)
      at commitLayoutEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24713:7)
      at commitLayoutEffects (node_modules/react-dom/cjs/react-dom.development.js:24651:3)
      at commitRootImpl (node_modules/react-dom/cjs/react-dom.development.js:26862:5)
      at commitRoot (node_modules/react-dom/cjs/react-dom.development.js:26721:5)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26156:3)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:125:15)

 FAIL  app/[user-context]/edit/Edit.test.tsx (9.133 s)
  Edit Component
    ✓ renders the Edit component with correct data (60 ms)
    ✕ handles button click correctly (68 ms)
    ✓ handles regenerate content click correctly (9 ms)
    ✓ handles version selection correctly (9 ms)
    ✓ renders source materials correctly (13 ms)
    ✕ renders InsetText when regenerations are used (1010 ms)
    ✕ handles edit mode transition correctly (24 ms)
    ✕ handles AI reprompt click correctly (1013 ms)
    ✓ handles adding and removing a question (20 ms)
    ✓ renders version navigation buttons correctly (7 ms)
    ✕ handles different contexts correctly (7 ms)
    ✓ handles switching versions (7 ms)
    ✓ displays regenerated inset text when more than one version exists (5 ms)
    ✓ handles removing a question correctly (8 ms)
    ✕ handles undo correctly (5 ms)
    ✓ ensures AI Reprompt is disabled if editState is false (3 ms)

  ● Edit Component › handles button click correctly

    TypeError: Cannot read properties of undefined (reading 'title')

      45 |   const [versions, setVersions] = useState<number>(0);
      46 |   const [newQuestionCount, setNewQuestionCount] = useState<number>(0);
    > 47 |   const [descriptorTitle, setDescriptorTitle] = useState<string>(descriptor[editState ? 1 : 0].title);
         |                                                                                                ^
      48 |   const [isReviewed, setIsReviewed] = useState<boolean>(false);
      49 |   const firstElementRef = useRef<HTMLDivElement>(null);
      50 |

      at title (app/[user-context]/edit/page.tsx:47:96)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:15486:18)
      at updateFunctionComponent (node_modules/react-dom/cjs/react-dom.development.js:19617:20)
      at beginWork (node_modules/react-dom/cjs/react-dom.development.js:21640:16)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27465:14)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at recoverFromConcurrentError (node_modules/react-dom/cjs/react-dom.development.js:25889:20)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26135:20)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:87:15)

  ● Edit Component › renders InsetText when regenerations are used

    Unable to find an element by: [data-testid="regenerations-used-inset-text"]

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="govuk-grid-row"
        >
          <div
            class="govuk-grid-column-full"
          >
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="0"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="undefined-h4-text"
                >
                  Descriptor Title 1 topic 1 knowledge check Test Header
                  <br />
                </h4>
              </div>
              <div
                class="headingRow govuk-body-m"
                data-testid="undefined-description-text"
              >
                Description 1
                <br />
              </div>
              <div
                class="headingRow govuk-body-m govuk-hint"
                data-testid="undefined-hint-text"
              >
                Hint 1
              </div>
            </div>
            <div
              class="aiIndicator"
              data-testid="warning"
            >
              <span
                aria-hidden="true"
                aria-label="Warning"
                class="aiIndicatorIcon"
              >
                AI
              </span>
              <strong
                class="govuk-warning-text__text"
              >
                <span
                  class="govuk-visually-hidden"
                >
                  Warning
                </span>
                Warning message
              </strong>
            </div>
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="-1"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="undefined-h4-text"
                >
                  Edit Descriptor Title 1
                  <br />
                </h4>
              </div>
            </div>
            <details
              class="govuk-details"
            >
              <summary
                class="govuk-details__summary"
                data-testid="undefined-summary"
              >
                <span
                  class="govuk-details__summary-text"
                >
                  Test summary1
                </span>
              </summary>
              <div
                class="govuk-details__text"
                data-testid="undefined-detail"
              >
                Test statement1
                <br />
                <ul
                  data-testid="undefined-bullets"
                >
                  <li
                    data-testid="undefined-bullet-row-0"
                  >
                    Test bullets1
                  </li>
                </ul>
              </div>
            </details>
            <div
              class="container-read"
            >
              <div>
                <div>
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO"
                    data-testid="read-only-box-h4-content-0"
                  />
                  <p
                    class="govuk-body-m"
                    data-testid="read-only-box-content-content-0"
                  >
                    Version 1
                    <br />
                  </p>
                </div>
                <div
                  class="remove-link"
                >
                  <a
                    class="src__Link-sc-1loawqx-0 keQBfx"
                    data-testid="remove-question-link-0"
                    href=""
                    tabindex="0"
                  >
                    Remove question
                  </a>
                </div>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
                <button
                  aria-label="Save Button"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="button"
                  tabindex="0"
                >
                  Generate a question
                </button>
                <button
                  aria-label="rewrite all"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="rewrite-all-button"
                  tabindex="0"
                >
                  Regenerate all
                </button>
              </div>
              <div
                class="version-navigation"
                data-testid="version-navigation"
              >
                <button
                  class="gds-button govuk-body-m disabled"
                  data-testid="version-navigation-previous-button"
                  disabled=""
                >
                  <strong>
                    Previous
                  </strong>
                </button>
                <button
                  class="gds-button govuk-body-m selected"
                  data-testid="version-navigation-version-button-0"
                >
                  V1
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-version-button-1"
                >
                  V2
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-next-button"
                >
                  <strong>
                    Next
                  </strong>
                </button>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="regenerated-inset-text govuk-inset-text"
                data-testid="regeneration-successful-inset-text"
              >
                <p>
                  Content successfully regenerated
                </p>
              </div>
            </div>
            <div
              class="container-read"
            >
              <h4
                class="heading__StyledHeading-sc-1dsobun-0 dWpWjO sources_header"
                data-testid="source-documents-h4"
              >
                Source document extracts
              </h4>
              <p
                class="govuk-hint govuk-body-m"
                data-testid="source-documents-content"
              >
                Extracts show the exact information used from source documents
              </p>
              <div
                class="sources_accordion"
                data-testid="sources-accordion-0"
              >
                <div
                  class="accordion_heading"
                  data-testid="sources-accordion-heading-0"
                >
                  <h5
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO accordion_title accordion_left"
                    data-testid="sources-accordion-h5-0"
                  >
                    1. Source 1
                  </h5>
                  <button
                    aria-expanded="false"
                    aria-label="View source extracts"
                    class="accordion_button accordion_right"
                    data-testid="sources-accordion-toggle-button-0"
                    tabindex="0"
                  >
                    <div
                      class="circular_container false"
                    >
                      <span
                        class="
              chevron_spacing chevron_down false"
                      />
                    </div>
                    <span
                      data-testid="sources-accordion-close-0"
                    >
                      View source extracts
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <button
              aria-label="Save Button"
              class="src__StyledButton-sc-19ocyxv-0 kFVkVS"
              data-testid="button"
              tabindex="0"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </body>

      115 |
      116 |     render(<Edit />);
    > 117 |     await waitFor(() => {
          |                  ^
      118 |       expect(screen.getByTestId('regenerations-used-inset-text')).toBeInTheDocument();
      119 |     });
      120 |   });

      at waitForWrapper (node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (app/[user-context]/edit/Edit.test.tsx:117:18)

  ● Edit Component › handles edit mode transition correctly

    TypeError: Cannot read properties of undefined (reading 'title')

      45 |   const [versions, setVersions] = useState<number>(0);
      46 |   const [newQuestionCount, setNewQuestionCount] = useState<number>(0);
    > 47 |   const [descriptorTitle, setDescriptorTitle] = useState<string>(descriptor[editState ? 1 : 0].title);
         |                                                                                                ^
      48 |   const [isReviewed, setIsReviewed] = useState<boolean>(false);
      49 |   const firstElementRef = useRef<HTMLDivElement>(null);
      50 |

      at title (app/[user-context]/edit/page.tsx:47:96)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:15486:18)
      at updateFunctionComponent (node_modules/react-dom/cjs/react-dom.development.js:19617:20)
      at beginWork (node_modules/react-dom/cjs/react-dom.development.js:21640:16)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27465:14)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at recoverFromConcurrentError (node_modules/react-dom/cjs/react-dom.development.js:25889:20)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26135:20)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:107:28)
      at fireEvent (node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:15:52)
      at Object.click (app/[user-context]/edit/Edit.test.tsx:125:15)

  ● Edit Component › handles AI reprompt click correctly

    expect(received).not.toBeNull()

    Received: null

    Ignored nodes: comments, script, style
    <html>
      <head />
      <body>
        <div>
          <div
            class="govuk-grid-row"
          >
            <div
              class="govuk-grid-column-full"
            >
              <div
                class="descriptorGroupHeader"
              >
                <div
                  tabindex="0"
                >
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                    data-testid="undefined-h4-text"
                  >
                    Descriptor Title 1 topic 1 knowledge check Test Header
                    <br />
                  </h4>
                </div>
                <div
                  class="headingRow govuk-body-m"
                  data-testid="undefined-description-text"
                >
                  Description 1
                  <br />
                </div>
                <div
                  class="headingRow govuk-body-m govuk-hint"
                  data-testid="undefined-hint-text"
                >
                  Hint 1
                </div>
              </div>
              <div
                class="aiIndicator"
                data-testid="warning"
              >
                <span
                  aria-hidden="true"
                  aria-label="Warning"
                  class="aiIndicatorIcon"
                >
                  AI
                </span>
                <strong
                  class="govuk-warning-text__text"
                >
                  <span
                    class="govuk-visually-hidden"
                  >
                    Warning
                  </span>
                  Warning message
                </strong>
              </div>
              <div
                class="descriptorGroupHeader"
              >
                <div
                  tabindex="-1"
                >
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                    data-testid="undefined-h4-text"
                  >
                    Edit Descriptor Title 1
                    <br />
                  </h4>
                </div>
              </div>
              <details
                class="govuk-details"
              >
                <summary
                  class="govuk-details__summary"
                  data-testid="undefined-summary"
                >
                  <span
                    class="govuk-details__summary-text"
                  >
                    Test summary1
                  </span>
                </summary>
                <div
                  class="govuk-details__text"
                  data-testid="undefined-detail"
                >
                  Test statement1
                  <br />
                  <ul
                    data-testid="undefined-bullets"
                  >
                    <li
                      data-testid="undefined-bullet-row-0"
                    >
                      Test bullets1
                    </li>
                  </ul>
                </div>
              </details>
              <div
                class="container-read"
              >
                <div>
                  <div>
                    <h4
                      class="heading__StyledHeading-sc-1dsobun-0 dWpWjO"
                      data-testid="read-only-box-h4-content-0"
                    />
                    <p
                      class="govuk-body-m"
                      data-testid="read-only-box-content-content-0"
                    >
                      Version 1
                      <br />
                    </p>
                  </div>
                  <div
                    class="remove-link"
                  >
                    <a
                      class="src__Link-sc-1loawqx-0 keQBfx"
                      data-testid="remove-question-link-0"
                      href=""
                      tabindex="0"
                    >
                      Remove question
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="navigation-container"
              >
                <div
                  class="inlineButtons"
                >
                  <button
                    aria-label="Save Button"
                    class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                    data-testid="button"
                    tabindex="0"
                  >
                    Generate a question
                  </button>
                  <button
                    aria-label="rewrite all"
                    class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                    data-testid="rewrite-all-button"
                    tabindex="0"
                  >
                    Regenerate all
                  </button>
                </div>
                <div
                  class="version-navigation"
                  data-testid="version-navigation"
                >
                  <button
                    class="gds-button govuk-body-m disabled"
                    data-testid="version-navigation-previous-button"
                    disabled=""
                  >
                    <strong>
                      Previous
                    </strong>
                  </button>
               ...

      131 |
      132 |     await waitFor(() => {
    > 133 |       expect(screen.queryByTestId('use-ai-prompts-link')).not.toBeNull();
          |                                                               ^
      134 |     });
      135 |
      136 |     const aiButton = screen.getByTestId('use-ai-prompts-link');

      at toBeNull (app/[user-context]/edit/Edit.test.tsx:133:63)
      at runWithExpensiveErrorDiagnosticsDisabled (node_modules/@testing-library/dom/dist/config.js:47:12)
      at checkCallback (node_modules/@testing-library/dom/dist/wait-for.js:124:77)
      at checkRealTimersCallback (node_modules/@testing-library/dom/dist/wait-for.js:118:16)
      at Timeout.task [as _onTimeout] (node_modules/jsdom/lib/jsdom/browser/Window.js:520:19)

  ● Edit Component › handles different contexts correctly

    TestingLibraryElementError: Unable to find an element with the text: /name and objectives individually/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="govuk-grid-row"
        >
          <div
            class="govuk-grid-column-full"
          >
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="0"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="undefined-h4-text"
                >
                  Descriptor Title 1 topic 1 name and objectives
                  <br />
                </h4>
              </div>
              <div
                class="headingRow govuk-body-m"
                data-testid="undefined-description-text"
              >
                Description 1
                <br />
              </div>
              <div
                class="headingRow govuk-body-m govuk-hint"
                data-testid="undefined-hint-text"
              >
                Hint 1
              </div>
            </div>
            <div
              class="aiIndicator"
              data-testid="warning"
            >
              <span
                aria-hidden="true"
                aria-label="Warning"
                class="aiIndicatorIcon"
              >
                AI
              </span>
              <strong
                class="govuk-warning-text__text"
              >
                <span
                  class="govuk-visually-hidden"
                >
                  Warning
                </span>
                Warning message
              </strong>
            </div>
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="-1"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="undefined-h4-text"
                >
                  Edit Descriptor Title 1
                  <br />
                </h4>
              </div>
            </div>
            <details
              class="govuk-details"
            >
              <summary
                class="govuk-details__summary"
                data-testid="undefined-summary"
              >
                <span
                  class="govuk-details__summary-text"
                >
                  Test summary1
                </span>
              </summary>
              <div
                class="govuk-details__text"
                data-testid="undefined-detail"
              >
                Test statement1
                <br />
                <ul
                  data-testid="undefined-bullets"
                >
                  <li
                    data-testid="undefined-bullet-row-0"
                  >
                    Test bullets1
                  </li>
                </ul>
              </div>
            </details>
            <div
              class="container-read"
            >
              <div>
                <div>
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO"
                    data-testid="read-only-box-h4-content-0"
                  />
                  <p
                    class="govuk-body-m"
                    data-testid="read-only-box-content-content-0"
                  >
                    Version 1
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
                <button
                  aria-label="rewrite all"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="rewrite-all-button"
                  tabindex="0"
                >
                  Regenerate all
                </button>
              </div>
              <div
                class="version-navigation"
                data-testid="version-navigation"
              >
                <button
                  class="gds-button govuk-body-m disabled"
                  data-testid="version-navigation-previous-button"
                  disabled=""
                >
                  <strong>
                    Previous
                  </strong>
                </button>
                <button
                  class="gds-button govuk-body-m selected"
                  data-testid="version-navigation-version-button-0"
                >
                  V1
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-version-button-1"
                >
                  V2
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-next-button"
                >
                  <strong>
                    Next
                  </strong>
                </button>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="regenerated-inset-text govuk-inset-text"
                data-testid="regeneration-successful-inset-text"
              >
                <p>
                  Content successfully regenerated
                </p>
              </div>
            </div>
            <div
              class="container-read"
            >
              <h4
                class="heading__StyledHeading-sc-1dsobun-0 dWpWjO sources_header"
                data-testid="source-documents-h4"
              >
                Source document extracts
              </h4>
              <p
                class="govuk-hint govuk-body-m"
                data-testid="source-documents-content"
              >
                Extracts show the exact information used from source documents
              </p>
              <div
                class="sources_accordion"
                data-testid="sources-accordion-0"
              >
                <div
                  class="accordion_heading"
                  data-testid="sources-accordion-heading-0"
                >
                  <h5
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO accordion_title accordion_left"
                    data-testid="sources-accordion-h5-0"
                  >
                    1. Source 1
                  </h5>
                  <button
                    aria-expanded="false"
                    aria-label="View source extracts"
                    class="accordion_button accordion_right"
                    data-testid="sources-accordion-toggle-button-0"
                    tabindex="0"
                  >
                    <div
                      class="circular_container false"
                    >
                      <span
                        class="
              chevron_spacing chevron_down false"
                      />
                    </div>
                    <span
                      data-testid="sources-accordion-close-0"
                    >
                      View source extracts
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <button
              aria-label="Save Button"
              class="src__StyledButton-sc-19ocyxv-0 kFVkVS"
              data-testid="button"
              tabindex="0"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </body>

      158 |     (useJourneyContext as jest.Mock).mockReturnValue({ content: TOPIC_OUTLINES });
      159 |     render(<Edit />);
    > 160 |     expect(screen.getByText(/name and objectives individually/i)).toBeInTheDocument();
          |                   ^
      161 |   });
      162 |
      163 |   test('handles switching versions', () => {

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:160:19)

  ● Edit Component › handles undo correctly

    TestingLibraryElementError: Unable to find an element with the text: Undo. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="govuk-grid-row"
        >
          <div
            class="govuk-grid-column-full"
          >
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="0"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="undefined-h4-text"
                >
                  Descriptor Title 1 topic 1 knowledge check Test Header
                  <br />
                </h4>
              </div>
              <div
                class="headingRow govuk-body-m"
                data-testid="undefined-description-text"
              >
                Description 1
                <br />
              </div>
              <div
                class="headingRow govuk-body-m govuk-hint"
                data-testid="undefined-hint-text"
              >
                Hint 1
              </div>
            </div>
            <div
              class="aiIndicator"
              data-testid="warning"
            >
              <span
                aria-hidden="true"
                aria-label="Warning"
                class="aiIndicatorIcon"
              >
                AI
              </span>
              <strong
                class="govuk-warning-text__text"
              >
                <span
                  class="govuk-visually-hidden"
                >
                  Warning
                </span>
                Warning message
              </strong>
            </div>
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="-1"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="undefined-h4-text"
                >
                  Edit Descriptor Title 1
                  <br />
                </h4>
              </div>
            </div>
            <details
              class="govuk-details"
            >
              <summary
                class="govuk-details__summary"
                data-testid="undefined-summary"
              >
                <span
                  class="govuk-details__summary-text"
                >
                  Test summary1
                </span>
              </summary>
              <div
                class="govuk-details__text"
                data-testid="undefined-detail"
              >
                Test statement1
                <br />
                <ul
                  data-testid="undefined-bullets"
                >
                  <li
                    data-testid="undefined-bullet-row-0"
                  >
                    Test bullets1
                  </li>
                </ul>
              </div>
            </details>
            <div
              class="container-read"
            >
              <div>
                <div>
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO"
                    data-testid="read-only-box-h4-content-0"
                  />
                  <p
                    class="govuk-body-m"
                    data-testid="read-only-box-content-content-0"
                  >
                    Version 1
                    <br />
                  </p>
                </div>
                <div
                  class="remove-link"
                >
                  <a
                    class="src__Link-sc-1loawqx-0 keQBfx"
                    data-testid="remove-question-link-0"
                    href=""
                    tabindex="0"
                  >
                    Remove question
                  </a>
                </div>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
                <button
                  aria-label="Save Button"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="button"
                  tabindex="0"
                >
                  Generate a question
                </button>
                <button
                  aria-label="rewrite all"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="rewrite-all-button"
                  tabindex="0"
                >
                  Regenerate all
                </button>
              </div>
              <div
                class="version-navigation"
                data-testid="version-navigation"
              >
                <button
                  class="gds-button govuk-body-m disabled"
                  data-testid="version-navigation-previous-button"
                  disabled=""
                >
                  <strong>
                    Previous
                  </strong>
                </button>
                <button
                  class="gds-button govuk-body-m selected"
                  data-testid="version-navigation-version-button-0"
                >
                  V1
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-version-button-1"
                >
                  V2
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-next-button"
                >
                  <strong>
                    Next
                  </strong>
                </button>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="regenerated-inset-text govuk-inset-text"
                data-testid="regeneration-successful-inset-text"
              >
                <p>
                  Content successfully regenerated
                </p>
              </div>
            </div>
            <div
              class="container-read"
            >
              <h4
                class="heading__StyledHeading-sc-1dsobun-0 dWpWjO sources_header"
                data-testid="source-documents-h4"
              >
                Source document extracts
              </h4>
              <p
                class="govuk-hint govuk-body-m"
                data-testid="source-documents-content"
              >
                Extracts show the exact information used from source documents
              </p>
              <div
                class="sources_accordion"
                data-testid="sources-accordion-0"
              >
                <div
                  class="accordion_heading"
                  data-testid="sources-accordion-heading-0"
                >
                  <h5
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO accordion_title accordion_left"
                    data-testid="sources-accordion-h5-0"
                  >
                    1. Source 1
                  </h5>
                  <button
                    aria-expanded="false"
                    aria-label="View source extracts"
                    class="accordion_button accordion_right"
                    data-testid="sources-accordion-toggle-button-0"
                    tabindex="0"
                  >
                    <div
                      class="circular_container false"
                    >
                      <span
                        class="
              chevron_spacing chevron_down false"
                      />
                    </div>
                    <span
                      data-testid="sources-accordion-close-0"
                    >
                      View source extracts
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <button
              aria-label="Save Button"
              class="src__StyledButton-sc-19ocyxv-0 kFVkVS"
              data-testid="button"
              tabindex="0"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </body>

      183 |   test('handles undo correctly', () => {
      184 |     render(<Edit />);
    > 185 |     fireEvent.click(screen.getByText('Undo'));
          |                            ^
      186 |     expect(mockRemoveCurrentRestyle).toHaveBeenCalled();
      187 |   });
      188 |

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:185:28)

Test Suites: 1 failed, 1 total
Tests:       6 failed, 10 passed, 16 total
Snapshots:   0 total
Time:        14.072 s
