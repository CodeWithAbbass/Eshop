import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const TestForm = () => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <div>
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,

            /* and other goodies */
          }) => (
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="text-danger">
                {errors.email && touched.email && errors.email}
              </span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                type="submit"
                // disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TestForm;
