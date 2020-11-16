import React, { useState } from 'react';

import SelectFeedback from './FormSteps/SelectFeedback';
import NPSInput from './FormSteps/NPSInput';
import SelectGoal from './FormSteps/SelectGoal';
import RadioFeedback from './FormSteps/RadioFeedback';
import FeedbackText from './FormSteps/FeedbackText';
import FinalStep from './FormSteps/FinalStep';
import Button from './Components/Button';

import './App.scss';

const App = () => {
  const [currentStep, setStep] = useState(1);
  const [inputValues, setInputValues] = useState({
    npsScore: null,
    selectFeedback: 'default',
    selectGoal: 'default',
    easeOfUse: null,
    feedbackText: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const onButtonClick = () => {
    setStep(currentStep + 1);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    //At this point we we typically make an API call to send the data, but here i'm just going to increment the step
    setStep(currentStep + 1);
  };

  const {
    npsScore,
    selectFeedback,
    selectGoal,
    easeOfUse,
    feedbackText,
  } = inputValues;

  return (
    <div className='App-container'>
      <div className='App-modalContainer'>
        <form className='App-form' onSubmit={handleFormSubmit}>
          <NPSInput
            currentStep={currentStep}
            npsValue={npsScore}
            onChange={handleChange}
            onButtonClick={onButtonClick}
          />
          <SelectFeedback
            currentStep={currentStep}
            selectedVal={selectFeedback}
            onChange={handleChange}
            onButtonClick={onButtonClick}
          />
          <SelectGoal
            currentStep={currentStep}
            selectedVal={selectGoal}
            onChange={handleChange}
            onButtonClick={onButtonClick}
          />
          <RadioFeedback
            currentStep={currentStep}
            onChange={handleChange}
            radioValue={easeOfUse}
            onButtonClick={onButtonClick}
          />
          <FeedbackText
            currentStep={currentStep}
            onChange={handleChange}
            feedbackValue={feedbackText}
            onButtonClick={onButtonClick}
            testId='FeedbackText'
          />
          {currentStep === 5 && (
            <Button
              buttonClasses='App-Button'
              disabled={!feedbackText}
              shouldCenter
              type='submit'
            >
              Submit
            </Button>
          )}
          <FinalStep
            currentStep={currentStep}
            npsScore={npsScore}
            selectFeedback={selectFeedback}
            selectGoal={selectGoal}
            easeOfUse={easeOfUse}
            feedbackText={feedbackText}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
