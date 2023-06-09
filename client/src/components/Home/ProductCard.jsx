import { Link } from "react-router-dom";
import "../../Css/ProductCard.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PriceFormat from "../../helpers/PriceFormat";
import CalcDiscount from "../../helpers/CalcDiscount";
const ProductCard = ({ item }) => {
  const { id, title, rating, images, price, discount, stock, issale } = item;

  // const MainImage = images[0];
  const Layout = useSelector((state) => state.Products.layout);
  const { Grid3x, Grid4x, Grid6x } = Layout;
  console.log(item);
  useEffect(() => {
    return () => {};
  }, []);
  // return (
  //   <div
  //     className={`card
  //     ${Grid6x ? "col-lg-2" : ""}
  //     ${Grid4x ? "col-md-3" : ""}
  //     ${Grid3x ? "col-4" : ""}
  //     col-4 p-0 border-0 rounded-0 mb-4 bg-transparent`}
  //   >
  //     <div className="Product_Link_Wrapper mx-2 h-100">
  //       <Link
  //         className="H_Product_Link h-100 d-block bg-white"
  //         to={`product/${id}`}
  //       >
  //         <img
  //           className="card-img-top rounded-0 "
  //           src={MainImage ? MainImage : ""}
  //           alt="Card images cap"
  //         />
  //         <div className="card-body p-2">
  //           <h5 className="card-title">{title}</h5>
  //           <div className="card-text H_Product_Price">
  //             <span className="H_Product_Price">
  //               {PriceFormat(CalcDiscount(discount, price))}
  //             </span>
  //           </div>
  //           <div className="card-text H_Product_CardOriginalPrice">
  //             <span className="card-text H_Product_OriginalPrice">
  //               <span className="H_Product_OriginalPrice">
  //                 {discount > 0 ? PriceFormat(price) : ""}
  //               </span>
  //             </span>
  //             <span className="H_Product_Discount">
  //               {discount > 0 ? `-${discount}%` : ""}
  //             </span>
  //           </div>
  //           <p className="card-text">
  //             <small className="text-muted">{stock == 0 ? "Sold" : ""}</small>
  //           </p>
  //         </div>
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default ProductCard;
