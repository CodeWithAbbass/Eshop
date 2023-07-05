import { useEffect, useState } from "react";
import "../../../Css/Admin/DProduct.css";
import SunEditor, { buttonList } from "suneditor-react";
import ReactHtmlParser from "react-html-parser";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import StyleIcon from "@mui/icons-material/Style";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
const DAddProduct = () => {
  // const [descriptionData, setDescriptionData] = useState("Initial");
  const [allCat, setAllCat] = useState(1);
  const [addNewCat, setAddNewCat] = useState({ NewCat: "" });

  const onChangeEditor = (content) => {
    console.log(content);
    // setDescriptionData(content);
  };
  const toggleCodeView = (isCodeView) => {
    console.log(isCodeView);
  };
  const toggleCatTabs = (tab) => {
    setAllCat(tab);
    console.log(tab, allCat);
  };
  const addNewOnChange = (e) => {
    console.log(addNewCat);
    setAddNewCat({ ...addNewCat, NewCat: e.target.value });
  };
  const ShowAddNewCatOption = () => {
    const AddNewCatInput = document.querySelector(`.DALC_Cat_AddNew_Item`);
    AddNewCatInput.classList.toggle("active");
  };
  const ToggleProductDataTab = (tab) => {
    const AllTabs = document.querySelectorAll(".DALCFPDIR_Item");
    const AllMenus = document.querySelectorAll(".DALCF_Product_Data_Item");
    AllTabs.forEach((element, index, arr) => {
      element.classList.remove("active");
      element.classList.remove("hide");
      if (index + 1 == tab) {
        element.classList.add("active");
      }
    });
    AllMenus.forEach((element, index) => {
      element.classList.remove("active");
      if (index + 1 == tab) {
        element.classList.add("active");
      }
    });
  };
  const ShowScheduleOption = (e) => {
    const ScheduleInputContainer = document.querySelector(
      `.DALCFPDIRG_Sale_Schedule_Input_Container`
    );
    ScheduleInputContainer.classList.toggle("active");
  };
  useEffect(() => {
    return () => {};
  }, [allCat]);
  return (
    <div className="DAddProduct">
      <div className="DAddProduct_Container">
        <div className="DAddProduct_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between">
          <button className="btn btn-outline-primary DAddProduct_AddBtn rounded-0">
            Save Product
          </button>
        </div>
        <div className="DAddProduct_Layout_Container d-flex align-items-start justify-content-between">
          <div className="DALC_Forms_Container me-4">
            <div className="DALCF_Product_Info_Container">
              <div className="DALCF_Product_Name_Container mb-4">
                <label
                  className="DALC_Forms_Heading mb-2"
                  htmlFor="ProductName"
                >
                  Add New Product
                </label>
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  id="ProductName"
                  name="ProductName"
                  placeholder="Product Name"
                />
              </div>
              <div className="DALCF_Product_Description_Container bg-white">
                <div className="DALCF_Product_Description_Header border border-bottom-0">
                  <label
                    htmlFor="ProductDescription"
                    className="DALCF_Product_Description_Heading "
                  >
                    Product Description
                  </label>
                </div>

                <div className="DALCF_Text_Editor_Container w-100">
                  <SunEditor
                    name="Description"
                    autoFocus={true}
                    placeholder="Type..."
                    onChange={onChangeEditor}
                    width="100%"
                    height="300"
                    toolbarContainer="#toolbar_container"
                    charCounter={true}
                    showPathLabel={false}
                    maxCharCount={720}
                    setDefaultStyle="font-family:Roboto;font-size:14px;color:black;"
                    toggleCodeView={toggleCodeView}
                    popupDisplay="local"
                    setOptions={{
                      height: 200,
                      buttonList: [
                        [
                          "undo",
                          "redo",
                          "font",
                          "fontSize",
                          "fontColor",
                          "textStyle",
                          "formatBlock",
                          "paragraphStyle",
                        ],
                        [
                          "bold",
                          "underline",
                          "italic",
                          "strike",
                          "subscript",
                          "superscript",
                          "removeFormat",
                        ],
                        [
                          "fontColor",
                          "hiliteColor",
                          "outdent",
                          "indent",
                          "align",
                          "horizontalRule",
                          "lineHeight",
                          "list",
                          "table",
                        ],
                        [
                          "link",
                          "image",
                          "video",
                          "audio",
                          "fullScreen",
                          "showBlocks",
                          "codeView",
                        ],
                        ["preview", "print", "save"],
                      ],
                      callBackSave: function (contents, isChanged) {
                        console.log(contents);
                      },
                    }}
                  />
                </div>
              </div>

              <div className="DALCF_Product_Data_Container mt-4">
                <div className="accordion rounded-0" id="Card2Container">
                  <div className="accordion-item rounded-0 overflow-hidden">
                    <h2 className="accordion-header rounded-0">
                      <button
                        className="accordion-button shadow-none bg-transparent rounded-0 border-bottom p-2 h-100 DALC_Cards_Item_Heading"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#Card2"
                        aria-expanded="true"
                        aria-controls="Card2"
                      >
                        Product Data
                      </button>
                    </h2>
                    <div
                      id="Card2"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#Card2Container"
                    >
                      <div className="accordion-body p-0">
                        <div className="DALCF_Product_Data_Items_Container d-flex ">
                          <div className="DALCF_Product_Data_Item_Left ">
                            <ul className="list-group rounded-0 p-0">
                              <li
                                className={`DALCF_Product_Data_Item list-group-item border-bottom border-end border-0 active`}
                                onClick={() => ToggleProductDataTab(1)}
                              >
                                <BuildIcon className="DALCF_Product_Data_Item_Icon" />
                                <Link className="DALCF_Product_Data_Item_Link ms-2">
                                  General
                                </Link>
                              </li>
                              <li
                                className="DALCF_Product_Data_Item list-group-item border-bottom border-end border-0"
                                onClick={() => ToggleProductDataTab(2)}
                              >
                                <InventoryIcon className="DALCF_Product_Data_Item_Icon" />
                                <Link className="DALCF_Product_Data_Item_Link ms-2">
                                  Inventory
                                </Link>
                              </li>
                              <li
                                className="DALCF_Product_Data_Item list-group-item border-bottom border-end border-0"
                                onClick={() => ToggleProductDataTab(3)}
                              >
                                <LocalShippingIcon className="DALCF_Product_Data_Item_Icon" />
                                <Link className="DALCF_Product_Data_Item_Link ms-2">
                                  Shipping
                                </Link>
                              </li>
                              <li
                                className="DALCF_Product_Data_Item list-group-item border-end border-0"
                                onClick={() => ToggleProductDataTab(4)}
                              >
                                <PermMediaIcon className="DALCF_Product_Data_Item_Icon" />
                                <Link className="DALCF_Product_Data_Item_Link ms-2">
                                  Images
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="DALCF_Product_Data_Item_Right position-relative ">
                            <div className="DALCFPDIR_Item DALCF_Product_Data_Item_Right_General h-100 w-100 active p-3">
                              <div className="DALCF_Product_Data_Item_Right_General_Container">
                                <div className="DALCF_Product_Data_Item_Right_General_PriceDiscount_Container d-flex flex-wrap align-items-center gap-3">
                                  <div className="DALCFPDIRG_Price">
                                    <label
                                      htmlFor="productPrice"
                                      className="DALCFPDIR_Label"
                                    >
                                      Regular price ($)
                                    </label>
                                    <input
                                      type="number"
                                      name="price"
                                      id="productPrice"
                                      className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                    />
                                  </div>

                                  <div className="DALCFPDIRG_Discount">
                                    <label
                                      htmlFor="productDiscount"
                                      className="DALCFPDIR_Label"
                                    >
                                      Discount (%)
                                    </label>
                                    <input
                                      type="number"
                                      name="discount"
                                      id="productDiscount"
                                      className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                    />
                                  </div>
                                </div>
                                <div className="DALCFPDIRG_Sale mt-3">
                                  <label
                                    htmlFor="productSale"
                                    className="DALCFPDIR_Label"
                                  >
                                    Sale Price ($)
                                  </label>
                                  <input
                                    type="number"
                                    name="discount"
                                    id="productSale"
                                    className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                  />
                                </div>
                                <div className="DALCFPDIRG_Sale_Schedule h-100">
                                  <div className="DALC_Cat_AddNew_Container h-100">
                                    <Link
                                      className="DALC_Cat_AddNewCat_Link text-primary text-decoration-underline"
                                      onClick={() => ShowScheduleOption()}
                                    >
                                      Schedule
                                    </Link>
                                    <div className="DALCFPDIRG_Sale_Schedule_Input_Container my-2 d-flex flex-wrap align-items-center gap-3 p-0">
                                      <div className="DALCFPDIRG_Sale_Schedule_From_Container d-flex align-items-center gap-2">
                                        <label
                                          htmlFor="fromSale"
                                          className="DALCFPDIR_Label w-auto"
                                        >
                                          From:
                                        </label>
                                        <input
                                          type="date"
                                          name="fromsale"
                                          id="fromSale"
                                          className="form-control DALC_Cat_AddNew_Item_Input rounded-0 p-0 px-2"
                                        />
                                      </div>
                                      <div className="DALCFPDIRG_Sale_Schedule_From_Container d-flex align-items-center gap-2">
                                        <label
                                          htmlFor="toSale"
                                          className="DALCFPDIR_Label w-auto"
                                        >
                                          To:
                                        </label>
                                        <input
                                          type="date"
                                          name="tosale"
                                          id="toSale"
                                          className="form-control DALC_Cat_AddNew_Item_Input rounded-0 p-0 px-2"
                                        />
                                      </div>
                                      <button
                                        className="btn shadow-none border rounded-0 p-0 DALCF_CancelBtn"
                                        onClick={() => ShowScheduleOption()}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="DALCFPDIR_Item DALCF_Product_Data_Item_Right_Inventory h-100 w-100 p-3">
                              <div className="DALCF_Product_Data_Item_Right_Inventory_Container">
                                <div className="DALCFPDIRI_SKU">
                                  <label
                                    htmlFor="productSku"
                                    className="DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                  >
                                    <abbr title="Stock Keeping Unit">SKU</abbr>
                                  </label>
                                  <input
                                    type="text"
                                    name="sku"
                                    id="productSku"
                                    className="form-control DALCFPDIR_Input_Inventory shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                  />
                                </div>
                                <div className="DALCFPDIRI_Stock_Management mt-3 d-flex align-items-center ">
                                  <label
                                    htmlFor="stockManagement"
                                    className="form-check-label DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                  >
                                    Stock Management
                                  </label>

                                  <input
                                    class="form-check-input shadow-none d-inline DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                    type="checkbox"
                                    value=""
                                    name="stockmanagement"
                                    id="stockManagement"
                                  />
                                  <span className="ms-2">
                                    Track stock quantity for this product
                                  </span>
                                </div>

                                <div className="DALCFPDIRI_Quantity mt-3">
                                  <label
                                    htmlFor="productStock"
                                    className="DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                  >
                                    Quantity
                                  </label>
                                  <input
                                    type="number"
                                    name="quantity"
                                    id="productQuantity"
                                    className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                  />
                                </div>

                                <div className="DALCFPDIRI_AlowOrder d-flex  mt-3">
                                  <label
                                    htmlFor="productAllowOrder"
                                    className="DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                  >
                                    Allow Backorders?
                                  </label>
                                  <div className="DALCFPDIR_Input">
                                    <div>
                                      <input
                                        class="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                        type="checkbox"
                                        value="allow"
                                        name="alloworder"
                                        id="productAllowOrder"
                                      />
                                      <label
                                        htmlFor="productAllowOrder"
                                        className="DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                      >
                                        Allow Backorders?
                                      </label>
                                    </div>
                                    <div>
                                      <input
                                        class="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                        type="checkbox"
                                        value="Do Not Allow"
                                        name="alloworder"
                                        id="productDoNotAllowOrder"
                                      />
                                      <label
                                        htmlFor="productAllowOrder"
                                        className="DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                      >
                                        Do Not Allow
                                      </label>
                                    </div>
                                    <div>
                                      <input
                                        class="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                        type="checkbox"
                                        value="Allow But Notify Customer"
                                        name="alloworder"
                                        id="productNotifyAllowOrder"
                                      />
                                      <label
                                        htmlFor="productNotifyAllowOrder"
                                        className="DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                      >
                                        Allow, but notify customer
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <div className="DALCFPDIRI_Stock mt-3">
                                  <label
                                    htmlFor="productStock"
                                    className="DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                  >
                                    Stock
                                  </label>
                                  <input
                                    type="number"
                                    name="stock"
                                    id="productStock"
                                    className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="DALCFPDIR_Item DALCF_Product_Data_Item_Right_Shipping h-100 w-100 p-3">
                              <div className="DALCF_Product_Data_Item_Right_Shipping_Container">
                                <div className="DALCFPDIRI_Weight">
                                  <label
                                    htmlFor="productWeight"
                                    className="DALCFPDIR_Label"
                                  >
                                    Weight (kg)
                                  </label>
                                  <input
                                    type="number"
                                    name="sku"
                                    id="productWeight"
                                    className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                  />
                                </div>
                                <div className="DALCFPDIRI_Dimensions mt-3">
                                  <label
                                    htmlFor="productStock"
                                    className="DALCFPDIR_Label DALCFPDIR_Label_Dimensions"
                                  >
                                    Dimensions (cm)
                                  </label>
                                  <input
                                    type="number"
                                    name="dimensions"
                                    id="productDimension"
                                    placeholder="Length"
                                    className="form-control shadow-none d-inline border-2 DALCFPDIR_Input DALCFPDIR_Input_Dimensions"
                                  />
                                  <input
                                    type="number"
                                    name="stock"
                                    id="productDimension"
                                    placeholder="Width"
                                    className="form-control shadow-none d-inline border-2 DALCFPDIR_Input DALCFPDIR_Input_Dimensions m-1"
                                  />
                                  <input
                                    type="number"
                                    name="dimensions"
                                    id="productDimension"
                                    placeholder="Height"
                                    className="form-control shadow-none d-inline border-2 DALCFPDIR_Input DALCFPDIR_Input_Dimensions"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="DALCFPDIR_Item DALCF_Product_Data_Item_Right_Images h-100 w-100 p-3">
                              <div className="DALCF_Product_Data_Item_Right_Images_Container">
                                <div className="DALCFPDIRI_Images">
                                  <label
                                    htmlFor="productImages"
                                    className="DALCFPDIR_Label"
                                  >
                                    Product Images
                                  </label>
                                  <input
                                    type="file"
                                    multiple
                                    name="sku"
                                    id="productImages"
                                    className="form-control shadow-none d-inline border-2 mt-2 DALCFPDIR_Input"
                                  />
                                </div>
                                <div className="DALCFPDIRI_Images_Gallery d-flex flex-wrap align-items-start gap-2 mt-3">
                                  <img
                                    src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1"
                                    alt="Product Picture"
                                    className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                  />

                                  <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEBUrRuj1hGbHwWD2G8XCkQE-O_M4fOvwvcx6pndTQQ&s"
                                    alt="Product Picture"
                                    className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                  />

                                  <img
                                    src="https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography?format=1000w"
                                    alt="Product Picture"
                                    className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                  />
                                  <img
                                    src="https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography?format=1000w"
                                    alt="Product Picture"
                                    className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                  />
                                  <img
                                    src="https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography?format=1000w"
                                    alt="Product Picture"
                                    className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                  />
                                  <img
                                    src="https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography?format=1000w"
                                    alt="Product Picture"
                                    className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="DALC_Cards_Container ">
            <div className="DALC_Cards_Item">
              <div className="accordion rounded-0" id="Card1Container">
                <div className="accordion-item rounded-0">
                  <h2 className="accordion-header rounded-0">
                    <button
                      className="accordion-button shadow-none bg-transparent rounded-0 border-bottom p-2 h-100 DALC_Cards_Item_Heading"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#Card1"
                      aria-expanded="true"
                      aria-controls="Card1"
                    >
                      Product Categories
                    </button>
                  </h2>
                  <div
                    id="Card1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#Card1Container"
                  >
                    <div className="accordion-body p-2">
                      <div className="DALC_Cards_Item_Card1Container_Body">
                        <div className="DALC_Cards_Item_Product_Cat_Container">
                          <div className="DALC_Cards_Item_Product_Cat_Btn_Container d-flex align-items-center">
                            <button
                              className={`btn DALC_Cards_Item_Product_Cat_Btn rounded-0 ${
                                allCat == 1 ? "active" : ""
                              }`}
                              onClick={() => toggleCatTabs(1)}
                            >
                              All Categories
                            </button>
                            <button
                              className={`btn DALC_Cards_Item_Product_Cat_Btn rounded-0 ms-1 ${
                                allCat == 2 ? "active" : ""
                              }`}
                              onClick={() => toggleCatTabs(2)}
                            >
                              Most Used
                            </button>
                          </div>
                          <div className="DALC_Cards_Product_Cat_Items_Container">
                            <ul
                              className={`DALC_Cards_Item_Product_Cat px-2 py-3 w-100 ${
                                allCat == 1 ? "active" : ""
                              }`}
                            >
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Uncategorized
                                </label>
                              </li>
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Clothing
                                </label>
                              </li>
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Decor
                                </label>
                              </li>
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Digital
                                </label>
                              </li>
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Music
                                </label>
                              </li>
                            </ul>
                            <ul
                              className={`DALC_Cards_Item_Product_Cat px-2 py-3 ${
                                allCat == 2 ? "active" : ""
                              }`}
                            >
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Clothing
                                </label>
                              </li>
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Decor
                                </label>
                              </li>
                              <li className="DALC_Cards_Item_Product_Cat_Item">
                                <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                  <input
                                    value="15"
                                    type="checkbox"
                                    name="ProductCat"
                                    id="ProductCat"
                                    className="DALC_Cards_Item_Product_Cat_Item_Input"
                                  />
                                  Digital
                                </label>
                              </li>
                            </ul>

                            <div className="DALC_Cat_AddNew_Container">
                              <Link
                                className="DALC_Cat_AddNewCat_Link text-primary text-decoration-underline"
                                onClick={() => ShowAddNewCatOption()}
                              >
                                + Add New Category
                              </Link>
                              <div className="DALC_Cat_AddNew_Item my-2 d-flex align-items-center justify-content-between">
                                <input
                                  type="text"
                                  name="NewCat"
                                  id="NewCat"
                                  value={addNewCat.NewCat || ""}
                                  placeholder="Enter New Category"
                                  onChange={addNewOnChange}
                                  className="form-control DALC_Cat_AddNew_Item_Input rounded-0 p-2"
                                />
                                <button className="btn shadow-none border rounded-0 p-0 DALC_Cat_AddNewCat_Btn">
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAddProduct;
