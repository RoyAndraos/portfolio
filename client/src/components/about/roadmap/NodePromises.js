import { useContext } from "react";
import { Wrapper, Unlocked, Title } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { List } from "./TheDomPartTwo";
import styled from "styled-components";
const NodePromises = ({ nodePromisesRef, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-23" ref={nodePromisesRef}>
      <Title theme={theme} $showgame={"false"}>
        Node.js Promises
      </Title>
      <InfoWrapper theme={theme} style={{ width: "90%", padding: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "flex-start",
            width: "100%",
          }}
        >
          {!isMobile && (
            <ContentWrapper
              style={{ wordWrap: "break-all", width: "28%" }}
              $isMobile={!isMobile.toString()}
            >
              <List theme={theme} $isReactEffects={"true"}>
                <Unlocked
                  theme={theme}
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Exercise 1
                </Unlocked>
                <li>
                  Use request (request-promise) to call
                  'https://journeyedu.herokuapp.com/hello' and use .then to
                  parse the response
                </li>
                <li>
                  Use the same API and the same technique but add a language
                  parameter{" "}
                </li>
              </List>
            </ContentWrapper>
          )}
          <ContentWrapper $isMobile={!isMobile.toString()}>
            <List $isReactEffects={"true"}>
              {isMobile && (
                <>
                  <li>
                    Use request (request-promise) to call
                    'https://journeyedu.herokuapp.com/hello'.
                  </li>
                </>
              )}
              {!isMobile && (
                <Unlocked
                  theme={theme}
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Exercise 2
                </Unlocked>
              )}
              <li>
                Make a call "http://api.open-notify.org/iss-now.json" to get the
                ISS's current position and parse the result
                {!isMobile && (
                  <>
                    <br />
                    {JSON.stringify({ lat: 51.0, lng: 45.0 })}
                  </>
                )}
              </li>
              <li>
                Use opencage-api-client; get your api key and call this api
                which returns the position (lat, lng), when given an address
              </li>
              <li>
                Do the same thing but in reverse; function returns address when
                given the position
              </li>
              <li>
                {!isMobile && (
                  <Unlocked theme={theme}>
                    Put all of it together! <br />{" "}
                  </Unlocked>
                )}
                Make a function that accepts an address and returns the distance
                of the ISS from that address
              </li>
            </List>
          </ContentWrapper>
        </div>
      </InfoWrapper>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        Patience, I Promise.
      </Acheivement>
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
    margin-top: 0;
    font-size: 18px;
  }
  @media (max-height: 800px) {
    display: none;
  }
  @media (min-height: 1000px) {
    display: flex;
  }
`;

export default NodePromises;
