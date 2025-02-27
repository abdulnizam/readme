import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Edit from './page';
import { useFunctionContext } from '../../../context/FunctionContext/FunctionContext';
import { useAppSelector } from '../../../redux/hooks';
import { useConfigurationContext } from '../../../context/ConfigurationContext/ConfigurationContext';
import { useJourneyContext } from '../../../context/JourneyContext/JourneyContext';
import { useErrorContext } from '../../../context/ErrorContext/ErrorContext';
import { KNOWLEDGE_CHECK } from '../../../constants/urlpaths';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

jest.mock('../../../context/ErrorContext/ErrorContext', () => ({
  useErrorContext: jest.fn(),
}));

jest.mock('../../../redux/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('../../../context/FunctionContext/FunctionContext', () => ({
  useFunctionContext: jest.fn(),
}));

jest.mock('../../../context/JourneyContext/JourneyContext', () => ({
  useJourneyContext: jest.fn(),
}));

jest.mock('../../../context/ConfigurationContext/ConfigurationContext', () => ({
  useConfigurationContext: jest.fn(),
}));

describe('Edit Component', () => {
  const mockEditPrimaryClick = jest.fn();
  const mockRegenerateContentClick = jest.fn();
  const mockContentVersionClick = jest.fn();
  const mockFireRepromptContentStyle = jest.fn();
  const mockRemoveEditContextItem = jest.fn();
  const mockAddNewEditContextItem = jest.fn();

  const mockUseFunctionContext = useFunctionContext as jest.Mock;
  const mockUseAppSelector = useAppSelector as jest.Mock;
  const mockUseConfigurationContext = useConfigurationContext as jest.Mock;
  const mockUseJourneyContext = useJourneyContext as jest.Mock;

  beforeEach(() => {
    (useErrorContext as jest.Mock).mockReturnValue({ errorEnabled: false });

    mockUseFunctionContext.mockReturnValue({
      editPrimaryClick: mockEditPrimaryClick,
      regenerateContentClick: mockRegenerateContentClick,
      contentVersionClick: mockContentVersionClick,
      fireRepromptContentStyle: mockFireRepromptContentStyle,
      removeEditContextItem: mockRemoveEditContextItem,
      addNewEditContextItem: mockAddNewEditContextItem,
    });

    mockUseAppSelector.mockImplementation((selector) =>
      selector({
        generatedContent: {
          reviewIndex: 0,
        },
        content: {
          editContent: {
            descriptor: [{ title: 'Descriptor Title 1' }],
            newQuestionCount: 2,
          },
        },
      }),
    );

    mockUseConfigurationContext.mockReturnValue({
      editGeneratedContent: [
        {
          versions: [[[{ question: 'Test Question?', choices: 'A,B,C', answer: 'A' }]]],
          selectedVersion: 0,
        },
      ],
    });

    mockUseJourneyContext.mockReturnValue({
      content: KNOWLEDGE_CHECK,
    });
  });

  test('renders the Edit component with correct data', () => {
    render(<Edit />);
    expect(screen.getByText(/Descriptor Title 1 topic/i)).toBeInTheDocument();
  });

  test('handles removing a question', () => {
    render(<Edit />);
    fireEvent.click(screen.getByTestId(/remove-question-link-\d+/i));
    expect(mockRemoveEditContextItem).toHaveBeenCalled();
  });

  test('handles adding a question', () => {
    render(<Edit />);
    fireEvent.click(screen.getByTestId('generate-question-button'));
    expect(mockAddNewEditContextItem).toHaveBeenCalled();
  });

  test('renders InsetText when regenerations are used', () => {
    render(<Edit />);
    expect(screen.getByTestId('regenerations-used-inset-text')).toBeInTheDocument();
  });

  test('handles AI reprompt click correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByTestId('use-ai-prompts-link'));
    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });
});