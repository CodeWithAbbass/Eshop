import { Link } from "react-router-dom";
import "../../Css/User.css";

const Profile = () => {
  return (
    <div className="User_Profile_Container">
      <Link to="#" className="User_Container_Heading">
        My Profile
      </Link>
      <div className="MMA_Profile_Container bg-white p-5 mt-2">
        <div className="row m-0 w-100">
          <div className="col-lg-4 col-md-5 p-0">
            <h3 className="MMA_Profile_Item_Title">Full Name</h3>
            <div className="MMA_Profile_Item_Info">Abbas Ali</div>
          </div>
          <div className="col-lg-4 col-md-7 p-0">
            <h3 className="MMA_Profile_Item_Title d-inline">Email Address</h3>
            <Link className="MMA_Profile_Item_Btn d-inline border-start ps-1 ms-2">
              Edit
            </Link>
            <div className="MMA_Profile_Item_Info">
              abbas.ali@chaoscorporated.com
            </div>
          </div>
          <div className="col-lg-4 col-md-5 p-0 mt-md-4 mt-lg-0">
            <h3 className="MMA_Profile_Item_Title d-inline">Mobile</h3>
            <Link className="MMA_Profile_Item_Btn d-inline border-start ps-1 ms-2">
              Add
            </Link>
            <div className="MMA_Profile_Item_Info_Optional">
              Please Add Your Mobile
            </div>
          </div>
          <div className="col-lg-4 col-md-7 p-0 mt-4">
            <h3 className="MMA_Profile_Item_Title d-inline">Birthday</h3>
            <Link className="MMA_Profile_Item_Btn d-inline border-start ps-1 ms-2">
              Add
            </Link>
            <div className="MMA_Profile_Item_Info_Optional">
              Please enter your birthday
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 mt-4">
            <h3 className="MMA_Profile_Item_Title d-inline">Gender</h3>
            <Link className="MMA_Profile_Item_Btn d-inline border-start ps-1 ms-2">
              Add
            </Link>
            <div className="MMA_Profile_Item_Info_Optional">
              Please Add Your Gender
            </div>
          </div>
        </div>
        <div className="MMA_Profile_MainBtn_Container mt-5 w-100 h-100">
          <Link className="MMA_Profile_Newsletter_Link">
            Subscribe to our Newsletter
          </Link>
          <Link className="MMA_Profile_Link" to="/user">
            <button className="MMA_Profile_Edit_Btn btn shadow-none rounded-1 w-100">
              Edit Profile
            </button>
          </Link>
          <Link className="MMA_Profile_Link" to="/user">
            <button className="MMA_Profile_Edit_Btn btn shadow-none rounded-1 w-100">
              Change Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
