import React, { useState, useContext } from "react";
import styled from "styled-components";
import FrontEnd from "./about/FrontEnd";
import BackEnd from "./about/BackEnd";
import AnimationUI from "./about/AnimationUI";
import Auth from "./about/Auth";
import CommunicationServices from "./about/CommunicationServices";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import RoadMap from "./about/RoadMap";
import ThemeContext from "./contexts/ColorTheme";
import { FaChevronCircleDown } from "react-icons/fa";
import { useIntersection } from "react-use";
import Controller from "./about/roadmap/Controller";
const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roadmapRef, setRoadmapRef] = useState(null);
  const [mapIndex, setMapIndex] = useState(0);
  gsap.registerPlugin();
  let wrapper = useRef([]);
  let skills = useRef(null);
  let scrollIcon = useRef(null);
  let secondViewportRef = useRef(null);

  const { theme } = useContext(ThemeContext);
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
  // For small size screens, we want to display only one component at a time
  //handlenext/prev will handle the transition between components left to right and vice versa
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % wrapper.current.length;
    animateTransition(currentIndex, newIndex);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? wrapper.current.length - 1 : currentIndex - 1;
    animateTransition(currentIndex, newIndex);
    setCurrentIndex(newIndex);
  };
  // animate the transition between components on smaller screens
  const animateTransition = (currentIndex, newIndex) => {
    const tl = new TimelineLite();
    tl.to(wrapper.current[currentIndex], { opacity: 0, duration: 1 }).to(
      wrapper.current[newIndex],
      { opacity: 1, duration: 1, delay: -1 },
      "-=0.5"
    );
    // .fromTo(leftArrow, { opacity: 0 }, { opacity: 1, duration: 0.3 })
    // .fromTo(
    //   rightArrow,
    //   { opacity: 0 },
    //   { opacity: 1, duration: 0.3, delay: -0.29 }
    // );
  };
  const handleScrollDown = () => {
    gsap.to(document.documentElement, {
      duration: 1,
      scrollTop: secondViewportRef.current.offsetTop,
    });
  };
  return (
    <Wrapper>
      <FirstViewport>
        <Skills ref={(el) => (skills = el)} theme={theme}>
          Skills
        </Skills>
        <LabelComponentWrapper
          ref={(el) => (wrapper.current[0] = el)}
          style={{
            display: !isMobile || currentIndex === 0 ? "flex" : "none",
          }}
          theme={theme}
        >
          <StyledLabel>Front-End</StyledLabel>
          <FrontEnd />
        </LabelComponentWrapper>
        <LabelComponentWrapper
          ref={(el) => (wrapper.current[1] = el)}
          style={{
            display: !isMobile || currentIndex === 1 ? "flex" : "none",
          }}
          theme={theme}
        >
          <StyledLabel>Back-End</StyledLabel>
          <BackEnd />
        </LabelComponentWrapper>
        <LabelComponentWrapper
          ref={(el) => (wrapper.current[2] = el)}
          style={{
            display: !isMobile || currentIndex === 2 ? "flex" : "none",
          }}
          theme={theme}
        >
          <StyledLabel>Authentication</StyledLabel>
          <Auth />
        </LabelComponentWrapper>
        <LabelComponentWrapper
          ref={(el) => (wrapper.current[3] = el)}
          style={{
            display: !isMobile || currentIndex === 3 ? "flex" : "none",
          }}
          theme={theme}
        >
          <StyledLabel>Animation</StyledLabel>
          <AnimationUI />
        </LabelComponentWrapper>
        <LabelComponentWrapper
          ref={(el) => (wrapper.current[4] = el)}
          style={{
            display: !isMobile || currentIndex === 4 ? "flex" : "none",
          }}
          theme={theme}
        >
          <StyledLabel>
            Communication <br />
            Services
          </StyledLabel>
          <CommunicationServices />
        </LabelComponentWrapper>
        {isMobile && (
          <div>
            <LeftArrow onClick={handlePrev} />
          </div>
        )}
        {isMobile && (
          <div>
            <RightArrow onClick={handleNext} />
          </div>
        )}
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

const StyledLabel = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  height: 8%;
  width: 100%;
  text-align: center;
  color: #50196f;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

const LabelComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 80%;
  margin: 3vh 0 5vh 0;
  padding-top: 2vh;
  border-radius: 40px;
  background: whitesmoke;
  overflow: scroll;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1000px) {
    width: 80%;
    position: absolute;
  }
  ${({ theme }) =>
    theme === "dark" &&
    `background: #cccccc;
  ;`};
`;
const LeftArrow = styled(FaAngleLeft)`
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
  color: #50196f;
  font-size: 5rem;
  cursor: pointer;
  @media (max-width: 700px) {
    left: 10%;
  }
`;
const RightArrow = styled(FaAngleRight)`
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translateY(-50%);
  color: #50196f;
  font-size: 5rem;
  cursor: pointer;
  @media (max-width: 700px) {
    right: 10%;
  }
`;

const Skills = styled.div`
  position: absolute;
  top: 20%;
  font-size: 20rem;
  color: #50196f;
  @media (max-width: 700px) {
    font-size: 10rem;
  }
  ${({ theme }) => theme === "dark" && `color: whitesmoke;`};
`;

const StyledFaChevronCircleDown = styled(FaChevronCircleDown)`
  font-size: 4rem;
  color: #50196f;
  opacity: 0.3;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: absolute;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme === "dark" && `color: whitesmoke;`};
  &:hover {
    opacity: 1;
    transform: scale(1.2) translateX(-45%);
  }
`;

const IconDownWrap = styled.div`
  position: absolute;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);
`;
export default About;
