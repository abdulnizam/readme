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
