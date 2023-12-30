import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const BackToProjects = () => {
  const location = useLocation();
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const [transform, setTransform] = useState("");
  useEffect(() => {
    if (
      location.pathname === "/projects/eCommerce/signup" ||
      location.pathname === "/projects/eCommerce/login"
    ) {
      setLeft("50%");
      setTop("3rem");
      setTransform("translateX(-50%)");
    } else {
      setTop("");
      setLeft("1rem");
    }
  }, [location.pathname]);
  return (
    <Wrapper $top={top} $left={left} $transform={transform}>
      <StyledLink to={"/projects"}>Back To Projects</StyledLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  position: absolute;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
  transform: ${(props) => props.$transform};
  font-weight: 700;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  all: unset;
  font-weight: 700;
  text-decoration: none;
  color: white;
  background-color: #50196f;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  :visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default BackToProjects;
