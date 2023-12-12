import React from "react";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
import { Title } from "./Skills";
const CommunicationServices = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 3.2);
  }, []);
  return (
    <Wrapper ref={(el) => (wrapper = el)}>
      <Title style={{ margin: "0 auto", marginBottom: "3vh" }}>
        Communication
      </Title>
      <StyledListItem ref={(el) => (listItem.current[0] = el)}>
        Brevo (Email and SMS)
      </StyledListItem>
      <StyledListItem ref={(el) => (listItem.current[1] = el)}>
        Twilio (SMS)
      </StyledListItem>
    </Wrapper>
  );
};

export default CommunicationServices;
