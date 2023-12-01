import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "./constants";
import SectionBarLikes from "./SectionBarLikes";
import SectionBarMedia from "./SectionBarMedia";
import SectionBarTweets from "./SectionBarTweets";
const SectionBar = ({ props, setRoute }) => {
  const types = ["Tweets", "Media", "Likes"];
  const [active, setActive] = useState(types[0]);

  return (
    <div>
      <Wrapper>
        {types.map((type) => (
          <Button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Button>
        ))}
      </Wrapper>
      <div>
        {active === "Tweets" && (
          <SectionBarTweets props={props} setRoute={setRoute}>
            tweets
          </SectionBarTweets>
        )}
        {active === "Media" && (
          <SectionBarMedia props={props} setRoute={setRoute}>
            Media
          </SectionBarMedia>
        )}
        {active === "Likes" && (
          <SectionBarLikes props={props} setRoute={setRoute}>
            Likes
          </SectionBarLikes>
        )}
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 3vh 0 0 0;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 33%;
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #626364;
  font-weight: 700;
  padding-bottom: 2vh;

  &:hover {
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    `
    font-weight: 700;
    color: ${COLORS.primary};
    border-bottom: 2px ${COLORS.primary} solid;
  `}
`;

export default SectionBar;
