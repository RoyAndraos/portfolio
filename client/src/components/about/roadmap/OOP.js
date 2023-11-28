import { Wrapper, Title, Info, Unlocked } from "./HTMLFundamentals";
import styled from "styled-components";
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

const Acheivement = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  color: black;
  margin: 0;
  margin-top: 3%;
  padding: 3% 3%;
  border-left: 3px solid #50196f;
  border-top: 3px solid #50196f;
  border-top-left-radius: 20px;
  ${({ theme }) => theme === "dark" && `color: white;`};
  font-weight: 700;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default OOP;
