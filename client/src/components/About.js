import React, { useState, useContext } from "react";
import styled from "styled-components";
// import FrontEnd from "./about/FrontEnd";
// import BackEnd from "./about/BackEnd";
// import AnimationUI from "./about/AnimationUI";
// import Auth from "./about/Auth";
// import CommunicationServices from "./about/CommunicationServices";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import RoadMap from "./about/RoadMap";
import ThemeContext from "./contexts/ColorTheme";
import { FaChevronCircleDown } from "react-icons/fa";
import { useIntersection } from "react-use";
import Controller from "./about/roadmap/Controller";
import Skills from "./about/Skills";
const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [roadmapRef, setRoadmapRef] = useState(null);
  const [mapIndex, setMapIndex] = useState(0);

  const { theme } = useContext(ThemeContext);

  gsap.registerPlugin();
  let wrapper = useRef([]);
  let skills = useRef(null);
  let scrollIcon = useRef(null);
  let secondViewportRef = useRef(null);

  //useIntersection hook to detect when the second viewport is in view
  const intersection = useIntersection(secondViewportRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  //fadeIn and fadeOut functions will handle the fade in and fade out of the second viewport
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  //if the intersection ratio is less than 0.5, we want to fade out the second viewport else we want to fade it in
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
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
    tl.fromTo(skills, 2, { opacity: 1 }, { opacity: 0 }, 0);
    wrapper.current.forEach((el) => {
      tl.fromTo(el, 1.5, { opacity: 0 }, { opacity: 1 }, 1.5);
    });
    tl.fromTo(scrollIcon, 1.5, { opacity: 0 }, { opacity: 1, delay: 0.3 }, 1.5);
  }, []);

  const handleScrollDown = () => {
    gsap.to(document.documentElement, {
      duration: 1,
      scrollTop: secondViewportRef.current.offsetTop,
    });
  };
  return (
    <Wrapper>
      <FirstViewport>
        <Skills />
        <ContactMeWrapper></ContactMeWrapper>

        <IconDownWrap ref={(el) => (scrollIcon = el)}>
          <StyledFaChevronCircleDown theme={theme} onClick={handleScrollDown} />
        </IconDownWrap>
      </FirstViewport>
      <SecondViewport ref={secondViewportRef} className="fadeIn">
        <RoadMap setRoadmapRef={setRoadmapRef} setMapIndex={setMapIndex} />
        <Controller
          roadmapRef={roadmapRef}
          mapIndex={mapIndex}
          setMapIndex={setMapIndex}
        />
      </SecondViewport>
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
const SecondViewport = styled.div`
  position: relative;
  height: 89vh;
  top: 27vh;
`;
const Wrapper = styled.div`
  height: 200vh;
  display: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
`;

const StyledFaChevronCircleDown = styled(FaChevronCircleDown)`
  font-size: 4rem;
  color: #50196f;
  opacity: 0.3;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  ${({ theme }) => theme === "dark" && `color: whitesmoke;`};
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const IconDownWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 2vh;
  left: 50%;
  width: 10vw;
  transform: translateX(-50%);
`;

const ContactMeWrapper = styled.div`
  width: 50%;
`;
export default About;
