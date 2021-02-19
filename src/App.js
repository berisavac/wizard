import React, { useEffect } from 'react';
//provider
import { useWizardState, useWizardDispatch } from './context/wizard.provider';
//json
import jsonData from './json/genres.json';
//actions
import { getData } from './context/wizard.actions';
//styled theme provider
import Theme from './Theme.jsx';
//components
import Genres from './components/Genres/Genres';
import Subgenres from './components/Subgenres/Subgenres';
import AddNewSubgenre from './components/AddNewSubgenre/AddNewSubgenre';
import Information from './components/Information/Information';
import FinalStep from './components/FinalStep/FinalStep';
//styled
import { WizardWrapper } from './App.styles';

function App() {
  const { currentStepIndicator, activeMode } = useWizardState();
  const dispatch = useWizardDispatch();

  useEffect(() => {
    const response = JSON.parse(JSON.stringify(jsonData));
    dispatch(getData(response.genres));
  }, [dispatch]);

  return (
    <Theme>
      <WizardWrapper>
        <>
          {currentStepIndicator === activeMode.firstStep && <Genres />}
          {currentStepIndicator === activeMode.secondStep && <Subgenres />}
          {currentStepIndicator === activeMode.thirdStep ? (
            <AddNewSubgenre />
          ) : null}
          {currentStepIndicator === activeMode.fourthStep ? (
            <Information />
          ) : null}
          {currentStepIndicator === activeMode.fifthStep && <FinalStep />}
        </>
      </WizardWrapper>
    </Theme>
  );
}

export default App;
