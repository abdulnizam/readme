 FAIL  app/components/Packages/FeedbackExpanded/FeedbackExpanded.test.tsx
  ● Event listeners run › onClick for submit button runs

    TypeError: Cannot redefine property: sendFeedback
        at Function.defineProperty (<anonymous>)

      58 |   it("onClick for submit button runs", () => {
      59 |     render(<TestFeedbackExpanded />);
    > 60 |     jest.spyOn(api, "sendFeedback").mockResolvedValue({
         |          ^
      61 |       id: 2
      62 |     })
      63 |     const button = screen.getByTestId("feedback-expanded-submit");

      at ModuleMocker.spyOn (node_modules/jest-mock/build/index.js:776:16)
      at Object.spyOn (app/components/Packages/FeedbackExpanded/FeedbackExpanded.test.tsx:60:10)


Test Suites: 1 failed, 51 passed, 52 total
Tests:       1 failed, 132 passed, 133 total
