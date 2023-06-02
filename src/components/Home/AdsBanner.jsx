import { Link } from "react-router-dom";

const AdsBanner = ({ AdsImage, AdsLink }) => {
  return (
    <div className="Home_Ads_Banner_Container my-4 h-100 bg-white">
      <div className="w-100 container-xl Home_AdsLink_Wrapper">
        <Link className="Home_AdsLink w-100" to={`${AdsLink ? AdsLink : "/"}`}>
          <img
            src={AdsImage}
            alt="Ads Gif"
            className="Home_AdsImage w-100 h-100 my-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default AdsBanner;
