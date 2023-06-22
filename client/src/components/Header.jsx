import "../Css/Header.css";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect } from "react";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { useDispatch, useSelector } from "react-redux";
import { changeLayout } from "../Store/Slices/productSlice";
import { Logout } from "../Store/Slices/userSlice";
const Header = () => {
  const location = useLocation();
  const Cart = useSelector((state) => state.Cart.items);
  const User = useSelector((state) => state.User.user);

  const dispatch = useDispatch();
  const myScrollFunc = function () {
    const Desktop_MainHeader = document.querySelector(".Desktop_MainHeader");
    const Header_TopBar = document.querySelector(".MainHeader_TopBar");
    const DropDown = document.querySelector(
      ".MainHeader_BottomHeader_Container"
    );

    let y = window.scrollY;
    if (y >= 80) {
      Desktop_MainHeader.classList.add("H_Shadow");
    } else {
      Desktop_MainHeader.classList.remove("H_Shadow");
    }
    if (y >= 100) {
      Header_TopBar.classList.add("d-none");
      DropDown.style.display = "block";
      DropDown.style.visibility = "visible";
    } else {
      DropDown.style.display = "none";
      DropDown.style.visibility = "hidden";
      Header_TopBar.classList.remove("d-none");
    }
  };
  const ToggleDropDown = () => {
    const DropDown_Menu = document.querySelector(".dropdown-menu");
    DropDown_Menu.classList.toggle("show");
  };
  const MobileScroll = () => {
    const MobileHeader = document.querySelector(".Mobile_MainHeader");
    if (window.scrollY > 100) {
      MobileHeader.classList.add("Mobile_StickyBg");
    } else {
      MobileHeader.classList.remove("Mobile_StickyBg");
    }
  };

  const Layout = useSelector((state) => state.Products.layout);
  const { Grid3x, Grid4x, Grid6x } = Layout;
  window.addEventListener("scroll", myScrollFunc);
  window.addEventListener("scroll", MobileScroll);

  useEffect(() => {
    const TopHeader = document.querySelector(".Top_Header");

    if (location.pathname == "/") {
      TopHeader.classList.remove("d-none");
      return;
    }

    TopHeader.classList.add("d-none");
  }, [location]);
  return (
    <div className={`Header w-100 `}>
      <div className="Desktop_MainHeader">
        <div className="MainHeader_TopBar">
          <ul className="TopBar_Menu_Container mb-0 text-center w-100 px-4">
            <li className="d-inline p-0">
              <Link
                className={`TopBar_Link ${
                  location.pathname == "/" ? "active  Bg_Primary" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="d-inline p-0">
              <Link
                to="/user"
                className={`TopBar_Link ${
                  location.pathname == "/user" ||
                  location.pathname == "/user/wishlist" ||
                  location.pathname == "/user/address" ||
                  location.pathname == "/user/payment" ||
                  location.pathname == "/user/returns" ||
                  location.pathname == "/user/cancellations"
                    ? "active  Bg_Primary"
                    : ""
                }`}
              >
                {User.name ? `${User.name}  Account` : "Account"}
              </Link>
            </li>
            <li className="d-inline p-0">
              <Link
                className={`TopBar_Link ${
                  location.pathname == "/user/order"
                    ? "active  Bg_Primary"
                    : ""
                }`}
                to="/user/order"
              >
                ORDER
              </Link>
            </li>
            <li className="d-inline p-0">
              <Link
                className={`TopBar_Link ${
                  location.pathname == "/categories"
                    ? "active  Bg_Primary"
                    : ""
                }`}
                to="/categories"
              >
                Categories
              </Link>
            </li>
            <li className="d-inline p-0">
              {Object.keys(User).length !== 0 ? (
                <Link
                  className={`TopBar_Link ${
                    location.pathname == "/login" ? "active  Bg_Primary" : ""
                  }`}
                  onClick={() => dispatch(Logout())}
                >
                  LOGOUT
                </Link>
              ) : (
                <Link
                  className={`TopBar_Link ${
                    location.pathname == "/login" ? "active  Bg_Primary" : ""
                  }`}
                  to="/login"
                >
                  LOGIN
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="MainHeader_Container">
          <div className="MainHeader_Content container-xl h-100 p-xl-0 text-center">
            <div className="MainHeader_Logo_Container text-start d-inline-block">
              <Link className="MainHeader_Logo_Link d-inline-block" to="/">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png"
                  alt="Daraz Logo"
                  className="MainHeader_Logo_Img"
                />
              </Link>
            </div>
            <div className="MainHeader_SearchBox_Container d-inline-block">
              <form
                action="//www.daraz.pk/catalog/"
                method="GET"
                autoComplete="off"
                className="MainHeader_SearchBox_Form w-100 position-relative"
              >
                <input
                  type="text"
                  id="SearchBox"
                  name="SearchBox"
                  placeholder="Search..."
                  className="MainHeader_SearchBox_Input w-100 h-100 pe-5"
                  tabIndex="1"
                  // value=""
                />
                <button className="MainHeader_SearchBox_Icon_Container Bg_Primary position-absolute top-0 border-0">
                  <SearchIcon className="MainHeader_SearchBox_Icon d-block w-100 text-white" />
                </button>
              </form>
            </div>
            <div className="MainHeader_Cart_Container d-inline-block">
              <Link
                to="cart"
                className="MainHeader_Cart_Link d-inline-block"
                title="Cart"
              >
                <ShoppingCartOutlinedIcon className="MainHeader_Cart_Icon" />
                {Cart.length > 0 ? (
                  <span className="MainHeader_Cart_Counter Bg_Primary">
                    {Cart.length}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div className="MainHeader_Banner_Container d-inline-block ms-xxl-5">
              <Link
                to="/"
                className="MainHeader_Banner_Link w-100 h-100 d-inline-block"
                title="Download Daraz App"
              >
                <img
                  src="https://icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png"
                  alt="Daraz Banner"
                  className="MainHeader_Banner_Img "
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="MainHeader_BottomHeader_Container">
          <div className="MainHeader_BottomHeader d-flex justify-content-between align-items-center container">
            <div className="MainHeader_NavCategory">
              <div className="dropdown ">
                <a
                  className="bg-transparent dropdown-toggle ToggleBtn d-block ps-5"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseEnter={() => ToggleDropDown()}
                  onMouseLeave={() => ToggleDropDown()}
                >
                  Categories
                </a>

                <ul
                  className="dropdown-menu pt-0"
                  aria-labelledby="dropdownMenuLink "
                  onMouseEnter={() => ToggleDropDown()}
                  onMouseLeave={() => ToggleDropDown()}
                >
                  <li>
                    <Link
                      to="/"
                      className={`dropdown-item d-block TopBar_Link bg-white ${
                        location.pathname == "/" ? "active  Bg_Primary" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user"
                      className={`dropdown-item d-block TopBar_Link ${
                        location.pathname == "/user" ||
                        location.pathname == "/user/profile" ||
                        location.pathname == "/user/wishlist" ||
                        location.pathname == "/user/address" ||
                        location.pathname == "/user/payment" ||
                        location.pathname == "/user/returns" ||
                        location.pathname == "/user/cancellations"
                          ? "active  Bg_Primary"
                          : ""
                      }`}
                    >
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user/order"
                      className={`dropdown-item d-block TopBar_Link ${
                        location.pathname == "/user/order"
                          ? "active  Bg_Primary"
                          : ""
                      }`}
                    >
                      Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categories"
                      className={`dropdown-item d-block TopBar_Link ${
                        location.pathname == "/categories"
                          ? "active  Bg_Primary"
                          : ""
                      }`}
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    {Object.keys(User).length !== 0 ? (
                      <Link
                        className={`dropdown-item d-block TopBar_Link ${
                          location.pathname == "/login"
                            ? "active  Bg_Primary"
                            : ""
                        }`}
                        onClick={() => dispatch(Logout())}
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link
                        to="login"
                        className={`dropdown-item d-block TopBar_Link ${
                          location.pathname == "/login"
                            ? "active  Bg_Primary"
                            : ""
                        }`}
                      >
                        Login
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`MainHeader_LayoutHandler ${
                location.pathname == "/" ? "d-inline-block" : "d-none"
              }`}
            >
              <AppsRoundedIcon
                className={`MH_LayoutHandler_Icon ${
                  Grid6x ? "Text_Primary_Color" : ""
                } `}
                onClick={() => {
                  dispatch(changeLayout("Grid6x"));
                }}
              />
              <GridViewRoundedIcon
                className={`MH_LayoutHandler_Icon ${
                  Grid4x ? "Text_Primary_Color" : ""
                } `}
                onClick={() => {
                  dispatch(changeLayout("Grid4x"));
                }}
              />
              <SquareRoundedIcon
                className={`MH_LayoutHandler_Icon ${
                  Grid3x ? "Text_Primary_Color" : ""
                } `}
                onClick={() => {
                  dispatch(changeLayout("Grid3x"));
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Mobile_MainHeader">
        <div className="Mobile_MainHeader_Content">
          <Link className="MH_SearchBox_Link">
            <span className="MH_Search_Icon_Container Text_Primary_Color">
              <SearchIcon className="MH_Search_Icon" />
            </span>
          </Link>
          <input
            type="search"
            className="Mobile_SearchBox_Input Text_Primary_Color w-100 border-0"
            placeholder="Search in Daraz"
            id="gsearch"
            name="gsearch"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
