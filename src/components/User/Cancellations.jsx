import { Link } from "react-router-dom";
import "../../Css/User.css";
const MyCancellations = () => {
  return (
    <div className="User_Cancellations_Container">
      <div className="User_Cancellations_Header">
        <Link to="#" className="User_Container_Heading">
          My Cancellations
        </Link>
      </div>
      <div className="UCC_Container bg-white mt-2">
        <div className="UCC_Cancellations_Item_Container">
          <div className="UCC_Cancellations_Header border-bottom py-2 px-3">
            <div className="row m-0 w-100 align-items-center">
              <div className="col-8 p-0">
                <p className="UCC_Cancellations_Header_Requested_Heading mb-0">
                  Requested on 29 May 2023
                </p>
                <div className="UCC_Cancellations_Header_Order">
                  <span>Order</span>
                  <span className="UCC_Cancellations_Header_Order_Number ms-1">
                    #161971745438955
                  </span>
                </div>
              </div>
              <div className="col-4 p-0 text-end">
                <Link
                  className="UCC_Cancellations_Header_MoreBtn"
                  to="/product/1"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
          <div className="UCC_Cancellations_Item_Wrapper bg-white p-3">
            <div className="row m-0 w-100">
              <div className="col-7 d-flex align-items-stretch justify-content-between p-0 text-start">
                <div className="UCC_Cancellations_Item_Pic_Container">
                  <Link
                    className="UCC_Cancellations_Item_Pic_Link d-block"
                    to="/product/1"
                  >
                    <img
                      src="https://static-01.daraz.pk/p/438752f01f5b270d9e69e25a8460c600.jpg"
                      alt="Cancellation Item Picture"
                    />
                  </Link>
                </div>
                <div className="UCC_Cancellations_Item_Info_Container h-100">
                  <Link
                    className="UCC_Cancellations_Item_Info_Title_Link d-block w-100"
                    to="/product/1"
                  >
                    Richman Summer Tracksuit with New Luxury Design (T-Shirt +
                    Trouser) Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Cum, ipsa culpa! Optio cumque repellendus quia minus
                    quisquam ad voluptatibus, cupiditate aut molestiae vero
                    neque quidem eum adipisci sequi numquam distinctio.
                  </Link>
                </div>
              </div>
              <div className="col-sm-3 col-2 px-md-2 p-0">
                <div className="UCC_Cancellations_Quantity text-center">
                  <span className="UCC_Cancellations_Quantity_Title">Qty:</span>
                  <span className="UCC_Cancellations_Quantity_Txt text-black ms-1">
                    1
                  </span>
                </div>
              </div>
              <div className="col-sm-2 col-3 p-0 text-end">
                <div className="UCC_Cancellations_Tag">Cancelled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCancellations;
