import "../Css/Cart.css";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusIncrement,
  MinusDecrement,
  DeleteFromCart,
} from "../Store/Slices/cartSlice";
import DesktopCart from "../components/Cart/DesktopCart";
import MobileCart from "../components/Cart/MobileCart";
const Cart = () => {
  const Cart = useSelector((state) => state.Cart.items);

  if (Cart.length == 0) {
    return (
      <div className="NoCartItem container-xl text-center">
        <h2 className="NoCartItem_Heading mb-3">
          There are no items in this cart
        </h2>
        <Link className="ContinueShopping_Link" to="/">
          Continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="Cart ">
      <DesktopCart />
      <MobileCart />
    </div>
  );
};

export default Cart;
