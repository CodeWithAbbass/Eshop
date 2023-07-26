import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Css/Admin/DProduct.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PriceFormat from "../../../helpers/PriceFormat";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { deleteProduct } from "../../../Store/Slices/productSlice";
const DAllProducts = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector((state) => state.Products.items);

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

  const DeleteProduct = (uid) => {
    const Response = confirm("You are going to delete this item!");
    if (Response) {
      dispatch(deleteProduct(uid));
    }
  };
  return (
    <div className="DAllProducts">
      <div className="DAllProducts_Container">
        <div className="DAllProduct_Header_Container mb-5 d-flex align-items-center">
          <h4 className="DALC_Forms_Heading m-0 fw-normal">All Products</h4>
          <Link
            to="/admin/products/addproduct"
            className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 ms-2 px-2 py-1"
          >
            Add New
          </Link>
        </div>
        {AllProducts.length == 0 ? (
          <div className="DAllProduct_NoProduct_Container text-center">
            <p className="mb-2">No Products Yet</p>
            <Link
              to="/admin/products/addproduct"
              className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-4 py-1"
            >
              Add One
            </Link>
          </div>
        ) : (
          <div className="DAllProduct_AllProducts_Container">
            <div className="DAllProduct_AllProducts_Desktop">
              <div className="DAllProduct_AllProducts_Header d-flex flex-wrap align-items-center gap-3">
                <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container">
                  <button
                    className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-100 dropdown-toggle"
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
                    className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-100 dropdown-toggle"
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
                      onClick={() =>
                        onChangeFilterByStockStatus("Out of stock")
                      }
                    >
                      Out of stock
                    </li>
                  </ul>
                </div>
                <div className="DAllProduct_AllProducts_Header_Search_Container h-100 d-flex align-items-center gap-3">
                  <input
                    type="search"
                    className="form-control shadow-none p-0 DAllProduct_AllProducts_Header_Search_Input FS_12 border border-primary px-2 py-1"
                    placeholder="Search By SKU or Name"
                  />
                  <button className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1">
                    <SearchIcon className="DAllProduct_AllProducts_Header_Search_Icon" />
                  </button>
                </div>
                <div className="DAllProduct_AllProducts_Header_Btn_Container">
                  <button className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1">
                    Clear Filter
                  </button>
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
                      id,
                      uid,
                      images,
                      title,
                      sku,
                      stock,
                      stockstatus,
                      price,
                      saleprice,
                      category,
                      tags,
                      publish,
                    } = product;
                    console.log(publish);
                    let Date = publish?.split("T");
                    let TimeStamp = Date[1] ? Date[1].split(".") : "00:00:00";
                    const Year = Date[0] ? Date[0] : "0000";
                    const Time = TimeStamp[0] ? TimeStamp[0] : "00:00:00";
                    return (
                      <div
                        className={`DAllProduct_AllProducts_Item_Body ${
                          index % 2 == 1 ? "bg-white" : ""
                        } d-flex align-items-center w-100 border border-top-0`}
                        key={index}
                      >
                        <div className="DAPIH_Image_Container_Image_Parent">
                          <Link to={`/product/${uid}`} className="">
                            <img
                              src={images[0] || ""}
                              alt="Product Picture"
                              className="DAPIH_Image"
                            />
                          </Link>
                        </div>
                        <div className="DAPIH_Title_Container ">
                          <Link
                            to={`/product/${uid}`}
                            className="DAPIH_Title_Txt"
                          >
                            {title || ""}
                          </Link>
                          <div className="DAPAC_Item_Operation_Container">
                            <button className="btn rounded-0 FS_12 p-0 pe-2 border-0 border-end">
                              ID: {id || ""}
                            </button>
                            <Link
                              to={`/admin/products/edit/${uid}`}
                              className="btn rounded-0 FS_12 py-0 px-2 border-0 border-end"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn rounded-0 FS_12 py-0 px-2 border-0 border-end text-danger"
                              onClick={() => DeleteProduct(uid)}
                            >
                              Trash
                            </button>
                            <Link
                              to={`/product/${uid}`}
                              className="btn rounded-0 FS_12 py-0 px-2 border-0"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                        <div className="DAPIH_Sku_Container text-secondary">
                          {sku || ""}
                        </div>
                        <div className="DAPIH_Stock_Container DAPIH_Stock_Txt">
                          {stockstatus || stock ? "In stock" : ""}
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
                          {category?.join(" , ") || "UnCategorized"}
                        </div>
                        <div className="DAPIH_Tags_Container DAPIH_Tags_Txt">
                          {tags?.join(" , ") || "_"}
                        </div>
                        <div className="DAPIH_Date_Container DAPIH_Date_Txt">
                          <span className="d-block">Publish</span>
                          <span className="DAPAC_Item_OtherInfo_RightValue d-inline-block ">
                            {Year + ` at ` + Time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="DAllProduct_AllProducts_Mobile w-100">
              <div className="DAllProduct_AllProducts_Header d-flex flex-wrap align-items-center justify-content-start gap-3">
                <div className="d-flex align-items-center justify-content-start gap-3 w-auto">
                  <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container w-auto">
                    <button
                      className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-auto dropdown-toggle"
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
                  <div className="dropdown DAllProduct_AllProducts_Header_Btn_Container w-auto">
                    <button
                      className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-auto dropdown-toggle"
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
                        onClick={() =>
                          onChangeFilterByStockStatus("Out of stock")
                        }
                      >
                        Out of stock
                      </li>
                    </ul>
                  </div>
                  <div className="DAllProduct_AllProducts_Header_Btn_Container w-auto">
                    <button className="btn btn-outline-primary DAllProduct_Header_Btn w-auto FS_12 px-2 py-1">
                      Clear
                    </button>
                  </div>
                </div>
                <div className="DAllProduct_AllProducts_Header_Search_Container h-100 d-flex align-items-center gap-3 w-auto ">
                  <input
                    type="search"
                    className="form-control shadow-none p-0 DAllProduct_AllProducts_Header_Search_Input FS_12 border border-primary px-2 py-1 w-100"
                    placeholder="Search Product"
                  />
                  <button className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 px-2 py-1 w-auto">
                    <SearchIcon className="DAllProduct_AllProducts_Header_Search_Icon" />
                  </button>
                </div>
              </div>

              <div className="DAllProduct_AllProducts_Item_Container">
                <div className="DAllProduct_AllProducts_Item_Header bg-white d-flex align-items-center w-100 border-top mt-3">
                  <div className="DAPIH_Title_Container px-2 mb-0">Name</div>
                </div>
                <div className="DALC_Cards_Container p-0">
                  {AllProducts.length > 0 &&
                    AllProducts.map((product, index) => {
                      const {
                        title,
                        id,
                        uid,
                        sku,
                        images,
                        saleprice,
                        stock,
                        stockstatus,
                        category,
                        price,
                        tags,
                        publish,
                      } = product;
                      let Date = publish?.split("T");
                      let TimeStamp = Date[1] ? Date[1].split(".") : "00:00:00";
                      const Year = Date[0] ? Date[0] : "0000";
                      const Time = TimeStamp[0] ? TimeStamp[0] : "00:00:00";

                      return (
                        <div className="DALC_Cards_Item" key={index}>
                          <div
                            className="accordion accordion-flush rounded-0"
                            id={`CardContainer${index}`}
                          >
                            <div className="accordion-item rounded-0">
                              <h2 className="accordion-header rounded-0  border-top">
                                <button
                                  className="accordion-button collapsed shadow-none bg-transparent rounded-0 p-2 h-100 DALC_Cards_Item_Heading"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#Card${index}`}
                                  aria-expanded="true"
                                  aria-controls={`Card${index}`}
                                >
                                  {title || ""}
                                </button>
                              </h2>
                              <div
                                id={`Card${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent={`#CardContainer${index}`}
                              >
                                <div className="accordion-body p-2">
                                  <div className="DAPAC_Item_Info">
                                    <div className="DAPAC_Item_Header d-flex align-items-center gap-2">
                                      <img
                                        className="DAPAC_Item_Img"
                                        src={images[0] || ""}
                                        alt="Product Picture"
                                      />
                                      <div className="DAPAC_Item_Operation_Container">
                                        <button className="btn rounded-0 FS_12 py-0 px-2 border-0 border-end">
                                          ID: {id || ""}
                                        </button>
                                        <Link
                                          to={`/admin/products/edit/${uid}`}
                                          className="btn rounded-0 FS_12 py-0 px-2 border-0 border-end"
                                        >
                                          Edit
                                        </Link>
                                        <button
                                          className="btn rounded-0 FS_12 py-0 px-2 border-0 border-end text-danger"
                                          onClick={() => DeleteProduct(uid)}
                                        >
                                          Trash
                                        </button>
                                        <Link
                                          to={`/product/${uid}`}
                                          className="btn rounded-0 FS_12 py-0 px-2 border-0"
                                        >
                                          View
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="DAPAC_Item_OtherInfo FS_12 w-auto my-4">
                                      <div className="DAPAC_Item_OtherInfo_SKU w-100 mt-2">
                                        <span className="DAPAC_Item_OtherInfo_LeftHeading d-inline-block">
                                          SKU
                                        </span>
                                        <span className="DAPAC_Item_OtherInfo_RightValue d-inline-block">
                                          {sku || "__"}
                                        </span>
                                      </div>
                                      <div className="DAPAC_Item_OtherInfo_Stock w-100 mt-2">
                                        <span className="DAPAC_Item_OtherInfo_LeftHeading d-inline-block">
                                          Stock
                                        </span>
                                        <span className="DAPAC_Item_OtherInfo_RightValue d-inline-block text-success fw-semibold">
                                          {stockstatus || stock
                                            ? "In stock"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className="DAPAC_Item_OtherInfo_Price w-100 mt-2">
                                        <span className="DAPAC_Item_OtherInfo_LeftHeading d-inline-block">
                                          Price
                                        </span>
                                        <div className="DAPAC_Item_OtherInfo_RightValue d-inline-block">
                                          <div className="d-flex align-items-center flex-wrap gap-1">
                                            <span className="DAPIH_Price_Regular text-decoration-line-through">
                                              {isNaN(saleprice)
                                                ? ""
                                                : PriceFormat(price)}
                                            </span>
                                            <span className="DAPIH_Price_New">
                                              {isNaN(saleprice)
                                                ? PriceFormat(price)
                                                : PriceFormat(saleprice)}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="DAPAC_Item_OtherInfo_Category d-flex align-items-start w-100 mt-2">
                                        <span className="DAPAC_Item_OtherInfo_LeftHeading d-inline-block">
                                          Category
                                        </span>
                                        <span className="DAPAC_Item_OtherInfo_RightValue d-inline-block ">
                                          {category?.join(" , ") ||
                                            "UnCategorized"}
                                        </span>
                                      </div>
                                      <div className="DAPAC_Item_OtherInfo_Tag d-flex align-items-start w-100 mt-2">
                                        <span className="DAPAC_Item_OtherInfo_LeftHeading d-inline-block">
                                          Tag
                                        </span>
                                        <span className="DAPAC_Item_OtherInfo_RightValue d-inline-block ">
                                          {tags?.join(" , ") || "__"}
                                        </span>
                                      </div>
                                      <div className="DAPAC_Item_OtherInfo_Tag w-100 mt-2">
                                        <span className="DAPAC_Item_OtherInfo_LeftHeading d-inline-block">
                                          Publish
                                        </span>
                                        <span className="DAPAC_Item_OtherInfo_RightValue d-inline-block ">
                                          {Year + ` at ` + Time}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DAllProducts;
