import { useEffect } from "react";
import "../../Css/Categories.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Home/ProductCard";
import { changeLayout } from "../../Store/Slices/productSlice";
const MobileCategories = () => {
    const ToggleFilterSidebar = () => {
        const FilterSidebar = document.querySelector(
            ".MobileCategories_Filter_Sidebar"
        );
        FilterSidebar.classList.toggle("show");
    };
    const dispatch = useDispatch();
    const Products = useSelector((state) => {
        return state.Products.items;
    });
    const Layout = useSelector((state) => state.Products.layout);
    const { Grid3x, Grid4x, Grid6x } = Layout;

    useEffect(() => {
        const MMHeader = document.querySelector(".Mobile_MainHeader");
        MMHeader.classList.add("D_None_MainHeader");
        return () => {
            MMHeader.classList.remove("D_None_MainHeader");
        };
    }, []);
    return (
        <div className="MobileCategories">
            <div className="MobileCategories_MainHeader px-2 position-relative">
                <SearchIcon className="MobileCategories_MainHeader_Search_Icon position-absolute " />
                <input
                    type="search"
                    placeholder="Search By E-Shop"
                    className="MobileCategories_MainHeader_Search_Input w-100 rounded-1"
                />
            </div>

            <div className="MobileCategories_Container">
                <div className="Mobile_Categories_Sort">
                    <div className="MobileCategories_SortBar_Container my-3 px-2 d-flex alig-items-center justify-content-between ">
                        <div className="MobileCategories_SortBar_Tags_Container d-flex align-items-center justify-content-between">
                            <span className="MobileCategories_SortBar_Heading d-flex align-items-center">
                                <span className="me-1">Top Sales</span>
                                <LocalFireDepartmentOutlinedIcon className="MobileCategories_SortBar_Icon" />
                            </span>
                            <span className="MobileCategories_SortBar_Heading d-flex align-items-center">
                                <span className="me-1">Price</span>
                                <span className="">$</span>
                            </span>
                            <span className="MobileCategories_SortBar_Heading d-flex align-items-center">
                                <span className="me-1">Top Ranked</span>
                                <LocalOfferOutlinedIcon className="MobileCategories_SortBar_Icon" />
                            </span>
                            <span className="MobileCategories_SortBar_Heading d-flex align-items-center">
                                <span className="me-1">New</span>
                                <AccessTimeOutlinedIcon className="MobileCategories_SortBar_Icon" />
                            </span>
                        </div>
                        <div className="MobileCategories_SortBar_Btn_Container d-flex align-items-center justify-content-end">
                            <span
                                className="me-1 pe-1 border-end"
                                style={{ lineHeight: "normal" }}
                                onClick={() => ToggleFilterSidebar()}
                            >
                                <FilterAltOutlinedIcon className="MobileCategories_Filter_Icon text-secondary" />
                            </span>
                            <span
                                onClick={() => {
                                    dispatch(changeLayout("Grid3x"));
                                }}
                            >
                                <GridViewRoundedIcon
                                    className={`MobileCategories_Filter_Icon text-secondary Categories_Layout_Selection_Icon ${
                                        Grid4x ? "active" : ""
                                    }`}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="MobileCategories_SortByWith_Container my-3 px-2 w-100 d-flex align-items-center justify-content-between position-relative">
                        <div className="dropdown w-100 position-static">
                            <button
                                className="btn MobileCategories_SortByWith_Tag dropdown-toggle w-50"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Link className="Categories_SortBar_Heading mx-auto">
                                    Category
                                </Link>
                            </button>

                            <ul
                                className="dropdown-menu w-100 border-0"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li className="w-100">
                                    <span className="dropdown-item d-flex align-items-center justify-content-between flex-wrap">
                                        <span className="MobileCategories_Categorory_Filter_Item pe-2">
                                            Men Fasion Watches
                                        </span>
                                        <span className="MobileCategories_Categorory_Filter_Item">
                                            Women Fasion Watches
                                        </span>
                                    </span>
                                </li>
                                <li className="w-100">
                                    <span className="dropdown-item d-flex align-items-center justify-content-between flex-wrap">
                                        <span className="MobileCategories_Categorory_Filter_Item pe-2">
                                            Men Fasion Watches
                                        </span>
                                        <span className="MobileCategories_Categorory_Filter_Item">
                                            Women Fasion Watches
                                        </span>
                                    </span>
                                </li>
                                <li className="w-100">
                                    <span className="dropdown-item d-flex align-items-center justify-content-between flex-wrap">
                                        <span className="MobileCategories_Categorory_Filter_Item pe-2">
                                            Men Fasion Watches
                                        </span>
                                        <span className="MobileCategories_Categorory_Filter_Item">
                                            Women Fasion Watches
                                        </span>
                                    </span>
                                </li>
                                <li className="w-100">
                                    <div className="dropdown-item MobileCategories_SortByWith_Footer_Container d-flex align-items-center justify-content-between flex-wrap">
                                        <button className="MobileCategories_SortByWith_Footer_Btn MobileCategories_SortByWith_Footer_ResetBtn btn">
                                            Reset
                                        </button>
                                        <button className="MobileCategories_SortByWith_Footer_Btn MobileCategories_SortByWith_Footer_DoneBtn btn">
                                            Done
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown w-100 position-static">
                            <button
                                className="btn MobileCategories_SortByWith_Tag dropdown-toggle w-50 ms-auto"
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Link className="Categories_SortBar_Heading mx-auto">
                                    Services
                                </Link>
                            </button>
                            <ul
                                className="dropdown-menu w-100 border-0 "
                                aria-labelledby="dropdownMenuButton2"
                            >
                                <li className="w-100">
                                    <span className="dropdown-item d-flex align-items-center justify-content-between flex-wrap">
                                        <span className="MobileCategories_Categorory_Filter_Item pe-2">
                                            Installments
                                        </span>
                                        <span className="MobileCategories_Categorory_Filter_Item">
                                            Free Shipping
                                        </span>
                                    </span>
                                </li>
                                <li className="w-100">
                                    <span className="dropdown-item d-flex align-items-center justify-content-between flex-wrap">
                                        <span className="MobileCategories_Categorory_Filter_Item pe-2">
                                            Fullfiled By E-Shop
                                        </span>
                                        <span className="MobileCategories_Categorory_Filter_Item">
                                            Cash On Delivery
                                        </span>
                                    </span>
                                </li>
                                <li className="w-100">
                                    <div className="dropdown-item MobileCategories_SortByWith_Footer_Container d-flex align-items-center justify-content-between flex-wrap">
                                        <button className="MobileCategories_SortByWith_Footer_Btn MobileCategories_SortByWith_Footer_ResetBtn btn">
                                            Reset
                                        </button>
                                        <button className="MobileCategories_SortByWith_Footer_Btn MobileCategories_SortByWith_Footer_DoneBtn btn">
                                            Done
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="Categories_Layout_Item_Container mt-5 px-3">
                    <div className="card-deck row w-100 m-0 align-items-stretch pb-5">
                        {Products?.length > 0 &&
                            Products.map((item, index) => {
                                return <ProductCard item={item} key={index} />;
                            })}
                    </div>
                </div>
            </div>

            <div className="MobileCategories_Filter_Sidebar">
                <div className="MC_Categories_Filter_Container ">
                    <div
                        className="MC_Categories_Filter_Header w-100 position-sticky top-0 bg-white border-bottom p-3 shadow-sm"
                        onClick={() => ToggleFilterSidebar()}
                    >
                        X
                    </div>
                    <div className="MC_Categories_Filter_Category_Container my-3 h-100 p-3">
                        <div className="MC_Categories_Filter_Category">
                            <p className="Categories_SortBar_Heading mb-2">
                                Categories
                            </p>
                            <div className="MC_Categories_Filter_Category_Items_Container d-flex align-items-center justify-content-between flex-wrap">
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                            </div>
                        </div>
                        <div className="MC_Categories_Filter_Category my-3">
                            <p className="Categories_SortBar_Heading mb-2">
                                Categories
                            </p>
                            <div className="MC_Categories_Filter_Category_Items_Container d-flex align-items-center justify-content-between flex-wrap">
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                            </div>
                        </div>
                        <div className="MC_Categories_Filter_Category my-3">
                            <p className="Categories_SortBar_Heading mb-2">
                                Categories
                            </p>
                            <div className="MC_Categories_Filter_Category_Items_Container d-flex align-items-center justify-content-between flex-wrap">
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                            </div>
                        </div>
                        <div className="MC_Categories_Filter_Category my-3">
                            <p className="Categories_SortBar_Heading mb-2">
                                Categories
                            </p>
                            <div className="MC_Categories_Filter_Category_Items_Container d-flex align-items-center justify-content-between flex-wrap">
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                                <span className="MC_Categories_Filter_Category_Items_Tag">
                                    Men Fasion Watches
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileCategories;
