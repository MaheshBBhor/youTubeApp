import React, { useEffect, useState } from "react";
import { YOU_TUBE_API_URL } from "./utils/constant";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOU_TUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCart key={video.id} info={video} />
      ))}
    </div>
  );
};
export default VideoContainer;
