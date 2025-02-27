test('should handle addRestyleToList for all contexts', () => {
    const newContent = { heading: 'Updated Slide', bullet_points: 'Updated Point' };
  
    const contexts = [
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerPointList' },
      { type: CONTINUOUS_KNOWLEDGE, key: 'knowledgeCheckList' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckList' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const initial = {
        ...initialState,
        [key]: [
          {
            review: 'pending',
            selectedVersion: 0,
            versions: [[[{ heading: 'Old Slide', bullet_points: 'Old Point' }]]],
          },
        ],
      };
  
      const newState = generatedContentReducer(
        initial,
        addRestyleToList({ context: type, reviewIndex: 0, newContent, multipleItemsIndex: 0 })
      );
  
      expect(newState[key][0].versions[0][0]).toContainEqual(newContent);
    });
  });


  test('should handle removeRestyleFromList for all contexts', () => {
    const contexts = [
      { type: POWERPOINT_SCRIPT, key: 'elearningList' },
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerPointList' },
      { type: CONTINUOUS_KNOWLEDGE, key: 'knowledgeCheckList' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckList' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const initial = {
        ...initialState,
        [key]: [
          {
            review: 'pending',
            selectedVersion: 0,
            versions: [[[{ heading: 'Slide', bullet_points: 'Point' }, { heading: 'Extra Slide', bullet_points: 'Extra' }]]],
          },
        ],
      };
  
      const newState = generatedContentReducer(
        initial,
        removeRestyleFromList({ context: type, reviewIndex: 0, multipleItemsIndex: 0 })
      );
  
      expect(newState[key][0].versions[0][0].length).toBe(1);
    });
  });


  test('should handle setEditedContent for all contexts', () => {
    const newContent = { heading: 'Edited Slide', bullet_points: 'Edited Point' };
  
    const contexts = [
      { type: CONTINUOUS_TOPICS, key: 'topicList' },
      { type: TOPIC_OUTLINES, key: 'topicList' },
      { type: POWERPOINT_SCRIPT, key: 'elearningList' },
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerPointList' },
      { type: CONTINUOUS_KNOWLEDGE, key: 'knowledgeCheckList' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckList' },
      { type: CONTINUOUS_CORE_CONTENT, key: 'continuousList' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const initial = {
        ...initialState,
        [key]: [
          {
            review: 'pending',
            selectedVersion: 0,
            versions: [[[{ heading: 'Old Slide', bullet_points: 'Old Point' }]]],
          },
        ],
      };
  
      const newState = generatedContentReducer(
        initial,
        setEditedContent({ context: type, reviewIndex: 0, newContent, multipleItemsIndex: 0 })
      );
  
      expect(newState[key][0].versions[0][0][0]).toEqual(newContent);
    });
  });

  test('should handle setEditContextListReviewComplete for all contexts', () => {
    const contexts = [
      { type: POWERPOINT_SCRIPT, key: 'elearningList' },
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerPointList' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckList' },
      { type: CONTINUOUS_CORE_CONTENT, key: 'continuousList' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const initial = {
        ...initialState,
        [key]: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }],
      };
  
      const newState = generatedContentReducer(
        initial,
        setEditContextListReviewComplete({ context: type, reviewIndex: 0 })
      );
  
      expect(newState[key][0].review).toBe('completed');
    });
  });


  test('should handle addNewListItem for all contexts', () => {
    const newItem = [{ heading: 'New Slide', bullet_points: 'New Point' }];
  
    const contexts = [
      { type: POWERPOINT_SCRIPT, key: 'elearningList' },
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerPointList' },
      { type: CONTINUOUS_KNOWLEDGE, key: 'knowledgeCheckList' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckList' },
      { type: CONTINUOUS_CORE_CONTENT, key: 'continuousList' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const initial = {
        ...initialState,
        [key]: [],
      };
  
      const newState = generatedContentReducer(
        initial,
        addNewListItem({ context: type, list: newItem })
      );
  
      expect(newState[key]).toEqual(newItem);
    });
  });