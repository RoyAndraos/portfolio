import styled from "styled-components";
import React from "react";
import { format } from "date-fns";
import ToolBar from "./ToolBar";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Tweet = ({ props, setRoute, setProfileId, setTweetId }) => {
  const { id, timestamp, author, media, numLikes, status, isLiked } = props;

  return (
    <Wrapper
      key={id}
      onClick={(e) => {
        e.preventDefault();
        if (Object.entries(e.target)[0][1].elementType === "div") {
          setRoute(`/Tweet`);
          setTweetId(`/${id}`);
        } else if (Object.entries(e.target)[0][1].elementType === "h4") {
          setRoute(`/Profile`);
          setProfileId(`/${author.handle}`);
        }
      }}
    >
      <Avatar src={author.avatarSrc} />
      <InfoWrapper>
        <TopTweetBar>
          <StyledTippy content={<div>{author.bio}</div>} delay={500}>
            <DisplayName>{author.displayName}</DisplayName>
          </StyledTippy>

          <ContentCreator>
            <HandleName
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              @{author.handle}
            </HandleName>
            <span> . </span>
            {format(new Date(timestamp), "MMM do")}
          </ContentCreator>
        </TopTweetBar>
        <div>
          <ContentStatus>{status}</ContentStatus>
          {media.length !== 0 && <ContentImage src={media[0].url} />}
        </div>
        <ToolBar numLikes={numLikes} isLiked={isLiked} />
      </InfoWrapper>
    </Wrapper>
  );
};

const Avatar = styled.img`
  width: 9vw;
  height: 9vw;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 2px rgb(239, 239, 239) solid;
  border-right: 2px rgb(239, 239, 239) solid;
  padding-bottom: 20px;
  white-space: initial;
  overflow: hidden;
  white-space: wrap;
  overflow-wrap: break-word;
  position: relative;
  padding-right: 10%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TopTweetBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const ContentCreator = styled.span`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  opacity: 0.6;
`;
const DisplayName = styled.h4`
  font-size: 20px;
  margin-right: 3px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ContentImage = styled.img`
  width: 40vw;
  border-radius: 20px;
  margin: 10px 0 3vh 0;
`;

const ContentStatus = styled.p`
  margin: 0 0 5% 0;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.9;
  word-wrap: break-word;
  width: 50vw;
`;

const HandleName = styled.h4`
  font-weight: 600;
  margin: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const StyledTippy = styled(Tippy)`
  background-color: #efefef;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
`;
export default Tweet;
