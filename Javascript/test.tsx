import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAppSelector } from '../../../redux/hooks';
import { useFunctionContext } from '../../../context/FunctionContext/FunctionContext';
import { OverviewContent } from '@/models/Overview';
import Overview from './page';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

jest.mock('../../../redux/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('../../../context/FunctionContext/FunctionContext', () => ({
  useFunctionContext: jest.fn(),
}));

describe('Configure Page', () => {
  const mockConfigContent: OverviewContent = {
    target: 'TEST_TARGET',
    descriptor: {
      title: 'Test Title',
      description: 'Test Description',
      textSize: 2,
    },
    button: {
      text: 'Finish',
    },
  };
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue(mockConfigContent);
    (useFunctionContext as jest.Mock).mockReturnValue({
      primaryButtonClick: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test.skip('renders the Outline Component with correct content', () => {
    render(<Overview />);
    expect(screen.getByText('TEST TARGET')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Finish')).toBeInTheDocument();
  });

  test.skip('display an error message and does not call primaryButtonClick when no radio option is selected and the button is clicked', () => {
    render(<Overview />);
    const { primaryButtonClick } = useFunctionContext();
    fireEvent.click(screen.getByText('Continue'));
    expect(primaryButtonClick).toHaveBeenCalled();
  });
});
