import "../Css/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeroSlider from "../components/Home/HeroSlider";
import AdsBanner from "../components/Home/AdsBanner";
import FlashSale from "../components/Home/FlashSale";
import CategoriesCard from "../components/Home/CategoriesCard";
import JustForYou from "../components/Home/JustForYou";
const Home = () => {


  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, []);
  return (
    <div className="Home pb-4">
      <HeroSlider />
      <AdsBanner
        AdsImage={
          // "https://icms-image.slatic.net/images/ims-web/113f5b22-9a21-4378-b6d9-2b0bded25717.gif"
          // "https://gcp-img.slatic.net/lazada/571c8638-902e-453c-9f5a-78d894a80f8e_PK-1188-350.jpg"
          // "https://gcp-img.slatic.net/lazada/18c81b84-4534-4315-ae8d-ca8fa64644f7_PK-1188-350.jpg"
          // "https://laz-img-cdn.alicdn.com/imgextra/i2/O1CN01uwMebu1fjk6fz8Bhs_!!6000000004043-2-tps-1188-483.png"
          // "https://laz-img-cdn.alicdn.com/imgextra/i4/O1CN01Y2s7zy1RenEGv5GgV_!!6000000002137-1-tps-1188-500.gif"
          // "https://gcp-img.slatic.net/lazada/ffbeb610-02a5-4b0b-a9f1-674bd8dad3e9_PK-1188-350.jpg"
          // "https://gcp-img.slatic.net/lazada/797ed80b-2b2f-4c49-afa9-5d593132ce80_PK-1188-343.png"
          // "https://laz-img-cdn.alicdn.com/imgextra/i4/O1CN01DM8x6G1DG9IQs4rK7_!!6000000000188-0-tps-1188-753.jpg"
          // "https://gcp-img.slatic.net/lazada/d61afda0-d45e-4526-9d77-e0b97af49b28_PK-1188-350.jpg"
          "https://gcp-img.slatic.net/lazada/4a4e8426-2162-422d-a057-0619cb617b01_PK-1188-350.jpg"
          // "https://laz-img-cdn.alicdn.com/imgextra/i1/O1CN01RuPMoq1cb5npyFJRT_!!6000000003618-0-tps-1188-500.jpg"
        }
        AdsLink={"/"}
      />
      <div className="Home_Categories_Container_Link w-100 container-xl my-4">
        <div className="row w-100 m-0 justify-content-center align-items-center ">
          <div className="col-md-3 col-6 my-2   HC_Link_Container ">
            <Link className="HC_Link">
              <div className="HC_Image_Container">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/b7c43fca-2c7e-4ef4-8fbe-1a27ed2f13f0.png"
                  alt="Category Image"
                  className="HC_Image"
                />
              </div>
              <span className="HC_LinkTxt">Mart</span>
            </Link>
          </div>
          <div className="col-md-3 col-6 my-2   HC_Link_Container ">
            <Link className="HC_Link">
              <div className="HC_Image_Container">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/ca105dde-05d3-41ae-8120-040305698584.png"
                  alt="Category Image"
                  className="HC_Image"
                />
              </div>
              <span className="HC_LinkTxt">Fashion</span>
            </Link>
          </div>
          <div className="col-md-3 col-6 my-2   HC_Link_Container ">
            <Link className="HC_Link">
              <div className="HC_Image_Container">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/65aae00e-d5e6-4f4a-9ab4-5c8d0f17e800.png"
                  alt="Category Image"
                  className="HC_Image"
                />
              </div>
              <span className="HC_LinkTxt">Beauty</span>
            </Link>
          </div>
          <div className="col-md-3 col-6 my-2   HC_Link_Container ">
            <Link className="HC_Link">
              <div className="HC_Image_Container">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/e2cf7a37-1b47-4f2a-8180-3c4ed3f09fcd.png"
                  alt="Category Image"
                  className="HC_Image"
                />
              </div>
              <span className="HC_LinkTxt">Home & Decor</span>
            </Link>
          </div>
        </div>
      </div>
      <FlashSale />
      <CategoriesCard />
      <JustForYou />
    </div>
  );
};

export default Home;
