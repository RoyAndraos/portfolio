import React, { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import styled from "styled-components";
import { Wrapper } from "./HTMLFundamentals";
import { Info, Title } from "./HTMLFundamentals";
const Introduction = ({ introRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-0" ref={introRef}>
      <Title style={{ marginBottom: "10vh" }} theme={theme}>
        My Web Developement Road Map
      </Title>
      <Info theme={theme}>
        The story of <Purple theme={theme}>what</Purple> I know and{" "}
        <Purple theme={theme}>why</Purple> I know it. This is a detailed map of
        my web developement journey, Enjoy!
      </Info>
    </Wrapper>
  );
};

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
