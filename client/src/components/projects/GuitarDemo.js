import React from "react";
import presentation from "../../assets/finalPresent.mp4";
import styled from "styled-components";
import BackToProjects from "./BackToProjects";
const GuitarDemo = () => {
  return (
    <Wrapper>
      <BackToProjects />
      <video width="80%" controls>
        {/* <source src={presentation} type="video/mp4"></source> */}
      </video>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  top: 10vh;
  left: 0%;
`;
export default GuitarDemo;
