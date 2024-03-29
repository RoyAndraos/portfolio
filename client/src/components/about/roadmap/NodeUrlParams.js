import { useContext, useState, useRef } from "react";
import { Wrapper, Unlocked } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import {
  animateToShowProject,
  unanimateButton,
  animateButton,
} from "../../../helpers";
import { Title, List, Play, Line } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper, Acheivement } from "./ReactFetch";
import AppUrlParams from "./nodeUrlParams/AppUrlParams";
const NodeUrlParams = ({ nodeUrlParamsRef, setEnableScrollY, isMobile }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  return (
    <Wrapper id="section-21" ref={nodeUrlParamsRef}>
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
              left: "0",
              width: "30%",
              zIndex: "999",
              color: "#a742bc",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "0 30px",
              height: "10vh",
            }}
          >
            Node.js URL Params{" "}
            <Play
              style={{ marginLeft: "30px" }}
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodeUrlParamsRef);
              }}
            >
              Back To Instructions
            </Play>
          </Title>
          <AppUrlParams setEnableScrollY={setEnableScrollY} />
        </Wrapper>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            Node.js URL Params
            {!isMobile && (
              <Play
                theme={theme}
                ref={(el) => (buttonRef = el)}
                onMouseEnter={() => {
                  animateButton(lineLeft, lineRight, lineTop, buttonRef);
                }}
                onMouseLeave={() => {
                  unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
                }}
                onClick={() => {
                  animateToShowProject(setShowProj, showProj, nodeUrlParamsRef);
                }}
              >
                Artists API
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
                <List theme={theme} $isReactEffects={isMobile.toString()}>
                  <Unlocked
                    theme={theme}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    Backend (get() methods):
                  </Unlocked>
                  <li>Top 50 artists ("/top50").</li>
                  <li>Specific song ("/top50/song/:songId")</li>
                  <li>Specific artist's songs ("/top50/artist/:artistName")</li>
                  <li>
                    Songs of the most popular artist ("/top50/popular-artist")
                  </li>
                  <li>
                    Top 50 artists ("/top50/artist"){" "}
                    <Unlocked theme={theme}>
                      HINT: new Set(), filters out duplicates
                    </Unlocked>
                  </li>
                  {isMobile && (
                    <Unlocked
                      theme={theme}
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      Stretch: Build the Frontend
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
                      Make a page for every one of the endpoints that you built!
                    </li>
                  </List>
                </ContentWrapper>
              )}
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> Get 2000
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default NodeUrlParams;
