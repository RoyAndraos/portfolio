import { useContext, useRef, useState } from "react";
import { Wrapper, Acheivement, Unlocked, Title } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import {
  animateToShowProject,
  unanimateButton,
  animateButton,
} from "../../../helpers";
import { List, Play, Line } from "./TheDomPartTwo";
import { InfoWrapper } from "./ReactFetch";
import AppPost from "./nodePost/components/AppPost";
const NodePostMethod = ({ nodePostMethodRef }) => {
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
            Node.js Post Method
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
                animateToShowProject(setShowProj, showProj, nodePostMethodRef);
              }}
            >
              Try The Form
              <Line ref={(el) => (lineTop = el)} theme={theme} />
              <Line ref={(el) => (lineLeft = el)} theme={theme} />
              <Line ref={(el) => (lineRight = el)} theme={theme} />
            </Play>
          </Title>
          <InfoWrapper theme={theme}>
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
              <List style={{ fontSize: "1.2rem" }} theme={theme}>
                <li>
                  <ul>
                    Validate that the user has not yet placed an order (because
                    the product is free, we limit 1 per customer). We cannot
                    know this with 100% accuracy, but we can refuse users.
                    <li>whose name is already in our database.</li>
                    <li>whose email is already in our database.</li>
                    <li>
                      whose address matches an address already in our database.
                      Use only the street number and name for this.
                    </li>
                  </ul>
                </li>
                <li>
                  Validate that the data received is valid as much as is
                  possible.
                  <br />
                  <Unlocked theme={theme}>
                    Is the email, an email? Does it include @? (No need to go
                    crazy here. Just a cursory evaluation.)
                  </Unlocked>
                </li>
                <li>
                  Validate that delivery address is within Canada. We only ship
                  to Canada!
                </li>
                <li>Validate that the item selected is actually in stock.</li>
                <li>Validate that the item size was selected.</li>
              </List>
            </div>
          </InfoWrapper>
          <Acheivement theme={theme} style={{ marginTop: "0" }}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> I can now validate then post data to a server!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default NodePostMethod;
