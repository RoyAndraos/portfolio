import { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Acheivement, Unlocked, Wrapper } from "./HTMLFundamentals";
import { Play, Line, Title, List } from "./TheDomPartTwo";
import { SeatProvider } from "./reactReducer/components/SeatContext";
import { BookingProvider } from "./reactReducer/components/BookingContext";
import AppReactReducer from "./reactReducer/components/AppReactReducer";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers";
const ReactReducer = ({ reactReducerRef, isMobile }) => {
  const [showReducer, setShowReducer] = useState(false);
  const { theme } = useContext(ThemeContext);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const handleShowReducer = () => {
    animateToShowProject(setShowReducer, showReducer, reactReducerRef);
  };
  return (
    <Wrapper id="section-18" ref={reactReducerRef} $isReactReducer={"true"}>
      {showReducer ? (
        <SeatProvider>
          <BookingProvider>
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
                width: "35%",
                height: "10vh",
                backgroundColor: "rgba(255,255,255,0.8)",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              React Reducer
              <Play
                style={{ marginLeft: "30px", marginTop: "5%" }}
                onClick={() => {
                  handleShowReducer();
                }}
              >
                Back To Instructions
              </Play>
            </Title>
            <AppReactReducer></AppReactReducer>
          </BookingProvider>
        </SeatProvider>
      ) : (
        <>
          <Title theme={theme} $showgame={"false"}>
            React Reducer
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
                  handleShowReducer();
                }}
              >
                Try The Seat Booker
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
                justifyContent: "flex-start",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper $isMobile={!isMobile.toString()}>
                {!isMobile && (
                  <Unlocked
                    theme={theme}
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    Code Instructions
                  </Unlocked>
                )}
                <List
                  theme={theme}
                  $isReactEffects={"true"}
                  style={{ wordBreak: "break-all" }}
                >
                  {isMobile && (
                    <em>Given Seat data, API docs and screenshots</em>
                  )}
                  <li>
                    Fetch the seats data from the server, and style the grid to
                    replicate Screenshots
                  </li>
                  <li>
                    Create a reducer and context for the seats data (actions:
                    recieveDataFromServer)
                  </li>
                  <li>
                    Create a reducer and context for the booking data(actions:
                    startBookingProcess, cancelBookingProcess)
                  </li>
                </List>
              </ContentWrapper>
              {!isMobile && (
                <ContentWrapper>
                  <Unlocked
                    theme={theme}
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Given
                  </Unlocked>
                  <ul>
                    <li>Seats Data </li>
                    <li> API documentation</li>
                    <li>Initial UI, which is a table of seats</li>
                    <li>Screenshots</li>
                  </ul>
                </ContentWrapper>
              )}
            </div>
            <Unlocked theme={theme} style={{ fontSize: "1.2rem" }}>
              Stretch: add puchaseTicketRequest, purchaseTicketSuccess and
              purchaseTicketFailure actions to the Booking reducer, and a
              markSeatAsPurchased action for the Seats reducer.
            </Unlocked>
          </InfoWrapper>
          <Acheivement theme={theme} style={{ margin: "0" }}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />
            Easier Life with "Global State Management"
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default ReactReducer;
