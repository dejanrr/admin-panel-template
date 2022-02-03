import React, { useContext } from "react";
import { product, productRows } from "../../components/Chart/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productImage from "../../assets/images/airJordan.jpg";
import newProductImg from "../../assets/images/newimg.png";
import { AdminPanelContext } from "../../Context/AdminPanelContext";
import "./productList.css";

const ProductList = () => {
  const {
    productState,
    setProductState,
    productName,
    setProductName,
    productStock,
    setProductStock,
    productPrice,
    setProductPrice,
    newProducts,
    setNewProducts,
    data,
    setData,
    products,
    setProducts,
    newProductId,
    setNewProductId,
  } = useContext(AdminPanelContext);

  const productNavigate = useNavigate();
  const createUser = useNavigate();

  return (
    <div className="container bg-white">
      <div className="page-title">
        <h2>Product List</h2>
      </div>
      <div className="transaction-table">
        <div className="table-header">
          <div className="list-btn-container">
            <button
              className="list-btn"
              onClick={() => createUser("/newproduct")}
            >
              Create Product
            </button>
          </div>
        </div>
        <div className="row row-headers">
          <div className="cell"></div>
          <div className="cell">Product</div>
          <div className="cell">Stock</div>
          <div className="cell">ID</div>
          <div className="cell">Price</div>
        </div>
        {products.map((productsMapped, id) => {
          return (
            <div>
              <div className="row">
                <div className="cell">
                  <img
                    src={productImage}
                    alt="productImg"
                    className="list-img"
                  />
                </div>
                <div
                  key={id}
                  className="cell productName"
                  onClick={() => productNavigate("/product")}
                >
                  {productsMapped.name}
                </div>

                <div className="cell">{productsMapped.stock}</div>
                <div className="cell">{productsMapped.id}</div>
                <div className="cell">{productsMapped.price}</div>
              </div>
            </div>
          );
        })}

        {newProducts.map((productItem) => {
          return (
            <div>
              <div className="row">
                <div className="cell">
                  <img
                    src={newProductImg}
                    alt="newProductImg"
                    className="list-img"
                  />
                </div>
                <div className="cell">{productItem.username}</div>
                <div className="cell">{productItem.stock}</div>
                <div className="cell" style={{ textTransform: "uppercase" }}>
                  {productItem.id}
                </div>
                <div className="cell">${productItem.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
