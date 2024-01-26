import { useEffect, useState } from "react";
import HeaderUrlParams from "./HeaderUrlParams";
import Content from "./Content";
import SongList from "./SongList";

const Top50 = ({ setRoute, route, setSongRank }) => {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    // this is where we fetch the data from the server and add it to state.
    fetch("https://roy-portfolio-server.onrender.com/top50")
      .then((res) => res.json())
      .then((parsed) => {
        setAllSongs(parsed.data);
      });
  }, []);

  return (
    <>
      <HeaderUrlParams
        pageTitle="Top 50 Songs Streamed on Spotify"
        setRoute={setRoute}
        route={route}
      />
      <Content>
        <SongList
          songs={allSongs}
          setRoute={setRoute}
          route={route}
          setSongRank={setSongRank}
        />
      </Content>
    </>
  );
};

export default Top50;
