import React, { useEffect, useState } from "react";
import ToolBar from "./ToolBar";
import styled from "styled-components";
import { format } from "date-fns";
import Loader from "./Loader";

const TweetDetails = ({ tweetId, setRoute, setProfileId }) => {
  const [tweetData, setTweetData] = useState();
  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((result) => setTweetData(result.tweet));
  }, [tweetId]);
  if (!tweetData) return <Loader />;

  return (
    <Wrapper>
      <TopBar>
        <div>
          <LinkToProfile
            onClick={() => {
              setRoute("/Profile");
              setProfileId(`/${tweetData.author.handle}`);
            }}
          >
            <Avatar src={tweetData.author.avatarSrc} />
          </LinkToProfile>
        </div>
        <NameWrapper>
          <LinkToProfile
            onClick={() => {
              setRoute("/Profile");
              setProfileId(`/${tweetData.author.handle}`);
            }}
          >
            <DisplayName>{tweetData.author.displayName}</DisplayName>
          </LinkToProfile>
          <LinkToProfile
            onClick={() => {
              setRoute("/Profile");
              setProfileId(`/${tweetData.author.handle}`);
            }}
          >
            @{tweetData.author.handle}
          </LinkToProfile>
        </NameWrapper>
      </TopBar>

      <div>
        <ContentStatus>{tweetData.status}</ContentStatus>
        {tweetData.media.length !== 0 && (
          <ContentImage src={tweetData.media[0].url} />
        )}
      </div>
      <DateTime>
        {format(new Date(tweetData.timestamp), "	h:mm a")} .{" "}
        {format(new Date(tweetData.timestamp), "MMMM dd yyyy")} . Critter web
        app
      </DateTime>
      <ToolBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  left: 20vw;
  width: 80vw;
  height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const NameWrapper = styled.div`
  margin-left: 20px;
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 20px;
`;

const LinkToProfile = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  z-index: 1;
  &:hover {
    text-decoration: underline;
  }
`;

const DisplayName = styled.h4`
  font-size: 25px;
  margin-right: 3px;
  margin: 0;
`;

const ContentStatus = styled.p`
  margin: 3% 0 3% 0;
  font-size: 19px;
  font-weight: 600;
  opacity: 0.9;
`;

const ContentImage = styled.img`
  height: 55vh;
  border-radius: 20px;
  margin: 0 0 1vh 0;
`;
const DateTime = styled.div`
  margin-bottom: 2vh;
  padding-bottom: 2vh;
  border-bottom: 2px rgb(239, 239, 239) solid;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #4f515a;
`;
export default TweetDetails;
