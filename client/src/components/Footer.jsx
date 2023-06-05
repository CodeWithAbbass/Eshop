import { Link, useLocation } from "react-router-dom";
import "../Css/Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import WindowIcon from "@mui/icons-material/Window";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Footer = () => {
  const Cart = useSelector((state) => state.Cart.items);
  const location = useLocation();
  useEffect(() => {
    return () => {};
  }, [location]);
  return (
    <div className="Footer w-100">
      <div className="Desktop_Footer">
        <div className="DesktopFooter_First_Container  text-white ">
          <div className="DesktopFooter_First container-xxl  text-center">
            <div className="DesktopFooter_First_Column_Container row w-100 m-0">
              <div className="col-3 text-start">
                <h3 className="DesktopFooterFirst_FirstTitle">Menu</h3>
                <ul className="DesktopFooter_Menu_Container ps-0">
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Home
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link
                      to="/cart"
                      className="DesktopFooter_Menu_Link text-white"
                    >
                      Cart
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link
                      to="/user"
                      className="DesktopFooter_Menu_Link text-white"
                    >
                      Account
                    </Link>
                  </li>

                  <li className="DesktopFooter_Menu_item ">
                    <Link
                      to="/categories"
                      className="DesktopFooter_Menu_Link text-white"
                    >
                      Categories
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link
                      to="/user/returns"
                      className="DesktopFooter_Menu_Link text-white"
                    >
                      Returns & Refunds
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link
                      to="/user/order"
                      className="DesktopFooter_Menu_Link text-white"
                    >
                      Orders
                    </Link>
                  </li>
                </ul>
                <h3 className="DesktopFooterFirst_FirstTitle">
                  Make Money With Us
                </h3>
                <ul className="DesktopFooter_Menu_Container ps-0 mb-0">
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      E-Shop University
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Sell on E-Shop
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Join E-Shop Affiliate Program
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3 text-start">
                <h3 className="DesktopFooterFirst_FirstTitle">E-Shop</h3>
                <ul className="DesktopFooter_Menu_Container ps-0">
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      About Us
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Digital Payments
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Daraz Donates
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Daraz Blog
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Online Shopping App
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Online Grocery Shopping
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      Daraz Exclusive
                    </Link>
                  </li>
                  <li className="DesktopFooter_Menu_item ">
                    <Link to="/" className="DesktopFooter_Menu_Link text-white">
                      How to shop on Daraz
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-start">
                <div className="DesktopFirst_DownloadApp">
                  <img
                    src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18aqePBLoK1RjSZFuXXXn0XXa.png"
                    alt="QR Code"
                    title="Scan QR Code"
                    className="DesktopFooter_FirstQRImg"
                  />
                  <div className="DesktopFooter_HappyShopping d-inline-block ms-4">
                    <div className="DesktopFooter_HappyShopping_img_Container">
                      <img
                        src="https://icms-image.slatic.net/images/ims-web/9bef0e70-2a7c-48b7-91cb-59c5c83c5b46.png"
                        alt="Download App"
                        className="DesktopFooter_HappyShopping_img"
                      />
                    </div>
                    <div className="DesktopFooter_HappyShopping_Title">
                      Happy Shopping
                    </div>
                    <div className="DesktopFooter_HappyShopping_Title text-white">
                      Download App
                    </div>
                  </div>
                  <div className="DesktopFooter_DownloadApp_Link_Container mt-4">
                    <Link
                      to="/"
                      className="DesktopFooter_DownloadApp_Link"
                    ></Link>
                    <Link
                      to="/"
                      className="DesktopFooter_DownloadApp_Link DesktopFooter_DownloadApp_GooglePlay"
                    ></Link>
                    <Link
                      to="/"
                      className="DesktopFooter_DownloadApp_Link DesktopFooter_DownloadApp_AppGallery"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DesktopFooter_Second_Container">
          <div className="DesktopFooter_Second container-xxl  text-dark">
            <div className="DesktopFooter_Second_Column_Container row w-100 m-0">
              <div className="col-6 ">
                <h3 className="DesktopFooter_Second_Title">Payment Methods</h3>
                <span className="DesktopFooter_Second_PaymentImg PaymentImg1"></span>
                <span className="DesktopFooter_Second_PaymentImg PaymentImg2 mx-2"></span>
                <span className="DesktopFooter_Second_PaymentImg PaymentImg3"></span>
                <span className="DesktopFooter_Second_PaymentImg PaymentImg4 mx-2"></span>
                <span className="DesktopFooter_Second_PaymentImg PaymentImg5 me-2"></span>
                <span className="DesktopFooter_Second_PaymentImg PaymentImg6"></span>
              </div>
              <div className="col-6 ">
                <h3 className="DesktopFooter_Second_Title">Follow Us</h3>
                <Link
                  to="/"
                  className="DesktopFooter_Second_FollowLink FollowLink1 me-1"
                ></Link>
                <Link
                  to="/"
                  className="DesktopFooter_Second_FollowLink FollowLink2 me-1"
                ></Link>
                <Link
                  to="/"
                  className="DesktopFooter_Second_FollowLink FollowLink3 me-1"
                ></Link>
                <Link
                  to="/"
                  className="DesktopFooter_Second_FollowLink FollowLink4 me-1"
                ></Link>
                <Link
                  to="/"
                  className="DesktopFooter_Second_FollowLink FollowLink5 me-1"
                ></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="DesktopFooter_Copyright_Container text-center">
          <h3 className="DesktopFooter_Copyright m-0 ">© E-Shop 2023</h3>
        </div>
      </div>
      <div className="Mobile_Footer">
        <nav className="Mobile_Footer_Container  container-xxl">
          <div className="row w-100 m-0">
            <Link
              to="/"
              className={`MobileFooter_Link text-center col-3 ${
                location.pathname == "/" ? "MobileFooter_Link_Active" : ""
              }`}
            >
              <div className="MobileFooter_Link_Icon_Container">
                <HomeIcon className="MobileFooter_Link_Icon" />
              </div>
              <span className="MobileFooter_Link_Txt">Home</span>
            </Link>
            <Link
              to="/categories"
              className={`MobileFooter_Link text-center col-3 ${
                location.pathname == "/categories"
                  ? "MobileFooter_Link_Active"
                  : ""
              }`}
            >
              <div className="MobileFooter_Link_Icon_Container">
                <WindowIcon className="MobileFooter_Link_Icon" />
              </div>
              <span className="MobileFooter_Link_Txt">Categories</span>
            </Link>
            <Link
              to="/cart"
              className={`MobileFooter_Link text-center col-3 position-relative ${
                location.pathname == "/cart" ? "MobileFooter_Link_Active" : ""
              }`}
            >
              <div className="MobileFooter_Link_Icon_Container">
                <ShoppingCartIcon className="MobileFooter_Link_Icon" />
              </div>
              <span className="MobileFooter_Link_Txt">Cart</span>
              <span className="MF_Counter position-absolute">
                {Cart.length}
              </span>
            </Link>
            <Link
              to="/user"
              className={`MobileFooter_Link text-center col-3 position-relative ${
                location.pathname == "/user" ? "MobileFooter_Link_Active" : ""
              }`}
            >
              <div className="MobileFooter_Link_Icon_Container">
                <PersonIcon className="MobileFooter_Link_Icon" />
              </div>
              <span className="MobileFooter_Link_Txt">Account</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
