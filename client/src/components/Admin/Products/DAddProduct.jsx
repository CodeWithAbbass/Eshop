import { useEffect, useState } from "react";
import "../../../Css/Admin/DProduct.css";
import suneditor from "suneditor";
import SunEditor, { buttonList } from "suneditor-react";
import ReactHtmlParser from "react-html-parser";
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
  useEffect(() => {
    return () => {};
  }, [allCat]);
  return (
    <div className="DAddProduct">
      <div className="DAddProduct_Container">
        <div className="DAddProduct_Heading px-2 bg-white mb-4">
          <h2 className="DAddProduct_Heading_txt mb-3">Add New</h2>
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
                    height="500"
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
