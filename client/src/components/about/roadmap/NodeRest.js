import { useContext, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Acheivement, Wrapper } from "./HTMLFundamentals";
import AppHangman from "./nodeRest/AppHangman";
import { animateToShowProject } from "../../../helpers";
import { List, Play } from "./TheDomPartTwo";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { Title, Unlocked } from "./HTMLFundamentals";
const NodeRest = ({ nodeRestRef }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
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
            Node.js REST
            <Play
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodeRestRef);
              }}
            >
              Try The Hangman Game
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
              Exercise Info
            </Unlocked>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper style={{ width: "100%" }}>
                <List theme={theme}>
                  <Unlocked
                    style={{ fontWeight: "bold", fontStyle: "italic" }}
                    theme={theme}
                  >
                    Given a clients (exercise 1) and a words (exercise 2) array,
                    create a RESTful API:
                  </Unlocked>

                  <li>
                    A GET "/clients" endpoint to access a list of all the
                    clients
                  </li>
                  <li>
                    A GET "/clients/:clientId" endpoint to access one client
                    based on its id
                  </li>
                  <li>A POST "/clients" endpoint to add a new client</li>
                  <li>
                    A DELETE "/clients/:clientId" endpoint to delete a customer
                    based on its id
                  </li>
                  <li>
                    A "/hangman/word/:id" endpoint that accepts an id in its
                    url. If it's provided, it will return the word object, as it
                    is in the array of words
                  </li>
                  <li>
                    A GET "/hangman/word" endpoint that will return an object
                    that contains the id of a random word selected from an array
                    of words and the letterCount of the word
                  </li>
                  <li>
                    GET "/hangman/guess/:id/:letter" This will return the
                    appropriate status code
                  </li>
                </List>
              </ContentWrapper>
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> GET, POST and DELETE are now my best friends!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default NodeRest;
