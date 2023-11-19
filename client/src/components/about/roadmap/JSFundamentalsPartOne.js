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
      <Title theme={theme}>Javascript Fundamentals 1</Title>
      <Info theme={theme}>
        I learned about the existance of methods that make developers' life
        simpler, such as .split(), .length, .replace(), Math.ex(), toString()
        and more.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now use methods to manipulate strings and numbers.
      </Acheivement>
    </Wrapper>
  );
};
export default JSFundamentalPartOne;
