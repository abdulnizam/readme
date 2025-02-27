
/app/[user-context]/edit/page.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Indicator,
  Descriptor,
  ReadOnlyBox,
  SourcesBox,
  EditBox,
  VersionController,
  InsetText,
  EditBoxContainer,
  Details,
} from '@/components';
import { useFunctionContext } from '@/context/FunctionContext/FunctionContext';
import { useAppSelector } from '@/redux/hooks';
import { useConfigurationContext } from '@/context/ConfigurationContext/ConfigurationContext';
import { SourcesAccordionProps } from '@/components/SourcesAccordion/SourcesAccordion';
import { useJourneyContext } from '@/context/JourneyContext/JourneyContext';
import { CONTINUOUS_KNOWLEDGE, KNOWLEDGE_CHECK, TOPIC_OUTLINES } from '@/constants/urlpaths';
import styles from './edit.module.scss';

const Edit: React.FC = () => {
  const {
    editPrimaryClick,
    saveEditedContent,
    regenerateContentClick,
    contentVersionClick,
    fireRepromptContentStyle,
    removeCurrentRestyle,
    addNewEditContextItem,
    removeEditContextItem,
  } = useFunctionContext();
  const { descriptor, editDescriptor, warning, button, buttons, details } = useAppSelector(
    (state) => state.content.editContent,
  );
  const { editGeneratedContent, sourceMaterials } = useConfigurationContext();
  const { content: context } = useJourneyContext();
  const { reviewIndex, reviewHeader } = useAppSelector((state) => state.generatedContent);
  const [editState, setEditState] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayedContent, setDisplayedContent] = useState<Record<string, any>[][]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [versions, setVersions] = useState<number>(0);
  const [newQuestionCount, setNewQuestionCount] = useState<number>(0);
  const [descriptorTitle, setDescriptorTitle] = useState<string>(descriptor[editState ? 1 : 0].title);
  const [isReviewed, setIsReviewed] = useState<boolean>(false);
  const firstElementRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (editState || isReviewed) {
      editPrimaryClick(reviewIndex);
    } else {
      setEditState(!editState);
    }
  };

  const handleSelect = (index: number) => {
    contentVersionClick(index, reviewIndex);
  };

  const handlePrevious = () => {
    if (editGeneratedContent[reviewIndex].selectedVersion > 0) {
      contentVersionClick(editGeneratedContent[reviewIndex].selectedVersion - 1, reviewIndex);
    }
  };

  const handleNext = () => {
    if (editGeneratedContent[reviewIndex].selectedVersion < versions - 1) {
      contentVersionClick(editGeneratedContent[reviewIndex].selectedVersion + 1, reviewIndex);
    }
  };

  const handleRegenerateClick = () => {
    regenerateContentClick(reviewIndex);
  };

  const handleUndo = (reviewIndex: number, index: number) => {
    removeCurrentRestyle(reviewIndex, index);
  };

  const handleReprompt = (reviewIndex: number, index: number, value: string, question: string) => {
    fireRepromptContentStyle(
      reviewIndex,
      index,
      editGeneratedContent[reviewIndex].versions[selectedIndex],
      value,
      question,
    );
  };

  const handleEditClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleSaveOrCancel = (value: any, multipleItemsIndex: number) => {
    setActiveIndex(null);
    saveEditedContent(reviewIndex, value, multipleItemsIndex);
  };

  const handleRemoveQuestion = (e: Event, index: number) => {
    e.preventDefault();
    removeEditContextItem(reviewIndex, index);
    setNewQuestionCount((prev) => prev - 1);
  };

  const handleAddQuestion = () => {
    addNewEditContextItem(reviewIndex);
    setNewQuestionCount((prev) => prev + 1);
  };

  const sourceMats: SourcesAccordionProps[] = sourceMaterials.map((item) => ({
    source: {
      ...item,
    },
    index: 0,
  }));

  useEffect(() => {
    if (editState) {
      setDescriptorTitle(setEditDescriptor());
    } else {
      setDescriptorTitle(setReviewDescriptor());
    }
    if (editState && firstElementRef.current) {
      firstElementRef.current.focus();
      if ('scrollIntoView' in firstElementRef.current) {
        firstElementRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [editState]);

  const setEditDescriptor = () => {
    if (context === TOPIC_OUTLINES) {
      return `${descriptor[editState ? 1 : 0].title} name and objectives individually`;
    } else {
      return 'Edit and regenerate sections of content';
    }
  };

  const setReviewDescriptor = () => {
    if (context === TOPIC_OUTLINES) {
      return `${descriptor[editState ? 1 : 0].title} topic ${reviewIndex + 1} name and objectives`;
    } else if (context === KNOWLEDGE_CHECK || context === CONTINUOUS_KNOWLEDGE) {
      return `${descriptor[editState ? 1 : 0].title} topic ${reviewIndex + 1} knowledge check ${reviewHeader}`;
    } else {
      return `${descriptor[editState ? 1 : 0].title} topic ${reviewIndex + 1} content ${reviewHeader}`;
    }
  };

  useEffect(() => {
    setVersions(editGeneratedContent[reviewIndex].versions.length);
    setSelectedIndex(editGeneratedContent[reviewIndex].selectedVersion);
    setIsReviewed(editGeneratedContent[reviewIndex].review === 'completed');
  }, [editGeneratedContent, reviewIndex]);

  useEffect(() => {
    setDisplayedContent(editGeneratedContent[reviewIndex].versions[selectedIndex]);
  }, [reviewIndex, editGeneratedContent, selectedIndex]);

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <Descriptor
          title={descriptorTitle}
          description={descriptor[editState ? 1 : 0].description}
          hint={descriptor[editState ? 1 : 0].hint}
          textSize={descriptor[editState ? 1 : 0].textSize}
          variation="Header"
          data-testid={descriptor[editState ? 1 : 0]['data-testid']}
          ref={firstElementRef}
        />
        <Indicator data-testid={warning['data-testid']} aria-label={warning['aria-label']}>
          {warning.children}
        </Indicator>
        {editDescriptor![editState ? 1 : 0] && (
          <Descriptor
            title={editDescriptor![editState ? 1 : 0].title}
            hint={editDescriptor![editState ? 1 : 0].hint}
            textSize={editDescriptor![editState ? 1 : 0].textSize}
            variation="Header"
            data-testid={editDescriptor![editState ? 1 : 0]['data-testid']}
          />
        )}
        <Details detail={details[editState ? 1 : 0].detail} summary={details[editState ? 1 : 0].summary} />
        {!editState && (
          <>
            <ReadOnlyBox
              data={displayedContent}
              selectedIndex={reviewIndex}
              context={context!}
              listLength={context === TOPIC_OUTLINES ? editGeneratedContent.length : 0}
              removeListItem={handleRemoveQuestion}
            />
            <div className={`${styles['navigation-container']}`}>
              {!isReviewed && (
                <>
                  {versions < 3 ? (
                    <div className={styles.inlineButtons}>
                      {!isReviewed &&
                        !editState &&
                        (context === KNOWLEDGE_CHECK || context === CONTINUOUS_KNOWLEDGE) && (
                          <Button
                            onClick={handleAddQuestion}
                            data-testid={button['data-testid']}
                            aria-label={button['aria-label']}
                            disabled={activeIndex !== null || newQuestionCount >= 3}
                            hexButtonColour="#f3f2f1"
                            hexButtonHoverColour="#dbdad9"
                            hexButtonShadowColour="#929191"
                            hexButtonTextColour="#0b0c0c"
                            className={styles['regenerate-all-button']}
                          >
                            Generate a question
                          </Button>
                        )}
                      <Button
                        onClick={handleRegenerateClick}
                        data-testid={'rewrite-all-button'}
                        aria-label={'rewrite all'}
                        start={false}
                        hexButtonColour="#f3f2f1"
                        hexButtonHoverColour="#dbdad9"
                        hexButtonShadowColour="#929191"
                        hexButtonTextColour="#0b0c0c"
                        className={styles['regenerate-all-button']}
                      >
                        Regenerate all
                      </Button>
                    </div>
                  ) : (
                    <InsetText
                      className={styles['regenerate-all-inset-text']}
                      data-testid={'regenerations-used-inset-text'}
                    >
                      All regenerations have been used
                    </InsetText>
                  )}
                  <VersionController
                    versions={versions}
                    selectedIndex={selectedIndex}
                    onSelect={handleSelect}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                  />
                </>
              )}
            </div>
            {versions > 1 && (
              <div className={styles['navigation-container']}>
                <InsetText
                  className={`${styles['regenerated-inset-text']}`}
                  data-testid={'regeneration-successful-inset-text'}
                >
                  Content successfully regenerated
                </InsetText>
              </div>
            )}
          </>
        )}
        {editState &&
          displayedContent.map((regeneratedList, index) => (
            <EditBoxContainer
              key={index}
              styleClass={activeIndex === index ? styles['container-edit'] : styles['container-read']}
            >
              <EditBox
                data={regeneratedList[regeneratedList.length - 1]}
                selectedIndex={selectedIndex}
                multipleItemsIndex={index}
                key={index}
                buttons={buttons}
                onEditClick={() => handleEditClick(index)}
                removeCurrentRestyle={() => handleUndo(reviewIndex, index)}
                onSaveOrCancel={handleSaveOrCancel}
                isEditDisabled={activeIndex !== index && activeIndex !== null}
                context={context!}
                listLength={context === TOPIC_OUTLINES ? editGeneratedContent.length : displayedContent.length}
                onFireReprompt={(value: string, question: string) =>
                  handleReprompt(reviewIndex, index, value, question)
                }
              />
            </EditBoxContainer>
          ))}
        <SourcesBox data={sourceMats} disabled={activeIndex !== null} />
        <Button
          onClick={handleButtonClick}
          data-testid={button['data-testid']}
          aria-label={button['aria-label']}
          hexButtonColour={activeIndex !== null ? '#80B79D' : '#00703C'}
          hexButtonHoverColour={activeIndex !== null ? '#80B79D' : '#00572e'}
          disabled={activeIndex !== null}
        >
          {button.text}
        </Button>
      </div>
    </div>
  );
};

export default Edit;

/context/JourneyContext/JourneyContext.tsx

import React, { createContext, ReactNode, useEffect, useContext, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserContext } from '../UserContext/UserContext';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { urlPathBuilder } from '@/helpers/journeys/url-path-builder';
import { ACCESSIBILITY_STATEMENT, AI_NOTICE } from '@/constants/urlpaths';
import { Journey } from '@/models/Journey';
import {
  appendJourneyScreens,
  decrementScreenIndex,
  incrementScreenIndex,
  resetCurrentScreenIndex,
  resetHomeJourney,
  setCurrentScreenIndex,
  setTargetContent,
  setTargetPage,
  spliceEndOfJourneysWithIndex,
  setSpliceList,
} from '@/redux/feature/journey/journey';
import { JourneyContextProps, JourneyProviderProps } from '@/models/JourneyContext';
import { journeys } from '@/helpers/journeys/journeys';

export const JourneyContext = createContext<JourneyContextProps | undefined>(undefined);

/**
 * Function to provide the context of the UJ to components downstream.
 * @returns ReactNode with Journey context.
 */

const JourneyProvider: React.FC<JourneyProviderProps> = ({ children }: ReactNode | any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userContext } = useUserContext();
  const urlPageIndex = searchParams.get('page');
  const { journey, currentScreenIndex, targetPage, targetContent, spliceList } = useAppSelector((state) => state.journey);
  const content = searchParams.get('content');
  const [targetPageToggle, setTargetPageToggle] = useState<boolean>(false);

  function isSubArrayPresent(arr: any[], subArr: any[]) {
    //return if the first element of sub array is present in wider array
    return arr.some((item) => item === subArr[0]);
  }

  function appendJourney(id: string): void {
    if (!isSubArrayPresent(journey.screens, journeys[id].screens)) {
      dispatch(appendJourneyScreens(id));
    }
  };

  function appendGenAIJourneys(ids: string[]): void {
    if (ids && ids.length > 0) {
      ids.forEach((id) => dispatch(appendJourneyScreens(id)));
    }
  };

  function findAndRouteToPageInJourney(context: string, page: string): void {
    if (journey?.screens && journey?.screens?.length) {
      const index = journey.screens.findIndex((screen) => screen.content === context && screen.pageRef === page);
      if (index !== -1) {
        setScreenIndex(index);
      }
    }
  };

  function findNextPageRefIndex(value: string) {
    if (currentScreenIndex && journey.screens && journey.screens.length > 0) {
      for (let i = currentScreenIndex + 1; i < journey.screens.length; i++) {
        if (journey.screens[i].pageRef === value) {
          return i;
        }
      }
    }
    return 0;
  };

  function finishJourney() {
    setScreenIndex(journey.screens.length - 1);
  };

  function currentJourney(): Journey {
    return journey;
  };

  function setHomeJourney(): void {
    dispatch(resetCurrentScreenIndex());
    dispatch(resetHomeJourney());
  };

  function setScreenIndex(index: number): void {
    dispatch(setCurrentScreenIndex(index));
  };

  function nextScreen(): void {
    if (currentScreenIndex < journey.screens.length) {
      dispatch(incrementScreenIndex());
    }
  };

  function previousScreen(): void {
    if (currentScreenIndex === 0) {
      dispatch(resetHomeJourney());
    } else {
      dispatch(decrementScreenIndex());
    }
  };

  function spliceJourney(index: number): void {
    dispatch(spliceEndOfJourneysWithIndex(index));
  };

  function routeBuiltPath(index: number) {
    return urlPathBuilder(userContext, journey, index);
  };

  function pushPath(): void {
    router.push(urlPathBuilder(userContext, journey, currentScreenIndex));
  };

  function setPageAndContextTarget(page: string, content: string) {
    dispatch(setTargetPage(page));
    dispatch(setTargetContent(content));
    setTargetPageToggle(!targetPageToggle);
  };

  useEffect(() => {
    if (journey.screens.length === 0) {
      setHomeJourney();
    }
  }, [journey]);

  useEffect(() => {
    findAndRouteToPageInJourney(targetContent, targetPage);
  }, [targetPage, targetContent, targetPageToggle]);

  useEffect(() => {
    if (![ACCESSIBILITY_STATEMENT, AI_NOTICE].includes(content as string)) pushPath();
    if (spliceList.includes(journey.screens[currentScreenIndex])) {
      spliceJourney(currentScreenIndex + 1);
    }
  }, [currentScreenIndex, content]);

  //Set the state of the pageIndex when the browser navigation is used.
  useEffect(() => {
    if (Number(urlPageIndex) === 0) {
      dispatch(resetHomeJourney());
    }
    dispatch(setCurrentScreenIndex(Number(urlPageIndex)));

  }, [urlPageIndex, dispatch]);

  useEffect(() => {
    dispatch(setSpliceList());
  }, []);

  return (
    <JourneyContext.Provider
      value={{
        appendJourney,
        appendGenAIJourneys,
        setHomeJourney,
        nextScreen,
        previousScreen,
        pushPath,
        currentJourney,
        currentScreenIndex,
        setScreenIndex,
        routeBuiltPath,
        findNextPageRefIndex,
        finishJourney,
        findAndRouteToPageInJourney,
        setPageAndContextTarget,
        content,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};

export function useJourneyContext(): JourneyContextProps {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error('useJourneyContext must be used within an App Provider');
  }
  return context;
}

export default JourneyProvider;

/components/AIIndicator/Indicator.tsx

'use client';

import React from 'react';
import styles from './Indicator.module.scss';
import { DefaultComponentProps } from '@/models/DefaultComponentProps';

interface GDSWarningTextProps extends DefaultComponentProps {
  children: React.ReactNode;
}

const Indicator: React.FC<GDSWarningTextProps> = ({ children, ...props }) => {
  const dataTest = props['data-testid'];
  const ariaLabel = props['aria-label'];

  return (
    <div className={styles.aiIndicator} data-testid={dataTest}>
      <span aria-label={ariaLabel} className={styles.aiIndicatorIcon} aria-hidden="true">
        AI
      </span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-visually-hidden">Warning</span>
        {children}
      </strong>
    </div>
  );
};

export default Indicator;

/components/Descriptor/Descriptor.tsx

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

/components/ReadOnlyBox/ReadOnlyBox.tsx

'use client';

import React from 'react';
import styles from './ReadOnlyBox.module.scss';
import { EditBoxContainer, H4, Link, SectionBreak } from '@/components';
import { addLineBreaks, relabelKeys } from '@/helpers/content-helpers/content-helpers';
import { KNOWLEDGE_CHECK, TOPIC_OUTLINES } from '@/constants/urlpaths';

interface ReadProps {
  data: Record<string, any>[][];
  selectedIndex: number;
  listLength: number;
  context: string;
  removeListItem: (e: Event, index: number) => void;
}

const ReadOnlyBox: React.FC<ReadProps> = ({ data, selectedIndex, listLength = 0, context, removeListItem }) => {
  return (
    <EditBoxContainer styleClass={styles['container-read']}>
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index}>
            {item[item.length - 1] &&
              Object.entries(item[item.length - 1]).map(([key, value], i) => (
                <div key={i}>
                  <H4 data-testid={`read-only-box-h4-${key}-${index}`}>
                    {relabelKeys(key)}
                    {relabelKeys(key) &&
                      `${context !== TOPIC_OUTLINES ? index + 1 : selectedIndex + 1} of ${listLength ? listLength : data.length}`}
                  </H4>
                  <p className="govuk-body-m" data-testid={`read-only-box-content-${key}-${index}`}>
                    {addLineBreaks(value as string)}
                  </p>
                </div>
              ))}
            {context === KNOWLEDGE_CHECK && (
              <div className={styles['remove-link']}>
                <Link href="" onClick={(e) => removeListItem(e, index)} data-testid={`remove-question-link-${index}`}>
                  Remove question
                </Link>
              </div>
            )}
            {data.length - 1 !== index && (
              <SectionBreak
                visible={true}
                level={'MEDIUM'}
                className={''}
                data-testid={`read-only-section-bread-${index}`}
              />
            )}
          </div>
        ))}
    </EditBoxContainer>
  );
};

