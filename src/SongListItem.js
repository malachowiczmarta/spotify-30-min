import React from "react";

export default function SongListitem({ isCurrent, song, onSelectSong }) {
  return (
    <section>
      <li
        className={`song-list-item  ${isCurrent ? " selected" : ""}`}
        onClick={() => onSelectSong(song.audioUrl)}
      >
        {song.title} by {song.artist}
      </li>
    </section>
  );
}
