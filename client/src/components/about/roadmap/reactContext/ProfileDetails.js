import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ProfileDetails = ({ profileId, setProfileId }) => {
  const [profile, setProfile] = useState(null);
  const [profileFriends, setFriends] = useState([]);
  useEffect(() => {
    fetch(`/api/users/${profileId}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setProfile(parsedRes.data);
        if (profileFriends.length > 0) {
          return;
        } else {
          parsedRes.data.friends.forEach((friend) => {
            fetch(`/api/users/${friend}`)
              .then((res) => res.json())
              .then((parsedRes) =>
                setFriends((prevFriends) => [...prevFriends, parsedRes.data])
              );
          });
        }
      });
  }, [profileId, profileFriends]);

  if (!profile || !profileFriends) return <p>...loading...</p>;
  return (
    <Wrapper>
      <BackgroundImage src="/reactContextAssets/facespace_bg.jpg" />
      <ProfileDetailsWrapper>
        <MyThingsWrapper>
          <ProfileImg src={profile.avatarUrl} />
          <Name>{profile.name}</Name>
        </MyThingsWrapper>
        <FriendsTitle>{profile.name}'s friends</FriendsTitle>
        <FriendsWrapper>
          {profileFriends.map((friend) => {
            return (
              <FriendWrapper key={friend.id}>
                <FriendImg src={friend.avatarUrl} />
                <FriendName
                  onClick={() => {
                    setProfileId(friend.id);
                    setFriends([]);
                  }}
                >
                  {friend.name}
                </FriendName>
              </FriendWrapper>
            );
          })}
        </FriendsWrapper>
      </ProfileDetailsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
`;

const BackgroundImage = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
`;

const ProfileImg = styled.img`
  width: 25%;
  border: 5px solid #cc5500;
`;

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const FriendName = styled.h2`
  font-size: 20px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  bottom: 0;
  margin: 0;
  padding: 5px;
  width: 100%;
  transition: 0.5s ease-in-out;
  text-align: center;
  height: 12%; /* Add this line */
  overflow: hidden; /* Add this line */
  &:hover {
    height: 90%;
  }
`;
const FriendImg = styled.img`
  width: 100%;
  border: 2px solid #cc5500;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover + ${FriendName} {
    height: 90%;
  }
`;

const FriendWrapper = styled.div`
  margin: 20px;
  width: 15%;
  position: relative;
`;
const ProfileDetailsWrapper = styled.div`
  width: 60%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Name = styled.h1`
  font-size: 30px;
  margin-left: 30px;
  color: #cc5500;
`;
const MyThingsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
`;
const FriendsTitle = styled.h2`
  font-size: 20px;
  border-bottom: 1px solid #cc5500;
  width: 100%;
  color: #cc5500;
  margin-top: 50px;
`;
export default ProfileDetails;
