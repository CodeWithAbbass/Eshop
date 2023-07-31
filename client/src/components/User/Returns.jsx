import { Link } from "react-router-dom";
import "../../Css/User.css";
import { useSelector } from "react-redux";
import DateFormat from "../../helpers/DataFormat";

const Returns = () => {
  const Orders = useSelector((state) => state.Orders.userOrders);

  return (
    <div className="User_Return_Container">
      <div className="User_Return_Header">
        <Link to="#" className="User_Container_Heading">
          My Returns
        </Link>
      </div>
      <div className="UCC_Container mt-2">
        {Orders.length > 0 &&
          Orders.map((item, index) => {
            let { publish, orderid, products, status } = item;

            if (status == "returned") {
              return (
                <div
                  className="UCC_Cancellations_Item_Container my-3 bg-white"
                  key={index}
                >
                  <div className="UCC_Cancellations_Header border-bottom py-2 px-3">
                    <div className="row m-0 w-100 align-items-center">
                      <div className="col-8 p-0">
                        <p className="UCC_Cancellations_Header_Requested_Heading mb-0">
                          Requested on
                          <span className="ms-1">{DateFormat(publish)}</span>
                        </p>
                        <div className="UCC_Cancellations_Header_Order">
                          <span>Order</span>
                          <Link
                            className="UCC_Cancellations_Header_Order_Number ms-1"
                            to={`/user/orderdetails/${orderid}`}
                          >
                            #{orderid}
                          </Link>
                        </div>
                      </div>
                      <div className="col-4 p-0 text-end">
                        <Link
                          className="UCC_Cancellations_Header_MoreBtn"
                          to={`/user/orderdetails/${orderid}`}
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="UCC_Cancellations_Item_Wrapper bg-white p-3">
                    {products.length > 0 &&
                      products.map((item, index) => {
                        let { uid, images, title, quantity } = item;
                        return (
                          <div className="row m-0 w-100 my-2" key={index}>
                            <div className="col-7 d-flex align-items-stretch justify-content-between p-0 text-start">
                              <div className="UCC_Cancellations_Item_Pic_Container">
                                <Link
                                  className="UCC_Cancellations_Item_Pic_Link d-block"
                                  to={`/product/${uid}`}
                                >
                                  <img
                                    src={images[0] || ""}
                                    alt="Product Picture"
                                    className="w-100 h-100"
                                  />
                                </Link>
                              </div>
                              <div className="UCC_Cancellations_Item_Info_Container h-100">
                                <Link
                                  className="UCC_Cancellations_Item_Info_Title_Link d-block w-100"
                                  to={`/product/${uid}`}
                                >
                                  {title || ""}
                                </Link>
                              </div>
                            </div>
                            <div className="col-sm-3 col-2 px-md-2 p-0">
                              <div className="UCC_Cancellations_Quantity text-center">
                                <span className="UCC_Cancellations_Quantity_Title">
                                  Qty:
                                </span>
                                <span className="UCC_Cancellations_Quantity_Txt text-black ms-1">
                                  {quantity || ""}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-2 col-3 p-0 text-end">
                              <div className="UCC_Cancellations_Tag">
                                {status || ""}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="User_Returns_No_Returns_Container text-center mt-5"
                  key={index}
                >
                  <div className="User_Returns_No_Returns_Heading mb-3">
                    There are no cancelled yet.
                  </div>
                  <Link
                    to="/categories"
                    className="User_Returns_No_Rturns_Btn d-block text-center"
                  >
                    Continue Shopping
                  </Link>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Returns;
