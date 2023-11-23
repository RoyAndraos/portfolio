import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
const TheDomPartOne = ({ domOneRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-6" ref={domOneRef}>
      <Title theme={theme}>The DOM 1</Title>
      <Info theme={theme}>
        I learned about the Document Object Model (document.createElement(),
        element.appendChild(childElement), etc...), and how to use it to
        manipulate different elements on the page.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now manipulate the DOM.
      </Acheivement>
    </Wrapper>
  );
};

export default TheDomPartOne;
