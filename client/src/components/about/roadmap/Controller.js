import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ThemeContext from "../../contexts/ColorTheme";
import gsap from "gsap";

const Controller = ({ roadmapRef, mapIndex, setMapIndex }) => {
  const { theme } = useContext(ThemeContext);
  let leftRef = useRef(null);
  let rightRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      leftRef,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.inOut", delay: 1.2 }
    );
    gsap.fromTo(
      rightRef,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.inOut", delay: 1.2 }
    );
  }, []);
  const handleLeft = () => {
    if (mapIndex === 0) {
      return;
    } else {
      setMapIndex((prev) => prev - 1);
      scrollToMapIndex(mapIndex - 1);
    }
  };

  const handleRight = () => {
    if (mapIndex === 27) {
      return;
    } else {
      setMapIndex((prev) => prev + 1);
      scrollToMapIndex(mapIndex + 1);
    }
  };

  const scrollToMapIndex = (index) => {
    const scrollAmount = roadmapRef.current.offsetWidth * index;
    gsap.to(roadmapRef.current, {
      scrollLeft: scrollAmount,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <Wrapper>
      <Left onClick={handleLeft} ref={(el) => (leftRef = el)}>
        <StyledFaAngleLeft theme={theme} />
      </Left>
      <Right onClick={handleRight} ref={(el) => (rightRef = el)}>
        <StyledFaAngleRight theme={theme} />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 5%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 8;
  @media (max-width: 768px) {
    bottom: 3%;
  }
`;

const StyledFaAngleLeft = styled(FaChevronCircleLeft)`
  color: white;
  opacity: 0.4;
  background-color: #50196f;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
  ${({ theme }) => theme === "dark" && `color: black;background-color: white;`};
`;

const StyledFaAngleRight = styled(FaChevronCircleRight)`
  color: white;
  opacity: 0.4;
  background-color: #50196f;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
  ${({ theme }) => theme === "dark" && `color: black;background-color: white;`};
`;

const Left = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  font-size: 5rem;
`;

const Right = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  font-size: 5rem;
`;

export default Controller;
