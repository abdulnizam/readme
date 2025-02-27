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
