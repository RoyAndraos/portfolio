import { Wrapper, Unlocked } from "./HTMLFundamentals";
import { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import styled from "styled-components";
import AppFetch from "./reactFetch/AppFetch";
import { Play, Line, Title, List } from "./TheDomPartTwo";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
const ReactFetch = ({ reactFetchRef, isMobile }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const handleShowMenu = () => {
    animateToShowProject(setShowMenu, showMenu, reactFetchRef);
  };
  return (
    <Wrapper id="section-16" ref={reactFetchRef}>
      {showMenu ? (
        <>
          <AppFetch />
          <Title
            theme={theme}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "baseline",
              position: "absolute",
              top: "0%",
              left: "0%",
              zIndex: "999",
              color: "#a742bc",
              width: "35%",
              height: "10vh",
              backgroundColor: "rgba(255,255,255,0.8)",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            React Fetch
            <Play
              style={{ marginLeft: "30px", marginTop: "5%" }}
              onClick={() => {
                handleShowMenu();
              }}
            >
              Back To Instructions
            </Play>
          </Title>
        </>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            React Fetch
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
                  handleShowMenu();
                }}
              >
                Order Some Pizza
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
                justifyContent: "space-around",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper $isMobile={!isMobile.toString()}>
                {!isMobile && (
                  <Unlocked
                    theme={theme}
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    Instructions: <br />
                  </Unlocked>
                )}
                <List theme={theme} $isReactEffects={"true"}>
                  {isMobile && <em>Given data for a menu, and API docs</em>}
                  <li>Fetch the data from the server</li>
                  <li>Display the menu items on the screen</li>
                  <li>
                    Use react-router-dom to create a route for each menu item
                  </li>
                  <li>Add a "Buy Item" button each menu item</li>
                  <li>
                    When the button is clicked, the user should be redirected to
                    a confirmation page
                  </li>
                </List>
              </ContentWrapper>
              {!isMobile && (
                <ContentWrapper>
                  <Unlocked
                    theme={theme}
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    Given: <br />
                  </Unlocked>
                  <ul>
                    <li>
                      Menu (array of objects) on the server side in a data.js
                      file
                    </li>
                    <li>Endpoints and API docs</li>
                  </ul>
                </ContentWrapper>
              )}
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            Go Fetch Me Some Pizza!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export const ContentWrapper = styled.div`
  width: ${(props) => (props.$isMobile === "true" ? "40%" : "95%")};
  font-size: 1.3rem;
`;
export const InfoWrapper = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0;
  border-top: ${(props) =>
    props.theme === "dark" ? `3px solid #a742bc` : `3px solid #50196f`};
  border-right: ${(props) =>
    props.theme === "dark" ? `3px solid #a742bc` : `3px solid #50196f`};
  border-top-right-radius: 20px;
  color: black;
  line-height: 2;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme === "dark" && `color: white;border-color: #a742bc`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    width: 90%;
    border-right: none;
    border-top-right-radius: 0;
    padding: 0;
    max-height: 55vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 2%;
  }
`;
export const Acheivement = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  color: black;
  margin: 0;
  margin-top: 3%;
  padding: 1.5% 1.5%;
  border-left: 3px solid #50196f;
  border-top: 3px solid #50196f;
  border-top-left-radius: 20px;
  ${({ theme }) => theme === "dark" && `color: white;border-color: #a742bc`};
  font-weight: 700;
  @media (max-width: 800px) {
    left: 0;
    max-width: 80%;
    padding: 3vh 0 0 0;
    border-left: none;
    border-top-left-radius: 0;
    text-align: center;
    margin-top: 0;
    font-size: 18px;
  }
  @media (max-height: 800px) {
    position: absolute;
    right: 20%;
    bottom: 15%;
  }
  @media (min-height: 1000px) {
    position: relative;
  }
`;
export default ReactFetch;
