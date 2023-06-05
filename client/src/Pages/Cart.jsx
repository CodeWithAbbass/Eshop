import "../Css/Cart.css";
import { Link } from "react-router-dom";
import DesktopCart from "../components/Cart/DesktopCart";
import MobileCart from "../components/Cart/MobileCart";
import { useSelector } from "react-redux";
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
