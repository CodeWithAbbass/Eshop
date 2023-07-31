import { useDispatch } from "react-redux";
import "../../../Css/Admin/DOrder.css";
import { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Link } from "react-router-dom";
const DAddOrder = () => {
  const dispatch = useDispatch();

  const [orderData, setOrderData] = useState({
    shipaddress: {
      deliverto: "",
      phone: "",
      email: "",
      address: "",
    },
    billaddress: {
      deliverto: "",
      phone: "",
      email: "",
      address: "",
    },
    setAsShipAddress: false,
    paymentmethod: "cod",
    products: [],
  });
  const ShipOnChange = (e) => {
    const { name, value } = e.target;
    const ShipAddress = { ...orderData.shipaddress, [name]: value };
    if (orderData?.setAsShipAddress) {
      setOrderData({
        ...orderData,
        shipaddress: ShipAddress,
        billaddress: ShipAddress,
      });
    } else {
      setOrderData({ ...orderData, shipaddress: ShipAddress });
    }
  };
  const BillOnChange = (e) => {
    const { name, value } = e.target;
    const BillAddress = { ...orderData.billaddress, [name]: value };
    setOrderData({ ...orderData, billaddress: BillAddress });
  };
  const setAsShipAddressOnChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setOrderData({
        ...orderData,
        billaddress: { ...orderData.shipaddress },
        setAsShipAddress: true,
      });
    } else {
      setOrderData({
        ...orderData,
        billaddress: {},
        setAsShipAddress: false,
      });
    }
  };
  const PaymentOnChange = (e) => {
    const { value } = e.target;
    setOrderData({ ...orderData, paymentmethod: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);
  };
  return (
    <div className="AddOrder">
      <div className="AddOrder_Container">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="DAddOrder_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between">
            <button type="submit" className={`btn DAdmin_Hero_Btn FS_14`}>
              Create Order
            </button>
          </div>
          <div className="DAddProduct_Layout_Container d-flex flex-wrap align-items-start justify-content-between gap-4">
            <div className="DALC_Forms_Container ">
              <div className="DALC_Forms_OrderData_Container bg-white border">
                <h5 className="DALC_Forms_OrderData_Heading fw-normal px-3 pt-3">
                  Order Details
                </h5>
                <div className="DALC_Forms_OrderData_Details_Container row m-0 w-100 mt-4 flex-wrap pb-3">
                  <div className="DALC_Forms_OrderData_General_Container col-12 col-lg-12 col-xxl-4 mb-5">
                    <p className="FS_14 text-dark FW_500">General</p>
                    <p className="mb-0 text-secondary FS_13">Status:</p>
                    <select
                      className="form-select shadow-none rounded-1 FS_13 p-1 px-2"
                      aria-label="Default select example"
                      disabled
                    >
                      {/* pending || processing || shipped || delivered || returned || cancelled */}
                      <option value="pending" className="text-capitalize p-2">
                        Pending
                      </option>
                      <option
                        value="processing"
                        className="text-capitalize p-2"
                      >
                        Processing
                      </option>
                      <option value="shipped" className="text-capitalize p-2">
                        Shipped
                      </option>
                      <option value="delivered" className="text-capitalize p-2">
                        Delivered
                      </option>
                      <option value="completed" className="text-capitalize p-2">
                        Completed
                      </option>
                      <option value="returned" className="text-capitalize p-2">
                        Returned
                      </option>
                      <option value="cancelled" className="text-capitalize p-2">
                        Cancelled
                      </option>
                    </select>

                    <p className="mb-0 text-secondary FS_13 mt-3">
                      Payment Method:
                    </p>
                    <select
                      className="form-select shadow-none rounded-1 FS_13 p-1 px-2"
                      aria-label="Default select example"
                      onChange={PaymentOnChange}
                    >
                      {/* pending || processing || shipped || delivered || returned || cancelled */}
                      <option value="cod" className="text-capitalize p-2">
                        Cash on delivery
                      </option>
                      <option value="card" className="text-capitalize p-2">
                        Card
                      </option>
                    </select>
                  </div>
                  <div className="DALC_Forms_OrderData_Billing_Container col-12 col-lg-6 col-xxl-4">
                    <p className="FS_14 text-dark FW_500 d-flex align-items-center">
                      <span className="FS_14 text-dark FW_500">Billing</span>
                      <input
                        type="checkbox"
                        id="setShipAddress"
                        name="setShipAddress"
                        className="ms-3"
                        checked={orderData?.setAsShipAddress}
                        onChange={setAsShipAddressOnChange}
                      />
                      <label
                        className="ms-1 FS_12 fw-normal"
                        htmlFor="setShipAddress"
                      >
                        Set as shipping address
                      </label>
                    </p>
                    <div className="DALC_Forms_OrderData_Billing_Form_Container">
                      <div className="d-flex align-items-center gap-3">
                        <div className="mb-3 w-100">
                          <label htmlFor="name" className="form-label">
                            FullName
                          </label>
                          <input
                            type="text"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="deliverto"
                            id="bname"
                            required
                            autoComplete="true"
                            value={orderData?.billaddress?.deliverto || ""}
                            onChange={BillOnChange}
                          />
                        </div>
                        <div className="mb-3 w-100">
                          <label htmlFor="name" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="email"
                            id="bemail"
                            required
                            autoComplete="true"
                            value={orderData?.billaddress?.email || ""}
                            onChange={BillOnChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="mb-3 w-100">
                          <label htmlFor="bphone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="number"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="phone"
                            id="bphone"
                            required
                            autoComplete="true"
                            onWheel={function (e) {
                              e.target.blur();
                            }}
                            value={orderData?.billaddress?.phone || ""}
                            onChange={BillOnChange}
                          />
                        </div>
                        <div className="mb-3 w-100">
                          <label htmlFor="baddress" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="address"
                            id="baddress"
                            required
                            autoComplete="true"
                            value={orderData?.billaddress?.address || ""}
                            onChange={BillOnChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="DALC_Forms_OrderData_Shipping_Container col-12 col-lg-6 col-xxl-4">
                    <p className="FS_14 text-dark FW_500">Shipping</p>
                    <div className="DALC_Forms_OrderData_Billing_Form_Container">
                      <div className="d-flex align-items-center gap-3">
                        <div className="mb-3 w-100">
                          <label htmlFor="sname" className="form-label">
                            FullName
                          </label>
                          <input
                            type="text"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="deliverto"
                            id="sname"
                            required
                            autoComplete="true"
                            value={orderData?.shipaddress?.deliverto || ""}
                            onChange={ShipOnChange}
                          />
                        </div>
                        <div className="mb-3 w-100">
                          <label htmlFor="semail" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="email"
                            id="semail"
                            required
                            autoComplete="true"
                            value={orderData?.shipaddress?.email || ""}
                            onChange={ShipOnChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="mb-3 w-100">
                          <label htmlFor="sphone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="number"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="phone"
                            id="sphone"
                            onWheel={function (e) {
                              e.target.blur();
                            }}
                            required
                            autoComplete="true"
                            value={orderData?.shipaddress?.phone || ""}
                            onChange={ShipOnChange}
                          />
                        </div>
                        <div className="mb-3 w-100">
                          <label htmlFor="saddress" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                            name="address"
                            id="saddress"
                            required
                            autoComplete="true"
                            value={orderData?.shipaddress?.address || ""}
                            onChange={ShipOnChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="DALC_Order_Product_Container bg-white mt-4 border">
                <div className="DALCOPC_Header row w-100 m-0 FS_13 fw-light">
                  <div className="col-8">Item</div>
                  <div className="col-4 d-flex align-items-center justify-content-between">
                    <div className="DALCOPC_Cost_Col">Cost</div>
                    <div className="DALCOPC_Qty_Col">Qty</div>
                    <div className="DALCOPC_Total_Col text-center">Total</div>
                  </div>
                </div>
                <div className="DALCOPC_Product_Item_Container">
                  <div className="row w-100 m-0 DALCOPC_Product_Item py-3">
                    <div className="col-8 d-flex gap-3">
                      <Link className="DALCOPC_Product_img">
                        <img
                          src="http://localhost:5000/36096aha5b.png"
                          alt="Product Picture"
                          className="h-100"
                        />
                      </Link>
                      <div className="DALCOPC_Product_info">
                        <Link
                          to="#"
                          className="DALCOPC_Product_Info_Title FS_13"
                        >
                          V-Neck T-Shirt - Red
                        </Link>
                        <div className="DALCOPC_Product_Info_SKU text-muted FS_12">
                          <span className="FW_500">SKU: </span>
                          <span className="">woo-vneck-tee-green</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-between FS_12 text-muted">
                      <p className="mb-0 DALCOPC_Cost_Col">$20</p>
                      <p className="mb-0 DALCOPC_Qty_Col">
                        <small className="">× </small>
                        <span>1</span>
                      </p>
                      <div className="DALCOPC_Total_Col d-flex align-items-center justify-content-center gap-2 DALCOPC_Total_Price">
                        <p className="mb-0 ms-4">$20</p>
                        <div className="DALCOPC_Product_Edit_IconContainer">
                          <ModeIcon className="DAOIB_Edit_Icon" />
                          <ClearRoundedIcon className="DAOIB_Edit_Icon ms-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="DALC_Cards_Container_Layout_Container border">
              Card
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DAddOrder;
