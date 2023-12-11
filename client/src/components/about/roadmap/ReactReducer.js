import { useContext, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Acheivement, Title, Unlocked, Wrapper } from "./HTMLFundamentals";
import { Play } from "./TheDomPartTwo";
import { SeatProvider } from "./reactReducer/components/SeatContext";
import { BookingProvider } from "./reactReducer/components/BookingContext";
import AppReactReducer from "./reactReducer/components/AppReactReducer";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { animateToShowProject } from "../../../helpers";
const ReactReducer = ({ reactReducerRef }) => {
  const [showReducer, setShowReducer] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleShowReducer = () => {
    animateToShowProject(setShowReducer, showReducer, reactReducerRef);
  };
  return (
    <Wrapper id="section-18" ref={reactReducerRef}>
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
            React Reducer
            <Play
              onClick={() => {
                handleShowReducer();
              }}
            >
              Try The Seat Booker
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
                justifyContent: "flex-start",
                alignContent: "flex-start",
                width: "100%",
              }}
            >
              <ContentWrapper style={{ width: "70%" }}>
                <Unlocked
                  theme={theme}
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Code Instructions
                </Unlocked>
                <ul>
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
                </ul>
              </ContentWrapper>
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
            </div>
            <Unlocked theme={theme} style={{ fontSize: "1.3rem" }}>
              Stretch: Make the booking process work; add puchaseTicketRequest,
              purchaseTicketSuccess and purchaseTicketFailure actions for the
              Booking Context, then make a markSeatAsPurchased action for the
              Seats Context.
            </Unlocked>
          </InfoWrapper>
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />I can now use reducer!
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

export default ReactReducer;
