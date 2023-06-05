import { useNavigate } from "react-router-dom";
import "../Css/Checkout.css";
import DesktopCheckout from "../components/Checkout/DesktopCheckout";
import MobileCheckout from "../components/Checkout/MobileCheckout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Checkout = () => {
  const Navigate = useNavigate();
  const Cart = useSelector((state) => state.Cart.items);
  useEffect(() => {
    if (Cart.length == 0) {
      Navigate("/");
    }
    return () => {};
  }, []);
  return (
    <div className="Checkout">
      <DesktopCheckout />
      <MobileCheckout />
    </div>
  );
};

export default Checkout;
