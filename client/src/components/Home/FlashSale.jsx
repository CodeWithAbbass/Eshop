import { useSelector } from "react-redux";
import Countdown from "./Countdown";
import ProductCard from "./ProductCard";

const FlashSale = () => {
  const Products = useSelector((state) => state.Products.items);

  return (
    <div className="Home_Sale_Container w-100 container-xl my-4">
      <div className="Home_Sale_Heading_Container">
        <h3 className="Home_Section_Heading mb-0">Flash Sale</h3>
      </div>
      <div className="Home_Section_Content_Container">
        <Countdown Expire={"Jun 29, 2023 09:00:00"} />
        <div className="HSC_Card_Container">
          <div className="card-deck row w-100 m-0 align-items-stretch">
            {Products.length == 0
              ? ""
              : Products.map((item, index) => {
                  if (item.issale) {
                    return <ProductCard item={item} key={index} />;
                  }
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
