import { useState, useEffect, createContext } from "react";
import { productRows } from "../../src/components/Chart/dummyData";
import { userRows } from "../../src/components/Chart/dummyData";

export const AdminPanelContext = createContext();

export const AdminPanelState = ({ children }) => {
  const [productState, setProductState] = useState();
  const [data, setData] = useState(userRows);
  const [updateName, setUpdateName] = useState(userRows);
  const [name, setName] = useState("");
  const [products, setProducts] = useState(productRows);

  const [productName, setProductName] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [newProducts, setNewProducts] = useState([]);
  const [newProductsStatus, setNewProductsStatus] = useState();
  const [newProductId, setNewProductId] = useState("");

  //users//

  const [profileName, setProfileName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTransaction, setUserTransaction] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [newUsers, setNewUsers] = useState([]);
  const [newUserId, setNewUserId] = useState("");

  const handleNewProductId = () => {
    setNewProductId(Math.random().toString(36).substring(1, 6));
  };

  const handleProductsSubmit = (e) => {
    e.preventDefault();

    setNewProducts([
      ...newProducts,
      {
        username: productName,
        stock: productStock,
        price: productPrice,
        id: newProductId,
      },
    ]);

    handleNewProductId();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleNewUserId = () => {
    setNewUserId(Math.random().toString(36).substring(2, 12));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    setNewUsers([
      ...newUsers,
      {
        profileUsername: profileName,
        email: userEmail,
        amount: userTransaction,
        profileStatus: userStatus,
        id: newUserId,
      },
    ]);

    handleNewUserId();
  };

  return (
    <AdminPanelContext.Provider
      value={{
        productState,
        setProductState,
        updateName,
        setUpdateName,
        data,
        setData,
        name,
        setName,
        handleChange,
        productName,
        setProductName,
        productStock,
        setProductStock,
        productPrice,
        setProductPrice,
        newProducts,
        setNewProducts,
        handleProductsSubmit,

        profileName,
        setProfileName,
        userEmail,
        setUserEmail,
        userStatus,
        handleUserSubmit,
        newUsers,
        setNewUsers,
        products,
        setProducts,
        newProductId,
        setNewProductId,
        userTransaction,
        setUserTransaction,
        newProductsStatus,
        setNewProductsStatus,
      }}
    >
      {children}
    </AdminPanelContext.Provider>
  );
};
