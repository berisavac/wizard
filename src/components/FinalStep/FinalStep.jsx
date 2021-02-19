import React from 'react';
//provider
import { useWizardDispatch } from '../../context/wizard.provider';
//actions

import {
  resetCurrentStepIndicator,
  resetFieldInformation,
  selectedCurrentIdForNext,
  selectedCurrentDescriptionForNext,
  updateFiledAddNewGenre,
  checkBoxAddNewGenre,
  changeActiveStepMode,
} from '../../context/wizard.actions';

//styles
import {
  FinalStepWrapper,
  CheckIconContainer,
  AddBookMessage,
  AddBookButton,
  CheckIcon,
} from './FinalStep.styles';

const FinalStep = () => {
  const dispatch = useWizardDispatch();
  const handleComplete = () => {
    dispatch(resetFieldInformation(''));
    dispatch(selectedCurrentIdForNext(null));
    dispatch(selectedCurrentDescriptionForNext(null));
    dispatch(updateFiledAddNewGenre(''));
    dispatch(checkBoxAddNewGenre(false));
    dispatch(changeActiveStepMode(1, 3, false));
    dispatch(resetCurrentStepIndicator(1));
  };

  return (
    <FinalStepWrapper>
      <CheckIconContainer>
        <CheckIcon />
      </CheckIconContainer>
      <AddBookMessage>Book added successfully</AddBookMessage>

      <div>
        <AddBookButton onClick={handleComplete}>Add another book</AddBookButton>
      </div>
    </FinalStepWrapper>
  );
};

export default FinalStep;
