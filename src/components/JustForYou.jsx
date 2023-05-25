import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const JustForYou = () => {
  const Products = useSelector((state) => {
    return state.Products.items;
  });
  return (
    <div className="Home_JustForYou_Container w-100 container-xl my-4">
      <div className="Home_JustForYou_Heading_Container">
        <h3 className="Home_Section_Heading mb-0">Just For You</h3>
      </div>
      <div className="Home_Categories_Content_Container py-4">
        <div className="HSC_Card_Container">
          <div className="card-deck row w-100 m-0 align-items-stretch justify-content-start">
            {Products.length == 0
              ? ""
              : Products.map((item, index) => {
                  return <ProductCard item={item} key={index} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustForYou;
