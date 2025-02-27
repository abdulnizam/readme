test('renders InsetText when regenerations are used', async () => {
    render(<Edit />);
    await waitFor(() => {
      const insetText = screen.queryByTestId('regenerations-used-inset-text');
      expect(insetText).toBeInTheDocument();  // 👀 Use a stronger assertion
    });
  });


  test('renders InsetText when regenerations are used', async () => {
    render(<Edit />);
    await waitFor(() => {
      console.log(screen.debug()); // 👀 This will print the entire DOM structure
      expect(screen.getByTestId('regenerations-used-inset-text')).toBeInTheDocument();
    });
  });


  test('handles AI reprompt click correctly', async () => {
    render(<Edit />);
  
    // 🕵️ Wait for the button to appear before clicking
    const aiButton = await waitFor(() => screen.getByTestId('use-ai-prompts-link'));
    fireEvent.click(aiButton);
  
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });


  test('handles AI reprompt click correctly', async () => {
    render(<Edit />);
  
    await waitFor(() => {
      console.log(screen.debug()); // 🔍 This prints the rendered DOM
    });
  
    const aiButton = await waitFor(() => screen.getByTestId('use-ai-prompts-link'));
    fireEvent.click(aiButton);
  
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });