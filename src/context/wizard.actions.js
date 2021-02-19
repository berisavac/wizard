import * as wizardTypes from './wizard.types';

export const getData = (data) => {
  return { type: wizardTypes.GET_DATA, payload: data };
};

export const handleButtonNext = (step) => {
  return { type: wizardTypes.NEXT, payload: step };
};

export const handleButtonBack = (step) => {
  return { type: wizardTypes.BACK, payload: step };
};

export const resetCurrentStepIndicator = (step) => {
  return { type: wizardTypes.RESET_CURRENT_STEP_INDICATOR, payload: step };
};

export const selectedCurrentIdForNext = (id) => {
  return {
    type: wizardTypes.SELECTED_CURRENT_ID_FOR_NEXT,
    payload: id,
  };
};
export const selectedCurrentDescriptionForNext = (description) => {
  return {
    type: wizardTypes.SELECTED_CURRENT_DESCRIPTION_FOR_NEXT,
    payload: description,
  };
};

export const selectedIdForSubgenres = (id) => {
  return { type: wizardTypes.SELECTED_ID_FOR_SUBGENRES, payload: id };
};

export const selectedIdAfterSub = (id) => {
  return { type: wizardTypes.SELECTED_ID_AFTER_SUB, payload: id };
};

export const changeActiveMode = (prev, next) => {
  return { type: wizardTypes.CHANGE_MODE, payload: { prev, next } };
};

export const changeActiveStepMode = (min, max, mode) => {
  return { type: wizardTypes.CHANGE_STEP_MODE, payload: { min, max, mode } };
};

export const updateFiledAddNewGenre = (value) => {
  return { type: wizardTypes.NEW_GENRE_FIELD, payload: value };
};

export const checkBoxAddNewGenre = (value) => {
  return { type: wizardTypes.NEW_GENRE_CHECKBOX, payload: value };
};

export const updateFiledsValueInformation = (field, value) => {
  return {
    type: wizardTypes.UPDATE_FIELD_INFORMATION,
    payload: { field, value },
  };
};

export const resetFieldInformation = (value) => {
  return { type: wizardTypes.RESET_FIELD_INFORMATION, payload: value };
};
