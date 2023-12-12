import { useContext } from "react";
import { Title, Wrapper, Unlocked, Acheivement } from "./HTMLFundamentals";
import ThemeContext from "../../contexts/ColorTheme";
import { ContentWrapper, InfoWrapper } from "./ReactFetch";
import { List } from "./TheDomPartTwo";
const NodePromises = ({ nodePromisesRef }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="section-23" ref={nodePromisesRef}>
      <Title theme={theme}>Node.js Promises</Title>
      <InfoWrapper theme={theme} style={{ width: "90%", padding: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "flex-start",
            width: "100%",
          }}
        >
          <ContentWrapper style={{ width: "28%", wordWrap: "break-word" }}>
            <List theme={theme}>
              <Unlocked
                theme={theme}
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Exercise 1
              </Unlocked>
              <li>
                Use request (request-promise) to call
                'https://journeyedu.herokuapp.com/hello' and use .then to parse
                the response
              </li>
              <li>
                Use the same API and the same technique but add a language
                parameter{" "}
              </li>
            </List>
          </ContentWrapper>
          <ContentWrapper style={{ width: "70%" }}>
            {" "}
            <ul>
              <Unlocked
                theme={theme}
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Exercise 2
              </Unlocked>
              <li>
                Use the same techinque used in exercise 1 to call
                "http://api.open-notify.org/iss-now.json" to get the ISS's
                current position and parse the result so that you get an object
                like so {JSON.stringify({ lat: 51.0, lng: 45.0 })}
              </li>
              <li>
                Use opencage-api-client; get your key from their website and
                make a function to call this api which returns the position
                (lat, lng), when given an address
              </li>
              <li>
                Do the same thing but in reverse; function returns address when
                given the position
              </li>
              <li>
                <Unlocked theme={theme}>Put all of it together!</Unlocked>{" "}
                <br /> The function should accept an address and return the
                distance of the ISS from that address
              </li>
            </ul>
          </ContentWrapper>
        </div>
      </InfoWrapper>
      <Acheivement theme={theme}>
        <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
        <br />I can now use Node.js Promises to handle async code.
      </Acheivement>
    </Wrapper>
  );
};

export default NodePromises;
