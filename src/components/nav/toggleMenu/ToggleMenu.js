import React from "react";
import "./toggleMenu.css";
import { AdminPanelContext } from "../../../Context/AdminPanelContext";
import { useContext } from "react";
import { LineStyle, PermIdentity, Storefront } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidIcon from "@mui/icons-material/Paid";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const ToggleMenu = () => {
  const { navbarOpen, setNavbarOpen } = useContext(AdminPanelContext);

  const handleToggleMenuClick = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      {navbarOpen === true ? (
        <div className="toggle-navbar">
          <div className="toggle-menu-wrapper">
            <div className="toggle-menu">
              <h3 className="toggle-menu-title">Dashboard</h3>
              <ul className="toggle-menu-list">
                <Link to="/" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <LineStyle className="sidebar-icon" />
                    Dashboard
                  </li>
                </Link>

                <h3 className="sidebar-title">Management</h3>

                <Link to="/transaction" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <PaidIcon className="sidebar-icon" />
                    Transactions
                  </li>
                </Link>

                <h3 className="sidebar-title">Quick Menu</h3>

                <Link to="/users" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <PermIdentity className="sidebar-icon" />
                    Users
                  </li>
                </Link>
                <Link to="/product" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <LocalMallIcon className="sidebar-icon" />
                    Product
                  </li>
                </Link>
                <Link to="/productlist" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <Storefront className="sidebar-icon" />
                    Product List
                  </li>
                </Link>

                <h3 className="sidebar-title">Features</h3>

                <Link to="/calender" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <CalendarTodayIcon className="sidebar-icon" />
                    Calender
                  </li>
                </Link>
                <Link to="/loaderpage" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <HourglassEmptyIcon className="sidebar-icon" />
                    Loader
                  </li>
                </Link>
                <Link to="/colors" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <ColorLensIcon className="sidebar-icon" />
                    Colors
                  </li>
                </Link>
                <Link to="/map" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                  >
                    <AddLocationAltIcon className="sidebar-icon" />
                    Map
                  </li>
                </Link>
                <Link to="/charts" className="link">
                  <li
                    className="sidebar-list-item"
                    onClick={handleToggleMenuClick}
                    >
                    <BarChartIcon className="sidebar-icon" />
                    Charts
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ToggleMenu;
