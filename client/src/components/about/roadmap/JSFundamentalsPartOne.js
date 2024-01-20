import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
const JSFundamentalPartOne = ({ jsOneRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-2" ref={jsOneRef}>
      <Title theme={theme} $showgame={"false"}>
        Javascript Fundamentals 1
      </Title>
      <Info theme={theme}>
        What is a method and how does it work? <br /> .split(), .length,
        .replace(), Math.ex(), .toString() etc...
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br /> Strings, Numbers And Methods
      </Acheivement>
    </Wrapper>
  );
};
export default JSFundamentalPartOne;
