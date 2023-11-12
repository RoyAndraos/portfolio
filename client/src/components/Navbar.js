import styled from "styled-components";
import { NavLink } from "react-router-dom";
import pdf from "../assets/RoyResume.pdf";
import { useState, useEffect, useRef } from "react";
import gsap, { TimelineLite } from "gsap";
import BurgerMenu from "./BurgerMenu";
const Navbar = ({ selected, handleSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let wrapper = useRef(null);
  let navElOne = useRef(null);
  let navElTwo = useRef(null);
  let navElThree = useRef(null);

  gsap.registerPlugin();
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
    <Container ref={(el) => (wrapper = el)}>
      <BurgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Wrapper isopen={menuOpen.toString()}>
        <StyledNavlink
          ref={(el) => (navElOne = el)}
          to="/about"
          isselected={"About" === selected ? "true" : "false"}
          isopen={menuOpen.toString()}
          onClick={(e) => {
            handleSelect(e);
            setMenuOpen(false); // Close the menu when a link is clicked
          }}
        >
          About
        </StyledNavlink>
        <StyledNavlink
          ref={(el) => (navElTwo = el)}
          to="/projects"
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
  width: 30vw;
  @media (max-width: 800px) {
    display: ${(props) => (props.isopen === "true" ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    background-color: #333333;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    transition: 300ms ease-in-out;
    z-index: 10;
  }
`;

const StyledNavlink = styled(NavLink)`
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
`;

const Container = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  visibility: hidden;
`;

export default Navbar;
