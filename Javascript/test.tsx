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
  
    expect(newState.knowledgeCheckList[0].versions[0][0]).toEqual(expect.arrayContaining(questionList));
  });


  test('should handle removeContentFromMultiItemList', () => {
    const initial = {
      ...initialState,
      knowledgeCheckList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ question: 'Q1', choices: 'A,B,C', answer: 'A' }]]], // Ensure nested structure
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      removeContentFromMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, multiItemIndex: 0 })
    );
  
    expect(newState.knowledgeCheckList[0].versions[0][0]).toHaveLength(0);
  });



  test('should handle removeRestyleFromList', () => {
    const initial = {
      ...initialState,
      elearningList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ heading: 'Slide 1', bullet_points: 'Point 1' }]]],
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      removeRestyleFromList({ context: POWERPOINT_SCRIPT, reviewIndex: 0, multipleItemsIndex: 0 })
    );
  
    expect(newState.elearningList[0].versions[0][0]).toHaveLength(1); // Ensure at least one item remains
  });



  test('should handle setEditedContent', () => {
    const newContent = { heading: 'Updated Slide', bullet_points: 'Updated Point' };
  
    const initial = {
      ...initialState,
      elearningList: [
        {
          review: 'pending',
          selectedVersion: 0,
          versions: [[[{ heading: 'Slide 1', bullet_points: 'Point 1' }]]], // Ensure correct structure
        },
      ],
    };
  
    const newState = generatedContentReducer(
      initial,
      setEditedContent({ context: POWERPOINT_SCRIPT, reviewIndex: 0, newContent, multipleItemsIndex: 0 })
    );
  
    expect(newState.elearningList[0].versions[0][0][0]).toEqual(newContent);
  });