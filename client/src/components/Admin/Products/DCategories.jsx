import { useEffect, useState } from "react";
import "../../../Css/Admin/DProduct.css";
import "../../../Css/Admin/DCategories.css";
import { Link } from "react-router-dom";
import Content from "./ReadMore";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  getAllCat,
} from "../../../Store/Slices/categorySlice";
import EditCategory from "../../Modals/EditCategory";
const DCategories = () => {
  const dispatch = useDispatch();
  const [catData, setCatData] = useState({
    name: "",
    description: "",
    count: 0,
  });
  const [editCat, setEditCat] = useState({});
  const AllCat = useSelector((state) => state.Categories.categories);

  const onChangeCat = (e) => {
    const { name, value } = e.target;
    setCatData({ ...catData, [name]: value });
  };
  const handleAddNewCat = (e) => {
    e.preventDefault();
    dispatch(addCategory(catData));
  };
  const deleteCat = (cid, name) => {
    const response = confirm(`You're Going to delete ${name} Category`);
    if (response) {
      dispatch(deleteCategory(cid));
    }
  };
  console.log(AllCat);
  useEffect(() => {
    dispatch(getAllCat());
    return () => {};
  }, [dispatch]);
  return (
    <div className="DCategories">
      <div className="DCategories_Container">
        <div className="DCategories_Header px-2 mb-4 d-flex align-items-center justify-content-between">
          <h4 className="DALC_Forms_Heading m-0 fw-normal">Categories</h4>
        </div>
        <div className="DCategories_Layout_Container d-flex flex-wrap align-items-start justify-content-between gap-4">
          <div className="DCLC_AddNewCatForm">
            <form method="POST" onSubmit={handleAddNewCat}>
              <div className="DCLC_AddNewCatForm_Name_Container mb-4">
                <label className="DALC_Forms_Heading FS_13" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  id="name"
                  name="name"
                  autoComplete="true"
                  maxLength="25"
                  required
                  value={catData?.name || ""}
                  onChange={onChangeCat}
                />
                <span className="FS_12 lh-1 text-muted">
                  The name is how it appears on your site.
                </span>
              </div>
              <div className="DCLC_AddNewCatForm_Description_Container mb-4">
                <label
                  className="DALC_Forms_Heading FS_13"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="form-control rounded-0 shadow-none"
                  id="description"
                  name="description"
                  autoComplete="true"
                  maxLength="250"
                  rows="5"
                  cols="40"
                  required
                  value={catData?.description || ""}
                  onChange={onChangeCat}
                />
                <span className="FS_12 text-muted">
                  The description is not prominent by default.
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary DAllProduct_Header_Btn FS_12 ms-2 px-2 py-1"
              >
                Add New Category
              </button>
            </form>
          </div>
          <div className="DCLC_AllCat">
            <div className="DCLC_AllCat_Desktop">
              <div className="DCLC_AllCat_Container border">
                <div className="DCLC_AllCat_Header border-0 border-bottom row m-0 w-100 bg-white justify-content-between">
                  <div className="DCLC_AllCat_Header_Name col-3">
                    <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">
                      Name
                    </p>
                  </div>
                  <div className="DCLC_AllCat_Header_Description col-5">
                    <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">
                      Description
                    </p>
                  </div>
                  <div className="DCLC_AllCat_Header_Slug col-2">
                    <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">
                      Slug
                    </p>
                  </div>
                  <div className="DCLC_AllCat_Header_Count col-2 text-end">
                    <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">
                      Count
                    </p>
                  </div>
                </div>
                <div className="DCLC_AllCat_Body">
                  {AllCat.length > 0 &&
                    AllCat.map((cat, index) => {
                      const { cid, name, description, count } = cat;
                      return (
                        <div
                          className={`DCLC_AllCat_Body_Item row m-0 w-100 justify-content-between py-2 ${
                            index % 2 == 1 ? "bg-white" : ""
                          }`}
                          key={index}
                        >
                          <div className="DCLC_AllCat_Body_Name col-3">
                            <p className="mb-0 FS_14 DCLC_AllCat_Body_Name">
                              {name || ""}
                            </p>
                            <div className="DCLCACB_Item_Operation_Container d-flex align-items-center">
                              <Link
                                className="btn rounded-0 FS_12 py-0 pe-2 ps-0 border-0 border-end"
                                data-bs-toggle="modal"
                                data-bs-target="#EditCategory"
                                onClick={() => {
                                  setEditCat(cat);
                                }}
                              >
                                Edit
                              </Link>
                              <Link
                                className="btn rounded-0 FS_12 py-0 px-2 border-0 text-danger"
                                onClick={() => deleteCat(cid, name)}
                              >
                                Trash
                              </Link>
                            </div>
                          </div>
                          <div className="DCLC_AllCat_Body_Description col-5">
                            <Content Description={description} />
                          </div>
                          <div className="DCLC_AllCat_Body_Slug col-3">
                            <p className="mb-0 FS_13 DCLC_AllCat_Body_Slug text-lowercase">
                              {name || ""}
                            </p>
                          </div>
                          <div className="DCLC_AllCat_Body_Count col-1 text-end">
                            <p className="mb-0 FS_13 DCLC_AllCat_Body_Count">
                              {count || " "}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="DCLC_AllCat_Mobile">
              <div className="DAllProduct_AllProducts_Item_Container">
                <div className="DAllProduct_AllProducts_Item_Header bg-white d-flex align-items-center w-100 border-top mt-3">
                  <div className="DAPIH_Title_Container px-2 mb-0">Name</div>
                </div>
                <div className="DALC_Cards_Container p-0">
                  {AllCat.length > 0 &&
                    AllCat.map((cat, index) => {
                      const { cid, name, description, count } = cat;
                      return (
                        <div className="DALC_Cards_Item" key={index}>
                          <div
                            className="accordion accordion-flush rounded-0"
                            id={`CardContainer${index}`}
                          >
                            <div className="accordion-item rounded-0">
                              <h2 className="accordion-header rounded-0  border-top ">
                                <button
                                  className="accordion-button collapsed shadow-none bg-transparent rounded-0 p-2 h-100 DCLC_AllCat_Body_Name FS_13 d-flex align-items-center justify-content-between"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#Card${index}`}
                                  aria-expanded="true"
                                  aria-controls={`Card${index}`}
                                >
                                  <p className="mb-0 w-100">{name || ""}</p>
                                  <div className="DCLCACB_Item_Operation_Container d-flex align-items-center justify-content-end w-100">
                                    <Link
                                      className="btn rounded-0 FS_12 py-0 pe-2 ps-0 border-0 border-end"
                                      data-bs-toggle="modal"
                                      data-bs-target="#EditCategory"
                                      onClick={() => {
                                        setEditCat(cat);
                                      }}
                                    >
                                      Edit
                                    </Link>
                                    <Link
                                      className="btn rounded-0 FS_12 py-0 px-2 border-0 text-danger"
                                      onClick={() => deleteCat(cid, name)}
                                    >
                                      Trash
                                    </Link>
                                  </div>
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
                                    <div className="FS_12 w-auto mb-4">
                                      <div className="w-100 d-flex align-items-center gap-3">
                                        <span className="DCLC_AllCat_LeftHeading">
                                          Slug
                                        </span>
                                        <span className="DCLC_AllCat_Body_Count text-lowercase">
                                          {name || ""}
                                        </span>
                                      </div>
                                      <div className="w-100 mt-2 d-flex align-items-center gap-3">
                                        <span className="DCLC_AllCat_LeftHeading">
                                          Count
                                        </span>
                                        <span className="DCLC_AllCat_Body_Count">
                                          {count || ""}
                                        </span>
                                      </div>
                                      <div className="w-100 mt-2 d-flex align-items-start gap-3">
                                        <span className="DCLC_AllCat_LeftHeading">
                                          Description
                                        </span>

                                        <Content Description={description} />
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
        </div>
      </div>
      <EditCategory editCat={editCat} setEditCat={setEditCat} />
    </div>
  );
};

export default DCategories;
