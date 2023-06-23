import React from "react";
import { Outlet } from "react-router-dom";
import DHeader from "../components/Admin/DHeader";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import EShop from "../assets/EShop.png";
import "../Css/Admin/Admin.css";
const Admin = () => {
  const ToggleSidebar = () => {
    const AHLHIcon = document.querySelectorAll(
      ".Admin_Header_Left_Hamburger_Icon"
    );
    const Logo = document.querySelector(".Admin_Header_Left_Logo_Container");
    Logo.classList.toggle("hide");
    AHLHIcon.forEach((element) => {
      element.classList.toggle("active");
    });
  };
  const OpenSearch = () => {
    const SearchOpen = document.querySelector(
      ".Admin_Header_Left_Search_Container"
    );

    const SearchInput = document.querySelector(
      ".Admin_Header_Left_Search_Input"
    );
    const SearchClose = document.querySelector(
      ".Admin_Header_Left_Close_Icon_Container"
    );
    SearchOpen.classList.toggle("show");
    SearchInput.classList.toggle("show");
    SearchClose.classList.toggle("show");
  };
  return (
    <div className="Admin">
      {/* <DHeader /> */}

      <div className="Admin_Layout_Container">
        <div className="Admin_Header_Container w-100">
          {/* Desktop Header  */}
          <div className="Admin_Header_Desktop h-100 w-100">
            <div className="row m-0 w-100 h-100">
              <div className="Admin_Header_Left_Container col-6 border text-start d-flex align-items-center">
                <div className="Admin_Header_Left_Logo_Menu_Container d-flex align-items-center h-100">
                  <div className="Admin_Header_Left_Logo_Container me-5">
                    <img src={EShop} alt="" className="w-100 h-100" />
                  </div>
                  <div className="Admin_Header_Left_Hamburger_Container">
                    <MenuRoundedIcon
                      className="Admin_Header_Left_Hamburger_Icon active"
                      onClick={ToggleSidebar}
                    />

                    <CloseRoundedIcon
                      className="Admin_Header_Left_Hamburger_Icon"
                      onClick={ToggleSidebar}
                    />
                  </div>
                </div>
                <div className="Admin_Header_Left_Content_Container">
                  <div className="Admin_Header_Left_Search_Container position-relative">
                    <div
                      className="Admin_Header_Left_Search_Icon_Container hide"
                      onClick={OpenSearch}
                    >
                      <SearchRoundedIcon className="Admin_Header_Left_Search_Icon" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by EShop"
                      className="Admin_Header_Left_Search_Input"
                    />
                    <div
                      className="Admin_Header_Left_Close_Icon_Container hide"
                      onClick={OpenSearch}
                    >
                      <CloseRoundedIcon className="Admin_Header_Left_Close_Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Admin_Header_Right_Container col-6 border text-end">
                Right
              </div>
            </div>
          </div>

          {/* Mobile Header  */}
          <div className="Admin_Header_Mobile h-100 w-100">
            <div className="row m-0 w-100 h-100">
              <div className="Admin_Header_Left_Container col-4 border text-start">
                Left
              </div>
              <div className="Admin_Header_Center_Container col-4 border text-center">
                Center
              </div>
              <div className="Admin_Header_Right_Container col-4 border text-end">
                Right
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
