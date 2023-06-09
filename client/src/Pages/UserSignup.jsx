import "../Css/UserSignup.css";
const UserSignup = () => {
  return (
    <div className="UserSignup py-5">
      <div className="UserSignup_Container container-xl">
        <div className="UserSignupForm_Container m-auto">
          <h3 className="UserSignupForm_Heading">Create Your E-Shop Account</h3>
          <form
            action=""
            className="row m-0 w-100 UserForm_Container_Form align-items-center p-3 pt-4 bg-white justify-content-between"
          >
            <div className="mb-3 col-6">
              <label htmlFor="PhoneNumber" className="UserSignupForm_Label">
                Phone Number*
              </label>
              <input
                type="text"
                className="form-control w-100 UserSignupForm_Input shadow-none rounded-0"
                id="PhoneNumber"
                placeholder="Please Enter Your Phone Number"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="FullName" className="UserSignupForm_Label">
                Full Name*
              </label>
              <input
                type="text"
                className="form-control w-100 UserSignupForm_Input shadow-none rounded-0"
                id="FullName"
                placeholder="Please Enter Your Phone Number"
              />
            </div>
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default UserSignup;
