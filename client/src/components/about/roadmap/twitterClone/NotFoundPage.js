import styled from "@emotion/styled";
import React from "react";
import { GiRollingBomb } from "react-icons/gi";

const NotFoundPage = ({ setRoute }) => {
  return (
    <Wrapper>
      <GiRollingBomb style={{ fontSize: "70px" }} />
      <h3>An unknown error has occurred.</h3>
      <p>
        This is a simulated Error, please navigate back to the home page from
        the sidebar, or{" "}
        <StyledButton onClick={() => setRoute("/")}>click here</StyledButton>.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  position: relative;
  left: 20vw;
  height: 100vh;
  padding-top: 10vh;
`;
const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: blue;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
export default NotFoundPage;
