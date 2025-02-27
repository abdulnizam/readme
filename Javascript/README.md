 ✕ renders the Overview page with correct content (33 ms)
    ✓ calls primaryButtonClick when the button is clicked (20 ms)
    ✕ disables button when sections are incomplete (3 ms)
    ✓ triggers overviewCreateClick when OverviewList create button is clicked (3 ms)
    ✓ triggers overviewReviewContentClick when overview review link is clicked (6 ms)
    ✓ does not render button if all sections are incomplete (4 ms)

  ● Overview Page › renders the Overview page with correct content

    TestingLibraryElementError: Unable to find an element with the text: Finish. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                tabindex="-1"
              >
                <h2
                  class="heading__StyledHeading-sc-1dsobun-0 gEtKVr heading"
                  data-testid="test-title-descriptor-h2-text"
                >
                  Test Title
                  <br />
                </h2>
              </div>
              <div
                class="headingRow govuk-body-m"
                data-testid="test-title-descriptor-description-text"
              >
                Test Description
                <br />
              </div>
            </div>
            <div
              class="govuk-grid-row"
            >
              <div
                class="govuk-grid-column-full"
              >
                <h3
                  class="heading__StyledHeading-sc-1dsobun-0 jbyZaT"
                  data-testid="overview-list-1-h3"
                >
                  Test Heading
                </h3>
                <div>
                  <hr
                    class="govuk-section-break govuk-section-break--m govuk-section-break--visible sectionMidBreak"
                  />
                  <div
                    class="govuk-grid-row sectionRow"
                    data-testid="overview-list-1-row-0"
                  >
                    <div
                      class="govuk-grid-column-three-quarters"
                      data-testid="overview-list-1-label-0"
                    >
                      <h6
                        class="heading__StyledHeading-sc-1dsobun-0 dWpWjO rowHeading"
                      >
                        <a
                          class="src__Link-sc-1loawqx-0 keQBfx"
                          data-testid="overview-list-return-link-0"
                          href="#"
                          tabindex="0"
                        >
                          Section 1
                        </a>
                      </h6>
                    </div>
                    <div
                      class="govuk-grid-column-one-quarter sectionOneQuarter"
                      data-testid="overview-list-1-function-0"
                    >
                      <strong
                        class="govuk-tag govuk-tag--green tag-display"
                        data-testid="tag-green-0"
                      >
                        Complete
                      </strong>
                    </div>
                  </div>
                </div>
                <div>
                  <hr
                    class="govuk-section-break govuk-section-break--m govuk-section-break--visible sectionMidBreak"
                  />
                  <div
                    class="govuk-grid-row sectionRow"
                    data-testid="overview-list-1-row-1"
                  >
                    <div
                      class="govuk-grid-column-three-quarters"
                      data-testid="overview-list-1-label-1"
                    >
                      <h6
                        class="heading__StyledHeading-sc-1dsobun-0 dWpWjO rowHeading"
                        data-testid="overview-list-1-h6-1"
                      >
                        Section 2
                      </h6>
                    </div>
                    <div
                      class="govuk-grid-column-one-quarter sectionOneQuarter"
                      data-testid="overview-list-1-function-1"
                    >
                      <strong
                        class="govuk-tag govuk-tag--grey tag-display"
                        data-testid="tag-grey-1"
                      >
                        Can't start yet
                      </strong>
                    </div>
                  </div>
                </div>
                <hr
                  class="govuk-section-break govuk-section-break--m govuk-section-break--visible sectionEndBreak"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

      68 |     expect(screen.getByText('Test Title')).toBeInTheDocument();
      69 |     expect(screen.getByText('Test Description')).toBeInTheDocument();
    > 70 |     expect(screen.getByText('Finish')).toBeInTheDocument();
         |                   ^
      71 |     expect(screen.getByText('Test Heading')).toBeInTheDocument();
      72 |     expect(screen.getByText('Section 1')).toBeInTheDocument();
      73 |     expect(screen.getByText("Can't start yet")).toBeInTheDocument();

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/overview/overview.test.tsx:70:19)

  ● Overview Page › disables button when sections are incomplete

    TestingLibraryElementError: Unable to find an element with the text: Finish. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

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
                tabindex="-1"
              >
                <h2
                  class="heading__StyledHeading-sc-1dsobun-0 gEtKVr heading"
                  data-testid="undefined-h2-text"
                >
                  Test Title
                  <br />
                </h2>
              </div>
              <div
                class="headingRow govuk-body-m"
                data-testid="undefined-description-text"
              >
                Test Description
                <br />
              </div>
            </div>
            <div
              class="govuk-grid-row"
            >
              <div
                class="govuk-grid-column-full"
              >
                <h3
                  class="heading__StyledHeading-sc-1dsobun-0 jbyZaT"
                  data-testid="undefined-h3"
                >
                  Test Heading
                </h3>
                <div>
                  <hr
                    class="govuk-section-break govuk-section-break--m govuk-section-break--visible sectionMidBreak"
                  />
                  <div
                    class="govuk-grid-row sectionRow"
                    data-testid="undefined-row-0"
                  >
                    <div
                      class="govuk-grid-column-three-quarters"
                      data-testid="undefined-label-0"
                    >
                      <h6
                        class="heading__StyledHeading-sc-1dsobun-0 dWpWjO rowHeading"
                        data-testid="undefined-h6-0"
                      >
                        Section 1
                      </h6>
                    </div>
                    <div
                      class="govuk-grid-column-one-quarter sectionOneQuarter"
                      data-testid="undefined-function-0"
                    />
                  </div>
                </div>
                <hr
                  class="govuk-section-break govuk-section-break--m govuk-section-break--visible sectionEndBreak"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

      144 |
      145 |     render(<Overview />);
    > 146 |     const finishButton = screen.getByText('Finish');
          |                                 ^
      147 |     expect(finishButton).toBeDisabled();
      148 |   });
      149 |

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByText (app/[user-context]/overview/overview.test.tsx:146:33)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 4 passed, 6 total
