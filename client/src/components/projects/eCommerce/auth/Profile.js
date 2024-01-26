import React, { useContext, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../UserContext";

const Profile = ({ showProfile, setShowProfile }) => {
  const {
    state: { user },
    actions: { clearUser },
  } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    fetch("https://roy-portfolio-server.onrender.com/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userToken: user.userToken }),
    })
      .then((res) => res.json())
      .then((data) => {
        clearUser();
        setShowProfile(false);
        document.cookie = "userToken=; Max-age=0; path=/;";
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProfileContainer $right={showProfile.toString()}>
      {user && (
        <Container>
          <Header>
            <h1>Your Profile</h1>
            <button
              style={{ all: "unset" }}
              onClick={() => setShowProfile(false)}
            >
              <CloseIcon sx={{ cursor: "pointer" }} />
            </button>
          </Header>

          <Body>
            <Info>
              <p>Email: </p>
              <InfoData>{user.email}</InfoData>
            </Info>
            <Info>
              <p>Created at: </p>
              <InfoData>
                {new Date(parseInt(user.createdAt)).toUTCString()}
              </InfoData>
            </Info>
          </Body>
        </Container>
      )}
      <End>
        <Logout disabled={isLoading} onClick={handleLogout}>
          Logout
        </Logout>
      </End>
    </ProfileContainer>
  );
};

const Container = styled.div`
  margin: 2em;
`;

const End = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
const Body = styled.div``;

const Logout = styled.button`
  background: #57aeb6;
  width: 100%;
  color: #fff;
  border: none;
  font-size: 1.5em;
  padding: 0.5em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 3px solid #57aeb6;

  &:hover {
    letter-spacing: 2px;
    background: #fff;
    color: #57aeb6;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #000;
  & h1 {
    font-size: 1.5em;
  }
`;
const ProfileContainer = styled.div`
  position: fixed;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 25em;
  top: 0px;
  background: #fff;
  right: ${(props) => (props.$right === "true" ? "0" : "-100%")};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;
const InfoData = styled.p`
  font-weight: bold;
`;
export default Profile;
