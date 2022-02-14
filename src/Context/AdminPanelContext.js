import { useState, createContext } from "react";
import { productRows } from "../dummyData"
import { userRows } from "../dummyData";

export const AdminPanelContext = createContext();

export const AdminPanelState = ({ children }) => {
  const [productState, setProductState] = useState();
  const [products, setProducts] = useState(productRows);
  const [navbarOpen, setNavbarOpen] = useState(false);

  //product state//

  const [updateName, setUpdateName] = useState(userRows);
  const [productName, setProductName] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [newProducts, setNewProducts] = useState([]);
  const [newProductsStatus, setNewProductsStatus] = useState();
  const [newProductId, setNewProductId] = useState("RV4JCCKN7ZJC");

  //user state//

  const [profileName, setProfileName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTransaction, setUserTransaction] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [newUsers, setNewUsers] = useState([]);
  const [newUserId, setNewUserId] = useState("3DULXDNALUEI");

  //new lists//

  const [productRowsList, setProductRowsList] = useState(productRows);
  const [userRowsList, setUserRowsList] = useState(userRows);

  //transaction state//

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("WYCHLHRWVABZ");
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [list, setList] = useState(orders);

  //remove buttons//

  const removeProduct = (id) => {
    setProductRowsList(productRowsList.filter((item) => item.id !== id));
  };

  const removeUser = (id) => {
    setUserRowsList(userRowsList.filter((item) => item.id !== id));
  };

  const removeNewProduct = (id) => {
    setNewProducts(newProducts.filter((item) => item.id !== id));
  };

  const removeNewUser = (id) => {
    setNewUsers(newUsers.filter((item) => item.id !== id));
  };

  //generate IDs//

  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
  const allNumbers = [..."0123456789"];

  const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];

  const generator = (base, len) => {
    return [...Array(len)]
      .map((i) => base[(Math.random() * base.length) | 0])
      .join("");
  };

  const handleNewProductId = () => {
    setNewProductId(generator(base, 12));
  };

  const handleNewUserId = () => {
    setNewUserId(generator(base, 12));
  };

  const handleTransactionsId = () => {
    setOrderId(generator(base, 12));
  };

  //list of new products

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
    setProductName("");
    setProductStock("");
    setProductPrice("");
  };

  //list of new users

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
    setProfileName("");
    setUserEmail("");
    setUserTransaction("");
  };

  //list of new transactions

  const handleTransactionsSubmit = (e) => {
    e.preventDefault();

    setOrders([
      ...orders,
      {
        name: recipient,
        bankAccount: source,
        orderAmount: amount,
        id: orderId,
      },
    ]);

    handleTransactionsId();
    setRecipient("");
    setSource("");
    setAmount("");
  };

  return (
    <AdminPanelContext.Provider
      value={{
        productState,
        setProductState,
        updateName,
        setUpdateName,
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
        handleTransactionsSubmit,

        productRowsList,
        removeProduct,

        userRowsList,
        removeUser,

        removeNewProduct,
        removeNewUser,

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

        navbarOpen,
        setNavbarOpen,
      }}
    >
      {children}
    </AdminPanelContext.Provider>
  );
};
