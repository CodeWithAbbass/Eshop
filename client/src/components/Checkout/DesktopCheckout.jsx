import "../../Css/Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { placeOrder } from "../../Store/Slices/orderSlice";
import { clearCart } from "../../Store/Slices/cartSlice";
const DesktopCheckout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const Cart = useSelector((state) => state.Cart.items);
  const ShippingFee = useSelector((state) => state.Cart.shippingFee);
  const PaymentMethod = useSelector((state) => state.Orders.paymentmethod);
  const AddressBook = useSelector((state) => state.Orders.addressbook);

  const ShipAddress = useSelector((state) =>
    state.Orders.addressbook.filter((item) => item.shippingaddress == true)
  );
  const BillAddress = useSelector((state) =>
    state.Orders.addressbook.filter((item) => item.billingaddress == true)
  );
  const totalAmount = useSelector((state) => state.Cart.totalAmount);
  let totalPriceWithoutDiscount = 0;

  const OrderConfirmation = () => {
    let products = [];
    Cart.forEach((element, index) => {
      const { uid, price, discount, quantity, images, title } = element;
      const newProduct = {
        uid,
        price,
        discount,
        quantity,
        images,
        title,
        ShippingFee,
      };
      products.push(newProduct);
    });
    let confirmOrder = {
      products,
      paymentmethod: PaymentMethod,
      shipaddress: {
        deliverto: ShipAddress[0]?.name,
        address: ShipAddress[0]?.address,
        email: ShipAddress[0]?.email,
        phone: ShipAddress[0]?.phone,
      },
      billaddress: {
        deliverto: BillAddress[0]?.name,
        address: BillAddress[0]?.address,
        email: BillAddress[0]?.email,
        phone: BillAddress[0]?.phone,
      },
    };
    dispatch(placeOrder(confirmOrder));
    Navigate("/user/order");
  };
  useEffect(() => {
    return () => {};
  }, [AddressBook, ShipAddress]);
  return (
    <div className="DesktopCheckout py-5">
      <div className="Desktop_Checkout_Container container-xl">
        <div className="DC_Content_Container row w-100 m-0 align-items-start flex-wrap-reverse">
          <div className="DCC_Left_Container col-lg-8 px-1 mt-sm-2 mt-lg-0">
            <div className="DCC_Left_Address_Container w-100 m-0 mb-2 px-3 bg-white">
              {!AddressBook[0] && (
                <button
                  type="button"
                  className="btn AddNewAddress_Btn w-100 h-100 rounded-0 p-0 d-flex align-items-center justify-content-center"
                  data-bs-toggle="modal"
                  data-bs-target="#AddressBook"
                >
                  <AddRoundedIcon className="AddNewAddress_Icon h-100" />
                  <span className="AddNewAddress_Txt">
                    Add New Delivery Address
                  </span>
                </button>
              )}
              {!ShipAddress[0] && AddressBook[0] && (
                <button
                  type="button"
                  className="btn AddNewAddress_Btn w-100 h-100 rounded-0 p-0 d-flex align-items-center justify-content-center"
                  data-bs-toggle="modal"
                  data-bs-target="#AddressBook"
                >
                  <AddRoundedIcon className="AddNewAddress_Icon h-100" />
                  <span className="AddNewAddress_Txt">
                    Select Default Address
                  </span>
                </button>
              )}
              {AddressBook[0] && ShipAddress[0] && (
                <div className="DCC_Left_Address_Wrapper py-3">
                  <div className="DCC_Left_Address_DeliverTo mb-2">
                    <span className="DCC_Left_Address_Heading">
                      Deliver To:
                    </span>
                    <span className="DCC_Left_Address_Txt ms-1">
                      {ShipAddress[0] ? ShipAddress[0].name : ""}
                    </span>
                  </div>
                  <div className="DCC_Left_Address_DeliverTo mb-2">
                    <span className="DCC_Left_Address_Heading">
                      {ShipAddress[0] ? ShipAddress[0].phone : ""}
                    </span>
                    <span className="DCC_Left_Address_Txt ms-1 border-start ps-2">
                      {ShipAddress[0] ? ShipAddress[0].address : ""}
                    </span>

                    <button
                      type="button"
                      className="btn DCC_Left_Address_Change bg-transparent rounded-0 p-0 d-inline ms-2"
                      data-bs-toggle="modal"
                      data-bs-target="#AddressBook"
                    >
                      Change
                    </button>
                  </div>
                  <div className="DCC_Left_Address_DeliverTo mb-2">
                    <span className="DCC_Left_Address_Heading">Payment:</span>
                    <span className="DCC_Left_Address_Txt ms-1">
                      {PaymentMethod == "card"
                        ? "Credit Card"
                        : "Cash On Delivery"}
                    </span>
                    <button
                      type="button"
                      className="btn DCC_Left_Address_Change bg-transparent rounded-0 p-0 d-inline ms-2"
                      data-bs-toggle="modal"
                      data-bs-target="#DeliveryMethodModal"
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="DCC_Left_Checkout_Products_Wrapper w-100 m-0 p-3 bg-white">
              {Cart &&
                Cart.map((item, index) => {
                  let { uid, images, title, stock, quantity, price, discount } =
                    item;
                  totalPriceWithoutDiscount =
                    totalPriceWithoutDiscount + price * quantity;

                  return (
                    <div
                      className="DCC_Left_Checkout_Product_Container"
                      key={index}
                    >
                      <div className="row w-100 m-0">
                        <div className="col-6 ps-0 d-flex align-items-start justify-content-between">
                          <div className="DCC_Checkout_Product_Link_Container">
                            <Link
                              className="DCC_Checkout_Product_Link d-block"
                              to={`/product/${uid}`}
                            >
                              <img
                                src={images[0] || ""}
                                alt="Product"
                                className=""
                              />
                            </Link>
                          </div>
                          <div className="DCC_Checkout_Product_Info_Container">
                            <Link
                              to={`/product/${uid}`}
                              className="DCC_Checkout_Product_Info_Title"
                            >
                              {title}
                            </Link>
                            <span className="DCC_Checkout_Product_Info_Information">
                              <span className="DCC_Checkout_Product_Info_Information_Heading text-muted fst-italic">
                                Style:
                              </span>
                              <span className="DCC_Checkout_Product_Info_Information_Txt fw-normal ms-1">
                                Wifi
                              </span>
                            </span>
                            <span className="DCC_Checkout_Product_Info_Information ms-3">
                              <span className="DCC_Checkout_Product_Info_Information_Heading text-muted fst-italic">
                                Color:
                              </span>
                              <span className="DCC_Checkout_Product_Info_Information_Txt fw-normal ms-1">
                                Wifi
                              </span>
                            </span>
                            <p className="CPLeftStock_Txt mb-0">
                              Only {stock} left in stock - order soon
                            </p>
                          </div>
                        </div>
                        <div className="col-2 DCC_Left_Checkout_Product_Quantity d-flex align-items-center">
                          <span className="DCC_Left_Checkout_Product_Quantity_Heading">
                            Qty:
                          </span>
                          <span className="DCC_Left_Checkout_Product_Quantity_Txt ms-1">
                            {quantity}
                          </span>
                        </div>
                        <div className="col-4 DCC_Left_Checkout_Product_Price d-flex align-items-center justify-content-end">
                          {!discount ? (
                            ""
                          ) : (
                            <div className="Checkout_Product_OldPrice_Discount">
                              <small className="Checkout_Product_OldPrice text-muted text-decoration-line-through">
                                {PriceFormat(price)}
                              </small>
                              <small className="Checkout_Product_Discount text-muted ms-1">
                                -{discount}%
                              </small>
                            </div>
                          )}
                          <div className="Checkout_Product_Price">
                            {discount
                              ? PriceFormat(CalcDiscount(discount, price))
                              : PriceFormat(price)}
                          </div>
                        </div>
                      </div>
                      <hr className="DCCL_Separator" />
                    </div>
                  );
                })}
            </div>
            <div className="DCC_Left_Checkout_Subtotal_Container w-100 m-0 mt-2 p-3 bg-white text-end">
              <div className="DCC_Left_Checkout_Subtotal">
                <span className="DCC_Left_Checkout_Subtotal_items">
                  {Cart.length} Items. Subtotal:
                </span>
                <span className="DCC_Left_Checkout_Subtotal_Price Text_Primary_Color ms-1">
                  {PriceFormat(totalAmount)}
                </span>
              </div>
              <div className="DCC_Left_Checkout_Saved text-muted">
                <span className="DCC_Left_Checkout_Saved_Heading">Saved:</span>
                <span className="DCC_Left_Checkout_Saved_Txt ms-1">
                  {PriceFormat(totalPriceWithoutDiscount - totalAmount)}
                </span>
              </div>
            </div>
          </div>
          <div className="DCC_Right_Container col-lg-4 px-1 align-self-end">
            <div className="DCC_Right_Checkout_Order_Summery_Container w-100 m-0 p-3 bg-white">
              <h4 className="DCC_Order_Summery_Heading">Order Summery</h4>
              <div className="DCC_Order_Summery_items_Total d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Items Total:
                </span>
                <span className="DCC_Order_Summery_Txt">
                  {PriceFormat(totalAmount)}
                </span>
              </div>
              <div className="DCC_Order_Summery_Delivery d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Delivery Fee:
                </span>
                <span className="DCC_Order_Summery_Txt">
                  {PriceFormat(ShippingFee)}
                </span>
              </div>
              <div className="DCC_Order_Summery_Discount d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Total Discount:
                </span>
                <span className="DCC_Order_Summery_Txt">
                  {PriceFormat(totalPriceWithoutDiscount - totalAmount)}
                </span>
              </div>
              <hr />
              <div className="DCC_Order_Summery_Discount d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Total Payment:
                </span>
                <span className="DCC_Order_Summery_Txt">
                  {PriceFormat(ShippingFee + totalAmount)}
                </span>
              </div>

              <button
                className={`DCC_Order_Summery_OrderBtn w-100 text-center mt-2 ${
                  AddressBook[0] && ShipAddress[0]
                    ? ""
                    : "bg-secondary border-secondary"
                }`}
                disabled={AddressBook[0] && ShipAddress[0] ? false : true}
                onClick={() => {
                  OrderConfirmation();
                  // dispatch(clearCart())
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCheckout;
