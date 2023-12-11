const { top50 } = require("./top50");

// .get("/top50")
const getTop50 = (req, res) => {
  res.status(200).json({
    status: 200,
    data: top50,
  });
};

//   .get("/top50/song/:songRank")

const getSongByRank = (req, res) => {
  if (req.params.songRank > 49 || req.params.songRank < 1) {
    res.status(404).json({
      status: 404,
      message: "Song not found.",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: top50[req.params.songRank - 1],
    });
  }
};

//   .get("/top50/artist/:artistName")
const getArtistSongsByName = (req, res) => {
  let SongsToBeSent = [];

  top50.map((element) => {
    if (
      element["artist"]
        .toLowerCase()
        .includes(req.params.artistName.toLowerCase())
    ) {
      SongsToBeSent.push(element);
    }
    return SongsToBeSent;
  });

  if (SongsToBeSent.length === 0) {
    return res.status(404).json({
      status: 404,
      message: "artist not found.",
    });
  }
  return res.status(200).json({
    status: 200,
    data: SongsToBeSent,
  });
};
//   .get("/top50/popular-artist")

const getPopularArtist = (req, res) => {
  let SongsToBeSent = [];
  const arrayOfArtists = top50.map((element) => {
    return element.artist;
  });

  let mostPopular;
  let highestCount = 0;

  for (let i = 0; i < arrayOfArtists.length; i++) {
    let count = 0;

    for (let j = 0; j < arrayOfArtists.length; j++) {
      if (arrayOfArtists[i] === arrayOfArtists[j]) {
        count++;
      }
      if (count > highestCount) {
        highestCount = count;
        mostPopular = arrayOfArtists[i];
      }
    }
  }

  top50.map((element) => {
    if (element["artist"] === mostPopular) SongsToBeSent.push(element);
  });

  res.status(200).json({
    status: 200,
    data: SongsToBeSent,
  });
};
//   .get("/top50/artist")

const getArtists = (req, res) => {
  const artists = new Set();
  top50.map((element) => {
    artists.add(element["artist"]);
  });

  return res.status(200).json({
    status: 200,
    data: [...artists],
  });
};
module.exports = {
  getTop50,
  getSongByRank,
  getArtistSongsByName,
  getPopularArtist,
  getArtists,
};

// .get("/top50")
// .get("/top50/song/:songRank")
// .get("/top50/artist/:artistName")
// .get("/top50/popular-artist")
// .get("/top50/artist")
