import { Link } from "react-router-dom";
import "../../Css/Checkout.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
const DesktopCheckout = () => {
  return (
    <div className="DesktopCheckout py-5">
      <div className="Desktop_Checkout_Container container-xl">
        <div className="DC_Content_Container row w-100 m-0 align-items-start flex-wrap-reverse">
          <div className="DCC_Left_Container col-lg-8 px-1 mt-sm-2 mt-lg-0">
            <div className="DCC_Left_Address_Container w-100 m-0 mb-2 px-3 bg-white">
              <button
                type="button"
                className="btn btn AddNewAddress_Btn w-100 h-100 rounded-0 p-0 d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <AddRoundedIcon className="AddNewAddress_Icon h-100" />
                <span className="AddNewAddress_Txt">
                  Add New Delivery Address
                </span>
              </button>
              <div className="DCC_Left_Address_Wrapper py-3">
                <p className="DCC_Left_Address_DeliverTo mb-2">
                  <span className="DCC_Left_Address_Heading">Deliver To:</span>
                  <span className="DCC_Left_Address_Txt ms-1">Abbas Ali</span>
                </p>
                <p className="DCC_Left_Address_DeliverTo mb-2">
                  <span className="DCC_Left_Address_Heading">03016083148 </span>
                  <span className="DCC_Left_Address_Txt ms-1 border-start ps-2">
                    Lahore, Block A, Lahore - EME, Punjab
                  </span>
                  <span className="DCC_Left_Address_Txt">Change</span>
                  <button
                    type="button"
                    className="btn DCC_Left_Address_Change bg-transparent rounded-0 p-0 d-inline ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Change
                  </button>
                </p>
                <p className="DCC_Left_Address_DeliverTo mb-2">
                  <span className="DCC_Left_Address_Heading">Payment:</span>
                  <span className="DCC_Left_Address_Txt ms-1">
                    Cash On Delivery
                  </span>
                </p>
                <p className="DCC_Left_Address_DeliverTo mb-0">
                  <span className="DCC_Left_Address_Heading">Email To:</span>
                  <span className="DCC_Left_Address_Txt ms-1">
                    abbas.ali@chaoscorporated.com
                  </span>
                </p>
              </div>
            </div>
            <div className="DCC_Left_Checkout_Products_Wrapper w-100 m-0 p-3 bg-white">
              <div className="DCC_Left_Checkout_Product_Container">
                <div className="row w-100 m-0">
                  <div className="col-6 ps-0 d-flex align-items-start justify-content-between">
                    <div className="DCC_Checkout_Product_Link_Container">
                      <Link
                        className="DCC_Checkout_Product_Link d-block"
                        to={`/product/2`}
                      >
                        <img
                          src="https://static-01.daraz.pk/p/f0e37ef93e8bfbcb674752fc897b68f1.jpg"
                          alt="Product"
                          className=""
                        />
                      </Link>
                    </div>
                    <div className="DCC_Checkout_Product_Info_Container">
                      <Link
                        to={`/product/2`}
                        className="DCC_Checkout_Product_Info_Title"
                      >
                        LouisWill Men Watch True Three Eyes Wristwatch Quartz
                        Chronograph Watch Stainless Steel Mesh Belt Watch
                        Luxurious Business Fashion Watch Waterproof Watch with
                        Calendar Luminous Pointer Watches for Men
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
                        Only 7 left in stock - order soon
                      </p>
                    </div>
                  </div>
                  <div className="col-2 DCC_Left_Checkout_Product_Quantity d-flex align-items-center">
                    <span className="DCC_Left_Checkout_Product_Quantity_Heading">
                      Qty:
                    </span>
                    <span className="DCC_Left_Checkout_Product_Quantity_Txt ms-1">
                      2
                    </span>
                  </div>
                  <div className="col-4 DCC_Left_Checkout_Product_Price d-flex align-items-center justify-content-end">
                    <div className="Checkout_Product_OldPrice_Discount">
                      <small className="Checkout_Product_OldPrice text-muted text-decoration-line-through">
                        {PriceFormat(459)}
                      </small>
                      <small className="Checkout_Product_Discount text-muted ms-1">
                        -30%
                      </small>
                    </div>
                    <div className="Checkout_Product_Price">
                      {PriceFormat(CalcDiscount(30, 459))}
                    </div>
                  </div>
                </div>
                <hr className="DCCL_Separator" />
              </div>
            </div>
            <div className="DCC_Left_Checkout_Subtotal_Container w-100 m-0 mt-2 p-3 bg-white text-end">
              <div className="DCC_Left_Checkout_Subtotal">
                <span className="DCC_Left_Checkout_Subtotal_items">
                  1 Items. Subtotal:
                </span>
                <span className="DCC_Left_Checkout_Subtotal_Price text-danger ms-1">
                  {PriceFormat(CalcDiscount(30, 459))}
                </span>
              </div>
              <div className="DCC_Left_Checkout_Saved text-muted">
                <span className="DCC_Left_Checkout_Saved_Heading">Saved:</span>
                <span className="DCC_Left_Checkout_Saved_Txt ms-1">
                  {PriceFormat(459 - CalcDiscount(30, 459))}
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
                  {PriceFormat(CalcDiscount(30, 459))}
                </span>
              </div>
              <div className="DCC_Order_Summery_Delivery d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Delivery Fee:
                </span>
                <span className="DCC_Order_Summery_Txt">{PriceFormat(1)}</span>
              </div>
              <div className="DCC_Order_Summery_Discount d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Total Discount:
                </span>
                <span className="DCC_Order_Summery_Txt">
                  {PriceFormat(459 - CalcDiscount(30, 459))}
                </span>
              </div>
              <hr />
              <div className="DCC_Order_Summery_Discount d-flex align-items-center justify-content-between">
                <span className="DCC_Order_Summery_LeftHeading">
                  Total Payment:
                </span>
                <span className="DCC_Order_Summery_Txt">
                  {PriceFormat(1 + CalcDiscount(30, 459))}
                </span>
              </div>
              <button className="DCC_Order_Summery_OrderBtn w-100 text-center mt-2">
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}

        <div
          className="modal fade my-2"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog container m-auto">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Shipping Address:
                </h5>
                <button
                  type="button"
                  className="btn-close rounded-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="DCC_Checkout_Form d-flex align-items-center justify-content-between flex-wrap">
                  <div className="mb-3 DCC_Checkout_Input_Container">
                    <label htmlFor="FullName" className="form-label">
                      FullName
                    </label>
                    <input
                      type="text"
                      id="FullName"
                      className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    />
                  </div>
                  <div className="mb-3 DCC_Checkout_Input_Container">
                    <label htmlFor="Email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                      id="Email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3 DCC_Checkout_Input_Container">
                    <label htmlFor="Number" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                      id="Number"
                      onWheel={function (e) {
                        e.target.blur();
                      }}
                    />
                  </div>
                  <div className="mb-3 DCC_Checkout_Input_Container">
                    <label htmlFor="Area" className="form-label">
                      Area
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                      id="Area"
                    />
                  </div>
                  <div className="mb-3 DCC_Checkout_Input_Container w-100">
                    <label htmlFor="Address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                      id="Address"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary rounded-0"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary rounded-0">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCheckout;
