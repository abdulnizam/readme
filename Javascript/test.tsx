mockUseConfigurationContext.mockReturnValue({
    editGeneratedContent: [
      {
        versions: [[[{ content: 'Version 1' }]]],
        selectedVersion: 0,
        review: 'pending',
        regenerationsLeft: 0, // Ensure this triggers the inset text!
      },
    ],
    sourceMaterials: [{ title: 'Source 1', chunks: 'Source Description 1' }],
  });


  test('renders InsetText when regenerations are used', () => {
    render(<Edit />);
    const insetText = screen.queryByTestId('regenerations-used-inset-text');
    expect(insetText).not.toBeNull(); // Instead of `.toBeTruthy()`
  });


  mockUseFunctionContext.mockReturnValue({
    fireRepromptContentStyle: mockFireRepromptContentStyle,
    showAIReprompt: true, // Ensure AI prompt is rendered!
  });



  test('renders InsetText when regenerations are used', () => {
    render(<Edit />);
    const insetText = screen.queryByTestId('regenerations-used-inset-text');
    expect(insetText).not.toBeNull(); // Safer check!
  });
  
  test('handles AI reprompt click correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText(/Use AI prompts/i)); // More flexible selector
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });