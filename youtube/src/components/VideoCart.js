import React from "react";

const VideoCart = ({ info }) => {
  console.log(info, "info");
  const { snippet, statistics } = info;
// console.log(info.snippet)
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bolt py-2">{title}</li>
        <li>{channelTitle}</li> 
       <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
export default VideoCart;
