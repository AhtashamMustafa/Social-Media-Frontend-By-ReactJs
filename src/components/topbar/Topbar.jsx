import React from "react";
import "./topbar.css";
import {
  Search,
  Person,
  QuestionAnswer,
  Notifications,
} from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <img src="../../public/assests/Logo.png" alt="" className="logo" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <QuestionAnswer />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="../../public/assests/Profile/2.jpg"
          alt=""
          className="topbarImg"
        />
        <span className="profileName">Ahtasham</span>
      </div>
    </div>
  );
}

export default Topbar;
