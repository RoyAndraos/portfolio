import {
  Wrapper,
  Title,
  Info,
  Acheivement,
  Unlocked,
} from "./HTMLFundamentals";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Play } from "./TheDomPartTwo";
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
        <Play theme={theme} onClick={openGameUrl}>
          Play Game
        </Play>
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

export default NyanCat;
