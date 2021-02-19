import styled from 'styled-components';
import Icon from '../../assets/check-solid.js';

export const FinalStepWrapper = styled.div`
  ${'' /* height: 40%;
  width: 58%; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 1%;
  justify-content: space-around;

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

export const CheckIconContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #d0d0d0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddBookMessage = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const AddBookButton = styled.button`
  width: 250px;
  height: 29px;
  background-color: #5a6268;
  color: white;
  border: 1px solid #5a6268;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  :not(:disabled) {
    cursor: pointer;
  }
  @media only screen and ${(props) => props.theme.sizeDevice.xl} {
    margin: 10px;
  }
`;

const Svg = styled(Icon)`
  width: 40px;
  height: 40px;
`;

export const CheckIcon = () => (
  <Svg viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
    />
  </Svg>
);
