import React from 'react';
//provider
import {
  useWizardDispatch,
  useWizardState,
} from '../../context/wizard.provider';
//actions
import {
  updateFiledAddNewGenre,
  checkBoxAddNewGenre,
} from '../../context/wizard.actions';
//components
import StepIndicator from '../StepIndicator/StepIndicator';
import Buttons from '../Buttons/Buttons';
//styled
import {
  AddNewWrapper,
  Input,
  CheckboxWrapper,
  Label,
} from './AddNewSubgenre.styles';

const AddNewSubgenre = () => {
  const { addNewSubgenre } = useWizardState();
  const dispatch = useWizardDispatch();
  const updateSubgenreName = (event) => {
    dispatch(updateFiledAddNewGenre(event.target.value));
  };

  const handleCheckBoxFiled = (event) => {
    dispatch(checkBoxAddNewGenre(event.target.checked));
  };
  return (
    <AddNewWrapper>
      <StepIndicator />
      <Input
        type="text"
        id="subgenre name"
        name="subgenre Name"
        placeholder="Subgenre name"
        value={addNewSubgenre.subgenreName}
        onChange={updateSubgenreName}
      />
      <CheckboxWrapper>
        <input
          type="checkbox"
          id="checkbox"
          name="descriptionRequired"
          value={addNewSubgenre.descriptionRequired.checked}
          onChange={handleCheckBoxFiled}
        />
        <Label>Description is required from this subgenre</Label>
      </CheckboxWrapper>
      <Buttons />
    </AddNewWrapper>
  );
};

export default AddNewSubgenre;
