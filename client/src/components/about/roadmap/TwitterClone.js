import { Title, Unlocked, Wrapper } from "./HTMLFundamentals";
import { animateToShowProject } from "../../../helpers";
import ThemeContext from "../../contexts/ColorTheme";
import { Children, useContext, useState, useEffect } from "react";
import { Play } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { UserTwitterProvider } from "./twitterClone/UserContextTwitter";
import AppTwitterClone from "./twitterClone/AppTwitterClone";
const TwitterClone = ({ twitterCloneRef, setEnableScrollY }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The TwitterClone section is currently on the screen
          setEnableScrollY(true);
        } else {
          // The TwitterClone section is not on the screen
          setEnableScrollY(false);
        }
      });
    };

    const options = {
      root: null,
      threshold: 0.5, // Adjust this threshold based on your needs
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe the TwitterClone section
    observer.observe(twitterCloneRef.current);

    return () => {
      // Cleanup the observer when the component is unmounted
      observer.disconnect();
    };
  }, [twitterCloneRef, setEnableScrollY]);
  const handleShowProj = () => {
    animateToShowProject(setShowProj, showProj, twitterCloneRef);
  };
  return (
    <Wrapper id="section-19" ref={twitterCloneRef}>
      {showProj ? (
        <UserTwitterProvider>
          <AppTwitterClone>{Children}</AppTwitterClone>
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
                <br />
                <div>
                  1- Be able to view: a homefeed, a profile page and a single
                  tweet.
                </div>
                2- Be able to post a new tweet. <br />
                3- Be able to like a tweet.
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
                <br />
                1- Some users' data.
                <br />
                2- API documentation.
                <br />
                3- Screenshots.
              </ContentWrapper>
            </div>
          </InfoWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default TwitterClone;
