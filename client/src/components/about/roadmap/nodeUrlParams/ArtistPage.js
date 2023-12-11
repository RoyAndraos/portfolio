import { useEffect, useState } from "react";
import HeaderUrlParams from "./HeaderUrlParams";
import Content from "./Content";
import SongList from "./SongList";

const ArtistPage = ({ artistName, setRoute, route, setSongRank }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`/top50/artist/${artistName}`)
      .then((res) => res.json())
      .then((parsed) => {
        setSongs(parsed.data);
      });
  }, [artistName]);

  console.log("ArtistPage.js: songs: ", songs);
  if (songs.length === 0) return <p>...</p>;
  return (
    <>
      <HeaderUrlParams
        pageTitle={`Songs by ${artistName}`}
        setRoute={setRoute}
        route={route}
      />
      <Content>
        <SongList songs={songs} setRoute={setRoute} setSongRank={setSongRank} />
      </Content>
    </>
  );
};

export default ArtistPage;
