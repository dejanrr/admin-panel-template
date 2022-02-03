import React, { useState } from "react";
import Calendar from "react-full-year-calendar";
import "./calender.css";

const Calender = () => {
  return (
    <div className="container">
      <div className="page-title">
        <h2>Calendar</h2>
      </div>
      <div className="calender">
        <Calendar year={2021} />
      </div>
    </div>
  );
};

export default Calender;
