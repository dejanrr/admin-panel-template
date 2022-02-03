import React from "react";

const NewTransaction = ({
  name,
  currentStatus,
  id,
  list,
  setList,
  orders,
  setOrders,
  orderAmount,
  bankAccount,
}) => {
  const Button = ({ type }) => {
    return <button className={"transaction-button " + type}>{type}</button>;
  };

  const remove = (id) => {
    orders.filter((item) => item.id !== id);
  };

  return (
    <div className="row">
      <div className="cell">{name}</div>
      <div className="cell" style={{ textTransform: "uppercase" }}>
        {id}
      </div>
      <div className="cell">$ {orderAmount}</div>
      <div className="cell source-cell">
        Bank Account<span>{bankAccount}</span>
      </div>
      <div className="cell"></div>
    </div>
  );
};

export default NewTransaction;
