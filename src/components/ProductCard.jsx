import { Link } from "react-router-dom";
import "../Css/ProductCard.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductCard = ({ item }) => {
  const {
    id,
    Title,
    Rating,
    Image,
    Price,
    oldPrice,
    Discount,
    Quantity,
    Stock,
    isSale,
    isSold,
  } = item;
  const MainImage = Image.MainImage;
  const Layout = useSelector((state) => state.Products.layout);
  const { Grid3x, Grid4x, Grid6x } = Layout;

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div
      className={`card 
      ${Grid6x ? "col-lg-2" : ""} 
      ${Grid4x ? "col-md-3" : ""} 
      ${Grid3x ? "col-4" : ""} 
      col-4 p-0 border-0 rounded-0 mb-4`}
    >
      <div className="Product_Link_Wrapper mx-1 h-100">
        <Link
          className="H_Product_Link h-100 bg-white d-block "
          to={`product/${id}`}
        >
          <img
            className="card-img-top rounded-0 "
            src={MainImage ? MainImage : ""}
            alt="Card image cap"
          />
          <div className="card-body p-2">
            <h5 className="card-title">{Title}</h5>
            <div className="card-text H_Product_Price">
              <span className="H_Product_Currency">Rs.</span>
              <span className="H_Product_Price">{Price}</span>
            </div>
            <div className="card-text H_Product_CardOriginalPrice">
              <span className="card-text H_Product_OriginalPrice">
                <span className="H_Product_Currency">Rs.</span>
                <span className="H_Product_OriginalPrice">{oldPrice}</span>
              </span>
              <span className="H_Product_Discount">
                {Discount > 0 ? `-${Discount}%` : ""}
              </span>
            </div>
            <p className="card-text">
              <small className="text-muted">{isSold ? "Sold" : ""}</small>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
