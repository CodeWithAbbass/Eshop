/* eslint-disable no-unused-vars */
import "../../Css/Cart.css";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    deleteFromCart,
    totalPrice,
} from "../../Store/Slices/cartSlice";
import { useEffect } from "react";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
import {
    addToWishlist,
    deleteFromWishlist,
} from "../../Store/Slices/wishlistSlice";

const MobileCart = () => {
    const Cart = useSelector((state) => state.Cart.items);
    const Wishlist = useSelector((state) => state.Wishlist.wishitems);
    const totalAmount = useSelector((state) => state.Cart.totalAmount);
    const shippingFee = useSelector((state) => state.Cart.shippingFee);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {};
    }, [Cart]);
    return (
        <div className="Mobile_Cart">
            <div className="Mobile_Cart_Container container-xl py-5 mt-sm-5">
                <div className="Mobile_CartItem_Wrapper py-3">
                    <div className="MCC_Voucher d-flex align-items-center justify-content-between gap-1 p-3 my-3 bg-white">
                        <input
                            type="search"
                            name="VoucherInput"
                            className="MCC_Voucher_input"
                            placeholder="Enter Voucher Code"
                        />
                        <button className="btn MCC_Voucher_Btn BtnStyle1 h-100 text-white rounded-0">
                            Apply
                        </button>
                    </div>
                    <div className="Mobile_CartItem_Container bg-white py-3">
                        <h3 className="DCCL_CartItem_Heading mb-0 bg-white px-3">
                            Cart items
                        </h3>
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
                                  const ItemExist = Wishlist.filter(
                                      (item) => item == uid
                                  );

                                  return (
                                      <div
                                          className="Mobile_CartItem"
                                          key={index}
                                      >
                                          <hr className="DCCL_Separator" />
                                          <div className="MCC_Details row m-0 w-100 h-100 px-3">
                                              <div className="MCCD_Product_Info col-4 p-0">
                                                  <Link
                                                      className="MCCD_Product_Link d-block w-100 mb-3"
                                                      to={`/product/${uid}`}
                                                  >
                                                      <img
                                                          src={
                                                              images
                                                                  ? images[0]
                                                                  : ""
                                                          }
                                                          alt="Cart Product"
                                                          className="MCCD_Product_Image h-100"
                                                      />
                                                  </Link>
                                                  <div className="MCCD_Product_IncDec_Container position-relative ">
                                                      <span
                                                          className="MCCD_CartItem_Dec_Icon_Container text-center position-absolute top-0 start-0"
                                                          onClick={() => {
                                                              dispatch(
                                                                  decrement(uid)
                                                              );
                                                              dispatch(
                                                                  totalPrice()
                                                              );
                                                          }}
                                                      >
                                                          <RemoveRoundedIcon className="" />
                                                      </span>
                                                      <input
                                                          type="text"
                                                          name="Quantity"
                                                          readOnly
                                                          placeholder={quantity}
                                                          className="MCCD_Product_IncDec_Input h-100 w-100 px-4 text-center d-block"
                                                      />
                                                      <span
                                                          className="MCCD_CartItem_Inc_Icon_Container text-center position-absolute top-0 end-0"
                                                          onClick={() => {
                                                              dispatch(
                                                                  increment(uid)
                                                              );
                                                              dispatch(
                                                                  totalPrice()
                                                              );
                                                          }}
                                                      >
                                                          <AddRoundedIcon />
                                                      </span>
                                                  </div>
                                              </div>
                                              <div className="MCCD_Product_Info col-8 pe-0">
                                                  <div className="CartItem_Product_Info w-100 position-relative h-100">
                                                      <Link
                                                          className="CartItem_Product_Info_Title w-100 d-block"
                                                          to={`/product/${uid}`}
                                                      >
                                                          {title}
                                                      </Link>
                                                      <div className="CartItem_Product_Info_Details">
                                                          <div className="CartItem_Product_Rating_Container">
                                                              <span className="CartItem_Product_Rating_Txt text-muted">
                                                                  Rating:
                                                              </span>
                                                              <span className="CartItem_Product_Rating_Star">
                                                                  {rating &&
                                                                      Array(
                                                                          isNaN(
                                                                              rating
                                                                          )
                                                                              ? 0
                                                                              : Number(
                                                                                    rating
                                                                                )
                                                                      )
                                                                          .fill()
                                                                          .map(
                                                                              (
                                                                                  _,
                                                                                  i
                                                                              ) => (
                                                                                  <span
                                                                                      className="RatingStar text-warning"
                                                                                      key={
                                                                                          i
                                                                                      }
                                                                                  >
                                                                                      <GradeRoundedIcon />
                                                                                  </span>
                                                                              )
                                                                          )}

                                                                  {rating &&
                                                                      Array(
                                                                          5 -
                                                                              isNaN(
                                                                                  rating
                                                                              )
                                                                              ? 0
                                                                              : Number(
                                                                                    rating
                                                                                )
                                                                      )
                                                                          .fill()
                                                                          .map(
                                                                              (
                                                                                  _,
                                                                                  i
                                                                              ) => (
                                                                                  <span
                                                                                      className="RatingStarSecondary text-secondary"
                                                                                      key={
                                                                                          i
                                                                                      }
                                                                                  >
                                                                                      <GradeRoundedIcon />
                                                                                  </span>
                                                                              )
                                                                          )}
                                                              </span>
                                                          </div>
                                                          <div className="CarItem_Product_Information d-flex align-items-center justify-content-between">
                                                              <div className="CarItem_Product_Style w-50 text-start">
                                                                  <span className="CPStyle_Txt text-muted">
                                                                      Style:
                                                                  </span>
                                                                  <span className="CPStyle_Style ms-1">
                                                                      Wifi
                                                                  </span>
                                                              </div>
                                                              <div className="CarItem_Product_Color w-50 text-end">
                                                                  <span className="CPColor_Txt text-muted">
                                                                      Color:
                                                                  </span>
                                                                  <span className="CPColor_Color ms-1">
                                                                      Space Gray
                                                                  </span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="CarItem_Product_LeftStock mt-1 mb-0">
                                                          <p className="CPLeftStock_Txt mb-0">
                                                              Only {stock} left
                                                              in stock - order
                                                              soon
                                                          </p>
                                                      </div>
                                                      <div className="CartItem_Product_Footer d-flex align-items-start justify-content-between position-absolute bottom-0 end-0 w-100">
                                                          <div className="DCCL_CartItem_Product_PriceInfo w-50">
                                                              <p className="CPPPrice mb-0">
                                                                  {PriceFormat(
                                                                      CalcDiscount(
                                                                          discount,
                                                                          price
                                                                      )
                                                                  )}
                                                              </p>
                                                              <span className="CPPDiscount me-2">
                                                                  {discount
                                                                      ? `-${discount}%`
                                                                      : ""}
                                                              </span>
                                                              <span className="CPPOldPrice">
                                                                  {discount > 0
                                                                      ? PriceFormat(
                                                                            price
                                                                        )
                                                                      : ""}
                                                              </span>
                                                          </div>
                                                          <div className="CPPOperations align-self-end">
                                                              {ItemExist.length ==
                                                              0 ? (
                                                                  <button
                                                                      className="CPPOperation_WishList_Btn btn p-0 m-0 me-1"
                                                                      onClick={() =>
                                                                          dispatch(
                                                                              addToWishlist(
                                                                                  uid
                                                                              )
                                                                          )
                                                                      }
                                                                  >
                                                                      <FavoriteBorderOutlinedIcon className="CPPOperation_WishList_Icon" />
                                                                  </button>
                                                              ) : (
                                                                  <Link
                                                                      className="CPPOperation_WishList_Btn btn p-0 m-0 me-1"
                                                                      onClick={() => {
                                                                          dispatch(
                                                                              deleteFromWishlist(
                                                                                  uid
                                                                              )
                                                                          );
                                                                      }}
                                                                  >
                                                                      <FavoriteIcon className="CPPOperation_WishList_Icon" />
                                                                  </Link>
                                                              )}
                                                              <button
                                                                  className="CPPOperation_Delete_Btn btn p-0 m-0 ms-1"
                                                                  onClick={() => {
                                                                      dispatch(
                                                                          deleteFromCart(
                                                                              uid
                                                                          )
                                                                      );
                                                                      dispatch(
                                                                          totalPrice()
                                                                      );
                                                                  }}
                                                              >
                                                                  <DeleteOutlinedIcon className="CPPOperation_Delete_Icon" />
                                                              </button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                    </div>
                </div>
                {/* Mobile Checkout Footer */}
                <div className="MCC_Order_Summery_Container w-100 p-2 bg-white d-flex align-items-center justify-content-between">
                    <div className="MCC_Order_Summery_Left">
                        <div className="MCCOS_Delivery_Container">
                            <span className="MCCOS_Delivery_Txt">
                                Delivery:
                            </span>
                            <span className="MCCOS_Delivery_Price ms-1">
                                {PriceFormat(shippingFee)}
                            </span>
                        </div>
                        <div className="MCCOS_Total_Container">
                            <span className="MCCOS_Total_Txt">Total:</span>
                            <span className="MCCOS_Total_Price ms-1">
                                {PriceFormat(totalAmount + shippingFee)}
                            </span>
                        </div>
                    </div>
                    <div className="MCC_Order_Summery_Right text-end">
                        <button className="MCCOS_Checkout_Btn btn BtnStyle1 text-center rounded-0">
                            <Link
                                className="MCCOS_Checkout_Link text-white"
                                to="/checkout"
                            >
                                Checkout ({Cart.length})
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileCart;
