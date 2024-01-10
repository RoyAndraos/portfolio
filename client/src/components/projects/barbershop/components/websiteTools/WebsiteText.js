import React from "react";
import { styled } from "styled-components";

const WebsiteText = () => {
  return <Wrapper>This page is not available in this Demo version</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88.5vh;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 4rem;
  text-align: center;
`;

export default WebsiteText;
