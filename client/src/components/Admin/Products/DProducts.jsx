import React from "react";
import { Outlet } from "react-router-dom";

const DProducts = () => {
  return (
    <div className="DProducts p-3">
      <Outlet />
    </div>
  );
};

export default DProducts;
