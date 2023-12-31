import React from "react";
import styled from "styled-components";

const Overlay = ({ setShowProfile }) => {
  return <Container onClick={() => setShowProfile(false)}></Container>;
};

export default Overlay;

const Container = styled.button`
  all: unset;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.4;
  z-index: 995;
`;
