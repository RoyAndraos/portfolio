import { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  animateToShowProject,
  unanimateButton,
  animateButton,
} from "../../../helpers";
import { Title, List, Play, Line } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper, Acheivement } from "./ReactFetch";
import { Wrapper, Unlocked } from "./HTMLFundamentals";
import AppAsyncAwait from "./nodeAsyncAwait/AppAsyncAwait";
const NodeAsynAwait = ({ nodeAsynAwaitRef, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  const [showProj, setShowProj] = useState(false);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  return (
    <Wrapper id="section-24" ref={nodeAsynAwaitRef}>
      {showProj ? (
        <Wrapper>
          <Title
            theme={theme}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "absolute",
              top: "0",
              left: "0%",
              zIndex: "999",
              color: "#a742bc",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "0 30px",
              height: "10vh",
            }}
          >
            Node.js Async Await{" "}
            <Play
              style={{ marginLeft: "30px" }}
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodeAsynAwaitRef);
              }}
            >
              Back To Instructions
            </Play>
          </Title>
          <AppAsyncAwait />
        </Wrapper>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            Node.js Async Await
            {!isMobile && (
              <Play
                ref={(el) => (buttonRef = el)}
                theme={theme}
                onMouseEnter={() => {
                  animateButton(lineLeft, lineRight, lineTop, buttonRef);
                }}
                onMouseLeave={() => {
                  unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
                }}
                onClick={() => {
                  animateToShowProject(setShowProj, showProj, nodeAsynAwaitRef);
                }}
              >
                Jokes API
                <Line ref={(el) => (lineTop = el)} theme={theme} />
                <Line ref={(el) => (lineLeft = el)} theme={theme} />
                <Line ref={(el) => (lineRight = el)} theme={theme} />
              </Play>
            )}
          </Title>
          <InfoWrapper theme={theme}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper $isMobile={!isMobile.toString()}>
                {!isMobile && (
                  <Unlocked
                    theme={theme}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    Backend (get() methods):
                  </Unlocked>
                )}
                <br />
                <List theme={theme} $isReactEffects={isMobile.toString()}>
                  <li>
                    build the getDadJoke function using
                    "https://icanhazdadjoke.com/"
                  </li>
                  <li>
                    build a getPun function
                    "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=*a bunch of
                    categories to get family friendly jokes"
                  </li>
                  <li>
                    build a getGeekJoke using the same uri of the getPun
                    fucntion
                  </li>
                  {isMobile && (
                    <Unlocked
                      theme={theme}
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      Stretch: Build the front-end to display the jokes that we
                      get from the backend
                    </Unlocked>
                  )}
                </List>
              </ContentWrapper>
              {!isMobile && (
                <ContentWrapper>
                  <Unlocked
                    theme={theme}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    Front-End (stretch goal)
                  </Unlocked>
                  <List theme={theme}>
                    <li>
                      Build the front-end to display the jokes that we get from
                      the backend
                    </li>
                  </List>
                </ContentWrapper>
              )}
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> New Tool, APIs
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default NodeAsynAwait;
