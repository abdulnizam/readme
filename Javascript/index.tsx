/redux/feature/generatedContent/generatedContent.ts

import {
  Citations,
  ContentSlide,
  EditContext,
  FacilitatorAndContentSlide,
  QuestionChoicesAnswer,
  TopicOutline,
} from '@/models/GeneratedContent';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CONTINUOUS_CORE_CONTENT,
  CONTINUOUS_KNOWLEDGE,
  CONTINUOUS_TOPICS,
  FACILITATOR_POWERPOINT_SCRIPT,
  KNOWLEDGE_CHECK,
  POWERPOINT_SCRIPT,
  TOPIC_OUTLINES,
} from '@/constants/urlpaths';
import {
  addBulkRegeneratedContent,
  addNewStyledItem,
  addSingleGeneratedContent,
  removeStyledItem,
} from '@/helpers/content-helpers/content-helpers';
export interface GeneratedContentState {
  topicList: EditContext[];
  topicCitations: Citations[][];
  elearningList: EditContext[];
  elearningCitations: Citations[][];
  powerPointList: EditContext[];
  powerpointCitations: Citations[][];
  knowledgeCheckList: EditContext[];
  knowledgeCheckCitations: Citations[][];
  continuousList: EditContext[];
  continuousCitations: Citations[][];
  reviewIndex: number;
  sourceMaterial: Citations[];
  reviewHeader: string;
  [key: string]: any;
}

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

