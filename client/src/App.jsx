import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import User from "./Pages/User";
import Profile from "./components/User/Profile";
import AddressBook from "./components/User/AddressBook";
import Wishlist from "./components/User/Wishlist";
import Payment from "./components/User/Payment";
import Returns from "./components/User/Returns";
import Cancellations from "./components/User/Cancellations";
import Order from "./components/User/Order";
import Categories from "./Pages/Categories";
import UserSignup from "./Pages/UserSignup";
import UserLogin from "./Pages/UserLogin";
import { getUser } from "./Store/Slices/userSlice";
import { useDispatch } from "react-redux";
import { getProduct } from "./Store/Slices/productSlice";

const App = () => {
  const dispatch = useDispatch();
  dispatch(getUser());
  dispatch(getProduct());
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Top_Header_Wrapper bg-white">
          <div className={`Top_Header w-100 container-xl`}>
            <Link className="Top_Header_AdsLink w-100" to="/">
              <img
                src="https://icms-image.slatic.net/images/ims-web/113f5b22-9a21-4378-b6d9-2b0bded25717.gif"
                alt="Ads Gif"
                className="Top_Header_AdsImage w-100 h-100"
              />
            </Link>
          </div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/user" element={<User />}>
            <Route path="/user" element={<Profile />} />
            <Route path="address" element={<AddressBook />} />
            <Route path="payment" element={<Payment />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="order" element={<Order />} />
            <Route path="returns" element={<Returns />} />
            <Route path="cancellations" element={<Cancellations />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
