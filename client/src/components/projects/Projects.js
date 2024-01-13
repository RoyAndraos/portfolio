import { useRef } from "react";
import styled from "styled-components";
import ECommerceDescription from "./ECommerceDescription";
import gsap, { TimelineLite, Power4 } from "gsap";
import GuitarDescription from "./GuitarDescription";
import BarberShopDescription from "./BarberShopDescription";
const Projects = () => {
  let eCommerceRef = useRef(null);
  let hollywoodRef = useRef(null);
  let guitarRef = useRef(null);
  let descriptionRef = useRef(null);

  const hoverEffect = (ref) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.to(ref.current, {
      boxShadow: "0 0 10px 0px #50196f",
      scale: "1.1",
      duration: 0.2,
      ease: Power4.easeOut,
    });
  };
  const unHoverEffect = (ref) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.to(ref.current, {
      boxShadow: "0 0 0px 0px #50196f",
      scale: "1",
      duration: 0.2,
      ease: Power4.easeOut,
    });
  };

  return (
    <Container>
      <Wrapper>
        <ECommerceDescription
          eCommerceRef={eCommerceRef}
          guitarRef={guitarRef}
          hollywoodRef={hollywoodRef}
          descriptionRef={descriptionRef}
          hoverEffect={hoverEffect}
          unHoverEffect={unHoverEffect}
        />
        <GuitarDescription
          eCommerceRef={eCommerceRef}
          guitarRef={guitarRef}
          hollywoodRef={hollywoodRef}
          descriptionRef={descriptionRef}
          hoverEffect={hoverEffect}
          unHoverEffect={unHoverEffect}
        />
        <BarberShopDescription
          eCommerceRef={eCommerceRef}
          guitarRef={guitarRef}
          hollywoodRef={hollywoodRef}
          descriptionRef={descriptionRef}
          hoverEffect={hoverEffect}
          unHoverEffect={unHoverEffect}
        />
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
  /* &:hover {
    box-shadow: 0 0 10px 0px #50196f;
    transform: scale(1.1);
  } */
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