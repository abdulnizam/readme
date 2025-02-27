test('should handle setList for all contexts', () => {
    const newList: EditContext[] = [
      { review: 'pending', selectedVersion: 0, versions: [[[{ title: 'Topic 1', objectives: 'Objectives 1' }]]] },
    ];
  
    const contexts = [
      { type: POWERPOINT_SCRIPT, key: 'elearningList' },
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerPointList' },
      { type: CONTINUOUS_KNOWLEDGE, key: 'knowledgeCheckList' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckList' },
      { type: CONTINUOUS_CORE_CONTENT, key: 'continuousList' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const newState = generatedContentReducer(initialState, setList({ context: type, list: newList }));
      expect(newState[key]).toEqual(newList);
    });
  });


  test('should handle setCitations for all contexts', () => {
    const citations: Citations[][] = [[{ id: '1', title: 'Citation 1', chunks: 'Text' }]];
  
    const contexts = [
      { type: POWERPOINT_SCRIPT, key: 'elearningCitations' },
      { type: FACILITATOR_POWERPOINT_SCRIPT, key: 'powerpointCitations' },
      { type: CONTINUOUS_KNOWLEDGE, key: 'knowledgeCheckCitations' },
      { type: KNOWLEDGE_CHECK, key: 'knowledgeCheckCitations' },
      { type: CONTINUOUS_CORE_CONTENT, key: 'continuousCitations' },
    ];
  
    contexts.forEach(({ type, key }) => {
      const newState = generatedContentReducer(initialState, setCitations({ context: type, citations }));
      expect(newState[key]).toEqual(citations);
    });
  });

  test('should handle addVersionToList for all contexts', () => {
    const list: ContentSlide[] = [{ heading: 'Slide 1', bullet_points: 'Point 1' }];
  
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
        [key]: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }],
      };
  
      const newState = generatedContentReducer(
        initial,
        addVersionToList({ context: type, reviewIndex: 0, list })
      );
  
      expect(newState[key][0].versions.length).toBeGreaterThan(1);
    });
  });

  test('should handle setEditContextListSelectedVersion for all contexts', () => {
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
        [key]: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }],
      };
  
      const newState = generatedContentReducer(
        initial,
        setEditContextListSelectedVersion({ context: type, reviewIndex: 0, newVersionSelected: 1 })
      );
  
      expect(newState[key][0].selectedVersion).toBe(1);
    });
  });