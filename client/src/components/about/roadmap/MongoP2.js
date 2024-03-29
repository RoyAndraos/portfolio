import { useContext } from "react";
import { Title, Unlocked, Wrapper } from "./HTMLFundamentals";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import ThemeContext from "../../contexts/ColorTheme";
import { List } from "./TheDomPartTwo";
import { Acheivement } from "./NodePostMethod";
const MongoP2 = ({ mongoP2Ref }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-27" ref={mongoP2Ref}>
      <Title theme={theme} $showgame={"false"}>
        MongoDB Part 2
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
          <ContentWrapper style={{ width: "100%" }}>
            <List theme={theme}>
              <Unlocked theme={theme}>
                Remember that seat booker i made in react reducer?
              </Unlocked>
              <li>Send the given seat data to the database</li>
              <li>Make a getSeats function</li>
              <li>
                When a user books a seat, update the database (make the bookSeat
                function)
              </li>
              <li>
                Create a collection that will store the user's full name, email
                and the seat they booked (edit the bookSeat function to do this)
              </li>
            </List>
          </ContentWrapper>
        </div>
      </InfoWrapper>
      <Acheivement theme={theme}>
        <Unlocked theme={theme} style={{ top: "20%" }}>
          Acheivement Unlocked!
        </Unlocked>
        <br />
        Manage A Database
      </Acheivement>
    </Wrapper>
  );
};

export default MongoP2;
