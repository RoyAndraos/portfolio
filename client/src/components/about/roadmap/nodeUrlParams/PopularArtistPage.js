import { useEffect, useState } from "react";
import HeaderUrlParams from "./HeaderUrlParams";
import Content from "./Content";
import SongList from "./SongList";
const PopularArtistPage = ({ route, setRoute, setSongRank }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/top50/popular-artist")
      .then((res) => res.json())
      .then((parsed) => {
        setSongs(parsed.data);
      });
  }, []);

  return (
    <>
      <HeaderUrlParams
        pageTitle="Most Popular Artist"
        route={route}
        setRoute={setRoute}
      />
      <Content>
        <SongList songs={songs} setSongRank={setSongRank} setRoute={setRoute} />
      </Content>
    </>
  );
};

export default PopularArtistPage;
