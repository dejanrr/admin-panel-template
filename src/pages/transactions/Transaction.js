import React, { useContext } from "react";
import "./transaction.css";
import NewTransactionForm from "./NewTransactionForm/NewTransactionForm";
import { AdminPanelContext } from "../../Context/AdminPanelContext";

const Transaction = () => {
  const {
    recipient,
    setRecipient,
    amount,
    setAmount,
    source,
    setSource,
    status,
    setStatus,
    orderId,
    setOrderId,
    orders,
    setOrders,
    showForm,
    setShowForm,
    list,
    setList,
  } = useContext(AdminPanelContext);

  const popUp = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container bg-white">
      <div className="page-title">
        <h2>Recent Orders</h2>
      </div>
      <div className="transaction-table">
        <div className="table-header">
          <div className="create-transaction">
            <button className="list-btn" onClick={popUp}>
              Create Transaction
            </button>
            {showForm && <NewTransactionForm />}
          </div>
        </div>
        <div className="row row-headers">
          <div className="cell">Recipient</div>
          <div className="cell">Order ID</div>
          <div className="cell">Source</div>
          <div className="cell">Amount</div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">VUVX709ET7BY</div>
          <div className="cell source-cell">
            Bank Account<span>****5496</span>
          </div>
          <div className="cell">$568.32</div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">23M3UOG65G8K</div>
          <div className="cell source-cell">
            Bank Account<span>****3224</span>
          </div>
          <div className="cell">$327.88</div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">I133BCQWNNMK</div>
          <div className="cell source-cell">
            Bank Account<span>****1124</span>
          </div>
          <div className="cell">$122.00</div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">OIPPPWG6M412</div>
          <div className="cell source-cell">
            Bank Account<span>****6777</span>
          </div>
          <div className="cell">$78.99</div>
        </div>

        {orders.map((order) => {
          return (
            <div>
              <div className="row">
                <div className="cell">{order.name}</div>
                <div className="cell" style={{ textTransform: "uppercase" }}>
                  {order.id}
                </div>
                <div className="cell">$ {amount}</div>
                <div className="cell source-cell">
                  Bank Account<span>{source}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
