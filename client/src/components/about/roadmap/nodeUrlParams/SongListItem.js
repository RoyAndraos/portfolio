import styled from "styled-components";

const SongListItem = ({ song, setSongRank, setRoute }) => {
  return (
    <Wrapper key={song.rank}>
      <Ranking>
        <Rank>#{song.rank}</Rank>
        <Streams>({song.streams} streams)</Streams>
      </Ranking>
      <Song
        onClick={() => {
          setRoute("/music/song");
          setSongRank(`/${song.rank}`);
          console.log(song.rank);
        }}
      >
        <SongName>{song.title}</SongName>
        <SongWriter>by {song.artist}</SongWriter>
      </Song>
      <Date>
        <span>publication date: {song.publicationDate}</span>
      </Date>
    </Wrapper>
  );
};

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  align-items: flex-end;
`;

export const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-bottom: 1vh;
  color: whitesmoke;
`;

export const Song = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  color: whitesmoke;
  margin-bottom: 3.5vh;
`;

export const Date = styled.div`
  width: 25vw;
  margin-bottom: 1vh;
  color: whitesmoke;
`;

export const Rank = styled.span`
  font-size: 60px;
  color: whitesmoke;
`;

export const Streams = styled.span`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  color: whitesmoke;
`;

export const SongName = styled.span`
  font-size: 35px;
  color: #9a0000;
`;

export const SongWriter = styled.span`
  font-size: 20px;

  font-style: italic;
  color: whitesmoke;
`;

export default SongListItem;
