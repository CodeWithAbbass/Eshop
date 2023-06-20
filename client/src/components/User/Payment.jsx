import { Link } from "react-router-dom";
import "../../Css/User.css";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useDispatch, useSelector } from "react-redux";
import { changeDeliveryMethod } from "../../Store/Slices/orderSlice";
const Payment = () => {
  const dispatch = useDispatch();
  const PaymentMethod = useSelector((state) => state.Orders.paymentmethod);
  const selectPaymentMethod = (method) => {
    dispatch(changeDeliveryMethod(method));
  };
  return (
    <div className="User_Payment_Container">
      <Link to="#" className="User_Container_Heading">
        My Payment Options
      </Link>
      <div className="UPC_Container bg-white p-3 mt-2 w-100">
        <div className="UPC_NoPaymentOption m-auto text-center mb-4">
          <CreditCardIcon className="UPC_NoPaymentOption_Icon" />
          <div className="UPC_NoPaymentOption_Txt">No Payment Options</div>
        </div>
        <div className="UPC_PaymentOption text-center pb-0 pt-md-5">
          <Link
            className="UPC_PaymentOption_Link MMA_Profile_Link d-inline-block me-lg-1 mx-1"
            to="#"
            onClick={() => selectPaymentMethod("cod")}
          >
            <button
              className={`MMA_Profile_Edit_Btn btn rounded-1 w-100 ${
                PaymentMethod == "cod" ? "active" : ""
              }`}
            >
              <span className="">Cash On Delivery</span>
            </button>
          </Link>

          <Link
            className="UPC_PaymentOption_Link MMA_Profile_Link d-inline-block ms-lg-1 mx-1"
            to="#"
            onClick={() => selectPaymentMethod("card")}
          >
            <button
              className={`MMA_Profile_Edit_Btn btn rounded-1 w-100 ${
                PaymentMethod == "card" ? "active" : ""
              }`}
            >
              Credit Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