export const generatedContentSlice = createSlice({
  name: 'generatedContent',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<{ context: string; list: EditContext[] }>) => {
      const { context, list } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_TOPICS:
          case TOPIC_OUTLINES:
            state.topicList = list;
            break;
          case POWERPOINT_SCRIPT:
            state.elearningList = list;
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList = list;
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList = list;
            break;
          case CONTINUOUS_CORE_CONTENT:
            state.continuousList = list;
            break;
        }
      }
    },
    setCitations: (state, action: PayloadAction<{ context: string; citations: Citations[][] }>) => {
      const { context, citations } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_TOPICS:
          case TOPIC_OUTLINES:
            state.topicCitations = citations;
            break;
          case POWERPOINT_SCRIPT:
            state.elearningCitations.push(...citations);
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerpointCitations.push(...citations);
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckCitations.push(...citations);
            break;
          case CONTINUOUS_CORE_CONTENT:
            state.continuousCitations.push(...citations);
            break;
        }
      }
    },
    addVersionToList(
      state,
      action: PayloadAction<{
        context: string;
        reviewIndex: number;
        list: TopicOutline[] | QuestionChoicesAnswer[] | FacilitatorAndContentSlide[] | ContentSlide[];
      }>,
    ) {
      const { context, reviewIndex, list } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_TOPICS:
          case TOPIC_OUTLINES:
            state.topicList = addBulkRegeneratedContent(state.topicList, reviewIndex, list as TopicOutline[]);
            break;
          case POWERPOINT_SCRIPT:
            state.elearningList = addBulkRegeneratedContent(state.elearningList, reviewIndex, list as ContentSlide[]);
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList = addBulkRegeneratedContent(
              state.powerPointList,
              reviewIndex,
              list as FacilitatorAndContentSlide[],
            );
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList = addBulkRegeneratedContent(
              state.knowledgeCheckList,
              reviewIndex,
              list as QuestionChoicesAnswer[],
            );
            break;
          case CONTINUOUS_CORE_CONTENT:
            state.continuousList = addBulkRegeneratedContent(state.continuousList, reviewIndex, list as ContentSlide[]);
        }
      }
    },
    addContentToMultiItemList: (
      state,
      action: PayloadAction<{
        context: string;
        newContent: TopicOutline[] | QuestionChoicesAnswer[] | FacilitatorAndContentSlide[] | ContentSlide[];
        reviewIndex: number;
      }>,
    ) => {
      const { context, newContent, reviewIndex } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList = addSingleGeneratedContent(state.knowledgeCheckList, reviewIndex, newContent);
        }
      }
    },
    removeContentFromMultiItemList: (
      state,
      action: PayloadAction<{ context: string; reviewIndex: number; multiItemIndex: number }>,
    ) => {
      const { context, reviewIndex, multiItemIndex } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList[reviewIndex].versions[
              state.knowledgeCheckList[reviewIndex].selectedVersion
            ].splice(multiItemIndex, 1);
            break;
        }
      }
    },
    addRestyleToList: (
      state,
      action: PayloadAction<{
        context: string;
        reviewIndex: number;
        newContent: TopicOutline | QuestionChoicesAnswer | FacilitatorAndContentSlide | ContentSlide;
        multipleItemsIndex: number;
      }>,
    ) => {
      const { context, reviewIndex, newContent, multipleItemsIndex } = action.payload;
      if (context) {
        switch (context) {
          case POWERPOINT_SCRIPT:
            state.elearningList = addNewStyledItem(state.elearningList, reviewIndex, multipleItemsIndex, newContent);
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList = addNewStyledItem(state.powerPointList, reviewIndex, multipleItemsIndex, newContent);
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList = addNewStyledItem(
              state.knowledgeCheckList,
              reviewIndex,
              multipleItemsIndex,
              newContent,
            );
            break;
        }
      }
    },
    removeRestyleFromList: (
      state,
      action: PayloadAction<{
        context: string;
        reviewIndex: number;
        multipleItemsIndex: number;
      }>,
    ) => {
      const { context, reviewIndex, multipleItemsIndex } = action.payload;
      if (context) {
        switch (context) {
          case POWERPOINT_SCRIPT:
            state.elearningList = removeStyledItem(state.elearningList, reviewIndex, multipleItemsIndex);
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList = removeStyledItem(state.powerPointList, reviewIndex, multipleItemsIndex);
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList = removeStyledItem(state.knowledgeCheckList, reviewIndex, multipleItemsIndex);
            break;
          default:
            break;
        }
      }
    },
    setEditedContent: (
      state,
      action: PayloadAction<{
        context: string;
        reviewIndex: number;
        newContent: Record<string, any>;
        multipleItemsIndex: number;
      }>,
    ) => {
      const { context, reviewIndex, newContent, multipleItemsIndex } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_TOPICS:
          case TOPIC_OUTLINES:
            const topics = state.topicList[reviewIndex];
            state.topicList[reviewIndex].versions[topics.selectedVersion][multipleItemsIndex][
              topics.versions[topics.selectedVersion][multipleItemsIndex].length - 1
            ] = newContent as TopicOutline;
            break;
          case POWERPOINT_SCRIPT:
            const elearn = state.elearningList[reviewIndex];
            state.elearningList[reviewIndex].versions[elearn.selectedVersion][multipleItemsIndex][
              elearn.versions[elearn.selectedVersion][multipleItemsIndex].length - 1
            ] = newContent as ContentSlide;
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            const facilitator = state.powerPointList[reviewIndex];
            state.powerPointList[reviewIndex].versions[facilitator.selectedVersion][multipleItemsIndex][
              facilitator.versions[facilitator.selectedVersion][multipleItemsIndex].length - 1
            ] = newContent as FacilitatorAndContentSlide;
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            const knowledge = state.knowledgeCheckList[reviewIndex];
            state.knowledgeCheckList[reviewIndex].versions[knowledge.selectedVersion][multipleItemsIndex][
              knowledge.versions[knowledge.selectedVersion][multipleItemsIndex].length - 1
            ] = newContent as QuestionChoicesAnswer;
            break;
          case CONTINUOUS_CORE_CONTENT:
            const contCore = state.continuousList[reviewIndex];
            state.continuousList[reviewIndex].versions[contCore.selectedVersion][multipleItemsIndex][
              contCore.versions[contCore.selectedVersion][multipleItemsIndex].length - 1
            ] = newContent as ContentSlide;
            break;
          default:
            break;
        }
      }
    },
    setEditContextListReviewComplete: (
      state,
      action: PayloadAction<{
        context: string;
        reviewIndex: number;
      }>,
    ) => {
      const { context, reviewIndex } = action.payload;
      if (context) {
        switch (context) {
          case POWERPOINT_SCRIPT:
            state.elearningList[reviewIndex].review = 'completed';
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList[reviewIndex].review = 'completed';
            break;
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList[reviewIndex].review = 'completed';
            break;
          case CONTINUOUS_CORE_CONTENT:
            state.continuousList[reviewIndex].review = 'completed';
          default:
            break;
        }
      }
    },
    setEditContextListSelectedVersion: (
      state,
      action: PayloadAction<{ newVersionSelected: number; context: string; reviewIndex: number }>,
    ) => {
      const { context, reviewIndex, newVersionSelected } = action.payload;
      if (context) {
        switch (context) {
          case CONTINUOUS_TOPICS:
          case TOPIC_OUTLINES:
            state.topicList[reviewIndex].selectedVersion = newVersionSelected;
            break;
          case POWERPOINT_SCRIPT:
            state.elearningList[reviewIndex].selectedVersion = newVersionSelected;
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList[reviewIndex].selectedVersion = newVersionSelected;
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList[reviewIndex].selectedVersion = newVersionSelected;
            break;
          case CONTINUOUS_CORE_CONTENT:
            state.continuousList[reviewIndex].selectedVersion = newVersionSelected;
        }
      }
    },
    addNewListItem: (
      state,
      action: PayloadAction<{
        context: string;
        list: EditContext[];
      }>,
    ) => {
      const { context, list } = action.payload;
      if (context) {
        switch (context) {
          case POWERPOINT_SCRIPT:
            state.elearningList.push(...list);
            break;
          case FACILITATOR_POWERPOINT_SCRIPT:
            state.powerPointList.push(...list);
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            state.knowledgeCheckList.push(...list);
            break;
          case CONTINUOUS_CORE_CONTENT:
            state.continuousList.push(...list);
            break;
        }
      }
    },
    setReviewIndex: (state, action: PayloadAction<number>) => {
      state.reviewIndex = action.payload;
    },
    resetReviewIndex: (state) => {
      state.reviewIndex = initialState.reviewIndex;
    },
    resetAllGeneratedContent: (state) => {
      const stateEntries = Object.entries(initialState);
      stateEntries.forEach((entry) => {
        state[entry[0]] = entry[1];
      });
    },
    setReviewHeader: (state, action: PayloadAction<string>) => {
      state.reviewHeader = action.payload;
    },
  },
});

