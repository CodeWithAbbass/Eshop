import React from "react";
import { Outlet } from "react-router-dom";

const DOrders = () => {
  return (
    <div className="DOrders p-3 px-lg-5 px-md-4 px-3">
      <Outlet />
    </div>
  );
};

export default DOrders;
