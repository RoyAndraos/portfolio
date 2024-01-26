import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import SectionBar from "./SectionBar";
import Loader from "./Loader";
const ProfileTwitter = ({ setRoute, profileId }) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch(`https://roy-portfolio-server.onrender.com/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data.profile))
      .catch(() => {
        setRoute("/404");
      });
  }, [profileId, setRoute]);

  if (!profile) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <BannerImage>
        <Banner src={profile.bannerSrc} />
        <Avatar src={profile.avatarSrc} />{" "}
      </BannerImage>

      <ProfileTextInfo>
        <NameButton>
          <Name>{profile.displayName}</Name>
          {profile.handle !== "treasurymog" && (
            <Followed>
              {profile.isBeingFollowedByYou ? "Following" : "Follow"}
            </Followed>
          )}
        </NameButton>
        <Handle>@{profile.handle} </Handle>
        {profile.isFollowingYou && (
          <FollowingYou>
            <span>Follows You</span>
          </FollowingYou>
        )}
        <br />
        <Bio>{profile.bio}</Bio>
        <Location>
          {profile.location && <FiMapPin style={{ marginRight: "5px" }} />}
          {profile.location}
        </Location>
        <JoinDate>
          <FiCalendar style={{ marginRight: "5px" }} />
          joined {format(new Date(profile.joined), "MMMM yyyy")}
        </JoinDate>
        <br />
        <JoinDate>
          <NumFollows>{profile.numFollowing}</NumFollows> Following{" "}
        </JoinDate>
        <JoinDate>
          <NumFollows>{profile.numFollowers}</NumFollows> Followers
        </JoinDate>
      </ProfileTextInfo>
      <SectionBar props={profile} setRoute={setRoute} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  border-right: 2px solid rgb(239, 239, 239);
  left: 20vw;
  position: relative;
`;

const BannerImage = styled.div`
  position: relative;
`;
const Banner = styled.img`
  width: 100%;
`;
const Avatar = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 50%;
  border: white solid 3px;
  position: absolute;
  left: 20px;
  top: 60%;
`;

const NameButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Followed = styled.button`
  height: fit-content;
  margin-right: 20px;
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
const ProfileTextInfo = styled.div`
  margin: 100px 0 20px 30px;
`;

const Name = styled.h1`
  margin-bottom: 0;
`;

const FollowingYou = styled.span`
  background-color: #e8e9f0;
  border-radius: 5px;
  padding: 0 5px 1px 5px;
  font-size: 12px;
  color: #626364;
`;

const Bio = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 10px 0 10px 0;
`;

const Handle = styled.span`
  color: #626364;
  font-weight: 600;
`;

const Location = styled.span`
  margin-right: 10px;
  color: #626364;
`;

const NumFollows = styled.span`
  color: black;
  font-weight: 700;
`;
const JoinDate = styled.span`
  color: #626364;
`;

export default ProfileTwitter;
