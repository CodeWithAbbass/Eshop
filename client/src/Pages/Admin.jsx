import React from "react";
import { Link, Outlet } from "react-router-dom";
import DHeader from "../components/Admin/DHeader";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RocketIcon from "@mui/icons-material/Rocket";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EShop from "../assets/EShop.png";
import "../Css/Admin/Admin.css";
const Admin = () => {
  const ToggleSidebar = () => {
    const AHLHIcon = document.querySelectorAll(
      ".Admin_Header_Left_Hamburger_Icon"
    );
    const Menu = document.querySelector(
      ".Admin_Header_Left_Logo_Menu_Container"
    );
    const Sidebar = document.querySelector(".Admin_Sidebar");
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
    OpenSidebarContent.classList.toggle("close");
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
    SearchOpen.classList.add("show");
    SearchInput.classList.add("show");
    SearchClose.classList.add("show");
  };
  const CloseSearch = () => {
    const SearchOpen = document.querySelector(
      ".Admin_Header_Left_Search_Container"
    );

    const SearchInput = document.querySelector(
      ".Admin_Header_Left_Search_Input"
    );
    const SearchClose = document.querySelector(
      ".Admin_Header_Left_Close_Icon_Container"
    );
    SearchOpen.classList.remove("show");
    SearchInput.classList.remove("show");
    SearchClose.classList.remove("show");
  };

  const MenuList = [
    {
      icon: RocketIcon,
      category: "Products",
      subcategories: [
        { subheading: "All Products", link: "#" },
        { subheading: "Add Product", link: "#" },
        { subheading: "Update Product", link: "#" },
        { subheading: "Delete Product", link: "#" },
      ],
    },
    {
      icon: ShoppingBagOutlinedIcon,
      category: "Orders",
      subcategories: [
        { subheading: "All Orders", link: "#" },
        { subheading: "Add Order", link: "#" },
        { subheading: "Update Order", link: "#" },
        { subheading: "Delete Order", link: "#" },
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
  return (
    <div className="Admin">
      {/* <DHeader /> */}

      <div className="Admin_Layout_Container">
        <div className="Admin_Header_Container w-100">
          {/* Desktop Header  */}
          <div className="Admin_Header_Desktop h-100 w-100">
            <div className="row m-0 w-100 h-100">
              <div className="Admin_Header_Left_Container col-6 border text-start d-flex align-items-center">
                <div className="Admin_Header_Left_Logo_Menu_Container d-flex align-items-center h-100 justify-content-between">
                  <div className="Admin_Header_Left_Logo_Container me-5">
                    <img src={EShop} alt="" className="w-100 h-100" />
                  </div>
                  <div className="Admin_Header_Left_Hamburger_Container text-center">
                    <CloseRoundedIcon
                      className="Admin_Header_Left_Hamburger_Icon active"
                      onClick={ToggleSidebar}
                    />

                    <MenuRoundedIcon
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
                      className="Admin_Header_Left_Search_Input ps-3 pe-5"
                    />
                    <div
                      className="Admin_Header_Left_Close_Icon_Container hide"
                      onClick={CloseSearch}
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

      <div className="Admin_Body_Layout_Container position-relative">
        <div className="Admin_Sidebar active position-fixed top-0 start-0">
          <div className="Admin_Sidebar_Container">
            {MenuList === undefined || MenuList.length == 0
              ? ""
              : MenuList.map((item, index) => {
                  const { icon: Icon, category, subcategories } = item;

                  return (
                    <div
                      className="accordion"
                      id="accordionExample"
                      key={index}
                    >
                      <div className="accordion-item border-0">
                        <button
                          className="accordion-button shadow-none active Admin_PageNav_MenuBtn position-relative d-flex align-items-center justify-content-between"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <Icon />
                          <span className="ms-3">{category}</span>
                        </button>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
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
                                          className="Admin_PageNav_Link"
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
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
