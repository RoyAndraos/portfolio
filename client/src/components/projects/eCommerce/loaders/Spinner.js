import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerIcon />
    </SpinnerContainer>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: ${spinAnimation} 1s infinite linear;
  font-size: 3rem;
`;
export default Spinner;
