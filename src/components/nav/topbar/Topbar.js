import { AdminPanelContext } from "../../../Context/AdminPanelContext";
import { useContext } from "react";
import "./topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import avatar from "../../../assets/images/avatar.png";

const Topbar = () => {
  const { setNavbarOpen } = useContext(AdminPanelContext);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container menu-icon" onClick={handleToggle}>
            <MenuIcon />
          </div>

          <img src={avatar} alt="" className="top-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
