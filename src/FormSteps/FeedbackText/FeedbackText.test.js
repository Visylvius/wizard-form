import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FeedbackText from './index';

describe('FeedbackText (Unit)', () => {
  const mockOnChange = jest.fn();
  const renderFeedbackText = props =>
    render(
      <FeedbackText
        currentStep={5}
        feedbackValue=''
        onChange={mockOnChange}
        testId='FormStep-TextArea'
      />,
    );

  describe('render', () => {
    test('should render properly', () => {
      const tree = renderer.create(
        <FeedbackText
          currentStep={5}
          feedbackValue='feedbackVal'
          onChange={jest.fn}
        />,
      );

      expect(tree).toMatchSnapshot();
    });

    test('should render null if the step is not 5', () => {
      const tree = renderer.create(
        <FeedbackText
          currentStep={3}
          feedbackValue='feedbackVal'
          onChange={jest.fn}
        />,
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Intergration', () => {
    test('should properly call onChange', async () => {
      const { getByTestId } = renderFeedbackText();

      userEvent.type(getByTestId('FormStep-TextArea'), 'testing 123');

      await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
    });
  });
});
