import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
const CSSFundamentalPartTwo = ({ cssTwoRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-5" ref={cssTwoRef}>
      <Title theme={theme} $showgame={"false"}>
        CSS Fundamentals 2
      </Title>
      <Info theme={theme}>
        The nightmare of developers, the box model.
        <br />
        What are the properties that make up the box model and what is flexbox?
        margin, border, padding, display, flex-direction, justify-content etc...
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br /> Flex That Box Model (?)
      </Acheivement>
    </Wrapper>
  );
};

export default CSSFundamentalPartTwo;
