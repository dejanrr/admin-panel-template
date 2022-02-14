import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
  Sector,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  radialBarChartData,
  pieContainerData,
  paddingAngleChartData,
  radarChartData,
  data01,
  data02,
} from "../../dummyData";
import "./charts.css";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const Charts = () => {
  return (
    <div className="container charts-bottom">
      <div className="page-title">
        <h2>Charts</h2>
      </div>
      <div className="charts-row">
        <div className="charts-box">
          <ResponsiveContainer width="100%" aspect={3 / 1}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              barSize={10}
              data={radialBarChartData}
            >
              <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#fff" }}
                background
                clockWise
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="charts-box">
          <div style={{ width: "100%" }}>
            <ResponsiveContainer aspect={3 / 1}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={pieContainerData}
                  fill="#8884d8"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="charts-row">
        <div className="charts-box">
          <ResponsiveContainer width="100%" aspect={3 / 1}>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={radarChartData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="charts-box charts-box4">
          <ResponsiveContainer width="100%" aspect={3 / 1} >
            <PieChart width={400} height={400}>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;
