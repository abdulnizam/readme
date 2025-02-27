mockUseFunctionContext.mockReturnValue({
    editState: true,  // 🔥 Ensure EditBox renders
    showAIReprompt: true,  // 🔥 Ensure AI Reprompt button is visible
    fireRepromptContentStyle: mockFireRepromptContentStyle,
  });


  mockUseAppSelector.mockImplementation((selector) =>
    selector({
      content: {
        editState: true,  // 🔥 Ensure EditBox renders
      },
    })
  );


  test('handles AI reprompt click correctly', async () => {
    render(<Edit />);
  
    await waitFor(() => {
      console.log(screen.debug()); // 🔍 Print the rendered DOM
    });
  
    const aiButton = screen.queryByTestId('use-ai-prompts-link');
    console.log("AI Button Found:", aiButton); // Check if it's null
  
    expect(aiButton).toBeInTheDocument(); // This will fail if it's missing
    fireEvent.click(aiButton!);
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });