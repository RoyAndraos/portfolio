import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { CgChevronDoubleLeftO } from "react-icons/cg";
import ThemeContext from "../../contexts/ColorTheme";
import gsap from "gsap";

const Controller = ({ roadmapRef, mapIndex, setMapIndex }) => {
  const { theme } = useContext(ThemeContext);
  let leftRef = useRef(null);
  let rightRef = useRef(null);
  let farLeftRef = useRef(null);
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
    gsap.fromTo(
      farLeftRef,
      { opacity: 0, x: -50 },
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

  const handleFarLeft = () => {
    setMapIndex(0);
    scrollToMapIndex(0);
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
    <Wrapper theme={theme}>
      <FarLeft onClick={handleFarLeft} ref={(el) => (farLeftRef = el)}>
        <StyledPiCaretCircleDoubleLeftFill theme={theme} />
      </FarLeft>
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
  top: 14vh;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1vw;
  border-radius: 20px;
`;

const StyledPiCaretCircleDoubleLeftFill = styled(CgChevronDoubleLeftO)`
  color: #50196f;
  background-color: white;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-right: 3vw;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background-color: #50196f;
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
  ${({ theme }) =>
    theme === "dark" && `color: black;background-color: #a742bc;`};
`;

const StyledFaAngleLeft = styled(FaChevronCircleLeft)`
  color: white;
  background-color: #50196f;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  margin-right: 1vw;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
    color: #50196f;
    background-color: white;
  }

  &:active {
    transform: scale(0.9);
  }
  ${({ theme }) =>
    theme === "dark" && `color:black;background-color: #a742bc;`};
`;

const StyledFaAngleRight = styled(FaChevronCircleRight)`
  color: white;
  background-color: #50196f;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
    color: #50196f;
    background-color: white;
  }
  &:active {
    transform: scale(0.9);
  }
  ${({ theme }) =>
    theme === "dark" && `color: black;background-color: #a742bc;opacity: 1`};
`;

const Left = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;
const FarLeft = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  font-size: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  outline: none;
  align-items: center;
`;

const Right = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  outline: none;
  align-items: center;
`;

export default Controller;
