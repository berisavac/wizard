import React, { useState } from 'react';
//provider
import {
  useWizardState,
  useWizardDispatch,
} from '../../context/wizard.provider';
//actions
import {
  selectedCurrentIdForNext,
  selectedIdForSubgenres,
} from '../../context/wizard.actions';
//components
import StepIndicator from '../StepIndicator/StepIndicator';
import Buttons from '../Buttons/Buttons';
//styled
import { GenreWrapper, GenreContainer, GenreButton } from './Genres.styles';

const Genres = () => {
  const { dataGenre } = useWizardState();
  const dispatch = useWizardDispatch();
  const [active, setActive] = useState(null);

  const handleGenre = (id, index) => {
    setActive(index);
    dispatch(selectedIdForSubgenres(id));
    dispatch(selectedCurrentIdForNext(id));
  };

  return (
    <GenreWrapper>
      <StepIndicator />
      <GenreContainer>
        {dataGenre &&
          dataGenre.map((data, index) => (
            <GenreButton
              active={index === active}
              key={data.id}
              onClick={() => handleGenre(data.id, index)}
            >
              {data.name}
            </GenreButton>
          ))}
      </GenreContainer>
      <Buttons />
    </GenreWrapper>
  );
};

export default Genres;
