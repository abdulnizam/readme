test('should handle removeRestyleFromList with an unknown context', () => {
    const initial = {
      ...initialState,
      elearningList: [{ review: 'pending', selectedVersion: 0, versions: [[[{ heading: 'Slide', bullet_points: 'Point' }]]]] },
    };
  
    const newState = generatedContentReducer(
      initial,
      removeRestyleFromList({ context: 'UNKNOWN_CONTEXT', reviewIndex: 0, multipleItemsIndex: 0 })
    );
  
    expect(newState).toEqual(initial);
  });

  test('should handle setEditedContent with an unknown context', () => {
    const newContent = { heading: 'Edited Slide', bullet_points: 'Edited Point' };
  
    const initial = {
      ...initialState,
      elearningList: [{ review: 'pending', selectedVersion: 0, versions: [[[{ heading: 'Old Slide', bullet_points: 'Old Point' }]]]] },
    };
  
    const newState = generatedContentReducer(
      initial,
      setEditedContent({ context: 'UNKNOWN_CONTEXT', reviewIndex: 0, newContent, multipleItemsIndex: 0 })
    );
  
    expect(newState).toEqual(initial);
  });