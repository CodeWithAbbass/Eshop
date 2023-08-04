import { Link, useParams } from "react-router-dom";
import "../Css/TrackOrder.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const TrackOrder = () => {
  const [TrackInput, setTrackInput] = useState("");

  const TrackInputOnChange = (e) => {
    setTrackInput(e.target.value);
  };
  useEffect(() => {
    return () => {};
  }, [TrackInput]);
  return (
    <div className="TrackOrder">
      <div className="TrackOrder_Container container-xl py-3 ">
        <h5>Track Your Order</h5>
        <div className="TrackOrder_Input_Container d-flex flex-md-nowrap flex-wrap align-items-stretch gap-3">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={TrackInput || ""}
            className="form-control shadow-none FS_13 TrackOrder_TrackInput"
            onChange={TrackInputOnChange}
          />
          <button
            className={`btn p-0 FS_13 border-0 shadow-none`}
            disabled={TrackInput.length < 15}
          >
            <Link
              to={`/user/orderdetails/${TrackInput}`}
              className="btn TrackOrder_TrackBtn w-100"
            >
              Track
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
