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
    <Wrapper ref={nyanCatRef} id="section-11">
      <Title theme={theme}>First Project, It's Raining Pineapples!</Title>
      <Info theme={theme} style={{ position: "relative" }}>
        This was my first project, I used everything i have learned so far. I
        used OOP to create the game, and used the DOM to manipulate the
        elements. Click the button to go play the game!
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
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  bottom: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  ${({ theme }) => theme === "dark" && `background-color: #9c1bb7;`};
  @media (max-width: 1000px) {
    right: 1%;
    transform: translateX(0) translateY(-60%);
    border-radius: 20px;
  }
`;

export default NyanCat;
