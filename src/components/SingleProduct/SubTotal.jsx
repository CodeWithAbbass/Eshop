import "../../Css/SingleProduct.css";
import { Link } from "react-router-dom";
import SamsungLED from "../../assets/Products/SamsungLED.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
import {
  DeleteFromCart,
  SelectIncrementDecrement,
  TotalPrice,
} from "../../Store/Slices/cartSlice";

const SubTotal = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.Cart.totalPrice);
  const Cart = useSelector((state) => state.Cart.items.filter((item) => item));
  const QuantityOnchange = (e, id) => {
    const { value } = e.target;
    dispatch(SelectIncrementDecrement({ value, id }));
  };
  useEffect(() => {
    dispatch(TotalPrice());
    return () => {};
  }, []);
  return (
    <div className="SingleProduct_SubTotal_Container">
      <div className="SP_Subtotal_Header">
        <div className="SP_SubTotal_Txt">Subtotal</div>
        <div className="SP_SubTotal_Price">
          {PriceFormat(totalPrice) ? PriceFormat(totalPrice) : "$0"}
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
            const { Image, Price, Discount, id } = item;

            return (
              <div className="SP_Subtotal_Item" key={index}>
                <Link
                  to="/product/2"
                  className="SP_Cart_Product_Link text-center w-100"
                >
                  <img
                    src={Image.MainImage}
                    alt="Retail Cart Product Image"
                    className="h-100"
                  />
                </Link>
                <div className="SP_Retail_Product_Price">
                  {PriceFormat(CalcDiscount(Discount, Price))}
                </div>
                <form className="SP_Subtotal_Quantity_Info">
                  <select
                    name="Quantity"
                    id="Quantity"
                    className="SP_Subtotal_Quantity_Select"
                    value={Cart.length > 0 ? Cart[0].Quantity : "1"}
                    onChange={(e) => {
                      QuantityOnchange(e, id);
                      dispatch(TotalPrice());
                    }}
                  >
                    {Array(
                      item.Stock > 0 || Cart.length > 0 ? item.Stock + 1 : 1
                    )
                      .fill()
                      .map((_, i) => {
                        if (i > 0) {
                          return (
                            <option
                              value={i}
                              className="Quantity_Option"
                              key={i}
                            >
                              {i}
                            </option>
                          );
                        }
                      })}
                  </select>
                  <Link
                    className="SP_Subtotal_Delete_Link"
                    onClick={() => {
                      dispatch(DeleteFromCart(id));
                      dispatch(TotalPrice());
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
