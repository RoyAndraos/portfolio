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
        I learned about the array methods built into javascript, such as
        .filter(), .map(), .reduce(), .sort(), .find(), .concat() and more.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now use array methods.
      </Acheivement>
    </Wrapper>
  );
};
export default JSFundamentalPartTwo;
