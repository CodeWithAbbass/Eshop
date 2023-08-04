import { useEffect } from "react";
import "../Css/Categories.css";
import DesktopCategories from "../components/Categories/DesktopCategories";
import MobileCategories from "../components/Categories/MobileCategories";
import { useDispatch, useSelector } from "react-redux";
import { getAllCat } from "../Store/Slices/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCat());
    return () => {};
  }, []);
  return (
    <div className="Categories h-100">
      <DesktopCategories />
      <MobileCategories />
    </div>
  );
};

export default Categories;
