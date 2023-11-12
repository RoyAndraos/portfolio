import styled from "styled-components";
import logo from "../assets/finalPortfolioReactIcon.png";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power2 } from "gsap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HomePage = () => {
  let wrapper = useRef(null);
  let img = useRef(null);
  let gitLink = useRef(null);
  let linkedInLink = useRef(null);
  let otherTextAfterElement = useRef(null);
  gsap.registerPlugin();
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
    <Container>
      <Wrapper>
        <ImageWrapper ref={(el) => (wrapper = el)}>
          <Logo src={logo} ref={(el) => (img = el)}></Logo>
        </ImageWrapper>
        <InfoWrapper>
          <TextWrapper>
            <Heading>Front-end Developer</Heading>
          </TextWrapper>
          <InfoTextWrapper>
            <Info>
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
          <Git />
        </a>
        <a
          href="https://www.linkedin.com/in/roy-andraos-b92ab01a8/"
          ref={(el) => (linkedInLink = el)}
        >
          <LinkedIn />
        </a>
      </LinksWrapper>
    </Container>
  );
};

const InfoTextWrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 89vh;
  left: 50%;
  top: 0vh;
  transform: translateX(-50%);
  @media (max-width: 800px) {
    top: 0;
    width: 90%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50vh;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 80vh;
  }
`;
const Logo = styled.img`
  width: 80%;
  position: absolute;
  inset: 0;
  transform: scale(0.3) rotate(0);
  margin: auto;
  min-width: 300px;
  @media (max-width: 800px) {
    width: 50%;
  }
`;
const AfterEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: radial-gradient(
    circle at 52.1% -29.6%,
    rgb(144, 17, 105) 0%,
    rgb(51, 0, 131) 100.2%
  );
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  @media (max-width: 800px) {
    width: 100%;
    height: 40%;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  word-wrap: break-word;
  align-items: center;
  overflow: hidden;
  @media (max-width: 800px) {
    height: 40%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  position: relative;
  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    text-align: center;
  }
`;
const Heading = styled.h1`
  font-size: clamp(25px, 3vw, 40px);
  margin: 0;
  color: #50196f;
  font-family: "Roboto", sans-serif;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;
const LinksWrapper = styled.div`
  width: 20%;
  height: 10vh;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    height: 10vh;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Git = styled(BsGithub)`
  font-size: 3rem;
  margin: 0 2rem;
  color: #50196f;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;
const LinkedIn = styled(BsLinkedin)`
  font-size: 3rem;
  margin: 0 2rem;
  color: #50196f;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

const Info = styled.p`
  font-size: clamp(20px, 1.5vw, 30px);
  margin: 0;
  margin-top: 3rem;
  width: 70%;
  font-family: "Roboto", sans-serif;
  @media (max-width: 800px) {
    font-size: clamp(15px, 2vw, 30px);
    margin: 0 auto;
    width: 50%;
  }
`;
export default HomePage;
