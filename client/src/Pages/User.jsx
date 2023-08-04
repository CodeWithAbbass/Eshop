import { useDispatch, useSelector } from "react-redux";
import "../Css/User.css";
import DesktopUser from "../components/User/DesktopUser";
import MobileUser from "../components/User/MobileUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateUser } from "../Store/Slices/userSlice";

const User = () => {
  const dispatch = useDispatch();
  let User = useSelector((state) => state.User.user);
  
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    address: "",
    role: "",
  });
  const UpdateUserOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  useEffect(() => {
    setCredentials({
      name: User.name,
      email: User.email,
      phone: User.phone,
      area: "",
      address: "",
      role: "",
    });
    return () => {};
  }, [User]);
  return (
    <div className="User">
      <DesktopUser />
      <MobileUser />

      {/* Edit Profile Modal */}
      <div
        className="modal fade my-2"
        id="UserMadal"
        tabIndex="4"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm container m-auto">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {User.name + "'s" + " Profile" || "Account"}:
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
                    name="name"
                    className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    value={credentials.name || ""}
                    onChange={UpdateUserOnChange}
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
                    name="name"
                    aria-describedby="emailHelp"
                    readOnly
                    value={credentials.email || ""}
                    onChange={UpdateUserOnChange}
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
                    readOnly
                    value={credentials.phone || ""}
                    onChange={UpdateUserOnChange}
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
                    name="area"
                    value={credentials.area || ""}
                    onChange={UpdateUserOnChange}
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
                    name="address"
                    value={credentials.address || ""}
                    onChange={UpdateUserOnChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn rounded-0 p-0 w-25"
                data-bs-dismiss="modal"
              >
                <Link className="UserForm_Btn w-100 d-block text-center bg-secondary">
                  Close
                </Link>
              </button>
              <button
                type="button"
                className="btn rounded-0 p-0 w-25"
                onClick={() => dispatch(updateUser(credentials))}
              >
                <Link className="w-100 d-block UserForm_Btn text-center">
                  Save
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
