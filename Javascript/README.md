Edit Component
    ✓ renders the Edit component with correct data (44 ms)
    ✓ handles button click correctly (13 ms)
    ✓ handles regenerate content click correctly (6 ms)
    ✓ handles version selection correctly (5 ms)
    ✓ renders source materials correctly (4 ms)
    ✓ handles edit descriptor rendering correctly (4 ms)
    ✓ handles removing a question (7 ms)
    ✓ handles adding a question (6 ms)
    ✕ renders InsetText when regenerations are used (4 ms)
    ✕ handles AI reprompt click correctly (5 ms)
    ✓ renders version navigation buttons correctly (5 ms)

  ● Edit Component › renders InsetText when regenerations are used

    expect(received).not.toBeNull()

    Received: null

      153 |     render(<Edit />);
      154 |     const insetText = screen.queryByTestId('regenerations-used-inset-text');
    > 155 |     expect(insetText).not.toBeNull(); // Safer check!
          |                           ^
      156 |   });
      157 |   
      158 |   test('handles AI reprompt click correctly', () => {

      at Object.toBeNull (app/[user-context]/edit/Edit.test.tsx:155:27)

  ● Edit Component › handles AI reprompt click correctly

    expect(jest.fn()).toHaveBeenCalled()

    Expected number of calls: >= 1
    Received number of calls:    0

      159 |     render(<Edit />);
      160 |     fireEvent.click(screen.getByText(/Regenerate all/i)); // More flexible selector
    > 161 |     expect(mockFireRepromptContentStyle).toHaveBeenCalled();
          |                                          ^
      162 |   });
      163 |
      164 |   test('renders version navigation buttons correctly', () => {

      at Object.toHaveBeenCalled (app/[user-context]/edit/Edit.test.tsx:161:42)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 9 passed, 11 total
Snapshots:   0 total
Time:        1.612 s, estimated 2 s
Ran all test suites matching /Edit.test/i.
