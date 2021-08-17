import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebarRecentItem">
      <span className="sidebarHash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <img src="https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg" />
        <Avatar className="sidebarAvatar" src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebarStats">
        <div className="sidebarStat">
          <p>Who viewed you</p>
          <p className="sidebarStatNumber">2,524</p>
        </div>
        <div className="sidebarStat">
          <p>Views on post</p>
          <p className="sidebarStatNumber">3,548</p>
        </div>
      </div>
      <div className="sidebarButton">
        <p>Recent</p>

        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("develper")}
      </div>
    </div>
  );
}

export default Sidebar;