export default ReadOnlyBox;


/components/SourcesAccordion/SourcesBox.tsx

'use client';

import React from 'react';
import { EditBoxContainer, SourcesAccordion, H4 } from '@/components';
import { SourcesAccordionProps } from './SourcesAccordion';
import styles from './SourcesAccordion.module.scss';

interface SourcesBoxProps {
  data: SourcesAccordionProps[];
  disabled: boolean;
}

const SourcesBox: React.FC<SourcesBoxProps> = ({ data, disabled }) => {
  return (
    <EditBoxContainer styleClass={styles['container-read']}>
      <H4 className={styles.sources_header} data-testid={`source-documents-h4`}>
        Source document extracts
      </H4>
      <p className="govuk-hint govuk-body-m" data-testid={`source-documents-content`}>
        Extracts show the exact information used from source documents
      </p>
      {data && data.map((item, i) => <SourcesAccordion key={i} source={item.source} index={i} disabled={disabled} />)}
    </EditBoxContainer>
  );
};

export default SourcesBox;

/components/EditBox/EditBox.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './EditBox.module.scss';
import { Button, H4, InputArea, Link, LoadingSpinner } from '@/components';
import { addLineBreaks, relabelKeys } from '@/helpers/content-helpers/content-helpers';
import { TOPIC_OUTLINES } from '@/constants/urlpaths';
import { RepromptButtons } from '@/models/Edit';
import { useErrorContext } from '@/context/ErrorContext/ErrorContext';

