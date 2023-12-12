import React, { useContext } from "react";
import { Acheivement, Title, Unlocked, Wrapper } from "./HTMLFundamentals";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import ThemeContext from "../../contexts/ColorTheme";
import { List } from "./TheDomPartTwo";

const MongoP1 = ({ mongoP1Ref }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-26" ref={mongoP1Ref}>
      <Title theme={theme}>MongoDB Part 1</Title>
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
          <ContentWrapper style={{ width: "60%" }}>
            <List theme={theme}>
              <Unlocked style={{ fontWeight: "bold" }} theme={theme}>
                Methods
              </Unlocked>
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
        <br />I can now create and manage a database in MongoDB
      </Acheivement>
    </Wrapper>
  );
};

export default MongoP1;
