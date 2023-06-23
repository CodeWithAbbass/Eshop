import React from "react";
import { Outlet } from "react-router-dom";

const DProducts = () => {
  return (
    <div className="DProducts bg-secondary">
      DProducts <Outlet />
    </div>
  );
};

export default DProducts;
