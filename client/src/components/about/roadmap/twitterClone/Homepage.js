import React, { useState } from "react";
import HomeFeedTwitter from "./HomeFeedTwitter";
import HomeHeader from "./HomeHeader";
import styled from "styled-components";

const HomePage = ({ setRoute, setProfileId, setTweetId }) => {
  const [reload, setReload] = useState(false);
  return (
    <Wrapper>
      <HomeHeader props={{ reload, setReload, setRoute }} />
      <HomeFeedTwitter
        props={{ reload, setReload, setRoute, setProfileId, setTweetId }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  position: relative;
  left: 20vw;
  border-left: 2px rgb(239, 239, 239) solid;
`;
export default HomePage;
