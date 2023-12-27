import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite } from "gsap";
import Skills from "./about/Skills";
import ThemeContext from "./contexts/ColorTheme";
const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useContext(ThemeContext);
  let wrapper = useRef([]);

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
    gsap.registerPlugin();
    wrapper.current.forEach((el) => {
      tl.fromTo(el, 1.5, { opacity: 0 }, { opacity: 1 }, 1.5);
    });
  }, []);

  return (
    <FirstViewport>
      <TitleWrapper theme={theme}>Skills</TitleWrapper>
      <Skills />
    </FirstViewport>
  );
};

const FirstViewport = styled.div`
  display: flex;
  height: 85vh;
  top: 10vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  padding: 0.5rem 1.2rem;
  left: 5%;
  top: 5%;
  font-size: 2rem;
  display: flex;
  font-weight: 700;
  color: ${(props) => (props.theme === "light" ? "white" : "white")};
`;
export default About;

// <a href="https://www.freepik.com/free-photo/white-wooden-texture-flooring-background_3475742.htm#query=white%20wood%20texture&position=1&from_view=keyword&track=ais&uuid=1a13530d-af17-4322-ad26-24bc0c9f0353">Image by rawpixel.com</a> on Freepik
