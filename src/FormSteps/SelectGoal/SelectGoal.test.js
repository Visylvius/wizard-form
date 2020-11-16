import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectGoal from './index';

describe('SelectGoal (Unit)', () => {
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();
  const renderSelectGoal = props =>
    render(
      <SelectGoal
        testId='SelectGoal-select'
        currentStep={3}
        onChange={mockOnChange}
        onButtonClick={mockOnClick}
        selectedVal='default'
        {...props}
      />,
    );

  describe('render', () => {
    test('should render properly', () => {
      const tree = renderer.create(
        <SelectGoal
          currentStep={3}
          onChange={mockOnChange}
          onButtonClick={mockOnClick}
          selectedVal='default'
        />,
      );

      expect(tree).toMatchSnapshot();
    });

    test('should render null if the step is not 5', () => {
      const tree = renderer.create(
        <SelectGoal
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
      const { getByTestId, getByText } = renderSelectGoal();

      fireEvent.change(getByTestId('SelectGoal-select'), {
        target: { value: 'other' },
      });

      await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
      expect(getByText('Other')).toBeInTheDocument();
    });

    test('should properly call onClick', async () => {
      const { getByTestId } = renderSelectGoal({ selectedVal: 'outerware' });

      userEvent.click(getByTestId('SelectGoal-Button'));

      await waitFor(() => expect(mockOnClick).toHaveBeenCalled());
    });

    test('should not call onClick when the button is disabled', async () => {
      const { getByTestId } = renderSelectGoal();

      userEvent.click(getByTestId('SelectGoal-Button'));

      await waitFor(() => expect(mockOnClick).not.toHaveBeenCalled());
    });
  });
});
