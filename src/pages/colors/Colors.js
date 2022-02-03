import React from "react";
import "./colors.css";

const Colors = () => {
  const Button = ({ type }) => {
    return <button className={"colors-button " + type}>{type}</button>;
  };
  return (
    <div className="container bg-white">
      <div className="page-title">
        <h2>Color Palette</h2>
      </div>
      <div className="colors-container">
        <p>
          <h3 className="colors-wrapper-title">Primary Color</h3>
        </p>
        <div className="colors-wrapper">
          <span className="color-box">
            <Button type="primary-light" />
            <p className="color-info">#212a44</p>
          </span>
          <span className="color-box">
            <Button type="primary-main" />
            <p className="color-info">#222b45</p>
          </span>
          <span className="color-box">
            <Button type="primary-dark" />
            <p className="color-info">#151a30</p>
          </span>
        </div>
      </div>
      <div className="colors-container">
        <p>
          <h3 className="colors-wrapper-title">Secondary Color</h3>
        </p>
        <div className="colors-wrapper">
          <span className="color-box">
            <Button type="secondary-light" />
            <p className="color-info">#B39DDB</p>
          </span>
          <span className="color-box">
            <Button type="secondary-main" />
            <p className="color-info">#673AB7</p>
          </span>
          <span className="color-box">
            <Button type="secondary-dark" />
            <p className="color-info">#430ea1</p>
          </span>
        </div>
      </div>
      <div className="colors-container">
        <p>
          <h3 className="colors-wrapper-title">Success Color</h3>
        </p>
        <div className="colors-wrapper">
          <span className="color-box">
            <Button type="success-light" />
            <p className="color-info">#b9f6ca</p>
          </span>
          <span className="color-box">
            <Button type="success-main" />
            <p className="color-info">#69f0ae</p>
          </span>
          <span className="color-box">
            <Button type="success-dark" />
            <p className="color-info">#00c853</p>
          </span>
        </div>
      </div>
      <div className="colors-container">
        <p>
          <h3 className="colors-wrapper-title">Error Color</h3>
        </p>
        <div className="colors-wrapper">
          <span className="color-box">
            <Button type="error-light" />
            <p className="color-info">#ef9a9a</p>
          </span>
          <span className="color-box">
            <Button type="error-main" />
            <p className="color-info">#f44336</p>
          </span>
          <span className="color-box">
            <Button type="error-dark" />
            <p className="color-info">#c62828</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Colors;
