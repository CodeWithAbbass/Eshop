import { useSelector } from "react-redux";
import "../Css/User.css";
import DesktopUser from "../components/User/DesktopUser";
import MobileUser from "../components/User/MobileUser";

const User = () => {
  let user = useSelector((state) => state.User.user);
  return (
    <div className="User">
      <DesktopUser />
      <MobileUser />

      {/* Modal */}
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
                Shipping Address:
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
                    className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                    defaultValue={user ? user.name : ""}
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
                    aria-describedby="emailHelp"
                    defaultValue={user ? user.email : ""}
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
                    defaultValue={user ? user.phone : ""}
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
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary rounded-0">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
