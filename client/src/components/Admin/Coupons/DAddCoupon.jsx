import "../../../Css/Admin/DCoupon.css";
import SettingsIcon from "@mui/icons-material/Settings";
import BlockIcon from "@mui/icons-material/Block";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchProductModal from "../../Modals/SearchProductModal";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../../Store/Slices/couponSlice";
const DAddCoupon = () => {
  const AllCat = useSelector((state) => state.Categories.categories);
  const [AddProductToOrder, setAddProductToOrder] = useState([]);
  const [isIncluding, setIsIncluding] = useState(false); // Flag
  const [isExcluding, setIsExcluding] = useState(false); // Flag
  const [CouponData, setCouponData] = useState({
    coupon_code: "",
    description: "",
    discount_type: "Percentage Discount",
    coupon_amount: null,
    coupon_expiry: "",
    free_shipping: false,
    minimum_spend: null,
    maximum_spend: null,
    individual_use_only: false,
    exclude_sale_item: false,
    include: { product: [], category: [] },
    exclude: { product: [], category: [] },
    limit_per_coupon: null,
    limit_per_user: null,
  });

  const dispatch = useDispatch();
  const GenerateCouponCode = (length = 8) => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let couponCode = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      couponCode += charset[randomIndex];
    }

    return couponCode;
  };
  const ToggleProductDataTab = (tab) => {
    const AllTabs = document.querySelectorAll(".DCDIR_Item");
    const AllMenus = document.querySelectorAll(".DCoupon_Data_Item");
    AllTabs.forEach((element, index, arr) => {
      element.classList.remove("active");
      element.classList.remove("hide");
      if (index + 1 == tab) {
        element.classList.add("active");
      }
    });
    AllMenus.forEach((element, index) => {
      element.classList.remove("active");
      if (index + 1 == tab) {
        element.classList.add("active");
      }
    });
  };
  const DeleteIncludeProduct = (product) => {
    const NewProducts = CouponData?.include?.product?.filter(
      (item, i) => product.uid != item.uid
    );
    setCouponData({
      ...CouponData,
      include: {
        ...CouponData?.include,
        product: [...NewProducts],
      },
    });
  };
  const DeleteExcludeProduct = (product) => {
    const NewProducts = CouponData?.exclude?.product?.filter(
      (item, i) => product.uid != item.uid
    );
    setCouponData({
      ...CouponData,
      exclude: {
        ...CouponData?.exclude,
        product: [...NewProducts],
      },
    });
  };
  const onChangeCategory = (e) => {
    const { name, value } = e.target;
    const slicedCat = value.split(",");

    if (isIncluding) {
      setCouponData({
        ...CouponData,
        include: {
          ...CouponData.include,
          category: [...slicedCat],
        },
      });
    }
    if (isExcluding) {
      setCouponData({
        ...CouponData,
        exclude: {
          ...CouponData.exclude,
          category: [...slicedCat],
        },
      });
    }
  };
  const onChangeCouponData = (e) => {
    let { name, value, checked } = e.target;
    if (+value < 1) {
      value = "";
    }
    if (
      name == "free_shipping" ||
      name == "individual_use_only" ||
      name == "exclude_sale_item"
    ) {
      setCouponData({
        ...CouponData,
        [name]: checked,
      });
      return;
    }
    setCouponData({
      ...CouponData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCoupon(CouponData));
  };

  useEffect(() => {
    let NewProductsList = [];
    AddProductToOrder?.forEach((element, index) => {
      const { uid, title, shipfee, category } = element;
      const newProduct = {
        uid,
        title,
        shipfee,
        category,
      };
      NewProductsList.push(newProduct);
    });

    if (isExcluding)
      setCouponData({
        ...CouponData,
        exclude: { ...CouponData?.exclude, product: [...NewProductsList] },
      });
    if (isIncluding)
      setCouponData({
        ...CouponData,
        include: { ...CouponData?.include, product: [...NewProductsList] },
      });

    return () => {};
  }, [AddProductToOrder]);

  return (
    <div className="DCoupon p-3 px-lg-5 px-md-4 px-3">
      <div className="DCoupon_Container">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="DAddProduct_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between">
            <button type="submit" className={`btn DAdmin_Hero_Btn FS_14`}>
              Create Coupon
            </button>
          </div>
          <div className="DCoupon_FormFields_Container">
            <div className="DCoupon_Info_Container">
              <div className="DCoupon_Name_Container mb-3 position-relative">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none text-uppercase"
                  id="coupon_code"
                  name="coupon_code"
                  autoComplete="true"
                  required
                  placeholder="Coupon Code"
                  value={CouponData.coupon_code || ""}
                  onChange={onChangeCouponData}
                />
                <button
                  className="btn DAdmin_Hero_Btn shadow-none mt-2"
                  onClick={() =>
                    setCouponData({
                      ...CouponData,
                      coupon_code: GenerateCouponCode(8),
                    })
                  }
                >
                  Generate Code
                </button>
              </div>
              <div className="DCoupon_Desc_Container mb-4">
                <textarea
                  className="form-control rounded-0 shadow-none"
                  id="description"
                  name="description"
                  autoComplete="true"
                  maxLength="250"
                  cols="5"
                  rows="2"
                  placeholder="Description (Optional)"
                  value={CouponData.description || ""}
                  onChange={onChangeCouponData}
                ></textarea>
              </div>
              <div className="DALCF_Product_Data_Container mt-4">
                <div className="accordion rounded-0" id="CouponCardContainer">
                  <div className="accordion-item rounded-0 overflow-hidden">
                    <h2 className="accordion-header rounded-0">
                      <button
                        className="accordion-button shadow-none bg-transparent rounded-0 border-bottom p-2 h-100 DALC_Cards_Item_Heading"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CouponCard"
                        aria-expanded="true"
                        aria-controls="CouponCard"
                      >
                        Coupon Data
                      </button>
                    </h2>
                    <div
                      id="CouponCard"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#CouponCardContainer"
                    >
                      <div className="accordion-body p-0">
                        <div className="DCoupon_Data_Items_Container d-flex ">
                          <div className="DCoupon_Data_Item_Left">
                            <ul className="list-group rounded-0 p-0 h-100 border-end">
                              <li
                                className={`DCoupon_Data_Item list-group-item border-bottom border-0 active d-flex align-items-center px-3`}
                                onClick={() => ToggleProductDataTab(1)}
                              >
                                <SettingsIcon className="DCoupon_Data_Item_Icon" />
                                <Link className="DCoupon_Data_Item_Link ms-2">
                                  General
                                </Link>
                              </li>
                              <li
                                className="DCoupon_Data_Item list-group-item border-bottom border-0 d-flex align-items-center px-3"
                                onClick={() => ToggleProductDataTab(2)}
                              >
                                <BlockIcon className="DCoupon_Data_Item_Icon" />
                                <Link className="DCoupon_Data_Item_Link ms-2">
                                  Usage Restriction
                                </Link>
                              </li>
                              <li
                                className="DCoupon_Data_Item list-group-item border-bottom border-0 d-flex align-items-center px-3"
                                onClick={() => ToggleProductDataTab(3)}
                              >
                                <WarningAmberIcon className="DCoupon_Data_Item_Icon" />
                                <Link className="DCoupon_Data_Item_Link ms-2">
                                  Usage Limits
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="DCoupon_Data_Item_Right position-relative FS_13">
                            <div className="DCDIR_Item DCoupon_Data_Item_Right_General h-100 w-100 active p-3">
                              <div className="DCoupon_Data_Info_DiscountType d-flex flex-wrap align-items-center">
                                <label
                                  htmlFor="discount_type"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Discount Type
                                </label>
                                <select
                                  className="form-select form-select-sm shadow-none DCoupon_Data_Info_Input border-2 FS_13"
                                  aria-label="Small select example"
                                  name="discount_type"
                                  id="discount_type"
                                  value={CouponData?.discount_type || ""}
                                  onChange={onChangeCouponData}
                                >
                                  <option
                                    value="Percentage_Discount"
                                    className="DCoupon_Data_Info_Option FS_12"
                                  >
                                    Percentage Discount
                                  </option>
                                  <option
                                    value="Fixed Cart Discount"
                                    className="DCoupon_Data_Info_Option FS_12"
                                  >
                                    Fixed Cart Discount
                                  </option>
                                  <option
                                    value="Fixed Product Discount"
                                    className="DCoupon_Data_Info_Option FS_12"
                                  >
                                    Fixed Product Discount
                                  </option>
                                </select>
                              </div>
                              <div className="DCoupon_Data_Info_CouponAmount d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="coupon_amount"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Coupon Amount
                                </label>
                                <input
                                  type="number"
                                  className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                  id="coupon_amount"
                                  name="coupon_amount"
                                  autoComplete="true"
                                  required
                                  value={CouponData?.coupon_amount || ""}
                                  placeholder="Please Enter Decimal Number"
                                  onWheel={function (e) {
                                    e.target.blur();
                                  }}
                                  onChange={onChangeCouponData}
                                />
                              </div>
                              <div className="DCoupon_Data_Info_Expiry d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="coupon_expiry"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Coupon Expiry
                                </label>
                                <input
                                  type="date"
                                  className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                  id="coupon_expiry"
                                  name="coupon_expiry"
                                  required
                                  value={CouponData?.coupon_expiry || ""}
                                  onChange={onChangeCouponData}
                                />
                              </div>
                              <div className="DCoupon_Data_Info_FreeShipping d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="free_shipping"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Free Shipping?
                                </label>
                                <input
                                  className="form-check-input shadow-none mt-0 me-2"
                                  type="checkbox"
                                  name="free_shipping"
                                  id="free_shipping"
                                  checked={CouponData?.free_shipping || ""}
                                  onChange={onChangeCouponData}
                                />
                                <label
                                  htmlFor="free_shipping"
                                  className="form-label DCoupon_Data_Info_Label mb-0 text-muted FS_12"
                                >
                                  Check this box if the coupon grants free
                                  shipping.
                                </label>
                              </div>
                            </div>
                            <div className="DCDIR_Item DCoupon_Data_Item_Right_Restriction h-100 w-100 p-3">
                              <div className="DCoupon_Data_Info_MinimumSpend d-flex flex-wrap align-items-center">
                                <label
                                  htmlFor="minimum_spend"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Minimum Spend
                                </label>
                                <input
                                  type="number"
                                  className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                  id="minimum_spend"
                                  name="minimum_spend"
                                  autoComplete="true"
                                  placeholder="No Minimum"
                                  value={CouponData?.minimum_spend || ""}
                                  onWheel={function (e) {
                                    e.target.blur();
                                  }}
                                  onChange={onChangeCouponData}
                                />
                              </div>
                              <div className="DCoupon_Data_Info_MaximumSpend d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="maximum_spend"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Maximum Spend
                                </label>
                                <input
                                  type="number"
                                  className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                  id="maximum_spend"
                                  name="maximum_spend"
                                  autoComplete="true"
                                  placeholder="No Maximum"
                                  value={CouponData?.maximum_spend || ""}
                                  onWheel={function (e) {
                                    e.target.blur();
                                  }}
                                  onChange={onChangeCouponData}
                                />
                              </div>
                              <div className="DCoupon_Data_Info_IndividualUse d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="individual_use_only"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Individual Use Only
                                </label>
                                <input
                                  className="form-check-input shadow-none mt-0 me-2"
                                  type="checkbox"
                                  name="individual_use_only"
                                  id="individual_use_only"
                                  checked={
                                    CouponData?.individual_use_only || false
                                  }
                                  onChange={onChangeCouponData}
                                />
                                <label
                                  htmlFor="individual_use_only"
                                  className="form-label DCoupon_Data_Info_Label mb-0 text-muted FS_12"
                                >
                                  Check this box if the coupon cannot be used in
                                  conjunction with other coupons.
                                </label>
                              </div>
                              <div className="DCoupon_Data_Info_ExcludeSaleItem d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="exclude_sale_item"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Exclude Sale Items
                                </label>
                                <input
                                  className="form-check-input shadow-none mt-0 me-2"
                                  type="checkbox"
                                  name="exclude_sale_item"
                                  id="exclude_sale_item"
                                  checked={
                                    CouponData?.exclude_sale_item || false
                                  }
                                  onChange={onChangeCouponData}
                                />
                                <label
                                  htmlFor="exclude_sale_item"
                                  className="form-label DCoupon_Data_Info_Label mb-0 text-muted FS_12"
                                >
                                  Check this box if the coupon cannot be used on
                                  sale items.
                                </label>
                              </div>
                              <div className="DCoupon_Data_Info_IncludeProducts d-flex flex-wrap align-items-center mt-3">
                                <p className="DCoupon_Data_Info_Label FS_12 me-3 mb-0">
                                  Products
                                </p>
                                <div className="DCoupon_Data_Info_Products_Container d-flex flex-wrap align-items-center gap-3">
                                  {CouponData?.include?.product?.map(
                                    (product, index) => {
                                      return (
                                        <button
                                          className="btn FS_12 DCoupon_Data_Info_Products_Item"
                                          title="Click to Remove Product"
                                          key={index}
                                          onClick={() => {
                                            DeleteIncludeProduct(product);
                                          }}
                                        >
                                          {product?.title || ""}
                                        </button>
                                      );
                                    }
                                  )}

                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#SearchProductModal"
                                    className="btn FS_12 rounded-1 border"
                                    onClick={() => {
                                      setIsIncluding(true);
                                      setIsExcluding(false);
                                    }}
                                  >
                                    Add Item
                                  </button>
                                </div>
                              </div>
                              <div className="DCoupon_Data_Info_ExcludeProducts d-flex flex-wrap align-items-center mt-3">
                                <p className="DCoupon_Data_Info_Label FS_12 me-3 mb-0">
                                  Exclude Products
                                </p>
                                <div className="DCoupon_Data_Info_Products_Container d-flex flex-wrap align-items-center justify-content-start gap-3">
                                  {CouponData?.exclude?.product?.map(
                                    (product, index) => {
                                      return (
                                        <button
                                          className="btn FS_12 DCoupon_Data_Info_Products_Item"
                                          title="Click to Remove Product"
                                          key={index}
                                          onClick={() => {
                                            DeleteExcludeProduct(product);
                                          }}
                                        >
                                          {product?.title || ""}
                                        </button>
                                      );
                                    }
                                  )}

                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#SearchProductModal"
                                    className="btn FS_12 rounded-1 m-0 border"
                                    onClick={() => {
                                      setIsExcluding(true);
                                      setIsIncluding(false);
                                    }}
                                  >
                                    Add Item
                                  </button>
                                </div>
                              </div>
                              <div className="DCoupon_Data_Info_IncludeCategory d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="IncludeCategory"
                                  className="DCoupon_Data_Info_Label FS_12 me-3 mb-0"
                                >
                                  Include Category
                                </label>
                                <div className="DCoupon_Data_Info_Products_Container">
                                  <div className="dropdown">
                                    <input
                                      type="text"
                                      id="IncludeCategory"
                                      name="includecategory"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                      className="form-control shadow-none DCoupon_Data_Info_Input border-2 FS_12"
                                      placeholder="Search"
                                      value={
                                        CouponData?.include?.category?.join() ||
                                        ""
                                      }
                                      onChange={(e) => {
                                        setIsExcluding(false);
                                        setIsIncluding(true);
                                        onChangeCategory(e);
                                      }}
                                    />

                                    <ul className="dropdown-menu py-0 rounded-1">
                                      {AllCat.length > 0 &&
                                        AllCat?.map((cat, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="FS_13 FW_500 py-1 px-3 dropdown-item DCoupon_Data_Info_Products_Cat"
                                              onClick={() =>
                                                setCouponData({
                                                  ...CouponData,
                                                  include: {
                                                    ...CouponData.include,
                                                    category: [
                                                      ...CouponData?.include
                                                        ?.category,
                                                      cat.name,
                                                    ],
                                                  },
                                                })
                                              }
                                            >
                                              {cat?.name || ""}
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="DCoupon_Data_Info_ExcludeCategory d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="ExcludeCategory"
                                  className="DCoupon_Data_Info_Label FS_12 me-3 mb-0"
                                >
                                  Exclude Category
                                </label>
                                <div className="DCoupon_Data_Info_Products_Container">
                                  <div className="dropdown">
                                    <input
                                      type="search"
                                      id="ExcludeCategory"
                                      name="excludecategory"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                      value={
                                        CouponData?.exclude?.category?.join() ||
                                        "Search"
                                      }
                                      onChange={(e) => {
                                        setIsIncluding(false);
                                        setIsExcluding(true);
                                        onChangeCategory(e);
                                      }}
                                      className="form-control shadow-none DCoupon_Data_Info_Input border-2 FS_12"
                                    />

                                    <ul className="dropdown-menu py-0 rounded-1">
                                      {AllCat.length > 0 &&
                                        AllCat?.map((cat, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="FS_13 FW_500 py-1 px-3 dropdown-item DCoupon_Data_Info_Products_Cat"
                                              onClick={() =>
                                                setCouponData({
                                                  ...CouponData,
                                                  exclude: {
                                                    ...CouponData.exclude,
                                                    category: [
                                                      ...CouponData?.exclude
                                                        ?.category,
                                                      cat.name,
                                                    ],
                                                  },
                                                })
                                              }
                                            >
                                              {cat?.name || ""}
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="DCDIR_Item DCoupon_Data_Item_Right_Limit h-100 w-100 p-3">
                              <div className="DCoupon_Data_Info_LimitPerCoupon d-flex flex-wrap align-items-center">
                                <label
                                  htmlFor="limit_per_coupon"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Limit Per Coupon
                                </label>
                                <input
                                  type="number"
                                  className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                  id="limit_per_coupon"
                                  name="limit_per_coupon"
                                  autoComplete="true"
                                  placeholder="Unlimited Usage"
                                  value={CouponData?.limit_per_coupon || ""}
                                  onWheel={function (e) {
                                    e.target.blur();
                                  }}
                                  onChange={onChangeCouponData}
                                />
                              </div>
                              <div className="DCoupon_Data_Info_LimitPerUser d-flex flex-wrap align-items-center mt-3">
                                <label
                                  htmlFor="limit_per_user"
                                  className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                                >
                                  Limit Per User
                                </label>
                                <input
                                  type="number"
                                  className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                  id="limit_per_user"
                                  name="limit_per_user"
                                  autoComplete="true"
                                  placeholder="Usage Unlimited"
                                  value={CouponData?.limit_per_user || ""}
                                  onWheel={function (e) {
                                    e.target.blur();
                                  }}
                                  onChange={onChangeCouponData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SearchProductModal
        AddProductToOrder={AddProductToOrder}
        setAddProductToOrder={setAddProductToOrder}
      />
    </div>
  );
};

export default DAddCoupon;
