import { useState, useContext, Children, useRef } from "react";
import { Wrapper, Acheivement, Unlocked } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import { UserReactContextProvider } from "./reactContext/UserContextReactContext";
import AppReactContext from "./reactContext/AppReactContext";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { Play, Line, Title, List } from "./TheDomPartTwo";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
const ReactContext = ({ reactContextRef, isMobile }) => {
  const [showFaceSpace, setShowFaceSpace] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const tryFaceSpace = () => {
    animateToShowProject(setShowFaceSpace, showFaceSpace, reactContextRef);
  };
  return (
    <Wrapper id="section-17" ref={reactContextRef}>
      {showFaceSpace ? (
        <UserReactContextProvider>
          <Play
            onClick={() => {
              tryFaceSpace();
            }}
            style={{
              position: "absolute",
              top: "2%",
              right: "50%",
              transform: "translateX(50%)",
              zIndex: "1000",
            }}
          >
            Back To Instructions
          </Play>
          <AppReactContext>{Children}</AppReactContext>
        </UserReactContextProvider>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            React Context
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
                  tryFaceSpace();
                }}
              >
                Try Facespace
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
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Code Info
              </Unlocked>
            )}
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
                    Instructions
                  </Unlocked>
                )}
                <List theme={theme} $isReactEffects={"true"}>
                  {isMobile && (
                    <em>Given an array of users, API docs and screenshots</em>
                  )}
                  <li>Create a UserContext file</li>
                  <li>
                    Create a SignIn Logic (user inputs their name, which is then
                    sent to the server)
                  </li>

                  <li>
                    Create the homepage with all the users images, then if a
                    user is signed in, show who they are friends with (banner)
                  </li>
                  <li>
                    Create the profile page (dynamic route), display the user's
                    friends
                  </li>
                </List>
              </ContentWrapper>
              {!isMobile && (
                <ContentWrapper>
                  <Unlocked
                    theme={theme}
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    Given
                  </Unlocked>
                  <ul>
                    <li>
                      array of users (objects) on the server side in a data.js
                      file
                    </li>
                    <li>Endpoints and API docs</li>
                    <li>Screenshots of a working app</li>
                  </ul>
                </ContentWrapper>
              )}
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            Easy Life With "Global State"
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default ReactContext;
