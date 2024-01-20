import { Wrapper, Acheivement, Unlocked } from "./HTMLFundamentals";
import { List, Title } from "./TheDomPartTwo";
import { useContext, useRef } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Line, Play } from "./TheDomPartTwo";
import { animateButton, unanimateButton } from "../../../helpers";
import { InfoWrapper } from "./ReactFetch";
const NyanCat = ({ nyanCatRef, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const openGameUrl = () => {
    // Replace "/game/index.html" with the actual path to your game's HTML file
    const gameUrl = process.env.PUBLIC_URL + "/indexForNyan.html";
    window.open(gameUrl, "_blank");
  };

  return (
    <Wrapper ref={nyanCatRef} id="section-11">
      <Title theme={theme} $showgame={"false"}>
        First Project{!isMobile && ", It's Raining Pineapples!"}{" "}
        {!isMobile && (
          <Play
            theme={theme}
            onClick={openGameUrl}
            ref={(el) => (buttonRef = el)}
            onMouseLeave={() => {
              unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
            }}
            onMouseEnter={() => {
              animateButton(lineLeft, lineRight, lineTop, buttonRef);
            }}
          >
            Play Game
            <Line ref={(el) => (lineTop = el)} theme={theme} />
            <Line ref={(el) => (lineLeft = el)} theme={theme} />
            <Line ref={(el) => (lineRight = el)} theme={theme} />
          </Play>
        )}
      </Title>
      <InfoWrapper theme={theme} style={{ position: "relative" }}>
        <List>
          <li>
            Read and understand the given code (given: class for enemies, class
            for the player, main game file and the game engine, all of which are
            missing chuncks of code)
          </li>
          <li>Make the enemies class create and move the enemies</li>
          <li>
            Make the player class move the player and check if an enemy hit it
          </li>
          <li>Add your own features!</li>
        </List>
      </InfoWrapper>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Another Day, Another Game Addiction
      </Acheivement>
    </Wrapper>
  );
};

export default NyanCat;
