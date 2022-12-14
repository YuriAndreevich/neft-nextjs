import React from "react";
import { Player } from "video-react";

export default function myPlayer({src})  {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src={src}
    >
    </Player>
  );
};
