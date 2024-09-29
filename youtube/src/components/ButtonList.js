import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Android",
    "Mixes",
    "JukeBox",
    "Playlist",
    "Recently Uploaded",
    "Fashion",
    "Love songs",
    "Motivation",
    "Gadgets",
    "Gaming",
    "Song",
    
   
  ];
  return (
    <div className="flex flex-wrap ">
      {list.map((items) => {
        return <Button  name={items} />;
      })}
    </div>
  );
};
export default ButtonList;
