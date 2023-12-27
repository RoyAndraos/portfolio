import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
const CSSFundamentalPartOne = ({ cssOneRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-4" ref={cssOneRef}>
      <Title theme={theme} $showgame={"false"}>
        CSS Fundamentals 1
      </Title>
      <Info theme={theme}>
        I learned about the different ways to select elements in CSS, such as
        selecting by tag name, class name, id, attribute, and some basic CSS
        properties.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now select different elements in CSS.
      </Acheivement>
    </Wrapper>
  );
};

export default CSSFundamentalPartOne;
