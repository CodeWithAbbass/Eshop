import { useEffect } from "react";
import "../../../Css/Admin/DProduct.css";
import "../../../Css/Admin/DCategories.css";
import { Link } from "react-router-dom";
const DCategories = () => {
  const AllCat = [
    {
      Name: "Testing",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim expedita fugiat incidunt impedit in totam? Voluptatem hic vero officiis excepturi, minus cupiditate cum expedita veniam ut voluptates doloremque optio!",
      Count: 1,
    },
  ];
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="DCategories">
      <div className="DCategories_Container">
        <div className="DCategories_Header px-2 mb-4 d-flex align-items-center justify-content-between">
          <h4 className="DALC_Forms_Heading m-0 fw-normal">Categories</h4>
        </div>
        <div className="DCategories_Layout_Container d-flex flex-wrap align-items-start justify-content-between gap-4">
          <div className="DCLC_AddNewCatForm">
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
                maxLength="250"
                // value={productData?.smalldesc || ""}
                // onChange={onChangeAddProduct}
              />
              <span className="FS_12 lh-1 text-muted">
                The name is how it appears on your site.
              </span>
            </div>
            <div className="DCLC_AddNewCatForm_Description_Container mb-4">
              <label className="DALC_Forms_Heading FS_13" htmlFor="name">
                Description
              </label>
              <textarea
                className="form-control rounded-0 shadow-none"
                id="name"
                name="name"
                autoComplete="true"
                maxLength="250"
                rows="5"
                cols="40"
                // value={productData?.smalldesc || ""}
                // onChange={onChangeAddProduct}
              />
              <span className="FS_12 text-muted">
                The description is not prominent by default.
              </span>
            </div>
          </div>
          <div className="DCLC_AllCat">
            <div className="DCLC_AllCat_Container border">
              <div className="DCLC_AllCat_Header border-0 border-bottom row m-0 w-100 bg-white justify-content-between">
                <div className="DCLC_AllCat_Header_Name col-3">
                  <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">Name</p>
                </div>
                <div className="DCLC_AllCat_Header_Description col-5">
                  <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">
                    Description
                  </p>
                </div>
                <div className="DCLC_AllCat_Header_Slug col-2">
                  <p className="mb-0 FS_14 DCLC_AllCat_Header_Headings">Slug</p>
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
                    const { Name, Description, Count } = cat;
                    // const FirstDesc = Description.split()
                    return (
                      <div
                        className="DCLC_AllCat_Body_Item row m-0 w-100 justify-content-between py-2"
                        key={index}
                      >
                        <div className="DCLC_AllCat_Body_Name col-3">
                          <p className="mb-0 FS_14 DCLC_AllCat_Body_Name">
                            {Name || ""}
                          </p>
                          <div className="DCLCACB_Item_Operation_Container d-flex align-items-center">
                            <Link className="btn rounded-0 FS_12 py-0 pe-2 ps-0 border-0 border-end">
                              Edit
                            </Link>
                            <button className="btn rounded-0 FS_12 py-0 px-2 border-0 text-danger">
                              Bin
                            </button>
                          </div>
                        </div>
                        <div className="DCLC_AllCat_Body_Description col-5">
                          <p className="mb-0 FS_13 DCLC_AllCat_Body_Description ">
                            {}
                          </p>
                          <p
                            className="DCLC_AllCat_Body_Description_Hidden mb-0 FS_13"
                            id="ReadMoreContent"
                          >
                            Minus maiores, voluptatum ullam aperiam esse
                            accusantium. Iure exercitationem sint dolor hic
                            temporibus architecto laborum. Tempore voluptate
                            quod, ratione porro voluptates nihil.
                          </p>
                          <a href="#ReadMoreContent" className="FS_12 READMore">
                            Read More
                          </a>
                        </div>
                        <div className="DCLC_AllCat_Body_Slug col-2">
                          <p className="mb-0 FS_13 DCLC_AllCat_Body_Slug text-lowercase">
                            {Name || ""}
                          </p>
                        </div>
                        <div className="DCLC_AllCat_Body_Count col-2 text-end">
                          <p className="mb-0 FS_13 DCLC_AllCat_Body_Count">1</p>
                        </div>
                      </div>
                    );
                  })}
                <div className="DCLC_AllCat_Body_Item bg-white row m-0 w-100 justify-content-between py-2">
                  <div className="DCLC_AllCat_Body_Name col-3">
                    <p className="mb-0 FS_14 DCLC_AllCat_Body_Name">Testing</p>
                    <div className="DCLCACB_Item_Operation_Container d-flex align-items-center">
                      <Link className="btn rounded-0 FS_12 py-0 pe-2 ps-0 border-0 border-end">
                        Edit
                      </Link>
                      <button className="btn rounded-0 FS_12 py-0 px-2 border-0 text-danger">
                        Bin
                      </button>
                    </div>
                  </div>
                  <div className="DCLC_AllCat_Body_Description col-5">
                    <p className="mb-0 FS_13 DCLC_AllCat_Body_Description ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p
                      className="DCLC_AllCat_Body_Description_Hidden mb-0 FS_13"
                      id="ReadMoreContent"
                    >
                      Minus maiores, voluptatum ullam aperiam esse accusantium.
                      Iure exercitationem sint dolor hic temporibus architecto
                      laborum. Tempore voluptate quod, ratione porro voluptates
                      nihil.
                    </p>
                    <a href="#ReadMoreContent" className="FS_12 READMore">
                      Read More
                    </a>
                  </div>
                  <div className="DCLC_AllCat_Body_Slug col-2">
                    <p className="mb-0 FS_13 DCLC_AllCat_Body_Slug text-lowercase">
                      Slug
                    </p>
                  </div>
                  <div className="DCLC_AllCat_Body_Count col-2 text-end">
                    <p className="mb-0 FS_13 DCLC_AllCat_Body_Count">1</p>
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

export default DCategories;
