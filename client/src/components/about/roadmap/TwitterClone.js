import { Acheivement, Title, Unlocked, Wrapper } from "./HTMLFundamentals";
import { animateToShowProject } from "../../../helpers";
import ThemeContext from "../../contexts/ColorTheme";
import { Children, useContext, useState } from "react";
import { Play } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { UserTwitterProvider } from "./twitterClone/UserContextTwitter";
import AppTwitterClone from "./twitterClone/AppTwitterClone";
const TwitterClone = ({ twitterCloneRef, setEnableScrollY }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);

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
            Twitter Clone Project
            <Play
              onClick={() => {
                handleShowProj();
              }}
            >
              Try My Twitter Clone
            </Play>
          </Title>
          <InfoWrapper theme={{ theme }}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper style={{ width: "55%" }}>
                <Unlocked
                  theme={theme}
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Code Instructions
                </Unlocked>
                <ul>
                  <li>
                    Be able to view: a homefeed, a profile page and a single
                    tweet.
                  </li>
                  <li>Be able to post a new tweet. </li>
                  <li>Be able to like a tweet.</li>
                </ul>
              </ContentWrapper>
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
                <ul>
                  <li>Some users' data</li>
                  <li>API documentation</li>
                  <li>Screenshots</li>
                </ul>
              </ContentWrapper>
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
