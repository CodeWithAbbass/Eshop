import { Link } from "react-router-dom";
import "../../Css/User.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
const AddressBook = () => {
  return (
    <div className="User_AddressBook_Container">
      <div className="Desktop_AddressBook_Container">
        <div className="User_AddressBook_Header">
          <Link to="#" className="User_Container_Heading">
            Address book
          </Link>
          <Link
            to="#"
            className="User_Container_Right_Btn float-end d-inline-flex align-items-center"
          >
            <AddRoundedIcon className="UC_Right_Btn_Icon" />
            <span className="UC_Right_Btn_Txt">Add New Address</span>
          </Link>
        </div>
        <div className="UAC_Container bg-white p-3 mt-2">
          <div className="row m-0 w-100">
            <div className="col-lg-6 col-md-12 p-1">
              <div className="UAC_AddressBook p-4">
                <div className="UAC_AddressBook_Header mb-2  d-flex align-items-center justify-content-between">
                  <div className=".MMA_Profile_Item_Title">Abbas Ali</div>
                  <Link className="MMA_Profile_Item_Btn text-uppercase">
                    Edit
                  </Link>
                </div>
                <div className="UAC_AddressBook_Info">
                  <div className="MMA_Profile_Item_Title mb-2">
                    (+92) 3016083148
                  </div>
                  <div className="MMA_Profile_Item_Title mb-4">
                    Punjab,Lahore - EME,Block A,Lahore
                  </div>
                  <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                    <small className="UAC_AddressBook_Info_MainTag ">
                      Home
                    </small>
                    <small className="UAC_AddressBook_Info_SecondaryTag ">
                      Default Shipping Address
                    </small>
                    <small className="UAC_AddressBook_Info_SecondaryTag ">
                      Default Billing Address
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Mobile_AddressBook_Container">
        <div className="User_AddressBook_Header container-xl mt-3 d-flex align-items-center justify-content-between">
          <Link to="#" className="User_Container_Heading">
            Address book
          </Link>
          <Link
            to="#"
            className="User_Container_Right_Btn float-end d-inline-flex align-items-center"
          >
            <button
              className="User_Container_Right_Btn btn float-end d-inline-flex align-items-center rounded-0"
              data-bs-toggle="modal"
              data-bs-target="#UserMadal"
            >
              <AddRoundedIcon className="UC_Right_Btn_Icon" />
              <span className="UC_Right_Btn_Txt">Add New Address</span>
            </button>
          </Link>
        </div>
        <div className="UAC_Container bg-white p-3 mt-2">
          <div className="row m-0 w-100">
            <div className="col-lg-6 col-md-12 p-1">
              <div className="UAC_AddressBook p-3">
                <div className="UAC_AddressBook_Header mb-2  d-flex align-items-center justify-content-between">
                  <div className=".MMA_Profile_Item_Title">Abbas Ali</div>
                  <div className="MMA_Profile_Item_Btn">
                    <small className="UAC_AddressBook_Info_MainTag ">
                      Home
                    </small>
                    <Link className="MMA_Profile_Item_Btn text-uppercase">
                      <button
                        type="button"
                        className="btn DCC_Left_Address_Change bg-transparent rounded-0 p-0 d-inline ms-2 float-end"
                        data-bs-toggle="modal"
                        data-bs-target="#UserMadal"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="UAC_AddressBook_Info">
                  <div className="MMA_Profile_Item_Title mb-2">
                    (+92) 3016083148
                  </div>
                  <div className="MMA_Profile_Item_Title mb-4">
                    Punjab,Lahore - EME,Block A,Lahore
                  </div>
                  <div className="UAC_AddressBook_Info_MainTag_Container d-flex align-items-center justify-content-start">
                    <small className="UAC_AddressBook_Info_SecondaryTag ">
                      Default Shipping Address
                    </small>
                    <small className="UAC_AddressBook_Info_SecondaryTag ">
                      Default Billing Address
                    </small>
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

export default AddressBook;