interface EditProps {
  data: Record<string, any>;
  selectedIndex: number;
  multipleItemsIndex: number;
  buttons: RepromptButtons[];
  onEditClick: () => void;
  onSaveOrCancel: (value: any, multipleItemsIndex: number) => void;
  onFireReprompt: (value: string, question: string) => void;
  removeCurrentRestyle: () => void;
  isEditDisabled: boolean;

  context: string;
  listLength: number;
}

const READ_ONLY = 'read-only';
const MANUAL_EDIT = 'manual-edit';
const REPROMPT = 'reprompt';

const EditBox: React.FC<EditProps> = ({
  data,
  selectedIndex,
  buttons,
  onEditClick,
  onSaveOrCancel,
  isEditDisabled,
  multipleItemsIndex,
  context,
  onFireReprompt,
  listLength,
  removeCurrentRestyle,
}) => {
  const { errorEnabled } = useErrorContext();
  const [boxState, setBoxState] = useState<string>(READ_ONLY);
  const [inputAreas, setInputAreas] = useState<Record<string, any>>(data);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const [loadingOverlayEnabled, setLoadingOverlayEnabled] = useState<boolean>(false);

  const handlePromptClick = (e: Event) => {
    e.preventDefault();
    if (!isEditDisabled) {
      onEditClick();
      setBoxState(REPROMPT);
    }
  };

  const handleChangeClick = (e: Event) => {
    e.preventDefault();
    if (!isEditDisabled) {
      onEditClick();
      setBoxState(MANUAL_EDIT);
    }
  };

  const handleSave = (value: any) => {
    onSaveOrCancel(value, multipleItemsIndex);
    setBoxState(READ_ONLY);
  };

  const handleCancel = (e: Event) => {
    e.preventDefault();
    if (boxState === MANUAL_EDIT) {
      setInputAreas(data);
      onSaveOrCancel(data, multipleItemsIndex);
    } else if (boxState === REPROMPT) {
      removeCurrentRestyle();
      setDisabledButtons((prev) => prev.slice(0, -1));
    }
  };

  const handleRepromptClick = (group: string, value: string, entry: string) => {
    setLoadingOverlayEnabled(true);
    setDisabledButtons((prev) => [...prev, group]);
    onFireReprompt(value, entry);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, key: string) => {
    setInputAreas((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  useEffect(() => {
    setLoadingOverlayEnabled(false);
  }, [errorEnabled]);

  useEffect(() => {
    setInputAreas(data);
    setLoadingOverlayEnabled(false);
  }, [data]);

  const renderContent = (key: string, value: any, i: number) => (
    <div key={i}>
      <div className={styles.headerRow}>
        <H4 data-testid={`edit-box-h4-${key}-${selectedIndex}`}>
          {relabelKeys(key)}
          {relabelKeys(key) &&
            `${context !== TOPIC_OUTLINES ? multipleItemsIndex + 1 : selectedIndex + 1} of ${listLength ? listLength : data.length}`}
        </H4>
        {boxState === REPROMPT && i === 0 && (
          <div className={styles.inlineButtons}>
            {buttons.map((btn, i) => (
              <Button
                key={i}
                disabled={disabledButtons.includes(btn.group)}
                className={!disabledButtons.includes(btn.group) ? styles.editButton : styles.editButtonDisabled}
                onClick={() => handleRepromptClick(btn.group, btn.value, value)}
                data-testid={`edit-box-button-${btn.value}-${selectedIndex}`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      {boxState === MANUAL_EDIT ? (
        <InputArea
          data-testid={`edit-box-text-area-${key}-${selectedIndex}`}
          className={`${styles.textArea}`}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e, key)}
        />
      ) : (
        <p className="govuk-body-m" data-testid={`edit-box-content-${key}-${selectedIndex}`}>
          {addLineBreaks(value)}
        </p>
      )}
    </div>
  );

  return (
    <div>
      {loadingOverlayEnabled ? (
        <LoadingSpinner />
      ) : (
        <>
          {Object.entries(inputAreas).map(([key, value], i) => renderContent(key, value, i))}
          <div className={styles.buttonRow}>
            <div className={styles.buttonContainer}>
              {[MANUAL_EDIT, REPROMPT].includes(boxState) ? (
                <>
                  <Button
                    className={`${styles.saveButton} govuk-button`}
                    onClick={() => handleSave(inputAreas)}
                    data-testid={`edit-box-save-button-${selectedIndex}`}
                  >
                    Save
                  </Button>
                  <Link
                    href=""
                    onClick={(e) => handleCancel(e)}
                    aria-label={'undo link'}
                    className={styles['editing-link']}
                  >
                    Undo
                  </Link>
                </>
              ) : (
                !isEditDisabled && (
                  <div className={styles['edit-links-container']}>
                    {context !== TOPIC_OUTLINES && (
                      <>
                        <Link
                          href=""
                          onClick={(e) => handlePromptClick(e)}
                          data-testid={'use-ai-prompts-link'}
                          aria-label={'change link'}
                          className={styles['edit-link']}
                        >
                          Use AI prompts
                        </Link>
                        <br />
                      </>
                    )}
                    <Link
                      href=""
                      onClick={(e) => handleChangeClick(e)}
                      data-testid={'manually-edit-link'}
                      aria-label={'change link'}
                      className={styles['edit-link']}
                    >
                      Edit manually
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditBox;

const EditBoxContainer: React.FC<{ children: any; styleClass: string }> = ({ children, styleClass }) => {
  return <div className={styleClass}>{children}</div>;
};

export { EditBoxContainer };

/components/VersionController/VersionController.tsx

import React from 'react';
import styles from './VersionController.module.scss';

interface VersionControllerProps {
  versions: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const VersionController: React.FC<VersionControllerProps> = ({
  versions,
  selectedIndex,
  onSelect,
  onPrevious,
  onNext,
}) => {
  if (versions < 2) return null; // Do not render the component if there's less than 2 versions

  const versionLinks = Array.from({ length: versions }, (_, i) => `V${i + 1}`);

  return (
    <div className={styles['version-navigation']} data-testid={'version-navigation'}>
      <button
        className={`${styles['gds-button']} govuk-body-m ${selectedIndex === 0 ? styles['disabled'] : ''}`}
        onClick={onPrevious}
        disabled={selectedIndex === 0}
        data-testid={'version-navigation-previous-button'}
      >
        <strong>Previous</strong>
      </button>
      {versionLinks.map((version, index) => (
        <button
          key={index}
          className={`${styles['gds-button']} govuk-body-m ${selectedIndex === index ? styles['selected'] : ''}`}
          onClick={() => onSelect(index)}
          data-testid={`version-navigation-version-button-${index}`}
        >
          {version}
        </button>
      ))}
      <button
        className={`${styles['gds-button']} govuk-body-m ${selectedIndex === versions - 1 ? styles['disabled'] : ''}`}
        onClick={onNext}
        disabled={selectedIndex === versions - 1}
        data-testid={'version-navigation-next-button'}
      >
        <strong>Next</strong>
      </button>
    </div>
  );
};

export default VersionController;


/components/InsetText/InsetText.tsx

'use client';

import React from 'react';

type GDSInsetTextProps = {
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
  ref?: React.MutableRefObject<HTMLDivElement | null>;
};

export default function InsetText({ children, ref, className, ...props }: GDSInsetTextProps) {
  const dataTest = props['data-testid'];

  return (
    <div ref={ref} className={`${className} govuk-inset-text`} data-testid={dataTest}>
      <p>{children}</p>
    </div>
  );
}


/components/EditBox/EditBox.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './EditBox.module.scss';
import { Button, H4, InputArea, Link, LoadingSpinner } from '@/components';
import { addLineBreaks, relabelKeys } from '@/helpers/content-helpers/content-helpers';
import { TOPIC_OUTLINES } from '@/constants/urlpaths';
import { RepromptButtons } from '@/models/Edit';
import { useErrorContext } from '@/context/ErrorContext/ErrorContext';

interface EditProps {
  data: Record<string, any>;
  selectedIndex: number;
  multipleItemsIndex: number;
  buttons: RepromptButtons[];
  onEditClick: () => void;
  onSaveOrCancel: (value: any, multipleItemsIndex: number) => void;
  onFireReprompt: (value: string, question: string) => void;
  removeCurrentRestyle: () => void;
  isEditDisabled: boolean;

  context: string;
  listLength: number;
}

const READ_ONLY = 'read-only';
const MANUAL_EDIT = 'manual-edit';
const REPROMPT = 'reprompt';

const EditBox: React.FC<EditProps> = ({
  data,
  selectedIndex,
  buttons,
  onEditClick,
  onSaveOrCancel,
  isEditDisabled,
  multipleItemsIndex,
  context,
  onFireReprompt,
  listLength,
  removeCurrentRestyle,
}) => {
  const { errorEnabled } = useErrorContext();
  const [boxState, setBoxState] = useState<string>(READ_ONLY);
  const [inputAreas, setInputAreas] = useState<Record<string, any>>(data);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const [loadingOverlayEnabled, setLoadingOverlayEnabled] = useState<boolean>(false);

  const handlePromptClick = (e: Event) => {
    e.preventDefault();
    if (!isEditDisabled) {
      onEditClick();
      setBoxState(REPROMPT);
    }
  };

  const handleChangeClick = (e: Event) => {
    e.preventDefault();
    if (!isEditDisabled) {
      onEditClick();
      setBoxState(MANUAL_EDIT);
    }
  };

  const handleSave = (value: any) => {
    onSaveOrCancel(value, multipleItemsIndex);
    setBoxState(READ_ONLY);
  };

  const handleCancel = (e: Event) => {
    e.preventDefault();
    if (boxState === MANUAL_EDIT) {
      setInputAreas(data);
      onSaveOrCancel(data, multipleItemsIndex);
    } else if (boxState === REPROMPT) {
      removeCurrentRestyle();
      setDisabledButtons((prev) => prev.slice(0, -1));
    }
  };

  const handleRepromptClick = (group: string, value: string, entry: string) => {
    setLoadingOverlayEnabled(true);
    setDisabledButtons((prev) => [...prev, group]);
    onFireReprompt(value, entry);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, key: string) => {
    setInputAreas((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  useEffect(() => {
    setLoadingOverlayEnabled(false);
  }, [errorEnabled]);

  useEffect(() => {
    setInputAreas(data);
    setLoadingOverlayEnabled(false);
  }, [data]);

  const renderContent = (key: string, value: any, i: number) => (
    <div key={i}>
      <div className={styles.headerRow}>
        <H4 data-testid={`edit-box-h4-${key}-${selectedIndex}`}>
          {relabelKeys(key)}
          {relabelKeys(key) &&
            `${context !== TOPIC_OUTLINES ? multipleItemsIndex + 1 : selectedIndex + 1} of ${listLength ? listLength : data.length}`}
        </H4>
        {boxState === REPROMPT && i === 0 && (
          <div className={styles.inlineButtons}>
            {buttons.map((btn, i) => (
              <Button
                key={i}
                disabled={disabledButtons.includes(btn.group)}
                className={!disabledButtons.includes(btn.group) ? styles.editButton : styles.editButtonDisabled}
                onClick={() => handleRepromptClick(btn.group, btn.value, value)}
                data-testid={`edit-box-button-${btn.value}-${selectedIndex}`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      {boxState === MANUAL_EDIT ? (
        <InputArea
          data-testid={`edit-box-text-area-${key}-${selectedIndex}`}
          className={`${styles.textArea}`}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e, key)}
        />
      ) : (
        <p className="govuk-body-m" data-testid={`edit-box-content-${key}-${selectedIndex}`}>
          {addLineBreaks(value)}
        </p>
      )}
    </div>
  );

  return (
    <div>
      {loadingOverlayEnabled ? (
        <LoadingSpinner />
      ) : (
        <>
          {Object.entries(inputAreas).map(([key, value], i) => renderContent(key, value, i))}
          <div className={styles.buttonRow}>
            <div className={styles.buttonContainer}>
              {[MANUAL_EDIT, REPROMPT].includes(boxState) ? (
                <>
                  <Button
                    className={`${styles.saveButton} govuk-button`}
                    onClick={() => handleSave(inputAreas)}
                    data-testid={`edit-box-save-button-${selectedIndex}`}
                  >
                    Save
                  </Button>
                  <Link
                    href=""
                    onClick={(e) => handleCancel(e)}
                    aria-label={'undo link'}
                    className={styles['editing-link']}
                  >
                    Undo
                  </Link>
                </>
              ) : (
                !isEditDisabled && (
                  <div className={styles['edit-links-container']}>
                    {context !== TOPIC_OUTLINES && (
                      <>
                        <Link
                          href=""
                          onClick={(e) => handlePromptClick(e)}
                          data-testid={'use-ai-prompts-link'}
                          aria-label={'change link'}
                          className={styles['edit-link']}
                        >
                          Use AI prompts
                        </Link>
                        <br />
                      </>
                    )}
                    <Link
                      href=""
                      onClick={(e) => handleChangeClick(e)}
                      data-testid={'manually-edit-link'}
                      aria-label={'change link'}
                      className={styles['edit-link']}
                    >
                      Edit manually
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditBox;

const EditBoxContainer: React.FC<{ children: any; styleClass: string }> = ({ children, styleClass }) => {
  return <div className={styleClass}>{children}</div>;
};

export { EditBoxContainer };


/components/Details/Details.tsx

/* eslint-disable react/prop-types */
'use react';
import { DetailsContentProps } from '@/models/Details';
import { addLineBreaks } from '@/helpers/content-helpers/content-helpers';

const Details: React.FC<DetailsContentProps> = ({ detail, summary, ...props }) => {
  const dataTest = props['data-testid'];
  return (
    <>
      {detail && summary && (
        <details className="govuk-details">
          <summary className="govuk-details__summary" data-testid={dataTest + '-summary'}>
            <span className="govuk-details__summary-text">{summary}</span>
          </summary>
          <div className="govuk-details__text" data-testid={dataTest + '-detail'}>
            {addLineBreaks(detail.statement)}
            {detail.bullets && (
              <ul data-testid={dataTest + '-bullets'}>
                {detail.bullets.map((item, index) => (
                  <li data-testid={dataTest + '-bullet-row-' + index} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      )}
    </>
  );
};

export default Details;

/components/SourcesAccordion/SourcesAccordion.tsx

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { H3, H4, H5, H6, ChevronUp, ChevronDown } from '@/components';
import Markdown from 'markdown-to-jsx';
import { formatTitle, formatMarkdown, MarkdownConfig } from '@/helpers/message-helpers';
import styles from './SourcesAccordion.module.scss';

export type SourcesAccordionProps = {
  source: { title: string; chunks: string };
  index: number;

  disabled?: boolean;
};

export default function SourcesAccordion({ source, index, disabled }: Readonly<SourcesAccordionProps>) {
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFocused(focused);
  }, [focused]);

  useEffect(() => {
    if (accordionContentRef.current) {
      accordionContentRef.current.focus();
    }
  }, [expanded]);

  /**
   * Helper component so VoiceOver/screen readers can state the following text is a link e.g. "Link. <Display text for link>"
   *
   * @param children display text for link
   * @param props other props e.g. className
   * @returns void
   */
  const MarkDownLink = ({ children, ...props }: { children: React.ReactNode }) => (
    <a {...props} aria-label={`link. ${children}`}>
      {children}
    </a>
  );

  return (
    <div className={styles.sources_accordion} data-testid={`sources-accordion-${index}`}>
      <div className={styles.accordion_heading} data-testid={`sources-accordion-heading-${index}`}>
        <H5
          className={styles.accordion_title + ' ' + styles.accordion_left}
          data-testid={`sources-accordion-h5-${index}`}
        >
          {formatTitle(source.title, index)}
        </H5>
        <button
          className={styles.accordion_button + ' ' + styles.accordion_right}
          aria-label={`${expanded ? 'Close' : 'View'} source extracts`}
          tabIndex={0}
          aria-expanded={expanded}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onClick={() => setExpanded(!expanded)}
          data-testid={`sources-accordion-toggle-button-${index}`}
          disabled={disabled}
        >
          {expanded ? <ChevronUp focus={focused} /> : <ChevronDown focus={focused} />}
          <span
            data-testid={`sources-accordion-close-${index}`}
          >{`${expanded ? 'Close' : 'View'} source extracts`}</span>
        </button>
      </div>
      {expanded && (
        <div
          className={styles.accordion_content}
          role="alert"
          ref={accordionContentRef}
          aria-hidden={!expanded}
          hidden={!expanded}
          data-testid={`sources-accordion-extract-text-${index}`}
          tabIndex={0}
        >
          <Markdown
            data-testid={`sources-accordion-markdown-${index}`}
            options={{
              overrides: {
                ...MarkdownConfig,
                h1: { component: H3 }, // "Extact 1": ... "Extract 2" ...
                h2: { component: H4 }, // Main headings from intranet sources
                h3: { component: H5 }, // Sub-headings from intranet sources
                h4: { component: H6 }, // Sub-headings from intranet sources
                a: {
                  component: MarkDownLink,
                  props: {
                    target: '_blank',
                    className: styles.markdown_link,
                    tabIndex: 0,
                  },
                },
              },
            }}
          >
            {formatMarkdown(source.chunks)}
          </Markdown>
        </div>
      )}
    </div>
  );
}

/components/SourcesAccordion/SourcesBox.tsx

'use client';

import React from 'react';
import { EditBoxContainer, SourcesAccordion, H4 } from '@/components';
import { SourcesAccordionProps } from './SourcesAccordion';
import styles from './SourcesAccordion.module.scss';

interface SourcesBoxProps {
  data: SourcesAccordionProps[];
  disabled: boolean;
}

const SourcesBox: React.FC<SourcesBoxProps> = ({ data, disabled }) => {
  return (
    <EditBoxContainer styleClass={styles['container-read']}>
      <H4 className={styles.sources_header} data-testid={`source-documents-h4`}>
        Source document extracts
      </H4>
      <p className="govuk-hint govuk-body-m" data-testid={`source-documents-content`}>
        Extracts show the exact information used from source documents
      </p>
      {data && data.map((item, i) => <SourcesAccordion key={i} source={item.source} index={i} disabled={disabled} />)}
    </EditBoxContainer>
  );
};

export default SourcesBox;



all models 

import { ButtonProps } from './Button';
import { DescriptorContentProps } from './Descriptor';
import { DetailsContentProps } from './Details';
import { GDSWarningTextProps } from './Warning';

export interface EditContent {
  descriptor: DescriptorContentProps[];
  editDescriptor?: DescriptorContentProps[];
  details: DetailsContentProps[];
  warning: GDSWarningTextProps;
  button: ButtonProps;
  buttons: RepromptButtons[];
}

export interface RepromptButtons {
  label: string;
  value: string;
  group: string;
}


import { DefaultComponentProps } from './DefaultComponentProps';

export interface DetailsContentProps extends DefaultComponentProps {
  summary: string;
  detail: {
    statement: string;
    bullets?: string[];
  };
}

import { DefaultComponentProps } from './DefaultComponentProps';

export interface ButtonProps extends DefaultComponentProps {
  icon?: React.ReactNode;
  hexButtonColour?: string;
  hexButtonHoverColour?: string;
  hexButtonShadowColour?: string;
  hexButtonTextColour?: string;
  className?: string;
  text?: string;
  start?: boolean;
  onClick?: (e?: Event) => void;
  children?: React.ReactNode;
}

export interface DefaultComponentProps {
  id?: string;
  'data-testid'?: string;
  'aria-label'?: string;
  disabled?: boolean;
}

