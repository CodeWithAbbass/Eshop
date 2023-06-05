import { Link } from "react-router-dom";
import "../../Css/Categories.css";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Home/ProductCard";
import { changeLayout } from "../../Store/Slices/productSlice";
const DesktopCategories = () => {
  const dispatch = useDispatch();
  const [service, setService] = useState({
    Installments: false,
    CashOnDelivery: true,
    Fullfilled: false,
    FreeShipping: false,
  });
  const [location, setLocation] = useState({
    Pakistan: true,
    China: false,
    India: false,
  });
  const [sort, setSort] = useState("Best Match");
  const CategoriesItems = [
    { LinkTitle: "Men Fashion Watches", ItemLink: "#" },
    { LinkTitle: "Women Fashion Watches", ItemLink: "#" },
    { LinkTitle: "Men Casual Watches", ItemLink: "#" },
    { LinkTitle: "Men Sports Watches", ItemLink: "#" },
    { LinkTitle: "Men Business Watches", ItemLink: "#" },
    { LinkTitle: "Women Casual Watches", ItemLink: "#" },
    { LinkTitle: "Women Business Watches", ItemLink: "#" },
    { LinkTitle: "SmartWatches", ItemLink: "#" },
  ];
  const onChangeService = (input) => {
    setService((prevState) => {
      const newState = { ...prevState };

      // Set the target key to true
      newState[input] = true;

      // Set all other keys to false
      for (let key in newState) {
        if (key !== input) {
          newState[key] = false;
        }
      }
      return newState;
    });
  };
  const onChangeLocation = (input) => {
    setLocation((prevState) => {
      const newState = { ...prevState };

      // Set the target key to true
      newState[input] = true;

      // Set all other keys to false
      for (let key in newState) {
        if (key !== input) {
          newState[key] = false;
        }
      }
      return newState;
    });
  };
  const onChangeSort = (str) => {
    setSort(str);
  };
  const Products = useSelector((state) => {
    return state.Products.items;
  });
  const Layout = useSelector((state) => state.Products.layout);
  const { Grid3x, Grid4x, Grid6x } = Layout;

  return (
    <div className="DesktopCategories">
      <div className="container-xl">
        <div className="row border-top">
          <div className="col-lg-2 col-sm-3 py-3 pe-0 ">
            <div className="Categories_Links_Container border-bottom pb-3">
              <p className="Categories_Links_Heading mb-2">Categories</p>
              <div className="Categories_Link_Item_Container">
                {CategoriesItems.length == 0
                  ? ""
                  : CategoriesItems.map((item, index) => {
                      let { LinkTitle, ItemLink } = item;
                      return (
                        <Link
                          className="Categories_Link_Item d-block my-1"
                          to={ItemLink}
                          key={index}
                        >
                          {LinkTitle}
                        </Link>
                      );
                    })}
              </div>
            </div>
            <div className="Categories_Service_Item_Container mt-4 border-bottom pb-3">
              <p className="Categories_Links_Heading mb-2">Service</p>
              <div className="Categories_Link_Item_Container">
                <label
                  htmlFor={`Service_Item_Input1`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input1`}
                    checked={service.Installments}
                    onChange={() => onChangeService("Installments")}
                  />

                  <span className="Categories_Service_Item_Txt">
                    Installments
                  </span>
                </label>
                <label
                  htmlFor={`Service_Item_Input2`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input2`}
                    checked={service.CashOnDelivery}
                    onChange={() => onChangeService("CashOnDelivery")}
                  />

                  <span className="Categories_Service_Item_Txt">
                    Cash On Delivery
                  </span>
                </label>
                <label
                  htmlFor={`Service_Item_Input3`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input3`}
                    checked={service.Fullfilled}
                    onChange={() => onChangeService("Fullfilled")}
                  />

                  <span className="Categories_Service_Item_Txt">
                    Fullfiled By E-Shop
                  </span>
                </label>
                <label
                  htmlFor={`Service_Item_Input4`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input4`}
                    checked={service.FreeShipping}
                    onChange={() => onChangeService("FreeShipping")}
                  />
                  <span className="Categories_Service_Item_Txt">
                    Free Shipping
                  </span>
                </label>
              </div>
            </div>

            <div className="Categories_Location_Item_Container mt-4 border-bottom pb-3">
              <p className="Categories_Links_Heading mb-2">Location</p>
              <div className="Categories_Link_Item_Container">
                <label
                  htmlFor={`Service_Item_Input5`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input5`}
                    checked={location.Pakistan}
                    onChange={() => onChangeLocation("Pakistan")}
                  />

                  <span className="Categories_Service_Item_Txt">Pakistan</span>
                </label>
                <label
                  htmlFor={`Service_Item_Input6`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input6`}
                    checked={location.China}
                    onChange={() => onChangeLocation("China")}
                  />

                  <span className="Categories_Service_Item_Txt">China</span>
                </label>
                <label
                  htmlFor={`Service_Item_Input7`}
                  className="Categories_Service_Item d-flex align-items-center justify-content-start gap-2 w-100 my-1"
                >
                  <input
                    type="checkbox"
                    className="Categories_Service_Item_Input"
                    id={`Service_Item_Input7`}
                    checked={location.India}
                    onChange={() => onChangeLocation("India")}
                  />

                  <span className="Categories_Service_Item_Txt">India</span>
                </label>
              </div>
            </div>
            <div className="Categories_Price_Item_Container mt-4 border-bottom pb-3">
              <p className="Categories_Links_Heading mb-2">Price</p>
              <div className="Categories_Price_Item_Input_Container d-flex align-items-center justify-content-between ">
                <input
                  type="number"
                  id="MinPrice"
                  placeholder="Min"
                  className="Categories_Price_Input"
                  minLength={1}
                  min={1}
                  maxLength={5}
                  max={5}
                />
                <span className="Categories_Link_Item_Separator">-</span>
                <input
                  type="number"
                  id="MaxPrice"
                  placeholder="Max"
                  className="Categories_Price_Input"
                  minLength={5}
                  min={5}
                  maxLength={10}
                  max={10}
                />
                <button className="btn Categories_Price_Btn btn-primary">
                  <PlayArrowIcon />
                </button>
              </div>
            </div>
            <div className="Categories_Rating_Item_Container mt-4 border-bottom pb-3">
              <p className="Categories_Links_Heading mb-2">Rating</p>
              <div className="Categories_Rating_Container">
                <div className="Categories_Rating_Item">
                  {Array(5)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary text-warning d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                </div>
                <div className="Categories_Rating_Item d-flex align-items-center">
                  {Array(5 - 1)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary text-warning d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  {Array(5 - 4)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  <span className="Categories_Rating_Item_Txt d-inline-block h-100 mt-1 ms-2">
                    And Up
                  </span>
                </div>
                <div className="Categories_Rating_Item d-flex align-items-center">
                  {Array(5 - 2)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary text-warning d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  {Array(5 - 3)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  <span className="Categories_Rating_Item_Txt d-inline-block h-100 mt-1 ms-2">
                    And Up
                  </span>
                </div>
                <div className="Categories_Rating_Item d-flex align-items-center">
                  {Array(5 - 3)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary text-warning d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  {Array(5 - 2)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  <span className="Categories_Rating_Item_Txt d-inline-block h-100 mt-1 ms-2">
                    And Up
                  </span>
                </div>
                <div className="Categories_Rating_Item d-flex align-items-center">
                  {Array(5 - 4)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary text-warning d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  {Array(5 - 1)
                    .fill()
                    .map((_, i) => {
                      return (
                        <span
                          key={i}
                          className="Categories_Rating_Item_Secondary d-inline-block h-100"
                        >
                          <StarIcon className="Categories_Rating_Item_Icon" />
                        </span>
                      );
                    })}
                  <span className="Categories_Rating_Item_Txt d-inline-block h-100 mt-1 ms-2">
                    And Up
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-sm-9 py-3 px-0">
            <div className="Categories_Layout">
              <div className="Categories_Layout_Header border-bottom pb-3 pe-3">
                <div className="Categories_Header_Container d-flex align-items-center justify-content-between">
                  <p className="Categories_Search_ItemFound_Heading mb-0">
                    11969 items found for "Watch"
                  </p>
                  <div className="Categories_SortBar_Container d-flex align-items-center justify-content-between h-100">
                    <div className="Categories_SortBar_Selection_Container d-flex align-items-center justify-content-between h-100">
                      <span className="Categories_SortBar_Heading">
                        Sort By:
                      </span>
                      <div className="dropdown ms-1 h-100">
                        <Link
                          className="btn rounded-0 dropdown-toggle w-100 text-start border-0"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {sort}
                        </Link>

                        <ul
                          className="dropdown-menu p-0"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a
                              className={`dropdown-item ${
                                sort == "Best Match" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => onChangeSort("Best Match")}
                            >
                              Best Match
                            </a>
                          </li>
                          <li>
                            <a
                              className={`dropdown-item ${
                                sort == "Low to High" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => onChangeSort("Low to High")}
                            >
                              Price Low to High
                            </a>
                          </li>
                          <li>
                            <a
                              className={`dropdown-item ${
                                sort == "High to Low" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => onChangeSort("High to Low")}
                            >
                              Price High to Low
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="Categories_Layout_Selection_Container d-flex align-items-center justify-content-between h-100 ms-4">
                      <span className="Categories_SortBar_Heading">View:</span>
                      <div className="Categories_Layout_Selection_Icon_Container h-100">
                        <AppsRoundedIcon
                          className={`Categories_Layout_Selection_Icon CLSI_1  ${
                            Grid6x ? "active" : ""
                          }`}
                          onClick={() => {
                            dispatch(changeLayout("Grid6x"));
                          }}
                        />
                        <GridViewRoundedIcon
                          className={`Categories_Layout_Selection_Icon ${
                            Grid4x ? "active" : ""
                          }`}
                          onClick={() => {
                            dispatch(changeLayout("Grid4x"));
                          }}
                        />
                        <SquareRoundedIcon
                          className={`Categories_Layout_Selection_Icon ${
                            Grid3x ? "active" : ""
                          }`}
                          onClick={() => {
                            dispatch(changeLayout("Grid3x"));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Categories_HeaderBottom_Container">
                  <span className="Categories_SortBar_Heading">
                    Filtered By:
                  </span>
                  <span className="Categories_SortBar_Heading Categories_HeaderBottom_FilterTag mx-2">
                    Installment ❎
                  </span>
                  <span className="Categories_SortBar_Heading Categories_HeaderBottom_ClearAll">
                    Clear All
                  </span>
                </div>
              </div>

              <div className="Categories_Layout_Item_Container mt-5 px-3">
                <div className="card-deck row w-100 m-0 align-items-stretch">
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
      </div>
    </div>
  );
};

export default DesktopCategories;
