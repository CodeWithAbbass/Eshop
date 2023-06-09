import { Link } from "react-router-dom";
import "../Css/UserForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Signup } from "../Store/Slices/userSlice";
const UserSignup = () => {
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
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const PassValidation = document.querySelector(".UserForm_Validation");
    if (credentials.password !== credentials.cpassword) {
      PassValidation.classList.remove("valid");
      PassValidation.classList.add("invalid");
      return;
    }
    PassValidation.classList.remove("invalid");
    PassValidation.classList.add("valid");

    // let formData = new FormData();
    // formData.append("name", credentials.name);
    // formData.append("email", credentials.email.toLowerCase());
    // formData.append("phone", credentials.phone);
    // formData.append("password", credentials.password);
    // formData.append("cpassword", credentials.cpassword);
    // SignUp(formData);
    dispatch(Signup(credentials));
  };
  return (
    <div className="UserForm">
      <div className="container-xl">
        <div className="UserForm_Container m-auto">
          <div className="UserForm_Header d-flex justify-content-between align-items-center mb-4">
            <h3 className="UserForm_Heading mb-0">
              Create Your E-Shop Account
            </h3>
            <span className="UserForm_LoginBtn_Container">
              <span>Already member?</span>
              <Link to="/login" className="UserSignupForm_LoginBtn mx-1">
                Login
              </Link>
              <span>here</span>
            </span>
          </div>
          <form
            action=""
            className="row m-0 w-100 UserForm_Container_Form align-items-stretch p-3 pt-4 bg-white justify-content-between"
          >
            <div className="mb-3 col-md-6">
              <label htmlFor="PhoneNumber" className="UserForm_Label">
                Phone Number*
              </label>
              <input
                type="number"
                className="form-control w-100 UserForm_Input shadow-none rounded-0"
                id="PhoneNumber"
                name="phone"
                placeholder="Please Enter Your Phone Number"
                value={credentials.phone}
                onChange={onChange}
              />
              {/* <div className="valid UserForm_Input_Phone">
                Looks good!
              </div> */}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="Name" className="UserForm_Label">
                Full Name*
              </label>
              <input
                type="text"
                className="form-control w-100 UserForm_Input shadow-none rounded-0"
                id="Name"
                name="name"
                placeholder="Please Enter Your FullName"
                value={credentials.name}
                onChange={onChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="Email" className="UserForm_Label">
                Email*
              </label>
              <input
                type="text"
                className="form-control w-100 UserForm_Input shadow-none rounded-0"
                id="Email"
                name="email"
                placeholder="Please Enter Your Email"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="Password" className="UserForm_Label">
                Password*
              </label>
              <input
                type="password"
                className="form-control w-100 UserForm_Input shadow-none rounded-0"
                id="Password"
                name="password"
                placeholder="Please Enter Your Password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="CPassword" className="UserForm_Label">
                Confirm Password*
              </label>
              <input
                type="password"
                className="form-control w-100 UserForm_Input shadow-none rounded-0"
                id="CPassword"
                name="cpassword"
                placeholder="Please Enter Confirm Password"
                value={credentials.cpassword}
                onChange={onChange}
              />
              <div className="valid UserForm_Validation">
                Confirm password doesn't match.
              </div>
            </div>
            <div className="col-md-6">
              <span className="UserForm_Label d-flex align-items-center UserForm_Promotion">
                <input type="checkbox" />
                <span className="ms-1">
                  I'd like to receive exclusive offers and promotions via SMS
                </span>
              </span>
              <Link
                className="UserForm_Input w-100 d-block UserForm_Btn text-center"
                onClick={handleSubmit}
              >
                SIGN UP
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
