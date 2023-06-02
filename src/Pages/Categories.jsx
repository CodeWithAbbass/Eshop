import "../Css/Categories.css";
import DesktopCategories from "../components/Categories/DesktopCategories";
import MobileCategories from "../components/Categories/MobileCategories";

const Categories = () => {
  return (
    <div className="Categories h-100">
      <DesktopCategories />
      <MobileCategories />
    </div>
  );
};

export default Categories;