export const {
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
} = generatedContentSlice.actions;

export default generatedContentSlice.reducer;


/models/GeneratedContent.d.ts

import { DefaultComponentProps } from './DefaultComponentProps';
import { ReviewTableAction } from './Table';

export interface DefaultGeneratedContent {
  review: 'pending' | 'complete';
  versionIndexSelected: number;
  styleIndexSelected: number;
}

export interface Citations {
  id: string;
  title: string;
  chunks: string;
}

export interface EditContext {
  review: 'completed' | 'pending';
  selectedVersion: number;
  versions: TopicOutline[][][] | FacilitatorAndContentSlide[][][] | QuestionChoicesAnswer[][][] | ContentSlide[][][];
}

export interface TopicOutline {
  title: string;
  objectives: string;
}

export interface TopicOutlineResponse extends TopicOutline {
  citations?: Citations[];
}

export interface ContentSlide {
  heading: string;
  bullet_points: string;
}

export interface FacilitatorAndContentSlide extends ContentSlide {
  script: string;
}

export interface ContentSlideResponse {
  slides: ContentSlide[];
  citations?: Citations[];
}

export interface FacilitatorAndContentSlideResponse {
  slides: FacilitatorAndContentSlide[];
  citations?: Citations[];
}

export interface QuestionChoicesAnswer {
  question: string;
  choices: string;
  answer: string;
}

export interface QuestionChoicesAnswerResponse {
  questions: QuestionChoicesAnswer[];
  contexts?: string;
}

export interface RepromptFacilitatorScript {
  heading: string;
  script: string;
}

export interface RepromptFacilitatorBullets {
  heading: string;
  bullet_points: string;
}

