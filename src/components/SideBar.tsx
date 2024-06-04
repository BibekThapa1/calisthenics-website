import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoAccessibilityOutline } from "react-icons/io5";
import { FaBattleNet,FaBlind } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";



const sideBar = () => {
  return (
    <div id="sidebar" className="hide">
      <div className="options">
        <ul>
          <li>
            <IoAccessibilityOutline />
            Skills
          </li>
          <li><FaBattleNet />
Benefits</li>
          <li><FaBlind />Begineers Guide</li>
          <li><MdOutlineConnectWithoutContact />Hire a personal trainer</li>
        </ul>
      </div>
      <div className="btn">
        <button className="login-btn rounded-md ">
          Login
        </button>
      </div>
    </div>
  );
};

export default sideBar;
