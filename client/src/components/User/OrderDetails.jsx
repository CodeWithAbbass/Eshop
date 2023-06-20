import { Link, useParams } from "react-router-dom";
import "../../Css/User.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment/moment";
import PriceFormat from "../../helpers/PriceFormat";
const OrderDetails = () => {
  const { id } = useParams();
  let totalBill = 0;
  const OrderInfo = useSelector((state) =>
    state.Orders.orders.filter((item) => item.orderid == id)
  );
  if (OrderInfo.length == 0) {
    return <div className="User_OrderDetails">Order Not Found</div>;
  }
  let { orderid, status, date, products } = OrderInfo[0];
  products.forEach((element) => {
    totalBill = totalBill + element.price * element.quantity;
  });
  console.log("Order Details Page=====", totalBill);
  return (
    <div className="User_OrderDetails">
      <Link to="#" className="User_Container_Heading">
        Order Details
      </Link>
      <div className="User_OrderDetails_OrderHeader bg-white p-2 my-3 d-flex align-items-center justify-content-between">
        <div className="User_OrderDetails_OrderHeader_Left">
          <div className="UOC_Orders_Header_Requested_Heading mb-0">
            <span>Requested on </span>
            <span>
              {moment.unix(date / 1000).format("ddd MMM DD YYYY HH:mm:ss")}
            </span>
          </div>
          <div className="UOC_Orders_Header_Order">
            <span>Order</span>
            <Link
              className="UOC_Orders_Header_Order_Number ms-1"
              to={`/user/orderdetails/${orderid}`}
            >
              #{orderid || ""}
            </Link>
          </div>
        </div>
        <div className="User_OrderDetails_OrderHeader_Right">
          <span>Total</span>
          <span>{PriceFormat(totalBill)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
