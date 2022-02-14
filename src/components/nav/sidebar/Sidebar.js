import "./sidebar.css";
import { LineStyle, PermIdentity, Storefront } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidIcon from "@mui/icons-material/Paid";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-list-item">
                <LineStyle className="sidebar-icon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Management</h3>
          <ul className="sidebar-list">
            <Link to="/transaction" className="link">
              <li className="sidebar-list-item">
                <PaidIcon className="sidebar-icon" />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item">
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebar-list-item">
                <LocalMallIcon className="sidebar-icon" />
                Product
              </li>
            </Link>
            <Link to="/productlist" className="link">
              <li className="sidebar-list-item">
                <Storefront className="sidebar-icon" />
                Product List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Features</h3>
          <ul className="sidebar-list">
            <Link to="/calender" className="link">
              <li className="sidebar-list-item">
                <CalendarTodayIcon className="sidebar-icon" />
                Calender
              </li>
            </Link>
            <Link to="/loaderpage" className="link">
              <li className="sidebar-list-item">
                <HourglassEmptyIcon className="sidebar-icon" />
                Loader
              </li>
            </Link>
            <Link to="/colors" className="link">
              <li className="sidebar-list-item">
                <ColorLensIcon className="sidebar-icon" />
                Colors
              </li>
            </Link>
            <Link to="/map" className="link">
              <li className="sidebar-list-item">
                <AddLocationAltIcon className="sidebar-icon" />
                Map
              </li>
            </Link>
            <Link to="/charts" className="link">
              <li className="sidebar-list-item">
                <BarChartIcon className="sidebar-icon" />
                Charts
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
