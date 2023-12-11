import styled from "styled-components";
import SongListItem from "./SongListItem";

const SongList = ({ songs, setSongRank, setRoute }) => {
  return (
    <Wrapper>
      {songs.map((song) => {
        return (
          <SongListItem
            song={song}
            key={song.rank}
            setSongRank={setSongRank}
            setRoute={setRoute}
          ></SongListItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;
export default SongList;
