import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
const JSFundamentalPartTwo = ({ jsTwoRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-3" ref={jsTwoRef}>
      <Title theme={theme} $showgame={"false"}>
        Javascript Fundamentals 2
      </Title>
      <Info theme={theme}>
        What is an array method and how does it work? <br />
        .filter(), .map(), .reduce(), .sort(), .find(), .concat() etc...
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br /> Arrays And Methods
      </Acheivement>
    </Wrapper>
  );
};
export default JSFundamentalPartTwo;
