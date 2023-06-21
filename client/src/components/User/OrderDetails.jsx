import { Link, useParams } from "react-router-dom";
import "../../Css/User.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment/moment";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PriceFormat from "../../helpers/PriceFormat";
import { cancelOrder, getOrderDetails } from "../../Store/Slices/orderSlice";
import JustForYou from "../Home/JustForYou";

const OrderDetails = () => {
  const { id } = useParams();
  let dispatch = useDispatch();
  const OrderInfo = useSelector((state) => state.Orders.orderDetails);
  const ShippingFee = useSelector((state) => state.Cart.shippingFee);

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, []);

  if (OrderInfo.length == 0) {
    return <div className="User_OrderDetails">Order Not Found</div>;
  }
  let totalBill = 0;
  let {
    orderid,
    status,
    date,
    products,
    deliverto,
    phone,
    shipaddress,
    billaddress,
  } = OrderInfo[0];
  products.forEach((element) => {
    totalBill = totalBill + element.price * element.quantity;
  });

  return (
    <div className="User_OrderDetails">
      <Link to="#" className="User_Container_Heading">
        Order Details
      </Link>
      <div className="User_OrderDetails_OrderHeader_Container bg-white p-2 my-3 d-flex align-items-center justify-content-between">
        <div className="User_OrderDetails_OrderHeader_Left">
          <div className="UOC_Orders_Header_OrderId">
            <span>Order</span>
            <Link
              className="UOC_Orders_Header_Order_Number ms-1"
              to={`/user/orderdetails/${orderid}`}
            >
              #{orderid.length > 20 ? orderid.slice(0, 20) : orderid || ""}
            </Link>
          </div>
          <div className="UOC_Orders_Header_Requested mb-0">
            <span>Placed On</span>
            <span className="ms-1">
              {moment.unix(date / 1000).format("DD MMM  YYYY HH:mm:ss")}
            </span>
          </div>
        </div>
        <div className="User_OrderDetails_OrderHeader_Right">
          <span className="text-secondary">Total:</span>
          <span className="ms-2">{PriceFormat(totalBill)}</span>
        </div>
      </div>
      <div className="User_OrderDetails_OrderBody_Container bg-white">
        <div className="User_OrderDetails_Header border-bottom p-2 d-flex align-items-center justify-content-between">
          <div className="User_OrderDetails_Header_Left">
            <div className="m-0 User_OrderDetails_Header_Package d-flex align-items-center justify-content-start">
              <RedeemIcon />
              <span className="ms-2">Package 1</span>
            </div>
            <div className="m-0 User_OrderDetails_Header_SoldBy">
              <span>Sold by</span>
              <Link className="UOC_Orders_Header_Order_Number ms-1">
                E-Shop
              </Link>
            </div>
          </div>
          <div className="User_OrderDetails_Header_Right">
            <button
              className="btn rounded-1 text-white p-2 px-3 bg-light text-muted border-0 UODOBP_CancelBtn"
              disabled={
                status == "cancelled" ||
                status == "delivered" ||
                status == "shipped" ||
                status == "return"
                  ? true
                  : false
              }
              onClick={() => dispatch(cancelOrder(orderid))}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="User_OrderDetails_OrderBody p-2">
          <div className="User_OrderDetails_OrderBody_Header d-flex align-items-center justify-content-between">
            <span className="User_OrderDetails_OrderBody_Header_GetBy">
              Get by Wed 21 Jun - Sat 24 Jun
            </span>
            <span className="UOC_Orders_txt User_OrderDetails_OrderBody_Header_Right">
              <LocalShippingOutlinedIcon />
              <span className="ms-2">Standard Delivery </span>
            </span>
          </div>
          <div className="User_OrderDetails_OrderBody_Progress d-flex my-3 mt-5">
            <div className="OrderBody_ProgressInfo_Step_Item">
              <div className="OrderBody_ProgressInfo_Step_Item_Tail Item_First_Tail">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Tail_Underlay ${
                    status == "pending" ? "" : "active"
                  }`}
                ></div>
              </div>
              <div className="OrderBody_ProgressInfo_Step_Item_Container">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Node ${
                    status == "pending" ? "active" : "complete"
                  }`}
                >
                  <span className="OrderBody_ProgressInfo_Step_Item_Node_Dot"></span>
                </div>
                <div className="OrderBody_ProgressInfo_Step_Item_Txt">
                  Pending
                </div>
              </div>
            </div>
            <div className="OrderBody_ProgressInfo_Step_Item">
              <div className="OrderBody_ProgressInfo_Step_Item_Tail Item_First_Tail">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Tail_Underlay ${
                    status == "processing" || status == "pending"
                      ? ""
                      : "active"
                  }`}
                ></div>
              </div>
              <div className="OrderBody_ProgressInfo_Step_Item_Container">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Node ${
                    status == "processing"
                      ? "active"
                      : status == "shipped" ||
                        status == "delivered" ||
                        status == "cancelled" ||
                        status == "returned"
                      ? "complete"
                      : ""
                  }`}
                >
                  <span className="OrderBody_ProgressInfo_Step_Item_Node_Dot"></span>
                </div>
                <div className="OrderBody_ProgressInfo_Step_Item_Txt">
                  Processing
                </div>
              </div>
            </div>
            <div className="OrderBody_ProgressInfo_Step_Item">
              <div className="OrderBody_ProgressInfo_Step_Item_Tail">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Tail_Underlay ${
                    status == "pending" ||
                    status == "processing" ||
                    status == "shipped"
                      ? "active"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="OrderBody_ProgressInfo_Step_Item_Container">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Node ${
                    status == "shipped"
                      ? "active"
                      : status == "delivered" ||
                        status == "cancelled" ||
                        status == "returned"
                      ? "complete"
                      : ""
                  }`}
                >
                  <span className="OrderBody_ProgressInfo_Step_Item_Node_Dot"></span>
                </div>
                <div className="OrderBody_ProgressInfo_Step_Item_Txt">
                  Shipped
                </div>
              </div>
            </div>
            <div className="OrderBody_ProgressInfo_Step_Item">
              <div className="OrderBody_ProgressInfo_Step_Item_Tail Item_Last_Tail">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Tail_Underlay ${
                    status == "delivered" ||
                    status == "cancelled" ||
                    status == "returned"
                      ? "active"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="OrderBody_ProgressInfo_Step_Item_Container">
                <div
                  className={`OrderBody_ProgressInfo_Step_Item_Node ${
                    status == "delivered" ||
                    status == "cancelled" ||
                    status == "returned"
                      ? "active"
                      : ""
                  }`}
                >
                  <span className="OrderBody_ProgressInfo_Step_Item_Node_Dot"></span>
                </div>
                <div className="OrderBody_ProgressInfo_Step_Item_Txt text-capitalize">
                  {status == "pending" ||
                  status == "processing" ||
                  status == "shipped"
                    ? "Delivered"
                    : status}
                </div>
              </div>
            </div>
          </div>
          <div className="User_OrderDetails_OrderBody_ProductInfo p-3">
            <div className="user_OrderDetails_OrderBody_ProductInfo_Desktop">
              {products.length > 0 &&
                products.map((item, index) => {
                  let { uid, title, discount, price, quantity, images } = item;

                  return (
                    <div
                      className="row m-0 my-3 py-3 w-100 border-bottom"
                      key={index}
                    >
                      <div className="col-1 text-center">
                        <img src={images[0] || ""} alt="" />
                      </div>
                      <div className="col-5 UOC_Orders_txt">{title}</div>
                      <div className="col-3 UOC_Orders_txt text-end p-0">
                        {price}
                      </div>
                      <div className="col-3 UODOBP_Quantity text-end">
                        <span className="UODOBP_Quantity_Heading">Qty:</span>
                        <span className="ms-1 text-dark">{quantity}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="user_OrderDetails_OrderBody_ProductInfo_Mobile">
              {products.length > 0 &&
                products.map((item, index) => {
                  let { uid, title, discount, price, quantity, images } = item;

                  return (
                    <div
                      className="row m-0 my-3 py-3 w-100 border-bottom"
                      key={index}
                    >
                      <div className="col-2 text-center">
                        <img
                          src={images[0] || ""}
                          alt=""
                          className=""
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="col-6 UOC_Orders_txt">{title}</div>
                      <div className="col-4 UODOBP_Quantity text-end">
                        <span className="UODOBP_Quantity_Heading">Qty:</span>
                        <span className="ms-1 text-dark">{quantity}</span>
                        <p className="text-black mb-0 mt-2">{price}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="User_OrderDetails_OrderFooter my-3">
        <div className="User_OrderDetails_OrderFooter_AddressInfo">
          <div className="row m-0 w-100 justify-content-between">
            <div className="col-12 col-md-6 p-0 pe-md-2 ">
              <div className="UODOBA_ShipAddress_Container bg-white p-3">
                <p className="UODOBA_AddressInfo_Heading mb-2">
                  Shipping Address
                </p>
                <p className="UODOBA_AddressInfo_Txt UODOBA_AddressInfo_Username mb-0">
                  {deliverto || ""}
                </p>
                <p className="UODOBA_AddressInfo_Txt UODOBA_AddressInfo_Address">
                  {shipaddress || ""}
                </p>
                <p className="UODOBA_AddressInfo_Txt UODOBA_AddressInfo_Phone mb-0">
                  {phone || ""}
                </p>
              </div>
              <div className="UODOBA_BillAddress_Container bg-white p-3 mt-md-3">
                <p className="UODOBA_AddressInfo_Heading mb-2">Bill Address</p>
                <p className="UODOBA_AddressInfo_Txt UODOBA_AddressInfo_Username mb-0">
                  {deliverto || ""}
                </p>
                <p className="UODOBA_AddressInfo_Txt UODOBA_AddressInfo_Address">
                  {billaddress || ""}
                </p>
                <p className="UODOBA_AddressInfo_Txt UODOBA_AddressInfo_Phone mb-0">
                  {phone || ""}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0 ps-md-2  ">
              <div className="UODOBA_Summery_Container bg-white p-3">
                <p className="UODOBA_Summery_Heading mb-2">Total Summery</p>
                <div className="UODOBA_Summery_Txt UODOBA_Summery_Subtotal d-flex align-items-center justify-content-between ">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0">{PriceFormat(totalBill)}</p>
                </div>
                <div className="UODOBA_Summery_Txt UODOBA_Summery_ShippingFee d-flex align-items-center justify-content-between border-bottom pb-3">
                  <p className="mb-0">Delivery Fee</p>
                  <p className="mb-0">{PriceFormat(ShippingFee)}</p>
                </div>
                <div className="UODOBA_Summery_Txt UODOBA_Summery_Total d-flex align-items-center justify-content-between my-3">
                  <p className="mb-0">Total</p>
                  <p className="mb-0">{PriceFormat(totalBill + ShippingFee)}</p>
                </div>
                <p className="UODOBA_Summery_Txt mb-0">
                  Paid By Cash On Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="User_OrderDetails_Just_For_You">
        <JustForYou />
      </div>
    </div>
  );
};

export default OrderDetails;
