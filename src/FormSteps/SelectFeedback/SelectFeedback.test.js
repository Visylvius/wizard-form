import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectFeedback from './index';

describe('SelectFeedback (Unit)', () => {
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();
  const renderSelectFeedback = props =>
    render(
      <SelectFeedback
        testId='SelectFeedback-select'
        currentStep={2}
        onChange={mockOnChange}
        onButtonClick={mockOnClick}
        selectedVal='default'
        {...props}
      />,
    );

  describe('render', () => {
    test('should render properly', () => {
      const tree = renderer.create(
        <SelectFeedback
          currentStep={2}
          onChange={mockOnChange}
          onButtonClick={mockOnClick}
          selectedVal='default'
        />,
      );

      expect(tree).toMatchSnapshot();
    });

    test('should render null if the step is not 5', () => {
      const tree = renderer.create(
        <SelectFeedback
          currentStep={3}
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
      const { getByTestId, getByText } = renderSelectFeedback();

      fireEvent.change(getByTestId('SelectFeedback-select'), {
        target: { value: 'products' },
      });

      await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
      expect(getByText('Our Products')).toBeInTheDocument();
    });

    test('should properly call onClick', async () => {
      const { getByTestId } = renderSelectFeedback({ selectedVal: 'service' });

      userEvent.click(getByTestId('SelectFeedback-Button'));

      await waitFor(() => expect(mockOnClick).toHaveBeenCalled());
    });

    test('should not call onClick when the button is disabled', async () => {
      const { getByTestId } = renderSelectFeedback();

      userEvent.click(getByTestId('SelectFeedback-Button'));

      await waitFor(() => expect(mockOnClick).not.toHaveBeenCalled());
    });
  });
});
