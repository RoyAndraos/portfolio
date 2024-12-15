import React, { useContext, useRef, useEffect } from "react";
import { CardTitle, StyledImage, Title, Container } from "./GuitarDescription";
import ThemeContext from "../contexts/ColorTheme";
import vb from "../../assets/vb.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import {
  Collapse,
  CollapseWrapper,
  TitleImgWrap,
} from "./BarberShopDescription";
import styled from "styled-components";
import gsap from "gsap";
import { AnimationWrap, Info } from "./PixSnap";
const Vblack = ({ collapsed, setCollapsed, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (collapsed.vblack) {
      gsap.fromTo(
        expandRef.current,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      );
    } else {
      gsap.fromTo(
        collapseRef.current,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      );
    }
  }, [collapsed.vblack]);
  const collapseRef = useRef(null);
  const expandRef = useRef(null);
  //when collapse is pressed, animate the collapse
  const animateCollapse = () => {
    gsap.to(collapseRef.current, {
      duration: 0.5,
      maxHeight: "0",
      minHeight: "8vh",
      opacity: 0,
    });
    //wait 0.5 seconds before setting the collapse state to true
    setTimeout(() => {
      setCollapsed({ ...collapsed, vblack: true });
    }, 500);
  };
  const animateExpand = () => {
    gsap.to(expandRef.current, {
      duration: 0.5,
      maxHeight: "70vh",
      minHeight: "40vh",
      opacity: 0,
      onComplete: () => {
        setCollapsed({ ...collapsed, vblack: false });
      },
    });
  };
  return (
    <Container $theme={theme}>
      {collapsed.vblack ? (
        <CollapseWrapper ref={expandRef}>
          <Title $theme={theme}>
            V. Black Tattoos{" "}
            <Collapse $theme={theme} onClick={() => animateExpand()}>
              <FaAngleDown />{" "}
            </Collapse>
          </Title>
          <CardTitle $theme={theme}>
            {!isMobile ? "September 2024 - September 2024" : "Sept 2024"}
          </CardTitle>
          <LinkToWebsite $theme={theme} href="https://vblacktattoos.com/">
            Visit
          </LinkToWebsite>
        </CollapseWrapper>
      ) : (
        <AnimationWrap ref={collapseRef}>
          <TitleImgWrap $theme={theme}>
            <div>
              <Title $theme={theme}>
                V. Black Tattoos{" "}
                <Collapse $theme={theme} onClick={() => animateCollapse()}>
                  <FaAngleUp />{" "}
                </Collapse>
              </Title>
              {isMobile && (
                <a href="https://vblacktattoos.com" style={{ width: "100%" }}>
                  <StyledImage
                    style={{ width: "100%" }}
                    src={vb}
                    alt="vblack website screenshot"
                  />
                </a>
              )}
              <div>
                <CardTitle $theme={theme}>Project Overview</CardTitle>
                <Info>
                  V. Black Tattoos is a modern, user-friendly platform tailored
                  for tattoo enthusiasts and clients to explore, book, and
                  interact with unique tattoo designs and flashes. Built with
                  cutting-edge technologies like Cloudinary for image
                  management, Mailtrap for secure email handling, and GSAP for
                  stunning animations, this website offers a smooth and
                  immersive experience.
                </Info>
              </div>
            </div>
            {!isMobile && (
              <a href="https://vblacktattoos.com" style={{ width: "100%" }}>
                <StyledImage
                  style={{ width: "100%" }}
                  src={vb}
                  alt="vblack website screenshot"
                />
              </a>
            )}
          </TitleImgWrap>

          <div>
            <CardTitle $theme={theme}>Key Features</CardTitle>
            <ul>
              <li>Showcase of Tattoo and Flash Work</li>
              The artist can effortlessly upload their latest tattoo projects
              and flashes, allowing clients to browse through a beautifully
              presented portfolio.
              <li>Seamless Booking Forms</li>
              Dedicated forms for booking tattoos and flashes ensure a
              hassle-free process for clients, tailored to their specific needs.
              <li>Dynamic Animations</li>
              GSAP-powered animations enhance the user experience, creating a
              visually captivating journey across the website.
            </ul>
          </div>
          <div>
            <CardTitle $theme={theme}>Why This Project?</CardTitle>
            <p>
              V. Black Tattoos merges my passion for web development and
              creative design to empower tattoo artists to showcase their work
              and connect with clients. This project highlights my expertise in
              creating visually appealing, interactive platforms using modern
              technologies while addressing the unique needs of the tattoo
              industry.
            </p>
          </div>
          <div>
            Check out my project and see how it works!{" "}
            <a
              style={{ textDecoration: "none", color: "#a742bc" }}
              href="https://vblacktattoos.com/"
            >
              V. Black Tattoos
            </a>
          </div>
        </AnimationWrap>
      )}
    </Container>
  );
};
export const LinkToWebsite = styled.a`
  color: ${(props) => (props.$theme === "dark" ? "#a742bc" : "white")};
  background-color: ${(props) =>
    props.$theme === "dark" ? "transparent" : "#50196f"};
  border: ${(props) =>
    props.$theme === "dark" ? "1px solid #a742bc" : "1px solid #50196f"};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  font-size: 1.4rem;
  padding: 1vh 2vw;
  text-decoration: none;
  width: fit-content;
  place-self: center;
  &:hover {
    background-color: white;
    color: #50196f;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
export default Vblack;
