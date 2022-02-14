import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AdminPanelContext } from "../../Context/AdminPanelContext";
import supervisorImg from "../../assets/images/cletter.png";
import profileImg from "../../assets/images/userImg.png";
import "./user.css";

const User = () => {
  return (
    <div className="container">
      <div className="page-title">
        <h2>User Information</h2>
      </div>
      <div className="user">
        <div className="user-container">
          <div className="user-show">
            <div className="user-show-top">
              <img src={profileImg} alt="" className="user-show-img" />
              <div className="user-show-top-title">
                <span className="user-show-username">John Doe</span>
                <span className="user-show-user-title">Software Engineer</span>
              </div>
            </div>
            <div className="user-show-bottom">
              <span className="user-show-title">Account Details</span>
              <div className="user-show-info">
                <PermIdentity className="user-show-icon" />
                <span className="user-show-info-title">johndoe78</span>
              </div>
              <div className="user-show-info">
                <CalendarToday className="user-show-icon" />
                <span className="user-show-info-title">10.12.1978</span>
              </div>
              <span className="user-show-title">Contact Details</span>
              <div className="user-show-info">
                <PhoneAndroid className="user-show-icon" />
                <span className="user-show-info-title">+1 111 337 24</span>
              </div>
              <div className="user-show-info">
                <MailOutline className="user-show-icon" />
                <span className="user-show-info-title">johndoe78@gmail.com</span>
              </div>
              <div className="user-show-info">
                <LocationSearching className="user-show-icon" />
                <span className="user-show-info-title">City | Greenland</span>
              </div>
            </div>
          </div>
          <div className="user-details">
            <span className="user-details-title">User Details</span>

            <div className="user-about-me">
              <div className="details-title">About me</div>
              John Doe is a user experience professional who has dabbled in the
              web for over a decade. He specializes in information architecture,
              interaction design, usability and user research.
            </div>
            <div className="additional-information">
              <div className="details-title">Additional Information</div>
              <div className="additional-information-title">Supervisor</div>
              <div className="supervisors-box">
                <div className="supervisors">
                  <img
                    src={supervisorImg}
                    alt="supervisorImg"
                    className="supervisor-img"
                  />
                  <div>Jane Doe</div>
                </div>
                <div className="supervisors">
                  <img
                    src={supervisorImg}
                    alt="supervisorImg"
                    className="supervisor-img"
                  />
                  <div>John Doe</div>
                </div>
              </div>
            </div>
            <div className="appreciations-box">
              <div className="details-title">Appreciations</div>
              <div className="appreciations-wrapper">
                <ThumbUpOutlinedIcon />
                <EmojiEventsOutlinedIcon />
                <LocalBarOutlinedIcon />
                <FreeBreakfastOutlinedIcon />
                <LocalFloristOutlinedIcon />
                <CasesOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
