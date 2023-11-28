import React from "react";
import {
  Acheivement,
  Info,
  Title,
  Unlocked,
  Wrapper,
} from "./HTMLFundamentals";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";

const ReactStateOne = ({ reactStateOneRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper ref={reactStateOneRef} id="section-13">
      <Title theme={theme}>React State 1</Title>
      <Info theme={theme}>
        In this chapter, I practiced using state to make my components dynamic.
        I had to fill in the blanks and build functions (that handle state) that
        will be passed down to the child components.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I connected my funtions knowledge with my state knowledge.
      </Acheivement>
    </Wrapper>
  );
};

export default ReactStateOne;
