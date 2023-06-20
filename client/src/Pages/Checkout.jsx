import { Link, useNavigate } from "react-router-dom";
import "../Css/Checkout.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DesktopCheckout from "../components/Checkout/DesktopCheckout";
import MobileCheckout from "../components/Checkout/MobileCheckout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addNewAddress,
  changeDeliveryMethod,
  defaultAddress,
  deleteAddress,
  editAddress,
  getAddress,
} from "../Store/Slices/orderSlice";
const Checkout = () => {
  let dispatch = useDispatch();
  const navigation = useNavigate();
  const CartItems = localStorage.getItem("items");

  const AddressBook = useSelector((state) => state.Orders.addressbook);
  const PaymentMethod = useSelector((state) => state.Orders.paymentmethod);
  const [addNewLocation, setNewLocation] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [changeAddress, setChangeAddress] = useState({
    aid: "",
    name: "",
    phone: "",
    address: "",
  });

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
