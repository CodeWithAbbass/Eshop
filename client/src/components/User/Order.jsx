import { Link } from "react-router-dom";
import "../../Css/User.css";
import { useSelector } from "react-redux";
import moment from "moment/moment";

const Order = () => {
  const Orders = useSelector((state) => state.Orders.orders);
  return (
    <div className="User_Orders_Container">
      <div className="User_Orders_Header">
        <Link to="#" className="User_Container_Heading">
          My Orders
        </Link>
      </div>
      <div className="User_Orders_Nav_Container">
        <Link className="User_Orders_Nav_Link active">All</Link>
        <Link className="User_Orders_Nav_Link">To Pay</Link>
        <Link className="User_Orders_Nav_Link">To Ship</Link>
        <Link className="User_Orders_Nav_Link">To Recieve</Link>
      </div>

      <div className="UOC_Container bg-white mt-2">
        {Orders &&
          Orders.map((item, index) => {
            let { orderid, status, date, products } = item;

            return (
              <div className="UOC_Orders_Item_Container" key={index}>
                <div className="UOC_Orders_Header border-bottom py-2 px-3">
                  <div className="row m-0 w-100 align-items-center">
                    <div className="col-8 p-0">
                      <p className="UOC_Orders_Header_Requested_Heading mb-0">
                        <span>Requested on </span>
                        <span>
                          {moment
                            .unix(date / 1000)
                            .format("ddd MMM DD YYYY HH:mm:ss")}
                        </span>
                      </p>
                      <div className="UOC_Orders_Header_Order">
                        <span>Order</span>
                        <span className="UOC_Orders_Header_Order_Number ms-1">
                          #{orderid}
                        </span>
                      </div>
                    </div>
                    <div className="col-4 p-0 text-end">
                      <Link className="UOC_Orders_Header_ManageBtn">
                        Manage
                      </Link>
                    </div>
                  </div>
                </div>
                {products &&
                  products.map((item, index) => {
                    const { title, images, quantity } = item;
                    return (
                      <div
                        className="UOC_Orders_Item_Wrapper bg-white p-3"
                        key={index}
                      >
                        <div className="row m-0 w-100">
                          <div className="col-7 d-flex align-items-stretch justify-content-between p-0 text-start">
                            <div className="UOC_Orders_Item_Pic_Container">
                              <Link
                                className="UOC_Orders_Item_Pic_Link d-block"
                                to="/product/1"
                              >
                                <img
                                  src={images ? images[0] : ""}
                                  alt="Cancellation Item Picture"
                                  className="h-100"
                                />
                              </Link>
                            </div>
                            <div className="UOC_Orders_Item_Info_Container h-100">
                              <Link
                                className="UOC_Orders_Item_Info_Title_Link d-block w-100"
                                to="/product/1"
                              >
                                {title}
                              </Link>
                            </div>
                          </div>
                          <div className="col-sm-3 col-2 px-md-2 p-0">
                            <div className="UOC_Orders_Quantity text-center">
                              <span className="UOC_Orders_Quantity_Title">
                                Qty:
                              </span>
                              <span className="UOC_Orders_Quantity_Txt text-black ms-1">
                                {quantity}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-2 col-3 p-0 text-end">
                            <div className="UOC_Orders_Tag">{status}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Order;
