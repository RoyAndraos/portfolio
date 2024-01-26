import React from "react";
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Loader from "./Loader";
import styled from "styled-components";

const SectionBarMedia = ({ props, setRoute }) => {
  const [feedOrder, setFeedOrder] = useState(null);
  const [feedInfo, setFeedInfo] = useState(null);

  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/api/me/home-feed")
      .then((res) => res.json())
      .then((result) => {
        setFeedOrder(result.tweetIds);
        setFeedInfo(result.tweetsById);
      })
      .catch(() => setRoute("/404"));
  }, [setRoute]);

  if (!feedInfo || !feedOrder) {
    return <Loader />;
  }
  return (
    <Wrapper>
      {feedOrder.map((tweetId) => {
        if (
          feedInfo[tweetId].author.handle === props.handle &&
          feedInfo[tweetId].media.length !== 0
        ) {
          return (
            <Tweet props={feedInfo[tweetId]} key={feedInfo[tweetId].id}></Tweet>
          );
        } else {
          return null;
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default SectionBarMedia;
