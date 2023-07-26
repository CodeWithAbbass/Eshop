import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "react-router-dom";
const EditOrderStatus = () => {
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
              Order #2
            </h2>
            <div className="modalBtn_Container">
              <button
                className={`btn btn-warning DAOIB_OrderStatusBtn text-capitalize FS_14 text-muted shadow-sm px-3 py-1`}
              >
                Pending
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
              <p className="FS_13 mb-0 fw-light">N/A</p>
              <p className="FS_13 mb-0 fw-light">Abbas Ali</p>
              <p className="FS_13 mb-0 fw-light">Chaos</p>
              <p className="FS_13 mb-0 fw-light">Karachi</p>
              <p className="FS_13 mb-0 fw-light">Sindh</p>
              <p className="FS_13 mb-0 fw-light">Pakistan</p>
              <div className="EditOrderStatus_Email_Container mt-3">
                <small className="FS_13 d-block mb-0">Email</small>
                <p className="FS_12 mb-0">
                  <MailOutlineIcon className="DAOIB_EditStatus_Icon me-2" />
                  <Link className="text-decoration-underline">
                    chaoscorp@gmail.com
                  </Link>
                </p>
              </div>
              <div className="EditOrderStatus_Phone_Container mt-3">
                <small className="FS_13 d-block mb-0">Phone</small>
                <p className="FS_12 mb-0">
                  <PhoneInTalkIcon className="DAOIB_EditStatus_Icon me-2" />
                  <Link className="text-decoration-underline">
                    chaoscorp@gmail.com
                  </Link>
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
                <div className="EditOrderStatus_Product_Item row m-0 w-100 FS_13 mb-2 py-3 px-3">
                  <div className="col-6 text-start">
                    <p className="mb-0 ">V-Neck T-Shirt - Red</p>
                  </div>
                  <div className="col-3 text-center">
                    <p className="mb-0 ">1</p>
                  </div>
                  <div className="col-3 text-end">
                    <p className="mb-0 ">$20.00</p>
                  </div>
                </div>
                <div className="EditOrderStatus_Product_Item row m-0 w-100 FS_13 mb-2 border-top py-3 px-3">
                  <div className="col-6 text-start">
                    <p className="mb-0 ">V-Neck T-Shirt - Red</p>
                  </div>
                  <div className="col-3 text-center">
                    <p className="mb-0 ">1</p>
                  </div>
                  <div className="col-3 text-end">
                    <p className="mb-0 ">$20.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex align-items-center justify-content-between">
            <div className="EditOrderModal_StatusBtn_Container d-flex align-items-center">
              <button className="btn EditOrderModal_StatusBtn FS_13 rounded-0">
                On Hold
              </button>
              <button className="btn EditOrderModal_StatusBtn FS_13 rounded-0">
                Processing
              </button>
              <button className="btn EditOrderModal_StatusBtn FS_13 rounded-0">
                Cancel
              </button>
              <button className="btn EditOrderModal_StatusBtn FS_13 rounded-0">
                Complete
              </button>
            </div>
            <Link
              type="button"
              className="btn btn-primary EditOrderModal_EditBtn text-capitalize FS_13"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrderStatus;
