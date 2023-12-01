import { Wrapper, Title, Acheivement, Unlocked } from "./HTMLFundamentals";
import { useContext, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import styled from "styled-components";
import AppFetch from "./reactFetch/AppFetch";
import { Play } from "./TheDomPartTwo";
import { animateToShowProject } from "../../../helpers";
const ReactFetch = ({ reactFetchRef }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useContext(ThemeContext);
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
            React Fetch
            <Play
              onClick={() => {
                handleShowMenu();
              }}
            >
              Order Some Pizza
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
                  Given: <br />
                </Unlocked>
                1- Menu (array of objects) on the server side in a data.js file.{" "}
                <br />
                2- Endpoints and API docs.
              </ContentWrapper>
              <ContentWrapper>
                <Unlocked
                  theme={theme}
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  Instructions: <br />
                </Unlocked>
                1- Fetch the data from the server. <br />
                2- Display the menu items on the screen. <br />
                3- Use react-router-dom to create a route for each menu item.{" "}
                <br />
                4- Add a "Buy Item" button each menu item. <br />
                5- When the button is clicked, the user should be redirected to
                a confirmation page.
              </ContentWrapper>
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />I can now use fetch and router!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export const ContentWrapper = styled.div`
  width: 40%;
  font-size: 1.3rem;
`;
export const InfoWrapper = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0;
  border-top: 3px solid #50196f;
  border-right: 3px solid #50196f;
  border-top-right-radius: 20px;
  color: black;
  line-height: 2;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme === "dark" && `color: white;`};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    border: 3px solid #50196f;
    border-radius: 20px;
    margin-bottom: 10%;
    width: 85%;
  }
`;
export default ReactFetch;
