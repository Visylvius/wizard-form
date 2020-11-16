import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NPSInput from './index';

describe('NPSInput (Unit)', () => {
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();
  const renderNPSInput = props =>
    render(
      <NPSInput
        testId='SelectGoal-select'
        currentStep={1}
        onChange={mockOnChange}
        onButtonClick={mockOnClick}
        selectedVal='default'
        {...props}
      />,
    );

  describe('render', () => {
    test('should render properly', () => {
      const tree = renderer.create(
        <NPSInput
          currentStep={1}
          onChange={mockOnChange}
          onButtonClick={mockOnClick}
          selectedVal='default'
        />,
      );

      expect(tree).toMatchSnapshot();
    });

    test('should render null if the step is not 5', () => {
      const tree = renderer.create(
        <NPSInput
          currentStep={2}
          onChange={mockOnChange}
          onButtonClick={mockOnClick}
          selectedVal='default'
        />,
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Intergration', () => {
    test('should properly call onChange', async () => {
      const { getByTestId, getByText } = renderNPSInput();

      fireEvent.click(getByTestId('RadioInput-0'), {
        target: { value: '2' },
      });

      await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
    });

    test('should properly call onClick', async () => {
      const { getByTestId } = renderNPSInput({ npsValue: '2' });

      userEvent.click(getByTestId('NPSInput-Button'));

      await waitFor(() => expect(mockOnClick).toHaveBeenCalled());
    });

    test('should not call onClick when the button is disabled', async () => {
      const { getByTestId } = renderNPSInput();

      userEvent.click(getByTestId('NPSInput-Button'));

      await waitFor(() => expect(mockOnClick).not.toHaveBeenCalled());
    });
  });
});
