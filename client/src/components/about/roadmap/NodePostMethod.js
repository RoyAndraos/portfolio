import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { Wrapper, Unlocked } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import {
  animateToShowProject,
  unanimateButton,
  animateButton,
} from "../../../helpers";
import { List, Play, Line, Title } from "./TheDomPartTwo";
import { InfoWrapper } from "./ReactFetch";
import AppPost from "./nodePost/components/AppPost";
const NodePostMethod = ({ nodePostMethodRef, isMobile }) => {
  const [showProj, setShowProj] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  return (
    <Wrapper id="section-22" ref={nodePostMethodRef}>
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
              left: "70%",
              width: "30%",
              zIndex: "999",
              color: "#a742bc",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "0 30px",
              height: "10vh",
            }}
          >
            Node Post{" "}
            <Play
              style={{ marginLeft: "30px" }}
              onClick={() => {
                animateToShowProject(setShowProj, showProj, nodePostMethodRef);
              }}
            >
              Back To Instructions
            </Play>
          </Title>
          <AppPost />
        </Wrapper>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            Node.js Post Method
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
                  animateToShowProject(
                    setShowProj,
                    showProj,
                    nodePostMethodRef
                  );
                }}
              >
                Fill Out The Form
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
              <List $isReactEffects={"true"} theme={theme}>
                <li>
                  <ul
                    style={{
                      width: "90%",
                      margin: "0",
                      padding: "0",
                      paddingLeft: "10px",
                    }}
                  >
                    User has not yet placed an order:
                    <li>Name is already in our database.</li>
                    <li>Email is already in our database.</li>
                    <li>
                      Address matches an address already in our database. Use
                      only the street number and name for this.
                    </li>
                  </ul>
                </li>
                <li>
                  Data received is valid as much as is possible:
                  <br />
                  <Unlocked theme={theme} style={{ fontWeight: "100" }}>
                    Is the email, an email? Does it include @? (No need to go
                    crazy here. Just a cursory evaluation.)
                  </Unlocked>
                </li>
                <li>Delivery address is within Canada.</li>
                <li>
                  Item selected is actually in stock (check for item size when
                  needed).
                </li>
              </List>
            </div>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            Everything is valid, Sir!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

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
    font-size: 18px;
    margin-top: 0;
  }
  @media (max-height: 800px) {
    position: absolute;
    right: 20%;
    top: 15%;
  }
  @media (min-height: 1000px) {
    position: relative;
  }
`;
export default NodePostMethod;
