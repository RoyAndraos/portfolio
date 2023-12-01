import React, { useContext } from "react";
import styled from "styled-components";
import { UserContextReactContext } from "./UserContextReactContext";
const HeaderReactContext = ({ setRoute }) => {
  const { currentUser } = useContext(UserContextReactContext);
  return (
    <Wrapper>
      <NavItem
        onClick={() => {
          setRoute("/");
        }}
      >
        Facespace
      </NavItem>
      <NavItem
        onClick={() => {
          if (!currentUser) {
            setRoute("/signin");
          }
        }}
      >
        {currentUser ? `Howdie, ${currentUser}` : "Sign in"}
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #cc5500;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.button`
  color: white;
  padding: 10px;
  font-size: 25px;
  text-decoration: none;
  font-family: inherit;
  font-weight: 900;
  background-color: #cc5500;
  border: none;
  cursor: pointer;
  &:first-of-type {
    margin-left: 40px;
  }
  &:last-of-type {
    margin-right: 40px;
  }
`;
export default HeaderReactContext;
