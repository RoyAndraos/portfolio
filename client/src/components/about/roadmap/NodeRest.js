import { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Acheivement, Wrapper } from "./HTMLFundamentals";
import AppHangman from "./nodeRest/AppHangman";
import {
  animateToShowProject,
  unanimateButton,
  animateButton,
} from "../../../helpers";
import { Title, List, Play, Line } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { Unlocked } from "./HTMLFundamentals";
const NodeRest = ({ nodeRestRef, isMobile }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);

  return (
    <Wrapper id="section-25" ref={nodeRestRef}>
      {showProj ? (
        <>
          {" "}
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
              padding: "0 0 0 30px",
              height: "10vh",
            }}
          >
            Node.js REST{" "}
            <Play
              style={{ marginLeft: "30px" }}
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodeRestRef);
              }}
            >
              Back To Instructions
            </Play>
          </Title>
          <AppHangman />
        </>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            Node.js REST
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
                  animateToShowProject(setShowProj, showProj, nodeRestRef);
                }}
              >
                Try The Hangman Game
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
              <ContentWrapper style={{ width: "100%" }}>
                <List theme={theme} $isReactEffects={isMobile.toString()}>
                  {!isMobile ? (
                    <Unlocked
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                      theme={theme}
                    >
                      Given a clients (exercise 1) and a words (exercise 2)
                      array, create a RESTful API:
                    </Unlocked>
                  ) : (
                    <div style={{ width: "90%" }}>
                      <em>
                        Given a clients (ex 1) and a words array (ex 2), Build
                      </em>
                    </div>
                  )}

                  <li>
                    A GET {!isMobile && "/clients"} endpoint to access a list of
                    all the clients
                  </li>
                  <li>
                    A GET {!isMobile && "/clients/:clientId"} endpoint to access
                    one client based on its id
                  </li>
                  <li>
                    A POST {!isMobile && "/clients"} endpoint to add a new
                    client
                  </li>
                  <li>
                    A DELETE {!isMobile && "/clients/:clientId"} endpoint to
                    delete a customer based on its id
                  </li>
                  <li>
                    A {!isMobile && "/hangman/word/:id"} endpoint that returns a
                    random word object
                  </li>
                  <li>
                    A GET {!isMobile && "/hangman/word"} endpoint that will
                    return an object that contains the id of a random word and
                    the letterCount of the word
                  </li>
                  <li>
                    GET {!isMobile && "/hangman/guess/:id/:letter"} This will
                    return the appropriate status code
                  </li>
                </List>
              </ContentWrapper>
            </div>
          </InfoWrapper>
          <Acheivement theme={theme} style={{ marginTop: "0" }}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> GET POST DELETE
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default NodeRest;
