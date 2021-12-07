import React from "react";

export default function Music() {
  return (
    <div className="Music">
      <iframe
        title="musicPlayer"
        src="https://open.spotify.com/embed/artist/7npJp99Ld8v36t6IVFLZW1?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}
