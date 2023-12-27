import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../contexts/ColorTheme";
const Summary = ({
  htmlRef,
  jsOneRef,
  cssOneRef,
  domOneRef,
  eventOneRef,
  oopRef,
  nyanCatRef,
  reactIntroRef,
  reactStateOneRef,
  reactEffectsRef,
  reactFetchRef,
  reactContextRef,
  reactReducerRef,
  twitterCloneRef,
  nodeIntroRef,
  nodeUrlParamsRef,
  nodePostMethodRef,
  nodePromisesRef,
  nodeAsynAwaitRef,
  nodeRestRef,
  mongoP1Ref,
}) => {
  const { theme } = useContext(ThemeContext);
  const handleScrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(htmlRef);
          }}
        >
          HTML Fundamentals
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(jsOneRef);
          }}
        >
          Javascript Fundamentals
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(cssOneRef);
          }}
        >
          CSS Fundamentals
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(domOneRef);
          }}
        >
          The DOM
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(eventOneRef);
          }}
        >
          Event Listeners
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(oopRef);
          }}
        >
          Object Oriented
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nyanCatRef);
          }}
        >
          Nyan Cat Project
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactIntroRef);
          }}
        >
          React Introduction
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactStateOneRef);
          }}
        >
          React State
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactEffectsRef);
          }}
        >
          React Effects
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactFetchRef);
          }}
        >
          React Fetch
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactContextRef);
          }}
        >
          React Context
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactReducerRef);
          }}
        >
          React Reducer
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(twitterCloneRef);
          }}
        >
          Twitter Clone Project
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeIntroRef);
          }}
        >
          NodeJS Introduction
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeUrlParamsRef);
          }}
        >
          NodeJS URL Params
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodePostMethodRef);
          }}
        >
          NodeJS Post Method
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodePromisesRef);
          }}
        >
          NodeJS Promises
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeAsynAwaitRef);
          }}
        >
          NodeJS Async/Await
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeRestRef);
          }}
        >
          NodeJS REST
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(mongoP1Ref);
          }}
        >
          MongoDB
        </StyledButton>
      </ListItem>
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const ListItem = styled.li`
  list-style: numeric;
  color: ${(props) => (props.theme === "dark" ? "#a742bc" : "#50196f")};
`;

const StyledButton = styled.button`
  width: 80%;
  max-height: 80%;
  height: 80%;
  background-color: transparent;
  border: ${(props) =>
    props.theme === "dark" ? "2px solid #a742bc" : "2px solid #50196f"};
  color: ${(props) => (props.theme === "dark" ? "#a742bc" : "#50196f")};
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
export default Summary;
