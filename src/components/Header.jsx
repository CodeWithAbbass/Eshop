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
const Header = () => {
  const location = useLocation();
  const Cart = useSelector((state) => state.Cart.items);
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
    if (y >= 300) {
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
            <li className="d-inline">
              <Link className="TopBar_Link active" to="/">
                Home
              </Link>
            </li>
            <li className="d-inline">
              <Link className="TopBar_Link">Shopping</Link>
            </li>
            <li className="d-inline">
              <Link className="TopBar_Link">ORDER</Link>
            </li>
            <li className="d-inline">
              <Link className="TopBar_Link">Categories</Link>
            </li>
            <li className="d-inline">
              <Link className="TopBar_Link">LOGIN</Link>
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
                <button className="MainHeader_SearchBox_Icon_Container position-absolute top-0 border-0">
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
                  <span className="MainHeader_Cart_Counter">{Cart.length}</span>
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
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink "
                  onMouseEnter={() => ToggleDropDown()}
                  onMouseLeave={() => ToggleDropDown()}
                >
                  <li>
                    <a
                      className="dropdown-item TopBar_Link active bg-white"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item TopBar_Link" href="#">
                      Shopping
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item TopBar_Link" href="#">
                      Order
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item TopBar_Link" href="#">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item TopBar_Link" href="#">
                      Login
                    </a>
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
                className={`MH_LayoutHandler_Icon ${Grid6x ? "active" : ""} `}
                onClick={() => {
                  dispatch(changeLayout("Grid6x"));
                }}
              />
              <GridViewRoundedIcon
                className={`MH_LayoutHandler_Icon ${Grid4x ? "active" : ""} `}
                onClick={() => {
                  dispatch(changeLayout("Grid4x"));
                }}
              />
              <SquareRoundedIcon
                className={`MH_LayoutHandler_Icon ${Grid3x ? "active" : ""} `}
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
            <span className="MH_Search_Icon_Container">
              <SearchIcon className="MH_Search_Icon" />
            </span>
            <span className="Mobile_SearchBox_txt">Search in Daraz</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
