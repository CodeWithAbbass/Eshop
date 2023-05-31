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
import { Link, Outlet } from "react-router-dom";
const MobileUser = () => {
  const TogglePage = (Page) => {
    const SidePage = document.querySelector(
      ".Mobile_User_Fixed_Page_Container"
    );
    SidePage.classList.toggle("active");
  };
  useEffect(() => {
    document.querySelector(".Mobile_MainHeader").style.display = "none";
    return () => {
      document.querySelector(".Mobile_MainHeader").style.display = "block";
    };
  }, []);
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
        <Link className="MUH_Menus_Link text-white text-center">
          <MoreVertIcon className="MUH_Menus_Icon" />
        </Link>
      </div>
      <div className="Mobile_User_Header_Bottom container-xl">
        <Link className="MUHB_Login_Member_Link">
          <p className="MUHB_Login_Member mb-0"> Hello, abbas.ali</p>
        </Link>
      </div>

      <div className="Mobile_User_Nav_Container">
        <ul className="list-group list-group-flush Mobile_User_Nav_Wrapper">
          <li className="list-group-item p-0 Mobile_User_Nav_li">
            <Link
              to="/user"
              className="px-3 py-2 d-flex Mobile_User_Nav_Link"
              onClick={() => TogglePage("Profile")}
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
              onClick={() => TogglePage()}
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
              onClick={() => TogglePage()}
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
              onClick={() => TogglePage()}
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
              onClick={() => TogglePage()}
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
              onClick={() => TogglePage()}
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
              onClick={() => TogglePage()}
            >
              <span className="Mobile_User_Icon_Container">
                <CancelOutlinedIcon className="Mobile_User_Link_Icon" />
              </span>
              <span className="Mobile_User_Link_Txt ms-2">
                My Cancellations
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="Mobile_User_Fixed_Page_Container bg-white">
        <div className="Mobile_User_Header d-flex align-items-center justify-content-between">
          <Link
            to="/user"
            className="MUH_Back_Link text-white text-center d-flex align-items-center"
            onClick={() => TogglePage()}
          >
            <KeyboardArrowLeftIcon className="MUH_Back_Icon" />
            <span className="MUH_Header_Title">Back</span>
          </Link>
          <Link className="MUH_Menus_Link text-white text-center">
            <MoreVertIcon className="MUH_Menus_Icon" />
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MobileUser;
