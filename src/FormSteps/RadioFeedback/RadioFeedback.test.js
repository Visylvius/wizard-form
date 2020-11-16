import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioFeedback from './index';

describe('RadioFeedback (Unit)', () => {
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();
  const renderRadioFeedback = props =>
    render(
      <RadioFeedback
        currentStep={4}
        onChange={mockOnChange}
        onButtonClick={mockOnClick}
        {...props}
      />,
    );

  describe('render', () => {
    test('should render properly', () => {
      const tree = renderer.create(
        <RadioFeedback
          currentStep={4}
          onChange={mockOnChange}
          onButtonClick={mockOnClick}
        />,
      );

      expect(tree).toMatchSnapshot();
    });

    test('should render null if the step is not 5', () => {
      const tree = renderer.create(
        <RadioFeedback
          currentStep={2}
          onChange={mockOnChange}
          onButtonClick={mockOnClick}
        />,
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Intergration', () => {
    test('should properly call onChange', async () => {
      const { getByTestId } = renderRadioFeedback();

      userEvent.click(getByTestId('RadioFeedback-radio0'));

      await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
    });

    test('should properly call onClick', async () => {
      const { getByTestId } = renderRadioFeedback({ radioValue: 'Very Easy' });

      userEvent.click(getByTestId('RadioFeedback-Button'));

      await waitFor(() => expect(mockOnClick).toHaveBeenCalled());
    });

    test('should not call onClick when the button is disabled', async () => {
      const { getByTestId } = renderRadioFeedback();

      userEvent.click(getByTestId('RadioFeedback-Button'));

      await waitFor(() => expect(mockOnClick).not.toHaveBeenCalled());
    });
  });
});
