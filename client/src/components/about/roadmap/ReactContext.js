import { useState, useContext, Children, useRef } from "react";
import { Wrapper, Title, Acheivement, Unlocked } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import { UserReactContextProvider } from "./reactContext/UserContextReactContext";
import AppReactContext from "./reactContext/AppReactContext";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { Play, Line } from "./TheDomPartTwo";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
const ReactContext = ({ reactContextRef }) => {
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
          <Title
            theme={theme}
            $showgame={"false"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              width: "80%",
              transform: "translateX(40%)",
            }}
          >
            React Context
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
          </Title>
          <InfoWrapper theme={theme}>
            <Unlocked
              theme={theme}
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Code Info
            </Unlocked>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper style={{ width: "70%" }}>
                <Unlocked
                  theme={theme}
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  Instructions
                </Unlocked>
                <ul>
                  <li>Create the UserContext file</li>
                  <li>
                    Create the SignIn Logic (user inputs their name, which is
                    then sent to the server)
                  </li>
                  <li>
                    When a user is signed in, make sure they cant sign in again
                  </li>
                  <li>
                    Create the homepage with all the users images, then if a
                    user is signed in, show who they are friends with (banner)
                  </li>
                  <li>Create the profile page (dynamic route)</li>
                </ul>
              </ContentWrapper>
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
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />I can now use useContext!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default ReactContext;
