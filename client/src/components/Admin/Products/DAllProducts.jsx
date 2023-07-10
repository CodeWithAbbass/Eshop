import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Css/Admin/DProduct.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PriceFormat from "../../../helpers/PriceFormat";
import { useSelector } from "react-redux";
const DAllProducts = () => {
  const [filterByCat, setFilterByCat] = useState("Filter By Category");
  const [filterByStockStatus, setFilterByStockStatus] = useState(
    "Filter By Stock Status"
  );
  const onChangeFilterByCat = (cat) => {
    setFilterByCat(cat);
  };
  const onChangeFilterByStockStatus = (stockStatus) => {
    setFilterByStockStatus(stockStatus);
  };
  const AllProducts = useSelector((state) => state.Products.items);

  const DataTime = "2023-07-10T16:48:59".split("T");
  return (
    <div className="DAllProducts">
      <div className="DAllProducts_Container">
        <div className="DAllProduct_Header_Container mb-5 d-flex align-items-center">
          <h4 className="DALC_Forms_Heading m-0 fw-normal">Products</h4>
          <Link
            to="/admin/products/addproduct"
            className="btn btn-outline-primary DAllProduct_Header_Btn ms-2 px-2 py-1"
          >
            Add New
          </Link>
        </div>
        <div className="DAllProduct_AllProducts_Container">
          <div className="DAllProduct_AllProducts_Header d-flex align-items-center gap-3">
            <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container">
              <button
                className="btn btn-outline-primary DAllProduct_Header_Btn px-2 py-1 w-100 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="true"
              >
                {filterByCat}
              </button>
              <ul className="dropdown-menu w-100 DAllProduct_AllProducts_Header_Btn_Item_Container p-0">
                <li
                  className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                  onClick={() => onChangeFilterByCat("Clothing")}
                >
                  Clothing
                </li>
                <li
                  className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                  onClick={() => onChangeFilterByCat("Decor")}
                >
                  Decor
                </li>
                <li
                  className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                  onClick={() => onChangeFilterByCat("Digital")}
                >
                  Digital
                </li>
                <li
                  className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item"
                  onClick={() => onChangeFilterByCat("Music")}
                >
                  Music
                </li>
              </ul>
            </div>
            <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container">
              <button
                className="btn btn-outline-primary DAllProduct_Header_Btn px-2 py-1 w-100 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="true"
              >
                {filterByStockStatus}
              </button>
              <ul className="dropdown-menu DAllProduct_AllProducts_Header_Btn_Item_Container p-0 w-100">
                <li
                  className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item w-100"
                  onClick={() => onChangeFilterByStockStatus("In stock")}
                >
                  In stock
                </li>
                <li
                  className="dropdown-item DAllProduct_AllProducts_Header_Btn_Item w-100"
                  onClick={() => onChangeFilterByStockStatus("Out of stock")}
                >
                  Out of stock
                </li>
              </ul>
            </div>
          </div>
          <div className="DAllProduct_AllProducts_Item_Container my-2">
            <div className="DAllProduct_AllProducts_Item_Header bg-white d-flex align-items-center w-100 border">
              <div className="DAPIH_Image_Container">
                <PhotoOutlinedIcon className="DAPIH_Image_Icon" />
              </div>
              <div className="DAPIH_Title_Container">Name</div>
              <div className="DAPIH_Sku_Container">SKU</div>
              <div className="DAPIH_Stock_Container">Stock</div>
              <div className="DAPIH_Price_Container">Price</div>
              <div className="DAPIH_Category_Container">Categories</div>
              <div className="DAPIH_Tags_Container">Tags</div>
              <div className="DAPIH_Date_Container">Date</div>
            </div>
            {AllProducts.length > 0 &&
              AllProducts.map((product, index) => {
                const {
                  images,
                  title,
                  sku,
                  stockstatus,
                  price,
                  saleprice,
                  category,
                  tags,
                } = product;

                return (
                  <div
                    className={`DAllProduct_AllProducts_Item_Body ${
                      index % 2 == 0 ? "bg-white" : ""
                    } d-flex align-items-center w-100 border border-top-0`}
                    key={index}
                  >
                    <div className="DAPIH_Image_Container_Image_Parent">
                      <img
                        src={images[0] || ""}
                        alt="Product Picture"
                        className="DAPIH_Image"
                      />
                    </div>
                    <div className="DAPIH_Title_Container DAPIH_Title_Txt">
                      {title || ""}
                    </div>
                    <div className="DAPIH_Sku_Container text-secondary">
                      {sku || ""}
                    </div>
                    <div className="DAPIH_Stock_Container DAPIH_Stock_Txt">
                      {stockstatus || ""}
                    </div>
                    <div className="DAPIH_Price_Container DAPIH_Price_Txt d-flex align-items-center flex-wrap gap-1">
                      <span className="DAPIH_Price_Regular text-decoration-line-through">
                        {isNaN(saleprice) ? "" : PriceFormat(price)}
                      </span>
                      <span className="DAPIH_Price_New">
                        {isNaN(saleprice)
                          ? PriceFormat(price)
                          : PriceFormat(saleprice)}
                      </span>
                    </div>
                    <div className="DAPIH_Category_Container DAPIH_Category_Txt">
                      {category.length > 0
                        ? category.map((item) => item)
                        : "UnCategorized"}
                    </div>
                    <div className="DAPIH_Tags_Container DAPIH_Tags_Txt">
                      {tags.length > 0 ? tags.map((item) => item) : "__"}
                    </div>
                    <div className="DAPIH_Date_Container DAPIH_Date_Txt">
                      <span className="d-block">Publish</span>
                      <span>{`${DataTime[0] || ""} at ${
                        DataTime[1] || ""
                      }`}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAllProducts;
