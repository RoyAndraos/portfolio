import React, { useContext, useRef, useEffect } from "react";
import { CardTitle, StyledImage, Title, Container } from "./GuitarDescription";
import ThemeContext from "../contexts/ColorTheme";
import pix from "../../assets/pix.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import {
  Collapse,
  CollapseWrapper,
  Button,
  TitleImgWrap,
} from "./BarberShopDescription";
import gsap from "gsap";
import styled from "styled-components";

const PixSnap = ({ collapsed, setCollapsed }) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (collapsed.pixsnap) {
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
  }, [collapsed.pixsnap]);
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
      setCollapsed({ ...collapsed, pixsnap: true });
    }, 500);
  };
  const animateExpand = () => {
    gsap.to(expandRef.current, {
      duration: 0.5,
      maxHeight: "70vh",
      minHeight: "40vh",
      opacity: 0,
      onComplete: () => {
        setCollapsed({ ...collapsed, pixsnap: false });
      },
    });
  };

  return (
    <Container $theme={theme}>
      {collapsed.pixsnap ? (
        <CollapseWrapper ref={expandRef}>
          <Title $theme={theme}>
            PixSnap Magnets
            <Collapse $theme={theme} onClick={() => animateExpand()}>
              <FaAngleDown />{" "}
            </Collapse>
          </Title>
          <CardTitle $theme={theme}>October 2024 - December 2024</CardTitle>
          <Button
            style={{
              width: "fit-content",
              placeSelf: "center",
            }}
            $theme={theme}
          >
            Coming Soon!
          </Button>
        </CollapseWrapper>
      ) : (
        <AnimationWrap ref={collapseRef}>
          <TitleImgWrap>
            <div>
              <Title $theme={theme} className="collapse">
                PixSnap Magnets
                <Collapse $theme={theme} onClick={() => animateCollapse()}>
                  <FaAngleUp />{" "}
                </Collapse>
              </Title>
              <div>
                <CardTitle $theme={theme}>Project Overview</CardTitle>
                <p style={{ width: "70%" }}>
                  PixSnap is a sleek e-commerce platform designed to help users
                  create customizable photo magnets. Built with modern
                  technologies like Stripe for secure payments, ChitChats for
                  efficient shipping, and GSAP for stunning animations, the
                  website offers a seamless and engaging shopping experience.
                </p>
              </div>
            </div>
            <StyledImage src={pix} alt="PixSnap Landing Page" />
          </TitleImgWrap>

          <div>
            <div>
              <CardTitle $theme={theme}>Key Features</CardTitle>
              <ul>
                <li>
                  <strong>Custom Photo Magnet Creation:</strong> Users can
                  upload images and customize them to create unique photo
                  magnets that preserve their cherished memories.
                </li>
                <li>
                  <strong>Streamlined Cart Management:</strong> Add and remove
                  items from the cart with ease, ensuring a smooth and intuitive
                  shopping experience.
                </li>
                <li>
                  <strong>Three-Step Checkout Process:</strong>
                  <ol>
                    <li>Upload images for the photo magnets.</li>
                    <li>
                      Fill out the shipping form and select a preferred shipping
                      rate through ChitChats.
                    </li>
                    <li>Complete payment securely using Stripe.</li>
                  </ol>
                </li>
                <li>
                  <strong>Dynamic Animations:</strong> GSAP-powered animations
                  enhance the visual appeal and user engagement throughout the
                  platform.
                </li>
              </ul>
            </div>
            <div>
              <CardTitle $theme={theme}>Why This Project?</CardTitle>
              <p>
                PixSnap reflects my dedication to creating user-centric
                e-commerce solutions that combine functionality and aesthetics.
                This project showcases my ability to integrate payment gateways,
                shipping APIs, and interactive animations into a cohesive
                platform tailored to users' needs.
              </p>
            </div>
            <div>
              <CardTitle $theme={theme}>
                Explore the Platform (coming very soon!)
              </CardTitle>
              <p>
                Discover PixSnap and experience the magic of customizable photo
                magnets Soon!
              </p>
            </div>
          </div>
        </AnimationWrap>
      )}
    </Container>
  );
};
export const AnimationWrap = styled.div`
  overflow-y: hidden;
  min-height: 40vh;
  max-height: 150vh;
`;

export default PixSnap;
