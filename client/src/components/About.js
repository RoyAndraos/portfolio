import React, { useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import Skills from "./about/Skills";
const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin();
  let wrapper = useRef([]);
  let scrollIcon = useRef(null);

  //useEffect to detect if the screen size is less than 1000px
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1000;
      setIsMobile(newIsMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  //useEffect to animate the first viewport on mount
  useEffect(() => {
    const tl = new TimelineLite();
    wrapper.current.forEach((el) => {
      tl.fromTo(el, 1.5, { opacity: 0 }, { opacity: 1 }, 1.5);
    });
    tl.fromTo(scrollIcon, 1.5, { opacity: 0 }, { opacity: 1, delay: 0.3 }, 1.5);
  }, []);

  return (
    <Wrapper>
      <FirstViewport>
        <ContactMeWrapper></ContactMeWrapper>
        <Skills />
      </FirstViewport>
    </Wrapper>
  );
};

const FirstViewport = styled.div`
  display: flex;
  height: 90vh;
  top: 10vh;
  width: 100vw;
  justify-content: space-around;
  position: relative;
`;
const Wrapper = styled.div`
  height: 200vh;
  display: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
`;

const ContactMeWrapper = styled.div`
  width: 50%;
`;
export default About;
