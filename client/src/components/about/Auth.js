import React from "react";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
const Auth = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2.6);
  }, []);
  return (
    <Wrapper ref={(el) => (wrapper = el)}>
      <StyledListItem ref={(el) => (listItem.current[0] = el)}>
        JSON Web Token
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[1] = el)}>
        Bcrypt
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[2] = el)}>
        OAuth 2.0 (React.js)
      </StyledListItem>
    </Wrapper>
  );
};

export default Auth;
