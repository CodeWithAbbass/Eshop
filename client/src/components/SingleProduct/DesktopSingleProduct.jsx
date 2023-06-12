import "../../Css/SingleProduct.css";
import ReactImageMagnify from "react-image-magnify";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
// import required actions
import {
  AddToCart,
  SelectIncrementDecrement,
  TotalPrice,
} from "../../Store/Slices/cartSlice";
import CalcDiscount from "../../helpers/CalcDiscount";
import PriceFormat from "../../helpers/PriceFormat";
import SubTotal from "./SubTotal";
import { getSingleProduct } from "../../Store/Slices/productSlice";

const DesktopSingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ImageURL, setImageURL] = useState(null);

  const SingleProduct = useSelector((state) => state.Products.singleproduct);

  const Cart = useSelector((state) => {
    let res = state.Cart.items.filter((item) => item.id == id);
    return res;
  });

  let Uid,
    Title,
    Price,
    Rating,
    MainImage,
    SideImage,
    Quantity,
    Discount,
    Stock,
    isSale,
    ProductSubtotal;

  const QuantityOnchange = (e, id) => {
    const { value } = e.target;
    dispatch(SelectIncrementDecrement({ value, id }));
    dispatch(TotalPrice());
  };

  Uid = SingleProduct.uid;
  Title = SingleProduct.title;
  Price = SingleProduct.price;
  Rating = SingleProduct.rating;
  Quantity = 0;
  Discount = SingleProduct.discount;
  Stock = SingleProduct.stock;
  isSale = SingleProduct.issale;
  MainImage = SingleProduct.images ? SingleProduct.images[0] : [];
  SideImage = SingleProduct.images ? SingleProduct.images : [];
  ProductSubtotal =
    Cart.length > 0
      ? Cart[0].Quantity * CalcDiscount(Cart[0].Discount, Cart[0].Price)
      : CalcDiscount(Discount, Price);

  useEffect(() => {
    dispatch(TotalPrice());
    dispatch(getSingleProduct(id));
    return () => {};
  }, []);
  const ChangeMainImage = (ImageItem) => {
    setImageURL(ImageItem);
  };

  return (
    <div className="Desktop_SingleProduct">
      <div className="SingleProduct_Product_Container">
        <div className="SingleProduct_Container">
          <div className="SingleProduct_Content_Container">
            <div className="SingleProduct_Image_Container">
              <div className="SingleProduct_SideImage">
                {SideImage.length == 0
                  ? ""
                  : SideImage.map((ImageItem, index) => {
                      if (index < 6) {
                        return (
                          <img
                            src={ImageItem}
                            className="SP_SideImage_Image"
                            alt="Product Picture"
                            key={index}
                            onMouseEnter={() => ChangeMainImage(ImageItem)}
                          />
                        );
                      }
                    })}
              </div>
              <div className="SingleProduct_MainImage">
                <ReactImageMagnify
                  style={{ height: "100%" }}
                  {...{
                    imageClassName: "SP_MainImage_Image",

                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: ImageURL == null ? `${MainImage}` : `${ImageURL}`,
                      height: 400,
                    },
                    largeImage: {
                      src: ImageURL == null ? `${MainImage}` : `${ImageURL}`,
                      width: 1200,
                      height: 1200,
                    },
                    enlargedImageClassName: "EnlargedLargeImage",
                  }}
                />
              </div>
            </div>
            <div className="SingleProduct_Info_Container">
              <h2 className="SP_Title">{Title}</h2>
              <span className="SP_RatingStar_Txt">Rating:</span>
              <span className="SP_RatingStar_Txt ms-1">{Rating}</span>
              {Array(parseInt(Rating ? Rating : 0))
                .fill()
                .map((_, i) => (
                  <span className="RatingStar text-warning" key={i}>
                    <GradeRoundedIcon />
                  </span>
                ))}
              {Array(5 - parseInt(Rating ? Rating : 0))
                .fill()
                .map((_, i) => (
                  <span className="RatingStarSecondary text-secondary" key={i}>
                    <GradeRoundedIcon />
                  </span>
                ))}
              <hr className="SP_Separator" />
              <div className="SP_Price_Container">
                <span className="SP_Price_DiscountPercent">
                  {!Discount ? "" : `-${Discount}%`}
                </span>
                <span className="SP_Price">
                  <span className="BuyBox_Price_Price">
                    {PriceFormat(CalcDiscount(Discount, Price))}
                  </span>
                </span>
                <span className="text-muted text-secondary text-decoration-line-through ms-3">
                  {Discount > 0 ? `$${Price}` : ""}
                </span>
              </div>

              <div className="SP_LeftStock">
                <p className="LeftStock_Txt">
                  {Stock > 0
                    ? `Only ${Stock} left in stock -
                            order soon`
                    : "Out Of Stock"}
                </p>
              </div>
              <div className="SP_Style">
                <span className="SP_Style_Txt">Style:</span>
                <span className="SP_Style_Style">Wifi</span>
              </div>
              <div className="SP_Color">
                <span className="SP_Color_Txt">Color:</span>
                <span className="SP_Color_Color">Space Gray</span>
              </div>
              <div className="SP_OtherInfo"></div>
            </div>
          </div>

          <div className="SingleProduct_BuyBox_Container">
            <div className="BuyBox_Container">
              <div className="BuyBox_Price">
                <span className="BuyBox_Price_Price">
                  {PriceFormat(ProductSubtotal)}
                </span>
              </div>
              <div className="BuyBox_PrimaryMessage">
                <span className="BuyBox_Message">$14.24 delivery</span>
                <span className="BuyBox_EST">Tuesday, May 23</span>
              </div>
              <div className="BuyBox_Country">
                <PlaceOutlinedIcon className="BuyBox_LocationIcon" />
                <span className="BuyBox_Country_Txt">Pakistan</span>
              </div>
              {Stock > 0 ? (
                <div className="BuyBox_InStock">In Stock</div>
              ) : (
                <div className="BuyBox_OutOfStock">Out Of Stock</div>
              )}
              <div className="BuyBox_Quantity">
                <form className="BuyBox_Quantity_Info_Form">
                  <select
                    name="Quantity"
                    id="BuyBox_Quantity_Info_Select"
                    value={Cart.length > 0 ? Cart[0].Quantity : "1"}
                    onChange={(e) => QuantityOnchange(e, id)}
                  >
                    {Array(Stock ? Stock : 0 + 1)
                      .fill()
                      .map((_, i) => {
                        if (i > 0) {
                          return (
                            <option
                              value={i}
                              className="Quantity_Option"
                              key={i}
                            >
                              {i}
                            </option>
                          );
                        }
                      })}
                  </select>
                  <span className="BuyBox_Quantity_Txt">Qty:</span>
                </form>
              </div>
              <div className="BuyBox_MainBtn">
                {Stock == 0 ? (
                  <button className="btn BuyBox_AddToCart w-100 text-light text-center d-block p-0 text-muted bg-secondary border">
                    <Link className="BuyBox_AddToCart_Link text-white w-100 h-100 d-block p-1">
                      Out of Stock
                    </Link>
                  </button>
                ) : (
                  <button className="btn BuyBox_AddToCart w-100 text-light text-center d-block p-0">
                    <Link
                      className="BuyBox_AddToCart_Link text-white w-100 h-100 d-block p-1"
                      // to="/cart"
                      onClick={() => {
                        dispatch(AddToCart(SingleProduct));
                        dispatch(TotalPrice());
                      }}
                    >
                      Add to Cart
                    </Link>
                  </button>
                )}
                {Stock == 0 ? (
                  ""
                ) : (
                  <button className="btn BuyBox_BuyNow w-100 text-light text-center d-block p-0">
                    <Link
                      className="BuyBox_BuyNow_Link text-white w-100 h-100 d-block p-1"
                      to="/checkout"
                    >
                      Buy Now
                    </Link>
                  </button>
                )}
              </div>
              <table className="BuyBox_Labels_Container my-2">
                <tbody>
                  <tr className="BuyBox_Labels">
                    <td className="Label_Heading">Payment</td>
                    <td className="Label_Txt">Secure transaction</td>
                  </tr>

                  <tr className="BuyBox_Labels">
                    <td className="Label_Heading">Ship from</td>
                    <td className="Label_Txt">E-Shop.pk</td>
                  </tr>

                  <tr className="BuyBox_Labels">
                    <td className="Label_Heading">Sold by</td>
                    <td className="Label_Txt">E-Shop.com</td>
                  </tr>
                  <tr className="BuyBox_Labels">
                    <td className="Label_Heading">Returns</td>
                    <td className="Label_Txt">
                      Eligible for Return, Refund or Replacement within 15 days
                      of receipt
                    </td>
                  </tr>
                  <tr className="BuyBox_Labels">
                    <td className="Label_Heading">Support</td>
                    <td className="Label_Txt">
                      Free E-Shop tech support included
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="BuyBox_AddToList_Container">
                <button className=" btn BuyBox_AddToList_btn w-100 text-center">
                  Add To List
                </button>
              </div>
            </div>

            <div className="BuyBox_SellOn text-center">
              <p className="HOTS_Txt mb-0">Have one to sell?</p>
              <Link className="BuyBox_SellOnAmazon_Link">Sell On E-Shop</Link>
            </div>
          </div>
        </div>
      </div>
      <SubTotal />
    </div>
  );
};

export default DesktopSingleProduct;
