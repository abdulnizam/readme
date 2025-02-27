import generatedContentReducer, {
    setList,
    setCitations,
    setEditContextListReviewComplete,
    setReviewIndex,
    setReviewHeader,
    addRestyleToList,
    resetReviewIndex,
    setEditedContent,
    setEditContextListSelectedVersion,
    addVersionToList,
    removeRestyleFromList,
    addNewListItem,
    addContentToMultiItemList,
    removeContentFromMultiItemList,
    resetAllGeneratedContent,
  } from '@/redux/feature/generatedContent/generatedContent';
  
  import {
    CONTINUOUS_TOPICS,
    TOPIC_OUTLINES,
    POWERPOINT_SCRIPT,
    FACILITATOR_POWERPOINT_SCRIPT,
    KNOWLEDGE_CHECK,
    CONTINUOUS_KNOWLEDGE,
    CONTINUOUS_CORE_CONTENT,
  } from '@/constants/urlpaths';
  
  import { GeneratedContentState, EditContext, Citations, TopicOutline, QuestionChoicesAnswer, ContentSlide, FacilitatorAndContentSlide } from '@/models/GeneratedContent';
  
  describe('generatedContentSlice Reducers', () => {
    let initialState: GeneratedContentState;
  
    beforeEach(() => {
      initialState = {
        topicList: [],
        topicCitations: [],
        elearningList: [],
        elearningCitations: [],
        powerPointList: [],
        powerpointCitations: [],
        knowledgeCheckList: [],
        knowledgeCheckCitations: [],
        continuousList: [],
        continuousCitations: [],
        reviewIndex: 0,
        sourceMaterial: [],
        reviewHeader: '',
      };
    });
  
    test('should return the initial state', () => {
      expect(generatedContentReducer(undefined, { type: undefined })).toEqual(initialState);
    });
  
    test('should handle setList', () => {
      const newList: EditContext[] = [
        { review: 'pending', selectedVersion: 0, versions: [[[{ title: 'Topic 1', objectives: 'Objectives 1' }]]] },
      ];
  
      const newState = generatedContentReducer(initialState, setList({ context: CONTINUOUS_TOPICS, list: newList }));
  
      expect(newState.topicList).toEqual(newList);
    });
  
    test('should handle setCitations', () => {
      const citations: Citations[][] = [[{ id: '1', title: 'Citation 1', chunks: 'Text' }]];
  
      const newState = generatedContentReducer(initialState, setCitations({ context: CONTINUOUS_TOPICS, citations }));
  
      expect(newState.topicCitations).toEqual(citations);
    });
  
    test('should handle addVersionToList', () => {
      const topicList: TopicOutline[] = [{ title: 'New Topic', objectives: 'New Objectives' }];
  
      const newState = generatedContentReducer(
        { ...initialState, topicList: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }] },
        addVersionToList({ context: CONTINUOUS_TOPICS, reviewIndex: 0, list: topicList })
      );
  
      expect(newState.topicList[0].versions.length).toBeGreaterThan(1);
    });
  
    test('should handle addContentToMultiItemList', () => {
      const questionList: QuestionChoicesAnswer[] = [{ question: 'Q1', choices: 'A,B,C', answer: 'A' }];
  
      const newState = generatedContentReducer(
        { ...initialState, knowledgeCheckList: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }] },
        addContentToMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, newContent: questionList })
      );
  
      expect(newState.knowledgeCheckList[0].versions[0][0]).toEqual(questionList);
    });
  
    test('should handle removeContentFromMultiItemList', () => {
      const initial = {
        ...initialState,
        knowledgeCheckList: [
          {
            review: 'pending',
            selectedVersion: 0,
            versions: [[[{ question: 'Q1', choices: 'A,B,C', answer: 'A' }]]],
          },
        ],
      };
  
      const newState = generatedContentReducer(initial, removeContentFromMultiItemList({ context: KNOWLEDGE_CHECK, reviewIndex: 0, multiItemIndex: 0 }));
  
      expect(newState.knowledgeCheckList[0].versions[0][0].length).toBe(0);
    });
  
    test('should handle addRestyleToList', () => {
      const newContent: ContentSlide = { heading: 'Slide 1', bullet_points: 'Point 1' };
  
      const newState = generatedContentReducer(
        { ...initialState, elearningList: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }] },
        addRestyleToList({ context: POWERPOINT_SCRIPT, reviewIndex: 0, multipleItemsIndex: 0, newContent })
      );
  
      expect(newState.elearningList[0].versions[0][0]).toContainEqual(newContent);
    });
  
    test('should handle removeRestyleFromList', () => {
      const initial = {
        ...initialState,
        elearningList: [
          {
            review: 'pending',
            selectedVersion: 0,
            versions: [[[{ heading: 'Slide 1', bullet_points: 'Point 1' }]]],
          },
        ],
      };
  
      const newState = generatedContentReducer(initial, removeRestyleFromList({ context: POWERPOINT_SCRIPT, reviewIndex: 0, multipleItemsIndex: 0 }));
  
      expect(newState.elearningList[0].versions[0][0].length).toBe(0);
    });
  
    test('should handle setEditedContent', () => {
      const newContent = { heading: 'Updated Slide', bullet_points: 'Updated Point' };
  
      const newState = generatedContentReducer(
        { ...initialState, elearningList: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }] },
        setEditedContent({ context: POWERPOINT_SCRIPT, reviewIndex: 0, newContent, multipleItemsIndex: 0 })
      );
  
      expect(newState.elearningList[0].versions[0][0][0]).toEqual(newContent);
    });
  
    test('should handle setEditContextListSelectedVersion', () => {
      const newState = generatedContentReducer(
        { ...initialState, topicList: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }] },
        setEditContextListSelectedVersion({ context: CONTINUOUS_TOPICS, reviewIndex: 0, newVersionSelected: 1 })
      );
  
      expect(newState.topicList[0].selectedVersion).toBe(1);
    });
  
    test('should handle addNewListItem', () => {
      const newItem: EditContext = { review: 'pending', selectedVersion: 0, versions: [[[]]] };
  
      const newState = generatedContentReducer(initialState, addNewListItem({ context: POWERPOINT_SCRIPT, list: [newItem] }));
  
      expect(newState.elearningList.length).toBe(1);
    });
  
    test('should handle setReviewIndex', () => {
      const newState = generatedContentReducer(initialState, setReviewIndex(5));
      expect(newState.reviewIndex).toBe(5);
    });
  
    test('should handle resetReviewIndex', () => {
      const newState = generatedContentReducer({ ...initialState, reviewIndex: 3 }, resetReviewIndex());
      expect(newState.reviewIndex).toBe(0);
    });
  
    test('should handle resetAllGeneratedContent', () => {
      const modifiedState = {
        ...initialState,
        topicList: [{ review: 'pending', selectedVersion: 0, versions: [[[]]] }],
      };
  
      const newState = generatedContentReducer(modifiedState, resetAllGeneratedContent());
  
      expect(newState).toEqual(initialState);
    });
  
    test('should handle setReviewHeader', () => {
      const newState = generatedContentReducer(initialState, setReviewHeader('New Header'));
      expect(newState.reviewHeader).toBe('New Header');
    });
  });