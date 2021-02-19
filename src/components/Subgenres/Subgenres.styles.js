import styled, { css } from 'styled-components';

export const SubgenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 1%;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and ${(props) => props.theme.sizeDevice.xs} {
    width: 100%;
    height: 100%;
  }
  @media only screen and ${(props) => props.theme.sizeDevice.sm} {
    width: 40%;
    min-width: 563px;
    min-height: 450px;
  }
`;

export const SubgenreContainer = styled.div`
  text-align: center;
`;

const active = css`
  color: 'white';
  background-color: ${(props) => props.theme.colors.activeDark};
`;
export const SubgenreButton = styled.button`
  width: 125px;
  height: 40px;
  background-color: ${(props) => (props.active ? active : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;

  :not(:disabled) {
    cursor: pointer;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.activeDark};
    color: white;
  }
`;

export const AddNewButton = styled.button`
  width: 126px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.activeDark};
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;

  @media only screen and ${(props) => props.theme.sizeDevice.xs} {
    width: 125px;
  }
`;
