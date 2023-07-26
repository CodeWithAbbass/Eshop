import "../../../Css/Admin/DProduct.css";
import { useEffect, useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import ReactHtmlParser from "react-html-parser";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpIcon from "@mui/icons-material/Help";
import InventoryIcon from "@mui/icons-material/Inventory";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  getSingleProduct,
} from "../../../Store/Slices/productSlice";
import { Helmet } from "react-helmet";
import Meta from "../../Meta";
import { addCategory, getAllCat } from "../../../Store/Slices/categorySlice";
const DEditProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const SingleProduct = useSelector((state) => state.Products.singleproduct);

  const initial = {
    uid: "",
    title: "",
    sku: "",
    smalldesc: "",
    description: "",
    tags: [],
    price: "",
    discount: null,
    saleprice: null,
    saleschedule: { start: "", end: "" },
    stockmanagement: false,
    maxquantity: null,
    allowbackorder: false,
    stock: null,
    stockstatus: "In stock",
    attributes: { size: "", weight: "", length: "", width: "", height: "" },
    deletedimages: [],
    images: [],
    files: [],
    category: [],
  };

  const AllCat = useSelector((state) => state.Categories.categories);
  const [addNewCat, setAddNewCat] = useState(""); // For Product Category
  const [content, setContent] = useState(""); // For Text Editor
  const [selectedImages, setSelectedImages] = useState([]); // For Image Preview
  const [productData, setProductData] = useState(initial);

  const toggleCodeView = (isCodeView) => {};
  const toggleCatTabs = (tab) => {
    setAllCat(tab);
  };
  const ToggleQuantityANDOrderANDStock = () => {
    const QuantityOption = document.querySelector(".DALCFPDIRI_Quantity");
    const AllowOrderOption = document.querySelector(".DALCFPDIRI_AlowOrder");
    const StockStatusOption = document.querySelector(".DALCFPDIRI_StockStatus");
    const StockOption = document.querySelector(".DALCFPDIRI_Stock");
    QuantityOption.classList.toggle("active");
    AllowOrderOption.classList.toggle("active");
    StockOption.classList.toggle("active");
    StockStatusOption.classList.toggle("hide");
  };
  const addNewCategory = () => {
    const newCat = { name: addNewCat, description: "" };
    dispatch(addCategory(newCat));
    setAddNewCat("");
  };
  const addNewCatOnChange = (e) => {
    setAddNewCat(e.target.value);
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
  const CancelSale = (e) => {
    setProductData({ ...productData, saleschedule: { start: "", end: "" } });
  };
  const onChangeSaleSchedule = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      saleschedule: { ...productData.saleschedule, [name]: value },
    });
  };
  const onChangeStockManagement = (e) => {
    const { name, value, checked } = e.target;
    setProductData({
      ...productData,
      stockmanagement: checked,
      stockstatus: "",
    });
    if (!checked) {
      setProductData({
        ...productData,
        stockmanagement: checked,
        stockstatus: "In stock",
      });
    }
    ToggleQuantityANDOrderANDStock();
  };
  const onChangeAllowOrder = (bool) => {
    setProductData({
      ...productData,
      allowbackorder: bool,
    });
  };
  const onChangeStockStatus = (status) => {
    setProductData({
      ...productData,
      stockstatus: status,
    });
  };
  const onChangeAttributes = (e) => {
    const { name, value } = e.target;

    setProductData({
      ...productData,
      attributes: { ...productData.attributes, [name]: value },
    });
  };
  const onChangeCategory = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setProductData({
        ...productData,
        category: [...productData.category, value],
      });
    } else {
      const OldCategory = productData.category.filter((item) => item == value);
      const NewCategory = productData.category.filter((item) => item != value);
      setProductData({
        ...productData,
        category: NewCategory,
        deletedcat: [...productData.deletedcat, ...OldCategory],
      });
    }
  };
  const onChangeTags = (e) => {
    const { name, value } = e.target;
    const slicedTag = value.split(",");
    setProductData({
      ...productData,
      tags: [...slicedTag],
    });
  };
  const onChangeFile = (e) => {
    const { files } = e.target;
    const Validator = document.querySelector(".DALCFPDIR_Validation");

    const newImages = [...selectedImages];

    const maxUploads = 5;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push({
          file: file,
          previewUrl: reader.result,
        });
        setSelectedImages([...newImages]);

        if (newImages.length > maxUploads) {
          Validator.classList.add("Invalid");
        } else {
          Validator.classList.remove("Invalid"); // Removing Invalid If Uploads Greater Than 0 or Less than 6. Limit 1-5
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
    if (newImages.length > maxUploads) {
      Validator.classList.add("Invalid");
      setProductData({
        ...productData,
        files: [...productData.files, ...files],
      });
    } else {
      Validator.classList.remove("Invalid"); // Removing Invalid If Uploads Greater Than 0 or Less than 6. Limit 1-5
      setProductData({
        ...productData,
        files: [...productData.files, ...files],
      });
    }
  };
  const deleteFile = (image, index) => {
    const Validator = document.querySelector(".DALCFPDIR_Validation");
    const RemainItem = selectedImages.filter(
      (item) => item.previewUrl !== image.previewUrl
    ); // Filter Returns Remaining Items in selectedImages.
    setSelectedImages(RemainItem);
    if (RemainItem.length > 0 && RemainItem.length < 6) {
      Validator.classList.remove("Invalid");
    } else {
      if (!Validator.classList.contains("Invalid")) {
        Validator.classList.add("Invalid");
      }
    }

    const deletedImageArr = [...productData?.images].splice(index, 1);
    if (deletedImageArr.length > 0) {
      const newImagesArr = productData.images.filter(
        (item) => item != image.previewUrl
      );

      setProductData({
        ...productData,
        images: newImagesArr,
        deletedimages: [...productData.deletedimages, ...deletedImageArr],
      });
    } else {
      const newFilesArr = productData?.files?.filter(
        (item) => item.name != image.file.name
      );
      setProductData({
        ...productData,
        files: newFilesArr,
      });
    }
  };
  const deleteTag = (i) => {
    const newTags = productData.tags.filter((item, index) => index != i);
    setProductData({
      ...productData,
      tags: [...newTags],
    });
  };
  const onChangeAddProduct = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
      description: content,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    productData?.files?.forEach((element) => {
      formData.append("file", element);
    });

    formData.append("uid", productData.uid);
    formData.append("title", productData.title);
    formData.append("sku", productData.sku);
    formData.append("smalldesc", productData.smalldesc);
    formData.append("description", JSON.stringify(productData.description));
    formData.append("tags", JSON.stringify(productData.tags));
    formData.append("price", productData.price);
    formData.append("discount", productData.discount);
    formData.append("saleprice", productData.saleprice);
    formData.append("saleschedule", JSON.stringify(productData.saleschedule));
    formData.append("stockmanagement", productData.stockmanagement);
    formData.append("maxquantity", productData.maxquantity);
    formData.append("allowbackorder", productData.allowbackorder);
    formData.append("stock", productData.stock);
    formData.append("stockstatus", productData.stockstatus);
    formData.append("attributes", JSON.stringify(productData.attributes));
    formData.append("images", JSON.stringify(productData.images));
    formData.append("deletedimages", JSON.stringify(productData.deletedimages));
    formData.append("category", JSON.stringify(productData.category));
    formData.append("deletedcat", JSON.stringify(productData.deletedcat));
    dispatch(editProduct(formData));
    // // Inspect FormData
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getAllCat());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(SingleProduct).length > 0) {
      setProductData({
        ...SingleProduct,
        deletedimages: [],
        files: [],
        deletedcat: [],
      });
      let newArr = [];
      SingleProduct?.images?.forEach((image, index) => {
        let newPrev = { previewUrl: image };
        newArr.push(newPrev);
      });

      setSelectedImages([...newArr]);
      setContent(productData.description);
    }
    return () => {};
  }, [SingleProduct, dispatch]);

  const ValidationImageLength = [...productData.images, ...productData.files];
  return (
    <div className="UpdateProduct">
      <div className="DAddProduct">
        <div className="DAddProduct_Container">
          <div className="DAddProduct_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between">
            <button
              onClick={(e) => handleSubmit(e)}
              className={`btn btn-outline-primary DAddProduct_AddBtn rounded-0 ${
                productData.title.length > 3 &&
                productData.price > 0 &&
                ValidationImageLength.length > 0 &&
                ValidationImageLength.length < 6
                  ? ""
                  : "text-muted border-secondary"
              }`}
              disabled={
                productData.title.length > 3 &&
                productData.price > 0 &&
                ValidationImageLength.length > 0 &&
                ValidationImageLength.length < 6
                  ? false
                  : true
              }
            >
              Save Product
            </button>
          </div>
          <div className="DAddProduct_Layout_Container d-flex align-items-start justify-content-between">
            <div className="DALC_Forms_Container me-4">
              <div className="DALCF_Product_Info_Container">
                <div className="DALCF_Product_Name_Container mb-4">
                  <label className="DALC_Forms_Heading FS_13" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none"
                    id="title"
                    name="title"
                    autoComplete="true"
                    value={productData?.title || ""}
                    onChange={onChangeAddProduct}
                    placeholder="Product Name"
                  />
                </div>
                <div className="DALCF_Product_SmallDesc_Container mb-4">
                  <label
                    className="DALC_Forms_Heading FS_13"
                    htmlFor="smalldesc"
                  >
                    Small Description
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none"
                    id="smalldesc"
                    name="smalldesc"
                    autoComplete="true"
                    maxLength="250"
                    value={productData?.smalldesc || ""}
                    onChange={onChangeAddProduct}
                    placeholder="Small Description"
                  />
                </div>
                {content !== "" && (
                  <div className="DALCF_Product_Description_Container bg-white">
                    <div className="DALCF_Product_Description_Header border border-bottom-0">
                      <label
                        htmlFor="ProductDescription"
                        className="DALCF_Product_Description_Heading"
                      >
                        Product Description
                      </label>
                    </div>

                    <div className="DALCF_Text_Editor_Container w-100">
                      <SunEditor
                        name="description"
                        value={productData?.description}
                        autoFocus={true}
                        placeholder="Type..."
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
                            ["preview", "print"],
                          ],
                          callBackSave: function (contents, isChanged) {
                            setContent(contents);
                          },
                        }}
                        setContents={productData?.description}
                        onChange={(contents) => {
                          setContent(contents);
                          setProductData({
                            ...productData,
                            description: contents,
                          });
                        }}
                      />
                    </div>
                  </div>
                )}

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
                            <div className="DALCF_Product_Data_Item_Right position-relative">
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
                                        value={productData.price || ""}
                                        onChange={onChangeAddProduct}
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
                                        value={productData.discount || ""}
                                        onChange={onChangeAddProduct}
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
                                      name="saleprice"
                                      id="productSale"
                                      className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                      value={productData.saleprice || ""}
                                      onChange={onChangeAddProduct}
                                    />
                                  </div>
                                  <div className="DALCFPDIRG_Sale_Schedule mt-3 h-100">
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
                                          name="start"
                                          id="fromSale"
                                          className="form-control DALC_Cat_AddNew_Item_Input rounded-0 p-0 px-2"
                                          value={
                                            productData?.saleschedule?.start ||
                                            ""
                                          }
                                          placeholder={
                                            productData?.saleschedule?.start ||
                                            ""
                                          }
                                          onChange={onChangeSaleSchedule}
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
                                          name="end"
                                          id="toSale"
                                          className="form-control DALC_Cat_AddNew_Item_Input rounded-0 p-0 px-2"
                                          value={
                                            productData?.saleschedule?.end || ""
                                          }
                                          placeholder={
                                            productData?.saleschedule?.end || ""
                                          }
                                          onChange={onChangeSaleSchedule}
                                        />
                                      </div>
                                      <button
                                        className="btn shadow-none border rounded-0 p-0 DALCF_CancelBtn"
                                        onClick={() => CancelSale()}
                                      >
                                        Cancel
                                      </button>
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
                                      <abbr title="Stock Keeping Unit">
                                        SKU
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      name="sku"
                                      id="productSku"
                                      className="form-control DALCFPDIR_Input_Inventory shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                      value={productData.sku || ""}
                                      onChange={onChangeAddProduct}
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
                                      className="form-check-input shadow-none d-inline DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                      type="checkbox"
                                      name="stockmanagement"
                                      id="stockManagement"
                                      onChange={onChangeStockManagement}
                                    />

                                    <label
                                      htmlFor="stockManagement"
                                      className="ms-2"
                                    >
                                      Track stock quantity for this product
                                    </label>
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
                                      name="maxquantity"
                                      id="productQuantity"
                                      className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                      value={productData.maxquantity || ""}
                                      onChange={onChangeAddProduct}
                                    />
                                    <span
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Max Quantity Per Order"
                                    >
                                      <HelpIcon className="DALCF_Product_Data_Item_Icon ms-2" />
                                    </span>
                                  </div>

                                  <div className="DALCFPDIRI_AlowOrder d-flex  mt-3">
                                    <label
                                      htmlFor="productAllowOrder"
                                      className="DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                    >
                                      Allow Backorders?
                                    </label>
                                    <div className="DALCFPDIR_Input">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                          type="radio"
                                          name="allowbackorder"
                                          value={true}
                                          id="Allow"
                                          onChange={() =>
                                            onChangeAllowOrder(true)
                                          }
                                          checked={
                                            productData.allowbackorder
                                              ? true
                                              : false
                                          }
                                        />
                                        <label
                                          className="form-check-label DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                          htmlFor="Allow"
                                        >
                                          Allow
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                          type="radio"
                                          name="allowbackorder"
                                          value={false}
                                          id="DontAllow"
                                          onChange={() =>
                                            onChangeAllowOrder(false)
                                          }
                                          checked={
                                            productData.allowbackorder
                                              ? false
                                              : true
                                          }
                                        />
                                        <label
                                          className="form-check-label DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                          htmlFor="DontAllow"
                                        >
                                          Do Not Allow
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="DALCFPDIRI_StockStatus d-flex  mt-3">
                                    <label
                                      htmlFor="productAllowOrder"
                                      className="DALCFPDIR_Label DALCFPDIR_Label_Inventory"
                                    >
                                      Stock Status
                                    </label>
                                    <div className="DALCFPDIR_Input">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                          type="radio"
                                          name="stockstatus"
                                          value="In stock"
                                          id="InStock"
                                          onChange={() =>
                                            onChangeStockStatus("In stock")
                                          }
                                          checked={
                                            productData.stockstatus ==
                                              "instock" ||
                                            productData.stockstatus ==
                                              "In stock"
                                              ? true
                                              : false
                                          }
                                        />
                                        <label
                                          className="form-check-label DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                          htmlFor="InStock"
                                        >
                                          In stock
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input shadow-none DALCFPDIR_Input DALCFPDIR_Input_Inventory"
                                          type="radio"
                                          name="stockstatus"
                                          value="Out of stock"
                                          id="OutofStock"
                                          onChange={() =>
                                            onChangeStockStatus("Out of stock")
                                          }
                                          checked={
                                            productData.stockstatus ==
                                              "Out of stock" ||
                                            productData.stockstatus ==
                                              "Outofstock"
                                              ? true
                                              : false
                                          }
                                        />
                                        <label
                                          className="form-check-label DALCFPDIR_Label DALCFPDIR_Label_Inventory ms-2"
                                          htmlFor="OutofStock"
                                        >
                                          Out of stock
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
                                      value={productData.stock || ""}
                                      onChange={onChangeAddProduct}
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
                                      name="weight"
                                      id="productWeight"
                                      className="form-control shadow-none d-inline w-auto border-2 DALCFPDIR_Input"
                                      value={
                                        productData?.attributes?.weight || ""
                                      }
                                      onChange={onChangeAttributes}
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
                                      name="length"
                                      id="productDimension"
                                      placeholder="Length"
                                      className="form-control shadow-none d-inline border-2 DALCFPDIR_Input DALCFPDIR_Input_Dimensions"
                                      value={
                                        productData?.attributes?.length || ""
                                      }
                                      onChange={onChangeAttributes}
                                    />
                                    <input
                                      type="number"
                                      name="width"
                                      id="productDimension"
                                      placeholder="Width"
                                      className="form-control shadow-none d-inline border-2 DALCFPDIR_Input DALCFPDIR_Input_Dimensions m-1"
                                      value={
                                        productData?.attributes?.width || ""
                                      }
                                      onChange={onChangeAttributes}
                                    />
                                    <input
                                      type="number"
                                      name="height"
                                      id="productDimension"
                                      placeholder="Height"
                                      className="form-control shadow-none d-inline border-2 DALCFPDIR_Input DALCFPDIR_Input_Dimensions"
                                      value={
                                        productData?.attributes?.height || ""
                                      }
                                      onChange={onChangeAttributes}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="DALCFPDIR_Item DALCF_Product_Data_Item_Right_Images h-100 w-100 p-3">
                                <div className="DALCF_Product_Data_Item_Right_Images_Container">
                                  <div className="DALCFPDIRI_Images">
                                    <form
                                      method="POST"
                                      encType="multipart/form-data"
                                    >
                                      <label
                                        htmlFor="productImages"
                                        className="DALCFPDIR_Label"
                                      >
                                        Product Images
                                      </label>
                                      <span className="DALCFPDIR_Label text-danger DALCFPDIR_Validation">
                                        You can only upload minimum 1 or maximum
                                        5 images.
                                      </span>
                                      <input
                                        type="file"
                                        name="images"
                                        accept="image/png, image/jpg, image/jpeg"
                                        id="productImages"
                                        className="form-control shadow-none d-inline border-2 mt-2 DALCFPDIR_Input"
                                        multiple
                                        required
                                        tabIndex={10}
                                        onChange={onChangeFile}
                                      />
                                    </form>
                                  </div>
                                  <div className="DALCFPDIRI_Images_Gallery d-flex flex-wrap align-items-start gap-3 mt-3">
                                    {selectedImages.map((image, index) => (
                                      <span
                                        className="position-relative"
                                        key={index}
                                      >
                                        <img
                                          src={image.previewUrl}
                                          className="DALCFPDIRI_Images_Gallery_Item_Img shadow-sm border"
                                          alt={`Preview ${index + 1}`}
                                        />
                                        <ClearRoundedIcon
                                          className="DALCFPDIRI_Images_Gallery_Item_DeleteIcon text-muted position-absolute top-0 end-0"
                                          onClick={() =>
                                            deleteFile(image, index)
                                          }
                                        />
                                      </span>
                                    ))}
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
            <div className="DALC_Cards_Container_Layout_Container">
              {/* Category  */}

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
                        <div className="accordion-body p-0">
                          <div className="DALC_Cards_Item_Card1Container_Body">
                            <ul
                              className={`DALC_Cards_Item_Product_Cat px-3 py-3 w-100 mb-0`}
                            >
                              {AllCat.length > 0 &&
                                AllCat.map((item, index) => {
                                  const { cid, name, description, count } =
                                    item;

                                  return (
                                    <li
                                      className="DALC_Cards_Item_Product_Cat_Item"
                                      key={index}
                                    >
                                      <label className="DALC_Cards_Item_Product_Cat_Item_Label">
                                        <input
                                          type="checkbox"
                                          id="ProductCat"
                                          className="DALC_Cards_Item_Product_Cat_Item_Input"
                                          name="category"
                                          value={name || "UnCategorized"}
                                          checked={productData?.category?.includes(
                                            name
                                          )}
                                          onChange={onChangeCategory}
                                        />
                                        {name || ""}
                                      </label>
                                    </li>
                                  );
                                })}
                            </ul>

                            <div className="DALC_Cat_AddNew_Container mb-3 px-3">
                              <Link
                                className="DALC_Cat_AddNewCat_Link text-primary text-decoration-underline"
                                onClick={() => ShowAddNewCatOption()}
                              >
                                + Add New Category
                              </Link>
                              <div className="DALC_Cat_AddNew_Item my-2 d-flex align-items-center justify-content-between gap-3">
                                <input
                                  type="text"
                                  name="NewCat"
                                  id="NewCat"
                                  value={addNewCat || ""}
                                  placeholder="Enter New Category"
                                  onChange={addNewCatOnChange}
                                  className="form-control DALC_Cat_AddNew_Item_Input DALC_Cat_AddNewCat_Input rounded-0 p-2"
                                />
                                <button
                                  className="btn shadow-none border rounded-0 p-0 DALC_Cat_AddNewCat_Btn"
                                  onClick={() => addNewCategory()}
                                >
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
              {/* Tags  */}
              <div className="DALC_Cards_Container ">
                <div className="DALC_Cards_Item">
                  <div className="accordion rounded-0" id="Card2Container">
                    <div className="accordion-item rounded-0">
                      <h2 className="accordion-header rounded-0">
                        <button
                          className="accordion-button shadow-none bg-transparent rounded-0 border-bottom p-2 h-100 DALC_Cards_Item_Heading"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Card2"
                          aria-expanded="true"
                          aria-controls="Card2"
                        >
                          Product Tags
                        </button>
                      </h2>
                      <div
                        id="Card2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#Card2Container"
                      >
                        <div className="accordion-body p-2">
                          <div className="DALC_Cards_Item_Card1Container_Body">
                            <div className="DALC_Cat_AddNew_Tags my-2 d-flex flex-wrap align-items-center justify-content-between gap-3">
                              <input
                                type="text"
                                name="tags"
                                id="tags"
                                value={
                                  productData?.tags?.map((item) => item) || ""
                                }
                                placeholder="Enter New Tags"
                                onChange={onChangeTags}
                                className="form-control DALC_Cat_AddNew_Item_Input rounded-0 p-2"
                              />
                            </div>
                            <div className="DALC_Tags_Separted_Txt text-muted w-100">
                              Separate tags with commas
                            </div>
                            <div className="DALC_Tags_Container d-flex flex-wrap align-items-center gap-1 ">
                              {productData?.tags?.length > 0 &&
                                productData?.tags?.map((tags, index) => {
                                  return (
                                    <span
                                      className="DALC_Tags_Txt rounded-5 p-1 d-flex align-items-center gap-1"
                                      key={index}
                                      onClick={() => deleteTag(index)}
                                    >
                                      <ClearRoundedIcon className="DALC_Tags_Txt_Cross_Icon bg-primary rounded-5" />
                                      <span className="text-capitalize">
                                        {tags || ""}
                                      </span>
                                    </span>
                                  );
                                })}
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

export default DEditProduct;
