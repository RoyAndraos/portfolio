import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderUrlParams from "./HeaderUrlParams";

const SongPage = ({ songRank, setRoute, route }) => {
  const [song, setSong] = useState({});

  useEffect(() => {
    fetch(`/top50/song/${songRank}`)
      .then((res) => res.json())
      .then((json) => {
        setSong(json.data);
      });
  }, [songRank]);
  console.log(song);
  return (
    <>
      <HeaderUrlParams
        pageTitle={`Song #${song.rank}`}
        setRoute={setRoute}
        route={route}
      />
      <SongContainer>
        <Title>{song.title}</Title>
        <Artist>By {song.artist}</Artist>
        <StreamCount>Streamed {song.streams} times</StreamCount>
      </SongContainer>
    </>
  );
};

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 400px;
  margin: 48px auto;
  padding: 24px;
  width: 400px;
  background-color: whitesmoke;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  border-bottom: 1px solid #ccc;
  font-size: 24px;
  padding-bottom: 16px;
  text-align: center;
  color: #9a0000;
`;
const Artist = styled.p`
  text-align: center;
  color: #9a0000;
`;
const StreamCount = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #9a0000;
`;

export default SongPage;
