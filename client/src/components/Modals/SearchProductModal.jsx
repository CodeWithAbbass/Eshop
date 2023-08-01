import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
const SearchProductModal = ({}) => {
  const SearchByName = (e) => {
    // AllProducts.filter(item=>item.title)
  };
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
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <span
              className="modal-title AddressBook_Title"
              id="staticBackdropLabel"
            >
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
          <div className="modal-body p-0">
            <div className="DALCOPC_AddProductToOrder_Search_Container position-sticky top-0 start-0 py-2 bg-white">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Product"
                className="form-control shadow-none rounded-0 border-0 border-bottom py-3 px-4 FS_12 DALCOPC_AddProductToOrder_Search lh-1 "
                onChange={SearchByName}
              />
            </div>
            <div className="DALCOPC_AddProductToOrder_Container mb-2 px-3">
              <div className="DALCOPC_AddProductToOrder_Selected">
                <div className="FS_12 p-2 d-flex align-items-center justify-content-between border-bottom">
                  <span className="DALCOPC_AddProductToOrder_Selected_Product_Title">
                    Products
                  </span>
                  <span className="DALCOPC_AddProductToOrder_Selected_Product_Qty">
                    Qty
                  </span>
                </div>
                <div className="DALCOPC_AddProductToOrder_Selected_Item border rounded-1 FS_12 p-2 d-flex align-items-center justify-content-between gap-3 mt-3">
                  <div className="d-flex align-items-center justify-content-between flex-grow-1">
                    <span className="DALCOPC_AddProductToOrder_Selected_Product_Title">
                      V-Neck T-Shirt - Red (woo-vneck-tee-red)
                    </span>
                    <span className="DALCOPC_AddProductToOrder_Selected_Product_Delete lh-sm">
                      <ClearRoundedIcon className="DAOIB_Edit_Icon" />
                    </span>
                  </div>
                  <div className="DALCOPC_AddProductToOrder_Selected_Product_Qty overflow-hidden pe-2">
                    <input
                      type="number"
                      name="quantity"
                      id="Qty"
                      // value={1}
                      onChange={function (e) {
                        if (e.target.value < 1) {
                          e.target.value = 1;
                        }
                        if (e.target.value > 10) {
                          e.target.value = 10;
                        }
                      }}
                      className="form-control rounded-0 shadow-none p-0 ps-2 pe-0 FS_12 h-100"
                    />
                  </div>
                </div>
              </div>
              <div className="DALCOPC_ExistProduct_Container w-100 mt-3 list-group FS_13 p-0 rounded-0 border-0 ">
                <button
                  type="button"
                  className="list-group-item list-group-item-action active rounded-0 border-0"
                  aria-current="true"
                >
                  First Active
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                  aria-current="true"
                >
                  The current button
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                >
                  A second item
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                >
                  A third button item
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action rounded-0 border-0"
                >
                  Last
                </button>
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
