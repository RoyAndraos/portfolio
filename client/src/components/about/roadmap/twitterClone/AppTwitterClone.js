import React from "react";
import HomePage from "./Homepage";
import Notification from "./Notification";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import ProfileTwitter from "./ProfileTwitter";
import SideBar from "./SideBar";
import styled from "styled-components";
import NotFoundPage from "./NotFoundPage";
import { useState } from "react";

const AppTwitterClone = () => {
  const [route, setRoute] = useState("/");
  const [tweetId, setTweetId] = useState(null);
  const [profileId, setProfileId] = useState(null);
  return (
    <Wrapper>
      <SideBar setRoute={setRoute} setProfileId={setProfileId} />
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
      {route === "/404" && <NotFoundPage />}
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
