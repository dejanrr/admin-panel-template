import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "./dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminPanelContext } from "../../Context/AdminPanelContext";
import { useContext } from "react";
import profileImg from "../../assets/images/userImg.png";
import newUserImg from "../../assets/images/newuser.png";

const UserList = () => {
  const {
    data,
    setData,
    newUsers,
    setNewUsers,
    profileName,
    setProfileName,
    userEmail,
    setUserEmail,
    userStatus,
  } = useContext(AdminPanelContext);

  const userProfile = useNavigate();
  const createUser = useNavigate();

  return (
    <div className="container bg-white">
      <div className="page-title">
        <h2>Product List</h2>
      </div>
      <div className="transaction-table">
        <div className="table-header">
          <button className="list-btn" onClick={() => createUser("/newuser")}>
            Create User
          </button>
        </div>
        <div className="row row-headers">
          <div className="cell"></div>
          <div className="cell">User</div>
          <div className="cell">Email</div>
          <div className="cell">ID</div>
          <div className="cell">Transaction</div>
        </div>
        {data.map((usersMapped, index) => {
          return (
            <div>
              <div className="row">
                <div className="cell">
                  <img src={profileImg} className="list-img" />
                </div>
                <div
                  className="cell username"
                  onClick={() => userProfile("/user")}
                >
                  {usersMapped.username}
                </div>
                <div className="cell">{usersMapped.email}</div>
                <div className="cell">{usersMapped.id}</div>
                <div className="cell">{usersMapped.transaction}</div>
              </div>
            </div>
          );
        })}

        {newUsers.map((userItem) => {
          return (
            <div>
              <div className="row">
                <div className="cell">
                  <img src={newUserImg} alt="NewUserImg" className="list-img" />
                </div>
                <div className="cell">{userItem.profileUsername}</div>
                <div className="cell">{userItem.email}</div>
                <div className="cell" style={{ textTransform: "uppercase" }}>
                  {userItem.id}
                </div>
                <div className="cell">{userItem.amount}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
