import { useEffect } from "react";
import "../../Css/User.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HomeIcon from "@mui/icons-material/Home";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const MobileUser = () => {
  let User = useSelector((state) => state.User.user);
  let OrderDetails = useSelector((state) => state.Orders.orderDetails);
  const location = useLocation();
  const ToggleLeft = (Page) => {
    const LeftSide = document.querySelector(
      ".Mobile_User_Fixed_Page_ContainerLeft"
    );
    LeftSide.classList.toggle("active");
  };
  const ToggleRight = (Page) => {
    const RightSide = document.querySelector(
      ".Mobile_User_Fixed_Page_ContainerRight"
    );
    RightSide.classList.toggle("active");
  };

  useEffect(() => {
    const MMHeader = document.querySelector(".Mobile_MainHeader");
    MMHeader.classList.add("D_None_MainHeader");
    return () => {
      MMHeader.classList.remove("D_None_MainHeader");
    };
  }, []);
  useEffect(() => {
    const URL = location.pathname.split("/");
    const Path = URL[1] + "/" + URL[2];
    if (Object.keys(OrderDetails).length > 0 && Path == "user/orderdetails") {
      const LeftSide = document.querySelector(
        ".Mobile_User_Fixed_Page_ContainerLeft"
      );
      if (!LeftSide.classList.contains("active")) {
        ToggleLeft();
      }
    }
  }, [Object.keys(OrderDetails).length]);
  return (
    <div className="MobileUser">
      <div className="Mobile_User_Header d-flex align-items-center justify-content-between">
        <Link
          className="MUH_Back_Link text-white text-center d-flex align-items-center"
          to="/"
        >
          <KeyboardArrowLeftIcon className="MUH_Back_Icon" />
          <span className="MUH_Header_Title">My Account</span>
        </Link>
        <Link
          className="MUH_Menus_Link text-white text-center"
          onClick={() => ToggleRight()}
        >
          <MoreVertIcon className="MUH_Menus_Icon" />
        </Link>
      </div>
      <div className="Mobile_User_Header_Bottom container-xl">
        <Link className="MUHB_Login_Member_Link">
          <p className="MUHB_Login_Member mb-0">
            Hello, {User.name || "Guest"}
          </p>
        </Link>
      </div>
      <div className="Mobile_User_Nav_Container">
        <ul className="list-group list-group-flush Mobile_User_Nav_Wrapper">
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              to="/user"
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <PersonIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">My Profile</span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              to="/user/address"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <FmdGoodIcon className="Mobile_User_Link_Icon" />
              </span>

              <span className="Mobile_User_Link_Txt ms-2">My Address Book</span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              to="/user/payment"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <CreditCardIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">
                My Payment Options
              </span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              to="/user/wishlist"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <FavoriteBorderIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">Wishlist</span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              to="/user/order"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <Inventory2OutlinedIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">My Orders</span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              to="/user/returns"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <ReplayOutlinedIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">My Returns</span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              to="/user/cancellations"
              onClick={() => ToggleLeft()}
            >
              <span className="Mobile_User_Icon_Container">
                <CancelOutlinedIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">
                My Cancellations
              </span>
            </Link>
          </li>
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              to="/track-order"
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
            >
              <span className="Mobile_User_Icon_Container">
                <TrackChangesRoundedIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">Track My Order</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Mobile_User_Fixed_Page_ContainerLeft bg-white">
        <div className="Mobile_User_Header d-flex align-items-center justify-content-between">
          <Link
            to="#"
            className="MUH_Back_Link text-white text-center d-flex align-items-center"
            onClick={() => ToggleLeft()}
          >
            <KeyboardArrowLeftIcon className="MUH_Back_Icon" />
            <span className="MUH_Header_Title">Back</span>
          </Link>
          <Link
            className="MUH_Menus_Link text-white text-center"
            onClick={() => ToggleRight()}
          >
            <MoreVertIcon className="MUH_Menus_Icon" />
          </Link>
        </div>
        <Outlet />
      </div>
      <div className="Mobile_User_Fixed_Page_ContainerRight bg-white">
        <div className="Mobile_User_Header d-flex align-items-center justify-content-between">
          <Link
            to="#"
            className="MUH_Back_Link text-white text-center d-flex align-items-center"
            onClick={() => ToggleRight()}
          >
            <KeyboardArrowLeftIcon className="MUH_Back_Icon" />
            <span className="MUH_Header_Title">Back</span>
          </Link>
        </div>
        <div className="Mobile_User_Header_Bottom container-xl">
          <Link className="MUHB_Login_Member_Link">
            <p className="MUHB_Login_Member mb-0">Menus</p>
          </Link>
        </div>
        <ul className="list-group list-group-flush Mobile_User_Nav_Wrapper">
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              to="/user"
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              onClick={() => ToggleRight()}
            >
              <span className="Mobile_User_Icon_Container">
                <HomeIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">Home</span>
            </Link>
          </li>
          {User.name ? (
            <li className="list-group-item p-0 Mobile_User_Nav_li">
              <Link
                to="/user"
                className="px-3 py-2 d-flex Mobile_User_Nav_Link"
                onClick={() => ToggleRight()}
              >
                <span className="Mobile_User_Icon_Container">
                  <LogoutIcon className="Mobile_User_Link_Icon" />
                </span>
                <span className="Mobile_User_Link_Txt ms-2">Logout</span>
              </Link>
            </li>
          ) : (
            <div className="border-0">
              <li className="list-group-item p-0 Mobile_User_Nav_li">
                <Link
                  to="/user"
                  className="px-3 py-2 d-flex Mobile_User_Nav_Link"
                  onClick={() => ToggleRight()}
                >
                  <span className="Mobile_User_Icon_Container">
                    <LoginIcon className="Mobile_User_Link_Icon" />
                  </span>
                  <span className="Mobile_User_Link_Txt ms-2">Login</span>
                </Link>
              </li>
              <li className="list-group-item p-0 Mobile_User_Nav_li">
                <Link
                  to="/signup"
                  className="px-3 py-2 d-flex Mobile_User_Nav_Link"
                  onClick={() => ToggleRight()}
                >
                  <span className="Mobile_User_Icon_Container">
                    <LoginIcon className="Mobile_User_Link_Icon" />
                  </span>
                  <span className="Mobile_User_Link_Txt ms-2">Signup</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileUser;
