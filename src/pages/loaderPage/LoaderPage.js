import React from "react";
import Loader from "react-js-loader";
import "./loader.css";

const LoaderPage = () => {
  return (
    <div className="container">
      <div className="page-title">
        <h2>Loaders</h2>
      </div>
      <div className="loader-wrapper">
        <div className="loader-container">
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="box-rotate-x"
                bgColor={"#333"}
                title={"box-rotate-x"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="box-rotate-z"
                bgColor={"#333"}
                title={"box-rotate-z"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="box-up"
                bgColor={"#333"}
                title={"box-up"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="bubble-spin"
                bgColor={"#333"}
                title={"bubble-spin"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="heart"
                bgColor={"#333"}
                title={"heart"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
        </div>
        <div className="loader-container">
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="spinner-cub"
                bgColor={"#333"}
                title={"spinner-cub"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="spinner-circle"
                bgColor={"#333"}
                title={"spinner-circle"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="spinner-default"
                bgColor={"#333"}
                title={"spinner-default"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="bubble-ping"
                bgColor={"#333"}
                title={"bubble-ping"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
          <div className="loader-row">
            <div className={"item"}>
              <Loader
                type="hourglass"
                bgColor={"#333"}
                title={"hourglass"}
                color={"#000"}
                size={70}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
