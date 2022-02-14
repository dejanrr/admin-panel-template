import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import "./home.css";
import UserActivity from "../../components/userActivity/UserActivity";
import AccountBalance from "../../components/AccountBalance/AccountBalance";

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <FeaturedInfo />
        <Chart dataKey="Active User" />
        <div className="widgets">
          <UserActivity />
          <AccountBalance />
        </div>
      </div>
    </div>
  );
};

export default Home;
