import "./App.css";
import "./index.css";
// Admin Imports
import Admin from "./Pages/Admin";
import DProducts from "./components/Admin/Products/DProducts";
import DAllProducts from "./components/Admin/Products/DAllProducts";
import DAddProduct from "./components/Admin/Products/DAddProduct";
import DEditProduct from "./components/Admin/Products/DEditProduct";
import DCategories from "./components/Admin/Products/DCategories";
import DReviews from "./components/Admin/Products/DReviews";

import DAllOrders from "./components/Admin/Orders/DAllOrders";
import DAddOrder from "./components/Admin/Orders/DAddOrder";
import DOrders from "./components/Admin/Orders/DOrders";
import DAnalytics from "./components/Admin/Analytics/DAnalytics";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./Store/Slices/productSlice";
import { getUserWishlist } from "./Store/Slices/wishlistSlice";
import { totalPrice, getCart } from "./Store/Slices/cartSlice";
import { getUserOrderAddress, getUserOrders } from "./Store/Slices/orderSlice";
import { getAllCat } from "./Store/Slices/categorySlice";

import { getAddress } from "./Store/Slices/orderSlice";
import UserAddressBook from "./components/Modals/UserAddressBook";
import EditAddress from "./components/Modals/EditAddress";
import AddAddress from "./components/Modals/AddAddress";
import DeliveryMethod from "./components/Modals/DeliveryMethod";
import OrderDetails from "./components/User/OrderDetails";
import DEditOrder from "./components/Admin/Orders/DEditOrder";

const App = () => {
  const dispatch = useDispatch();

  let userLoading = useSelector((state) => state.User.loading);
  let productLoading = useSelector((state) => state.Products.loading);
  let categoryLoading = useSelector((state) => state.Categories.loading);
  let cartLoading = useSelector((state) => state.Cart.loading);
  let wishlistLoading = useSelector((state) => state.Wishlist.loading);
  let orderLoading = useSelector((state) => state.Orders.loading);
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getUser());
    dispatch(getCart());
    dispatch(getUserWishlist());
    dispatch(getUserOrders());
    dispatch(getAddress());
    dispatch(getUserOrderAddress());
    dispatch(totalPrice());
    // dispatch(getAllCat());
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
            <Route path="orderdetails/:id" element={<OrderDetails />} />
            <Route path="returns" element={<Returns />} />
            <Route path="cancellations" element={<Cancellations />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="products" element={<DProducts />}>
              <Route path="allproducts" element={<DAllProducts />} />
              <Route path="addproduct" element={<DAddProduct />} />
              <Route path="edit/:id" element={<DEditProduct />} />
              <Route path="categories" element={<DCategories />} />
              <Route path="reviews" element={<DReviews />} />
            </Route>
            <Route path="orders" element={<DOrders />}>
              <Route path="allorders" element={<DAllOrders />} />
              <Route path="add" element={<DAddOrder />} />
              <Route path="edit" element={<DEditOrder />} />
            </Route>
            <Route path="analytic" element={<DAnalytics />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>

        <Footer />
        {(userLoading ||
          categoryLoading ||
          productLoading ||
          cartLoading ||
          wishlistLoading ||
          orderLoading) && (
          <div
            className="d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100"
            style={{
              height: "100%",
              zIndex: "9999",
              backgroundColor: "rgb(0 0 0 / 60%)",
            }}
          >
            <img
              src="https://i.gifer.com/VAyR.gif"
              alt="Loading"
              className=""
              style={{ width: "80px" }}
            />
          </div>
        )}
        <UserAddressBook />
        <EditAddress />
        <AddAddress />
        <DeliveryMethod />
      </BrowserRouter>
    </div>
  );
};

export default App;
