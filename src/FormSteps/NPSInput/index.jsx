import React from 'react';
import classNames from 'classnames';

import RadioInput from '../../Components/RadioInput';
import Button from '../../Components/Button';

import { NPS_SCORE } from './consts.js';
import './styles.scss';

const NPSInput = ({ npsValue, onButtonClick, onChange, currentStep }) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <div className='NPSInput-container'>
      <label className='NPSInput-radioLabel'>
        How likely are you to recommend Cole Haan to a friend or colleague?
      </label>
      <div className='NPSInput-radioContainer'>
        {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(
          (num, idx) => {
            const labelClasses = classNames('NPSInput-label', {
              isSelected: npsValue === num,
            });

            return (
              <div key={num}>
                <label htmlFor={`nps-${num}`} className={labelClasses}>
                  {num}
                </label>
                <RadioInput
                  data-testid={`RadioInput-${idx}`}
                  id={`nps-${num}`}
                  name={NPS_SCORE}
                  value={num}
                  onClick={onChange}
                />
              </div>
            );
          },
        )}
      </div>
      <div className='NPSInput-ratingLabels'>
        <span>Not at all likely</span>
        <span>Extremely likely</span>
      </div>
      <Button
        data-testid='NPSInput-Button'
        disabled={!npsValue}
        buttonClasses='NPSInput-Button'
        onClick={onButtonClick}
        shouldCenter
      >
        Next
      </Button>
    </div>
  );
};

export default NPSInput;
