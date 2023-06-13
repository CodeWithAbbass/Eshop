import { Link } from "react-router-dom";
import "../../Css/User.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Profile = ({}) => {
  let user = useSelector((state) => state.User.user);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="User_Profile_Container">
      <div className="Desktop_User_Profile">
        <Link to="#" className="User_Container_Heading">
          My Profile
        </Link>
        <div className="MMA_Profile_Container bg-white p-5 mt-2">
          <div className="row m-0 w-100">
            <div className="col-lg-4 col-md-5 p-0">
              <h3 className="MMA_Profile_Item_Title">Full Name</h3>
              <div className="MMA_Profile_Item_Info">
                {user ? user.name : ""}
              </div>
            </div>
            <div className="col-lg-4 col-md-7 p-0">
              <h3 className="MMA_Profile_Item_Title d-inline">Email Address</h3>
              <Link className="MMA_Profile_Item_Btn d-inline border-start ps-1 ms-2">
                Edit
              </Link>
              <div className="MMA_Profile_Item_Info">
                {user ? user.email : ""}
              </div>
            </div>
            <div className="col-lg-4 col-md-5 p-0 mt-md-4 mt-lg-0">
              <h3 className="MMA_Profile_Item_Title d-inline">Mobile</h3>
              <Link className="MMA_Profile_Item_Btn d-inline border-start ps-1 ms-2">
                Add
              </Link>
              <div className="MMA_Profile_Item_Info">
                {user ? user.phone : ""}
              </div>
              {/* {user.phone.length < 11 ? (
                <div className="MMA_Profile_Item_Info_Optional">
                  Please Add Your Mobile
                </div>
              ) : (
                ""
              )} */}
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
              <button
                className="MMA_Profile_Edit_Btn btn shadow-none rounded-1 w-100"
                data-bs-toggle="modal"
                data-bs-target="#UserMadal"
              >
                Edit Profile
              </button>
            </Link>
            <Link className="MMA_Profile_Link" to="/user">
              <button
                className="MMA_Profile_Edit_Btn btn shadow-none rounded-1 w-100"
                data-bs-toggle="modal"
                data-bs-target="#UserMadal"
              >
                Change Password
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Mobile_User_Profile">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <span>Full Name</span>
              <span>{user ? user.name : ""}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <span>Password</span>
              <input
                readOnly
                type="password"
                value="000000"
                className="border-0 text-end"
                onChange={() => {}}
              />
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <span>Email</span>
              <span>{user ? user.email : ""}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <span>Phone</span>
              <span>{user ? user.phone : ""}</span>
            </div>
          </li>
          {/* <li className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <span>Gender</span>
              <span>Male</span>
            </div>
          </li> */}
          {/* <li className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <span>Birthday</span>
              <span>1947-02-03</span>
            </div>
          </li> */}
        </ul>

        <div className="MMA_Profile_MainBtn_Container mt-5 w-100 h-100 text-center">
          <Link className="MMA_Profile_Newsletter_Link">
            Subscribe to our Newsletter
          </Link>
          <Link className="MMA_Profile_Link m-auto mt-3" to="/user">
            <button
              className="MMA_Profile_Edit_Btn btn shadow-none rounded-1 w-100"
              data-bs-toggle="modal"
              data-bs-target="#UserMadal"
            >
              Edit Profile
            </button>
          </Link>
          <Link className="MMA_Profile_Link m-auto mt-3" to="/user">
            <button
              className="MMA_Profile_Edit_Btn btn shadow-none rounded-1 w-100"
              data-bs-toggle="modal"
              data-bs-target="#UserMadal"
            >
              Change Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
