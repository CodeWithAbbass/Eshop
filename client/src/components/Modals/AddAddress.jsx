import { useState } from "react";
import { addNewAddress } from "../../Store/Slices/orderSlice";
import { useDispatch } from "react-redux";

const AddAddress = () => {
  const dispatch = useDispatch();
  const [addNewLocation, setNewLocation] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const addNewAddressOnChange = (e) => {
    const { name, value } = e.target;
    setNewLocation({ ...addNewLocation, [name]: value });
  };
  return (
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
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                  id="email"
                  name="email"
                  value={addNewLocation.email || ""}
                  onChange={addNewAddressOnChange}
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
              <div className="mb-3 w-100">
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
  );
};

export default AddAddress;
