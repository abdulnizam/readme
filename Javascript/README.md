 FAIL  redux/feature/generatedContent/generatedContent.test.ts
  generatedContentSlice Reducers
    ✓ should return the initial state (2 ms)
    ✓ should handle setList (1 ms)
    ✓ should handle setCitations (1 ms)
    ✓ should handle addVersionToList
    ✕ should handle addContentToMultiItemList (2 ms)
    ✕ should handle removeContentFromMultiItemList (1 ms)
    ✓ should handle addRestyleToList (1 ms)
    ✕ should handle removeRestyleFromList
    ✕ should handle setEditedContent
    ✓ should handle setEditContextListSelectedVersion (1 ms)
    ✓ should handle addNewListItem
    ✓ should handle setReviewIndex (1 ms)
    ✓ should handle resetReviewIndex
    ✓ should handle resetAllGeneratedContent
    ✓ should handle setReviewHeader

  ● generatedContentSlice Reducers › should handle addContentToMultiItemList

    expect(received).toEqual(expected) // deep equality

    - Expected  - 7
    + Received  + 1

    - Array [
    -   Object {
    -     "answer": "A",
    -     "choices": "A,B,C",
    -     "question": "Q1",
    -   },
    - ]
    + Array []

      91 |     );
      92 |
    > 93 |     expect(newState.knowledgeCheckList[0].versions[0][0]).toEqual(questionList);
         |                                                           ^
      94 |   });
      95 |
      96 |   test('should handle removeContentFromMultiItemList', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:93:59)

  ● generatedContentSlice Reducers › should handle removeContentFromMultiItemList

    TypeError: Cannot read properties of undefined (reading 'length')

      108 |     const newState = generatedContentReducer(initial, removeContentFromMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, multiItemIndex: 0 }));
      109 |
    > 110 |     expect(newState.knowledgeCheckList[0].versions[0][0].length).toBe(0);
          |                                                          ^
      111 |   });
      112 |
      113 |   test('should handle addRestyleToList', () => {

      at Object.length (redux/feature/generatedContent/generatedContent.test.ts:110:58)

  ● generatedContentSlice Reducers › should handle removeRestyleFromList

    expect(received).toBe(expected) // Object.is equality

    Expected: 0
    Received: 1

      136 |     const newState = generatedContentReducer(initial, removeRestyleFromList({ context: POWERPOINT_SCRIPT, reviewIndex: 0, multipleItemsIndex: 0 }));
      137 |
    > 138 |     expect(newState.elearningList[0].versions[0][0].length).toBe(0);
          |                                                             ^
      139 |   });
      140 |
      141 |   test('should handle setEditedContent', () => {

      at Object.toBe (redux/feature/generatedContent/generatedContent.test.ts:138:61)

  ● generatedContentSlice Reducers › should handle setEditedContent

    expect(received).toEqual(expected) // deep equality

    Expected: {"bullet_points": "Updated Point", "heading": "Updated Slide"}
    Received: undefined

      147 |     );
      148 |
    > 149 |     expect(newState.elearningList[0].versions[0][0][0]).toEqual(newContent);
          |                                                         ^
      150 |   });
      151 |
      152 |   test('should handle setEditContextListSelectedVersion', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:149:57)

Test Suites: 1 failed, 1 total
Tests:       4 failed, 11 passed, 15 total
Snapshots:   0 total
Time:        3.482 s
Ran all test suites matching /generatedContent.test/i.
