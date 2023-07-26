import React from "react";
import { Outlet } from "react-router-dom";

const DOrders = () => {
  return (
    <div className="DOrders p-3">
      <Outlet />
    </div>
  );
};

export default DOrders;
