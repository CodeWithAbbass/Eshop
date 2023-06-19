import "../../Css/SingleProduct.css";
import { Link } from "react-router-dom";
import SamsungLED from "../../assets/Products/SamsungLED.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
import {
  deleteFromCart,
  totalPrice,
  selectIncDec,
} from "../../Store/Slices/cartSlice";

const SubTotal = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.Cart.totalAmount);
  const Cart = useSelector((state) => state.Cart.items.filter((item) => item));
  const QuantityOnchange = (e, uid) => {
    const { value } = e.target;
    dispatch(selectIncDec({ value, uid }));
  };
  useEffect(() => {
    dispatch(totalPrice());
    return () => {};
  }, []);
  return (
    <div className="SingleProduct_SubTotal_Container">
      <div className="SP_Subtotal_Header">
        <div className="SP_SubTotal_Txt">Subtotal</div>
        <div className="SP_SubTotal_Price">
          {PriceFormat(totalAmount) ? PriceFormat(totalAmount) : "$0"}
        </div>
        <Link to="/cart" className="SP_SubTotal_GoToCart_Btn">
          Go to Cart
        </Link>
      </div>
      <div className="SP_Retail_Cart_Container">
        {Cart.length == 0 ? (
          <div className="NoCartItem p-0 pt-5">
            <h2 className="NoCartItem_Heading mb-3">
              There are no items in this cart
            </h2>
            <Link className="ContinueShopping_Link w-75" to="/">
              Continue Shopping
            </Link>
          </div>
        ) : (
          Cart.map((item, index) => {
            const { images, price, discount, uid, quantity } = item;

            return (
              <div className="SP_Subtotal_Item" key={index}>
                <Link
                  to={`/product/${uid}`}
                  className="SP_Cart_Product_Link text-center w-100"
                >
                  <img
                    src={images ? images[0] : ""}
                    alt="Retail Cart Product Image"
                    className="h-100"
                  />
                </Link>
                <div className="SP_Retail_Product_Price">
                  {discount > 0
                    ? PriceFormat(CalcDiscount(discount, price))
                    : PriceFormat(price)}
                </div>
                <form className="SP_Subtotal_Quantity_Info">
                  <select
                    name="Quantity"
                    id="Quantity"
                    className="SP_Subtotal_Quantity_Select"
                    value={Cart.length > 0 ? quantity : "1"}
                    onChange={(e) => {
                      QuantityOnchange(e, uid);
                      dispatch(totalPrice());
                    }}
                  >
                    <option value="1" className="Quantity_Option">
                      1
                    </option>
                    <option value="2" className="Quantity_Option">
                      2
                    </option>
                    <option value="3" className="Quantity_Option">
                      3
                    </option>
                    <option value="4" className="Quantity_Option">
                      4
                    </option>
                    <option value="5" className="Quantity_Option">
                      5
                    </option>
                    <option value="6" className="Quantity_Option">
                      6
                    </option>
                    <option value="7" className="Quantity_Option">
                      7
                    </option>
                    <option value="8" className="Quantity_Option">
                      8
                    </option>
                    <option value="9" className="Quantity_Option">
                      9
                    </option>
                    <option value="10" className="Quantity_Option">
                      10
                    </option>
                  </select>
                  <Link
                    className="SP_Subtotal_Delete_Link"
                    onClick={() => {
                      dispatch(deleteFromCart(uid));
                      dispatch(totalPrice());
                    }}
                  >
                    <DeleteOutlineOutlinedIcon className="SP_Subtotal_Delete_Icon" />
                  </Link>
                </form>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SubTotal;
