import React, { useContext } from "react";
import { UserContextTwitter } from "./UserContextTwitter";
import styled from "styled-components";
import { useState } from "react";
import Loader from "./Loader";

const HomeHeader = ({ props }) => {
  const { setReload, setRoute } = props;
  const { currentUser, status } = useContext(UserContextTwitter);
  const [charactersLeft, setCharactersLeft] = useState(280);
  const [tweetContent, setTweetContent] = useState("");

  const handleSubmit = (e) => {
    if (charactersLeft > 0) {
      e.preventDefault();
      fetch("https://roy-portfolio-server.onrender.com/api/tweet", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: tweetContent }),
      }).catch(() => {
        setRoute("/404");
      });
      setReload(true);
    } else {
      window.alert("too many characters!");
    }
  };
  if (status !== "idle" || !currentUser) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <HomeTitle>Home</HomeTitle>
        <TweetInfo>
          <Avatar src={currentUser.avatarSrc} />
          <TweetInfo>
            <TweetField
              onChange={(e) => {
                setCharactersLeft(280 - e.target.value.length);
                setTweetContent(e.target.value);
              }}
              placeholder="What's happening?"
            />
          </TweetInfo>
        </TweetInfo>
        <MeowWrapper>
          <CharCount char={charactersLeft}>{charactersLeft}</CharCount>
          <Meow type="submit" onClick={handleSubmit}>
            Meow
          </Meow>
        </MeowWrapper>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  border-bottom: 15px rgb(239, 239, 239) solid;
  position: relative;
  border-right: 2px rgb(239, 239, 239) solid;
`;

const HomeTitle = styled.h1`
  padding: 0 0 25px 25px;
  border-bottom: 2px rgb(239, 239, 239) solid;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
`;

const TweetInfo = styled.div`
  display: flex;
  position: relative;
`;

const TweetField = styled.textarea`
  background-color: transparent;
  width: 60vw;
  font-size: 20px;
  border: none;
  height: 15vh;
  word-break: break-all;
  font-family: inherit;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 20px;
  }
  &:focus::placeholder {
    opacity: 0.6;
  }
`;
const Meow = styled.button`
  margin-left: 10px;
  background-color: #5c2af9;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const MeowWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const CharCount = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => {
    if (props.char < 56 && props.char > 0) {
      return "#f2e443";
    } else if (props.char <= 0) {
      return "#e20000";
    } else if (props.char >= 56) {
      return "#7b7b7b";
    }
  }};
`;
export default HomeHeader;
