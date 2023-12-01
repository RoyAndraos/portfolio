import { useState } from "react";
import Game from "./reactEffects/Game";
import {
  Acheivement,
  Title,
  Unlocked,
  Wrapper,
  Info,
} from "./HTMLFundamentals";
import { Play } from "./TheDomPartTwo";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { animateToShowProject } from "../../../helpers";
const ReactEffects = ({ reactEffectsRef }) => {
  const [showGame, setShowGame] = useState(false);
  const { theme } = useContext(ThemeContext);
  const playGame = () => {
    animateToShowProject(setShowGame, showGame, reactEffectsRef);
  };
  return (
    <Wrapper ref={reactEffectsRef} id="section-15">
      {showGame ? (
        <>
          <Title
            theme={theme}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "baseline",
              position: "absolute",
              top: "10%",
              left: "10%",
              zIndex: "999",
              color: "#a742bc",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "30px",
            }}
          >
            React Effects{" "}
            <Play
              style={{ marginLeft: "30px" }}
              onClick={() => {
                playGame();
              }}
            >
              Back To Instructions
            </Play>
          </Title>
          <Game />
        </>
      ) : (
        <>
          <Title
            theme={theme}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              width: "80%",
              transform: "translateX(40%)",
            }}
          >
            React Effects{" "}
            <Play
              onClick={() => {
                playGame();
              }}
            >
              Play The Cookie Game
            </Play>
          </Title>
          <Info theme={theme} style={{ padding: "2%" }}>
            {/* USESTATE, USEEFFECT, USEREF AND EVENTLISTENERS TO CREATE AN IDLE COOKIE GAME. */}
            <Unlocked theme={theme}>Code Info:</Unlocked>
            <br />
            Given an array of objects representing purchasable items, each of
            which gives a number of cookies per second, and an svg of a cookie{" "}
            <br />
            1- display the cookie and add a click event to it (+1 cookie) <br />
            2- display and make the items clickable and subtract their price
            from the total number of cookies owned
            <br />
            3- make use of the given use-interval.js file to add the cookies per
            second of each item to the total number of cookies owned
            <br />
            <Unlocked theme={theme}>
              Side Quest: Only use styled-components (no css files)
            </Unlocked>
          </Info>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            MORE COOKIIIIEEES!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default ReactEffects;
