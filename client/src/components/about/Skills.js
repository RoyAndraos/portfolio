import styled from "styled-components";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import AnimationUI from "./AnimationUI";
import Auth from "./Auth";
import CommunicationServices from "./CommunicationServices";

const Skills = () => {
  const [isSelected, setIsSelected] = useState([
    "true",
    "false",
    "false",
    "false",
    "false",
  ]);
  useEffect(() => {
    ["true", "false", "false", "false", "false"].forEach((item, i) => {
      if (item === "false") {
        if (wrapper.current[i]) {
          gsap.fromTo(
            wrapper.current[i].querySelector("p"),
            {
              rotation: 0,
              opacity: 0,
              width: "200%",
            },
            {
              rotation: -90,
              opacity: 1,
              duration: 0.5,
              width: "200%",
              position: "absolute",
              y: "10%",
            }
          );
        }
      } else {
        if (wrapper.current[i]) {
          gsap.to(wrapper.current[i].querySelector("p"), {
            rotation: -90,
            width: "200%",
            position: "absolute",
            y: "10%",
            opacity: 0,
          });
        }
      }
    });
  }, []);
  const wrapper = useRef([]);
  const selectComponent = (index) => {
    const wasSelected = isSelected.indexOf("true");
    const newIsSelected = isSelected.map((item, i) => {
      if (i === index) {
        if (item === "false") {
          gsap.to(wrapper.current[wasSelected].querySelector("p"), {
            rotation: -90,
            opacity: 1,
            width: "200%",
            position: "absolute",
            y: "10%",
            duration: 0.3,
          });
          return "true";
        } else {
          return "true";
        }
      } else {
        return "false";
      }
    });

    gsap.to(
      wrapper.current[index].querySelector("p"),

      {
        opacity: 0,
        duration: 0.5,
      }
    );
    setIsSelected(newIsSelected);
  };
  return (
    <SkillsWrapper>
      <ComponentWrapper
        isselected={isSelected[0]}
        ref={(el) => (wrapper.current[0] = el)}
        onClick={() => {
          selectComponent(0);
        }}
      >
        <Title isselected={isSelected[0]}>Front End</Title>

        {isSelected[0] === "true" && <FrontEnd />}
      </ComponentWrapper>

      <ComponentWrapper
        isselected={isSelected[1]}
        ref={(el) => (wrapper.current[1] = el)}
        onClick={() => {
          selectComponent(1);
        }}
      >
        <Title isselected={isSelected[1]}>Back End</Title>
        {isSelected[1] === "true" && <BackEnd />}
      </ComponentWrapper>

      <ComponentWrapper
        isselected={isSelected[2]}
        ref={(el) => (wrapper.current[2] = el)}
        onClick={() => {
          selectComponent(2);
        }}
      >
        <Title isselected={isSelected[2]}>Animation</Title>
        {isSelected[2] === "true" && <AnimationUI />}
      </ComponentWrapper>

      <ComponentWrapper
        isselected={isSelected[3]}
        ref={(el) => (wrapper.current[3] = el)}
        onClick={() => {
          selectComponent(3);
        }}
      >
        <Title isselected={isSelected[3]}>Authentication</Title>
        {isSelected[3] === "true" && <Auth />}
      </ComponentWrapper>

      <ComponentWrapper
        isselected={isSelected[4]}
        ref={(el) => (wrapper.current[4] = el)}
        onClick={() => {
          selectComponent(4);
        }}
      >
        <Title isselected={isSelected[4]}>Communication</Title>
        {isSelected[4] === "true" && <CommunicationServices />}
      </ComponentWrapper>
    </SkillsWrapper>
  );
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props) => (props.isselected === "true" ? "40%" : "10%")};
  border: 2px solid #50196f;
  height: 70%;
  margin: 3vh 0 5vh 0;
  padding-top: 2vh;
  border-radius: 20px;
  background: white;
  overflow: scroll;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  transition: width 0.5s ease-in-out;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  color: #50196f;
  font-weight: 700;
`;

export default Skills;
