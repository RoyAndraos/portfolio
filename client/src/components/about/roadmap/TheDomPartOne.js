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
      <Title theme={theme} $showgame={"false"}>
        The DOM 1
      </Title>
      <Info theme={theme}>
        What is the DOM and how do I manipulate it? <br />
        document.querySelector(), document.getElementById(), .innerHTML,
        .appendChild(), .removeChild() etc...
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Manipulate All
      </Acheivement>
    </Wrapper>
  );
};

export default TheDomPartOne;
