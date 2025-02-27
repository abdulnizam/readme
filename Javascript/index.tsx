
/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { Descriptor, Button, OverviewList } from '@/components';
import { useFunctionContext } from '@/context/FunctionContext/FunctionContext';
import { useAppSelector } from '@/redux/hooks';

const Overview: React.FC = () => {
  const { primaryButtonClick, overviewCreateClick, overviewReviewContentClick } = useFunctionContext();
  const { descriptor, button, target } = useAppSelector((state) => state.content.overviewContent);
  const overview = useAppSelector((state) => state.configuration.overview);

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleClick = () => {
    primaryButtonClick(target);
  };

  const handleCreateClick = (value: string) => {
    overviewCreateClick(value);
  };

  const handleReviewCreateClick = (value: string) => {
    overviewReviewContentClick(value);
  };

  const checkStatuses: () => boolean = () => {
    if (overview) {
      for (const list of overview) {
        for (const section of list.sections) {
          if (section.state !== 'complete') {
            return true;
          }
        }
      }
    }
    return false;
  };

  useEffect(() => {
    setButtonDisabled(checkStatuses());
  }, [overview]);

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <Descriptor
          title={descriptor.title}
          textSize={descriptor.textSize}
          description={descriptor.description}
          variation="Header"
          data-testid={descriptor['data-testid']}
        />
        {Array.isArray(overview) &&
          overview.map((item, i) => (
            <OverviewList
              key={i}
              heading={item.heading}
              sections={item.sections}
              data-testid={item['data-testid']}
              aria-label={item['aria-label']}
              buttonClick={handleCreateClick}
              reviewClick={handleReviewCreateClick}
            />
          ))}
        {!buttonDisabled && (
          <Button
            onClick={handleClick}
            data-testid={button['data-testid']}
            aria-label={button['aria-label']}
            start={button.start}
            disabled={buttonDisabled}
          >
            {button.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Overview;

/overview.content.ts

import {
  CONTINUOUS_LEARNING_OVERVIEW,
  CONTINUOUS_SUCCESS,
  CORE_LEARNING_OVERVIEW,
  SUCCESS,
} from '@/constants/urlpaths';
import { OverviewContent } from '@/models/Overview';

export function returnOverviewContent(page: string): OverviewContent {
  if (page) {
    switch (page) {
      case CORE_LEARNING_OVERVIEW:
        return coreLearningContent;
      case CONTINUOUS_LEARNING_OVERVIEW:
        return continuousContent;
    }
  }
  return overviewTemplate;
}

export const coreLearningContent: OverviewContent = {
  target: SUCCESS,
  descriptor: {
    title: 'Core learning content creation',
    description: 'Complete these steps in order to create your core learning content.',
    textSize: 2,
    'data-testid': 'core-learning-overview-title-descriptor',
  },
  button: {
    text: 'Finish',
    start: false,
    'data-testid': 'core-learning-overview-continue-button',
    'aria-label': 'core learning overview continue',
  },
};

export const continuousContent: OverviewContent = {
  target: CONTINUOUS_SUCCESS,
  descriptor: {
    title: 'Continuous learning content creation',
    description: 'Complete these steps in order to create your continuous learning content.',
    textSize: 2,
    'data-testid': 'continuous-learning-overview-title-descriptor',
  },
  button: {
    text: 'Finish',
    start: false,
    'data-testid': 'continuous-learning-overview-continue-button',
    'aria-label': 'continuous learning overview continue',
  },
};

export const overviewTemplate: OverviewContent = {
  target: '',
  descriptor: {
    title: '',
    textSize: 4,
    'data-testid': '',
  },
  button: {
    text: '',
    start: false,
    'data-testid': '',
    'aria-label': '',
  },
};

/Descriptor

'use client';

import React, { forwardRef } from 'react';
import { DescriptorContentProps } from '@/models/Descriptor';
import { H1, H2, H3, H4, H5, H6, Heading, InsetText } from '@/components';
import styles from './Descriptor.module.scss';
import { addLineBreaks, addLink } from '@/helpers/content-helpers/content-helpers';

/**
 * Descriptor Component showing static content in context of a screen or to describe another component.
 * @param DescriptorContentProps
 * @returns React FC with Title Text (GDS Header - H6), Description paragraph, and Hint text.
 */

const Descriptor = forwardRef<HTMLDivElement, DescriptorContentProps>(
  ({ title, description, hint, insetText, textSize, variation, ...props }, ref) => {
    const dataTest = props['data-testid'];
    function headerSize(size: number): React.JSX.Element {
      switch (size) {
        case 0:
          return (
            <Heading
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-heading-text`}
            >
              {addLineBreaks(title)}
            </Heading>
          );
        case 1:
          return (
            <H1
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-h1-text`}
            >
              {addLineBreaks(title)}
            </H1>
          );
        case 2:
          return (
            <H2
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-h2-text`}
            >
              {addLineBreaks(title)}
            </H2>
          );
        case 3:
          return (
            <H3
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-h3-text`}
            >
              {addLineBreaks(title)}
            </H3>
          );
        case 4:
          return (
            <H4
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-h4-text`}
            >
              {addLineBreaks(title)}
            </H4>
          );
        case 5:
          return (
            <H5
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-h5-text`}
            >
              {addLineBreaks(title)}
            </H5>
          );
        case 6:
          return (
            <H6
              className={variation === 'Component' ? styles.descriptorRow : styles.heading}
              data-testid={`${dataTest}-h6-text`}
            >
              {addLineBreaks(title)}
            </H6>
          );
        default:
          return <></>;
      }
    }

    return (
      <div className={variation === 'Header' ? styles.descriptorGroupHeader : styles.descriptorGroupHome}>
        {/* passed ref for the edit page enabling focus to be applied to the top of the screen. */}
        <div ref={ref! as React.ForwardedRef<HTMLDivElement>} tabIndex={ref ? 0 : -1}>
          {headerSize(textSize)}
        </div>
        {description ? (
          <div
            className={`${variation === 'Component' ? styles.descriptorRow : styles.headingRow} govuk-body-m`}
            data-testid={`${dataTest}-description-text`}
          >
            {addLineBreaks(description)}
          </div>
        ) : (
          ''
        )}
        {hint ? (
          <div
            className={`${variation === 'Component' ? styles.descriptorRow : styles.headingRow} govuk-body-m govuk-hint`}
            data-testid={`${dataTest}-hint-text`}
          >
            {hint}
          </div>
        ) : (
          ''
        )}
        {insetText ? (
          <>
            <div className="govuk-body-m" data-testid={`${dataTest}-inset-text`}>
              <InsetText>{addLink(insetText)}</InsetText>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    );
  },
);

Descriptor.displayName = 'Descriptor';

export default Descriptor;

/Button

'use client';

import React from 'react';
import { Button as GDSButton } from 'govuk-react';
import { ButtonProps } from '@/models/Button';

export default function Button({
  icon,
  hexButtonColour,
  hexButtonHoverColour,
  hexButtonShadowColour,
  hexButtonTextColour,
  className,
  id,
  start,
  onClick,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const dataTest = props['data-testid'];
  const ariaLabel = props['aria-label'];

  return (
    <GDSButton
      tabIndex={0}
      id={id}
      data-testid={dataTest}
      aria-label={ariaLabel}
      className={className}
      icon={icon}
      buttonColour={hexButtonColour}
      buttonHoverColour={hexButtonHoverColour}
      buttonShadowColour={hexButtonShadowColour}
      buttonTextColour={hexButtonTextColour}
      start={start}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </GDSButton>
  );
}

/OverviewList

'use client';

import React from 'react';
import { SectionBreak, H3, H6, Button, Tag, Link } from '@/components';
import { SectionContent } from '@/models/Overview';
import styles from './OverviewList.module.scss';

const OverviewList: React.FC<SectionContent> = ({ heading, sections, buttonClick, reviewClick, ...props }) => {
  const dataTest = props['data-testid'];

  const handleButtonClick = (value: string) => {
    buttonClick!(value);
  };

  const handleReviewClick = (e: Event, value: string) => {
    e.preventDefault();
    reviewClick!(value);
  };

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <H3 data-testid={`${dataTest}-h3`}>{heading}</H3>
        {sections.map((section, i) => {
          if (!section.value) return null;
          return (
            <div key={i}>
              <SectionBreak
                visible={true}
                level="MEDIUM"
                className={styles.sectionMidBreak}
                data-testid={`${dataTest}-section-break-${i}`}
              />
              <div className={`govuk-grid-row ${styles.sectionRow}`} data-testid={`${dataTest}-row-${i}`}>
                <div className="govuk-grid-column-three-quarters" data-testid={`${dataTest}-label-${i}`}>
                  {section.state === 'complete' ? (
                    <H6 className={styles.rowHeading}>
                      <Link
                        href="#"
                        onClick={(e) => handleReviewClick(e, section.value)}
                        data-testid={`overview-list-return-link-${i}`}
                      >
                        {section.label}
                      </Link>
                    </H6>
                  ) : (
                    <H6 className={styles.rowHeading} data-testid={`${dataTest}-h6-${i}`}>
                      {section.label}
                    </H6>
                  )}
                </div>
                <div
                  className={`govuk-grid-column-one-quarter ${styles.sectionOneQuarter}`}
                  data-testid={`${dataTest}-function-${i}`}
                >
                  {section.state === 'ready' && (
                    <Button
                      onClick={() => handleButtonClick(section.value)}
                      data-testid={`${dataTest}-create-button-${i}`}
                      aria-label={`Create ${section.label}`}
                      className={styles.sectionButton}
                    >
                      Create
                    </Button>
                  )}
                  {section.state === 'not-ready' && (
                    <Tag color={'grey'} index={i}>
                      {"Can't start yet"}
                    </Tag>
                  )}
                  {section.state === 'complete' && (
                    <Tag color={'green'} index={i}>
                      Complete
                    </Tag>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <SectionBreak
          visible={true}
          level="MEDIUM"
          className={styles.sectionEndBreak}
          data-testid={`${dataTest}-section-break-end`}
        />
      </div>
    </div>
  );
};

export default OverviewList;

/useFunctionContext

import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useJourneyContext } from '../JourneyContext/JourneyContext';
import { TableRow } from '@/models/Table';
import { SelectProps } from '@/models/MultiSelectGroup';
import { InputAreaConfigProps } from '@/models/InputArea';
import { RadioProps } from '@/models/RadioGroup';
import { FunctionContextProps, FunctionProviderProps } from '@/models/FunctionContext';
import { useContentCreationService } from '@/helpers/content-creation-service/content-creation-service';
import { useDocumentManagementService } from '@/helpers/document-management-service/document-management-service';
import knowledgeCheckDummy from '../../data/knowledge-check.json';

import {
  setContentName,
  setContentPurpose,
  setJourneyRoute,
  setOutputFormats,
  setKnowledgeCheck,
  setUploadedFilesList,
  setContentTopics,
  setLearningId,
  setOverview,
  updateNextOverviewState,
  resetAllConfiguration,
  setReviewList,
  updateReviewRowToView,
  updateCreateRowToReview,
  setReviewRowToReviewLink,
  setcontinuousLearningCreationType,
  setAimInput,
  setContinuousChangeDocId,
  setChangeText,
  setChangeFile
} from '@/redux/feature/configuration/configuration';
import {
  setList,
  setReviewIndex,
  setReviewHeader,
  setCitations,
  addVersionToList,
  setEditContextListSelectedVersion,
  setEditContextListReviewComplete,
  setEditedContent,
  addRestyleToList,
  removeRestyleFromList,
  addNewListItem,
  addContentToMultiItemList,
  removeContentFromMultiItemList,
  resetAllGeneratedContent,
} from '@/redux/feature/generatedContent/generatedContent';

import {
  buildKnowledgeCheckList,
  buildReviewGeneratedTopicObjectives,
  buildSlidesContentList,
  buildTopicOutlinesList,
  prepareKnowledgeCheckResponse,
  prepareContextualContent,
  isQuestionChoicesAnswer,
  mapTopicsForRequest,
} from '@/helpers/content-helpers/content-helpers';

import {
  Citations,
  ContentSlide,
  ContentSlideResponse,
  DocumentContent,
  DocumentQuestions,
  DocumentSlides,
  EditContext,
  FacilitatorAndContentSlide,
  FacilitatorAndContentSlideResponse,
  QuestionChoicesAnswer,
  QuestionChoicesAnswerResponse,
  TopicOutline,
} from '@/models/GeneratedContent';

import {
  CORE_LEARNING_OVERVIEW,
  CORE_LEARNING_REVIEW,
  FACILITATOR_POWERPOINT_SCRIPT,
  KNOWLEDGE_CHECK,
  KNOWLEDGE_CHECK_PAGE,
  LEARNING_AND_DEVELOPMENT,
  NAME_PURPOSE_TOPICS,
  OUTPUT_FORMATS,
  OVERVIEW,
  POWERPOINT_SCRIPT,
  REVIEW_GENERATED_CONTENT,
  SOURCE_DOCUMENT,
  CHANGE_CONTINUOUS_DOCUMENT,
  TOPIC_OUTLINES,
  CONTINUOUS_CREATION_TYPE,
  CONTINUOUS_CORE,
  CONTINUOUS_LEARNING_REVIEW,
  CONTINUOUS_CORE_CONTENT,
  CONTINUOUS_LEARNING_OVERVIEW,
  CONTINUOUS_KNOWLEDGE,
  CONTINUOUS_AFTER_RADIO,
  CONTINUOUS_TOPICS,
  CONTINUOUS_AIM_SUBJECT_PRODUCT,
  SOURCE_CORE_LEARNING,
  CONTINUOUS_CHANGE,
  SOURCE_CONTINUOUS_DOCUMENT,
} from '@/constants/urlpaths';
import { downloadDocumentLink } from '@/helpers/document-handling/document-handling';

export const FunctionContext = createContext<FunctionContextProps | undefined>(undefined);

const FunctionProvider: React.FC<FunctionProviderProps> = ({ children }: ReactNode | any) => {
  const { learningId, topicOutlineReview, learningName } = useAppSelector((state) => state.configuration);
  const {
    topicList,
    topicCitations,
    powerPointList,
    powerpointCitations,
    knowledgeCheckList,
    knowledgeCheckCitations,
    continuousList,
    continuousCitations,
  } = useAppSelector((state) => state.generatedContent);
  const dispatch = useAppDispatch();
  const {
    nextScreen,
    appendJourney,
    findNextPageRefIndex,
    setScreenIndex,
    finishJourney,
    findAndRouteToPageInJourney,
    setPageAndContextTarget,
    content: context,
  } = useJourneyContext();

  const {
    createTopicObjectives,
    createPowerpointContent,
    createKnowledgeCheck,
    addNewQuestion,
    restyleFacilitatorPowerpoint,
    restyleKnowledgeCheck,
    regenerateTopicObjectives,
    createContinuousPowerpointContent,
  } = useContentCreationService();

  const {
    setLearningNameAndPurpose,
    uploadSourceDocuments,
    uploadRawText,
    removeDocument,
    removeSourceDocument,
    downloadDocument,
  } = useDocumentManagementService();

  const primaryButtonClick = async (prop?: any) => {
    if (context) {
      switch (context) {
        case CONTINUOUS_CREATION_TYPE:
          appendJourney(prop.value as string);
          appendJourney(CONTINUOUS_AFTER_RADIO);
          break;
        case LEARNING_AND_DEVELOPMENT:
          appendJourney(prop.value as string);
          break;
        case NAME_PURPOSE_TOPICS:
        case CONTINUOUS_AIM_SUBJECT_PRODUCT:
          const response = await setLearningNameAndPurpose(prop, learningId) as {
            object_id: string; learning_id: string;

          }; if (response.learning_id || response.object_id) {
            let chosenLearningId = Object.values(response)
            dispatch(setLearningId(chosenLearningId[0]));
          }
          break;
        case CONTINUOUS_LEARNING_REVIEW:
        case CORE_LEARNING_REVIEW:
          dispatch(setOverview(context));
          break;
        case CONTINUOUS_LEARNING_OVERVIEW:
        case CORE_LEARNING_OVERVIEW:
          appendJourney(prop);
          finishJourney();
          break;
        case CONTINUOUS_CORE:
        case TOPIC_OUTLINES:
        case CONTINUOUS_TOPICS:
        case FACILITATOR_POWERPOINT_SCRIPT:
        case POWERPOINT_SCRIPT:
        case CONTINUOUS_KNOWLEDGE:
        case KNOWLEDGE_CHECK:
          dispatch(updateNextOverviewState(context));
          // This enabled the primary button to skip to the next section. 
          const nextOverview = findNextPageRefIndex(OVERVIEW);
          if (nextOverview !== -1) {
            setScreenIndex(nextOverview);
            return;
          }
      }
    }
    nextScreen();
  };

  // editPrimaryClick page holds a different set of functionality to the primaryButtonClick suite.
  const editPrimaryClick = (reviewIndex?: number) => {
    if (context) {
      switch (context) {
        case CONTINUOUS_TOPICS:
        case TOPIC_OUTLINES:
          dispatch(setReviewList({ context, reviewList: buildReviewGeneratedTopicObjectives(context, topicList as EditContext[]) }));
          break;
        case KNOWLEDGE_CHECK:
        case POWERPOINT_SCRIPT:
        case FACILITATOR_POWERPOINT_SCRIPT:
        case CONTINUOUS_CORE_CONTENT:
          dispatch(setEditContextListReviewComplete({ context, reviewIndex: reviewIndex! }));
      }
      dispatch(updateReviewRowToView({ context }));
      findAndRouteToPageInJourney(context, REVIEW_GENERATED_CONTENT);
    }
  };

  const fireRemoveFromDB = async (id: string) => {
    if (context) {
      switch (context) {
        case SOURCE_DOCUMENT:
          //id of document to remove. 
          await removeSourceDocument(learningId, id);
          break;
        default:
          await removeDocument(learningId);
      }
    }
  };

  const fireFileUpload = async (file: File) => {
    if (context) {
      return await uploadSourceDocuments(file!, learningId, context);
    }
    return { success: false, pii_detected: false, is_infected: false };
  };

  const fireRawTextUpload = async (rawText: string) => {
    if (context) {
      return await uploadRawText(rawText, learningId, context)
    }
    return { success: false, pii_detected: false, is_infected: false };
  }
  const radioGroupChange = (content: RadioProps) => {
    if (context) {
      switch (context) {
        case LEARNING_AND_DEVELOPMENT:
          dispatch(setJourneyRoute(content));
          break;
        case KNOWLEDGE_CHECK_PAGE:
          dispatch(setKnowledgeCheck(content));
          break;
        case CONTINUOUS_CREATION_TYPE:
          dispatch(setcontinuousLearningCreationType(content));
      }
    }
  };

  const regenerateContentClick = async (reviewIndex: number) => {
    if (context) {
      if (context) {
        // topicOutlineReview is automatically updated when Topics are edited. ReviewGeneratedTopicsList type is simpler to manipulate than EditContext[] type.
        const topicsForRequest = mapTopicsForRequest(topicOutlineReview);
        switch (context) {
          case TOPIC_OUTLINES:
          case CONTINUOUS_TOPICS:
            {
              const res = await regenerateTopicObjectives(topicsForRequest, reviewIndex, topicCitations, learningId);
              dispatch(addVersionToList({ context, reviewIndex, list: res as TopicOutline[] }));
            }
            break;
          case POWERPOINT_SCRIPT:
          case FACILITATOR_POWERPOINT_SCRIPT:
            {
              const res = await createPowerpointContent(context, learningId, topicsForRequest, reviewIndex);
              dispatch(addVersionToList({ context, reviewIndex, list: (res as FacilitatorAndContentSlideResponse).slides }));
            }
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK: {
            const contextualContent: FacilitatorAndContentSlide[] = prepareContextualContent(
              powerPointList[reviewIndex],
            );
            const res = await createKnowledgeCheck(
              contextualContent,
              topicsForRequest[reviewIndex],
              FACILITATOR_POWERPOINT_SCRIPT,
            );
            dispatch(addVersionToList({ context, reviewIndex, list: (res as QuestionChoicesAnswerResponse).questions }));
          }
        }
      }
    }
  };

  const inputAreaChange = (content: string) => {
    if (context) {
      switch (context) {
        case NAME_PURPOSE_TOPICS:
        case CONTINUOUS_AIM_SUBJECT_PRODUCT:
          dispatch(setContentName(content));
          break;
      }
    }
  };

  const aimInputAreaChange = (content: string) => {
    if (context) {
      switch (context) {
        case CONTINUOUS_AIM_SUBJECT_PRODUCT:
          dispatch(setAimInput(content));
          break;
      }
    }
  };

  const addContinuousChangeDocId = (doc_id: string) => {
    if (context) {
      switch (context) {
        case CHANGE_CONTINUOUS_DOCUMENT:
          dispatch(setContinuousChangeDocId(doc_id));
          break;
      }
    }
  }


  const continuousChangeText = (changeText: string) => {
    if (context) {
      switch (context) {
        case CHANGE_CONTINUOUS_DOCUMENT:
          dispatch(setChangeText(changeText));
          break;
      }
    }

  }

  const continuousFileChange = (fileList: TableRow) => {
    if (context) {
      switch (context) {
        case CHANGE_CONTINUOUS_DOCUMENT:
          dispatch(setChangeFile(fileList));
          break;
      }
    }
  }

  const textAreaChange = (content: string) => {
    if (context) {
      switch (context) {
        case NAME_PURPOSE_TOPICS:
        case CONTINUOUS_AIM_SUBJECT_PRODUCT:
          dispatch(setContentPurpose(content));
      }
    }
  };

  const listChange = (list: InputAreaConfigProps[]) => {
    if (context) {
      switch (context) {
        case NAME_PURPOSE_TOPICS:
          dispatch(setContentTopics(list));
          break;
      }
    }
  };

  const multiselectChange = (selectedOptions: SelectProps[]) => {
    if (context) {
      switch (context) {
        case OUTPUT_FORMATS:
          dispatch(setOutputFormats(selectedOptions));
          break;
      }
    }
  };

  const tableChange = (tableList: TableRow[]) => {
    if (context) {
      switch (context) {
        case SOURCE_CORE_LEARNING:
        case SOURCE_DOCUMENT:
        case SOURCE_CONTINUOUS_DOCUMENT:
          dispatch(setUploadedFilesList(tableList));
          break;
      }
    }
  };

  const overviewCreateClick = async (desiredOutput: string) => {
    appendJourney(desiredOutput);
    if (context) {
      switch (desiredOutput) {
        case CONTINUOUS_TOPICS:
        case TOPIC_OUTLINES: {
          const res = await createTopicObjectives(desiredOutput, learningId);
          const [topics, citations] = buildTopicOutlinesList(res!);
          dispatch(setList({ context: desiredOutput, list: topics as EditContext[] }));
          dispatch(setCitations({ context: desiredOutput, citations: citations as Citations[][] }));
          dispatch(
            setReviewList({
              context: desiredOutput,
              reviewList: buildReviewGeneratedTopicObjectives(desiredOutput, topics as EditContext[]),
            }),
          );
          break;
        }
        default: {
          dispatch(
            setReviewList({
              context: desiredOutput,
              reviewList: buildReviewGeneratedTopicObjectives(desiredOutput, topicList as EditContext[]),
            }),
          );
          break;
        }
      }
      setPageAndContextTarget(REVIEW_GENERATED_CONTENT, desiredOutput);
    }
  };

  const overviewReviewContentClick = (desiredOutput: string) => {
    if (context) {
      switch (context) {
        case CONTINUOUS_TOPICS:
        case CONTINUOUS_LEARNING_OVERVIEW:
        case CORE_LEARNING_OVERVIEW:
          findAndRouteToPageInJourney(desiredOutput, REVIEW_GENERATED_CONTENT);
          break;
      }
    }
  };

  const reviewContentClick = (desiredOutput: string) => {
    if (context) {
      switch (context) {
        case CORE_LEARNING_OVERVIEW:
          findAndRouteToPageInJourney(desiredOutput, REVIEW_GENERATED_CONTENT);
          break;
      }
    }
  };

  const addNewEditContextItem = async (reviewIndex: number) => {
    if (context) {
      switch (context) {
        case CONTINUOUS_KNOWLEDGE:
        case KNOWLEDGE_CHECK:
          const knowledgeCheckRequest = prepareKnowledgeCheckResponse(knowledgeCheckList[reviewIndex]);
          const res = await addNewQuestion(knowledgeCheckRequest, knowledgeCheckCitations[reviewIndex][0].chunks);
          dispatch(addContentToMultiItemList({ context, newContent: res!, reviewIndex }));
      }
    }
  };

  const removeEditContextItem = (reviewIndex: number, multiItemIndex: number) => {
    if (context) {
      switch (context) {
        case CONTINUOUS_KNOWLEDGE:
        case KNOWLEDGE_CHECK:
          dispatch(removeContentFromMultiItemList({ context, reviewIndex, multiItemIndex }));
      }
    }
  }

  const removeCurrentRestyle = (reviewIndex: number, multipleItemsIndex: number) => {
    if (context) {
      dispatch(removeRestyleFromList({ context, reviewIndex, multipleItemsIndex }));
    }
  };

  const fireRepromptContentStyle = async (
    reviewIndex: number,
    multipleItemsIndex: number,
    content: ContentSlide[][] | FacilitatorAndContentSlide[][] | QuestionChoicesAnswer[][],
    reprompt: string,
    question: string,
  ) => {
    if (context) {
      {
        switch (context) {
          case POWERPOINT_SCRIPT:
          case FACILITATOR_POWERPOINT_SCRIPT:
            {
              const cont = content.map((item) => item[item.length - 1]);
              const res = await restyleFacilitatorPowerpoint(
                reprompt,
                cont as FacilitatorAndContentSlide[],
                multipleItemsIndex,
                powerpointCitations[reviewIndex],
              );
              dispatch(addRestyleToList({ context, reviewIndex, newContent: res as any, multipleItemsIndex }));
            }
            break;
          case CONTINUOUS_KNOWLEDGE:
          case KNOWLEDGE_CHECK:
            {
              const chosenQuestion = content[multipleItemsIndex].find((item) => isQuestionChoicesAnswer(item) && question === item.question);
              const res = await restyleKnowledgeCheck(
                reprompt,
                chosenQuestion as QuestionChoicesAnswer,
                knowledgeCheckCitations[reviewIndex][0].chunks,
              );
              dispatch(addRestyleToList({ context, reviewIndex, newContent: res as any, multipleItemsIndex }));
            }
            break;
        }
      }
    }
  };

  const contentVersionClick = (index: number, reviewIndex: number) => {
    if (context) {
      dispatch(setEditContextListSelectedVersion({ newVersionSelected: index, context, reviewIndex }));
    }
  };

  const saveEditedContent = (reviewIndex: number, value: any, multipleItemsIndex: number) => {
    if (context) {
      dispatch(setEditedContent({ context, reviewIndex, newContent: value, multipleItemsIndex }));
    }
  };

  const buildDownloadMaterial = (): DocumentContent[] => {
    const output = topicOutlineReview.list.map((it, index) => {
      if (context === KNOWLEDGE_CHECK || context === CONTINUOUS_KNOWLEDGE) {
        const arr = knowledgeCheckList[index].versions[knowledgeCheckList[index].selectedVersion]
          .map((item) => item[item.length - 1] as QuestionChoicesAnswer);
        return {
          topic_outline: {
            title: it.Heading,
            objectives: it.Objectives
          },
          content: {
            questions: [...arr]
          } as DocumentQuestions
        }
      } else if (context === FACILITATOR_POWERPOINT_SCRIPT) {
        const arr = powerPointList[index].versions[powerPointList[index].selectedVersion]
          .map((item) => item[item.length - 1] as FacilitatorAndContentSlide | ContentSlide);
        return {
          topic_outline: {
            title: it.Heading,
            objectives: it.Objectives
          },
          content: {
            slides: [...arr]
          } as DocumentSlides
        }
      } else if (context === CONTINUOUS_CORE_CONTENT || context === CONTINUOUS_CHANGE) {
        const arr = continuousList[index].versions[continuousList[index].selectedVersion]
          .map((item) => item[item.length - 1] as FacilitatorAndContentSlide | ContentSlide);
        return {
          topic_outline: {
            title: it.Heading,
            objectives: it.Objectives
          },
          content: {
            slides: [...arr]
          } as DocumentSlides
        }
      }
    })
    return output as DocumentContent[];
  };

  const fireDownloadLearningMaterial = async () => {
    if (context) {
      const content = {
        topics: buildDownloadMaterial()
      };
      const res = await downloadDocument(learningId, learningName, context, content);
      const blob = new Blob([res]);
      let name = learningName;
      if (context === FACILITATOR_POWERPOINT_SCRIPT || context === CONTINUOUS_CORE_CONTENT) {
        name = `${learningName}-powerpoint-script.pptx`
      } else {
      };
      name = `${learningName}-knowledge-check.docx`
      downloadDocumentLink(blob, name);
    };
  };

  const createEditableContentClick = async (index: number, heading: string,) => {
    if (context) {
      // Set all of the variables for the UI to perform.
      dispatch(setReviewIndex(index));
      dispatch(setReviewHeader(heading));
      dispatch(updateCreateRowToReview({ context }));
      const topicsForRequest = topicOutlineReview.list.map((item) => {
        return {
          title: item.Heading,
          objectives: item.Objectives,
        } as TopicOutline
      });
      switch (context) {
        case CONTINUOUS_CORE_CONTENT:
          const res = await createContinuousPowerpointContent(context, learningId, topicsForRequest, index);
          const [list, citations] = buildSlidesContentList(
            res! as ContentSlideResponse | FacilitatorAndContentSlideResponse,
          );
          dispatch(addNewListItem({ context, list: list as EditContext[] }));
          dispatch(setCitations({ context, citations: citations as Citations[][] }));
          break;
        case POWERPOINT_SCRIPT:
        case FACILITATOR_POWERPOINT_SCRIPT: {
          const res = await createPowerpointContent(context, learningId, topicsForRequest, index);
          const [list, citations] = buildSlidesContentList(res! as ContentSlideResponse | FacilitatorAndContentSlideResponse);

          dispatch(addNewListItem({ context, list: list as EditContext[] }));
          dispatch(setCitations({ context, citations: citations as Citations[][] }));
          break;
        }
        case CONTINUOUS_KNOWLEDGE: {
          //Needs to be made dynamic for the future requests
          const contextualContent: FacilitatorAndContentSlide[] = prepareContextualContent(continuousList[index]);
          const [list, citations] = buildKnowledgeCheckList(knowledgeCheckDummy as QuestionChoicesAnswerResponse);
          dispatch(addNewListItem({ context, list: list as EditContext[] }));
          dispatch(setCitations({ context, citations: citations as Citations[][] }));
          break;
        }
        case KNOWLEDGE_CHECK: {
          //Needs to be made dynamic for the future requests
          const contextualContent: FacilitatorAndContentSlide[] = prepareContextualContent(powerPointList[index]);
          const res = await createKnowledgeCheck(
            // Facilitator script takes precedence over slide content if present.
            contextualContent,
            topicsForRequest[index],
            // Facilitator script takes precedence over slide content if present.
            FACILITATOR_POWERPOINT_SCRIPT,
          );
          const [list, citations] = buildKnowledgeCheckList(res! as QuestionChoicesAnswerResponse);
          dispatch(addNewListItem({ context, list: list as EditContext[] }));
          dispatch(setCitations({ context, citations: citations as Citations[][] }));
          break;
        }
      }
      dispatch(setReviewRowToReviewLink({ context, index }));
    }
    nextScreen();
  };

  const reviewEditedContentClick = (index: number, heading: string) => {
    dispatch(setReviewIndex(index));
    dispatch(setReviewHeader(heading));
    nextScreen();
  };

  const resetState = () => {
    if (learningId) {
      removeDocument(learningId);
    };
    dispatch(resetAllConfiguration());
    dispatch(resetAllGeneratedContent());
  };

  useEffect(() => {
    if (context === LEARNING_AND_DEVELOPMENT) {
      resetState();
    }
  }, [context]);

  return (
    <FunctionContext.Provider
      value={{
        primaryButtonClick,
        textAreaChange,
        inputAreaChange,
        aimInputAreaChange,
        multiselectChange,
        radioGroupChange,
        fireFileUpload,
        tableChange,
        listChange,
        fireRemoveFromDB,
        overviewCreateClick,
        overviewReviewContentClick,
        createEditableContentClick,
        reviewContentClick,
        resetState,
        saveEditedContent,
        editPrimaryClick,
        regenerateContentClick,
        contentVersionClick,
        fireRepromptContentStyle,
        removeCurrentRestyle,
        addNewEditContextItem,
        removeEditContextItem,
        reviewEditedContentClick,
        fireDownloadLearningMaterial,
        addContinuousChangeDocId,
        continuousFileChange,
        continuousChangeText,
        fireRawTextUpload
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export function useFunctionContext(): FunctionContextProps {
  const context = useContext(FunctionContext);
  if (!context) {
    throw new Error('useFunctionContext must be used within an App Provider');
  }
  return context;
}

export default FunctionProvider;


/useAppSelector

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

