test('handles adding a question', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Generate a question')); // Updated!
    expect(mockAddNewEditContextItem).toHaveBeenCalled();
  });
  
  test('renders InsetText when regenerations are used', () => {
    render(<Edit />);
    expect(screen.queryByTestId('regenerations-used-inset-text')).toBeTruthy(); // Updated!
  });
  
  test('handles AI reprompt click correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Use AI prompts')); // Updated!
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });