import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "react-router-dom";
import CalcDiscount from "../../helpers/CalcDiscount";
import PriceFormat from "../../helpers/PriceFormat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../Store/Slices/orderSlice";
import ColorFinder from "../../helpers/ColorFinder";
import DateFormat from "../../helpers/DataFormat";
const EditOrderStatus = ({ updateOrderStatus, setUpdateOrderStatus }) => {
  const dispatch = useDispatch();
  let { id, orderid, status, publish, products, shipaddress, billaddress } =
    updateOrderStatus;
  const ChangeOrderStatus = (status) => {
    // setUpdateOrderStatus({ ...updateOrderStatus, status });
    dispatch(updateStatus({ orderid, status }));
  };
  useEffect(() => {
    return () => {};
  }, [updateOrderStatus, status]);
  return (
    <div
      className="modal fade"
      id="EditOrderStatus"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content rounded-0">
          <div className="modal-header pe-0 py-0">
            <h2 className="modal-title fs-5" id="staticBackdropLabel">
              Order #{id || ""}
            </h2>
            <div className="modalBtn_Container">
              <button
                className={`btn btn-${ColorFinder(
                  status
                )} DAOIB_OrderStatusBtn text-capitalize FS_14 shadow-sm px-3 py-1`}
              >
                {status || ""}
              </button>
              <button
                type="button"
                className="btn DAOIB_OrderStatusCloseBtn rounded-0 ms-3 FS_14 text-muted px-3 py-1 border-0 border-start text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <ClearIcon className="DAOIB_EditStatus_Icon" />
              </button>
            </div>
          </div>
          <div className="modal-body p-0">
            <div className="EditOrderStatus_OrderInfo p-3">
              <h6>Billing Details</h6>

              {billaddress && (
                <div className="FS_13 mb-0 fw-light d-flex justify-content-between">
                  <div className="EditOrderStatus_Left">
                    <p className="FS_13 mb-0 fw-light">
                      {billaddress?.deliverto || ""}
                    </p>
                    <p className="FS_13 mb-0 fw-light mt-2 pe-3">
                      {billaddress?.address || ""}
                    </p>
                  </div>
                  <div className="EditOrderStatus_Right">
                    <div className="EditOrderStatus_Email_Container">
                      <small className="FS_12 mb-0 d-flex align-items-center">
                        <MailOutlineIcon className="DAOIB_EditStatus_Icon me-2" />
                        {billaddress?.email ? (
                          <a
                            href={`mailto:${billaddress?.email || ""}`}
                            className="text-decoration-underline"
                          >
                            {billaddress?.email || "N/A"}
                          </a>
                        ) : (
                          <p className="FS_13 mb-0 fw-light text-decoration-underline">
                            N/A
                          </p>
                        )}
                      </small>
                    </div>
                    <div className="EditOrderStatus_Phone_Container mt-2">
                      <small className="FS_12 mb-0">
                        <PhoneInTalkIcon className="DAOIB_EditStatus_Icon me-2" />
                        {billaddress?.phone ? (
                          <a
                            href={`tel:${billaddress?.phone || ""}`}
                            className="text-decoration-underline"
                          >
                            {billaddress?.phone || ""}
                          </a>
                        ) : (
                          <p className="FS_13 mb-0 fw-light text-decoration-underline">
                            N/A
                          </p>
                        )}
                      </small>
                    </div>
                  </div>
                </div>
              )}
              <h6 className="mt-4">Shipping Details</h6>

              {shipaddress && (
                <div className="FS_13 mb-0 fw-light d-flex justify-content-between">
                  <div className="EditOrderStatus_Left">
                    <p className="FS_13 mb-0 fw-light">
                      {shipaddress?.deliverto || ""}
                    </p>
                    <p className="FS_13 mb-0 fw-light mt-2 pe-3">
                      {shipaddress?.address || ""}
                    </p>
                  </div>
                  <div className="EditOrderStatus_Right">
                    <div className="EditOrderStatus_Email_Container">
                      <small className="FS_12 mb-0 d-flex align-items-center">
                        <MailOutlineIcon className="DAOIB_EditStatus_Icon me-2" />
                        {shipaddress?.email ? (
                          <a
                            href={`mailto:${shipaddress?.email || ""}`}
                            className="text-decoration-underline"
                          >
                            {shipaddress?.email || "N/A"}
                          </a>
                        ) : (
                          <p className="FS_13 mb-0 fw-light text-decoration-underline">
                            N/A
                          </p>
                        )}
                      </small>
                    </div>
                    <div className="EditOrderStatus_Phone_Container mt-2">
                      <small className="FS_12 mb-0">
                        <PhoneInTalkIcon className="DAOIB_EditStatus_Icon me-2" />
                        {shipaddress?.phone ? (
                          <a
                            href={`tel:${shipaddress?.phone || ""}`}
                            className="text-decoration-underline"
                          >
                            {shipaddress?.phone || ""}
                          </a>
                        ) : (
                          <p className="FS_13 mb-0 fw-light text-decoration-underline">
                            N/A
                          </p>
                        )}
                      </small>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="EditOrderStatus_Product_Container mt-4">
              <div className="EditOrderStatus_Product_Header row m-0 w-100 FS_13 px-3">
                <div className="col-6 ps-0 text-start">
                  <p className="mb-0 fw-semibold">Product</p>
                </div>
                <div className="col-3">
                  <p className="mb-0 fw-semibold">Quantity</p>
                </div>
                <div className="col-3 pe-0 text-end">
                  <p className="mb-0 fw-semibold">Total</p>
                </div>
              </div>
              <div className="EditOrderStatus_Product_Body">
                {products?.length > 0 &&
                  products?.map((product, index) => {
                    let AfterDiscount = 0;
                    const { title, discount, quantity, price, shipfee } =
                      product;
                    AfterDiscount =
                      AfterDiscount + CalcDiscount(discount, price) * quantity;
                    return (
                      <div
                        className={`EditOrderStatus_Product_Item row m-0 w-100 FS_13 mb-2 py-3 px-3 ${
                          index % 2 == 1 && "border-top"
                        }`}
                        key={index}
                      >
                        <div className="col-6 ps-0 text-start">
                          <p className="mb-0 ">{title || ""}</p>
                        </div>
                        <div className="col-3 text-center">
                          <p className="mb-0 ">{quantity || ""}</p>
                        </div>
                        <div className="col-3 pe-0 text-end">
                          <p className="mb-0 ">
                            {PriceFormat(AfterDiscount + shipfee)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="modal-footer px-3 py-2 d-flex align-items-center justify-content-between">
            <div className="EditOrderModal_StatusBtn_Container d-flex flex-wrap align-items-center">
              {/* pending || processing || shipped || delivered || returned || cancelled */}
              <button
                className={`btn EditOrderModal_StatusBtn FS_13 rounded-0 ${
                  status == "pending" ? "d-inline" : "d-none"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => ChangeOrderStatus("processing")}
              >
                Processing
              </button>
              <button
                className={`btn EditOrderModal_StatusBtn FS_13 rounded-0 ${
                  status == "pending" || status == "processing"
                    ? "d-inline"
                    : "d-none"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => ChangeOrderStatus("shipped")}
              >
                Shipped
              </button>
              <button
                className={`btn EditOrderModal_StatusBtn FS_13 rounded-0 ${
                  status == "pending" ||
                  status == "processing" ||
                  status == "shipped"
                    ? "d-inline"
                    : "d-none"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => ChangeOrderStatus("delivered")}
              >
                Delivered
              </button>
              <button
                className={`btn EditOrderModal_StatusBtn FS_13 rounded-0 ${
                  status == "pending" || status == "processing"
                    ? "d-inline"
                    : "d-none"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => ChangeOrderStatus("cancelled")}
              >
                Cancelled
              </button>
              <button
                className={`btn EditOrderModal_StatusBtn FS_13 rounded-0 ${
                  status == "pending" ||
                  status == "processing" ||
                  status == "shipped"
                    ? "d-inline"
                    : "d-none"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => ChangeOrderStatus("returned")}
              >
                Returned
              </button>
            </div>
            <button
              type="button"
              className="btn p-0 EditOrderModal_EditBtn border-0 FS_13"
              disabled={
                status != "pending" && status != "processing" ? true : false
              }
            >
              <Link className="btn btn-primary EditOrderModal_EditBtn text-capitalize FS_13">
                Edit
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrderStatus;
