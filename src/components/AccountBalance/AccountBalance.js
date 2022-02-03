import "./accountBalance.css";
import userImg from "../../assets/images/userImg.png";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const AccountBalance = () => {
  return (
    <div className="balance-wrapper">
      <div className="balance-left">
        <div className="balance-title">Account Balance</div>
        <div className="current-balance">
          <div className="balance-cash">$54,584.23</div>
          <div className="balance-btc">1.0045983485234 BTC</div>
        </div>
        <div className="stocks">
          <div className="balance-profit">
            <ArrowUpward />
          </div>
          <div className="stocks-cash">+ $3,594.00</div>
        </div>
        <div className="stocks-month">this month</div>
        <div className="account-info">
          <div className="account-title">Account</div>
          <div className="account-email">*********mail@gmail.com</div>
        </div>
      </div>

      <div className="balance-right">
        <div className="btc-values btc-box-top">
          <div className="btc-row">
            <div className="btc-left-box">
              <div className="btc-title">BTC</div>
              <div className="btc-sub-title">Bitcoin</div>
            </div>
            <div className="btc-right-box">
              <div className="btc-title">20%</div>
              <div className="btc-sub-title balance-loss">2402%</div>
            </div>
          </div>
        </div>
        <div className="btc-values">
          <div className="btc-row">
            <div className="btc-left-box">
              <div className="btc-title">ETH</div>
              <div className="btc-sub-title">Ethereum</div>
            </div>
            <div className="btc-right-box">
              <div className="btc-title">20%</div>
              <div className="btc-sub-title balance-profit">2402%</div>
            </div>
          </div>
        </div>
        <div className="btc-values">
          <div className="btc-row">
            <div className="btc-left-box">
              <div className="btc-title">XRP</div>
              <div className="btc-sub-title">Ripple</div>
            </div>
            <div className="btc-right-box">
              <div className="btc-title">20%</div>
              <div className="btc-sub-title balance-loss">2402%</div>
            </div>
          </div>
        </div>
        <div className="btc-values">
          <div className="btc-row">
            <div className="btc-left-box">
              <div className="btc-title">ADA</div>
              <div className="btc-sub-title">Cardano</div>
            </div>
            <div className="btc-right-box">
              <div className="btc-title">20%</div>
              <div className="btc-sub-title balance-profit">2402%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
