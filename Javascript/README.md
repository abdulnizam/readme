 FAIL  redux/feature/generatedContent/generatedContent.test.ts
  generatedContentSlice Reducers
    ✓ should return the initial state (2 ms)
    ✓ should handle setList (1 ms)
    ✓ should handle setCitations
    ✓ should handle addVersionToList
    ✕ should handle addContentToMultiItemList (1 ms)
    ✕ should handle removeContentFromMultiItemList (1 ms)
    ✓ should handle addRestyleToList (1 ms)
    ✓ should handle removeRestyleFromList
    ✓ should handle setEditedContent (1 ms)
    ✓ should handle setEditContextListSelectedVersion (1 ms)
    ✓ should handle addNewListItem
    ✓ should handle setReviewIndex
    ✓ should handle resetReviewIndex (1 ms)
    ✓ should handle resetAllGeneratedContent
    ✓ should handle setReviewHeader (1 ms)

  ● generatedContentSlice Reducers › should handle addContentToMultiItemList

    expect(received).toEqual(expected) // deep equality

    Expected: ArrayContaining [{"answer": "A", "choices": "A,B,C", "question": "Q1"}]
    Received: []

      102 |     );
      103 |   
    > 104 |     expect(newState.knowledgeCheckList[0].versions[0][0]).toEqual(expect.arrayContaining(questionList));
          |                                                           ^
      105 |   });
      106 |
      107 |   test('should handle removeContentFromMultiItemList', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:104:59)

  ● generatedContentSlice Reducers › should handle removeContentFromMultiItemList

    expect(received).toHaveLength(expected)

    Matcher error: received value must have a length property whose value must be a number

    Received has value: undefined

      122 |     );
      123 |   
    > 124 |     expect(newState.knowledgeCheckList[0].versions[0][0]).toHaveLength(0);
          |                                                           ^
      125 |   });
      126 |
      127 |   test('should handle addRestyleToList', () => {

      at Object.toHaveLength (redux/feature/generatedContent/generatedContent.test.ts:124:59)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 13 passed, 15 total
Snapshots:   0 total
Time:        3.579 s
