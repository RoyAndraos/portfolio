import HomepageReactContext from "./HomepageReactContext";
import ProfileDetails from "./ProfileDetails";
import HeaderReactContext from "./HeaderReactContext";
import { useState } from "react";
import SigninReactContext from "./SigninReactContext";
import styled from "styled-components";
const AppReactContext = () => {
  const [route, setRoute] = useState("/");
  const [profileId, setProfileId] = useState(null);
  return (
    <Wrapper>
      <HeaderReactContext setRoute={setRoute} />

      {route === "/" && (
        <HomepageReactContext setRoute={setRoute} setProfileId={setProfileId} />
      )}
      {route === "/signin" && <SigninReactContext setRoute={setRoute} />}
      {route === "/profile" && (
        <ProfileDetails profileId={profileId} setProfileId={setProfileId} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: #f5f5f5;
`;

export default AppReactContext;
