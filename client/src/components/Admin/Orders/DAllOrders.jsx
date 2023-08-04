import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../Css/Admin/DOrder.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PriceFormat from "../../../helpers/PriceFormat";
import ColorFinder from "../../../helpers/ColorFinder";
import CalcDiscount from "../../../helpers/CalcDiscount";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { getAllOrders } from "../../../Store/Slices/orderSlice";
import EditOrderStatus from "../../Modals/EditOrderStatus";
import DateFormat from "../../../helpers/DataFormat";
const DAllOrders = () => {
  const dispatch = useDispatch();
  const AllOrders = useSelector((state) => state.Orders.orders);
  const [updateOrderStatus, setUpdateOrderStatus] = useState({});
  const [filterByCat, setFilterByCat] = useState("Filter By Category");
  const [filterByStockStatus, setFilterByStockStatus] = useState(
    "Filter By Stock Status"
  );
  const onChangeFilterByCat = (cat) => {
    setFilterByCat(cat);
  };
  const onChangeFilterByStockStatus = (stockStatus) => {
    setFilterByStockStatus(stockStatus);
  };

  useEffect(() => {
    dispatch(getAllOrders());
    return () => {};
  }, [dispatch]);
  return (
    <div className="DAllOrders">
      <div className="DAllOrders_Container">
        <div className="DAllOrders_Header_Container mb-5 d-flex align-items-center">
          <h4 className="m-0 fw-normal">All Orders</h4>
          <Link
            to="/admin/orders/add"
            className="btn DAdmin_Hero_Btn FS_12 ms-2 px-2 py-1"
          >
            Add New
          </Link>
        </div>
        {AllOrders.length == 0 ? (
          <div className="DAllProduct_NoProduct_Container text-center">
            <p className="mb-2">No Orders Yet</p>
            <Link
              to="/admin/products/addproduct"
              className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-4 py-1"
            >
              Add One
            </Link>
          </div>
        ) : (
          <div className="DAllOrders_Container">
            <div className="DAllOrders_Desktop">
              <div className="DAllOrders_Header w-100 d-flex flex-wrap align-items-center gap-3">
                <div className="dropdown DAllOrders_Header_Btn_Container">
                  <button
                    className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-100 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="true"
                  >
                    {filterByCat}
                  </button>
                  <ul className="dropdown-menu w-100 DAllProduct_AllProducts_Header_Btn_Item_Container p-0">
                    <li
                      className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                      onClick={() => onChangeFilterByCat("Clothing")}
                    >
                      Clothing
                    </li>
                    <li
                      className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                      onClick={() => onChangeFilterByCat("Decor")}
                    >
                      Decor
                    </li>
                    <li
                      className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                      onClick={() => onChangeFilterByCat("Digital")}
                    >
                      Digital
                    </li>
                    <li
                      className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                      onClick={() => onChangeFilterByCat("Music")}
                    >
                      Music
                    </li>
                  </ul>
                </div>
                <div className="dropdown DAllOrders_Header_Btn_Container">
                  <button
                    className="btn btn-outline-primary DAllOrders_Header_Btn FS_12 px-2 py-1 w-100 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="true"
                  >
                    {filterByStockStatus}
                  </button>
                  <ul className="dropdown-menu DAllProduct_AllProducts_Header_Btn_Item_Container p-0 w-100">
                    <li
                      className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item w-100"
                      onClick={() => onChangeFilterByStockStatus("In stock")}
                    >
                      In stock
                    </li>
                    <li
                      className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item w-100"
                      onClick={() =>
                        onChangeFilterByStockStatus("Out of stock")
                      }
                    >
                      Out of stock
                    </li>
                  </ul>
                </div>
                <div className="DAllProduct_AllProducts_Header_Search_Container h-100 d-flex align-items-center gap-3">
                  <input
                    type="search"
                    className="form-control shadow-none p-0 DAllProduct_AllProducts_Header_Search_Input FS_12 border border-primary px-2 py-1"
                    placeholder="Search By SKU or Name"
                  />
                  <button className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1">
                    <SearchIcon className="DAllProduct_AllProducts_Header_Search_Icon" />
                  </button>
                </div>
                <div className="DAllProduct_AllProducts_Header_Btn_Container">
                  <button className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1">
                    Clear Filter
                  </button>
                </div>
              </div>
              <div className="DAllProduct_AllProducts_Item_Container my-2">
                <div className="DAllOrders_Item_Header bg-white row m-0 w-100 justify-content-between border FS_14">
                  <div className="col-5">Order</div>
                  <div className="col-3">Date</div>
                  <div className="col-2">Status</div>
                  <div className="col-2 text-end">Total</div>
                </div>
                {AllOrders.length > 0 &&
                  AllOrders.map((order, index) => {
                    const {
                      id,
                      orderid,
                      status,
                      publish,
                      products,
                      shipaddress,
                      billaddress,
                    } = order;
                    let AfterDiscountPrice = 0;
                    products?.forEach((element) => {
                      AfterDiscountPrice =
                        AfterDiscountPrice +
                        element.shipfee +
                        CalcDiscount(element?.discount, element?.price) *
                          element?.quantity;
                    });
                    return (
                      <div
                        className={`DAllOrders_Item_Body FS_13 ${
                          index % 2 == 0 ? "bg-white" : ""
                        } row m-0 w-100 border border-top-0 justify-content-between`}
                        key={index}
                      >
                        <div className="col-5 DAOIB_OrderID_EditStatus d-flex align-items-center justify-content-between">
                          <div className="">
                            <span>{"#" + id || ""}</span>
                            <span className="ms-2">
                              {shipaddress?.deliverto || ""}
                            </span>
                          </div>

                          <Link
                            to={`/admin/orders/edit/${orderid}`}
                            className="ms-auto"
                          >
                            <ModeEditIcon className="DAOIB_EditStatus_Icon" />
                          </Link>
                          <button
                            type="button"
                            className="btn DAOIB_EditStatus_Btn"
                            data-bs-toggle="modal"
                            data-bs-target="#EditOrderStatus"
                            onClick={() => setUpdateOrderStatus(order)}
                          >
                            <VisibilityIcon className="DAOIB_EditStatus_Icon" />
                          </button>
                        </div>

                        <div className="col-3 DAOIB_OrderPlaced lh-sm d-flex flex-column justify-content-center FS_13">
                          <p className="mb-0">Order Placed</p>
                          <p className="mb-0">{DateFormat(publish)}</p>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-start">
                          <button
                            className={`btn btn-${ColorFinder(
                              status
                            )} DAOIB_OrderStatusBtn text-capitalize FS_13 `}
                          >
                            {status || ""}
                          </button>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-end text-end">
                          {PriceFormat(AfterDiscountPrice) || ""}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="DAllOrder_Mobile w-100">
              <div className="DAllProduct_AllProducts_Header d-flex flex-wrap align-items-center justify-content-start gap-3">
                <div className="d-flex align-items-center justify-content-start gap-3 w-auto">
                  <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container w-auto">
                    <button
                      className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-auto dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="true"
                    >
                      {filterByCat}
                    </button>
                    <ul className="dropdown-menu w-100 DAllProduct_AllProducts_Header_Btn_Item_Container p-0">
                      <li
                        className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                        onClick={() => onChangeFilterByCat("Clothing")}
                      >
                        Clothing
                      </li>
                      <li
                        className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                        onClick={() => onChangeFilterByCat("Decor")}
                      >
                        Decor
                      </li>
                      <li
                        className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                        onClick={() => onChangeFilterByCat("Digital")}
                      >
                        Digital
                      </li>
                      <li
                        className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                        onClick={() => onChangeFilterByCat("Music")}
                      >
                        Music
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container w-auto">
                    <button
                      className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-auto dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="true"
                    >
                      {filterByStockStatus}
                    </button>
                    <ul className="dropdown-menu DAllProduct_AllProducts_Header_Btn_Item_Container p-0 w-100">
                      <li
                        className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item w-100"
                        onClick={() => onChangeFilterByStockStatus("In stock")}
                      >
                        In stock
                      </li>
                      <li
                        className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item w-100"
                        onClick={() =>
                          onChangeFilterByStockStatus("Out of stock")
                        }
                      >
                        Out of stock
                      </li>
                    </ul>
                  </div>
                  <div className="DAllProduct_AllProducts_Header_Btn_Container w-auto">
                    <button className="btn btn-outline-primary DAllProduct_Header_Btn w-auto FS_12 px-2 py-1">
                      Clear
                    </button>
                  </div>
                </div>
                <div className="DAllProduct_AllProducts_Header_Search_Container h-100 d-flex align-items-center gap-3 w-auto ">
                  <input
                    type="search"
                    className="form-control shadow-none p-0 DAllProduct_AllProducts_Header_Search_Input FS_12 border border-primary px-2 py-1 w-100"
                    placeholder="Search Product"
                  />
                  <button className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-auto">
                    <SearchIcon className="DAllProduct_AllProducts_Header_Search_Icon" />
                  </button>
                </div>
              </div>

              <div className="DAllOrders_Item_Container">
                <div className="DAllOrders_Item_Header FS_14 row bg-white m-0 w-100 border-top mt-3">
                  <div className="px-2 mb-0 FS_13 col-6">Orders</div>
                  <div className="px-2 mb-0 FS_13 col-3">Status</div>
                  <div className="px-2 mb-0 FS_13 col-3 text-end">Total</div>
                </div>
                <div className="DALC_Cards_Container p-0">
                  {AllOrders.length > 0 &&
                    AllOrders.map((order, index) => {
                      const {
                        id,
                        orderid,
                        status,
                        publish,
                        products,
                        deliverto,
                        phone,
                        shipaddress,
                        billaddress,
                      } = order;
                      let AfterDiscountPrice = 0;
                      products?.forEach((element) => {
                        AfterDiscountPrice =
                          AfterDiscountPrice +
                          element.shipfee +
                          CalcDiscount(element?.discount, element?.price) *
                            element?.quantity;
                      });
                      return (
                        <div
                          className="bg-white border-top DAllOrders_Item py-2 row m-0 w-100 justify-content-between"
                          key={index}
                        >
                          <div className="DAllOrders_Item_OrderTo col-6 d-flex align-items-center justify-content-between">
                            <p className="DAllOrders_Item_Edit mb-0">
                              <span className="FS_13">{"#" + id}</span>
                              <span className="FS_13 ms-2">
                                {deliverto || ""}
                              </span>
                            </p>
                            <p className="DAllOrders_Item_Edit mb-0 ms-2 DAOIB_EditStatus_Btn me-2">
                              <Link
                                to={`/admin/orders/edit/${orderid}`}
                                className="FS_13"
                              >
                                <ModeEditIcon className="DAOIB_EditStatus_Icon" />
                              </Link>

                              <button
                                type="button"
                                className="btn DAOIB_EditStatus_Btn FS_13 ms-1 p-0"
                                data-bs-toggle="modal"
                                data-bs-target="#EditOrderStatus"
                                onClick={() => setUpdateOrderStatus(order)}
                              >
                                <VisibilityIcon className="DAOIB_EditStatus_Icon" />
                              </button>
                            </p>
                          </div>

                          <div className="DAllOrders_Item_Status col-3 p-0">
                            <button
                              className={`btn btn-${ColorFinder(
                                status
                              )} DAOIB_OrderStatusBtn text-capitalize FS_12 `}
                            >
                              {status || ""}
                            </button>
                          </div>
                          <div className="DAllOrders_Item_Total col-3 text-end d-flex align-items-center justify-content-end">
                            <span className="FS_12">
                              {PriceFormat(AfterDiscountPrice) || ""}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <EditOrderStatus
        updateOrderStatus={updateOrderStatus}
        setUpdateOrderStatus={setUpdateOrderStatus}
      />
    </div>
  );
};

export default DAllOrders;
