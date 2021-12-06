import React from "react";

export default function Video() {
  return (
    <div className="YoutubeVideoPlayer">
      <iframe
        id="player"
        title="VideoPlayer"
        type="text/html"
        width="640"
        height="390"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        frameborder="0"
      ></iframe>
    </div>
  );
}
