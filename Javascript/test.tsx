import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Edit from './page';
import { useFunctionContext } from '../../../context/FunctionContext/FunctionContext';
import { useAppSelector } from '../../../redux/hooks';
import { useConfigurationContext } from '../../../context/ConfigurationContext/ConfigurationContext';
import { useJourneyContext } from '../../../context/JourneyContext/JourneyContext';
import { KNOWLEDGE_CHECK, TOPIC_OUTLINES, CONTINUOUS_KNOWLEDGE } from '../../../constants/urlpaths';

jest.mock('../../../context/FunctionContext/FunctionContext', () => ({
  useFunctionContext: jest.fn(),
}));

jest.mock('../../../redux/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('../../../context/ConfigurationContext/ConfigurationContext', () => ({
  useConfigurationContext: jest.fn(),
}));

jest.mock('../../../context/JourneyContext/JourneyContext', () => ({
  useJourneyContext: jest.fn(),
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

  beforeEach(() => {
    jest.clearAllMocks();

    (useFunctionContext as jest.Mock).mockReturnValue({
      editPrimaryClick: mockEditPrimaryClick,
      saveEditedContent: mockSaveEditedContent,
      regenerateContentClick: mockRegenerateContentClick,
      contentVersionClick: mockContentVersionClick,
      fireRepromptContentStyle: mockFireRepromptContentStyle,
      removeCurrentRestyle: mockRemoveCurrentRestyle,
      addNewEditContextItem: mockAddNewEditContextItem,
      removeEditContextItem: mockRemoveEditContextItem,
    });

    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: {
          editContent: {
            descriptor: [{ title: 'Descriptor Title 1', description: 'Description 1', hint: 'Hint 1', textSize: 4 }],
            editDescriptor: [{ title: 'Edit Descriptor Title 1', description: 'Edit Description 1', textSize: 4 }],
            details: [{ detail: { statement: 'Test statement1', bullets: ['Test bullets1'] }, summary: 'Test summary1' }],
            warning: { children: 'Warning message', 'data-testid': 'warning', 'aria-label': 'Warning' },
            button: { text: 'Save', 'data-testid': 'button', 'aria-label': 'Save Button' },
          },
        },
        generatedContent: {
          reviewIndex: 0,
          reviewHeader: 'Test Header',
        },
      })
    );

    (useConfigurationContext as jest.Mock).mockReturnValue({
      editGeneratedContent: [
        { versions: [[[{ content: 'Version 1' }]], [[{ content: 'Version 2' }]]], selectedVersion: 0, review: 'pending', regenerationsLeft: 1 },
      ],
      sourceMaterials: [{ title: 'Source 1', chunks: 'Source Description 1' }],
    });

    (useJourneyContext as jest.Mock).mockReturnValue({
      content: KNOWLEDGE_CHECK,
    });
  });

  test('renders the Edit component with correct data', () => {
    render(<Edit />);
    expect(screen.getByText(/Descriptor Title 1 topic/i)).toBeInTheDocument();
  });

  test('handles button click correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Save'));
    expect(mockEditPrimaryClick).toHaveBeenCalled();
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

  test('renders InsetText when regenerations are used', async () => {
    (useConfigurationContext as jest.Mock).mockReturnValueOnce({
      editGeneratedContent: [
        { versions: [[[{ content: 'Version 1' }]]], selectedVersion: 0, review: 'pending', regenerationsLeft: 0 },
      ],
      sourceMaterials: [],
    });

    render(<Edit />);
    await waitFor(() => {
      expect(screen.getByTestId('regenerations-used-inset-text')).toBeInTheDocument();
    });
  });

  test('handles edit mode transition correctly', () => {
    render(<Edit />);
    const editButton = screen.getByText('Save');
    fireEvent.click(editButton);
    expect(mockEditPrimaryClick).toHaveBeenCalled();
  });

  test('handles AI reprompt click correctly', async () => {
    render(<Edit />);

    await waitFor(() => {
      expect(screen.queryByTestId('use-ai-prompts-link')).not.toBeNull();
    });

    const aiButton = screen.getByTestId('use-ai-prompts-link');
    fireEvent.click(aiButton);

    expect(mockFireRepromptContentStyle).toHaveBeenCalled();
  });

  test('handles adding and removing a question', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Generate a question'));
    expect(mockAddNewEditContextItem).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId(/remove-question-link-\d+/i));
    expect(mockRemoveEditContextItem).toHaveBeenCalled();
  });

  test('renders version navigation buttons correctly', () => {
    render(<Edit />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('handles different contexts correctly', () => {
    (useJourneyContext as jest.Mock).mockReturnValue({ content: TOPIC_OUTLINES });
    render(<Edit />);
    expect(screen.getByText(/name and objectives individually/i)).toBeInTheDocument();
  });

  test('handles switching versions', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('V1'));
    expect(mockContentVersionClick).toHaveBeenCalledWith(0, 0);

    fireEvent.click(screen.getByText('V2'));
    expect(mockContentVersionClick).toHaveBeenCalledWith(1, 0);
  });

  test('displays regenerated inset text when more than one version exists', () => {
    render(<Edit />);
    expect(screen.getByTestId('regeneration-successful-inset-text')).toBeInTheDocument();
  });

  test('handles removing a question correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByTestId('remove-question-link-0'));
    expect(mockRemoveEditContextItem).toHaveBeenCalled();
  });

  test('handles undo correctly', () => {
    render(<Edit />);
    fireEvent.click(screen.getByText('Undo'));
    expect(mockRemoveCurrentRestyle).toHaveBeenCalled();
  });

  test('ensures AI Reprompt is disabled if editState is false', () => {
    render(<Edit />);
    expect(screen.queryByTestId('use-ai-prompts-link')).toBeNull();
  });
});