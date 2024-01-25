import { ProjectCard, Title } from "./Projects";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../contexts/ColorTheme";
import {
  BackButton,
  DemoButton,
  Container,
  BgImage,
  Wrapper,
  CardTitle,
} from "./ECommerceDescription";
import gsap, { TimelineLite } from "gsap";
import guitarBg from "../../assets/GuitarSheetWriterBg.png";
import styled from "styled-components";
const GuitarDescription = ({
  eCommerceRef,
  guitarRef,
  hollywoodRef,
  demoRef,
  descriptionRef,
  hoverEffect,
  unHoverEffect,
  isMobile,
}) => {
  const [showDemo, setShowDemo] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [animationStatus, setAnimationStatus] = useState("notInProgress");
  const animateDescriptionMobile = (descriptionRef) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    descriptionRef.current &&
      tl.fromTo(
        descriptionRef.current,
        {
          opacity: "0",
          position: "absolute",
          top: "0",
          left: "0",
        },
        {
          opacity: "1",
          duration: 1,
          delay: 1,
        }
      );
  };
  const animateDescription = (descriptionRef) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    descriptionRef.current &&
      tl.fromTo(
        descriptionRef.current,
        {
          opacity: "0",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
        {
          opacity: "1",
          duration: 1,
          delay: 1,
        }
      );
  };
  useEffect(() => {
    isMobile
      ? animateDescriptionMobile(descriptionRef)
      : animateDescription(descriptionRef);
  }, [showDemo, descriptionRef, isMobile]);

  const animateShowDescription = (
    refClicked,
    secondProjCard,
    thirdProjCard
  ) => {
    setAnimationStatus("inProgress");
    setTimeout(() => {
      setAnimationStatus("notInProgress");
    }, 2000);
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      thirdProjCard.current,
      { opacity: "1", y: "0" },
      {
        y: "100%",
        opacity: "0",
        zIndex: "-1",
        duration: 0.2,
      }
    );
    tl.fromTo(
      secondProjCard.current,
      { opacity: "1", y: "0" },
      {
        y: "100%",
        opacity: "0",
        zIndex: "-1",
        duration: 0.2,
      }
    );
    tl.fromTo(
      refClicked.current,
      { opacity: "1" },
      {
        opacity: "0",
        zIndex: "-1",
        scale: "3",
        duration: 0.4,
      }
    );
  };
  const unanimateShowDescription = (refClicked, otherRef, orhterOtherRef) => {
    setAnimationStatus("inProgress");
    setTimeout(() => {
      setAnimationStatus("notInProgress");
    }, 2000);
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      refClicked.current,
      { opacity: "0" },
      {
        opacity: "1",
        zIndex: "0",
        scale: "1",
        x: "0",
        duration: 0.4,
      }
    );
    tl.fromTo(
      otherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", zIndex: "1", duration: 0.2 }
    );
    tl.fromTo(
      orhterOtherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", zIndex: "1", duration: 0.2 }
    );
  };

  return (
    <div>
      {showDemo && (
        <Container ref={descriptionRef}>
          {isMobile ? (
            <Title
              style={{
                width: "95%",
                height: "10vh",
                position: "fixed",
              }}
            ></Title>
          ) : (
            <Title
              style={{
                width: "100%",
                height: "10%",
                fontSize: "2rem",
                color: "#a742bc",
              }}
            >
              Guitar Sheet Writer
            </Title>
          )}

          <Wrapper theme={theme}>
            <InfoWrapper>
              <InfoCard>
                <CardTitle>Instructions</CardTitle>
                <p style={{ margin: "20% 20px", fontSize: "1.3rem" }}>
                  Build a Full Stack application that makes use of a MongoDB
                  database, and an API of your choice.
                  <br />
                  <br />
                  The application should have a user interface, and allow the
                  user to use it without signing up/in, as well as get benefits
                  for doing so.
                  <br />
                  <br />
                  <span
                    style={{
                      marginLeft: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Time given:
                    <span style={{ color: "yellow", opacity: "1" }}>
                      {" "}
                      5 weeks
                    </span>
                    .
                  </span>
                </p>
              </InfoCard>
              <InfoCard>
                <CardTitle>My Idea</CardTitle>
                <p style={{ margin: "20% 20px", fontSize: "1.3rem" }}>
                  I wanted to create an application that would write the music
                  sheets for me: <br />
                  <br />
                  User would play the guitar, application would listen to it
                  then write the notes on the sheet music in real time.
                </p>
              </InfoCard>
              <InfoCard>
                <CardTitle>Execution</CardTitle>
                <p style={{ margin: "20% 20px", fontSize: "1.3rem" }}>
                  Used the Web Audio API to listen to the guitar, and wrote a
                  pitch detection algorithm to detect and convert the
                  frequencies to notes. <br />
                  <br />
                  Users would be able to use this feature without signing up,
                  but would have to sign up to save/edit or share their music
                  sheets with their friends.
                </p>
              </InfoCard>
            </InfoWrapper>
          </Wrapper>
          <BackButton
            onClick={() => {
              unanimateShowDescription(
                guitarRef,
                eCommerceRef,
                hollywoodRef,
                demoRef
              );
              setShowDemo(false);
            }}
          ></BackButton>
          <DemoButton>
            <a
              style={{ textDecoration: "none", color: "#422800" }}
              href="https://youtu.be/kmPUFGyACNc"
            >
              Demo
            </a>
          </DemoButton>
        </Container>
      )}
      <ProjectCard
        key={"guitarProject"}
        ref={guitarRef}
        onMouseEnter={() => {
          animationStatus === "notInProgress" && hoverEffect(guitarRef);
        }}
        onMouseLeave={() => {
          animationStatus === "notInProgress" && unHoverEffect(guitarRef);
        }}
        onClick={() => {
          animateShowDescription(
            guitarRef,
            eCommerceRef,
            hollywoodRef,
            demoRef
          );
          setShowDemo(true);
        }}
      >
        <Title>Guitar Sheet Writer</Title>
        <BgImage src={guitarBg} alt="screenshot of the project" />
      </ProjectCard>
    </div>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: 80%;
  position: relative;
  left: 5%;
  gap: 1%;
  top: 30%;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2vh;
    top: 12vh;
    padding-bottom: 14vh;
    height: unset;
  }
`;

const InfoCard = styled.div`
  width: 95%;
  height: 70%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 10px 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    height: 80%;
    position: relative;
    transform: translateY(-5%);
    box-shadow: 0 0 10px 0px #50196f;
  }
  @media (max-width: 800px) {
    height: unset;
  }
`;

export default GuitarDescription;
