import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HomepageReactContext = ({ setProfileId, setRoute }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((result) => result.json())
      .then((parsedRes) => setUsers(parsedRes.data));
  }, []);
  if (!users) {
    return <h1>Loading...</h1>;
  }
  return (
    <Content>
      <AllTitle>All Facespace Members</AllTitle>
      {users && (
        <Profiles>
          {users.map(({ id, avatarUrl }) => {
            return (
              <StyledButton
                key={id}
                onClick={() => {
                  setRoute("/profile");
                  setProfileId(`${id}`);
                }}
              >
                <StyledAvatar src={avatarUrl} />
              </StyledButton>
            );
          })}
        </Profiles>
      )}
    </Content>
  );
};

const StyledAvatar = styled.img`
  width: 99%;
  margin: 3px;
  border-radius: 5px;
`;
const StyledButton = styled.button`
  border: 2px solid #cc5500;
  width: 130px;
  margin: 0;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    border: 4px solid #cc5500;
  }
`;
const Profiles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AllTitle = styled.h2`
  margin: 10px 0 10px 0;
`;

const Content = styled.div`
  width: 80%;
  height: 90vh;
  margin-top: 5%;
`;

export default HomepageReactContext;
