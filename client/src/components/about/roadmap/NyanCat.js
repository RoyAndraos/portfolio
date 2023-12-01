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
      <Title
        theme={theme}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "85%",
          transform: "translateX(40%)",
        }}
      >
        First Project, It's Raining Pineapples!{" "}
        <StyledButton theme={theme} onClick={openGameUrl}>
          Play Game
        </StyledButton>
      </Title>
      <Info theme={theme} style={{ position: "relative" }}>
        This was my first project, I used everything i have learned so far. I
        used OOP to create the game, and used the DOM to manipulate the
        elements. Click the button to go play the game!
      </Info>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now make fun games!
      </Acheivement>
    </Wrapper>
  );
};

const StyledButton = styled.button`
  bottom: 0;
  background-color: #50196f;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  ${({ theme }) => theme === "dark" && `background-color: #9c1bb7;`};
`;

export default NyanCat;
