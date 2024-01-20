import { Acheivement, Unlocked, Wrapper } from "./HTMLFundamentals";
import {
  animateToShowProject,
  unanimateButton,
  animateButton,
} from "../../../helpers";
import ThemeContext from "../../contexts/ColorTheme";
import { Children, useContext, useRef, useState } from "react";
import { Title, List, Play, Line } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { UserTwitterProvider } from "./twitterClone/UserContextTwitter";
import AppTwitterClone from "./twitterClone/AppTwitterClone";
const TwitterClone = ({ twitterCloneRef, setEnableScrollY, isMobile }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);

  const handleShowProj = () => {
    animateToShowProject(setShowProj, showProj, twitterCloneRef);
  };
  return (
    <Wrapper id="section-19" ref={twitterCloneRef}>
      {showProj ? (
        <UserTwitterProvider>
          <AppTwitterClone
            setEnableScrollY={setEnableScrollY}
            handleShowProj={handleShowProj}
            setShowProj={setShowProj}
            showProj={showProj}
            twitterCloneRef={twitterCloneRef}
          >
            {Children}
          </AppTwitterClone>
        </UserTwitterProvider>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            Twitter Clone Project
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
                  handleShowProj();
                }}
              >
                Try My Twitter Clone
                <Line ref={(el) => (lineTop = el)} theme={theme} />
                <Line ref={(el) => (lineLeft = el)} theme={theme} />
                <Line ref={(el) => (lineRight = el)} theme={theme} />
              </Play>
            )}
          </Title>
          <InfoWrapper theme={theme}>
            {!isMobile && (
              <Unlocked
                theme={theme}
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textDecoration: "underline",
                }}
              >
                Code Info
              </Unlocked>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
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
                    Code Instructions
                  </Unlocked>
                )}
                <List theme={theme}>
                  <em>Users should be able to</em>
                  <li>
                    View their homefeed, profile pages and a single tweet page
                  </li>
                  <li>To post a new tweet</li>
                  <li>To like a tweet</li>
                </List>
              </ContentWrapper>
              {!isMobile && (
                <ContentWrapper>
                  <Unlocked
                    theme={theme}
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Given
                  </Unlocked>
                  <List theme={theme}>
                    <li>Some users' data</li>
                    <li>API documentation</li>
                    <li>Screenshots</li>
                  </List>
                </ContentWrapper>
              )}
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            Twitter Who?
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default TwitterClone;
