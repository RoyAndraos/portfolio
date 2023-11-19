import React from "react";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
const BackEnd = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2.3);
  }, []);
  return (
    <Wrapper ref={(el) => (wrapper = el)}>
      <StyledListItem ref={(el) => (listItem.current[0] = el)}>
        Node.js
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[1] = el)}>
        Express.js
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[2] = el)}>
        MongoDB
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[3] = el)}>
        Http requests
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[4] = el)}>
        RESTful API
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[5] = el)}>
        Socket.io / Socket.io-client
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[6] = el)}>
        UUID
      </StyledListItem>
    </Wrapper>
  );
};

export default BackEnd;
