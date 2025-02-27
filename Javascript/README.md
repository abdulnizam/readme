 FAIL  redux/feature/generatedContent/generatedContent.test.ts
  generatedContentSlice Reducers
    ✓ should return the initial state (2 ms)
    ✓ should handle setList (1 ms)
    ✓ should handle setCitations
    ✓ should handle addVersionToList
    ✕ should handle addContentToMultiItemList (1 ms)
    ✓ should handle removeContentFromMultiItemList
    ✓ should handle addRestyleToList (1 ms)
    ✓ should handle removeRestyleFromList
    ✓ should handle setEditedContent (1 ms)
    ✓ should handle setEditContextListSelectedVersion
    ✓ should handle addNewListItem
    ✓ should handle setReviewIndex (1 ms)
    ✓ should handle resetReviewIndex
    ✓ should handle resetAllGeneratedContent (2 ms)
    ✓ should handle setReviewHeader (1 ms)

  ● generatedContentSlice Reducers › should handle addContentToMultiItemList

    expect(received).toEqual(expected) // deep equality

    Expected: {"answer": "A", "choices": "A,B,C", "question": "Q1"}
    Received: [{"answer": "A", "choices": "A,B,C", "question": "Q1"}]

      103 |   
      104 |     // Correct assertion to match nested array structure
    > 105 |     expect(newState.knowledgeCheckList[0].versions[0][1][0]).toEqual(questionList[0]);
          |                                                              ^
      106 |   });
      107 |
      108 |   test('should handle removeContentFromMultiItemList', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:105:62)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 14 passed, 15 total
Snapshots:   0 total
Time:        0.77 s, estimated 1 s
Ran all test suites matching /generatedContent.test/i.
