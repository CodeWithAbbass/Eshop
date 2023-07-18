import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import DHeader from "../components/Admin/DHeader";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RocketIcon from "@mui/icons-material/Rocket";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EShop from "../assets/EShop.png";
import "../Css/Admin/Admin.css";
const Admin = () => {
  const location = useLocation();
  const ToggleSidebar = () => {
    const AHLHIcon = document.querySelectorAll(
      ".Admin_Header_Left_Hamburger_Icon"
    );
    const Menu = document.querySelector(
      ".Admin_Header_Left_Logo_Menu_Container"
    );
    const Sidebar = document.querySelector(".Admin_LeftSidebar");
    const Admin_Sidebar_Layout = document.querySelector(
      ".Admin_Sidebar_Layout"
    );
    const OpenSidebarContent = document.querySelector(
      ".Admin_Sidebar_Container"
    );
    const Logo = document.querySelector(".Admin_Header_Left_Logo_Container");
    Logo.classList.toggle("hide");
    AHLHIcon.forEach((element) => {
      element.classList.toggle("active");
    });
    Menu.classList.toggle("active");
    Sidebar.classList.toggle("active");
    Admin_Sidebar_Layout.classList.toggle("active");
    OpenSidebarContent.classList.toggle("close");
  };
  const OpenSearch = () => {
    const SearchOpen = document.querySelectorAll(
      ".Admin_Header_Left_Search_Container"
    );

    const SearchInput = document.querySelectorAll(
      ".Admin_Header_Left_Search_Input"
    );
    const SearchClose = document.querySelectorAll(
      ".Admin_Header_Left_Close_Icon_Container"
    );
    // SearchOpen.classList.add("show");
    // SearchInput.classList.add("show");
    // SearchClose.classList.add("show");
    for (let i = 0; i < SearchOpen.length; i++) {
      SearchOpen[i].classList.add("show");
      SearchInput[i].classList.add("show");
      SearchClose[i].classList.add("show");
    }
  };
  const CloseSearch = () => {
    const SearchOpen = document.querySelectorAll(
      ".Admin_Header_Left_Search_Container"
    );

    const SearchInput = document.querySelectorAll(
      ".Admin_Header_Left_Search_Input"
    );
    const SearchClose = document.querySelectorAll(
      ".Admin_Header_Left_Close_Icon_Container"
    );
    // SearchOpen.classList.remove("show");
    // SearchInput.classList.remove("show");
    // SearchClose.classList.remove("show");
    for (let i = 0; i < SearchOpen.length; i++) {
      SearchOpen[i].classList.remove("show");
      SearchInput[i].classList.remove("show");
      SearchClose[i].classList.remove("show");
    }
  };
  const ToggleRightMenu = () => {
    const RightMenu = document.querySelector(".Admin_RightSidebar");
    const AHLHIcon = document.querySelectorAll(
      ".Admin_Header_Right_Hamburger_Icon"
    );
    RightMenu.classList.toggle("active");
    AHLHIcon.forEach((element) => {
      element.classList.toggle("active");
    });
  };
  const ToggleTopDownMenu = () => {
    const Menu = document.querySelector(".Admin_TopDown_Mobile_Header");
    Menu.classList.toggle("active");
  };
  const MenuList = [
    {
      icon: RocketIcon,
      category: "Products",
      subcategories: [
        { subheading: "All Products", link: "products/allproducts" },
        { subheading: "Add Product", link: "products/addproduct" },
        { subheading: "Update Product", link: "products/updateproduct" },
        { subheading: "Delete Product", link: "products/deleteproduct" },
      ],
    },
    {
      icon: ShoppingBagOutlinedIcon,
      category: "Orders",
      subcategories: [
        { subheading: "All Orders", link: "orders/allorders" },
        { subheading: "Add Order", link: "orders/addorder" },
        { subheading: "Delete Order", link: "orders/deleteorder" },
        { subheading: "Update Status", link: "orders/status" },
      ],
    },
    {
      icon: LayersIcon,
      category: "Pages",
      subcategories: [
        { subheading: "Register", link: "#" },
        { subheading: "Login", link: "#" },
        { subheading: "Forgot Password", link: "#" },
      ],
    },
  ];

  useEffect(() => {
    const Header = document.querySelector(".Header");
    const Footer = document.querySelector(".Footer");
    if (location.pathname.split("/")[1] == "admin") {
      Header.classList.add("d-none");
      Footer.classList.add("d-none");
    } else {
      Header.classList.remove("d-none");
      Footer.classList.remove("d-none");
    }

    return () => {
      Header.classList.remove("d-none");
      Footer.classList.remove("d-none");
    };
  }, [location]);
  return (
    <div className="Admin">
      {/* <DHeader /> */}
      <div className="Admin_Layout_Container">
        <div className="Admin_Header_Container w-100">
          {/* Desktop Header  */}
          <div className="Admin_Header_Desktop h-100 w-100">
            <div className="row m-0 w-100 h-100">
              <div className="Admin_Header_Left_Container col-6 text-start d-flex align-items-center">
                <div className="Admin_Header_Left_Logo_Menu_Container active d-flex align-items-center h-100 justify-content-between">
                  <div className="Admin_Header_Left_Logo_Container me-5 hide">
                    <img src={EShop} alt="" className="w-100 h-100" />
                  </div>
                  <div className="Admin_Header_Left_Hamburger_Container text-center">
                    <CloseRoundedIcon
                      className="Admin_Header_Left_Hamburger_Icon"
                      onClick={ToggleSidebar}
                    />

                    <MenuRoundedIcon
                      className="Admin_Header_Left_Hamburger_Icon active"
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
                      id="DesktopSearch"
                      name="DesktopSearch"
                      placeholder="Search by EShop"
                      className="Admin_Header_Left_Search_Input ps-3 pe-5"
                    />
                    <div
                      className="Admin_Header_Left_Close_Icon_Container"
                      onClick={CloseSearch}
                    >
                      <CloseRoundedIcon className="Admin_Header_Left_Close_Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Admin_Header_Right_Container col-6 text-end d-flex align-items-center justify-content-end">
                <div className="Admin_Desktop_Right_Header_Container h-100 d-flex align-items-center justify-content-end">
                  <div className="Admin_TopDown_Desktop_Header_Item ms-3">
                    <div className="Admin_TopDown_Mobile_Header_Item_Btn position-relative text-center">
                      <span className="Admin_Header_Right_Header_Item_Bg position-absolute top-0 start-0 bg-primary"></span>
                      <AppsRoundedIcon className="text-primary" />
                    </div>
                  </div>

                  <div className="Admin_TopDown_Desktop_Header_Item ms-3">
                    <div className="Admin_TopDown_Mobile_Header_Item_Btn position-relative text-center">
                      <span className="Admin_Header_Right_Header_Item_Bg position-absolute top-0 start-0 bg-danger"></span>
                      <NotificationsIcon className="text-danger" />
                    </div>
                  </div>
                  <div className="Admin_Desktop_Right_Header_Item ms-3 d-flex align-items-center">
                    <div className="Admin_Desktop_Right_Header_Item_Btn position-relative text-center ">
                      <div>
                        <span className="Admin_Header_Right_Header_Item_Bg position-absolute top-0 start-0 bg-secondary"></span>
                        <AccountCircleIcon className="text-secondary" />
                      </div>
                    </div>
                    <div className="Admin_Desktop_Right_Header_Item_Txt text-start ms-3">
                      <p className="m-0 fw-semibold text-secondary lh-1">
                        Alina Mclourd
                      </p>
                      <small className="m-0 text-muted fw-light lh-1">
                        VP People Manager
                      </small>
                    </div>
                  </div>
                </div>
                <div className="Admin_Header_Right_Hamburger_Container text-center position-relative d-flex align-items-center justify-content-center">
                  <CloseRoundedIcon
                    className="Admin_Header_Right_Hamburger_Icon position-absolute right-0"
                    onClick={ToggleRightMenu}
                  />

                  <MenuRoundedIcon
                    className="Admin_Header_Right_Hamburger_Icon position-absolute right-0 active"
                    onClick={ToggleRightMenu}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Header  */}
          <div className="Admin_Header_Mobile h-100 w-100">
            <div className="row m-0 w-100 h-100">
              <div className="Admin_Header_Left_Container col-4 text-start">
                <div className="Admin_Header_Left_Hamburger_Container text-center h-100 d-flex align-items-center justify-content-center position-relative">
                  <CloseRoundedIcon
                    className="Admin_Header_Left_Hamburger_Icon position-absolute start-0 "
                    onClick={ToggleSidebar}
                  />

                  <MenuRoundedIcon
                    className="Admin_Header_Left_Hamburger_Icon position-absolute start-0 active "
                    onClick={ToggleSidebar}
                  />
                </div>
              </div>
              <div className="Admin_Header_Center_Container col-4 text-center">
                <div className="Admin_Header_Left_Logo_Container text-center m-auto">
                  <img src={EShop} alt="" className="w-100 h-100" />
                </div>
              </div>
              <div className="Admin_Header_Right_Container col-4 text-end">
                <div
                  className="Admin_Header_Right_Menu_Container h-100"
                  onClick={ToggleTopDownMenu}
                >
                  <MoreVertIcon className="Admin_Header_Right_Menu_Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Admin_Body_Layout d-flex w-100">
          <div className="position-relative Admin_Sidebar_Layout me-0 me-lg-4">
            {/* Left Sidebar */}
            <div className="Admin_LeftSidebar position-fixed top-0 start-0">
              <div className="Admin_Sidebar_Container close">
                <div className="Accrodion_Headline_Container">
                  <span className="Accrodion_Headline">Menu</span>
                </div>
                {MenuList === undefined || MenuList.length == 0
                  ? ""
                  : MenuList.map((item, index) => {
                      const { icon: Icon, category, subcategories } = item;
                      const PageURL = category.toLowerCase();
                      let LocationURL = subcategories[0].subheading;
                      subcategories.forEach((element) => {
                        const arr = location.pathname.split("/admin/");
                        if (element.link == arr[1]) {
                          LocationURL = arr[1];
                          return;
                        }
                      });
                      return (
                        <div
                          className="accordion accordion-flush"
                          id={`accordion${index}`}
                          key={index}
                        >
                          <div className="accordion-item border-0">
                            <button
                              className={`accordion-button collapsed shadow-none Admin_PageNav_MenuBtn position-relative d-flex align-items-center justify-content-between
                          ${
                            location.pathname.slice(0, 12) ==
                              `/admin/${PageURL.slice(0, 5)}` && "active"
                          }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#Accordion${index}`}
                              aria-expanded="true"
                              aria-controls={`Accordion${index}`}
                            >
                              <Icon className="Accordion_Icon" />
                              <span className="ms-3 Accordion_Category">
                                {category}
                              </span>
                            </button>
                            <div
                              id={`Accordion${index}`}
                              className="accordion-collapse collapse"
                              data-bs-parent={`#accordion${index}`}
                            >
                              <div className="accordion-body p-0">
                                <ul className="list-group Admin_PageNav_Container position-relative">
                                  {subcategories == undefined ||
                                  subcategories.length == 0
                                    ? ""
                                    : subcategories.map((item, index) => {
                                        const { subheading, link } = item;

                                        return (
                                          <li
                                            className="list-group-item Admin_PageNav_Link_Container p-0 border-0"
                                            key={index}
                                          >
                                            <Link
                                              to={link}
                                              className={`Admin_PageNav_Link ${
                                                LocationURL == link
                                                  ? "active"
                                                  : ""
                                              } `}
                                            >
                                              {subheading}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="Admin_RightSidebar position-fixed top-0 end-0">
              <div className="Admin_Sidebar_Container">
                Right Sidebar Content
              </div>
            </div>

            {/* Top Down Menu */}
            <div className="Admin_TopDown_Mobile_Header position-fixed">
              <div className="Admin_TopDown_Mobile_Header_Container h-100 d-flex align-items-center justify-content-between">
                <div className="Admin_TopDown_Mobile_Header_Item m-0">
                  <div className="Admin_Header_Left_Search_Container bg-transparent position-relative Admin_TopDown_Mobile_Header_Search_Container bg-danger">
                    <div
                      className="Admin_Header_Left_Search_Icon_Container hide text-danger bg-transparent"
                      onClick={OpenSearch}
                    >
                      <SearchRoundedIcon className="Admin_Header_Left_Search_Icon text-danger" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by EShop"
                      className="Admin_Header_Left_Search_Input text-danger ps-3 pe-5 text-danger"
                    />
                    <div
                      className="Admin_Header_Left_Close_Icon_Container text-danger"
                      onClick={CloseSearch}
                    >
                      <CloseRoundedIcon className="Admin_Header_Left_Close_Icon text-danger" />
                    </div>
                    <div className="Admin_TopDown_Mobile_Header_Item_Bg bg-danger"></div>
                  </div>
                </div>
                <div className="Admin_TopDown_Mobile_Header_Item ms-3">
                  <div className="Admin_TopDown_Mobile_Header_Item_Btn position-relative text-center">
                    <span className="Admin_TopDown_Mobile_Header_Item_Btn_Bg position-absolute top-0 start-0 bg-danger"></span>
                    <NotificationsIcon className="text-danger" />
                  </div>
                </div>
                <div className="Admin_TopDown_Mobile_Header_Item ms-3">
                  <div className="Admin_TopDown_Mobile_Header_Item_Btn position-relative text-center">
                    <span className="Admin_TopDown_Mobile_Header_Item_Btn_Bg position-absolute top-0 start-0 bg-danger"></span>
                    <AccountCircleIcon className="text-danger" />
                  </div>
                </div>
                <div className="Admin_TopDown_Mobile_Header_Item ms-3">
                  <div className="Admin_TopDown_Mobile_Header_Item_Btn position-relative text-center">
                    <span className="Admin_TopDown_Mobile_Header_Item_Btn_Bg position-absolute top-0 start-0 bg-danger"></span>
                    <AppsRoundedIcon className="text-danger" />
                  </div>
                </div>
                <div className="Admin_TopDown_Mobile_Header_Item ms-3">
                  <div
                    className="Admin_TopDown_Mobile_Header_Item_Btn position-relative text-center"
                    onClick={ToggleTopDownMenu}
                  >
                    <span className="Admin_TopDown_Mobile_Header_Item_Btn_Bg position-absolute top-0 start-0 bg-danger"></span>
                    <CloseRoundedIcon className="text-danger" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Admin_Content_Layout py-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
