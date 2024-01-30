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
  isMobile,
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
          HTML
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(jsOneRef);
          }}
        >
          Javascript
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(cssOneRef);
          }}
        >
          CSS
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
          {!isMobile ? "Nyan Cat Project" : "Nyan Cat"}
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(reactIntroRef);
          }}
        >
          React Intro
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
          {!isMobile ? "Twitter Clone Project" : "Twitter Clone"}
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeIntroRef);
          }}
        >
          NodeJS Intro
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeUrlParamsRef);
          }}
        >
          {!isMobile ? "NodeJS URL Params" : "URL Params"}
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodePostMethodRef);
          }}
        >
          {!isMobile ? "NodeJS Post Method" : "Post Method"}
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodePromisesRef);
          }}
        >
          {!isMobile ? "NodeJS Promises" : "Promises"}
        </StyledButton>
      </ListItem>
      <ListItem theme={theme}>
        <StyledButton
          theme={theme}
          onClick={() => {
            handleScrollToElement(nodeAsynAwaitRef);
          }}
        >
          {!isMobile ? "NodeJS Async/Await" : "Async Await"}
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
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 800px) {
    top: -15px;
    position: relative;
  }
`;
const ListItem = styled.li`
  list-style: numeric;
  color: ${(props) => (props.theme === "dark" ? "#a742bc" : "#50196f")};
  font-size: clamp(0.9rem, 1.2rem, 1.5rem);
  @media (max-width: 800px) {
    width: 30vw;
    height: 8vh;
    list-style: none;
    left: -12px;
    font-size: 18px;
    position: relative;
  }
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
  font-size: 16px;
  cursor: pointer;
`;
export default Summary;
