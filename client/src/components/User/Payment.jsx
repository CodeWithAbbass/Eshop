import { Link } from "react-router-dom";
import "../../Css/User.css";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
const Payment = () => {
  // const [payment, setPayment] = useState({
  //   CashOnDelivery: true,
  //   CreditCard: false,
  // });
  const onChangePaymentMethod = (e) => {
    console.log(e.target.checked);
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
          <Link className="UPC_PaymentOption_Link MMA_Profile_Link d-inline-block me-lg-1 mx-1">
            <button className="MMA_Profile_Edit_Btn btn rounded-1 w-100">
              Cash On Delivery
            </button>
          </Link>
          <Link className="UPC_PaymentOption_Link MMA_Profile_Link d-inline-block ms-lg-1 mx-1">
            <button className="MMA_Profile_Edit_Btn btn rounded-1 w-100">
              Credit Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
