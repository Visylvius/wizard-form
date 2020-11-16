import React from 'react';

import Select from '../../Components/Select';
import Button from '../../Components/Button';
import { DEFAULT_VALUE } from '../../globalConsts';

import { optionsArr, SELECT_FEEDBACK } from './consts';
import './styles.scss';

const SelectFeedback = ({
  onChange,
  onButtonClick,
  selectedVal,
  currentStep,
  testId,
}) => {
  if (currentStep !== 2) {
    return null;
  }

  return (
    <>
      <Select
        selectTestId={testId}
        name={SELECT_FEEDBACK}
        optionsArr={optionsArr}
        selectedVal={selectedVal}
        onChange={onChange}
        label='Please choose a category you would like to leave feedback about.'
      />
      <Button
        data-testid='SelectFeedback-Button'
        buttonClasses='SelectFeedback-Button'
        disabled={selectedVal === DEFAULT_VALUE}
        onClick={onButtonClick}
        shouldCenter
      >
        Next
      </Button>
    </>
  );
};

export default SelectFeedback;
