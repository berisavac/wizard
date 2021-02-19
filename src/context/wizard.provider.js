import React, { createContext, useContext, useReducer } from 'react';
import { wizardReducer } from './wizard.reducer';

const WizardStateContext = createContext();
const WizardDispatchContext = createContext();

const initialState = {
  dataGenre: [],
  currentStepIndicator: 1,
  selectedIdForNextCategory: {
    id: null,
    description: null,
  },
  subgenresSelected: [],
  subgenreForNextStep: null,
  activeMode: {
    firstStep: 1,
    secondStep: 2,
    thirdStep: null,
    fourthStep: 3,
    fifthStep: 5,
  },
  activeStepMode: {
    min: 1,
    max: 3,
    mode: false,
  },
  addNewSubgenre: {
    subgenreName: '',
    descriptionRequired: false,
  },
  informationForm: {
    bookTitle: '',
    author: '',
    isbn: '',
    publisher: '',
    dataPublished: '',
    numberOfPages: '',
    format: '',
    edition: '',
    editionLanguage: '',
    description: '',
  },
};

const WizardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  return (
    <WizardStateContext.Provider value={state}>
      <WizardDispatchContext.Provider value={dispatch}>
        {children}
      </WizardDispatchContext.Provider>
    </WizardStateContext.Provider>
  );
};

function useWizardState() {
  const context = useContext(WizardStateContext);
  if (context === undefined) {
    throw new Error('useWizardState must be used within a WizardProvider');
  }
  return context;
}

function useWizardDispatch() {
  const context = useContext(WizardDispatchContext);
  if (context === undefined) {
    throw new Error('useWizardDispatch must be used within a WizardProvider');
  }
  return context;
}

export { WizardProvider, useWizardState, useWizardDispatch };
