import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Topbar from "./components/nav/topbar/Topbar";
import Sidebar from "./components/nav/sidebar/Sidebar";
import FeaturedInfo from "./components/FeaturedInfo/FeaturedInfo";
import Chart from "./components/Chart/Chart";
import { userData } from "./components/Chart/dummyData";
import UserList from "./pages/UserList.js/UserList";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Map from "./pages/Map/Map";
import Calender from "./pages/calender/Calender";
import Charts from "./pages/charts/Charts";
import Colors from "./pages/colors/Colors";
import Transaction from "./pages/transax/Transaction";
import Products from "./pages/products/Products";
import LoaderPage from "./pages/loaderPage/LoaderPage";
import ProductList from "./pages/productList/ProductList";
import Footer from "./components/footer/Footer.js";
import NewProduct from "./pages/newProduct/NewProduct";
import { AdminPanelState } from "./Context/AdminPanelContext";
import NewUser from "./pages/UserList.js/newUser/NewUser";

const App = () => {
  return (
    <div className="App">
      <AdminPanelState>
        <Topbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/map" element={<Map />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/product" element={<Products />} />
          <Route path="/loaderpage" element={<LoaderPage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
        <Footer />
      </AdminPanelState>
    </div>
  );
};

export default App;
