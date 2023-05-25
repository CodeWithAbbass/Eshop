import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import User from "./Pages/User";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
const App = () => {
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
          <Route path="checkout" element={<Checkout />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
