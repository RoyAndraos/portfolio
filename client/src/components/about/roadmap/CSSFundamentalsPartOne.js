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
        How to select elements in CSS and how to make them prettier? <br />
        tag name, class name, id, pseudo selectors, attribute selectors etc...
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        You {"<p id='somePTag'>"}, go red now
      </Acheivement>
    </Wrapper>
  );
};

export default CSSFundamentalPartOne;
