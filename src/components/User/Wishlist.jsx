import { Link } from "react-router-dom";
import "../../Css/User.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
const Wishlist = () => {
  const Products = useSelector((state) => {
    return state.Products.items;
  });
  return (
    <div className="User_Wishlist_Container">
      <div className="User_Wishlist_Header">
        <Link to="#" className="User_Container_Heading">
          My Wishlist
        </Link>
        <div className="User_Wishlist_NoItem_Container text-center">
          <FavoriteBorderOutlinedIcon className="UWN_Txt" />
          <p className="mt-2 mb-0 UWN_Txt">There are no favorites yet.</p>
          <p className="mb-1 UWN_Txt">
            Add your favorites to wishlist and they will show here.
          </p>
          <Link className="UWN_ShoppingNow d-block bg-transparent mt-4" to="/">
            Continue Shopping
          </Link>
        </div>
        <div className="User_Wishlist_Item_Container"></div>
      </div>
      <div className="User_Wishlist_Item_Container">
        <div className="User_Wishlist_AddAllToCart_Container">
          <Link className="User_Wishlist_AddAllToCart_Link">
            Add All To Cart
          </Link>
        </div>
        <div className="User_Wishlist_Item_Header">Watchlist</div>
        <div className="User_Wishlist_Item_Wrapper bg-white p-3">
          <div className="User_Wishlist_Item row m-0 w-100 pb-3">
            <div className="col-7 p-0 border d-flex align-items-start p-0 text-start">
              <div className="User_Wishlist_Item_Pic_Container">
                <Link className="User_Wishlist_Item_Pic_Link" to={"/product/1"}>
                  <img
                    src="https://static-01.daraz.pk/p/438752f01f5b270d9e69e25a8460c600.jpg"
                    alt="Wishlist Product Pic"
                    className="User_Wishlist_Item_Pic"
                  />
                </Link>
              </div>
              <div className="User_Wishlist_Item_Info border h-100 ">
                <Link
                  className="User_Wishlist_Item_Info_Title_Link"
                  to={"/product/1"}
                >
                  Richman Summer Tracksuit with New Luxury Design (T-Shirt +
                  Trouser)
                </Link>
                <span className="User_Wishlist_Item_Information">
                  <span className="User_Wishlist_Item_Information_Title text-muted fst-italic">
                    Style:
                  </span>
                  <span className="User_Wishlist_Item_Information_Txt fw-normal ms-1">
                    Wifi
                  </span>
                </span>
                <span className="User_Wishlist_Item_Information ms-2">
                  <span className="User_Wishlist_Item_Information_Title text-muted fst-italic">
                    Color:
                  </span>
                  <span className="User_Wishlist_Item_Information_Txt fw-normal ms-1">
                    Gray
                  </span>
                </span>
              </div>
            </div>
            <div className="col-2 p-0 border">
              <div className="User_Wishlist_Item_Price d-inline-block border text-end">
                <div className="User_Wishlist_Item_NewPrice">
                  {PriceFormat(CalcDiscount(30, 1900))}
                </div>
              </div>
            </div>
            <div className="col-3 p-0 border"></div>
          </div>
          <div className="User_Wishlist_Item_Separator"></div>
        </div>
      </div>
      <div className="User_JustForYou_Container mt-5">
        <div className="User_JustForYou_Heading">Just For You</div>
        <div className="User_JustForYou_Content_Container py-4">
          <div className="User_Card_Container">
            <div className="card-deck row w-100 m-0 align-items-stretch justify-content-start">
              {Products.length == 0
                ? ""
                : Products.map((item, index) => {
                    return <ProductCard item={item} key={index} />;
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
