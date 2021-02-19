import styled from 'styled-components';

export const InformationWrapper = styled.div`
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
    padding-left: 30px;
    padding-right: 30px;
  }
  @media only screen and ${(props) => props.theme.sizeDevice.sm} {
    width: 40%;
    min-width: 563px;
    min-height: 450px;
  }
`;

export const InformationContainerForm = styled.div`
  min-height: 582px;
  jusify-content: space-around;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  font-size: ${(props) => props.theme.fontSizes.medium};
  $ @media only screen and ${(props) => props.theme.sizeDevice.xl} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: white;
  border: 1px solid gray;
  border-radius: 3px;
  height: 30px;
  margin-bottom: 0.5em;
`;

export const Select = styled.select`
  height: 30px;
  background: white;
  color: black;
  border: 1px solid gray;
  border-radius: 3px;
  margin-bottom: 0.5em;

  option {
    color: black;
    background: white;

    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  color: black;
  background: white;
  border: 1px solid gray;
  border-radius: 3px;
  height: 90px;
  margin-bottom: 0.5em;
  resize: none;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.small ? '28%' : '33%')};
  margin-right: ${(props) => (props.margin ? '15px' : null)};

  @media only screen and ${(props) => props.theme.sizeDevice.xs} {
    width: ${(props) => (props.small ? '41%' : '50%')};
    height: 100%;
  }
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ButtonAdd = styled.button`
  width: 100px;
  height: 29px;
  background-color: #5a6268;
  color: white;
  border: 1px solid #5a6268;
  border-radius: 5px;
  margin: 10px 0 10px 10px;
  cursor: pointer;
`;
export const ButtonsWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
