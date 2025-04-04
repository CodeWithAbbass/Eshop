import { Link } from "react-router-dom";
import "../Css/UserForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../Store/Slices/userSlice";
const UserLogin = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        // email: "",
        phone: "",
        password: "",
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(Login(credentials));
    };
    return (
        <div className="UserForm d-flex flex-column justify-content-center">
            <div className="container-xl">
                <div className="UserForm_Container m-auto">
                    <div className="UserForm_Header mb-4">
                        <div className="row m-0 w-100 text-center">
                            <div className="UserForm_Header_Heading_Container col-12 col-md-8 text-start">
                                <h3 className="UserForm_Heading mb-0">
                                    Welcome to Eshop! Please login.
                                </h3>
                            </div>
                            <div className="UserForm_Header_Btn_Container col-12 col-md-4 text-end">
                                <span className="UserForm_LoginBtn_Container">
                                    <span>New member?</span>
                                    <Link
                                        to="/signup"
                                        className="UserSignupForm_LoginBtn mx-1"
                                    >
                                        Register
                                    </Link>
                                    <span>here</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <form
                        action=""
                        className="row m-0 w-100 UserForm_Container_Form align-items-stretch p-3 py-4 bg-white justify-content-between"
                    >
                        <div className="mb-3 col-12">
                            <label
                                htmlFor="PhoneNumber"
                                className="UserForm_Label"
                            >
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
                        <div className="mb-3 col-12">
                            <label
                                htmlFor="Password"
                                className="UserForm_Label"
                            >
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
                        <div className="col-12">
                            <span className="UserForm_Label d-flex align-items-center UserForm_Promotion">
                                <input type="checkbox" />
                                <span className="ms-1">
                                    I'd like to receive exclusive offers via SMS
                                </span>
                            </span>
                            <Link
                                className="UserForm_SubmitBtn w-100 d-block UserForm_Btn mt-3 mt-sm-0 text-center"
                                onClick={handleSubmit}
                            >
                                LOGIN
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
