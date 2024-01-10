import { ProjectCard, Title } from "./Projects";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../contexts/ColorTheme";
import {
  BackButton,
  DemoButton,
  Container,
  BgImage,
  Wrapper,
  InfoCard,
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
}) => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [animationStatus, setAnimationStatus] = useState("notInProgress");

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
    animateDescription(descriptionRef);
  }, [showDemo, descriptionRef]);

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
                  <span
                    style={{
                      marginLeft: "20px",
                      fontWeight: "600",
                      opacity: "0.7",
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
          <DemoButton
            onClick={() => {
              navigate("/projects/guitarSheetWriter");
            }}
          >
            Demo
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
`;

export default GuitarDescription;
