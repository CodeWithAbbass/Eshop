import "../Css/SingleProduct.css";
import { useEffect } from "react";
import MobileSingleProduct from "../components/SingleProduct/MobileSingleProduct";
import DesktopSingleProduct from "../components/SingleProduct/DesktopSingleProduct";

const SingleProduct = ({}) => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="SingleProduct">
      <DesktopSingleProduct />
      <MobileSingleProduct />
    </div>
  );
};

export default SingleProduct;
