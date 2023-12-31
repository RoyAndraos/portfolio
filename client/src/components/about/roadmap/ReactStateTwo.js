import { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import {
  Wrapper,
  Title,
  Unlocked,
  Acheivement,
  Info,
} from "./HTMLFundamentals";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers.js";
import styled from "styled-components";
import { data } from "./reactState2/data.js";
import Typeahead from "./reactState2/Typeahead.js";
import { Play, Line } from "./TheDomPartTwo.js";
const ReactStateTwo = ({ reactStateTwoRef }) => {
  const { theme } = useContext(ThemeContext);
  const [suggestion, setSuggestion] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  let lineTop = useRef(null);
  let lineLeft = useRef(null);
  let lineRight = useRef(null);
  let buttonRef = useRef(null);
  const showSearch = () => {
    animateToShowProject(setShowSearchBar, showSearchBar, reactStateTwoRef);
  };
  return (
    <Wrapper ref={reactStateTwoRef} id="section-14">
      <Title
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "90%",
          transform: "translateX(35%)",
        }}
        $showgame={showSearchBar.toString()}
        theme={theme}
      >
        React State 2, My First Search Engine!
        <Play
          ref={(el) => (buttonRef = el)}
          theme={theme}
          onClick={() => {
            showSearch();
          }}
          onMouseEnter={() => {
            animateButton(lineLeft, lineRight, lineTop, buttonRef);
          }}
          onMouseLeave={() => {
            unanimateButton(lineLeft, lineRight, lineTop, buttonRef);
          }}
        >
          <Line ref={(el) => (lineTop = el)} theme={theme} />
          <Line ref={(el) => (lineLeft = el)} theme={theme} />
          <Line ref={(el) => (lineRight = el)} theme={theme} />
          {showSearchBar ? "Back To Instructions" : "Try The Search Engine"}
        </Play>
      </Title>
      {showSearchBar ? (
        <InfoWrapper theme={theme} style={{ top: "5%" }}>
          <Typeahead
            setSuggestion={setSuggestion}
            categories={data.categories}
            suggestions={data.books}
            handleSelect={(suggestion) => {
              setSuggestion(suggestion);
            }}
          />
          {suggestion !== "" && <p>You searched for {suggestion}</p>}
        </InfoWrapper>
      ) : (
        <>
          <Info theme={theme}>
            <Unlocked theme={theme}>Code Info:</Unlocked>
            <br />
            In this workshop, I was given a data file with a list of book
            objects. I had to create a search engine that would filter the books
            based on the user's input. I used state to keep track of the user's
            input, and used the filter method to filter the books based on the
            user's input. I also used the map method to display the filtered
            books.
          </Info>{" "}
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br />I can now create a simple search engine.
          </Acheivement>
        </>
      )}
    </Wrapper>
  );
};

const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  font-size: 1.5rem;
  border-top: 3px solid #50196f;
  color: black;
  line-height: 2;
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
    width: 100%;
    height: 40%;
    overflow-y: scroll;
    padding: 5%;
  }
`;

export default ReactStateTwo;
