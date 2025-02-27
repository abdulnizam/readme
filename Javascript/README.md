generatedContentSlice Reducers
    ✓ should return the initial state (2 ms)
    ✓ should handle setList (1 ms)
    ✓ should handle setCitations
    ✓ should handle addVersionToList (1 ms)
    ✕ should handle addContentToMultiItemList (2 ms)
    ✓ should handle removeContentFromMultiItemList (1 ms)
    ✓ should handle addRestyleToList
    ✓ should handle removeRestyleFromList
    ✓ should handle setEditedContent
    ✓ should handle setEditContextListSelectedVersion
    ✓ should handle addNewListItem
    ✓ should handle setReviewIndex (2 ms)
    ✓ should handle resetReviewIndex (1 ms)
    ✓ should handle resetAllGeneratedContent
    ✓ should handle setReviewHeader (1 ms)

  ● generatedContentSlice Reducers › should handle addContentToMultiItemList

    expect(received).toEqual(expected) // deep equality

    - Expected  - 0
    + Received  + 2

      Array [
    +   Array [
          Object {
            "answer": "A",
            "choices": "A,B,C",
            "question": "Q1",
          },
    +   ],
      ]

      103 |   
      104 |     // ✅ Correct assertion to match the actual array structure
    > 105 |     expect(newState.knowledgeCheckList[0].versions[0][1]).toEqual(questionList);
          |                                                           ^
      106 |   });
      107 |
      108 |   test('should handle removeContentFromMultiItemList', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:105:59)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 14 passed, 15 total
Snapshots:   0 total
Time:        0.68 s, estimated 1 s
Ran all test suites matching /generatedContent.test/i.
