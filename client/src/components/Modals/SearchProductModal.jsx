import React, { useEffect, useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../Store/Slices/productSlice";
const SearchProductModal = ({
  AddProductToOrder,
  setAddProductToOrder,
  ...rest
}) => {
  const FilteredResult = useSelector((state) => state.Products.filtered);

  const [message, setMessage] = useState("Please enter 3 or more letters");
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
    const res = await dispatch(searchProduct(searchTerm));

    if (res.payload.length > 0) {
      setMessage("Please enter 3 or more letters");
    }
  };

  const debouncedFetchData = debounce(fetchDataFromAPI, 1000); // delay (in milliseconds)

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length > 2) {
      setMessage("Searching...");
      // Call the debounced function to fetch data from the API After Delay
      debouncedFetchData(value);
    }
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
          <div className="modal-body overflow-visible">
            <div className="FS_13 FW_500 py-2 d-flex align-items-center justify-content-between border-bottom mb-3">
              <span className="DALCOPC_AddProductToOrder_Selected_Product_Title text-dark">
                Products
              </span>
              <span className="DALCOPC_AddProductToOrder_Selected_Product_Qty text-end text-dark">
                Quantity
              </span>
            </div>
            {AddProductToOrder?.length == 0 && (
              <div className="DALCOPC_Product_Container d-flex align-items-start justify-content-between gap-3 mt-3">
                <div className="DALCOPC_Cards_Item flex-grow-1">
                  <div className="accordion rounded-0" id="Card2Container">
                    <div className="accordion-item rounded-1">
                      <h2 className="accordion-header rounded-0 px-2">
                        <button
                          className="accordion-button collapsed shadow-none bg-transparent rounded-1 p-0 h-100 FS_13 FW_500"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Card5"
                          aria-expanded="true"
                          aria-controls="Card5"
                        >
                          Search for product
                        </button>
                      </h2>
                      <div
                        id="Card5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#Card2Container"
                      >
                        <div className="accordion-body p-0 position-relative px-2">
                          <input
                            type="search"
                            name="search"
                            id="search"
                            // value={searchTerm || ""}
                            className="form-control shadow-none rounded-1 py-2  FS_12 DALCOPC_AddProductToOrder_Search lh-1 "
                            onChange={handleInputChange}
                          />
                          <div className="DALCOPC_AddProductToOrder_Search_Message FS_13 text-muted my-1">
                            {message || ""}
                          </div>
                          <div className="DALCOPC_AddProductToOrder_Container mt-2 position-absolute top-50 start-50 translate-middle-x w-100 rounded-0 border-0">
                            <div className="DALCOPC_ExistProduct_Container w-100 list-group FS_13 p-0 rounded-0 rounded-bottom border border-top-0">
                              {FilteredResult.length > 0 &&
                                FilteredResult.map((product, index) => {
                                  return (
                                    <button
                                      type="button"
                                      className="list-group-item DALCOPC_ExistProduct_Product text-start rounded-0 border-0"
                                      aria-current="true"
                                      key={index}
                                      onClick={() =>
                                        setAddProductToOrder([
                                          ...AddProductToOrder,
                                          product,
                                        ])
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
                    onChange={function (e) {
                      if (e.target.value < 1) {
                        e.target.value = 1;
                      }
                      if (e.target.value > 10) {
                        e.target.value = 10;
                      }
                    }}
                    className="form-control rounded-1 shadow-none py-2 ps-2 FS_12 w-100 lh-sm h-100"
                  />
                </div>
              </div>
            )}
            {AddProductToOrder?.length > 0 &&
              AddProductToOrder?.map((item, index) => {
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
                              {item?.title || "Search for product"}
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
                                // value={searchTerm || ""}
                                className="form-control shadow-none rounded-1 py-2  FS_12 DALCOPC_AddProductToOrder_Search lh-1 "
                                onChange={handleInputChange}
                              />
                              <div className="DALCOPC_AddProductToOrder_Search_Message FS_13 text-muted my-1">
                                {message || ""}
                              </div>
                              <div className="DALCOPC_AddProductToOrder_Container mt-2 position-absolute top-50 start-50 translate-middle-x w-100 rounded-0 border-0">
                                <div className="DALCOPC_ExistProduct_Container w-100 list-group FS_13 p-0 rounded-0 rounded-bottom border border-top-0">
                                  {FilteredResult.length > 0 &&
                                    FilteredResult.map((product, index) => {
                                      return (
                                        <button
                                          type="button"
                                          className="list-group-item DALCOPC_ExistProduct_Product text-start rounded-0 border-0"
                                          aria-current="true"
                                          key={index}
                                          onClick={() =>
                                            setAddProductToOrder([
                                              ...AddProductToOrder,
                                              product,
                                            ])
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
                        onChange={function (e) {
                          if (e.target.value < 1) {
                            e.target.value = 1;
                          }
                          if (e.target.value > 10) {
                            e.target.value = 10;
                          }
                        }}
                        className="form-control rounded-1 shadow-none py-2 ps-2 FS_12 w-100 lh-sm h-100"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="modal-footer">
            <button
              className="btn rounded-0 DAdmin_Hero_Btn text-center"
              type="button"
              id="AddProductToOrder_Button"
              data-bs-dismiss="modal"
              aria-label="Close"
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
