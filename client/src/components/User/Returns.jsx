import { Link } from "react-router-dom";
import "../../Css/User.css";

const Returns = () => {
  return (
    <div className="User_Return_Container">
      <div className="User_Return_Header">
        <Link to="#" className="User_Container_Heading">
          My Returns
        </Link>
      </div>
      <div className="User_Returns_No_Returns_Container text-center mt-5">
        <div className="User_Returns_No_Returns_Heading mb-3">
          There are no returns yet.
        </div>
        <Link className="User_Returns_No_Rturns_Btn d-block text-center">
          Continue Shopping
        </Link>
      </div>
      <div className="User_Return_Item_Container"></div>
    </div>
  );
};

export default Returns;
