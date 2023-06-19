import { useDispatch, useSelector } from "react-redux";
import "../../Css/Cart.css";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import {
  decrement,
  increment,
  deleteFromCart,
  totalPrice,
  clearCart,
} from "../../Store/Slices/cartSlice";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../Store/Slices/wishlistSlice";
const DesktopCart = () => {
  const Cart = useSelector((state) => state.Cart.items);
  const totalAmount = useSelector((state) => state.Cart.totalAmount);
  const shippingFee = useSelector((state) => state.Cart.shippingFee);

  const dispatch = useDispatch();
  return (
    <div className="Desktop_Cart py-5">
      <div className="Desktop_Cart_Container container-xl">
        <div className="DC_Content_Container row w-100 m-0 align-items-start flex-wrap-reverse">
          <div className="DCC_Left_Container col-lg-8 px-2 mt-sm-2 mt-lg-0">
            <div className="DCC_Left_Header bg-white row w-100 m-0 mb-2 px-3">
              <div className="DCCL_Header_SelectAll_Container col-6 p-0 text-start d-flex align-items-center">
                <input
                  type="checkbox"
                  aria-checked="false"
                  value="on"
                  className="DCCHL_CheckAll_Input me-3"
                />
                <span className="DCCHL_CheckAll_Count">
                  SELECT ALL ({Cart.length} ITEM(S))
                </span>
              </div>
              <div className="DCCL_Header_Delete_Container col-6 p-0 text-end">
                <button
                  className="btn DCCL_Header_Delete_Btn p-0"
                  onClick={() => dispatch(clearCart())}
                >
                  <span className="DCCHR_Delete_Icon_Container">
                    <DeleteOutlinedIcon className="DCCHR_Delete_Icon" />
                  </span>
                  <span className="DCCHR_Delete_Txt">Delete</span>
                </button>
              </div>
            </div>
            <div className="DCC_Left_CartItem_Wrapper py-3 bg-white">
              <h3 className="DCCL_CartItem_Heading mb-0 px-3">Cart items</h3>
              <div className="DCCl_CartItem_Container">
                {Cart.length == 0
                  ? ""
                  : Cart.map((item, index) => {
                      let {
                        uid,
                        discount,
                        images,
                        price,
                        quantity,
                        rating,
                        stock,
                        title,
                        isSale,
                      } = item;
                      const ItemExist = useSelector((state) =>
                        state.Wishlist.wishitems.filter((item) => item == uid)
                      );

                      return (
                        <div className="DCCL_CartItem" key={index}>
                          <hr className="DCCL_Separator" />
                          <div className="DCCLC_Details row m-0 w-100 ">
                            <div className="DCCL_CartItem_Product col-9 d-flex align-items-start gap-2 p-0 text-start mb-3 px-3">
                              <Link
                                className="DCCL_CartItem_Product_Link d-inline-block"
                                to={`/product/${uid}`}
                              >
                                <img
                                  src={images ? images[0] : ""}
                                  alt="Cart Product"
                                  className="DCCL_CartItem_Product_Image w-100 h-100"
                                />
                              </Link>
                              <div className="DCCL_CartItem_Product_Info d-inline-block">
                                <Link
                                  className="CartItem_Product_Info_Title"
                                  to={`/product/${uid}`}
                                >
                                  {title}
                                </Link>
                                <div className="CartItem_Product_Rating_Container">
                                  <span className="CartItem_Product_Rating_Txt text-muted">
                                    Rating:
                                  </span>
                                  <span className="CartItem_Product_Rating_Star">
                                    {Array(parseInt(rating))
                                      .fill()
                                      .map((_, i) => (
                                        <span
                                          className="RatingStar text-warning"
                                          key={i}
                                        >
                                          <GradeRoundedIcon />
                                        </span>
                                      ))}

                                    {Array(5 - parseInt(rating))
                                      .fill()
                                      .map((_, i) => (
                                        <span
                                          className="RatingStarSecondary text-secondary"
                                          key={i}
                                        >
                                          <GradeRoundedIcon />
                                        </span>
                                      ))}
                                  </span>
                                </div>
                                <div className="CarItem_Product_Information">
                                  <div className="CarItem_Product_Style">
                                    <span className="CPStyle_Txt text-muted">
                                      Style:
                                    </span>
                                    <span className="CPStyle_Style">Wifi</span>
                                  </div>
                                  <div className="CarItem_Product_Color">
                                    <span className="CPColor_Txt text-muted">
                                      Color:
                                    </span>
                                    <span className="CPColor_Color">
                                      Space Gray
                                    </span>
                                  </div>
                                  <div className="CarItem_Product_LeftStock mt-1 mb-0">
                                    <p className="CPLeftStock_Txt mb-0">
                                      Only {stock} left in stock - order soon
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="DCCL_CartItem_Product_PriceInfo d-inline-block">
                                <p className="CPPPrice mb-0">
                                  {PriceFormat(CalcDiscount(discount, price))}
                                </p>
                                <p className="CPPOldPrice">
                                  {discount > 0 ? PriceFormat(price) : ""}
                                </p>
                                <p className="CPPDiscount">
                                  {discount ? `-${discount}%` : ""}
                                </p>
                                <div className="CPPOperations">
                                  {ItemExist.length == 0 ? (
                                    <button
                                      className="CPPOperation_WishList_Btn btn p-0 m-0 me-1"
                                      onClick={() =>
                                        dispatch(addToWishlist(uid))
                                      }
                                    >
                                      <FavoriteBorderOutlinedIcon className="CPPOperation_WishList_Icon" />
                                    </button>
                                  ) : (
                                    <button
                                      className="CPPOperation_WishList_Btn btn p-0 m-0 me-1"
                                      onClick={() =>
                                        dispatch(deleteFromWishlist(uid))
                                      }
                                    >
                                      <FavoriteIcon className="CPPOperation_WishList_Icon" />
                                    </button>
                                  )}
                                  <button
                                    className="CPPOperation_Delete_Btn btn p-0 m-0 ms-1"
                                    onClick={() =>
                                      dispatch(deleteFromCart(uid))
                                    }
                                  >
                                    <DeleteOutlinedIcon className="CPPOperation_Delete_Icon" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="DCCL_CartItem_IncDec_Container col-3  p-0">
                              <div className="DCCL_CartItem_IncDec">
                                <span
                                  className="DCCL_CartItem_Dec_Icon_Container cursor-pointer text-center"
                                  onClick={() => {
                                    dispatch(decrement(uid));
                                    dispatch(totalPrice());
                                  }}
                                >
                                  <RemoveRoundedIcon className="DCCL_CartItem_IncDec_Icon" />
                                </span>

                                <input
                                  type="text"
                                  name="Quantity"
                                  // id="DQuantity"
                                  readOnly
                                  placeholder={quantity}
                                  className="DCCL_CartItem_IncDec_Input w-100 text-center"
                                />
                                <span
                                  className="DCCL_CartItem_Inc_Icon_Container text-center"
                                  onClick={() => {
                                    dispatch(increment(uid));
                                    dispatch(totalPrice());
                                  }}
                                >
                                  <AddRoundedIcon className="DCCL_CartItem_IncDec_Icon" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
          <div className="DCC_Right_Container col-lg-4 px-2 align-self-end">
            <div className="DCC_Order_Summery_Container p-3 bg-white">
              <h4 className="DCC_Order_Summery_Heading">Order Summery</h4>
              <div className="DCC_Subtotal_Container mb-3 d-flex justify-content-between align-items-center">
                <p className="DCC_Subtotal_Txt mb-0">
                  Subtotal ({Cart.length} items)
                </p>
                <p className="DCC_Subtotal_Price mb-0">
                  {PriceFormat(totalAmount)}
                </p>
              </div>
              <div className="DCC_ShippingFee_Container mb-3 d-flex justify-content-between align-items-center">
                <p className="DCC_ShippingFee_Txt mb-0">Shipping Fee</p>
                <p className="DCC_ShippingFee_Price mb-0">
                  {PriceFormat(shippingFee)}
                </p>
              </div>
              <div className="DCC_Voucher_Container d-flex justify-content-between align-items-center gap-1 mb-2">
                <input
                  type="search"
                  name="VoucherInput"
                  placeholder="Enter Voucher Code"
                  className="DDC_Voucher_Input rounded-0"
                />
                <button className="DCC_Voucher_Btn btn p-0 rounded-0">
                  Apply
                </button>
              </div>
              <div className="DCC_Total_Container d-flex justify-content-between align-items-center gap-1 mb-3">
                <p className="DCC_Total_Txt m-0">Total</p>
                <p className="DCC_Total_Price m-0">
                  {PriceFormat(totalAmount + shippingFee)}
                </p>
              </div>
              <button className="btn DCC_Checkout_Btn BtnStyle1 text-center w-100 d-block p-0 rounded-0">
                <Link
                  className="DCC_Checkout_Link w-100 h-100 d-block"
                  to="/checkout"
                >
                  Proceed To Checkout <span>({Cart.length})</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCart;
