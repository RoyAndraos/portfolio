import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderUrlParams from "./HeaderUrlParams";
import Content from "./Content";

const HomepageUrlParams = ({ setRoute, setArtistName, route }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(`/top50/artist`)
      .then((res) => res.json())
      .then((json) => {
        setArtists(json.data);
      });
  }, []);
  if (!artists) return <p>...loading</p>;

  return (
    <>
      <HeaderUrlParams
        pageTitle="Music Homepage"
        setRoute={setRoute}
        route={route}
      />
      <Content>
        <h2 style={{ marginTop: "24px", color: "#9a0000" }}>Popular Links</h2>
        <Menu>
          <StyledListItem
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "0",
              backgroundColor: "whitesmoke",
              borderRight: "1px solid #808080",
              flex: "1 0 45%",
              padding: "8px 0",
              cursor: "pointer",
            }}
          >
            <StyledButton
              onClick={() => {
                setRoute("/music");
              }}
              style={{ color: "#9a0000" }}
            >
              Check Out All Songs
            </StyledButton>
          </StyledListItem>
          <StyledListItem
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "0",
              backgroundColor: "whitesmoke",
              flex: "1 0 45%",
              padding: "8px 0",
              cursor: "pointer",
            }}
          >
            <StyledButton
              onClick={() => {
                setRoute("/most-popular-artist");
              }}
              style={{ color: "#9a0000" }}
            >
              Songs by most popular artist
            </StyledButton>
          </StyledListItem>
        </Menu>
        <h2>Artists on this list</h2>
        <Menu>
          {artists.map((artist, index) => (
            <StyledListItem key={index}>
              <StyledButton
                onClick={() => {
                  setRoute("/music/artist");
                  setArtistName(artist);
                }}
              >
                {artist}
              </StyledButton>
            </StyledListItem>
          ))}
        </Menu>
      </Content>
    </>
  );
};

const Menu = styled.ul`
  border: 1px solid #808080;
  margin: 24px 0;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 1 0 50%;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: whitesmoke;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #9a0000;
  }
`;
const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
`;
export default HomepageUrlParams;
