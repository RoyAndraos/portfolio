import HomepageUrlParams from "./HomepageUrlParams";
import Top50 from "./Top50";
import SongPage from "./SongPage";
import PopularArtistPage from "./PopularArtistPage";
import ArtistPage from "./ArtistPage";
import { useEffect, useState } from "react";
import styled from "styled-components";
const AppUrlParams = ({ setEnableScrollY }) => {
  const [route, setRoute] = useState("/");
  const [songRank, setSongRank] = useState("0");
  const [artistName, setArtistName] = useState(null);
  useEffect(() => {
    setEnableScrollY(true);
  });
  return (
    <Wrapper>
      {route === "/" && (
        <HomepageUrlParams
          setRoute={setRoute}
          setArtistName={setArtistName}
          route={route}
          setSongRank={setSongRank}
        />
      )}
      {route === "/music" && (
        <Top50 setRoute={setRoute} route={route} setSongRank={setSongRank} />
      )}
      {route === "/music/song" && songRank !== 0 && (
        <SongPage songRank={songRank} setRoute={setRoute} route={route} />
      )}
      {route === "/music/artist" && (
        <ArtistPage
          artistName={artistName}
          setRoute={setRoute}
          route={route}
          setSongRank={setSongRank}
        />
      )}
      {route === "/most-popular-artist" && (
        <PopularArtistPage
          setSongRank={setSongRank}
          setRoute={setRoute}
          route={route}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 900;
`;
export default AppUrlParams;
