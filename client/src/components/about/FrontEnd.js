import React from "react";
import styled from "styled-components";
import { useEffect, useRef, useContext } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { animateAboutSection } from "../../helpers";
import ThemeContext from "../contexts/ColorTheme";
const FrontEnd = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  let titleRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2);
    gsap.fromTo(
      titleRef,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: Power4.easeOut, delay: 0.5 }
    );
  }, []);
  return (
    <Container>
      <Title ref={(el) => (titleRef = el)} theme={theme}>
        Front End
      </Title>
      <Wrapper ref={(el) => (wrapper = el)}>
        <StyledListItem ref={(el) => (listItem.current[0] = el)}>
          HTML
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[1] = el)}>
          CSS
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[2] = el)}>
          React
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[3] = el)}>
          Javascript
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[4] = el)}>
          Styled Components
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[5] = el)}>
          Redux
        </StyledListItem>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
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
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  color: black;
  @media (max-width: 1000px) {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    width: 40%;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #50196f;
  font-weight: 700;
  width: 100%;
`;
export default FrontEnd;
