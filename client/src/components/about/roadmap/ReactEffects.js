import { useRef, useState } from "react";
import Game from "./reactEffects/Game";
import { Acheivement, Title, Unlocked, Wrapper } from "./HTMLFundamentals";
import { Play, Line } from "./TheDomPartTwo";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
import { InfoWrapper } from "./ReactFetch";
const ReactEffects = ({ reactEffectsRef }) => {
  const [showGame, setShowGame] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
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
            $showgame={"false"}
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
              theme={theme}
              ref={(el) => (buttonRef = el)}
              onClick={() => {
                playGame();
              }}
              onMouseEnter={() => {
                animateButton(lineLeft, lineRight, lineTop, buttonRef);
              }}
              onMouseLeave={() => {
                unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
              }}
            >
              Play The Cookie Game
              <Line ref={(el) => (lineTop = el)} theme={theme} />
              <Line ref={(el) => (lineLeft = el)} theme={theme} />
              <Line ref={(el) => (lineRight = el)} theme={theme} />
            </Play>
          </Title>
          <InfoWrapper theme={theme} style={{ padding: "2%" }}>
            {/* USESTATE, USEEFFECT, USEREF AND EVENTLISTENERS TO CREATE AN IDLE COOKIE GAME. */}
            <Unlocked theme={theme}>Code Info:</Unlocked>
            Given an array of objects representing purchasable items, each of
            which gives a number of cookies per second, and an svg of a cookie{" "}
            <ul>
              <li>
                display the cookie and add a click event to it (+1 cookie)
              </li>
              <li>
                display and make the items clickable and subtract their price
                from the total number of cookies owned
              </li>
              <li>
                {" "}
                make use of the given use-interval.js file to add the cookies
                per second of each item to the total number of cookies owned
              </li>
            </ul>
            <Unlocked theme={theme}>
              Side Quest: Only use styled-components (no css files)
            </Unlocked>
          </InfoWrapper>
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
