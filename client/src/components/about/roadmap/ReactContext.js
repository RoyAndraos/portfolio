import { useState, useContext, Children } from "react";
import { Wrapper, Title, Acheivement, Unlocked } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import { UserReactContextProvider } from "./reactContext/UserContextReactContext";
import AppReactContext from "./reactContext/AppReactContext";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { Play } from "./TheDomPartTwo";
import { animateToShowProject } from "../../../helpers";
const ReactContext = ({ reactContextRef }) => {
  const [showFaceSpace, setShowFaceSpace] = useState(false);
  const { theme } = useContext(ThemeContext);
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
              onClick={() => {
                tryFaceSpace();
              }}
            >
              Try Facespace
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
              <ContentWrapper>
                <Unlocked
                  theme={theme}
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  Given
                </Unlocked>
                <br />
                1- array of users (objects) on the server side in a data.js
                file.
                <br />
                2- Endpoints and API docs.
                <br />
                3- Screenshots of a working app.
              </ContentWrapper>
              <ContentWrapper>
                <Unlocked
                  theme={theme}
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  Instructions
                </Unlocked>
                <br />
                1- Create the UserContext file. <br />
                2- Create the SignIn Logic (user inputs their name, which is
                then sent to the server). <br />
                3- When a user is signed in, make sure they cant sign in again.{" "}
                <br />
                4- Create the homepage with all the users images, then if a user
                is signed in, show who they are friends with (banner). <br />
                5- Create the profile page (dynamic route).
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
