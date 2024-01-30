import styled, { keyframes } from "styled-components";
import logo from "../assets/finalPortfolioReactIcon.png";
import { useEffect, useRef, useContext } from "react";
import gsap, { TimelineLite, Power2 } from "gsap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import ThemeContext from "./contexts/ColorTheme";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  gsap.registerPlugin();
  let wrapper = useRef(null);
  let img = useRef(null);
  let gitLink = useRef(null);
  let linkedInLink = useRef(null);
  let otherTextAfterElement = useRef(null);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(wrapper, 1, { css: { visibility: "visible" } })
      .to(otherTextAfterElement, 1.4, {
        width: "0",
        ease: Power2.easeInOut,
        delay: -1.4,
      })
      .fromTo(
        gitLink,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: Power2.easeInOut,
          delay: -1,
        }
      )
      .fromTo(
        linkedInLink,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: Power2.easeInOut,
          delay: -0.8,
        }
      )
      .to(img, 1.4, {
        scale: 1, // End scale
        rotate: 720, // End rotation
        ease: Power2.easeInOut,
        delay: -1.4, // Delays the animation start
      })

      .fromTo(
        img,
        {
          rotate: 360, // Start rotation
        },
        {
          rotate: 720, // End rotation
          duration: 9,
          ease: "none",
          repeat: -1,
        }
      );
  }, []);
  return (
    <Container theme={theme}>
      <Wrapper>
        <ImageWrapper ref={(el) => (wrapper = el)}>
          <Logo src={logo} ref={(el) => (img = el)}></Logo>
        </ImageWrapper>
        <InfoWrapper>
          <TextWrapper>
            <Heading theme={theme}>Full Stack Developer</Heading>
            <ContactMeButton
              theme={theme}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Me
            </ContactMeButton>
          </TextWrapper>
          <InfoTextWrapper>
            <Info theme={theme}>
              Making my way into the world of web development, blooming
              applications with React, and learning new technologies along the
              way.
            </Info>
            <AfterEl ref={(el) => (otherTextAfterElement = el)} />
          </InfoTextWrapper>
        </InfoWrapper>
      </Wrapper>
      <LinksWrapper>
        <a href="https://github.com/RoyAndraos" ref={(el) => (gitLink = el)}>
          <Git theme={theme} />
        </a>
        <a
          href="https://www.linkedin.com/in/roy-andraos-b92ab01a8/"
          ref={(el) => (linkedInLink = el)}
        >
          <LinkedIn theme={theme} />
        </a>
      </LinksWrapper>
    </Container>
  );
};

const InfoTextWrapper = styled.div`
  height: fit-content;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 89vh;
  position: relative;
  top: 10vh;
  ${({ theme }) => theme === "dark" && `background: transparent`};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  height: 50vh;
  position: relative;
  z-index: 12;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
`;
export const Logo = styled.img`
  width: 70%;
  position: absolute;
  inset: 0;
  transform: scale(0.3) rotate(0);
  margin: auto;
  @media (max-width: 800px) {
    width: 40%;
  }
`;
const AfterEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  border-radius: 20px;
  background: radial-gradient(
    circle at 52.1% -29.6%,
    rgb(144, 17, 105) 0%,
    rgb(51, 0, 131) 100.2%
  );
  @media (max-width: 800px) {
    height: 108%;
    width: 90%;
    left: 5%;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  @media (max-width: 800px) {
    width: 100%;
    height: 30%;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  transform: translateX(-10%);
  word-wrap: break-word;
  align-items: center;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  position: relative;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;
const Heading = styled.h1`
  font-size: clamp(25px, 3vw, 40px);
  margin: 0;
  color: #50196f;
  font-family: "Roboto", sans-serif;
  margin-right: 40px;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
`;
export const LinksWrapper = styled.div`
  width: 20%;
  height: 10vh;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 90vw;
    height: 10vh;
    bottom: 5%;
    right: 5vw;
    z-index: 1000;
  }
`;

export const Git = styled(BsGithub)`
  font-size: 4rem;
  margin: 0 2rem;
  color: #50196f;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;
export const LinkedIn = styled(BsLinkedin)`
  font-size: 4rem;
  margin: 0 2rem;
  color: #50196f;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const Info = styled.p`
  font-size: clamp(20px, 1.5vw, 30px);
  margin: 0;
  margin-top: 3rem;
  width: 70%;
  font-family: "Roboto", sans-serif;
  line-height: 1.8;
  text-align: right;
  @media (max-width: 800px) {
    margin: 0 auto;
    width: 70%;
  }
  ${({ theme }) => theme === "dark" && `color: white;`};
`;

const glitch = keyframes`
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
`;

const ContactMeButton = styled.button`
  width: 150px;
  height: 76px;
  line-height: 78px;
  font-size: 20px;
  font-family: "Bebas Neue", sans-serif;
  background: linear-gradient(45deg, transparent 5%, #50196f 5%);
  clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 80%);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 40%;
  border-top-right-radius: 30%;
  border: 0;
  color: #fff;
  letter-spacing: -1px;
  outline: transparent;
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  right: 0;
  &:hover {
    transform: scale(1.1);
  }

  &:after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "HIRE ME";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #a742bc 5%
    );
    text-shadow: -3px -3px 0px #a742bc, 3px 3px 0px #a742bc;
    clip-path: var(--slice-0);
  }

  &:hover:after {
    animation: 1s ${glitch};
    animation-timing-function: steps(2, end);
  }
  @media (max-width: 800px) {
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
  }
`;

export default HomePage;
