import React from "react";
import { useEffect, useRef, useContext } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
import { Title } from "./FrontEnd";
import { Container } from "./FrontEnd";
import ThemeContext from "../contexts/ColorTheme";
const AnimationUI = () => {
  const { theme } = useContext(ThemeContext);
  let wrapper = useRef(null);
  let listItem = useRef([]);
  let titleRef = useRef(null);

  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2.9);
    gsap.fromTo(
      titleRef,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: Power4.easeOut, delay: 0.5 }
    );
  }, []);
  return (
    <Container>
      <Title theme={theme} ref={(el) => (titleRef = el)}>
        Animation
      </Title>
      <Wrapper theme={theme} ref={(el) => (wrapper = el)}>
        <StyledListItem theme={theme} ref={(el) => (listItem.current[0] = el)}>
          GSAP (GreenSock Animation Platform)
        </StyledListItem>
        <StyledListItem theme={theme} ref={(el) => (listItem.current[1] = el)}>
          Keyframes (Styled Components)
        </StyledListItem>
      </Wrapper>
    </Container>
  );
};

export default AnimationUI;
