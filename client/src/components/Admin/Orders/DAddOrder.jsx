import { useDispatch, useSelector } from "react-redux";
import "../../../Css/Admin/DOrder.css";
import { useEffect, useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Link } from "react-router-dom";
import SearchProductModal from "../../Modals/SearchProductModal";
import PriceFormat from "../../../helpers/PriceFormat";
import CalcDiscount from "../../../helpers/CalcDiscount";
import { customOrder } from "../../../Store/Slices/orderSlice";
const DAddOrder = () => {
  const dispatch = useDispatch();
  const [AddProductToOrder, setAddProductToOrder] = useState([]);

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
  let TotalPrice = 0;
  let itemSubtotal = 0;
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
  const QuantityOnChange = (e, item) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    if (item?.maxquantity && e.target.value > item?.maxquantity) {
      e.target.value = item.maxquantity;
    }
    const NewAddProduct = AddProductToOrder.map((elem, index) => {
      if (elem.uid == item.uid) {
        elem.quantity = +e.target.value;
      }
      return elem;
    });
    setAddProductToOrder([...NewAddProduct]);
  };
  const DeleteProduct = (product) => {
    setAddProductToOrder(
      AddProductToOrder.filter((item, i) => product.uid != item.uid)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderData.products.length == 0) {
      alert("Please select atleast one product");
      return;
    }

    dispatch(customOrder(orderData));
  };
  useEffect(() => {
    let NewProductsList = [];
    AddProductToOrder?.forEach((element, index) => {
      const { uid, price, discount, quantity, images, title, shipfee } =
        element;
      const newProduct = {
        uid,
        price,
        discount,
        quantity,
        images,
        title,
        shipfee,
      };
      NewProductsList.push(newProduct);
    });
    setOrderData({ ...orderData, products: [...NewProductsList] });
    return () => {};
  }, [AddProductToOrder]);

  return (
    <div className="AddOrder">
      <div className="AddOrder_Container">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div
            className={`DAddOrder_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between`}
          >
            <button
              type="submit"
              className={`btn DAdmin_Hero_Btn fst-italic FS_14 ${
                AddProductToOrder.length == 0 && "text-muted fst-italic"
              }`}
              disabled={AddProductToOrder.length == 0}
            >
              Create Order
            </button>
          </div>
          <div className="DAddProduct_Layout_Container">
            <div className="DALC_Forms_OrderData_Container bg-white border">
              <h5 className="DALC_Forms_OrderData_Heading fw-normal px-3 pt-3">
                Order Details
              </h5>
              <div className="DALC_Forms_OrderData_Details_Container row m-0 w-100 mt-4 flex-wrap">
                <div className="DALC_Forms_OrderData_General_Container col-12 col-xl-2 mb-5">
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
                    <option value="processing" className="text-capitalize p-2">
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
                <div className="DALC_Forms_OrderData_Billing_Container col-12 col-xl-5">
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
                          className="form-control rounded-1 shadow-none FS_13 p-1 px-2 HideNumberSpinButton"
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
                <div className="DALC_Forms_OrderData_Shipping_Container col-12 col-xl-5">
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
                          className="form-control rounded-1 shadow-none FS_13 p-1 px-2 HideNumberSpinButton"
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
                <div className="col-7 col-sm-6 d-flex align-items-center ">
                  <span className="">Item</span>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#SearchProductModal"
                    className="btn FS_12 ms-3 rounded-0 border"
                  >
                    Add Item
                  </button>
                </div>
                <div className="col-5 col-sm-6 d-flex align-items-center">
                  <div className="DALCOPC_Cost_Col">Price</div>
                  <div className="DALCOPC_Discount_Col">Discount</div>
                  <div className="DALCOPC_Qty_Col">Qty</div>
                  <div className="DALCOPC_Total_Col text-end">Total</div>
                </div>
              </div>
              <div className="DALCOPC_Product_Item_Container overflow-auto">
                {AddProductToOrder.map((product, index) => {
                  const {
                    title,
                    price,
                    discount,
                    quantity,
                    sku,
                    images,
                    shipfee,
                  } = product;
                  let totalShippingFee = quantity * shipfee;
                  TotalPrice =
                    TotalPrice +
                    CalcDiscount(discount, price) * quantity +
                    totalShippingFee;
                  itemSubtotal =
                    itemSubtotal + CalcDiscount(discount, price) * quantity;

                  return (
                    <div
                      className="row m-0 DALCOPC_Product_Item py-3"
                      key={index}
                    >
                      <div className="col-7 col-sm-6 d-flex align-items-start gap-3 overflow-hidden">
                        <Link className="DALCOPC_Product_Link">
                          <img
                            src={images?.[0] || ""}
                            // alt="Product Picture"
                            className="DALCOPC_Product_img"
                          />
                        </Link>
                        <div className="DALCOPC_Product_info lh-sm">
                          <Link
                            to="#"
                            className="DALCOPC_Product_Info_Title FS_13 text-decoration-underline"
                          >
                            {title || ""}
                          </Link>
                          <div className="DALCOPC_Product_Info_SKU text-muted FS_12">
                            <span className="FW_500">SKU: </span>
                            <span className="">{sku || ""}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 col-sm-6 d-flex align-items-center justify-content-between FS_12 text-muted">
                        <div className="DALCOPC_Cost_Col">
                          {PriceFormat(price) || 0}
                        </div>
                        <div className="DALCOPC_Discount_Col">
                          {PriceFormat(price - CalcDiscount(discount, price)) ||
                            0}
                        </div>
                        <div className="DALCOPC_Qty_Col position-relative overflow-hidden pe-2">
                          <small className="position-absolute top-50 translate-middle-y">
                            ×
                          </small>
                          <input
                            type="number"
                            name="quantity"
                            id="Qty"
                            value={quantity || ""}
                            onChange={(e) => QuantityOnChange(e, product)}
                            className="form-control rounded-0 shadow-none p-0 ps-2 pe-0 FS_12 DALCOPC_Qty_Input lh-sm border-0"
                          />
                        </div>
                        <div className="DALCOPC_Total_Col d-flex align-items-center justify-content-end DALCOPC_Total_Price">
                          <DeleteRoundedIcon
                            className="DAOIB_Edit_Icon DALCOPC_Product_Edit_IconContainer"
                            onClick={() => DeleteProduct(product)}
                          />
                          <span className="ms-3">
                            {PriceFormat(CalcDiscount(discount, price))}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="DAOC_OrderData_Total_Container p-3 py-2">
                <div className="DALC_OrderData_Total_ItemsSubtotal d-flex align-items-center justify-content-between ms-auto">
                  <div className="DALC_OrderData_Total_ItemsSubtotal_Heading text-end">
                    <p className="FS_13 mb-0">Items Subtotal:</p>
                  </div>
                  <div className="DALC_OrderData_Total_ItemsSubtotal_Price text-end">
                    <p className="FS_14 mb-0 fw-bolder ">
                      {PriceFormat(itemSubtotal) || "$0"}
                    </p>
                  </div>
                </div>
                <div className="DALC_OrderData_Total_OrderTotal d-flex align-items-center justify-content-between ms-auto">
                  <div className="DALC_OrderData_Total_OrderTotal_Heading text-end">
                    <p className="FS_13 mb-0">Order Total:</p>
                  </div>
                  <div className="DALC_OrderData_Total_OrderTotal_Price text-end">
                    <p className="FS_14 mb-0 fw-bolder ">
                      {PriceFormat(TotalPrice) || "$0"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <SearchProductModal
          AddProductToOrder={AddProductToOrder}
          setAddProductToOrder={setAddProductToOrder}
        />
      </div>
    </div>
  );
};

export default DAddOrder;
