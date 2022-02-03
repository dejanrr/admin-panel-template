import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$43,594</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Since last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Customers</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">230k</span>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Since last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Yearly sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Since last month</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
