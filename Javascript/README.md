DEM-FF20RFW3CM :: OneDrive-SecureEngineering/Developer/learning-and-development-front-end ‹fix/unit-tests-before-uat*› » jest Edit.test                                                                          1 ↵
 FAIL  app/[user-context]/edit/Edit.test.tsx
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
DEM-FF20RFW3CM :: OneDrive-SecureEngineering/Developer/learning-and-development-front-end ‹fix/unit-tests-before-uat*› » jest Edit.test                                                                          1 ↵
 FAIL  app/[user-context]/edit/Edit.test.tsx
  Edit Component
    ✓ renders the Edit component with correct data (44 ms)
    ✓ handles button click correctly (13 ms)
    ✓ handles regenerate content click correctly (6 ms)
    ✓ handles version selection correctly (6 ms)
    ✓ renders source materials correctly (5 ms)
    ✓ handles edit descriptor rendering correctly (5 ms)
    ✓ handles removing a question (7 ms)
    ✓ handles adding a question (6 ms)
    ✕ renders InsetText when regenerations are used (1018 ms)
    ✕ handles AI reprompt click correctly (1013 ms)
    ✓ renders version navigation buttons correctly (11 ms)

  ● Edit Component › renders InsetText when regenerations are used

    expect(received).not.toBeNull()

    Received: null

    Ignored nodes: comments, script, style
    <html>
      <head />
      <body>
        <div>
          <div
            class="govuk-grid-row"
          >
            <div
              class="govuk-grid-column-full"
            >
              <div
                class="descriptorGroupHeader"
              >
                <div
                  tabindex="0"
                >
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                    data-testid="descriptor-1-h4-text"
                  >
                    Descriptor Title 1 topic 1 knowledge check Test Header
                    <br />
                  </h4>
                </div>
                <div
                  class="headingRow govuk-body-m"
                  data-testid="descriptor-1-description-text"
                >
                  Description 1
                  <br />
                </div>
                <div
                  class="headingRow govuk-body-m govuk-hint"
                  data-testid="descriptor-1-hint-text"
                >
                  Hint 1
                </div>
              </div>
              <div
                class="aiIndicator"
                data-testid="warning"
              >
                <span
                  aria-hidden="true"
                  aria-label="Warning"
                  class="aiIndicatorIcon"
                >
                  AI
                </span>
                <strong
                  class="govuk-warning-text__text"
                >
                  <span
                    class="govuk-visually-hidden"
                  >
                    Warning
                  </span>
                  Warning message
                </strong>
              </div>
              <div
                class="descriptorGroupHeader"
              >
                <div
                  tabindex="-1"
                >
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                    data-testid="edit-descriptor-1-h4-text"
                  >
                    Edit Descriptor Title 1
                    <br />
                  </h4>
                </div>
              </div>
              <details
                class="govuk-details"
              >
                <summary
                  class="govuk-details__summary"
                  data-testid="undefined-summary"
                >
                  <span
                    class="govuk-details__summary-text"
                  >
                    Test summary1
                  </span>
                </summary>
                <div
                  class="govuk-details__text"
                  data-testid="undefined-detail"
                >
                  Test statement1
                  <br />
                  <ul
                    data-testid="undefined-bullets"
                  >
                    <li
                      data-testid="undefined-bullet-row-0"
                    >
                      Test bullets1
                    </li>
                  </ul>
                </div>
              </details>
              <div
                class="container-read"
              >
                <div>
                  <div>
                    <h4
                      class="heading__StyledHeading-sc-1dsobun-0 dWpWjO"
                      data-testid="read-only-box-h4-content-0"
                    />
                    <p
                      class="govuk-body-m"
                      data-testid="read-only-box-content-content-0"
                    >
                      Version 1
                      <br />
                    </p>
                  </div>
                  <div
                    class="remove-link"
                  >
                    <a
                      class="src__Link-sc-1loawqx-0 keQBfx"
                      data-testid="remove-question-link-0"
                      href=""
                      tabindex="0"
                    >
                      Remove question
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="navigation-container"
              >
                <div
                  class="inlineButtons"
                >
                  <button
                    aria-label="Save Button"
                    class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                    data-testid="button"
                    tabindex="0"
                  >
                    Generate a question
                  </button>
                  <button
                    aria-label="rewrite all"
                    class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                    data-testid="rewrite-all-button"
                    tabindex="0"
                  >
                    Regenerate all
                  </button>
                </div>
                <div
                  class="version-navigation"
                  data-testid="version-navigation"
                >
                  <button
                    class="gds-button govuk-body-m disabled"
                    data-testid="version-navigation-previous-button"
                    disabled=""
                  >
                    <strong>
                      Previous
                    </strong>
                  </button>...

      153 |     render(<Edit />);
      154 |     await waitFor(() => {
    > 155 |       expect(screen.queryByTestId('regenerations-used-inset-text')).not.toBeNull();
          |                                                                         ^
      156 |     });
      157 |   });
      158 |   

      at toBeNull (app/[user-context]/edit/Edit.test.tsx:155:73)
      at runWithExpensiveErrorDiagnosticsDisabled (node_modules/@testing-library/dom/dist/config.js:47:12)
      at checkCallback (node_modules/@testing-library/dom/dist/wait-for.js:124:77)
      at checkRealTimersCallback (node_modules/@testing-library/dom/dist/wait-for.js:118:16)
      at Timeout.task [as _onTimeout] (node_modules/jsdom/lib/jsdom/browser/Window.js:520:19)

  ● Edit Component › handles AI reprompt click correctly

    Unable to find an element by: [data-testid="use-ai-prompts-link"]

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="govuk-grid-row"
        >
          <div
            class="govuk-grid-column-full"
          >
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="0"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="descriptor-1-h4-text"
                >
                  Descriptor Title 1 topic 1 knowledge check Test Header
                  <br />
                </h4>
              </div>
              <div
                class="headingRow govuk-body-m"
                data-testid="descriptor-1-description-text"
              >
                Description 1
                <br />
              </div>
              <div
                class="headingRow govuk-body-m govuk-hint"
                data-testid="descriptor-1-hint-text"
              >
                Hint 1
              </div>
            </div>
            <div
              class="aiIndicator"
              data-testid="warning"
            >
              <span
                aria-hidden="true"
                aria-label="Warning"
                class="aiIndicatorIcon"
              >
                AI
              </span>
              <strong
                class="govuk-warning-text__text"
              >
                <span
                  class="govuk-visually-hidden"
                >
                  Warning
                </span>
                Warning message
              </strong>
            </div>
            <div
              class="descriptorGroupHeader"
            >
              <div
                tabindex="-1"
              >
                <h4
                  class="heading__StyledHeading-sc-1dsobun-0 dWpWjO heading"
                  data-testid="edit-descriptor-1-h4-text"
                >
                  Edit Descriptor Title 1
                  <br />
                </h4>
              </div>
            </div>
            <details
              class="govuk-details"
            >
              <summary
                class="govuk-details__summary"
                data-testid="undefined-summary"
              >
                <span
                  class="govuk-details__summary-text"
                >
                  Test summary1
                </span>
              </summary>
              <div
                class="govuk-details__text"
                data-testid="undefined-detail"
              >
                Test statement1
                <br />
                <ul
                  data-testid="undefined-bullets"
                >
                  <li
                    data-testid="undefined-bullet-row-0"
                  >
                    Test bullets1
                  </li>
                </ul>
              </div>
            </details>
            <div
              class="container-read"
            >
              <div>
                <div>
                  <h4
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO"
                    data-testid="read-only-box-h4-content-0"
                  />
                  <p
                    class="govuk-body-m"
                    data-testid="read-only-box-content-content-0"
                  >
                    Version 1
                    <br />
                  </p>
                </div>
                <div
                  class="remove-link"
                >
                  <a
                    class="src__Link-sc-1loawqx-0 keQBfx"
                    data-testid="remove-question-link-0"
                    href=""
                    tabindex="0"
                  >
                    Remove question
                  </a>
                </div>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
                <button
                  aria-label="Save Button"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="button"
                  tabindex="0"
                >
                  Generate a question
                </button>
                <button
                  aria-label="rewrite all"
                  class="src__StyledButton-sc-19ocyxv-0 vPElw regenerate-all-button"
                  data-testid="rewrite-all-button"
                  tabindex="0"
                >
                  Regenerate all
                </button>
              </div>
              <div
                class="version-navigation"
                data-testid="version-navigation"
              >
                <button
                  class="gds-button govuk-body-m disabled"
                  data-testid="version-navigation-previous-button"
                  disabled=""
                >
                  <strong>
                    Previous
                  </strong>
                </button>
                <button
                  class="gds-button govuk-body-m selected"
                  data-testid="version-navigation-version-button-0"
                >
                  V1
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-version-button-1"
                >
                  V2
                </button>
                <button
                  class="gds-button govuk-body-m "
                  data-testid="version-navigation-next-button"
                >
                  <strong>
                    Next
                  </strong>
                </button>
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="regenerated-inset-text govuk-inset-text"
                data-testid="regeneration-successful-inset-text"
              >
                <p>
                  Content successfully regenerated
                </p>
              </div>
            </div>
            <div
              class="container-read"
            >
              <h4
                class="heading__StyledHeading-sc-1dsobun-0 dWpWjO sources_header"
                data-testid="source-documents-h4"
              >
                Source document extracts
              </h4>
              <p
                class="govuk-hint govuk-body-m"
                data-testid="source-documents-content"
              >
                Extracts show the exact information used from source documents
              </p>
              <div
                class="sources_accordion"
                data-testid="sources-accordion-0"
              >
                <div
                  class="accordion_heading"
                  data-testid="sources-accordion-heading-0"
                >
                  <h5
                    class="heading__StyledHeading-sc-1dsobun-0 dWpWjO accordion_title accordion_left"
                    data-testid="sources-accordion-h5-0"
                  >
                    1. Source 1
                  </h5>
                  <button
                    aria-expanded="false"
                    aria-label="View source extracts"
                    class="accordion_button accordion_right"
                    data-testid="sources-accordion-toggle-button-0"
                    tabindex="0"
                  >
                    <div
                      class="circular_container false"
                    >
                      <span
                        class="
              chevron_spacing chevron_down false"
                      />
                    </div>
                    <span
                      data-testid="sources-accordion-close-0"
                    >
                      View source extracts
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <button
              aria-label="Save Button"
              class="src__StyledButton-sc-19ocyxv-0 kFVkVS"
              data-testid="button"
              tabindex="0"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </body>

      160 |     render(<Edit />);
      161 |     
    > 162 |     const aiButton = await waitFor(() => screen.getByTestId('use-ai-prompts-link'));
          |                                   ^
      163 |     fireEvent.click(aiButton);
      164 |   
      165 |     expect(mockFireRepromptContentStyle).toHaveBeenCalled();

      at waitForWrapper (node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (app/[user-context]/edit/Edit.test.tsx:162:35)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 9 passed, 11 total
Snapshots:   0 total
Time:        3.726 s
Ran all test suites matching /Edit.test/i.
