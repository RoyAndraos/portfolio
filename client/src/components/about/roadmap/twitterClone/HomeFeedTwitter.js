import React, { useState } from "react";
import { useEffect } from "react";
import Tweet from "./Tweet";
import Loader from "./Loader";
import styled from "styled-components";

const HomeFeedTwitter = ({ props }) => {
  const [feedOrder, setFeedOrder] = useState(null);
  const [feedInfo, setFeedInfo] = useState(null);
  const { reload, setReload, setRoute, setProfileId, setTweetId } = props;

  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/api/me/home-feed")
      .then((res) => res.json())
      .then((result) => {
        setFeedOrder(result.tweetIds);
        setFeedInfo(result.tweetsById);
        setReload(false);
      })
      .catch(() => {
        setRoute("/404");
      });
  }, [reload, setReload, setRoute]);

  if (!feedOrder || !feedInfo) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {feedOrder.map((tweetId) => {
        return (
          <Tweet
            props={feedInfo[tweetId]}
            setProfileId={setProfileId}
            setTweetId={setTweetId}
            key={feedInfo[tweetId].id}
            setRoute={setRoute}
          ></Tweet>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
export default HomeFeedTwitter;
