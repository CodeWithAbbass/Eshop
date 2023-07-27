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
const EditOrderStatus = ({ updateOrderStatus, setUpdateOrderStatus }) => {
  const dispatch = useDispatch();
  let {
    id,
    orderid,
    status,
    publish,
    products,
    deliverto,
    email,
    phone,
    shipaddress,
    billaddress,
  } = updateOrderStatus;

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
      <div className="modal-dialog modal-dialog-centered">
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
            <div className="EditOrderStatus_OrderInfo py-3 px-4">
              <h6>Billing Details</h6>
              {!billaddress && <p className="FS_13 mb-0 fw-light">N/A</p>}
              {billaddress && (
                <div className="FS_13 mb-0 fw-light">
                  <p className="FS_13 mb-0 fw-light">{deliverto || ""}</p>
                  <p className="FS_13 mb-0 fw-light">{billaddress || ""}</p>
                </div>
              )}

              <div className="EditOrderStatus_Email_Container mt-3">
                <small className="FS_13 d-block mb-0">Email</small>
                <p className="FS_12 mb-0 d-flex align-items-center">
                  <MailOutlineIcon className="DAOIB_EditStatus_Icon me-2" />
                  <a
                    href={`mailto:${email || ""}`}
                    className="text-decoration-underline"
                  >
                    {email || "N/A"}
                  </a>
                </p>
              </div>
              <div className="EditOrderStatus_Phone_Container mt-3">
                <small className="FS_13 d-block mb-0">Phone</small>
                <p className="FS_12 mb-0">
                  <PhoneInTalkIcon className="DAOIB_EditStatus_Icon me-2" />
                  <a
                    href={`tel:${phone || ""}`}
                    className="text-decoration-underline"
                  >
                    {phone || ""}
                  </a>
                </p>
              </div>
            </div>

            <div className="EditOrderStatus_Product_Container mt-4">
              <div className="EditOrderStatus_Product_Header row m-0 w-100 FS_13 px-3">
                <div className="col-6 text-start">
                  <p className="mb-0 fw-semibold">Product</p>
                </div>
                <div className="col-3">
                  <p className="mb-0 fw-semibold">Quantity</p>
                </div>
                <div className="col-3 text-end">
                  <p className="mb-0 fw-semibold">Total</p>
                </div>
              </div>
              <div className="EditOrderStatus_Product_Body">
                {products?.length > 0 &&
                  products?.map((product, index) => {
                    let AfterDiscount = 0;
                    const { title, discount, quantity, price, ShippingFee } =
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
                        <div className="col-6 text-start">
                          <p className="mb-0 ">{title || ""}</p>
                        </div>
                        <div className="col-3 text-center">
                          <p className="mb-0 ">{quantity || ""}</p>
                        </div>
                        <div className="col-3 text-end">
                          <p className="mb-0 ">
                            {PriceFormat(AfterDiscount + ShippingFee)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex align-items-center justify-content-between">
            <div className="EditOrderModal_StatusBtn_Container d-flex align-items-center">
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
