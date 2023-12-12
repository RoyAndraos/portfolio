import React from "react";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
import { Title } from "./Skills";
const AnimationUI = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2.9);
  }, []);
  return (
    <Wrapper ref={(el) => (wrapper = el)}>
      <Title style={{ margin: "0 auto", marginBottom: "3vh" }}>Animation</Title>
      <StyledListItem ref={(el) => (listItem.current[0] = el)}>
        GSAP (GreenSock Animation Platform)
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[1] = el)}>
        Keyframes (Styled Components)
      </StyledListItem>
    </Wrapper>
  );
};

export default AnimationUI;
