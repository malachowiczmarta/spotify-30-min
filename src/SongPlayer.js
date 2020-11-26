import React, { useRef } from "react";

export default function SongPlayer({ song, onPreviousSong, onNextSong }) {
  const audioRef = useRef();
  function play() {
    audioRef.current.play();
  }
  function pause() {
    audioRef.current.pause();
  }
  return (
    <section>
      <h1>Music player</h1>
      <img width="250" height="250" src={song.coverUrl} alt="cover song" />
      <div>
        <button onClick={onPreviousSong}>previous</button>
        <button onClick={play}>play</button>
        <button onClick={pause}>pause</button>
        <button onClick={onNextSong}>next</button>
      </div>

      <audio ref={audioRef} key={song.audioUrl}>
        <source src={song.audioUrl} />
      </audio>
    </section>
  );
}
