import {
  Wrapper,
  Title,
  Info,
  Unlocked,
  Acheivement,
} from "./HTMLFundamentals";

import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
const OOP = ({ oopRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-10" ref={oopRef}>
      <Title theme={theme} $showgame={"false"}>
        Object Oriented Programming
      </Title>
      <Info theme={theme}>
        What are classes, how to, and why use them? <br />
        new Class, constructor, this, static etc...
        <br />
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Classy Objects You Got There
      </Acheivement>
    </Wrapper>
  );
};

export default OOP;