export interface ReviewGeneratedTopicsList extends DefaultComponentProps {
  list: ReviewGeneratedTopics[];
}

export interface ReviewGeneratedTopics {
  Objectives?: string;
  Heading?: string;
  action: ReviewTableAction;
}

export interface DocumentDownloadRequest {
  module_title: string;
  extension: string;
  topics: DocumentContent[];
}

export interface DocumentContent {
  topic_outline: TopicOutline;
  content: DocumentQuestions | DocumentSlides;
}

export interface DocumentQuestions {
  questions?: QuestionChoicesAnswer[];
}

export interface DocumentSlides {
  slides?: FacilitatorAndContentSlide[] | ContentSlide[];
}


/constants/urlpaths.ts

//User context slugs
export const LEARNING_AND_DEVELOPMENT = 'learning-and-development';
export const HOME = 'home';
export const ORIGIN = 'content-creation-front-end';

//Base routes for pages
export const FILE_UPLOAD = 'file-upload';
export const CONFIGURE = 'configure';
export const INFORMATION = 'information';
export const INPUT = 'input';
export const SELECT = 'select';
export const OUTLINE = 'outline';
export const REVIEW_CONFIGURATION = 'review-configuration';
export const REVIEW_GENERATED_CONTENT = 'review-generated-content';
export const OVERVIEW = 'overview';
export const EDIT = 'edit';
export const SUCCESS = 'success';

//extensions for params used in URL
export const CREATE_CORE = 'create-core-learning';
export const UPDATE_CORE = 'update-core-learning';
export const COMPARE_DOCUMENTS = 'compare-documents';
export const SOURCE_COMPARE_DOCUMENTS = 'source-compare-documents';
export const REVIEW_DETECTED_CHANGES = 'review-detected-changes';
export const SOURCE_REVIEW_DETECTED_CHANGES = 'source-review-detected-changes';
export const COMMISSIONING_DOCUMENT = 'commissioning-document';
export const SOURCE_DOCUMENT = 'source-documents';

export const TITLE_AIM_SUBJECT = 'title-aim-subject';
export const NAME_PURPOSE_TOPICS = 'name-purpose-topics';
export const AI_NOTICE = 'ai-notice';
export const ACCESSIBILITY_STATEMENT = 'accessibility-statement';
export const SECTION_OUTLINE = 'section-outline';
export const OUTPUT_FORMATS = 'output-formats';
export const KNOWLEDGE_CHECK_PAGE = 'knowledge-check-page';
export const CORE_LEARNING_REVIEW = 'core-learning-review';
export const CORE_LEARNING_OVERVIEW = 'core-learning-overview';

//extensions for generated content
export const KNOWLEDGE_CHECK = 'knowledge-check';
export const NO_KNOWLEDGE_CHECK = 'no-knowledge-check';
export const TOPIC_OUTLINES = 'topic-outlines';
export const FACILITATOR_POWERPOINT_SCRIPT = 'facilitator-powerpoint-script';
export const ARTICULATE_SCRIPT = 'articulate-script';
export const POWERPOINT_SCRIPT = 'powerpoint-script';
export const CONTINUOUS_TOPICS = 'continuous-topics';
export const CONTINUOUS_CORE_CONTENT = 'continuous-core-content';
export const CONTINUOUS_CHANGE_CONTENT = 'continuous-change-content';
export const CONTINUOUS_KNOWLEDGE = 'continuous-knowledge';

