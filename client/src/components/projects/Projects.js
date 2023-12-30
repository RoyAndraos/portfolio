import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import styled from "styled-components";
import ECommerceDescription from "./ECommerceDescription";
import gsap, { TimelineLite } from "gsap";
const Projects = () => {
  const navigate = useNavigate();
  let eCommerceRef = useRef(null);
  let hollywoodRef = useRef(null);
  let guitarRef = useRef(null);
  let demoRef = useRef(null);
  const animateShowDescription = (
    refClicked,
    otherRef,
    orhterOtherRef,
    demoRef
  ) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      refClicked.current,
      { x: "0", opacity: "1" },
      { x: "100%", opacity: "0", scale: "2", duration: 0.3 }
    );
    tl.fromTo(
      otherRef.current,
      { y: "0", opacity: "1" },
      { y: "100%", opacity: "0", duration: 0.2, delay: -0.2 }
    );
    tl.fromTo(
      orhterOtherRef.current,
      { y: "0", opacity: "1" },
      { y: "100%", opacity: "0", duration: 0.2, delay: -0.2 }
    );
    tl.fromTo(
      demoRef.current,
      { y: "0", opacity: "0" },
      { y: "100%", opacity: "1", duration: 0.5, delay: 0.5 }
    );
  };
  const unanimateShowDescription = (refClicked, otherRef, orhterOtherRef) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      refClicked.current,
      { x: "100%", opacity: "0" },
      { x: "0", opacity: "1", scale: "1", duration: 0.3 }
    );
    tl.fromTo(
      otherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", duration: 0.2, delay: -1 }
    );
    tl.fromTo(
      orhterOtherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", duration: 0.2, delay: -1 }
    );
  };
  return (
    <Container>
      <Wrapper>
        <ECommerceDescription
          eCommerceRef={eCommerceRef}
          guitarRef={guitarRef}
          hollywoodRef={hollywoodRef}
          animateShowDescription={animateShowDescription}
          unanimateShowDescription={unanimateShowDescription}
          demoRef={demoRef}
        />
        <ProjectCard
          key={"guitarProject"}
          ref={guitarRef}
          onClick={() => {
            navigate("/projects/guitarSheetWriter");
          }}
        >
          <Title>Guitar Sheet Writer</Title>
        </ProjectCard>
        <ProjectCard
          key={"hollywoodProject"}
          ref={hollywoodRef}
          onClick={() => {
            navigate("/projects/hollywoodBarberShop");
          }}
        >
          <Title>Hollywood Barber Shop</Title>
        </ProjectCard>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  top: 10vh;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ProjectCard = styled.div`
  height: 30vh;
  width: 25vw;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 0 10px 0px #50196f;
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  width: 25vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  z-index: 3;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: absolute;
`;

export default Projects;
