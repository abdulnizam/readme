import { UnknownAction } from '@reduxjs/toolkit';
import { generatedContentSlice, GeneratedContentState } from './generatedContent';
import { Citations, EditContext, TopicOutline } from '@/models/GeneratedContent';
import {
  CONTINUOUS_CORE_CONTENT,
  CONTINUOUS_KNOWLEDGE,
  CONTINUOUS_TOPICS,
  FACILITATOR_POWERPOINT_SCRIPT,
  KNOWLEDGE_CHECK,
  POWERPOINT_SCRIPT,
  TOPIC_OUTLINES,
} from '@/constants/urlpaths';

const initialState: GeneratedContentState = {
  topicList: [],
  topicCitations: [],
  elearningList: [],
  elearningCitations: [],
  powerPointList: [],
  powerpointCitations: [],
  knowledgeCheckList: [],
  knowledgeCheckCitations: [],
  reviewIndex: 0,
  sourceMaterial: [],
  reviewHeader: '',
  continuousList: [],
  continuousCitations: [],
};

describe('generatedContentSlice', () => {
  it('should return the initial state', () => {
    const state = generatedContentSlice.reducer(undefined, {} as UnknownAction);
    expect(state).toEqual(initialState);
  });

  it('should handle the setList action CONTINUOUS_TOPICS', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: CONTINUOUS_TOPICS, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.topicList).toEqual(list);
  });

  it('should handle the setList action TOPIC OUTLINES', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: TOPIC_OUTLINES, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.topicList).toEqual(list);
  });
  it('should handle the setList action POWERPOINT_SCRIPT', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: POWERPOINT_SCRIPT, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.elearningList).toEqual(list);
  });

  it('should handle the setList action FACILITATOR_POWERPOINT_SCRIPT', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: FACILITATOR_POWERPOINT_SCRIPT, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.powerPointList).toEqual(list);
  });

  it('should handle the setList action CONTINUOUS_KNOWLEDGE', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: CONTINUOUS_KNOWLEDGE, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.knowledgeCheckList).toEqual(list);
  });

  it('should handle the setList action KNOWLEDGE_CHECK', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: KNOWLEDGE_CHECK, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.knowledgeCheckList).toEqual(list);
  });

  it('should handle the setList action CONTINUOUS_CORE_CONTENT', () => {
    const list: EditContext[] = [
      {
        review: 'completed',
        selectedVersion: 0,
        versions: [],
      },
    ];
    const action = generatedContentSlice.actions.setList({ context: CONTINUOUS_CORE_CONTENT, list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.continuousList).toEqual(list);
  });

  it('should handle the setCitations action CONTINUOUS_TOPICS', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({ context: CONTINUOUS_TOPICS, citations: list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.topicCitations).toEqual(list);
  });

  it('should handle the setCitations action TOPIC OUTLINES', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({ context: TOPIC_OUTLINES, citations: list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.topicCitations).toEqual(list);
  });
  it('should handle the setCitations action POWERPOINT_SCRIPT', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({ context: POWERPOINT_SCRIPT, citations: list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.elearningCitations).toEqual(list);
  });

  it('should handle the setCitations action FACILITATOR_POWERPOINT_SCRIPT', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({
      context: FACILITATOR_POWERPOINT_SCRIPT,
      citations: list,
    });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.powerpointCitations).toEqual(list);
  });

  it('should handle the setCitations action CONTINUOUS_KNOWLEDGE', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({ context: CONTINUOUS_KNOWLEDGE, citations: list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.knowledgeCheckCitations).toEqual(list);
  });

  it('should handle the setCitations action KNOWLEDGE_CHECK', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({ context: KNOWLEDGE_CHECK, citations: list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.knowledgeCheckCitations).toEqual(list);
  });

  it('should handle the setCitations action CONTINUOUS_CORE_CONTENT', () => {
    const list: Citations[][] = [
      [
        {
          id: '',
          title: '',
          chunks: '',
        },
      ],
    ];
    const action = generatedContentSlice.actions.setCitations({ context: CONTINUOUS_CORE_CONTENT, citations: list });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.continuousCitations).toEqual(list);
  });

  it('should handle the addVersionToList action CONTINUOUS_TOPICS', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      topicList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({ context: CONTINUOUS_TOPICS, reviewIndex, list });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.topicList).toEqual(target);
  });

  it('should handle the addVersionToList action TOPIC_OUTLINES', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      topicList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({ context: TOPIC_OUTLINES, reviewIndex, list });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.topicList).toEqual(target);
  });

  it('should handle the addVersionToList action POWERPOINT_SCRIPT', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      elearningList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({ context: POWERPOINT_SCRIPT, reviewIndex, list });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.elearningList).toEqual(target);
  });

  it('should handle the addVersionToList action FACILITATOR_POWERPOINT_SCRIPT', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      powerPointList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({
      context: FACILITATOR_POWERPOINT_SCRIPT,
      reviewIndex,
      list,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.powerPointList).toEqual(target);
  });

  it('should handle the addVersionToList action CONTINUOUS_KNOWLEDGE', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({
      context: CONTINUOUS_KNOWLEDGE,
      reviewIndex,
      list,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the addVersionToList action KNOWLEDGE_CHECK', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({
      context: KNOWLEDGE_CHECK,
      reviewIndex,
      list,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the addVersionToList action CONTINUOUS_CORE_CONTENT', () => {
    const list: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [[]],
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 1,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      continuousList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addVersionToList({
      context: CONTINUOUS_CORE_CONTENT,
      reviewIndex,
      list,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.continuousList).toEqual(target);
  });

  it('should handle the addContentToMultiItemList action CONTINUOUS_KNOWLEDGE', () => {
    const newContent: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [
            [],
            [
              [
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addContentToMultiItemList({
      context: CONTINUOUS_KNOWLEDGE,
      reviewIndex,
      newContent,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the addContentToMultiItemList action KNOWLEDGE_CHECK', () => {
    const newContent: TopicOutline[] = [
      {
        title: '',
        objectives: '',
      },
    ];
    const target = [
      {
        versions: [
          [
            [],
            [
              [
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const reviewIndex = 0;
    const action = generatedContentSlice.actions.addContentToMultiItemList({
      context: KNOWLEDGE_CHECK,
      reviewIndex,
      newContent,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the removeContentFromMultiItemList action CONTINUOUS_KNOWLEDGE', () => {
    const reviewIndex = 0;
    const multiItemIndex = 0;
    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const target = [
      {
        versions: [[]],
        selectedVersion: 0,
        review: 'pending',
      },
    ];
    const action = generatedContentSlice.actions.removeContentFromMultiItemList({
      context: CONTINUOUS_KNOWLEDGE,
      reviewIndex,
      multiItemIndex,
    });

    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the removeContentFromMultiItemList action KNOWLEDGE_CHECK', () => {
    const reviewIndex = 0;
    const multiItemIndex = 0;
    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const target = [
      {
        versions: [[]],
        selectedVersion: 0,
        review: 'pending',
      },
    ];
    const action = generatedContentSlice.actions.removeContentFromMultiItemList({
      context: KNOWLEDGE_CHECK,
      reviewIndex,
      multiItemIndex,
    });

    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the addRestyleToList action POWERPOINT_SCRIPT', () => {
    const newContent: TopicOutline = {
      title: '',
      objectives: '',
    };
    const newState = {
      ...initialState,
      elearningList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.addRestyleToList({
      context: POWERPOINT_SCRIPT,
      reviewIndex,
      newContent,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.elearningList).toEqual(target);
  });

  it('should handle the addRestyleToList action FACILITATOR_POWERPOINT_SCRIPT', () => {
    const newContent: TopicOutline = {
      title: '',
      objectives: '',
    };
    const newState = {
      ...initialState,
      powerPointList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.addRestyleToList({
      context: FACILITATOR_POWERPOINT_SCRIPT,
      reviewIndex,
      newContent,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.powerPointList).toEqual(target);
  });

  it('should handle the addRestyleToList action CONTINUOUS_KNOWLEDGE', () => {
    const newContent: TopicOutline = {
      title: '',
      objectives: '',
    };
    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.addRestyleToList({
      context: CONTINUOUS_KNOWLEDGE,
      reviewIndex,
      newContent,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the addRestyleToList action KNOWLEDGE_CHECK', () => {
    const newContent: TopicOutline = {
      title: '',
      objectives: '',
    };
    const newState = {
      ...initialState,
      knowledgeCheckList: [{ versions: [[[]]], selectedVersion: 0, review: 'pending' }] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.addRestyleToList({
      context: KNOWLEDGE_CHECK,
      reviewIndex,
      newContent,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the removeRestyleFromList action', () => {
    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const context = 'example-context';
    const action = generatedContentSlice.actions.removeRestyleFromList({ context, reviewIndex, multipleItemsIndex });
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.elearningList).toEqual([]);
  });

  it('should handle the addRestyleToList action POWERPOINT_SCRIPT', () => {
    const newState = {
      ...initialState,
      elearningList: [
        {
          versions: [
            [
              [
                {
                  title: '',
                  objectives: '',
                },
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
          selectedVersion: 0,
          review: 'pending',
        },
      ] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.removeRestyleFromList({
      context: POWERPOINT_SCRIPT,
      reviewIndex,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.elearningList).toEqual(target);
  });
  it('should handle the addRestyleToList action POWERPOINT_SCRIPT', () => {
    const newState = {
      ...initialState,
      elearningList: [
        {
          versions: [
            [
              [
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
          selectedVersion: 0,
          review: 'pending',
        },
      ] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.removeRestyleFromList({
      context: POWERPOINT_SCRIPT,
      reviewIndex,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.elearningList).toEqual(target);
  });

  it('should handle the addRestyleToList action FACILITATOR_POWERPOINT_SCRIPT', () => {
    const newState = {
      ...initialState,
      powerPointList: [
        {
          versions: [
            [
              [
                {
                  title: '',
                  objectives: '',
                },
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
          selectedVersion: 0,
          review: 'pending',
        },
      ] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.removeRestyleFromList({
      context: FACILITATOR_POWERPOINT_SCRIPT,
      reviewIndex,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.powerPointList).toEqual(target);
  });

  it('should handle the addRestyleToList action KNOWLEDGE_CHECK', () => {
    const newState = {
      ...initialState,
      knowledgeCheckList: [
        {
          versions: [
            [
              [
                {
                  title: '',
                  objectives: '',
                },
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
          selectedVersion: 0,
          review: 'pending',
        },
      ] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.removeRestyleFromList({
      context: KNOWLEDGE_CHECK,
      reviewIndex,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  it('should handle the addRestyleToList action CONTINUOUS_KNOWLEDGE', () => {
    const newState = {
      ...initialState,
      knowledgeCheckList: [
        {
          versions: [
            [
              [
                {
                  title: '',
                  objectives: '',
                },
                {
                  title: '',
                  objectives: '',
                },
              ],
            ],
          ],
          selectedVersion: 0,
          review: 'pending',
        },
      ] as EditContext[],
    };
    const target = [
      {
        versions: [
          [
            [
              {
                title: '',
                objectives: '',
              },
            ],
          ],
        ],
        selectedVersion: 0,
        review: 'pending',
      },
    ];

    const reviewIndex = 0;
    const multipleItemsIndex = 0;
    const action = generatedContentSlice.actions.removeRestyleFromList({
      context: CONTINUOUS_KNOWLEDGE,
      reviewIndex,
      multipleItemsIndex,
    });
    const state = generatedContentSlice.reducer(newState, action);
    expect(state.knowledgeCheckList).toEqual(target);
  });

  //   it('should handle the setEditedContent action', () => {
  //     const newContent = ['item1', 'item2'];
  //     const reviewIndex = 0;
  //     const multipleItemsIndex = 0;
  //     const context = 'example-context';
  //     const action = generatedContentSlice.actions.setEditedContent({
  //       context,
  //       reviewIndex,
  //       newContent,
  //       multipleItemsIndex,
  //     });
  //     const state = generatedContentSlice.reducer(initialState, action);
  //     expect(state.topicList).toEqual(newContent);
  //   });

  //   it('should handle the setEditContextListReviewComplete action', () => {
  //     const reviewIndex = 0;
  //     const context = 'example-context';
  //     const action = generatedContentSlice.actions.setEditContextListReviewComplete({ context, reviewIndex });
  //     const state = generatedContentSlice.reducer(initialState, action);
  //     expect(state.elearningList[reviewIndex].review).toEqual('completed');
  //   });

  it('should handle the setReviewIndex action', () => {
    const reviewIndex = 1;
    const action = generatedContentSlice.actions.setReviewIndex(reviewIndex);
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.reviewIndex).toEqual(reviewIndex);
  });

  it('should handle the resetReviewIndex action', () => {
    const action = generatedContentSlice.actions.resetReviewIndex();
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state.reviewIndex).toEqual(initialState.reviewIndex);
  });

  it('should handle the resetAllGeneratedContent action', () => {
    const action = generatedContentSlice.actions.resetAllGeneratedContent();
    const state = generatedContentSlice.reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
