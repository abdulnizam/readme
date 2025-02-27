test('handles AI reprompt click correctly', async () => {
    render(<Edit />);
    
    // Ensure the button exists before clicking it
    const aiButton = await waitFor(() => screen.getByTestId('use-ai-prompts-link'));
    fireEvent.click(aiButton);
  
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });