import React from "react";
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Loader from "./Loader";

const SectionBarLikes = ({ props, setRoute }) => {
  const [feedOrder, setFeedOrder] = useState(null);
  const [feedInfo, setFeedInfo] = useState(null);
  useEffect(() => {
    fetch("/api/me/home-feed")
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
    <>
      {feedOrder.map((tweetId) => {
        if (
          feedInfo[tweetId].author.handle === props.handle &&
          feedInfo[tweetId].isLiked > 0
        ) {
          return (
            <Tweet props={feedInfo[tweetId]} key={feedInfo[tweetId].id}></Tweet>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default SectionBarLikes;
