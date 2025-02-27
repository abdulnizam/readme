test('should not modify state when addContentToMultiItemList is called with undefined context', () => {
    const newContent = [{ question: 'Q1', choices: 'A,B,C', answer: 'A' }];
  
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ question: 'Existing Q', choices: 'X,Y,Z', answer: 'X' }]]],
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      addContentToMultiItemList({ context: undefined as any, reviewIndex: 0, newContent })
    );
  
    expect(newState).toEqual(initial);
  });

  test('should not modify state when removeContentFromMultiItemList is called with undefined context', () => {
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ question: 'Q1', choices: 'A,B,C', answer: 'A' }]]],
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      removeContentFromMultiItemList({ context: undefined as any, reviewIndex: 0, multiItemIndex: 0 })
    );
  
    expect(newState).toEqual(initial);
  });