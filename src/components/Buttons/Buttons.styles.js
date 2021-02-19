import styled from 'styled-components';

export const ButtonsWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and ${(props) => props.theme.sizeDevice.xs} {
    justify-content: center;
  }
`;

export const ButtonNext = styled.button`
  width: 100px;
  height: 29px;
  background-color: #5a6268;
  color: white;
  border: 1px solid #5a6268;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
`;

export const ButtonBack = styled.button`
  width: 100px;
  height: 29px;
  background-color: white;
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
