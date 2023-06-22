import "../Css/Checkout.css";
import { useNavigate } from "react-router-dom";
import DesktopCheckout from "../components/Checkout/DesktopCheckout";
import MobileCheckout from "../components/Checkout/MobileCheckout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAddress } from "../Store/Slices/orderSlice";
const Checkout = () => {
  let dispatch = useDispatch();
  const navigation = useNavigate();
  const CartItems = localStorage.getItem("items");

  useEffect(() => {
    if (!CartItems || CartItems == null) {
      navigation("/");
    }
    dispatch(getAddress());
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
