import React, { useState } from 'react';
//provider
import {
  useWizardDispatch,
  useWizardState,
} from '../../context/wizard.provider';
//actions
import {
  handleButtonNext,
  selectedCurrentIdForNext,
  changeActiveMode,
  changeActiveStepMode,
  selectedCurrentDescriptionForNext,
} from '../../context/wizard.actions';
//components
import StepIndicator from '../StepIndicator/StepIndicator';
import Buttons from '../Buttons/Buttons';
//styled
import {
  SubgenreWrapper,
  SubgenreContainer,
  SubgenreButton,
  AddNewButton,
} from './Subgenres.styles';

const Subgenre = () => {
  const { subgenresSelected } = useWizardState();
  const dispatch = useWizardDispatch();
  const [active, setActive] = useState(null);

  const [filtredSubgenres] = subgenresSelected.map((sub) => sub.subgenres);

  const handleSubgenres = (id, description, index) => {
    setActive(index);
    dispatch(selectedCurrentIdForNext(id));
    dispatch(selectedCurrentDescriptionForNext(description));
  };

  const handleAddNew = () => {
    dispatch(handleButtonNext(1));
    dispatch(changeActiveMode(3, 4));
    dispatch(changeActiveStepMode(1, 4, true));
  };

  return (
    <SubgenreWrapper>
      <StepIndicator />
      <SubgenreContainer>
        {filtredSubgenres &&
          filtredSubgenres.map((sub, index) => (
            <SubgenreButton
              active={active === index}
              key={sub.id}
              onClick={() =>
                handleSubgenres(sub.id, sub.isDescriptionRequired, index)
              }
            >
              {sub.name}
            </SubgenreButton>
          ))}
        <AddNewButton onClick={() => handleAddNew()}>ADD NEW</AddNewButton>
      </SubgenreContainer>
      <Buttons />
    </SubgenreWrapper>
  );
};

export default Subgenre;
