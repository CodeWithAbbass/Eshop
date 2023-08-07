import { Link } from "react-router-dom";
import "../../Css/Admin/DForm.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Formik } from "formik";
const DSignup = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    cpassword: "",
  });
  const onChange = (e) => {
    let { name, value } = e.target;
    if (name == "phone" && value < 0) {
      value = 1;
    }
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const PassValidation = document.querySelector(".DForm_Validation");

    if (credentials.password !== credentials.cpassword) {
      PassValidation.classList.remove("valid");
      PassValidation.classList.add("invalid");
      return;
    }

    PassValidation.classList.remove("invalid");
    PassValidation.classList.add("valid");
    setCredentials({
      ...credentials,
      email: credentials.email.toLowerCase(),
    });
    // let formData = new FormData();
    // formData.append("name", credentials.name);
    // formData.append("email", credentials.email.toLowerCase());
    // formData.append("phone", credentials.phone);
    // formData.append("password", credentials.password);
    // formData.append("cpassword", credentials.cpassword);
    // SignUp(formData);
    // dispatch(Signup(credentials));
  };
  return (
    <div className="DSignup p-3 px-lg-5 px-md-4 px-3">
      <div className="DForm_Container container-xl p-0 px-md-3">
        <div className="DForm_Header mb-4">
          <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-md-between">
            <div className="DForm_Heading text-center">
              <h3 className="DForm_Heading mb-0">
                Create Your E-Shop Admin Account
              </h3>
            </div>
            <div className="DForm_Header_Btn_Container">
              <span className="UserForm_LoginBtn_Container">
                <span>Already admin?</span>
                <Link
                  className="UserSignupForm_LoginBtn mx-1"
                  to="/admin/login"
                >
                  Login
                </Link>
                <span>here</span>
              </span>
            </div>
          </div>
        </div>
        <form
          action=""
          className="row m-0 w-100 DForm_Container_Form align-items-stretch p-3 pt-md-4 bg-white justify-content-between"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 col-md-6 px-md-3 p-0">
            <label htmlFor="PhoneNumber" className="DForm_Label">
              <span>Phone Number</span>
              <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control w-100 DForm_Input shadow-none"
              id="PhoneNumber"
              name="phone"
              placeholder="Please Enter Your Phone Number"
              value={credentials.phone}
              required
              onChange={onChange}
              onWheel={function (e) {
                e.target.blur();
              }}
            />
            {/* <div className="valid UserForm_Input_Phone">
                Looks good!
              </div> */}
          </div>
          <div className="mb-3 col-md-6 px-md-3 p-0">
            <label htmlFor="Name" className="DForm_Label">
              <span>Full Name</span>
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control w-100 DForm_Input shadow-none"
              id="Name"
              name="name"
              placeholder="Please Enter Your FullName"
              value={credentials.name}
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-3 col-md-6 px-md-3 p-0">
            <label htmlFor="Email" className="DForm_Label">
              <span>Email</span>
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control w-100 DForm_Input shadow-none"
              id="Email"
              name="email"
              placeholder="Please Enter Your Email"
              value={credentials.email}
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-3 col-md-6 px-md-3 p-0">
            <label htmlFor="Password" className="DForm_Label">
              <span>Password</span>
              <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control w-100 DForm_Input shadow-none"
              id="Password"
              name="password"
              placeholder="Please Enter Your Password"
              required
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="col-md-6 px-md-3 p-0">
            <label htmlFor="CPassword" className="DForm_Label">
              <span>Confirm Password</span>
              <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control w-100 DForm_Input shadow-none"
              id="CPassword"
              name="cpassword"
              placeholder="Please Enter Confirm Password"
              required
              value={credentials.cpassword}
              onChange={onChange}
            />
            <div className="valid DForm_Validation">
              Confirm password doesn't match.
            </div>
          </div>
          <div className="col-md-6 px-md-3 p-0">
            <label htmlFor="" className="DForm_Label d-none d-md-block"></label>
            <button
              type="submit"
              className="DForm_SubmitBtn w-100 d-block mt-sm-0 text-center FS_14 p-0 border-0"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DSignup;
