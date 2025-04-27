import React, { useEffect, useState } from "react";
import { YOU_TUBE_API_URL } from "./utils/constant";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  console.log("videos", videos);
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
        <Link to={"/watch?v=" + video.id}>
          {" "}
          <VideoCart key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