//extensions for continuous learning
export const CONTINUOUS = 'continuous-learning';
export const CONTINUOUS_SECTION_OUTLINE_EXISTING_CONTENT = 'continuous-learning-outline-existing-content';
export const CONTINUOUS_SECTION_OUTLINE_POLICY_CHANGE = 'continuous-learning-outline-policy-change';
export const CONTINUOUS_CREATION_TYPE = 'continuous-creation-type';
export const CONTINUOUS_LEARNING_REVIEW = 'continuous-learning-review';
export const CONTINUOUS_LEARNING_OVERVIEW = 'continuous-learning-overview';
export const CONTINUOUS_CHANGE = 'continuous-learning-change';
export const CONTINUOUS_CORE = 'continuous-learning-core';
export const SOURCE_CONTINUOUS_DOCUMENT = 'source-continuous-upload';
export const CHANGE_CONTINUOUS_DOCUMENT = 'continuous-upload';
export const CONTINUOUS_CHANGE_FILE_UPLOAD = 'continuous-file-upload';
export const CONTINUOUS_AFTER_RADIO = 'continuous-after-radio';
export const CONTINUOUS_SUCCESS = 'continuous-success';
export const CONTINUOUS_AIM_SUBJECT_PRODUCT = 'continuous-aim-subject';
export const SOURCE_CORE_LEARNING = 'source-core-learning';

export const CHANGE_DOCUMENTS = 'change-documents';

export const valueLabeller = (value: string) => {
  if (value) {
    switch (value) {
      case ARTICULATE_SCRIPT:
        return articulate.label;
      case POWERPOINT_SCRIPT:
        return powerpoint.label;
      case FACILITATOR_POWERPOINT_SCRIPT:
        return powerpointScript.label;
      case CONTINUOUS_KNOWLEDGE:
      case KNOWLEDGE_CHECK:
        return 'Knowledge Check';
      case CONTINUOUS_CORE:
        return continuousCore.label;
      case CONTINUOUS_CHANGE:
        return continuousChange.label;
      default:
        return defaultOutput.label;
    }
  }
};

export const journeyScreenSpliceList = [CONTINUOUS];

export const articulate = {
  label: 'E-Learning Articulate script',
  value: ARTICULATE_SCRIPT,
};

export const powerpoint = {
  label: 'E-Learning Powerpoint script',
  value: POWERPOINT_SCRIPT,
};

export const powerpointScript = {
  label: 'Facilitator led PowerPoint & speaker notes',
  value: FACILITATOR_POWERPOINT_SCRIPT,
};

export const topicOutlines = {
  label: 'Topic objectives',
  value: TOPIC_OUTLINES,
};

export const continuousTopicOutlines = {
  label: 'Topic objectives',
  value: CONTINUOUS_TOPICS,
};

export const knowledgeCheckYes = {
  label: 'Yes',
  value: KNOWLEDGE_CHECK,
};

export const knowledgeCheckNo = {
  label: 'No',
  value: NO_KNOWLEDGE_CHECK,
};

export const continuousLearningChange = {
  label: 'Continuous learning based on a change e.g policy changes',
  value: CONTINUOUS_CHANGE,
};

export const continuousLearningContent = {
  label: 'Continuous learning based on existing core learning content',
  value: CONTINUOUS_CORE,
};

export const continuousChange = {
  label: 'Continuous learning',
  value: CONTINUOUS_CHANGE,
};

export const continuousCore = {
  label: 'Continuous learning',
  value: CONTINUOUS_CORE_CONTENT,
};

export const defaultOutput = {
  label: '',
  value: '',
};

/helpers/content-helpers/content-helpers.tsx

import {
  CONTINUOUS_CORE_CONTENT,
  CONTINUOUS_KNOWLEDGE,
  CONTINUOUS_TOPICS,
  FACILITATOR_POWERPOINT_SCRIPT,
  KNOWLEDGE_CHECK,
  POWERPOINT_SCRIPT,
  TOPIC_OUTLINES,
} from '@/constants/urlpaths';
import {
  Citations,
  ContentSlide,
  ContentSlideResponse,
  EditContext,
  FacilitatorAndContentSlide,
  FacilitatorAndContentSlideResponse,
  QuestionChoicesAnswer,
  QuestionChoicesAnswerResponse,
  ReviewGeneratedTopics,
  ReviewGeneratedTopicsList,
  TopicOutline,
  TopicOutlineResponse,
} from '@/models/GeneratedContent';
import { ReviewTableAction } from '@/models/Table';
import React from 'react';

