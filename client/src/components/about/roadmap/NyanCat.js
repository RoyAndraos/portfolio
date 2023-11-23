import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import styled from "styled-components";
const NyanCat = ({ nyanCatRef }) => {
  const { theme } = useContext(ThemeContext);
  const openGameUrl = () => {
    // Replace "/game/index.html" with the actual path to your game's HTML file
    const gameUrl = process.env.PUBLIC_URL + "/indexForNyan.html";
    window.open(gameUrl, "_blank");
  };

  return (
    <Wrapper ref={nyanCatRef}>
      <Title theme={theme}>First Project, It's Raining Pineapples!</Title>
      <Info theme={theme} style={{ position: "relative" }}>
        This was my first project, I used everything i have learned so far.
        <br />
        I used OOP to create the game, and used the DOM to manipulate the
        elements.
        <br />
        Click the button to go play the game!
        <StyledButton theme={theme} onClick={openGameUrl}>
          Play Game
        </StyledButton>
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now make fun games!
      </Acheivement>
    </Wrapper>
  );
};

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  background-color: #50196f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  ${({ theme }) => theme === "dark" && `background-color: #9c1bb7;`};
`;

export default NyanCat;
