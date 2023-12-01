import styled from "@emotion/styled";
import React from "react";
import { GiRollingBomb } from "react-icons/gi";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <GiRollingBomb style={{ fontSize: "70px" }} />
      <h3>An unknown error has occurred.</h3>
      <p>
        Please try refreshing the page, or <a href="/">contact support</a> if
        the problem persists.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  width: 380px;
  text-align: left;
`;
export default NotFoundPage;