export const addLineBreaks: React.FC<string> = (text) => {
  if (text && text.length > 0) {
    return (
      <>
        {text.split('\n').map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </>
    );
  } else {
    return <></>;
  }
};

export const addLink: React.FC<string> = (markdown) => {
  const customLinkRegex = /\[\[([^\|]+)\|([^\]]+)\]\]/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = customLinkRegex.exec(markdown)) !== null) {
    const [fullMatch, text, url] = match;
    const startIndex = match.index;

    if (lastIndex !== startIndex) {
      parts.push(markdown.substring(lastIndex, startIndex));
    }

    parts.push(
      <a href={url} key={url} tabIndex={0} data-testid={'link'}>
        {text}
      </a>,
    );

    lastIndex = startIndex + fullMatch.length;
  }

  if (lastIndex !== markdown.length) {
    parts.push(markdown.substring(lastIndex));
  }

  return <>{parts}</>;
};

export const addStringBreaks = (string: string) => {
  return string.replace(/-/g, '\n-');
};

export const buildReviewGeneratedTopicObjectives = (context: string, list: EditContext[]) => {
  const reviewLink = { label: 'Review', type: 'link' };
  const createButton = { label: 'Create', type: 'button' };
  const notReadyTag = { label: 'Cannot start yet', type: 'tag' };
  let action = {};

  if (context) {
    switch (context) {
      case CONTINUOUS_TOPICS:
      case TOPIC_OUTLINES:
        action = reviewLink;
        break;
      case CONTINUOUS_CORE_CONTENT:
      case FACILITATOR_POWERPOINT_SCRIPT:
      case POWERPOINT_SCRIPT:
      case CONTINUOUS_KNOWLEDGE:
      case KNOWLEDGE_CHECK:
        action = notReadyTag;
        break;
      default:
        action = notReadyTag;
    }
  }

  const reviewList: ReviewGeneratedTopicsList = {
    'data-testid': 'topic-objectives',
    'aria-label': 'topic objectives',
    list: list.map((item, index) => {
      if (item.versions.length > 0) {
        return {
          Topic: String(index + 1),
          Heading: (
            item.versions[item.selectedVersion][0][item.versions[item.selectedVersion][0].length - 1] as TopicOutline
          ).title,
          Objectives: (
            item.versions[item.selectedVersion][0][item.versions[item.selectedVersion][0].length - 1] as TopicOutline
          ).objectives,
          action: action as ReviewTableAction,
        } as ReviewGeneratedTopics;
      } else {
        return {
          Topic: '',
          Heading: '',
          Objectives: '',
          action: { label: 'Review', type: 'button' },
        };
      }
    }),
  };

  if (![TOPIC_OUTLINES, CONTINUOUS_TOPICS].includes(context)) {
    reviewList.list[0].action = createButton as ReviewTableAction;
  }

  return reviewList;
};

export const buildTopicOutlinesList = (list: TopicOutlineResponse[]) => {
  const secondArray: EditContext[] = [];
  const thirdArray: Citations[][] = [];

  list.forEach((item) => {
    //create individual arrays for each element.
    secondArray.push({
      review: 'pending',
      selectedVersion: 0,
      versions: [
        [
          [
            {
              title: item.title,
              objectives: item.objectives,
            },
          ],
        ],
      ],
    });
    thirdArray.push(item.citations ? item.citations : []);
  });

  return [secondArray, thirdArray];
};

export const buildSlidesContentList = (obj: FacilitatorAndContentSlideResponse | ContentSlideResponse) => {
  const { slides, citations } = obj;
  const secondArray: EditContext[] = [];
  const thirdArray: Citations[][] = [citations ? citations : []];

  const newSlideFormat = slides.map((item: FacilitatorAndContentSlide | ContentSlide) => {
    return [
      {
        ...(item as FacilitatorAndContentSlide | ContentSlide),
      },
    ];
  });

  // Set entire array to final array
  secondArray.push({
    review: 'pending',
    selectedVersion: 0,
    versions: [[...newSlideFormat]],
  });

  return [secondArray, thirdArray];
};

