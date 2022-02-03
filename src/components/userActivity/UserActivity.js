import './userActivity.css';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const UserActivity = () => {
  return (
    <div className="user-activity">
      <span className="user-activity-title">User Activity</span>
      <ul className="user-activity-list">
        <li className="user-activity-item">
          <span>1 jan</span>

          <div className="active-user">
            <span className="active-user-title">Pages Visit</span>
            <span className="visits">921</span>
          </div>

          <div className="active-user">
            <span className="active-user-title">New, %</span>
            <span className="visits">30%</span>
          </div>
        </li>
        <li className="user-activity-item">
          <span>2 jan</span>
          <div className="active-user">
            <span className="active-user-title">Pages Visit</span>
            <span className="visits">321</span>
          </div>
          <div className="active-user">
            <span className="active-user-title">New, %</span>
            <span className="visits">321</span>
          </div>
        </li>
        <li className="user-activity-item">
          <span>3 jan</span>
          <div className="active-user">
            <span className="active-user-title">Pages Visit</span>
            <span className="visits">27</span>
          </div>
          <div className="active-user">
            <span className="active-user-title">New, %</span>
            <span className="visits">321</span>
          </div>
        </li>
        <li className="user-activity-item">
          <span>4 jan</span>
          <div className="active-user">
            <span className="active-user-title">Pages Visit</span>
            <span className="visits">369</span>
          </div>
          <div className="active-user">
            <span className="active-user-title">New, %</span>
            <span className="visits">321</span>
          </div>
        </li>
        <li className="user-activity-item">
          <span>5 jan</span>
          <div className="active-user">
            <span className="active-user-title">Pages Visit</span>
            <span className="visits">78</span>
          </div>
          <div className="active-user">
            <span className="active-user-title">New, %</span>
            <span className="visits">321</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default UserActivity;