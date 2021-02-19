import styled from 'styled-components';

export const AddNewWrapper = styled.div`
  min-height: 300px;
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
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and ${(props) => props.theme.sizeDevice.sm} {
    width: 40%;
    min-width: 563px;
    min-height: 450px;
  }
`;

export const Input = styled.input`
  padding: 1em;
  color: black;
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  height: 15px;
  margin-bottom: 0.5em;
  min-width: 20px;
  min-height: 20px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  > input {
    width: 25px;
    height: 25px;
  }
`;

export const Checkbox = styled.input`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;

  :not(:disabled):checked & {
    background: #d1d1d1;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-left: 10px;
`;
