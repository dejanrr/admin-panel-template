import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../components/nav/topbar/Topbar";
import Sidebar from "../../components/nav/sidebar/Sidebar";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import UserList from "../UserList.js/UserList";
import { data } from "../../components/Chart/dummyData";
import "./home.css";
import Footer from "../../components/footer/Footer";
import UserActivity from "../../components/userActivity/UserActivity";
import AccountBalance from "../../components/AccountBalance/AccountBalance";

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <FeaturedInfo />
        <Chart data={data} dataKey="Active User" />
        <div className="widgets">
          <UserActivity />
          <AccountBalance />
        </div>
      </div>
    </div>
  );
};

export default Home;
