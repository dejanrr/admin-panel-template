import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import MenuIcon from "@mui/icons-material/Menu";
import avatar from "../../../assets/images/avatar.png";

export default function Topbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer menuIcon" onClick={handleToggle}>
            <MenuIcon />
          </div>

          <div className="toggle-menu">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
