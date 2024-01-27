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
  let words = useRef([]);
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
    animateSpecialWords(words.current);
  }, []);

  const animateSpecialWords = (refArray) => {
    const tl = new TimelineLite();
    refArray.forEach((el) => {
      tl.fromTo(el, 0.3, { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
    });
  };

  return (
    <FirstViewport>
      <Story theme={theme}>
        <Title theme={theme}>About Me</Title>
        <div style={{ margin: "0" }}>
          My journey into the world of technology began with three semesters in{" "}
          <SpecialWord theme={theme} ref={(el) => (words.current[0] = el)}>
            computer engineering,{" "}
          </SpecialWord>
          where I found my passion for programming.
          <br />
          <br />
          <p style={{ textAlign: "right", width: "100%", margin: "0" }}>
            Armed with curiosity and determination, I delved into web
            development. Self-taught in{" "}
            <SpecialWord theme={theme} ref={(el) => (words.current[1] = el)}>
              HTML,
            </SpecialWord>
            <SpecialWord theme={theme} ref={(el) => (words.current[2] = el)}>
              {" "}
              CSS,
            </SpecialWord>
            <SpecialWord theme={theme} ref={(el) => (words.current[3] = el)}>
              {" "}
              and JavaScript,{" "}
            </SpecialWord>
            I soon discovered the power of bringing designs to life and creating
            interactive user experiences.
          </p>
          <br />
          Eager to deepen my skills, I embarked on a transformative journey by
          enrolling in a{" "}
          <SpecialWord theme={theme} ref={(el) => (words.current[4] = el)}>
            bootcamp
          </SpecialWord>
          . There, I honed my craft by mastering{" "}
          <SpecialWord theme={theme} ref={(el) => (words.current[5] = el)}>
            React.js
          </SpecialWord>{" "}
          for front-end development.
          <br />
          <br />
          <p style={{ textAlign: "right", width: "100%", margin: "0" }}>
            With{" "}
            <SpecialWord theme={theme} ref={(el) => (words.current[6] = el)}>
              Node.js and Express.js
            </SpecialWord>{" "}
            as my guiding lights, I dived into the intricacies of{" "}
            <SpecialWord theme={theme} ref={(el) => (words.current[7] = el)}>
              server-side development,{" "}
            </SpecialWord>{" "}
            rounding out my skills and bringing a holistic approach to my
            projects.
          </p>
          <br />
          Today, I am on a constant quest for innovation, from concept to code,
          I turn ideas into user-centric experiences.
        </div>
      </Story>
      <Skills />
    </FirstViewport>
  );
};

const FirstViewport = styled.div`
  display: flex;
  height: 85vh;
  top: 10vh;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 200vh;
    overflow: scroll;
    top: 5vh;
  }
`;

const Story = styled.div`
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) =>
    props.theme === "light" ? "rgba(255,255,255,0.9)" : "transparent"};
  width: 35%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 600;
  border-radius: 20px;
  padding: 0 40px;
  font-size: 1.3rem;
  background-color: ${(props) =>
    props.theme === "light" ? "rgba(255,255,255,0.9)" : "rgba(0, 0, 0, 0.4)"};
  border: 2px solid #50196f;
  @media (max-width: 800px) {
    width: 80%;
    font-size: 1.2rem;
    top: 12vh;
    height: 100%;
    position: relative;
    border: none;
    overflow-y: hidden;
    padding: 1rem;
    background-color: ${(props) =>
      props.theme === "light" ? "rgba(255,255,255,0.4)" : "rgba(0, 0, 0, 0.4)"};
  }
`;

const SpecialWord = styled.span`
  font-weight: 700;
  position: relative;
  color: ${(props) => (props.theme === "light" ? "#50196f" : "#a742bc")};
`;
const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 100%;
  color: ${(props) => (props.theme === "light" ? "#50196f" : "#a742bc")};
  font-weight: 700;
`;
export default About;

// <a href="https://www.freepik.com/free-photo/white-wooden-texture-flooring-background_3475742.htm#query=white%20wood%20texture&position=1&from_view=keyword&track=ais&uuid=1a13530d-af17-4322-ad26-24bc0c9f0353">Image by rawpixel.com</a> on Freepik
