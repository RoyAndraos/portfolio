import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap";
import { Wrapper, StyledListItem } from "./FrontEnd";
import { animateAboutSection } from "../../helpers";
import { Title, Container } from "./FrontEnd";
const Other = () => {
  let wrapper = useRef(null);
  let listItem = useRef([]);
  let titleRef = useRef(null);
  gsap.registerPlugin();
  useEffect(() => {
    const tl = new TimelineLite();
    animateAboutSection(tl, wrapper, listItem.current, Power4, 2.3);
    gsap.fromTo(
      titleRef,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: Power4.easeOut, delay: 0.5 }
    );
  }, []);
  return (
    <Container>
      <Title ref={(el) => (titleRef = el)}>Other</Title>
      <Wrapper ref={(el) => (wrapper = el)}>
        <StyledListItem ref={(el) => (listItem.current[0] = el)}>
          Github
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[1] = el)}>
          Netlify
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[2] = el)}>
          Render
        </StyledListItem>
        <StyledListItem ref={(el) => (listItem.current[3] = el)}>
          VS Code
        </StyledListItem>
      </Wrapper>
    </Container>
  );
};

export default Other;
