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
      <Title theme={theme} $showgame={"false"}>
        React State 1
      </Title>
      <Info theme={theme}>
        What is state, how to set it and how to pass it down to children
        components? <br />
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Dynamic Components
      </Acheivement>
    </Wrapper>
  );
};

export default ReactStateOne;
