import React from "react";
import Hembergermenu from "./images/Hembergermenu.png";
import logo from "./images/logo.png";
import userIcon from "./images/userIcon.jpeg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="menu"
          src={Hembergermenu}
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
        />
        <a href="/">
          <img alt="logo" src={logo} className="h-12 mx-2" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-200 p-2 rounded-l-full"
        />
        <button className=" border border-gray-400 bg-gray-100 px-5 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img alt="user" src={userIcon} className="h-10 col-span-1" />
      </div>
    </div>
  );
};
export default Head;
