import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAppSelector } from '../../../redux/hooks';
import { useFunctionContext } from '../../../context/FunctionContext/FunctionContext';
import Overview from './page';

jest.mock('../../../redux/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('../../../context/FunctionContext/FunctionContext', () => ({
  useFunctionContext: jest.fn(),
}));

describe('Overview Page', () => {
  const mockPrimaryButtonClick = jest.fn();
  const mockOverviewCreateClick = jest.fn();
  const mockOverviewReviewContentClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFunctionContext as jest.Mock).mockReturnValue({
      primaryButtonClick: mockPrimaryButtonClick,
      overviewCreateClick: mockOverviewCreateClick,
      overviewReviewContentClick: mockOverviewReviewContentClick,
    });
  });

  test('renders the Overview page with correct content', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          overviewContent: {
            descriptor: {
              title: 'Test Title',
              description: 'Test Description',
              textSize: 2,
              'data-testid': 'test-title-descriptor',
            },
            button: {
              text: 'Finish',
              start: false,
              'data-testid': 'test-finish-button',
              'aria-label': 'Finish button',
            },
            target: 'TEST_TARGET',
          },
        },
        configuration: {
          overview: [
            {
              heading: 'Test Heading',
              sections: [
                { label: 'Section 1', state: 'complete', value: 'value1' },
                { label: 'Section 2', state: 'not-ready', value: 'value2' },
              ],
              'data-testid': 'overview-list-1',
              'aria-label': 'Overview list 1',
            },
          ],
        },
      })
    );

    render(<Overview />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Finish')).toBeInTheDocument();
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText("Can't start yet")).toBeInTheDocument();
  });

  test('calls primaryButtonClick when the button is clicked', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          overviewContent: {
            descriptor: {
              title: 'Test Title',
              description: 'Test Description',
              textSize: 2,
            },
            button: {
              text: 'Finish',
              start: false,
              'data-testid': 'test-finish-button',
              'aria-label': 'Finish button',
            },
            target: 'TEST_TARGET',
          },
        },
        configuration: {
          overview: [
            {
              heading: 'Test Heading',
              sections: [{ label: 'Section 1', state: 'complete', value: 'value1' }],
            },
          ],
        },
      })
    );

    render(<Overview />);
    const finishButton = screen.getByText('Finish');

    fireEvent.click(finishButton);
    expect(mockPrimaryButtonClick).toHaveBeenCalledWith('TEST_TARGET');
  });

  test('disables button when sections are incomplete', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          overviewContent: {
            descriptor: {
              title: 'Test Title',
              description: 'Test Description',
              textSize: 2,
            },
            button: {
              text: 'Finish',
              start: false,
              'data-testid': 'test-finish-button',
              'aria-label': 'Finish button',
            },
            target: 'TEST_TARGET',
          },
        },
        configuration: {
          overview: [
            {
              heading: 'Test Heading',
              sections: [
                { label: 'Section 1', state: 'in-progress', value: 'value1' },
              ],
            },
          ],
        },
      })
    );

    render(<Overview />);
    const finishButton = screen.getByText('Finish');
    expect(finishButton).toBeDisabled();
  });

  test('triggers overviewCreateClick when OverviewList create button is clicked', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          overviewContent: {
            descriptor: {
              title: 'Test Title',
              description: 'Test Description',
              textSize: 2,
            },
            button: {
              text: 'Finish',
              start: false,
              'data-testid': 'test-finish-button',
              'aria-label': 'Finish button',
            },
            target: 'TEST_TARGET',
          },
        },
        configuration: {
          overview: [
            {
              heading: 'Test Heading',
              sections: [
                { label: 'Section 1', state: 'ready', value: 'value1' },
              ],
            },
          ],
        },
      })
    );

    render(<Overview />);
    const createButton = screen.getByText('Create');
    fireEvent.click(createButton);

    expect(mockOverviewCreateClick).toHaveBeenCalledWith('value1');
  });

  test('triggers overviewReviewContentClick when overview review link is clicked', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          overviewContent: {
            descriptor: {
              title: 'Test Title',
              description: 'Test Description',
              textSize: 2,
            },
            button: {
              text: 'Finish',
              start: false,
              'data-testid': 'test-finish-button',
              'aria-label': 'Finish button',
            },
            target: 'TEST_TARGET',
          },
        },
        configuration: {
          overview: [
            {
              heading: 'Test Heading',
              sections: [
                { label: 'Section 1', state: 'complete', value: 'value1' },
              ],
            },
          ],
        },
      })
    );

    render(<Overview />);
    const reviewLink = screen.getByText('Section 1');
    fireEvent.click(reviewLink);

    expect(mockOverviewReviewContentClick).toHaveBeenCalledWith('value1');
  });

  test('does not render button if all sections are incomplete', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          overviewContent: {
            descriptor: {
              title: 'Test Title',
              description: 'Test Description',
              textSize: 2,
            },
            button: {
              text: 'Finish',
              start: false,
              'data-testid': 'test-finish-button',
              'aria-label': 'Finish button',
            },
            target: 'TEST_TARGET',
          },
        },
        configuration: {
          overview: [
            {
              heading: 'Test Heading',
              sections: [
                { label: 'Section 1', state: 'not-ready', value: 'value1' },
                { label: 'Section 2', state: 'not-ready', value: 'value2' },
              ],
            },
          ],
        },
      })
    );

    render(<Overview />);
    expect(screen.queryByText('Finish')).not.toBeInTheDocument();
  });
});