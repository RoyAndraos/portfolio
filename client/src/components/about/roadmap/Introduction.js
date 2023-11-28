import React, { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import styled from "styled-components";
import { Info, Title } from "./HTMLFundamentals";
const Introduction = ({ introRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-0" ref={introRef}>
      <Title theme={theme} style={{ height: "10%" }}>
        My Web Developement Road Map
      </Title>
      <Info
        theme={theme}
        style={{
          borderRight: "none",
          borderRadius: "0",
        }}
      >
        The story of <Purple theme={theme}>what</Purple> I know and{" "}
        <Purple theme={theme}>why</Purple> I know it. This is a detailed map of
        my web developement journey. It includes the knowledge i have gained
        throughout the last couple of years(some fun games are in here too!).
      </Info>
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
