import styled from 'styled-components';

export const WizardWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WizardContainer = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 1%;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and ${(props) => props.theme.sizeDevice.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
