import { useContext, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { animateToShowProject } from "../../../helpers";
import { List, Play } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { Title, Wrapper, Unlocked, Acheivement } from "./HTMLFundamentals";
import AppAsyncAwait from "./nodeAsyncAwait/AppAsyncAwait";
const NodeAsynAwait = ({ nodeAsynAwaitRef }) => {
  const { theme } = useContext(ThemeContext);
  const [showProj, setShowProj] = useState(false);
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
            Node.js Async Await
            <Play
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodeAsynAwaitRef);
              }}
            >
              Try The Joke App
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
                justifyContent: "space-between",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper style={{ width: "65%" }}>
                <Unlocked
                  theme={theme}
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Backend (get() methods):
                </Unlocked>
                <br />
                <List theme={theme}>
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
                </List>
              </ContentWrapper>
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
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> I can now use random APIs
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default NodeAsynAwait;
