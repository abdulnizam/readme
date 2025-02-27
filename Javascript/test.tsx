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
  const mockSaveEditedContent = jest.fn();
  const mockRegenerateContentClick = jest.fn();
  const mockContentVersionClick = jest.fn();
  const mockFireRepromptContentStyle = jest.fn();
  const mockRemoveCurrentRestyle = jest.fn();
  const mockAddNewEditContextItem = jest.fn();
  const mockRemoveEditContextItem = jest.fn();

  const mockUseFunctionContext = useFunctionContext as jest.Mock;
  const mockUseAppSelector = useAppSelector as jest.Mock;
  const mockUseConfigurationContext = useConfigurationContext as jest.Mock;
  const mockUseJourneyContext = useJourneyContext as jest.Mock;

  beforeEach(() => {
    (useErrorContext as jest.Mock).mockReturnValue({
      errorEnabled: false,
    });
    mockUseFunctionContext.mockReturnValue({
      editPrimaryClick: mockEditPrimaryClick,
      saveEditedContent: mockSaveEditedContent,
      regenerateContentClick: mockRegenerateContentClick,
      contentVersionClick: mockContentVersionClick,
      fireRepromptContentStyle: mockFireRepromptContentStyle,
      removeCurrentRestyle: mockRemoveCurrentRestyle,
      addNewEditContextItem: mockAddNewEditContextItem,
      removeEditContextItem: mockRemoveEditContextItem,
    });
    mockUseAppSelector.mockImplementation((selector) =>
      selector({
        content: {
          editContent: {
            descriptor: [
              { title: 'Descriptor Title 1', description: 'Description 1', hint: 'Hint 1', textSize: 4, 'data-testid': 'descriptor-1' },
              { title: 'Descriptor Title 2', description: 'Description 2', hint: 'Hint 2', textSize: 4, 'data-testid': 'descriptor-2' },
            ],
            editDescriptor: [
              { title: 'Edit Descriptor Title 1', description: 'Edit Description 1', textSize: 4, 'data-testid': 'edit-descriptor-1' },
              { title: 'Edit Descriptor Title 2', description: 'Edit Description 2', textSize: 4, 'data-testid': 'edit-descriptor-2' },
            ],
            details: [
              { detail: { statement: 'Test statement1', bullets: ['Test bullets1'] }, summary: 'Test summary1' },
              { detail: { statement: 'Test statement2', bullets: ['Test bullets2'] }, summary: 'Test summary2' },
            ],
            warning: { children: 'Warning message', 'data-testid': 'warning', 'aria-label': 'Warning' },
            button: { text: 'Save', 'data-testid': 'button', 'aria-label': 'Save Button' },
            buttons: [{ group: 'group1', label: 'Button 1', value: 'button1' }],
          },
        },
        generatedContent: {
          reviewIndex: 0,
          reviewHeader: 'Test Header',
        },
      }),
    );
    mockUseConfigurationContext.mockReturnValue({
      editGeneratedContent: [
        { versions: [[[{ content: 'Version 1' }]], [[{ content: 'Version 2' }]]], selectedVersion: 0, review: 'pending' },
      ],
      sourceMaterials: [{ title: 'Source 1', chunks: 'Source Description 1' }],
    });
    mockUseJourneyContext.mockReturnValue({
      content: KNOWLEDGE_CHECK,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Edit component with correct data', () => {
    render(<Edit />);
    expect(screen.getByText(/Descriptor Title 1 topic/i)).toBeInTheDocument();
  });

  test('handles button click correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Save'));
    expect(mockEditPrimaryClick).not.toHaveBeenCalled();
  });

  test('handles regenerate content click correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Regenerate all'));
    expect(mockRegenerateContentClick).toHaveBeenCalled();
  });

  test('handles version selection correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('V2'));
    expect(mockContentVersionClick).toHaveBeenCalled();
  });

  test('renders source materials correctly', () => {
    render(<Edit />);
    expect(screen.getByText('Source document extracts')).toBeInTheDocument();
  });

  test('handles edit descriptor rendering correctly', () => {
    render(<Edit />);
    expect(screen.getByText('Edit Descriptor Title 1')).toBeInTheDocument();
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

  test('renders version navigation buttons correctly', () => {
    render(<Edit />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
