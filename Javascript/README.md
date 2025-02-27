 FAIL  app/[user-context]/edit/Edit.test.tsx
  Edit Component
    ✕ renders the Edit component with correct data (41 ms)
    ✓ handles button click correctly (18 ms)
    ✓ handles regenerate content click correctly (5 ms)
    ✓ handles version selection correctly (6 ms)
    ✓ renders source materials correctly (5 ms)
    ✓ handles edit descriptor rendering correctly (5 ms)
    ✕ handles removing a question (7 ms)
    ✕ handles adding a question (5 ms)
    ✕ renders InsetText when regenerations are used (4 ms)
    ✕ handles AI reprompt click correctly (5 ms)
    ✓ renders version navigation buttons correctly (5 ms)

  ● Edit Component › renders the Edit component with correct data

    TestingLibraryElementError: Unable to find an element with the text: Descriptor Title 1. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                  Descriptor Title 1 topic 1 name and objectives
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
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
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

      106 |   test('renders the Edit component with correct data', () => {
      107 |     render(<Edit />);
    > 108 |     expect(screen.getByText('Descriptor Title 1')).toBeInTheDocument();
          |                   ^
      109 |     expect(screen.getByText('Test statement1')).toBeInTheDocument();
      110 |     expect(screen.getByText('Test bullets1')).toBeInTheDocument();
      111 |     expect(screen.getByText('Test summary1')).toBeInTheDocument();

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:108:19)

  ● Edit Component › handles removing a question

    TestingLibraryElementError: Unable to find an element with the text: Remove question. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                  Descriptor Title 1 topic 1 name and objectives
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
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
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

      144 |   test('handles removing a question', () => {
      145 |     render(<Edit />);
    > 146 |     fireEvent.click(screen.getByText('Remove question'));
          |                            ^
      147 |     expect(mockRemoveEditContextItem).toHaveBeenCalled();
      148 |   });
      149 |

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:146:28)

  ● Edit Component › handles adding a question

    TestingLibraryElementError: Unable to find an element with the text: Generate a question. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                  Descriptor Title 1 topic 1 name and objectives
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
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
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

      150 |   test('handles adding a question', () => {
      151 |     render(<Edit />);
    > 152 |     fireEvent.click(screen.getByText('Generate a question'));
          |                            ^
      153 |     expect(mockAddNewEditContextItem).toHaveBeenCalled();
      154 |   });
      155 |

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:152:28)

  ● Edit Component › renders InsetText when regenerations are used

    TestingLibraryElementError: Unable to find an element with the text: All regenerations have been used. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                  Descriptor Title 1 topic 1 name and objectives
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
            />
            <div
              class="navigation-container"
            />
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

      160 |     });
      161 |     render(<Edit />);
    > 162 |     expect(screen.getByText('All regenerations have been used')).toBeInTheDocument();
          |                   ^
      163 |   });
      164 |
      165 |   test('handles AI reprompt click correctly', () => {

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:162:19)

  ● Edit Component › handles AI reprompt click correctly

    TestingLibraryElementError: Unable to find an element with the text: Use AI prompts. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                  Descriptor Title 1 topic 1 name and objectives
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
              </div>
            </div>
            <div
              class="navigation-container"
            >
              <div
                class="inlineButtons"
              >
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

      165 |   test('handles AI reprompt click correctly', () => {
      166 |     render(<Edit />);
    > 167 |     fireEvent.click(screen.getByText('Use AI prompts'));
          |                            ^
      168 |     expect(mockFireRepromptContentStyle).toHaveBeenCalled();
      169 |   });
      170 |

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/edit/Edit.test.tsx:167:28)

Test Suites: 1 failed, 1 total
Tests:       5 failed, 6 passed, 11 total
Snapshots:   0 total
Time:        1.578 s, estimated 2 s
Ran all test suites matching /Edit.test/i.
