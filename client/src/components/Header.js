import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import gsap, { TimelineLite, Power2 } from "gsap";
import { useEffect, useRef } from "react";
const Header = () => {
  const [selected, setSelected] = useState("");
  let wrapper = useRef(null);
  let element = useRef(null);
  gsap.registerPlugin();
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
  const handleSelect = (e) => {
    e.preventDefault();
    if (e.target.innerText === "About") {
      setSelected("About");
    } else if (e.target.innerText === "Projects") {
      setSelected("Projects");
    } else {
      setSelected("Resume");
    }
  };
  return (
    <Wrapper ref={(el) => (wrapper = el)}>
      <StyledNavlink
        to="/"
        style={{ textDecoration: "none" }}
        onClick={() => setSelected("")}
      >
        <Name ref={(el) => (element = el)}>Roy Andraos</Name>
      </StyledNavlink>
      <Navbar selected={selected} handleSelect={handleSelect} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 100vw;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  visibility: hidden;
`;

const Name = styled.h1`
  font-size: clamp(25px, 3vw, 40px);
  margin: 0;
  color: #50196f;
  padding: 0;
  font-family: "Roboto", sans-serif;
`;
const StyledNavlink = styled(NavLink)`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
