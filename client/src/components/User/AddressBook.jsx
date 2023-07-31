import { Link } from "react-router-dom";
import "../../Css/User.css";
import "../../Css/Checkout.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  dShippingAddress,
  deleteAddress,
  editAddressState,
} from "../../Store/Slices/orderSlice";
const AddressBook = () => {
  const dispatch = useDispatch();
  const UserAddressBook = useSelector((state) => state.Orders.addressbook);

  return (
    <div className="User_AddressBook_Container">
      <div className="Desktop_AddressBook_Container">
        <div className="User_AddressBook_Header">
          <Link to="#" className="User_Container_Heading">
            Address book
          </Link>
          <Link
            to="#"
            className="User_Container_Right_Btn float-end d-inline-flex align-items-center"
          >
            <button
              className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
              data-bs-toggle="modal"
              data-bs-target="#AddressBookForm"
            >
              <AddRoundedIcon className="UC_Right_Btn_Icon" />
              <span
                className="UC_Right_Btn_Txt"
                data-bs-toggle="modal"
                data-bs-target="#AddressBookForm"
              >
                Add New Address
              </span>
            </button>
          </Link>
        </div>
        <div className="UAC_Container bg-white p-3 mt-2">
          <div className="row m-0 w-100">
            {UserAddressBook.length > 0 &&
              UserAddressBook.map((item, index) => {
                let {
                  name,
                  phone,
                  email,
                  address,
                  aid,
                  shippingaddress,
                  billingaddress,
                } = item;
                return (
                  <div className="col-lg-6 col-md-12 p-1" key={index}>
                    <div className="UAC_AddressBook p-4">
                      <div className="UAC_AddressBook_Header mb-2  d-flex align-items-center justify-content-between">
                        <div className=".MMA_Profile_Item_Title">
                          {name || ""}
                        </div>
                        <div className="MMA_Profile_Item_Btn text-uppercase d-flex align-items-center">
                          <span onClick={() => dispatch(deleteAddress(aid))}>
                            <DeleteOutlineIcon
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            />
                          </span>
                          <button
                            className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
                            data-bs-toggle="modal"
                            data-bs-target="#EditAddressBookForm"
                            onClick={() => dispatch(editAddressState(item))}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="UAC_AddressBook_Info">
                        <div className="MMA_Profile_Item_Title mb-2 d-flex flex-wrap align-items-center">
                          <p className="mb-0">{phone || ""}</p>
                          <p className="mb-0 ms-3">{email || ""}</p>
                        </div>
                        <div className="MMA_Profile_Item_Title mb-4">
                          {address || ""}
                        </div>
                        {shippingaddress ? (
                          <small className="UAC_AddressBook_Info_MainTag defaultAddress">
                            Default Shipping Address
                          </small>
                        ) : (
                          <small
                            className="UAC_AddressBook_Info_MainTag"
                            onClick={() => dispatch(dShippingAddress(aid))}
                          >
                            Set Default Shipping Address
                          </small>
                        )}
                        {billingaddress ? (
                          <small className="UAC_AddressBook_Info_MainTag defaultAddress">
                            Default Billing Address
                          </small>
                        ) : (
                          <small
                            className="UAC_AddressBook_Info_MainTag"
                            onClick={() => dispatch(dBillingAddress(aid))}
                          >
                            Set Default Billing Address
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="Mobile_AddressBook_Container">
        <div className="User_AddressBook_Header container-xl mt-3 d-flex align-items-center justify-content-between">
          <Link to="#" className="User_Container_Heading">
            Address book
          </Link>
          <Link
            to="#"
            className="User_Container_Right_Btn float-end d-inline-flex align-items-center"
          >
            <button
              className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
              data-bs-toggle="modal"
              data-bs-target="#AddressBookForm"
            >
              <AddRoundedIcon className="UC_Right_Btn_Icon" />
              <span className="UC_Right_Btn_Txt">Add New Address</span>
            </button>
          </Link>
        </div>
        <div className="UAC_Container bg-white p-3 mt-2">
          <div
            className="row m-0 w-100 overflow-scroll"
            style={{ paddingBottom: "10rem", height: "100vh" }}
          >
            {UserAddressBook.length == 0
              ? ""
              : UserAddressBook.map((item, index) => {
                  let { name, phone, email, address, aid, shippingaddress } =
                    item;
                  return (
                    <div className="col-lg-6 col-md-12 p-1" key={index}>
                      <div className="UAC_AddressBook p-3">
                        <div className="UAC_AddressBook_Header mb-2  d-flex align-items-center justify-content-between">
                          <div className=".MMA_Profile_Item_Title">
                            {name || ""}
                          </div>
                          <div className="MMA_Profile_Item_Btn text-uppercase d-flex align-items-center">
                            <span onClick={() => dispatch(deleteAddress(aid))}>
                              <DeleteOutlineIcon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                              />
                            </span>
                            <button
                              className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
                              data-bs-toggle="modal"
                              data-bs-target="#EditAddressBookForm"
                              onClick={() => dispatch(editAddressState(item))}
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                        <div className="UAC_AddressBook_Info">
                          <div className="MMA_Profile_Item_Title mb-2 d-flex flex-wrap align-items-center">
                            <p className="mb-0">{phone || ""}</p>
                            <p className="mb-0 ms-3">{email || ""}</p>
                          </div>
                          <div className="MMA_Profile_Item_Title mb-4">
                            {address || ""}
                          </div>
                          {shippingaddress && (
                            <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                              <small className="UAC_AddressBook_Info_MainTag defaultAddress">
                                Default Shipping Address
                              </small>
                              <small className="UAC_AddressBook_Info_SecondaryTag ">
                                Default Billing Address
                              </small>
                            </div>
                          )}
                          {shippingaddress || (
                            <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                              <small
                                className="UAC_AddressBook_Info_MainTag"
                                onClick={() => dispatch(dShippingAddress(aid))}
                              >
                                Set As Default Address
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
