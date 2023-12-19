import React from "react";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
import { Title } from "./Skills";
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
      <Title style={{ margin: "0 auto", marginBottom: "10vh" }}>
        Authentication
      </Title>
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
