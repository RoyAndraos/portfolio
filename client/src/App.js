import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage";
import TransitionComponent from "./components/TransitionComponent";
import About from "./components/About";
import bg from "./assets/BG1.jpg";
import bgLight from "./assets/5243451.jpg";
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "./components/contexts/ColorTheme";
import "./scroll.css";
import NyanCat from "./components/about/roadmap/NyanCat";
import gsap from "gsap";
import RoadMapControllerWrapper from "./components/about/RoadMapControllerWrapper";
const App = () => {
  const { theme } = useContext(ThemeContext);

  const bgImageRef = useRef(null);
  const bgImageLightRef = useRef(null);
  let bgImageDarkRef = useRef(null);
  let bgImageSecondLightRef = useRef(null);
  let bgImageThirdLightRef = useRef(null);
  useEffect(() => {
    const bgAnimation = gsap.to(bgImageRef.current, {
      x: "100%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    const bgDarkAnimation = gsap.to(bgImageDarkRef.current, {
      x: "100%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    const bgLightAnimation = gsap.to(bgImageLightRef.current, {
      x: "200%",
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    const bgSecondLightAnimation = gsap.to(bgImageSecondLightRef.current, {
      x: "200%",
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    const bgThirdLightAnimation = gsap.to(bgImageThirdLightRef.current, {
      x: "200%",
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      // Stop the animations when the component is unmounted
      bgAnimation.kill();
      bgLightAnimation.kill();
      bgDarkAnimation.kill();
      bgSecondLightAnimation.kill();
      bgThirdLightAnimation.kill();
    };
  }, []);
  return (
    <Wrapper theme={theme}>
      <Header />
      <BgImage src={bg} ref={bgImageRef} theme={theme} />
      <BgImageDark src={bg} ref={bgImageDarkRef} theme={theme} />
      <BGImageLight ref={bgImageLightRef} src={bgLight} theme={theme} />
      <BGImageSecondLight
        ref={bgImageSecondLightRef}
        src={bgLight}
        theme={theme}
      />
      <BGImageThirdLight
        ref={bgImageThirdLightRef}
        src={bgLight}
        theme={theme}
      />
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
        <Route
          path="/roadmap"
          element={
            <TransitionComponent>
              <RoadMapControllerWrapper />
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
  ${({ theme }) => theme === "light" && `display: none;`};
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
`;
const BGImageLight = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme === "dark" && `display: none;`};
`;
const BgImageDark = styled.img`
  position: fixed;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  filter: brightness(0.5);
  transform: scaleX(1.01);
  ${({ theme }) => theme === "light" && `display: none;`};
`;
const BGImageSecondLight = styled.img`
  position: fixed;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  transform: rotateY(180deg);
  ${({ theme }) => theme === "dark" && `display: none;`};
`;

const BGImageThirdLight = styled.img`
  position: fixed;
  left: -200%;
  top: 0;
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme === "dark" && `display: none;`};
`;
export default App;
