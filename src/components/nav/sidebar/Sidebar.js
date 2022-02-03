import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Management</h3>
          <ul className="sidebarList">
            <Link to="/transaction" className="link">
              <li className="sidebarListItem">
                <PaidIcon className="sidebarIcon" />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">
                <LocalMallIcon className="sidebarIcon" />
                Product
              </li>
            </Link>
            <Link to="/productlist" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Product List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Features</h3>
          <ul className="sidebarList">
            <Link to="/calender" className="link">
              <li className="sidebarListItem">
                <CalendarTodayIcon className="sidebarIcon" />
                Calender
              </li>
            </Link>
            <Link to="/loaderpage" className="link">
              <li className="sidebarListItem">
                <HourglassEmptyIcon className="sidebarIcon" />
                Loader
              </li>
            </Link>
            <Link to="/colors" className="link">
              <li className="sidebarListItem">
                <ColorLensIcon className="sidebarIcon" />
                Colors
              </li>
            </Link>
            <Link to="/map" className="link">
              <li className="sidebarListItem">
                <AddLocationAltIcon className="sidebarIcon" />
                Map
              </li>
            </Link>
            <Link to="/charts" className="link">
              <li className="sidebarListItem">
                <BarChartIcon className="sidebarIcon" />
                Charts
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
