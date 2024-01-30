import React, { useContext } from "react";
import { Title, Acheivement, Unlocked, Wrapper } from "./HTMLFundamentals";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import ThemeContext from "../../contexts/ColorTheme";
import { List } from "./TheDomPartTwo";

const MongoP1 = ({ mongoP1Ref, isMobile }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-26" ref={mongoP1Ref}>
      <Title theme={theme} $showgame={"false"}>
        MongoDB Part 1
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
          {!isMobile && (
            <ContentWrapper style={{ width: "30%" }}>
              <List theme={theme}>
                <Unlocked style={{ fontWeight: "bold" }} theme={theme}>
                  Database Setup
                </Unlocked>
                <li>
                  After signing up for an account, create a new organization,
                  cluster and then a database
                </li>
                <li>
                  Connect to the database using the connection string provided
                </li>
              </List>
            </ContentWrapper>
          )}
          <ContentWrapper $isMobile={!isMobile.toString()}>
            <List theme={theme} $isReactEffects={isMobile.toString()}>
              {!isMobile && (
                <Unlocked style={{ fontWeight: "bold" }} theme={theme}>
                  Methods
                </Unlocked>
              )}
              {isMobile && (
                <li>
                  After signing up for an account, create a new organization,
                  cluster then a database
                </li>
              )}
              <li>
                Make a batch import function that will populate the database
              </li>
              <li>
                Make a function that will get all the data from the database
              </li>
              <li>
                Make a function that will get one document from the database
              </li>
              <li>
                Make a function that will update one document from the database
              </li>
              <li>
                Make a function that will delete one document from the database
              </li>
              <li>
                Make a function that will add one document to the database
              </li>
            </List>
          </ContentWrapper>
        </div>
      </InfoWrapper>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />
        db.MongoDB
      </Acheivement>
    </Wrapper>
  );
};

export default MongoP1;
