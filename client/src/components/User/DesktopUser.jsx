import { useEffect } from "react";
import "../../Css/User.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const DesktopUser = () => {
  const location = useLocation();

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="DesktopUser">
      <div className="container-xl">
        <div className="row m-0 w-100 py-5">
          <div className="col-lg-2 col-sm-3">
            <div className="UserLink_Container mb-3 pt-1">
              <Link className="UserLink_Heading active" to="/user">
                Manage My Account
              </Link>
              <ul className="list-group rounded-0">
                <li className="list-group-item p-0 bg-transparent border-0">
                  <Link
                    className={`UserLink h-100 w-100 d-block px-3 py-1 fw-normal ${
                      location.pathname == "/user" ? "active" : ""
                    }`}
                    to="/user"
                  >
                    My Profile
                  </Link>
                </li>
                <li className="list-group-item p-0 bg-transparent border-0">
                  <Link
                    className={`UserLink h-100 w-100 d-block px-3 py-1 fw-normal ${
                      location.pathname == "/user/address" ? "active" : ""
                    }`}
                    to="/user/address"
                  >
                    Address Book
                  </Link>
                </li>
                <li className="list-group-item p-0 bg-transparent border-0">
                  <Link
                    className={`UserLink h-100 w-100 d-block px-3 py-1 fw-normal ${
                      location.pathname == "/user/payment" ? "active" : ""
                    }`}
                    to="/user/payment"
                  >
                    My Payment Options
                  </Link>
                </li>
                <li className="list-group-item p-0 bg-transparent border-0">
                  <Link
                    className={`UserLink h-100 w-100 d-block px-3 py-1 fw-normal ${
                      location.pathname == "/user/wishlist" ? "active" : ""
                    }`}
                    to="/user/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="UserLink_Container">
              <Link
                className={`UserLink_Heading ${
                  location.pathname == "/user/order" ? "active" : ""
                }`}
                to="/user/order"
              >
                My Orders
              </Link>
              <ul className="list-group rounded-0">
                <li className="list-group-item p-0 bg-transparent border-0">
                  <Link
                    className={`UserLink h-100 w-100 d-block px-3 py-1 fw-normal ${
                      location.pathname == "/user/returns" ? "active" : ""
                    }`}
                    to="/user/returns"
                  >
                    My Returns
                  </Link>
                </li>
                <li className="list-group-item p-0 bg-transparent border-0">
                  <Link
                    className={`UserLink h-100 w-100 d-block px-3 py-1 fw-normal ${
                      location.pathname == "/user/cancellations" ? "active" : ""
                    }`}
                    to="/user/cancellations"
                  >
                    My Cancellations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10 col-sm-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopUser;
