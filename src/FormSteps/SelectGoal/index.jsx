import React from 'react';

import Select from '../../Components/Select';
import Button from '../../Components/Button';
import { DEFAULT_VALUE } from '../../globalConsts';

import { SELECT_GOAL, optionsArr } from './consts';
import './styles.scss';

const SelectGoal = ({
  currentStep,
  selectedVal,
  onChange,
  onButtonClick,
  testId,
}) => {
  if (currentStep !== 3) {
    return null;
  }

  return (
    <>
      <Select
        selectTestId={testId}
        label='What category would you like to leave feedback about?'
        selectedVal={selectedVal}
        name={SELECT_GOAL}
        onChange={onChange}
        optionsArr={optionsArr}
      />
      <Button
        data-testid='SelectGoal-Button'
        buttonClasses='SelectGoal-Button'
        disabled={selectedVal === DEFAULT_VALUE}
        onClick={onButtonClick}
        shouldCenter
      >
        Next
      </Button>
    </>
  );
};

export default SelectGoal;
