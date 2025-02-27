
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

