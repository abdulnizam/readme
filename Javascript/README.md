 FAIL  redux/feature/generatedContent/generatedContent.test.ts
  generatedContentSlice Reducers
    ✓ should return the initial state (2 ms)
    ✓ should handle setList (1 ms)
    ✓ should handle setCitations
    ✓ should handle addVersionToList
    ✕ should handle addContentToMultiItemList (2 ms)
    ✕ should handle removeContentFromMultiItemList (1 ms)
    ✓ should handle addRestyleToList (1 ms)
    ✓ should handle removeRestyleFromList
    ✓ should handle setEditedContent (1 ms)
    ✓ should handle setEditContextListSelectedVersion
    ✓ should handle addNewListItem
    ✓ should handle setReviewIndex
    ✓ should handle resetReviewIndex
    ✓ should handle resetAllGeneratedContent
    ✓ should handle setReviewHeader (1 ms)

  ● generatedContentSlice Reducers › should handle addContentToMultiItemList

    expect(received).toEqual(expected) // deep equality

    Expected: ArrayContaining [{"answer": "A", "choices": "A,B,C", "question": "Q1"}]
    Received: []

      103 |   
      104 |     // Ensure the newly added content exists inside versions
    > 105 |     expect(newState.knowledgeCheckList[0].versions[0][0]).toEqual(expect.arrayContaining([questionList[0]]));
          |                                                           ^
      106 |   });
      107 |
      108 |   test('should handle removeContentFromMultiItemList', () => {

      at Object.toEqual (redux/feature/generatedContent/generatedContent.test.ts:105:59)

  ● generatedContentSlice Reducers › should handle removeContentFromMultiItemList

    expect(received).toBeDefined()

    Received: undefined

      124 |   
      125 |     // Instead of checking for an empty array, ensure it is still structured
    > 126 |     expect(newState.knowledgeCheckList[0].versions[0][0]).toBeDefined();
          |                                                           ^
      127 |     expect(newState.knowledgeCheckList[0].versions[0][0]).toHaveLength(0);
      128 |   });
      129 |

      at Object.toBeDefined (redux/feature/generatedContent/generatedContent.test.ts:126:59)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 13 passed, 15 total
Snapshots:   0 total
Time:        4.448 s
Ran all test suites matching /generatedContent.test/i.
