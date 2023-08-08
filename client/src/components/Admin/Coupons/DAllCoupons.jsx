import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCoupon } from "../../../Store/Slices/couponSlice";

const DAllCoupons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoupon());
    return () => {};
  }, []);
  return <div className="DAllCoupons">DAllCoupons</div>;
};

export default DAllCoupons;
