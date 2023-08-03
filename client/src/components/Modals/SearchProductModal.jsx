import React, { useEffect, useRef, useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, searchProduct } from "../../Store/Slices/productSlice";
const SearchProductModal = ({
  AddProductToOrder,
  setAddProductToOrder,
  ...rest
}) => {
  let FilteredResult = useSelector((state) => state.Products.filtered);
  const inputRef = useRef("");
  const [message, setMessage] = useState("Please enter 3 or more letters");
  const [selectProduct, setSelectProduct] = useState([]);
  const dispatch = useDispatch();
  // Helper function for debouncing
  const debounce = (callback, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };

  // Function to fetch data from the API
  const fetchDataFromAPI = async (searchTerm) => {
    dispatch(searchProduct(searchTerm));
    if (FilteredResult.length == 0) {
      setMessage("No matches found");
    }
  };
  const debouncedFetchData = debounce(fetchDataFromAPI, 1000); // delay (in milliseconds)
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length > 2) {
      setMessage("Searching...");
      // Call the debounced function to fetch data from the API After Delay
      debouncedFetchData(value);
    } else {
      setMessage("Please enter 3 or more letters");
    }
  };
  const AddProduct = (product, quantity) => {
    const newProduct = { ...product, quantity };
    setSelectProduct([...selectProduct, newProduct]);
    dispatch(clearFilter());
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear Value of Search Input
    }
    setMessage("Please enter 3 or more letters");
  };
  const DeleteProduct = (product) => {
    setSelectProduct(
      selectProduct.filter((item, i) => product.uid != item.uid)
    );
  };
  const QuantityOnChange = (e, item) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    if (item?.maxquantity && e.target.value > item?.maxquantity) {
      e.target.value = item.maxquantity;
    }
    item.quantity = e.target.value;
  };

  useEffect(() => {
    return () => {};
  }, [FilteredResult]);

  return (
    <div
      className="modal fade SearchProductModal rounded-0"
      id="SearchProductModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="4"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded-0">
        <div className="modal-content rounded-0 overflow-visible">
          <div className="modal-header">
            <span className="modal-title fw-semibold" id="staticBackdropLabel">
              Add Product
            </span>
            <button
              type="button"
              className="close btn border-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="FS_13 FW_500 py-2 d-flex align-items-center justify-content-between border-bottom mb-3">
              <span className="DALCOPC_AddProductToOrder_Selected_Product_Title text-dark">
                Products
              </span>
              <span className="DALCOPC_AddProductToOrder_Selected_Product_Qty text-end text-dark">
                Quantity
              </span>
            </div>
            {selectProduct?.length > 0 &&
              selectProduct?.map((item, index) => {
                let quantity = 1;
                return (
                  <div
                    className="DALCOPC_Product_Container d-flex align-items-start justify-content-between gap-3 mt-3"
                    key={index}
                  >
                    <div className="DALCOPC_Cards_Item flex-grow-1">
                      <div className="accordion rounded-0" id="Card2Container">
                        <div className="accordion-item rounded-1">
                          <h2 className="accordion-header rounded-0 px-2">
                            <button
                              className="accordion-button collapsed shadow-none bg-transparent rounded-1 p-0 h-100 FS_13 FW_500"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#Card${index}`}
                              aria-expanded="true"
                              aria-controls={`Card${index}`}
                            >
                              <span className="w-100">
                                {item?.title || "Search for product"}
                              </span>

                              {item?.title && (
                                <ClearRoundedIcon
                                  className="DAOIB_Edit_Icon ms-auto"
                                  onClick={() => DeleteProduct(item)}
                                />
                              )}
                            </button>
                          </h2>
                          <div
                            id={`Card${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent={`#Card${index}Container`}
                          >
                            <div className="accordion-body p-0 position-relative px-2">
                              <input
                                type="search"
                                name="search"
                                id="search"
                                className="form-control shadow-none rounded-1 py-2  FS_12 DALCOPC_AddProductToOrder_Search lh-1 "
                                onChange={handleInputChange}
                              />
                              <div className="DALCOPC_AddProductToOrder_Search_Message FS_13 text-muted my-1">
                                {message || ""}
                              </div>
                              <div className="DALCOPC_AddProductToOrder_Container mt-2 position-absolute top-50 start-50 translate-middle-x w-100 rounded-0 border-0">
                                <div className="DALCOPC_ExistProduct_Container w-100 list-group FS_13 p-0 rounded-0 rounded-bottom border border-top-0 mb-3">
                                  {FilteredResult.length > 0 &&
                                    FilteredResult.map((product, index) => {
                                      return (
                                        <button
                                          type="button"
                                          className="list-group-item DALCOPC_ExistProduct_Product text-start rounded-0 border-0"
                                          aria-current="true"
                                          key={index}
                                          onClick={(e) =>
                                            AddProduct(product, quantity)
                                          }
                                        >
                                          {product?.title || ""}
                                        </button>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="DALCOPC_AddProductToOrder_Qty">
                      <input
                        type="number"
                        name="quantity"
                        id="Qty"
                        defaultValue={1}
                        onChange={(e) => QuantityOnChange(e, item, quantity)}
                        className="form-control rounded-1 shadow-none py-2 ps-2 FS_12 w-100 lh-sm h-100"
                      />
                    </div>
                  </div>
                );
              })}
            <div className="DALCOPC_Product_Container d-flex align-items-start justify-content-between gap-3 mt-3">
              <div className="DALCOPC_Cards_Item flex-grow-1">
                <div className="accordion rounded-0" id="Card2Container">
                  <div className="accordion-item rounded-1">
                    <h2 className="accordion-header rounded-0 px-2">
                      <button
                        className="accordion-button collapsed shadow-none bg-transparent rounded-1 p-0 h-100 FS_13 FW_500"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#Card"
                        aria-expanded="true"
                        aria-controls="Card"
                      >
                        Search for product
                      </button>
                    </h2>
                    <div
                      id="Card"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#Card2Container"
                    >
                      <div className="accordion-body p-0 position-relative px-2">
                        <input
                          type="search"
                          name="search"
                          id="search"
                          ref={inputRef}
                          className="form-control shadow-none rounded-1 py-2  FS_12 DALCOPC_AddProductToOrder_Search EmptyAfterSelection lh-1 "
                          onChange={handleInputChange}
                        />
                        <div className="DALCOPC_AddProductToOrder_Search_Message FS_13 text-muted my-1">
                          {message || ""}
                        </div>
                        <div className="DALCOPC_AddProductToOrder_Container mt-2 position-absolute top-50 start-50 translate-middle-x w-100 rounded-0 border-0">
                          <div className="DALCOPC_ExistProduct_Container w-100 list-group FS_13 p-0 rounded-0 rounded-bottom border border-top-0 mb-3">
                            {FilteredResult?.length > 0 &&
                              FilteredResult?.map((product, index) => {
                                let quantity = 1;
                                return (
                                  <button
                                    type="button"
                                    className="list-group-item DALCOPC_ExistProduct_Product text-start rounded-0 border-0"
                                    aria-current="true"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#Card"
                                    key={index}
                                    onClick={() =>
                                      AddProduct(product, quantity)
                                    }
                                  >
                                    {product?.title || ""}
                                  </button>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="DALCOPC_AddProductToOrder_Qty">
                <input
                  type="number"
                  name="quantity"
                  id="Qty"
                  value=""
                  onChange={() => {}}
                  className="form-control rounded-1 shadow-none py-2 ps-2 FS_12 w-100 lh-sm h-100"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn rounded-0 DAdmin_Hero_Btn text-center"
              type="button"
              id="AddProductToOrder_Button"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setAddProductToOrder([...selectProduct])}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProductModal;
