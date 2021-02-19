import React, { useState, useEffect } from 'react';
//provider
import {
  useWizardDispatch,
  useWizardState,
} from '../../context/wizard.provider';
//actions
import {
  handleButtonBack,
  handleButtonNext,
  selectedCurrentIdForNext,
  changeActiveMode,
  changeActiveStepMode,
  checkBoxAddNewGenre,
} from '../../context/wizard.actions';
//styled
import { ButtonsWraper, ButtonNext, ButtonBack } from './Buttons.styles';

const Buttons = () => {
  const {
    currentStepIndicator,
    selectedIdForNextCategory,
    activeStepMode,
  } = useWizardState();
  const dispatch = useWizardDispatch();
  const [disabledBack, setDisabledBack] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  useEffect(() => {
    currentStepIndicator <= activeStepMode.min
      ? setDisabledBack(true)
      : setDisabledBack(false);
    currentStepIndicator < activeStepMode.max
      ? setDisabledNext(false)
      : setDisabledNext(true);
  }, [activeStepMode.max, activeStepMode.min, currentStepIndicator]);

  const handleBack = () => {
    dispatch(handleButtonBack(1));

    if (currentStepIndicator >= 2 && currentStepIndicator <= 3) {
      console.log('usao');
      dispatch(changeActiveMode(null, 3));
      dispatch(changeActiveStepMode(1, 3, false));
      dispatch(selectedCurrentIdForNext(null));
      dispatch(checkBoxAddNewGenre(false));
    }
  };

  const handleNext = () => {
    if (selectedIdForNextCategory.id !== null || activeStepMode.mode) {
      dispatch(handleButtonNext(1));
      dispatch(selectedCurrentIdForNext(null));
    }
  };

  return (
    <ButtonsWraper>
      <ButtonBack type="button" disabled={disabledBack} onClick={handleBack}>
        Back
      </ButtonBack>

      {currentStepIndicator === activeStepMode.max ? null : (
        <ButtonNext type="button" disabled={disabledNext} onClick={handleNext}>
          Next
        </ButtonNext>
      )}
    </ButtonsWraper>
  );
};

export default Buttons;
