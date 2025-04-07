import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestFeedbackExpanded from './TestFeedbackExpanded';

import * as api from '@/api/feedback';

// ✅ Mock the entire module before any test
jest.mock('@/api/feedback');

describe('Event listeners run', () => {
  it('onClick for submit button runs', async () => {
    // ✅ Tell TypeScript this is a mock
    const mockedSendFeedback = api.sendFeedback as jest.Mock;
    mockedSendFeedback.mockResolvedValue({ id: 2 });

    render(<TestFeedbackExpanded />);
    const button = screen.getByTestId('feedback-expanded-submit');
    
    await userEvent.click(button);

    expect(mockedSendFeedback).toHaveBeenCalledWith(/* expected args */);
  });
});