import { useContext, useRef, useState } from "react";
import ThemeContext from "../../contexts/ColorTheme";
import { Wrapper, Unlocked, Acheivement, Info } from "./HTMLFundamentals";
import { List, Title } from "./TheDomPartTwo.js";
import {
  animateToShowProject,
  animateButton,
  unanimateButton,
} from "../../../helpers.js";
import styled from "styled-components";
import { data } from "./reactState2/data.js";
import Typeahead from "./reactState2/Typeahead.js";
import { Play, Line } from "./TheDomPartTwo.js";
const ReactStateTwo = ({ reactStateTwoRef, isMobile }) => {
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
      <Title $showgame={showSearchBar.toString()} theme={theme}>
        React State 2, My First Search Engine!
        {!isMobile && (
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
        )}
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
            {!isMobile && (
              <Unlocked theme={theme}>
                Code Info:
                <br />
              </Unlocked>
            )}
            <List theme={theme}>
              <em>Given an array of Book objects</em>
              <li>Create an input and track it using state</li>
              <li>
                Create a function that filters the books based on the input
              </li>
              <li>
                Map over the filtered books and display them in a list below the
                input
              </li>
            </List>
          </Info>{" "}
          <Acheivement theme={theme}>
            <Unlocked theme={theme}>Acheivement Unlocked!</Unlocked>
            <br /> You Find It For Me
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
