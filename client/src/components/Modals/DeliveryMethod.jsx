import React from "react";
import { changeDeliveryMethod } from "../../Store/Slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DeliveryMethod = () => {
  const dispatch = useDispatch();
  const PaymentMethod = useSelector((state) => state.Orders.paymentmethod);
  const selectPaymentMethod = (method) => {
    dispatch(changeDeliveryMethod(method));
  };
  return (
    <div
      className="modal PaymentMethod fade"
      id="DeliveryMethodModal"
      tabIndex="-4"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-0 position-relative">
          <div className="modal-header AddressBookModal_Header border-0">
            <span
              className="modal-title AddressBook_Title"
              id="exampleModalLongTitle"
            >
              Change Delivery Method
            </span>
            <button
              type="button"
              className="close btn border-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body AddressBookModal_Body p-3 pb-0">
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
      </div>
    </div>
  );
};

export default DeliveryMethod;
