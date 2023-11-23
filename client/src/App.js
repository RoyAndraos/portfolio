import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage";
import TransitionComponent from "./components/TransitionComponent";
import About from "./components/About";
import bg from "./assets/BG1.jpg";
import { useContext } from "react";
import ThemeContext from "./components/contexts/ColorTheme";
import "./scroll.css";
import NyanCat from "./components/about/roadmap/NyanCat";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Header />
      <BgImage src={bg} theme={theme} />
      <Routes>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <HomePage />
            </TransitionComponent>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionComponent>
              <About />
            </TransitionComponent>
          }
        />
        <Route
          path="/nyan-pizza"
          element={
            <TransitionComponent>
              <NyanCat />
            </TransitionComponent>
          }
        />
      </Routes>
    </Wrapper>
  );
};
const BgImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  filter: brightness(0.5);
  object-fit: cover;
  ${({ theme }) => theme === "light" && `display: none;`};
  z-index: -1;
`;
const Wrapper = styled.div``;

export default App;
