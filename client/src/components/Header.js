import { useState, useContext } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { NavLink, useLocation } from "react-router-dom";
import gsap, { TimelineLite, Power2 } from "gsap";
import { useEffect, useRef } from "react";
import logo from "../assets/finalPortfolioReactIcon.png";
import ThemeContext from "./contexts/ColorTheme";
import { MdOutlineLightMode } from "react-icons/md";
const Header = () => {
  const [selected, setSelected] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  let wrapper = useRef(null);
  let logoRef = useRef(null);
  let element = useRef(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("");
        break;
      case "/about":
        setSelected("About");
        break;
      case "/projects":
        setSelected("Projects");
        break;
      case "/roadmap":
        setSelected("Roadmap");
        break;
      default:
        setSelected("");
    }
  }, [location.pathname]);
  //useEffect to detect if the screen size is less than 1000px
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1000;
      setIsMobile(newIsMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(wrapper, 0, { css: { visibility: "visible" } }).fromTo(
      element,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  const animateLogo = () => {
    gsap.registerPlugin();
    const tl = new TimelineLite();
    tl.fromTo(
      logoRef,
      {
        opacity: 0,
        rotate: 360, // Start rotation
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        rotate: 720, // End rotation
        duration: 1.4,
        ease: Power2.easeInOut,
        delay: 2,
      }
    );
    tl.fromTo(
      logoRef,
      {
        rotate: 360, // Start rotation
      },
      {
        rotate: 720, // End rotation
        duration: 9,
        ease: "none",
        repeat: -1,
      }
    );
  };

  const stopAnimation = () => {
    gsap.registerPlugin();
    const tl = new TimelineLite();
    tl.fromTo(
      logoRef,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      if (showLogo === false) {
        setShowLogo(true);
        animateLogo();
      }
    } else if (location.pathname === "/") {
      stopAnimation();
      setShowLogo(false);
    }
  }, [location.pathname, showLogo]);

  const handleSelect = (e) => {
    e.preventDefault();
    if (e.target.innerText === "About") {
      setSelected("About");
    } else if (e.target.innerText === "Projects") {
      setSelected("Projects");
    } else if (e.target.innerText === "Resume") {
      setSelected("Resume");
    } else if (e.target.innerText === "Roadmap") {
      setSelected("Roadmap");
    }
  };
  return (
    <Wrapper ref={(el) => (wrapper = el)} theme={theme}>
      <StyledNavlink to="/" $showlogo={showLogo.toString()}>
        <Logo
          src={logo}
          ref={(el) => (logoRef = el)}
          onClick={() => setSelected("")}
          $showlogo={showLogo.toString()}
        />
      </StyledNavlink>
      <Name
        ref={(el) => (element = el)}
        theme={theme}
        $showlogo={(showLogo && isMobile).toString()}
      >
        {isMobile ? "Roy A." : "Roy Andraos "}
      </Name>

      <Toggle
        aria-label="theme toggle button"
        name={"Color Theme button"}
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        <StyledMdOutlineLightMode theme={theme} />
      </Toggle>

      <Navbar selected={selected} handleSelect={handleSelect} />
    </Wrapper>
  );
};

const ToggleLabel = styled.label`
  position: absolute;
  left: 50%;
  top: 2%;
  font-weight: bold;
  text-align: center;
  transform: translateX(-50%);
  width: 33.3%;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: #50196f;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  align-content: center;
  height: 10vh;
  width: 100%;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  visibility: hidden;
  z-index: 100;
  ${({ theme }) => theme === "dark" && `background: rgba(0, 0, 0, 0.6)`};
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const Name = styled.h1`
  font-size: clamp(25px, 3vw, 40px);
  margin: 0;
  display: ${(props) => (props.$showlogo === "true" ? "none" : "block")};
  color: #50196f;
  padding: 0;
  font-family: "Roboto", sans-serif;
  text-align: center;
  cursor: default;
  width: 100%;
  ${({ theme }) => theme === "dark" && `color: whitesmoke;`};
`;

const StyledNavlink = styled(NavLink)`
  height: 100%;
  position: relative;
  display: ${(props) => (props.$showlogo === "true" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.$showlogo === "true" ? "pointer" : "default")};
  @media (min-width: 800px) {
    position: absolute;
    left: 3vw;
  }
`;
const Logo = styled.img`
  height: 8vh;
  width: 8vh;
  z-index: 100;
`;

const Toggle = styled.button`
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const StyledMdOutlineLightMode = styled(MdOutlineLightMode)`
  color: #50196f;
  font-size: 30px;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
`;

export default Header;