export const buildKnowledgeCheckList = (obj: QuestionChoicesAnswerResponse) => {
  const { questions, contexts } = obj;
  const secondArray: EditContext[] = [];
  const thirdArray: Citations[][] = [
    [
      {
        id: '',
        title: 'Context:',
        chunks: contexts ? contexts : '',
      },
    ],
  ];

  const newQuestionFormat = questions.map((item) => {
    return [
      {
        ...(item as QuestionChoicesAnswer),
      },
    ];
  });

  // Set entire array to final array
  secondArray.push({
    review: 'pending',
    selectedVersion: 0,
    versions: [[...newQuestionFormat]],
  });

  return [secondArray, thirdArray];
};

export const relabelKeys = (key: string) => {
  if (key) {
    switch (key) {
      case 'objectives':
        return 'Key objectives for topic ';
      case 'title':
        return 'Name of topic ';
      case 'heading':
        return 'Content for slide ';
      case 'script':
        return 'Speaker notes for slide ';
      case 'bullet_points':
      case 'question':
      case 'choices':
      case 'answer':
        return '';

      default:
        return '';
    }
  }
};

export const addSingleGeneratedContent = (
  editContext: EditContext[],
  reviewIndex: number,
  list: TopicOutline[] | QuestionChoicesAnswer[] | FacilitatorAndContentSlide[] | ContentSlide[],
) => {
  const regenedContent = [list].map((item) => [item as any] as any[]);
  editContext[reviewIndex].versions[editContext[reviewIndex].selectedVersion].push(...regenedContent);
  return editContext;
};

export const addBulkRegeneratedContent = (
  editContext: EditContext[],
  reviewIndex: number,
  list: TopicOutline[] | QuestionChoicesAnswer[] | FacilitatorAndContentSlide[] | ContentSlide[],
) => {
  const regenedContent = list.map((item) => [item as any] as any[]);
  const len = editContext[reviewIndex].versions.push([...regenedContent]);
  editContext[reviewIndex].selectedVersion = len - 1;
  return editContext;
};

export const addNewStyledItem = (
  editContext: EditContext[],
  reviewIndex: number,
  multipleItemsIndex: number,
  newContent: TopicOutline | QuestionChoicesAnswer | FacilitatorAndContentSlide | ContentSlide,
) => {
  editContext[reviewIndex].versions[editContext[reviewIndex].selectedVersion][multipleItemsIndex].push(
    newContent as any,
  );
  return editContext;
};

export const removeStyledItem = (editContext: EditContext[], reviewIndex: number, multipleItemsIndex: number) => {
  if (editContext[reviewIndex].versions[editContext[reviewIndex].selectedVersion][multipleItemsIndex].length > 1) {
    editContext[reviewIndex].versions[editContext[reviewIndex].selectedVersion][multipleItemsIndex].pop();
  }
  return editContext;
};

export const prepareKnowledgeCheckResponse = (knowledgeCheckListObj: EditContext): QuestionChoicesAnswer[] => {
  return knowledgeCheckListObj.versions[knowledgeCheckListObj.selectedVersion].map((item) => {
    return item[item.length - 1] as QuestionChoicesAnswer;
  });
};

export const prepareContextualContent = (powerPointList: EditContext) => {
  const { selectedVersion } = powerPointList;
  return powerPointList.versions[selectedVersion].map((item) => {
    return {
      ...item[item.length - 1] as FacilitatorAndContentSlide
    }
  }
  ) as FacilitatorAndContentSlide[]
};

/* The below is needed as if content[multipleItemsIndex] contains objects
  of different types like QuestionChoicesAnswer, FacilitatorAndContentSlide, etc
  typescript will throw an error because it can't guarantee that every object in the array has a question property
*/
export const isQuestionChoicesAnswer = (item: any): item is QuestionChoicesAnswer => {
  return (
    typeof item === 'object' &&
    item !== null && "question" in item &&
    "choices" in item &&
    "answer" in item
  )
};

export const mapTopicsForRequest = (topicList: ReviewGeneratedTopicsList) => {
  if (topicList) {
    return topicList.list.map((item) => {
      return {
        title: item.Heading,
        objectives: item.Objectives,
      } as TopicOutline;
    });
  } else {
    return [];
  }
};

