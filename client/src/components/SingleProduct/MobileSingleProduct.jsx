/* eslint-disable no-unused-vars */
import "../../Css/SingleProduct.css";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required actions
import {
    selectIncDec,
    totalPrice,
    addToCart,
} from "../../Store/Slices/cartSlice";
import CalcDiscount from "../../helpers/CalcDiscount";
import PriceFormat from "../../helpers/PriceFormat";
import { getSingleProduct } from "../../Store/Slices/productSlice";
import {
    addToWishlist,
    deleteFromWishlist,
} from "../../Store/Slices/wishlistSlice";

const MobileSingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const SingleProduct = useSelector((state) => state.Products.singleproduct);
    const ItemExist = useSelector((state) =>
        state.Wishlist.wishitems.filter((item) => item == id)
    );
    const [productSubtotal, setProductSubtotal] = useState(0);
    const Cart = useSelector((state) => {
        let res = state.Cart.items.filter((item) => item.uid == id);
        return res;
    });

    const QuantityOnchange = (e, uid) => {
        const { value } = e.target;
        dispatch(selectIncDec({ value, uid }));
        dispatch(totalPrice());
    };

    const AddToCartProduct = { ...SingleProduct, quantity: 1 };
    const MainImage = SingleProduct.images ? SingleProduct.images[0] : [];
    const SideImage = SingleProduct.images ? SingleProduct.images : [];
    useEffect(() => {
        dispatch(totalPrice());
        dispatch(getSingleProduct(id));
    }, [dispatch, id]);
    useEffect(() => {
        if (productSubtotal === 0 && SingleProduct) {
            const subtotal =
                Cart.length > 0
                    ? Cart[0].quantity *
                      CalcDiscount(Cart[0].discount, Cart[0].price)
                    : CalcDiscount(
                          SingleProduct?.discount,
                          SingleProduct?.price
                      );
            setProductSubtotal(subtotal);
        }
    }, [id, dispatch, SingleProduct, Cart, productSubtotal]);

    return (
        <div className="Mobile_SingleProduct ">
            <div className="Mobile_SingleProduct_Container container-xl">
                <div className="MSP_Slider">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-100"
                    >
                        {SideImage?.length > 0 &&
                            SideImage.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={item}
                                            alt=""
                                            className="h-100"
                                        />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
                {/* {ItemExist.length == 0 ? (
          <button
            className=" btn BuyBox_AddToList_btn w-100 text-center"
            onClick={() => dispatch(addToWishlist(id))}
          >
            Add To Wishlist
          </button>
        ) : (
          <button
            className=" btn BuyBox_AddToList_btn w-100 text-center"
            onClick={() => dispatch(deleteFromWishlist(id))}
          >
            Delete From Wishlist
          </button>
        )} */}

                <div className="MSP_Info_Container container-xl my-4">
                    <h2 className="MSP_Title pb-5 pt-2">
                        {SingleProduct?.title || "No Title"}
                    </h2>
                    <div className="MSP_Price_Container ">
                        <div className="MSP_Price d-inline  ">
                            <span className="MSP_Price_Txt">
                                {PriceFormat(
                                    CalcDiscount(
                                        SingleProduct?.discount,
                                        SingleProduct?.price
                                    )
                                )}
                            </span>
                        </div>
                        <div className="MSP_OldPrice d-inline ms-4">
                            <span className="MSP_Price_Txt">
                                {PriceFormat(SingleProduct?.price)}
                            </span>
                        </div>
                        <div className="MSP_Discount d-inline ms-2">
                            {!SingleProduct?.discount
                                ? ""
                                : `-${SingleProduct?.discount}%`}
                        </div>
                    </div>
                    <div className="MSP_Rating_Container">
                        <span className="SP_RatingStar_Txt">Rating:</span>
                        <span className="SP_RatingStar_Txt ms-1">
                            {SingleProduct?.rating}
                        </span>
                        {Array(
                            isNaN(SingleProduct?.rating)
                                ? 0
                                : Number(SingleProduct?.rating)
                        )
                            .fill()
                            .map((_, i) => (
                                <span
                                    className="RatingStar text-warning"
                                    key={i}
                                >
                                    <GradeRoundedIcon />
                                </span>
                            ))}
                        {Array(
                            5 - isNaN(SingleProduct?.rating)
                                ? 0
                                : Number(SingleProduct?.rating)
                        )
                            .fill()
                            .map((_, i) => (
                                <span
                                    className="RatingStarSecondary text-secondary"
                                    key={i}
                                >
                                    <GradeRoundedIcon />
                                </span>
                            ))}
                    </div>
                    <div className="MSP_LeftStock my-3">
                        <p className="LeftStock_Txt">
                            {SingleProduct?.stock > 0
                                ? `Only ${SingleProduct?.stock} left in stock -
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

            <div className="MSP_Footer w-100">
                <div className="row h-100 w-100 m-0">
                    <div className="col-4 pe-0 h-100">
                        <div className="MSP_Footer_Left_Container d-flex justify-content-between align-items-center text-center w-100 h-100">
                            <Link className="MSPF_Link h-100">
                                <StoreIcon />
                                <p className="MSPF_Link_Txt p-0 m-0">Store</p>
                            </Link>
                            <span className="MSPF_Separator"></span>
                            {ItemExist.length == 0 ? (
                                <Link
                                    className="MSPF_Link h-100"
                                    onClick={() => dispatch(addToWishlist(id))}
                                >
                                    <FavoriteBorderOutlinedIcon />
                                    <p className="MSPF_Link_Txt p-0 m-0">
                                        WishList
                                    </p>
                                </Link>
                            ) : (
                                <Link
                                    className="MSPF_Link h-100"
                                    onClick={() =>
                                        dispatch(deleteFromWishlist(id))
                                    }
                                >
                                    <FavoriteIcon />
                                    <p className="MSPF_Link_Txt p-0 m-0">
                                        WishList
                                    </p>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="col-8 p-0 h-100 pe-2">
                        <div className="MSPF_Container h-100 d-flex align-items-center">
                            <div className="MSPF_Shortcut h-100 w-100">
                                {SingleProduct?.stock > 0 && (
                                    <Link
                                        to="/checkout"
                                        className="MSPF_Shortcut_Link d-inline-block h-100 w-100"
                                    >
                                        <span className="MSPF_Shortcut_Txt">
                                            Buy Now
                                        </span>
                                    </Link>
                                )}
                            </div>
                            <div className="MSPF_Shortcut h-100 w-100">
                                {SingleProduct?.stock == 0 ? (
                                    <Link className="MSPF_Shortcut_Link d-inline-block h-100 w-100">
                                        <span className="MSPF_Shortcut_Txt">
                                            Out of stock
                                        </span>
                                    </Link>
                                ) : (
                                    <Link
                                        className="MSPF_Shortcut_Link d-inline-block h-100 w-100"
                                        onClick={() => {
                                            dispatch(
                                                addToCart(AddToCartProduct)
                                            );
                                            dispatch(totalPrice());
                                        }}
                                    >
                                        <span className="MSPF_Shortcut_Txt">
                                            Add To Cart
                                        </span>
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
