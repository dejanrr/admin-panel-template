import React, { useContext } from "react";
import { AdminPanelContext } from "../../../Context/AdminPanelContext";
import "./newUser.css";

const NewUser = () => {
  const {
    profileName,
    setProfileName,
    userEmail,
    setUserEmail,
    userStatus,
    handleUserSubmit,
    userTransaction,
    setUserTransaction,
  } = useContext(AdminPanelContext);

  return (
    <div className="container">
      <div className="page-title">
        <h2>New User</h2>
      </div>
      <div className="new-user">
        <form className="new-user-form">
          <div className="new-user-item">
            <label>Name</label>
            <input
              type="text"
              value={profileName}
              placeholder="Username"
              onChange={(e) => {
                setProfileName(e.target.value);
              }}
            />
          </div>
          <div className="new-user-item">
            <label>Email</label>
            <input
              type="text"
              value={userEmail}
              placeholder="Email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <div className="new-user-item">
            <label>Transaction</label>
            <input
              type="number"
              value={userTransaction}
              placeholder="Amount"
              onChange={(e) => {
                setUserTransaction(e.target.value);
              }}
            />
          </div>

          <button className="list-btn" onClick={handleUserSubmit}>
            Create New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
