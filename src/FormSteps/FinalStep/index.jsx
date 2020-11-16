import React from 'react';
import NPSInput from '../NPSInput';

import './styles.scss';

const FinalStep = ({
  currentStep,
  npsScore,
  selectFeedback,
  selectGoal,
  easeOfUse,
  feedbackText,
}) => {
  if (currentStep !== 6) {
    return null;
  }

  return (
    <div className='FinalStep-container'>
      <h2>Final Values</h2>
      <span>{`NPS score: ${npsScore}`}</span>
      <span>{`selected feedback: ${selectFeedback}`}</span>
      <span>{`selected goal: ${selectGoal}`}</span>
      <span>{`ease of Use: ${easeOfUse}`}</span>
      <span className='FinalStep-feedbackText'>{`feedback text: ${feedbackText}`}</span>
    </div>
  );
};

export default FinalStep;
