import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import pdf from "../assets/RoyResume.pdf";
import { useState, useEffect, useRef, useContext } from "react";
import gsap, { TimelineLite } from "gsap";
import BurgerMenu from "./BurgerMenu";
import ThemeContext from "./contexts/ColorTheme";
const Navbar = ({ selected, handleSelect }) => {
  gsap.registerPlugin();
  const [menuOpen, setMenuOpen] = useState(false);
  let wrapper = useRef(null);
  let navElOne = useRef(null);
  let navElTwo = useRef(null);
  let navElThree = useRef(null);
  let navElFour = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(wrapper, 0, { css: { visibility: "visible" } })
      .fromTo(
        navElOne,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.2,
        }
      )
      .fromTo(
        navElTwo,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: -0.2,
        }
      )
      .fromTo(
        navElFour,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: -0.2,
        }
      )
      .fromTo(
        navElThree,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: -0.2,
        }
      );
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  return (
    <Container ref={(el) => (wrapper = el)} theme={theme}>
      <BurgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Wrapper $isopen={menuOpen.toString()}>
        <StyledNavlink
          key={"About"}
          ref={(el) => (navElOne = el)}
          $isselected={"About" === selected ? true : false}
          $isopen={menuOpen.toString()}
          theme={theme}
          onClick={(e) => {
            handleSelect(e);
            setMenuOpen(false); // Close the menu when a link is clicked
            navigate("/about");
          }}
        >
          About
        </StyledNavlink>
        <StyledNavlink
          key={"Projects"}
          theme={theme}
          ref={(el) => (navElTwo = el)}
          $isselected={"Projects" === selected ? true : false}
          $isopen={menuOpen.toString()}
          onClick={(e) => {
            handleSelect(e);
            navigate("/projects");
            setMenuOpen(false);
          }}
        >
          Projects
        </StyledNavlink>
        <StyledNavlink
          key={"Roadmap"}
          theme={theme}
          ref={(el) => (navElFour = el)}
          $isselected={"Roadmap" === selected ? true : false}
          $isopen={menuOpen.toString()}
          onClick={(e) => {
            handleSelect(e);
            setMenuOpen(false);
            navigate("/roadmap");
          }}
        >
          Roadmap
        </StyledNavlink>
        <StyledNavlink
          key={"Resume"}
          ref={(el) => (navElThree = el)}
          to={pdf}
          target="_blank"
          $isopen={menuOpen.toString()}
          theme={theme}
        >
          Resume
        </StyledNavlink>
      </Wrapper>
    </Container>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  width: 100%;
  @media (max-width: 800px) {
    display: ${(props) => (props.$isopen === "true" ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    top: 10vh;
    left: 0;
    width: 100%;
    height: 70vh;
    transition: 300ms ease-in-out;
  }
`;

const StyledNavlink = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  transition: 0.1s ease-in-out;
  background-color: transparent;
  width: 33%;
  text-align: center;
  color: ${(props) =>
    props.$isselected
      ? "#a742bc"
      : props.theme === "dark"
      ? "whitesmoke"
      : "black"}!important;
  font-weight: ${(props) => (props.$isselected ? "bold" : "normal")}!important;
  text-decoration: none;
  &:last-of-type {
    border: none;
  }
  @media (max-width: 800px) {
    border-bottom: 1px solid #a742bc;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    &:last-of-type {
      border-bottom: 1px solid #a742bc;
    }
    &:first-of-type {
      border-top: none;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  visibility: hidden;
`;

export default Navbar;
