import React, { useContext } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./newTransactionForm.css";
import { AdminPanelContext } from "../../../Context/AdminPanelContext";

const NewTransactionForm = () => {
  const {
    amount,
    setAmount,
    recipient,
    setRecipient,
    setShowForm,
    source,
    setSource,
    handleTransactionsSubmit,
  } = useContext(AdminPanelContext);

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
            required
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
      </form>
      <button onClick={handleTransactionsSubmit}>Submit</button>
      <button onClick={close}>Close</button>
    </Dialog>
  );
};

export default NewTransactionForm;
