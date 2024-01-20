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
        What is a component, how is it reusable, and how do I create one?
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Let there be Component: <br />
        {"const Component = ( ) =>{"}
        <br /> {"return ("}
        <br />
        {"<div> Hello World! </div>"}
        <br />
        {")};"}
      </Acheivement>
    </Wrapper>
  );
};

export default ReactIntro;
