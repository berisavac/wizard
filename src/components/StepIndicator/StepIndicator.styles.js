import styled from 'styled-components';

export const StepWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: ${(props) => (props.justify ? 'center' : 'flex-start')};
  align-items: center;
  ${
    '' /* @media only screen and ${(props) => props.theme.sizeDevice.xl} {
    ${'' /* display: none; */
  }
    ${'' /* font-size: ${} */}
  } */}
`;

export const Step = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.stepsLight};
  border-radius: 50%;
  color: white;
  font-size: 22px;
  margin: 5px 5px;
  ${({ active }) =>
    active &&
    `
    background:#5a6268;
  `}
`;

export const HorisontalLine = styled.hr`
  color: ${(props) => props.theme.colors.activeDark};
  margin: 0 5px 0 5px;
  width: 87px;
`;

export const AddBookTitle = styled.h4`
  color: ${(props) => props.theme.colors.activeDark};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: 5px;
  margin-top: 5px;
`;
