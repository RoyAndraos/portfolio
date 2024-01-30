import styled from "styled-components";
import gsap from "gsap";
import { useState, useRef, useEffect, useContext } from "react";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import AnimationUI from "./AnimationUI";
import Auth from "./Auth";
import CommunicationServices from "./CommunicationServices";
import Other from "./Other";
import ThemeContext from "../contexts/ColorTheme";

const Skills = () => {
  const [isSelected, setIsSelected] = useState([
    "true",
    "false",
    "false",
    "false",
    "false",
    "false",
  ]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    ["true", "false", "false", "false", "false", "false"].forEach((item, i) => {
      if (item === "false") {
        if (wrapper.current[i].querySelector("p")) {
          gsap.fromTo(
            wrapper.current[i].querySelector("p"),
            {
              rotation: 0,
              opacity: 0,
              width: "200%",
            },
            {
              opacity: 1,
              duration: 0.5,
              width: "200%",
              position: "absolute",
              y: "10%",
            }
          );
        }
      } else {
        if (wrapper.current[i].querySelector("p")) {
          gsap.to(wrapper.current[i].querySelector("p"), {
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
        if (
          item === "false" &&
          wrapper.current[wasSelected].querySelector("p")
        ) {
          gsap.to(wrapper.current[wasSelected].querySelector("p"), {
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
    if (wrapper.current[index].querySelector("p")) {
      gsap.to(
        wrapper.current[index].querySelector("p"),

        {
          opacity: 0,
          duration: 0.5,
        }
      );
    }

    setIsSelected(newIsSelected);
  };
  return (
    <SkillsWrapper>
      <ComponentWrapper
        theme={theme}
        $isselected={isSelected[0]}
        ref={(el) => (wrapper.current[0] = el)}
        onClick={() => {
          selectComponent(0);
        }}
      >
        {isSelected[0] === "true" && <FrontEnd />}
      </ComponentWrapper>

      <ComponentWrapper
        theme={theme}
        $isselected={isSelected[1]}
        ref={(el) => (wrapper.current[1] = el)}
        onClick={() => {
          selectComponent(1);
        }}
      >
        {isSelected[1] === "true" && <BackEnd />}
      </ComponentWrapper>

      <ComponentWrapper
        theme={theme}
        $isselected={isSelected[2]}
        ref={(el) => (wrapper.current[2] = el)}
        onClick={() => {
          selectComponent(2);
        }}
      >
        {isSelected[2] === "true" && <AnimationUI />}
      </ComponentWrapper>

      <ComponentWrapper
        theme={theme}
        $isselected={isSelected[3]}
        ref={(el) => (wrapper.current[3] = el)}
        onClick={() => {
          selectComponent(3);
        }}
      >
        {isSelected[3] === "true" && <Auth />}
      </ComponentWrapper>

      <ComponentWrapper
        theme={theme}
        $isselected={isSelected[4]}
        ref={(el) => (wrapper.current[4] = el)}
        onClick={() => {
          selectComponent(4);
        }}
      >
        {isSelected[4] === "true" && <CommunicationServices />}
      </ComponentWrapper>
      <ComponentWrapper
        theme={theme}
        $isselected={isSelected[5]}
        ref={(el) => (wrapper.current[5] = el)}
        onClick={() => {
          selectComponent(5);
        }}
      >
        {isSelected[5] === "true" && <Other />}
      </ComponentWrapper>
    </SkillsWrapper>
  );
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: ${(props) => (props.$isselected === "true" ? "40%" : "10%")};
  border: 2px solid #50196f;
  height: 85%;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(0,0,0,0.4)"};
  overscroll-behavior: contain;
  overflow-y: scroll;
  transition: width 0.5s ease-in-out;
  font-size: 1.3rem;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 800px) {
    width: 80%;
    height: ${(props) => (props.$isselected === "true" ? "40%" : "8%")};
    font-size: 1.2rem;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 800px) {
    min-height: 40%;
    padding-bottom: 10%;
    position: relative;
    width: 100%;
    flex-direction: column;
    top: 16vh;
  }
`;

export default Skills;
