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
const Cart = () => {
  const Cart = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();
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
                    SELECT ALL (1 ITEM(S))
                  </span>
                </div>
                <div className="DCCL_Header_Delete_Container col-6 p-0 text-end">
                  <button className="btn DCCL_Header_Delete_Btn p-0">
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
                          id,
                          Discount,
                          Image,
                          Price,
                          oldPrice,
                          Quantity,
                          Rating,
                          Stock,
                          Title,
                          isSale,
                          isSold,
                        } = item;
                        return (
                          <div className="DCCL_CartItem" key={index}>
                            <hr className="DCCL_Separator" />
                            <div className="DCCLC_Details row m-0 w-100 ">
                              <div className="DCCL_CartItem_Product col-9 d-flex align-items-start gap-2 p-0 text-start mb-3 px-3">
                                <Link
                                  className="DCCL_CartItem_Product_Link d-inline-block"
                                  to={`/product/${id}`}
                                >
                                  <img
                                    src={Image.MainImage}
                                    alt="Cart Product"
                                    className="DCCL_CartItem_Product_Image w-100"
                                  />
                                </Link>
                                <div className="DCCL_CartItem_Product_Info d-inline-block">
                                  <Link
                                    className="CartItem_Product_Info_Title"
                                    to={`/product/${1}`}
                                  >
                                    {Title}
                                  </Link>
                                  <div className="CartItem_Product_Rating_Container">
                                    <span className="CartItem_Product_Rating_Txt text-muted">
                                      Rating:
                                    </span>
                                    <span className="CartItem_Product_Rating_Star">
                                      {Array(Rating)
                                        .fill()
                                        .map((_, i) => (
                                          <span
                                            className="RatingStar text-warning"
                                            key={i}
                                          >
                                            <GradeRoundedIcon />
                                          </span>
                                        ))}

                                      {Array(5 - Rating)
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
                                      <span className="CPStyle_Style">
                                        Wifi
                                      </span>
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
                                        Only {Stock} left in stock - order soon
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="DCCL_CartItem_Product_PriceInfo d-inline-block">
                                  <p className="CPPPrice mb-0">${Price}</p>
                                  <p className="CPPOldPrice">
                                    ${oldPrice ? oldPrice : ""}
                                  </p>
                                  <p className="CPPDiscount">
                                    {Discount ? `-${Discount}%` : ""}
                                  </p>
                                  <div className="CPPOperations">
                                    <button className="CPPOperation_WishList_Btn btn p-0 m-0 me-1">
                                      <FavoriteBorderOutlinedIcon className="CPPOperation_WishList_Icon" />
                                    </button>
                                    <button className="CPPOperation_Delete_Btn btn p-0 m-0 ms-1">
                                      <DeleteOutlinedIcon className="CPPOperation_Delete_Icon" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="DCCL_CartItem_IncDec_Container col-3  p-0">
                                <div className="DCCL_CartItem_IncDec">
                                  <span
                                    className="DCCL_CartItem_Dec_Icon_Container cursor-pointer text-center"
                                    onClick={() => dispatch(MinusDecrement(id))}
                                  >
                                    <RemoveRoundedIcon className="DCCL_CartItem_IncDec_Icon" />
                                  </span>

                                  <input
                                    type="text"
                                    name="Quantity"
                                    // id="DQuantity"
                                    readOnly
                                    placeholder={Quantity}
                                    className="DCCL_CartItem_IncDec_Input w-100 text-center"
                                  />
                                  <span
                                    className="DCCL_CartItem_Inc_Icon_Container text-center"
                                    onClick={() => dispatch(PlusIncrement(id))}
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
                  <p className="DCC_Subtotal_Txt mb-0">Subtotal (0 items)</p>
                  <p className="DCC_Subtotal_Price mb-0">
                    <span>$ </span>
                    <span>799.99</span>
                  </p>
                </div>
                <div className="DCC_ShippingFee_Container mb-3 d-flex justify-content-between align-items-center">
                  <p className="DCC_ShippingFee_Txt mb-0">Shipping Fee</p>
                  <p className="DCC_ShippingFee_Price mb-0">
                    <span>$ </span>
                    <span>199.99</span>
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
                    <span>$ </span>
                    <span>918.99</span>
                  </p>
                </div>
                <button className="btn DCC_Checkout_Btn BtnStyle1 text-center w-100 d-block p-0 rounded-0">
                  <Link
                    className="DCC_Checkout_Link w-100 h-100 d-block"
                    to="/checkout"
                  >
                    Proceed To Checkout <span>(1)</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div className="Mobile_CartItem">
                <hr className="DCCL_Separator" />
                <div className="MCC_Details row m-0 w-100 h-100 px-3">
                  <div className="MCCD_Product_Info col-4 p-0">
                    <Link
                      className="MCCD_Product_Link d-block w-100 mb-3"
                      to={`/product/${1}`}
                    >
                      <img
                        src="https://static-01.daraz.pk/p/a1cb162be09d8ff050feee5e683db2f3.jpg"
                        alt="Cart Product"
                        className="MCCD_Product_Image h-100"
                      />
                    </Link>
                    <div className="MCCD_Product_IncDec_Container position-relative ">
                      <span className="MCCD_CartItem_Dec_Icon_Container text-center position-absolute top-0 start-0">
                        <RemoveRoundedIcon className="" />
                      </span>
                      <input
                        type="text"
                        name="Quantity"
                        readOnly
                        placeholder="10"
                        className="MCCD_Product_IncDec_Input h-100 w-100 px-4 text-center d-block"
                      />
                      <span className="MCCD_CartItem_Inc_Icon_Container text-center position-absolute top-0 end-0">
                        <AddRoundedIcon />
                      </span>
                    </div>
                  </div>
                  <div className="MCCD_Product_Info col-8 pe-0">
                    <div className="CartItem_Product_Info w-100 position-relative h-100">
                      <Link
                        className="CartItem_Product_Info_Title w-100 d-block"
                        to={`/product/${1}`}
                      >
                        Black Trendy Printed Tracksuit For Men and Boys - Soft
                        and Comfortable Fabric T Shirt and Trouser Printed
                        Tracksuit.
                      </Link>
                      <div className="CartItem_Product_Info_Details">
                        <div className="CartItem_Product_Rating_Container">
                          <span className="CartItem_Product_Rating_Txt text-muted">
                            Rating:
                          </span>
                          <span className="CartItem_Product_Rating_Star">
                            ⭐⭐⭐⭐⭐
                          </span>
                        </div>
                        <div className="CarItem_Product_Information d-flex align-items-center justify-content-between">
                          <div className="CarItem_Product_Style w-50 text-start">
                            <span className="CPStyle_Txt text-muted">
                              Style:
                            </span>
                            <span className="CPStyle_Style ms-1">Wifi</span>
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
                          Only {"5"} left in stock - order soon
                        </p>
                      </div>
                      <div className="CartItem_Product_Footer d-flex align-items-start justify-content-between position-absolute bottom-0 end-0 w-100">
                        <div className="DCCL_CartItem_Product_PriceInfo w-50">
                          <p className="CPPPrice mb-0">$799.00</p>
                          <span className="CPPDiscount me-2">-60%</span>
                          <span className="CPPOldPrice">$2,000.00</span>
                        </div>
                        <div className="CPPOperations align-self-end">
                          <button className="CPPOperation_WishList_Btn btn p-0 m-0 me-1">
                            <FavoriteBorderOutlinedIcon className="CPPOperation_WishList_Icon" />
                          </button>
                          <button className="CPPOperation_Delete_Btn btn p-0 m-0 ms-1">
                            <DeleteOutlinedIcon className="CPPOperation_Delete_Icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Checkout Footer */}
          <div className="MCC_Order_Summery_Container w-100 p-2 bg-white d-flex align-items-center justify-content-between">
            <div className="MCC_Order_Summery_Left">
              <div className="MCCOS_Delivery_Container">
                <span className="MCCOS_Delivery_Txt">Delivery:</span>
                <span className="MCCOS_Delivery_Price ms-1">$109</span>
              </div>
              <div className="MCCOS_Total_Container">
                <span className="MCCOS_Total_Txt">Total:</span>
                <span className="MCCOS_Total_Price ms-1">$908</span>
              </div>
            </div>
            <div className="MCC_Order_Summery_Right text-end">
              <button className="MCCOS_Checkout_Btn btn BtnStyle1 text-center rounded-0">
                <Link className="MCCOS_Checkout_Link text-white">
                  Checkout (1)
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
