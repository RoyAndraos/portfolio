import React, { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import styled from "styled-components";
import { Info, Title } from "./HTMLFundamentals";
import { Play, Line } from "./TheDomPartTwo";
import {
  animateButton,
  animateToShowProject,
  unanimateButton,
} from "../../../helpers";
import { InfoWrapper } from "./ReactFetch";
import Summary from "./Summary";
const Introduction = ({
  introRef,
  htmlRef,
  jsOneRef,
  cssOneRef,
  domOneRef,
  eventOneRef,
  oopRef,
  nyanCatRef,
  reactIntroRef,
  reactStateOneRef,
  reactEffectsRef,
  reactFetchRef,
  reactContextRef,
  reactReducerRef,
  twitterCloneRef,
  nodeIntroRef,
  nodeUrlParamsRef,
  nodePostMethodRef,
  nodePromisesRef,
  nodeAsynAwaitRef,
  nodeRestRef,
  mongoP1Ref,
}) => {
  const [showSummary, setShowSummary] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const handleShowSummary = () => {
    animateToShowProject(setShowSummary, showSummary, introRef);
  };
  return (
    <Wrapper id="section-0" ref={introRef}>
      <Title
        theme={theme}
        $showgame={"false"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "90%",
          transform: "translateX(35%)",
        }}
      >
        My Web Developement Roadmap
        <Play
          ref={(el) => (buttonRef = el)}
          theme={theme}
          onMouseEnter={() => {
            animateButton(lineLeft, lineRight, lineTop, buttonRef);
          }}
          onMouseLeave={() => {
            unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
          }}
          onClick={() => {
            handleShowSummary();
          }}
        >
          {showSummary ? "Back" : "Show Summary"}
          <Line ref={(el) => (lineTop = el)} theme={theme} />
          <Line ref={(el) => (lineLeft = el)} theme={theme} />
          <Line ref={(el) => (lineRight = el)} theme={theme} />
        </Play>
      </Title>
      {showSummary ? (
        <InfoWrapper theme={theme}>
          <Summary
            htmlRef={htmlRef}
            jsOneRef={jsOneRef}
            cssOneRef={cssOneRef}
            domOneRef={domOneRef}
            eventOneRef={eventOneRef}
            oopRef={oopRef}
            nyanCatRef={nyanCatRef}
            reactIntroRef={reactIntroRef}
            reactStateOneRef={reactStateOneRef}
            reactEffectsRef={reactEffectsRef}
            reactFetchRef={reactFetchRef}
            reactContextRef={reactContextRef}
            reactReducerRef={reactReducerRef}
            twitterCloneRef={twitterCloneRef}
            nodeIntroRef={nodeIntroRef}
            nodeUrlParamsRef={nodeUrlParamsRef}
            nodePostMethodRef={nodePostMethodRef}
            nodePromisesRef={nodePromisesRef}
            nodeAsynAwaitRef={nodeAsynAwaitRef}
            nodeRestRef={nodeRestRef}
            mongoP1Ref={mongoP1Ref}
          />
        </InfoWrapper>
      ) : (
        <Info
          theme={theme}
          style={{
            borderRight: "none",
            borderRadius: "0",
          }}
        >
          The story of <Purple theme={theme}>what</Purple> I know and{" "}
          <Purple theme={theme}>why</Purple> I know it. This is a detailed map
          of my web developement journey. It includes the knowledge i have
          gained throughout the last couple of years (some fun games are in here
          too!).
        </Info>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 10%;
  top: -10%;
`;

const Purple = styled.span`
  color: #50196f;
  font-weight: 700;
  font-size: 2rem;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
`;
export default Introduction;
