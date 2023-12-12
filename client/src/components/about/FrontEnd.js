import React from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { animateAboutSection } from "../../helpers";
import { Title } from "./Skills";
const FrontEnd = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2);
  }, []);
  return (
    <Wrapper ref={(el) => (wrapper = el)}>
      <Title style={{ margin: "0 auto", marginBottom: "3vh" }}>Font End</Title>
      <StyledListItem ref={(el) => (listItem.current[0] = el)}>
        React.js
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[1] = el)}>
        Router DOM
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[2] = el)}>
        Styled Components
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[3] = el)}>
        React Hooks
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[4] = el)}>
        React Cookies
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[5] = el)}>
        Other react libraries
      </StyledListItem>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  height: 70%;
  padding-bottom: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Set the color of the thumb */
  }
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledListItem = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-right: 2rem;
  color: black;
  @media (max-width: 1000px) {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    width: 40%;
  }
  @media (max-width: 1000px) {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    width: 40%;
  }
`;
export default FrontEnd;
