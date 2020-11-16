import React from 'react';

import TextArea from '../../Components/TextArea';

import { calculateRemainingChars } from './utils';
import { FEEDBACK_TEXT } from './consts';
import './styles.scss';

const FeedbackText = ({ currentStep, testId, onChange, feedbackValue }) => {
  if (currentStep !== 5) {
    return null;
  }
  return (
    <div>
      <TextArea
        data-testid={testId}
        onChange={onChange}
        value={feedbackValue}
        maxLength={1000}
        hasLabel
        label='Please share your feedback.'
        name={FEEDBACK_TEXT}
        placeholder='your answer'
      />
      <div className='FeedbackText-characterLimit'>{`${calculateRemainingChars(
        feedbackValue.length,
      )} characters remaining`}</div>
    </div>
  );
};

export default FeedbackText;
