import React, { useContext } from "react";
import "./products.css";
import Chart from "../../components/Chart/Chart";
import { product } from "../../components/Chart/dummyData";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import productImage from "../../assets/images/airJordan.jpg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Products = () => {
  return (
    <div className="container">
      <div className="page-title">
        <h2>Product</h2>
      </div>
      <div className="product">
        <div className="product-top">
          <div className="product-top-left">
            <ResponsiveContainer width="100%" aspect={2 / 1}>
              <LineChart
                width={500}
                height={300}
                data={product}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="product-top-right">
            <div className="product-info-top">
              <img src={productImage} alt="" className="product-info-img" />
              <span className="product-name">Air Jordan Sneakers</span>
            </div>
            <div className="product-info-bottom">
              <div className="product-info-item">
                <span className="product-info-key">ID:</span>
                <span className="product-info-value">367889</span>
              </div>
              <div className="product-info-item">
                <span className="product-info-key">Sales:</span>
                <span className="product-info-value">7819</span>
              </div>
              <div className="product-info-item">
                <span className="product-info-key">Active:</span>
                <span className="product-info-value">Yes</span>
              </div>
              <div className="product-info-item">
                <span className="product-info-key">In stock:</span>
                <span className="product-info-value">Yes</span>
              </div>
              <div className="product-info-text">
                Jordan Brand became a subsidiary of Nike in 1997, but its legacy
                dates back to 1984 when Nike unveiled the Air Jordan 1 and Wings
                logo. The brand took off when Jordan partnered with iconic
                designer Tinker Hatfield. On and off the court, Jordan sneakers
                have transcended basketball and sneaker culture.
              </div>
            </div>
          </div>
        </div>
        <div className="product-bottom">
          <div className="bottom-left-wrapper">
            <div className="product-bottom-left">
              <div className="product-bottom-left-title">Pricing:</div>
              <div className="product-info-key">Wholesale Price</div>
              <div className="product-info-value">$8</div>
              <div className="product-info-key">Dealer Price</div>
              <div className="product-info-value">$11</div>
            </div>
            <div className="product-bottom-left">
              <div className="product-info-key">Retail Price</div>
              <div className="product-info-value">$15</div>
              <div className="product-info-key">Manufacturer</div>
              <div className="product-info-value">Sierra Shoes</div>
              <div className="product-info-key">Type</div>
              <div className="product-info-value">Sports</div>
            </div>
          </div>
          <div className="product-bottom-right">
            <div className="product-img">
              <img src={productImage} alt="" className="product-upload-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
