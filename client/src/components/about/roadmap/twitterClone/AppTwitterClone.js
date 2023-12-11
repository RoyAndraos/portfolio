import React from "react";
import HomePage from "./Homepage";
import Notification from "./Notification";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import ProfileTwitter from "./ProfileTwitter";
import SideBar from "./SideBar";
import styled from "styled-components";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";

const AppTwitterClone = ({
  setEnableScrollY,
  setShowProj,
  showProj,
  twitterCloneRef,
  handleShowProj,
}) => {
  const [route, setRoute] = useState("/");
  const [tweetId, setTweetId] = useState(null);
  const [profileId, setProfileId] = useState(null);
  useEffect(() => {
    setEnableScrollY(true);
  });
  return (
    <Wrapper>
      <SideBar
        setRoute={setRoute}
        setProfileId={setProfileId}
        handleShowProj={handleShowProj}
        setShowProj={setShowProj}
        showProj={showProj}
        twitterCloneRef={twitterCloneRef}
      />
      {route === "/" && (
        <HomePage
          setRoute={setRoute}
          setProfileId={setProfileId}
          setTweetId={setTweetId}
        />
      )}
      {route === "/Notifications" && <Notification />}
      {route === "/Bookmarks" && <Bookmarks />}
      {route === "/Tweet" && (
        <TweetDetails
          tweetId={tweetId}
          setRoute={setRoute}
          setProfileId={setProfileId}
        />
      )}
      {route === "/Profile" && <ProfileTwitter profileId={profileId} />}
      {route === "/404" && <NotFoundPage setRoute={setRoute} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  z-index: 999;
  background-color: white;
  width: 100%;
`;

export default AppTwitterClone;
