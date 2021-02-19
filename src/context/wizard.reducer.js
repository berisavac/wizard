import { filterData } from './utils.js';
import * as wizardTypes from './wizard.types';
export function wizardReducer(state, action) {
  switch (action.type) {
    case wizardTypes.GET_DATA:
      return {
        ...state,
        dataGenre: action.payload,
      };

    case wizardTypes.NEXT:
      return {
        ...state,
        currentStepIndicator: state.currentStepIndicator + action.payload,
      };

    case wizardTypes.RESET_CURRENT_STEP_INDICATOR:
      return {
        ...state,
        currentStepIndicator: action.payload,
      };

    case 'BACK':
      return {
        ...state,
        currentStepIndicator: state.currentStepIndicator - action.payload,
      };

    case wizardTypes.SELECTED_CURRENT_ID_FOR_NEXT:
      return {
        ...state,
        selectedIdForNextCategory: {
          ...state.selectedIdForNextCategory,
          id: action.payload,
        },
      };

    case wizardTypes.SELECTED_CURRENT_DESCRIPTION_FOR_NEXT:
      return {
        ...state,
        selectedIdForNextCategory: {
          ...state.selectedIdForNextCategory,
          description: action.payload,
        },
      };

    case wizardTypes.SELECTED_ID_FOR_SUBGENRES:
      return {
        ...state,
        subgenresSelected: state.dataGenre.filter((data) =>
          filterData(data, action.payload)
        ),
      };

    case wizardTypes.CHANGE_MODE:
      return {
        ...state,
        activeMode: {
          ...state.activeMode,
          thirdStep: action.payload.prev,
          fourthStep: action.payload.next,
        },
      };
    case wizardTypes.CHANGE_STEP_MODE:
      return {
        ...state,
        activeStepMode: {
          min: action.payload.min,
          max: action.payload.max,
          mode: action.payload.mode,
        },
      };
    case wizardTypes.NEW_GENRE_FIELD:
      return {
        ...state,
        addNewSubgenre: {
          ...state.addNewSubgenre,
          subgenreName: action.payload,
        },
      };
    case wizardTypes.NEW_GENRE_CHECKBOX:
      return {
        ...state,
        addNewSubgenre: {
          ...state.addNewSubgenre,
          descriptionRequired: action.payload,
        },
      };

    case wizardTypes.UPDATE_FIELD_INFORMATION:
      return {
        ...state,
        informationForm: {
          ...state.informationForm,
          [action.payload.field]: action.payload.value,
        },
      };

    case wizardTypes.RESET_FIELD_INFORMATION:
      return {
        ...state,
        informationForm: {
          bookTitle: action.payload,
          author: action.payload,
          isbn: action.payload,
          publisher: action.payload,
          dataPublished: action.payload,
          numberOfPages: action.payload,
          format: action.payload,
          edition: action.payload,
          editionLanguage: action.payload,
          description: action.payload,
        },
      };

    default:
      return state;
  }
}
