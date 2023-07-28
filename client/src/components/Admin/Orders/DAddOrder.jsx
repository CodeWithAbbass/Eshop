import "../../../Css/Admin/DOrder.css";

const DAddOrder = () => {
  return (
    <div className="AddOrder">
      <div className="AddOrder_Container">
        <div className="DAddOrder_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between">
          <button
            onClick={(e) => handleSubmit(e)}
            className={`btn DAdmin_Hero_Btn FS_14`}
          >
            Create Order
          </button>
        </div>
        <div className="DAddProduct_Layout_Container d-flex flex-wrap align-items-start justify-content-between gap-4">
          <div className="DALC_Forms_Container border">
            <div className="DALC_Forms_OrderData_Container bg-white ">
              <h5 className="DALC_Forms_OrderData_Heading fw-normal px-3 pt-3">
                Order #85 details
              </h5>
              <div className="DALC_Forms_OrderData_Details_Container row m-0 w-100 mt-4 flex-wrap pb-3">
                <div className="DALC_Forms_OrderData_General_Container col-4">
                  <p className="FS_14 text-dark FW_500">General</p>
                  <p className="mb-0 text-secondary FS_13">Status:</p>
                  <select
                    className="form-select shadow-none rounded-1 FS_13 p-1 px-2"
                    aria-label="Default select example"
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
                </div>
                <div className="DALC_Forms_OrderData_Billing_Container col-4 border">
                  <p className="FS_14 text-dark FW_500">Billing</p>
                  <div className="DALC_Forms_OrderData_Billing_Form_Container">
                    <div class="mb-3">
                      <label htmlFor="name" className="form-label">
                        FullName
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-1 shadow-none FS_13 p-1 px-2"
                        id="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="DALC_Forms_OrderData_Shipping_Container col-4 border">
                  <p className="FS_14 text-dark FW_500">Shipping</p>
                </div>
              </div>
            </div>
          </div>
          <div className="DALC_Cards_Container_Layout_Container border">
            Card
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAddOrder;
