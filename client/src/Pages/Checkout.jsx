import { Link, useNavigate } from "react-router-dom";
import "../Css/Checkout.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DesktopCheckout from "../components/Checkout/DesktopCheckout";
import MobileCheckout from "../components/Checkout/MobileCheckout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addNewAddress } from "../Store/Slices/orderSlice";

const Checkout = () => {
  let dispatch = useDispatch();

  const Navigate = useNavigate();
  const CartItems = JSON.parse(localStorage.getItem("items"));
  if (CartItems.length == 0) {
    Navigate("/");
  }

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="Checkout">
      <DesktopCheckout />
      <MobileCheckout />
      <div
        className="modal AddressBookModal fade"
        id="AddressBook"
        tabIndex="-5"
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
                My Address Book
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
            <div className="modal-body AddressBookModal_Body p-3">
              {/* <Link className="User_Returns_No_Rturns_Btn d-block text-center my-3 mb-5">
                Continue Shopping
              </Link> */}
              <div className="Desktop_AddressBook_Container">
                <div className="User_AddressBook_Header">
                  <Link to="#" className="User_Container_Heading">
                    Address book
                  </Link>
                </div>
                <div className="UAC_Container bg-white p-3 mt-2">
                  <div className="row m-0 w-100">
                    <div className="col-lg-6 col-md-12 p-1">
                      <div className="UAC_AddressBook p-2">
                        <div className="UAC_AddressBook_Header mb-2  d-flex align-items-center justify-content-between">
                          <div className=".MMA_Profile_Item_Title">
                            Abbas Ali
                          </div>
                          <Link className="MMA_Profile_Item_Btn text-uppercase">
                            <button
                              className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
                              data-bs-toggle="modal"
                              data-bs-target="#UserMadal"
                            >
                              Edit
                            </button>
                          </Link>
                        </div>
                        <div className="UAC_AddressBook_Info">
                          <div className="MMA_Profile_Item_Title mb-2">
                            (+92) 3016083148
                          </div>
                          <div className="MMA_Profile_Item_Title mb-4">
                            Punjab,Lahore - EME,Block A,Lahore
                          </div>
                          <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                            <small className="UAC_AddressBook_Info_MainTag ">
                              Home
                            </small>
                            <small className="UAC_AddressBook_Info_SecondaryTag ">
                              Default Shipping Address
                            </small>
                            <small className="UAC_AddressBook_Info_SecondaryTag ">
                              Default Billing Address
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Mobile_AddressBook_Container">
                <div className="User_AddressBook_Header container-xl mt-3 p-0 d-flex align-items-center justify-content-between">
                  <Link to="#" className="User_Container_Heading">
                    Address book
                  </Link>
                </div>
                <div className="UAC_Container bg-white p-2 mt-2">
                  <div className="row m-0 w-100">
                    <div className="col-lg-6 col-md-12 p-1">
                      <div className="UAC_AddressBook p-3">
                        <div className="UAC_AddressBook_Header mb-2  d-flex align-items-center justify-content-between">
                          <div className=".MMA_Profile_Item_Title">
                            Abbas Ali
                          </div>
                          <div className="MMA_Profile_Item_Btn">
                            <small className="UAC_AddressBook_Info_MainTag ">
                              Home
                            </small>
                            <Link className="MMA_Profile_Item_Btn text-uppercase">
                              <button
                                type="button"
                                className="btn DCC_Left_Address_Change bg-transparent rounded-0 p-0 d-inline ms-2 float-end"
                                data-bs-toggle="modal"
                                data-bs-target="#UserMadal"
                              >
                                Edit
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="UAC_AddressBook_Info">
                          <div className="MMA_Profile_Item_Title mb-2">
                            (+92) 3016083148
                          </div>
                          <div className="MMA_Profile_Item_Title mb-4">
                            Punjab,Lahore - EME,Block A,Lahore
                          </div>
                          <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                            <small className="UAC_AddressBook_Info_SecondaryTag ">
                              Default Shipping Address
                            </small>
                            <small className="UAC_AddressBook_Info_SecondaryTag ">
                              Default Billing Address
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer w-100 border-0 position-absolute bottom-0 start-0 d-flex align-items-center justify-content-between">
              <button
                type="button"
                className="btn AddNewAddress_Btn rounded-0 p-0 d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#AddressBookForm"
              >
                <AddRoundedIcon className="AddNewAddress_Icon h-100" />
                <span className="AddNewAddress_Txt">
                  Add New Delivery Address
                </span>
              </button>
              <button type="button" className="btn rounded-0 p-0 w-25">
                <Link className="w-100 d-block UserForm_Btn text-center">
                  Save
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Address Form  */}
      <div
        className="modal AddressBookModal fade"
        id="AddressBookForm"
        tabIndex="-5"
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
                New Address
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
            <div className="modal-body AddressBookModal_Body p-3">
              <form action="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control shadow-none rounded-0 DCC_Checkout_Input "
                    placeholder="Enter Your Delivery Address"
                    name="address"
                    id="NewAddress"
                    aria-describedby="button-addon1"
                    // onChange={addNewAddressOnChange}
                  />
                  <button
                    className="btn rounded-0 AddNewAddress_Btn_Input_Btn text-center"
                    type="button"
                    id="button-addon1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      dispatch(
                        addNewAddress(
                          document.querySelector("#NewAddress").value
                        )
                      );
                    }}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
