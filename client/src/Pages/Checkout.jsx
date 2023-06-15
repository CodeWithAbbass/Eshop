import { Link, useNavigate } from "react-router-dom";
import "../Css/Checkout.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DesktopCheckout from "../components/Checkout/DesktopCheckout";
import MobileCheckout from "../components/Checkout/MobileCheckout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addNewAddress,
  defaultAddress,
  deleteAddress,
  editAddress,
  getAddress,
} from "../Store/Slices/orderSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Checkout = () => {
  let dispatch = useDispatch();
  // const Navigate = useNavigate();
  // const CartItems = JSON.parse(localStorage.getItem("items"));
  // if (CartItems.length == 0) {
  //   Navigate("/");
  // }
  const AddressBook = useSelector((state) => state.Orders.addressbook);
  const User = useSelector((state) => state.User.user);

  const [changeDefault, setChangeDefault] = useState(false);
  const [addNewLocation, setNewLocation] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [changeAddress, setChangeAddress] = useState({
    name: "",
    phone: "",
    address: "",
  });
  // let EditAddressUid = "";
  const addNewAddressOnChange = (e) => {
    const { name, value } = e.target;
    setNewLocation({ ...addNewLocation, [name]: value });
  };
  const editAddressOnChange = (e) => {
    let { name, value } = e.target;
    setChangeAddress({ ...changeAddress, [name]: value });
  };

  useEffect(() => {
    dispatch(getAddress());
    return () => {};
  }, []);
  return (
    <div className="Checkout">
      <DesktopCheckout />
      <MobileCheckout />

      {/* Address Book  */}
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
              {/* <div className="text-center">
                <span
                  className="modal-title AddressBook_Title"
                  id="exampleModalLongTitle"
                >
                  Address book is empty
                </span>
                <Link className="User_Returns_No_Rturns_Btn d-block text-center my-3 mb-5">
                  Continue Shopping
                </Link>
              </div> */}
              <div className="Checkout_AddressBook_Container">
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
                            {User.name}
                          </div>
                          <Link className="MMA_Profile_Item_Btn text-uppercase d-flex align-items-center">
                            <DeleteOutlineIcon
                              style={{ width: "20px", height: "20px" }}
                              onClick={() => dispatch(deleteAddress(1))}
                            />
                            <button
                              className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
                              data-bs-toggle="modal"
                              data-bs-target="#EditAddressBookForm"
                            >
                              Edit
                            </button>
                          </Link>
                        </div>
                        <div className="UAC_AddressBook_Info">
                          <div className="MMA_Profile_Item_Title mb-2">
                            <span>{User.phone}</span>
                            <span className="ms-3">{User.email}</span>
                          </div>

                          <div className="MMA_Profile_Item_Title mb-4"></div>
                          {/* <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                            <small className="UAC_AddressBook_Info_MainTag ">
                              Default Shipping Address
                            </small>
                            <small className="UAC_AddressBook_Info_SecondaryTag ">
                              Default Billing Address
                            </small>
                          </div> */}
                          <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                            <small
                              className="UAC_AddressBook_Info_MainTag defaultAddress"
                              onClick={() => dispatch(defaultAddress(1))}
                            >
                              Set As Default Address
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
              <button
                type="button"
                className="btn rounded-0 p-0 w-25"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Link className="w-100 d-block UserForm_Btn text-center">
                  Save
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Address */}
      <div
        className="modal AddressBookModal fade"
        id="EditAddressBookForm"
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
                Edit Address
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
              <form className="DCC_Checkout_Form d-flex align-items-center justify-content-between flex-wrap">
                <div className="mb-3 DCC_Checkout_Input_Container">
                  <label htmlFor="FullName" className="form-label">
                    FullName
                  </label>
                  <input
                    type="text"
                    id="FullName"
                    name="name"
                    className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    value={changeAddress.name || ""}
                    onChange={editAddressOnChange}
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
                    name="phone"
                    value={changeAddress.phone || ""}
                    onChange={editAddressOnChange}
                    onWheel={function (e) {
                      e.target.blur();
                    }}
                  />
                </div>
                <div className="mb-3 DCC_Checkout_Input_Container">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    id="Address"
                    name="address"
                    value={changeAddress.address || ""}
                    onChange={editAddressOnChange}
                  />
                </div>
                <div className="mb-3 DCC_Checkout_Input_Container">
                  <label className="form-label"></label>
                  <button
                    className="btn rounded-0 AddNewAddress_Btn_Input_Btn text-center w-100"
                    type="button"
                    id="AddNewAddress_Button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => dispatch(editAddress(changeAddress))}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Address Form  */}
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
            <div className="modal-body AddressBookModal_Body p-3 pb-0">
              <form className="DCC_Checkout_Form d-flex align-items-center justify-content-between flex-wrap">
                <div className="mb-3 DCC_Checkout_Input_Container">
                  <label htmlFor="FullName" className="form-label">
                    FullName
                  </label>
                  <input
                    type="text"
                    id="FullName"
                    name="name"
                    className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    value={addNewLocation.name || ""}
                    onChange={addNewAddressOnChange}
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
                    name="phone"
                    value={addNewLocation.phone || ""}
                    onChange={addNewAddressOnChange}
                    onWheel={function (e) {
                      e.target.blur();
                    }}
                  />
                </div>
                <div className="mb-3 DCC_Checkout_Input_Container">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    id="Address"
                    name="address"
                    value={addNewLocation.address || ""}
                    onChange={addNewAddressOnChange}
                  />
                </div>
                <div className="mb-3 DCC_Checkout_Input_Container">
                  <label className="form-label"></label>
                  <button
                    className="btn rounded-0 AddNewAddress_Btn_Input_Btn text-center w-100"
                    type="button"
                    id="AddNewAddress_Button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => dispatch(addNewAddress(addNewLocation))}
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
