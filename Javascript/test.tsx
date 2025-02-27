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
  
    // ✅ Correct assertion to match the actual array structure
    expect(newState.knowledgeCheckList[0].versions[0][1]).toEqual(questionList);
  });