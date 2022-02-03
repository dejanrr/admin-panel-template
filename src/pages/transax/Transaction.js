import React, { useState } from "react";
import "./transaction.css";
import userImg from "../../assets/images/userImg.png";
import NewTransaction from "./NewTransaction/NewTransaction";
import NewTransactionForm from "./NewTransactionForm/NewTransactionForm";

const Transaction = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [list, setList] = useState(orders);

  const popUp = () => {
    setShowForm(!showForm);
  };

  const Button = ({ type }) => {
    return <button className={"transaction-button " + type}>{type}</button>;
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
            {showForm && (
              <NewTransactionForm
                recipient={recipient}
                setRecipient={setRecipient}
                amount={amount}
                setAmount={setAmount}
                setShowForm={setShowForm}
                orders={orders}
                setOrders={setOrders}
                source={source}
                setSource={setSource}
                status={status}
                setStatus={setStatus}
                orderId={orderId}
                setOrderId={setOrderId}
              />
            )}
          </div>
        </div>
        <div className="row row-headers">
          <div className="cell">Recipient</div>
          <div className="cell">Order ID</div>
          <div className="cell">Source</div>
          <div className="cell">Amount</div>
          <div className="cell">Status</div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">VUVX709ET7BY</div>
          <div className="cell source-cell">
            Bank Account<span>****5496</span>
          </div>
          <div className="cell">$568.32</div>
          <div className="cell">
            <Button type="Approved" />
          </div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">23M3UOG65G8K</div>
          <div className="cell source-cell">
            Bank Account<span>****3224</span>
          </div>
          <div className="cell">$327.88</div>
          <div className="cell">
            <Button type="Declined" />
          </div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">I133BCQWNNMK</div>
          <div className="cell source-cell">
            Bank Account<span>****1124</span>
          </div>
          <div className="cell">$122.00</div>
          <div className="cell">
            <Button type="Pending" />
          </div>
        </div>
        <div className="row">
          <div className="cell">John Doe</div>
          <div className="cell">OIPPPWG6M412</div>
          <div className="cell source-cell">
            Bank Account<span>****6777</span>
          </div>
          <div className="cell">$78.99</div>
          <div className="cell">
            <Button type="Approved" />
          </div>
        </div>

        {orders.map((order) => {
          return (
            <div>
              <NewTransaction
                name={order.name}
                currentStatus={status}
                id={order.id}
                setOrders={setOrders}
                orders={orders}
                order={order}
                list={list}
                setList={setList}
                orderAmount={amount}
                bankAccount={source}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
