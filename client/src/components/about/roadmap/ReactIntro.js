import {
  Wrapper,
  Title,
  Acheivement,
  Unlocked,
  Info,
} from "./HTMLFundamentals";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";

const ReactIntro = ({ reactIntroRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-12" ref={reactIntroRef}>
      <Title theme={theme} $showgame={"false"}>
        Introduction To React
      </Title>
      <Info theme={theme}>
        In this chapter, I learned about React, and how to use it to create
        components. I learned how to use props to pass data from parent to
        child, and how to use state to make it dynamic.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now create React components.
      </Acheivement>
    </Wrapper>
  );
};

export default ReactIntro;
