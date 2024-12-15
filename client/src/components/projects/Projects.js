import styled from "styled-components";
import GuitarDescription from "./GuitarDescription";
import BarberShopDescription from "./BarberShopDescription";
import Vblack from "./Vblack";
import PixSnap from "./PixSnap";
import { useState, useEffect } from "react";
const Projects = () => {
  const [collapsed, setCollapsed] = useState({
    hollywood: true,
    guitar: true,
    pixsnap: true,
    vblack: true,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    }
  }, []);
  return (
    <Container>
      <PixSnap
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <Vblack
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <BarberShopDescription
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <GuitarDescription
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  top: 20vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100vw;
    height: unset;
    top: 11vh;
  }
`;

export const ProjectCard = styled.div`
  width: 28vw;
  aspect-ratio: 16/9;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: all 0.5s ease;
  @media (max-width: 768px) {
    width: 80vw;
    height: 25vh;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  z-index: 3;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  @media (max-width: 768px) {
    width: 80vw;
    font-size: 1rem;
  }
`;

export default Projects;
