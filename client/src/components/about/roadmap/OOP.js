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
      <Title theme={theme}>Object Oriented Programming</Title>
      <Info theme={theme}>
        In this chapter (that consisted of 2 major exercises, Books and Cats), I
        got hands-on experience with OOP concepts. I created classes for Cats
        and Books then defined properties and methods. It was all about
        instantiating objects, managing properties like tiredness (cats) and
        isRead (books), and implementing methods for behavior.
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now work with OOP concepts.
      </Acheivement>
    </Wrapper>
  );
};

export default OOP;
