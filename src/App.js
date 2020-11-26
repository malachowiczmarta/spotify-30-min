import React, { useEffect, useState } from "react";
import SongListitem from "./SongListItem";
import SongPlayer from "./SongPlayer";
import "./styles.css";

export default function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";
  const [songs, setSongs] = useState([]);
  const [currentsongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentsongIndex];

  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);

  function selectSong(selectedSongUrl) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSongUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }
  //tutaj funkcje gdzie w hooku wywołuje się funkcja
  function selectNextSong() {
    setCurrentSongIndex(
      (currentsongIndex) => (currentsongIndex + 1) % songs.length
    );
  }

  function selectPrevSong() {
    setCurrentSongIndex(
      (currentsongIndex) => (currentsongIndex + songs.length - 1) % songs.length
    );
  }

  return (
    <div className="App">
      {songs.length === 0 ? (
        "Loading songs..."
      ) : (
        <>
          <SongPlayer
            song={currentSong}
            onPreviousSong={selectPrevSong}
            onNextSong={selectNextSong}
          />
          <section className="songs">
            <h2>Songs</h2>
            <ul className="song-list">
              {songs.map((song) => (
                <SongListitem
                  key={song.audioUrl}
                  song={song}
                  isCurrent={song.audioUrl === currentSong.audioUrl}
                  onSelectSong={selectSong}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
