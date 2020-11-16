import React from 'react';

import RadioInput from '../../Components/RadioInput';
import Button from '../../Components/Button';

import { EASE_OF_USE, radioOptions } from './consts';
import './styles.scss';

const RadioFeedback = ({
  currentStep,
  onChange,
  onButtonClick,
  radioValue,
}) => {
  if (currentStep !== 4) {
    return null;
  }

  return (
    <div className='RadioFeedback-container'>
      <label className='RadioFeedback-label'>
        How easy was it to accomplish that goal?
      </label>
      <div className='RadioFeedback-inputContainer'>
        {radioOptions.map((option, index) => {
          return (
            <div key={index}>
              <RadioInput
                data-testid={`RadioFeedback-radio${index}`}
                containerClasses='RadioFeedback-RadioInput'
                checked={option === radioValue}
                shouldShowLabel
                labelText={option}
                name={EASE_OF_USE}
                value={option}
                onChange={onChange}
              />
            </div>
          );
        })}
        <Button
          data-testid='RadioFeedback-Button'
          disabled={!radioValue}
          onClick={onButtonClick}
          shouldCenter
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default RadioFeedback;
