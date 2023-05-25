import "../../Css/SingleProduct.css";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required actions
import {
  AddToCart,
  SelectIncrementDecrement,
  PlusIncrement,
  MinusDecrement,
  DeleteFromCart,
} from "../../Store/Slices/cartSlice";

const MobileSingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let ISSold;
  const Product = useSelector((state) =>
    state.Products.items.filter((item) => item.id == id)
  );
  return (
    <div className="Mobile_SingleProduct ">
      {Product.length == 0
        ? ""
        : Product.map((item, index) => {
            const {
              id,
              Title,
              Price,
              oldPrice,
              Rating,
              Image,
              Quantity,
              Discount,
              Stock,
              isSale,
              isSold,
            } = item;
            ISSold = isSold;
            const MainImage = Image.MainImage;
            const SideImage = Image.SideImage;
            const WDPrice = Price.toString().split(".");
            const WDOldPrice = oldPrice.toString().split(".");
            return (
              <div
                className="Mobile_SingleProduct_Container container-xl"
                key={index}
              >
                <div className="MSP_Slider">
                  <Swiper
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-100"
                  >
                    {SideImage.length == 0
                      ? ""
                      : SideImage.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img src={item} alt="" className="h-100" />
                            </SwiperSlide>
                          );
                        })}
                  </Swiper>
                </div>
                <div className="MSP_Info_Container container-xl my-4">
                  <h2 className="MSP_Title pb-5 pt-2">{Title}</h2>
                  <div className="MSP_Price_Container ">
                    <div className="MSP_Price d-inline  ">
                      <span className="MSP_Currency">Rs.</span>
                      <span className="MSP_Price_Txt">
                        {WDPrice[0] ? WDPrice[0] : ""}
                      </span>
                    </div>
                    <div className="MSP_OldPrice d-inline ms-4">
                      <span className="MSP_Currency">Rs.</span>
                      <span className="MSP_Price_Txt">
                        {WDOldPrice[0] ? WDOldPrice[0] : ""}
                      </span>
                    </div>
                    <div className="MSP_Discount d-inline ms-2">
                      {!Discount ? "" : `-${Discount}%`}
                    </div>
                  </div>
                  <div className="MSP_Rating_Container">
                    {Array(Rating)
                      .fill()
                      .map((_, i) => (
                        <span className="MSP_Rating_Star" key={i}>
                          ⭐
                        </span>
                      ))}
                  </div>
                  <div className="MSP_LeftStock my-3">
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
                </div>
              </div>
            );
          })}
      <div className="MSP_Footer w-100">
        <div className="row h-100 w-100 m-0">
          <div className="col-4 pe-0 h-100">
            <div className="MSP_Footer_Left_Container d-flex justify-content-between align-items-center text-center w-100 h-100">
              <Link className="MSPF_Link h-100">
                <StoreIcon />
                <p className="MSPF_Link_Txt p-0 m-0">Store</p>
              </Link>
              <span className="MSPF_Separator"></span>
              <Link className="MSPF_Link h-100">
                <StoreIcon />
                <p className="MSPF_Link_Txt p-0 m-0">WishList</p>
              </Link>
            </div>
          </div>
          <div className="col-8 p-0 h-100 pe-2">
            <div className="MSPF_Container h-100 d-flex align-items-center">
              <div className="MSPF_Shortcut h-100 w-100">
                {ISSold ? (
                  <Link
                    to="/"
                    className="MSPF_Shortcut_Link d-inline-block h-100 w-100"
                  >
                    <span className="MSPF_Shortcut_Txt">Shopping</span>
                  </Link>
                ) : (
                  <Link
                    to="/checkout"
                    className="MSPF_Shortcut_Link d-inline-block h-100 w-100"
                  >
                    <span className="MSPF_Shortcut_Txt">Buy Now</span>
                  </Link>
                )}
              </div>
              <div className="MSPF_Shortcut h-100 w-100">
                {ISSold ? (
                  <Link className="MSPF_Shortcut_Link d-inline-block h-100 w-100">
                    <span className="MSPF_Shortcut_Txt">Out of Stock</span>
                  </Link>
                ) : (
                  <Link
                    className="MSPF_Shortcut_Link d-inline-block h-100 w-100"
                    onClick={() => dispatch(AddToCart(Product[0]))}
                  >
                    <span className="MSPF_Shortcut_Txt">Add To Cart</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSingleProduct;
