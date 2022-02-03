import React from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import './newTransactionForm.css';

const NewTransactionForm = ({
  amount,
  setAmount,
  recipient,
  setRecipient,
  setShowForm,
  orders,
  setOrders,
  source,
  setSource,
  status,
  setStatus,
  orderId,
  setOrderId,
}) => {
  const handleId = () => {
    setOrderId(Math.random().toString(36).substring(1, 12));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrders([
      ...orders,
      {
        name: recipient,
        currentStatus: status,
        bankAccount: source,
        orderAmount: amount,
        id: orderId,
      },
    ]);

    setStatus(e.target.value);
    handleId();
  };

  const open = () => setShowForm(true);
  const close = () => setShowForm(false);

  return (
    <Dialog isOpen={setShowForm} onDismiss={close}>
      <form className="new-transaction-form">
        <div>
          {" "}
          Recipient:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>

        <div>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          Source:
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        <div>
          <form>
            Status:
            <input type="radio" value="Approved" onChange={handleSubmit} />
            Approved
            <input type="radio" value="Declined" onChange={handleSubmit} />
            Declined
            <input type="radio" value="Pending" onChange={handleSubmit} />
            Pending
          </form>
        </div>
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={close}>Close</button>
    </Dialog>
  );
};

export default NewTransactionForm;
