import React from 'react';
//provider
import { useWizardState } from '../../context/wizard.provider';
//styled
import {
  StepWrapper,
  Step,
  HorisontalLine,
  AddBookTitle,
} from './StepIndicator.styles';

const StepIndicator = () => {
  const { activeStepMode, currentStepIndicator } = useWizardState();

  return (
    <div>
      <AddBookTitle>Add book - New book</AddBookTitle>
      <StepWrapper>
        {activeStepMode.mode ? (
          <StepWrapper justify>
            <Step active={1 === currentStepIndicator}>1</Step>
            <HorisontalLine big />
            <Step active={2 === currentStepIndicator}>2</Step>
            <HorisontalLine big />
            <Step active={3 === currentStepIndicator}>3</Step>
            <HorisontalLine big />
            <Step active={4 === currentStepIndicator}>4</Step>
          </StepWrapper>
        ) : (
          <StepWrapper>
            <Step active={1 === currentStepIndicator}>1</Step>
            <HorisontalLine />
            <Step active={2 === currentStepIndicator}>2</Step>
            <HorisontalLine />
            {!activeStepMode.mode && currentStepIndicator === 3 ? (
              <Step active={3 === currentStepIndicator}>3</Step>
            ) : (
              <Step>...</Step>
            )}
          </StepWrapper>
        )}
      </StepWrapper>
    </div>
  );
};

export default StepIndicator;
