import "../../Css/Admin/DCoupon.css";
import SettingsIcon from "@mui/icons-material/Settings";
import BlockIcon from "@mui/icons-material/Block";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchProductModal from "../Modals/SearchProductModal";
import { useDispatch } from "react-redux";
const DCoupon = () => {
  const [AddProductToOrder, setAddProductToOrder] = useState([]);
  const [Exclude, setExclude] = useState({
    category: [],
    product: [],
  });
  const [Include, setInclude] = useState({
    category: [],
    product: [],
  });
  const [isIncluding, setIsIncluding] = useState(false);
  const [isExcluding, setIsExcluding] = useState(false);
  const dispatch = useDispatch();
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
  const DeleteProduct = (product) => {
    setAddProductToOrder(
      AddProductToOrder.filter((item, i) => product.uid != item.uid)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const SettingExcludeProduct = () => {
    setExcludeProduct([...AddProductToOrder]);
  };
  const SettingIncludeProduct = () => {
    setIncludeProduct([...AddProductToOrder]);
  };
  useEffect(() => {
    let NewProductsList = [];
    AddProductToOrder?.forEach((element, index) => {
      const { uid, title, shipfee } = element;
      const newProduct = {
        uid,
        title,
        shipfee,
      };
      NewProductsList.push(newProduct);
    });

    if (isExcluding) setExclude({ ...Exclude, product: [...NewProductsList] });
    if (isIncluding) setInclude({ ...Include, product: [...NewProductsList] });

    return () => {};
  }, [AddProductToOrder]);

  return (
    <div className="DCoupon p-3 px-lg-5 px-md-4 px-3">
      <div className="DCoupon_Container">
        <div className="DCoupon_Forms_Container">
          <div className="DCoupon_Info_Container">
            <div className="DCoupon_Name_Container mb-4">
              <input
                type="text"
                className="form-control rounded-0 shadow-none"
                id="title"
                name="title"
                autoComplete="true"
                placeholder="Coupon Code"
                // value={productData.title || ""}
                // onChange={onChangeAddProduct}
              />
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
                                htmlFor="discountType"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Discount Type
                              </label>
                              <select
                                className="form-select form-select-sm shadow-none DCoupon_Data_Info_Input border-2 FS_13"
                                aria-label="Small select example"
                              >
                                <option
                                  value="Percentage Discount"
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
                                htmlFor="couponamount"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Coupon Amount
                              </label>
                              <input
                                type="number"
                                className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                id="couponamount"
                                name="couponamount"
                                autoComplete="true"
                                placeholder="Please Enter Decimal Number"
                                onWheel={function (e) {
                                  e.target.blur();
                                }}
                              />
                            </div>
                            <div className="DCoupon_Data_Info_Expiry d-flex flex-wrap align-items-center mt-3">
                              <label
                                htmlFor="expiry"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Coupon Expiry
                              </label>
                              <input
                                type="date"
                                className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                id="expiry"
                                name="expiry"
                              />
                            </div>
                            <div className="DCoupon_Data_Info_FreeShipping d-flex flex-wrap align-items-center mt-3">
                              <label
                                htmlFor="freeShipping"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Free Shipping?
                              </label>
                              <input
                                className="form-check-input shadow-none mt-0 me-2"
                                type="checkbox"
                                name="freeshipping"
                                id="freeShipping"
                                // checked
                              />
                              <label
                                htmlFor="freeShipping"
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
                                htmlFor="minimumspend"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Minimum Spend
                              </label>
                              <input
                                type="number"
                                className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                id="minimumspend"
                                name="minimumspend"
                                autoComplete="true"
                                placeholder="No Minimum"
                                onWheel={function (e) {
                                  e.target.blur();
                                }}
                              />
                            </div>
                            <div className="DCoupon_Data_Info_MaximumSpend d-flex flex-wrap align-items-center mt-3">
                              <label
                                htmlFor="maximumspend"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Maximum Spend
                              </label>
                              <input
                                type="number"
                                className="form-control shadow-none DCoupon_Data_Info_Input border-2"
                                id="maximumspend"
                                name="maximumspend"
                                autoComplete="true"
                                placeholder="No Maximum"
                                onWheel={function (e) {
                                  e.target.blur();
                                }}
                              />
                            </div>
                            <div className="DCoupon_Data_Info_IndividualUse d-flex flex-wrap align-items-center mt-3">
                              <label
                                htmlFor="individaulUseOnly"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Individual Use Only
                              </label>
                              <input
                                className="form-check-input shadow-none mt-0 me-2"
                                type="checkbox"
                                name="individaulUseOnly"
                                id="individaulUseOnly"
                                // checked
                              />
                              <label
                                htmlFor="individaulUseOnly"
                                className="form-label DCoupon_Data_Info_Label mb-0 text-muted FS_12"
                              >
                                Check this box if the coupon cannot be used in
                                conjunction with other coupons.
                              </label>
                            </div>
                            <div className="DCoupon_Data_Info_ExcludeSale d-flex flex-wrap align-items-center mt-3">
                              <label
                                htmlFor="excludeSaleItems"
                                className="form-label DCoupon_Data_Info_Label me-3 mb-0"
                              >
                                Exclude Sale Items
                              </label>
                              <input
                                className="form-check-input shadow-none mt-0 me-2"
                                type="checkbox"
                                name="excludeSaleItems"
                                id="excludeSaleItems"
                                // checked
                              />
                              <label
                                htmlFor="excludeSaleItems"
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
                              <div className="DCoupon_Data_Info_Products_Container d-flex align-items-center gap-2">
                                {Include?.product?.map((product, index) => {
                                  return (
                                    <button
                                      className="btn FS_12 DCoupon_Data_Info_Products_Item"
                                      title="Click to Remove Product"
                                      key={index}
                                    >
                                      {product?.title || ""}
                                    </button>
                                  );
                                })}
                              </div>
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#SearchProductModal"
                                className="btn FS_12 rounded-1 m-0 mt-2 mt-md-0 ms-md-2 border"
                                onClick={() => {
                                  setIsExcluding(false);
                                  setIsIncluding(true);
                                }}
                              >
                                Add Item
                              </button>
                            </div>
                            <div className="DCoupon_Data_Info_ExcludeProducts d-flex flex-wrap align-items-center mt-3">
                              <p className="DCoupon_Data_Info_Label FS_12 me-3 mb-0">
                                Exclude Products
                              </p>
                              <div className="DCoupon_Data_Info_Products_Container d-flex align-items-center gap-2">
                                {Exclude?.product?.map((product, index) => {
                                  return (
                                    <button
                                      className="btn FS_12 DCoupon_Data_Info_Products_Item"
                                      title="Click to Remove Product"
                                      key={index}
                                    >
                                      {product?.title || ""}
                                    </button>
                                  );
                                })}
                              </div>
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#SearchProductModal"
                                className="btn FS_12 rounded-1 m-0 mt-2 mt-md-0 ms-md-2 border"
                                onClick={() => {
                                  setIsIncluding(false);
                                  setIsExcluding(true);
                                }}
                              >
                                Add Item
                              </button>
                            </div>
                          </div>
                          <div className="DCDIR_Item DCoupon_Data_Item_Right_Limit h-100 w-100 p-3">
                            Shipping
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
      <SearchProductModal
        AddProductToOrder={AddProductToOrder}
        setAddProductToOrder={setAddProductToOrder}
      />
    </div>
  );
};

export default DCoupon;
