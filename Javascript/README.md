generatedContentSlice Reducers
    ✓ should return the initial state (2 ms)
    ✓ should handle setList
    ✓ should handle setCitations (1 ms)
    ✓ should handle addVersionToList
    ✕ should handle addContentToMultiItemList (2 ms)
    ✓ should handle removeContentFromMultiItemList (1 ms)
    ✓ should handle addRestyleToList
    ✓ should handle removeRestyleFromList (1 ms)
    ✓ should handle setEditedContent
    ✓ should handle setEditContextListSelectedVersion (1 ms)
    ✓ should handle addNewListItem
    ✓ should handle setReviewIndex
    ✓ should handle resetReviewIndex (1 ms)
    ✓ should handle resetAllGeneratedContent
    ✓ should handle setReviewHeader (1 ms)

  ● generatedContentSlice Reducers › should handle addContentToMultiItemList

    expect(received).toEqual(expected) // deep equality

    Expected: ArrayContaining [{"answer": "A", "choices": "A,B,C", "question": "Q1"}]
    Received: [[{"answer": "A", "choices": "A,B,C", "question": "Q1"}]]

      102 |     );
      103 |   
    > 104 |     expect(newState.knowledgeCheckList[0].versions[0][1]).toEqual(expect.arrayContaining([questionList[0]]));
          |                                                           ^
      105 |   });
      106 |
      107 |   test('should handle removeContentFromMultiItemList', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:104:59)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 14 passed, 15 total
Snapshots:   0 total
Time:        0.712 s, estimated 1 s
Ran all test suites matching /generatedContent.test/i.
