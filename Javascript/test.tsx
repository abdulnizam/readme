test('should handle addContentToMultiItemList', () => {
    const questionList: QuestionChoicesAnswer[] = [{ question: 'Q1', choices: 'A,B,C', answer: 'A' }];
  
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ question: 'Old Q', choices: 'X,Y,Z', answer: 'X' }]]], // Ensure valid structure
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      addContentToMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, newContent: questionList })
    );
  
    expect(newState.knowledgeCheckList[0].versions[0][1]).toEqual(expect.arrayContaining([questionList[0]]));
  });

  test('should handle removeContentFromMultiItemList', () => {
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ question: 'Q1', choices: 'A,B,C', answer: 'A' }]]], // Properly structured initial state
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      removeContentFromMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, multiItemIndex: 0 })
    );
  
    expect(newState.knowledgeCheckList[0].versions[0]).toBeDefined();
    expect(newState.knowledgeCheckList[0].versions[0].length).toBe(0); // Ensure item was removed
  });