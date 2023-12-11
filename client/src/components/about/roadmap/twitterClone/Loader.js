import React from "react";
import { FiLoader } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 80vh;
  position: relative;
  background-color: white;
  left: 20vw;
`;

const animateRotation = keyframes`
0%{
    transform:rotate(0)
}
100%{
    transform:rotate(360deg)
}

`;

const Spinner = styled(FiLoader)`
  font-size: 50px;
  animation: ${animateRotation} 2s linear infinite;
`;
export default Loader;
