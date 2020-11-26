import React from "react";

export default function SongListitem({ isCurrent, song, onSelectSong }) {
  return (
    <section>
      <li
        onClick={() => onSelectSong(song.audioUrl)}
        style={{ background: isCurrent ? "darkslategrey" : "" }}
      >
        {song.title} by {song.artist}
      </li>
    </section>
  );
}
