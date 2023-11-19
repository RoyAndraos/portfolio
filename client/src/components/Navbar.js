import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import pdf from "../assets/RoyResume.pdf";
import { useState, useEffect, useRef, useContext } from "react";
import gsap, { TimelineLite } from "gsap";
import BurgerMenu from "./BurgerMenu";
import ThemeContext from "./contexts/ColorTheme";
import { LinksWrapper, Git, LinkedIn } from "./HomePage";
const Navbar = ({ selected, handleSelect }) => {
  gsap.registerPlugin();
  const [menuOpen, setMenuOpen] = useState(false);
  let wrapper = useRef(null);
  let navElOne = useRef(null);
  let navElTwo = useRef(null);
  let navElThree = useRef(null);
  const navigate = useNavigate();
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
  return (
    <Container ref={(el) => (wrapper = el)} theme={theme}>
      <BurgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Wrapper isopen={menuOpen.toString()}>
        <StyledNavlink
          ref={(el) => (navElOne = el)}
          isselected={"About" === selected ? "true" : "false"}
          isopen={menuOpen.toString()}
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
          theme={theme}
          ref={(el) => (navElTwo = el)}
          isselected={"Projects" === selected ? "true" : "false"}
          isopen={menuOpen.toString()}
          onClick={(e) => {
            handleSelect(e);
            setMenuOpen(false);
          }}
        >
          Projects
        </StyledNavlink>
        <StyledNavlink
          ref={(el) => (navElThree = el)}
          to={pdf}
          target="_blank"
          isopen={menuOpen.toString()}
          theme={theme}
        >
          Resume
        </StyledNavlink>
        {menuOpen && (
          <LinksWrapper style={{ position: "relative", bottom: "0" }}>
            <a href="https://github.com/RoyAndraos">
              <Git style={{ color: "#a742bc" }} />
            </a>
            <a href="https://www.linkedin.com/in/roy-andraos-b92ab01a8/">
              <LinkedIn style={{ color: "#a742bc" }} />
            </a>
          </LinksWrapper>
        )}
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
    display: ${(props) => (props.isopen === "true" ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    background-color: black;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    transition: 300ms ease-in-out;
  }
`;

const StyledNavlink = styled(Link)`
  color: ${(props) => (props.isopen === "true" ? "whitesmoke" : "black")};
  font-weight: bold;
  font-size: 1.2rem;
  transition: 0.1s ease-in-out;
  background-color: transparent;
  width: 33%;
  text-align: center;
  text-underline-offset: 5px;
  text-decoration-thickness: 20px;
  text-decoration: ${(props) =>
    props.isselected === "true" ? "underline" : "none"};
  &:last-of-type {
    border: none;
  }
  ${({ theme }) => theme === "dark" && `color:#f5f5f5`};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  visibility: hidden;
`;

export default Navbar;
