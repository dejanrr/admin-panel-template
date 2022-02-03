import "./newProduct.css";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminPanelContext } from "../../Context/AdminPanelContext";

const NewProduct = () => {
  const {
    productState,
    setProductState,
    productName,
    setProductName,
    productStock,
    setProductStock,
    productPrice,
    setProductPrice,
    handleProductsSubmit,
    setNewProducts,
  } = useContext(AdminPanelContext);

  return (
    <div className="container">
      <div className="page-title">
        <h2>New Product</h2>
      </div>
      <div className="new-product">
        <form className="new-product-form">
          <div className="new-product-item">
            <label>Name</label>
            <input
              value={productName}
              type="text"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              placeholder="Product Name"
            />
          </div>
          <div className="new-product-item">
            <label>Stock</label>
            <input
              value={productStock}
              type="number"
              onChange={(e) => {
                setProductStock(e.target.value);
              }}
              placeholder="Stock"
            />
          </div>
          <div className="new-product-item">
            <label>Price</label>
            <input
              value={productPrice}
              type="number"
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
              placeholder="Product Price"
            />
          </div>
          <button className="list-btn" onClick={handleProductsSubmit}>
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
