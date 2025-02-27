test('should handle addContentToMultiItemList', () => {
    const questionList: QuestionChoicesAnswer[] = [{ question: 'Q1', choices: 'A,B,C', answer: 'A' }];
  
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[]]], // Ensure correct structure
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      addContentToMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, newContent: questionList })
    );
  
    // Ensure the newly added content exists inside versions
    expect(newState.knowledgeCheckList[0].versions[0][0]).toEqual(expect.arrayContaining([questionList[0]]));
  });


  test('should handle removeContentFromMultiItemList', () => {
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ question: 'Q1', choices: 'A,B,C', answer: 'A' }]]], // Ensure correct structure
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      removeContentFromMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, multiItemIndex: 0 })
    );
  
    // Instead of checking for an empty array, ensure it is still structured
    expect(newState.knowledgeCheckList[0].versions[0][0]).toBeDefined();
    expect(newState.knowledgeCheckList[0].versions[0][0]).toHaveLength(0);
  });