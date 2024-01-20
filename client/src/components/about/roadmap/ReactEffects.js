import { useRef, useState } from "react";
import Game from "./reactEffects/Game";
import { Acheivement, Unlocked, Wrapper } from "./HTMLFundamentals";
import { Play, Line, Title, List } from "./TheDomPartTwo";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
import { InfoWrapper } from "./ReactFetch";
const ReactEffects = ({ reactEffectsRef, isMobile }) => {
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
              width: "30%",
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
          <Title theme={theme} $showgame={"false"}>
            React Effects, Idle Cookie Game
            {!isMobile && (
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
            )}
          </Title>
          <InfoWrapper theme={theme} style={{ padding: "2%" }}>
            {!isMobile && <Unlocked theme={theme}>Code Info:</Unlocked>}
            <em>
              Given an array of objects, each of which gives a number of cookies
              per second
            </em>
            <List theme={theme} $isReactEffects={"true"}>
              <li>
                Map over the objects and display them in a list with a button
                for each
              </li>
              <li>
                Every time a button is clicked, remove the price of the object
                from the total number of cookies owned, and add the number of
                cookies per second to the total number of cookies per second
              </li>
            </List>
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
