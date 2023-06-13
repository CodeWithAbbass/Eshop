import { Link } from "react-router-dom";
import "../../Css/User.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductCard from "../Home/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
import { useEffect, useState } from "react";
import {
  deleteFromWishlist,
  getWishlist,
} from "../../Store/Slices/wishlistSlice";

const Wishlist = () => {
  let dispatch = useDispatch();
  const Wishitems = useSelector((state) => state.Wishlist.wishitems);
  const Products = useSelector((state) => state.Products.items);
  // const dispatch = useDispatch();
  let item = [];

  const filteration = () => {
    for (const iterator of Wishitems) {
      Products.filter((product) => {
        if (product.uid == iterator) {
          item.push(product);
        }
      });
    }
  };

  filteration();
  useEffect(() => {
    return () => {};
  }, []);

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
      <div className="User_Wishlist_Item_Container mt-5">
        <div className="User_Wishlist_AddAllToCart_Container">
          <Link className="User_Wishlist_AddAllToCart_Link">
            Add All To Cart
          </Link>
        </div>
        <div className="User_Wishlist_Item_Header">Watchlist</div>
        <div className="Desktop_User_Wishlist_Item_Wrapper bg-white p-3">
          {item.length == 0
            ? ""
            : item.map((item, index) => {
                let {
                  id,
                  uid,
                  title,
                  rating,
                  images,
                  price,
                  discount,
                  stock,
                  issale,
                } = item;

                return (
                  <div className="User_Wishlist Item_Container" key={index}>
                    <div className="User_Wishlist_Item row m-0 w-100 py-3">
                      <div className="col-7 p-0 d-flex align-items-stretch justify-content-between p-0 text-start">
                        <div className="User_Wishlist_Item_Pic_Container">
                          <Link
                            className="User_Wishlist_Item_Pic_Link w-100 d-block h-100"
                            to={`/product/${uid}`}
                          >
                            <img
                              src={images.length > 0 ? images[0] : ""}
                              alt="Wishlist Product Pic"
                              className="User_Wishlist_Item_Pic h-100"
                            />
                          </Link>
                        </div>
                        <div className="User_Wishlist_Item_Info h-100 position-relative ">
                          <Link
                            className="User_Wishlist_Item_Info_Title_Link"
                            to={`/product/${uid}`}
                          >
                            {title}
                          </Link>
                          <div className="User_Wishlist_Item_Information_Container">
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
                          <div className="User_Wishlist_Item_Delete position-absolute bottom-0">
                            <Link
                              to="#"
                              className="User_Wishlist_Item_Delete_Link"
                              onClick={() => dispatch(deleteFromWishlist(uid))}
                            >
                              <DeleteOutlinedIcon />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-2 px-md-2 p-0">
                        <div className="User_Wishlist_Item_Price d-inline-block text-start w-100">
                          <div className="User_Wishlist_Item_NewPrice text-start">
                            {discount > 0
                              ? PriceFormat(CalcDiscount(discount, price))
                              : PriceFormat(price)}
                          </div>
                          {discount == 0 ? (
                            ""
                          ) : (
                            <div className="User_Wishlist_Item_OldPrice_Discount">
                              <span className="User_Wishlist_Item_OldPrice text-muted text-decoration-line-through">
                                {PriceFormat(price)}
                              </span>
                              <span className="User_Wishlist_Item_Discount ms-2">
                                -30%
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-2 col-3 p-0 text-end">
                        <div className="User_Wishlist_To_Cart text-end">
                          <Link className="User_Wishlist_To_Cart_Link d-inline-block text-center text-white">
                            <span>+</span>
                            <ShoppingCartOutlinedIcon className="User_Wishlist_To_Cart_Icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="User_Wishlist_Item_Separator"></div>
                  </div>
                );
              })}
        </div>

        <div className="Mobile_User_Wishlist_Item_Wrapper bg-white p-3">
          {item.length == 0
            ? ""
            : item.map((item, index) => {
                let {
                  id,
                  uid,
                  title,
                  rating,
                  images,
                  price,
                  discount,
                  stock,
                  issale,
                } = item;
                return (
                  <div key={index}>
                    <div className="User_Wishlist_Item row m-0 w-100 py-3">
                      <div className="col-12 p-0 d-flex align-items-stretch justify-content-between p-0 text-start">
                        <div className="User_Wishlist_Item_Pic_Container">
                          <Link
                            className="User_Wishlist_Item_Pic_Link w-100 d-block"
                            to={`/product/${uid}`}
                          >
                            <img
                              src={images.length > 0 ? images[0] : ""}
                              alt="Wishlist Product Pic"
                              className="User_Wishlist_Item_Pic h-100"
                            />
                          </Link>
                          <div className="User_Wishlist_To_Cart text-end">
                            <Link className="User_Wishlist_To_Cart_Link d-inline-block text-center w-100 text-white">
                              <span>+</span>
                              <ShoppingCartOutlinedIcon className="User_Wishlist_To_Cart_Icon" />
                            </Link>
                          </div>
                        </div>
                        <div className="User_Wishlist_Item_Info h-100 position-relative ">
                          <Link
                            className="User_Wishlist_Item_Info_Title_Link"
                            to={`/product/${uid}`}
                          >
                            {title}
                          </Link>
                          <div className="User_Wishlist_Item_Information_Container">
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
                          <div className="User_Wishlist_Item_Footer position-absolute bottom-0 d-flex align-items-center justify-content-between">
                            <Link
                              className="User_Wishlist_Item_Delete_Link"
                              onClick={() => dispatch(deleteFromWishlist(uid))}
                            >
                              <DeleteOutlinedIcon />
                            </Link>
                            <span className="User_Wishlist_Item_Price d-inline-block text-start w-100 ms-2">
                              <span className="User_Wishlist_Item_NewPrice text-start">
                                {discount > 0
                                  ? PriceFormat(CalcDiscount(discount, price))
                                  : PriceFormat(price)}
                              </span>
                              {discount == 0 ? (
                                ""
                              ) : (
                                <span className="User_Wishlist_Item_OldPrice_Discount ms-3">
                                  <span className="User_Wishlist_Item_OldPrice text-muted text-decoration-line-through">
                                    {PriceFormat(price)}
                                  </span>
                                  <span className="User_Wishlist_Item_Discount ms-2">
                                    -30%
                                  </span>
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="User_Wishlist_Item_Separator"></div>
                  </div>
                );
              })}
        </div>
      </div>

      {/* Just For you  */}
      <div className="User_JustForYou_Container mt-5 px-lg-0 px-3">
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
