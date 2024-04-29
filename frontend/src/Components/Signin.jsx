import React from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useAuth} from "../store/Store"
import {ToastContainer,  toast } from 'react-toastify';

function Signin() {
  const navigate = useNavigate();
  const {localStore} = useAuth();
  const Schema = object({
    email: string().required("Email is required").email("Invalid email format"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });



  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/auth/login",
          values
        );
        toast.success(res.data.message)
        localStore(res.data.token)
        resetForm();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (err) {
        if (err.response && err.response.status === 409) {
          toast.danger(err.response.data.message);
        } else {
          toast.danger("An error occurred. Please try again later.");
        }
      }
    },
  });

  return (
    <div
      className="registrationform container mb-5"
      style={{ marginTop: "100px" }}
    >
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1712658553~exp=1712662153~hmac=1b296dd129dd107aa358cb3f7b498a77e9c655b10e9dddd455c9ea6dbad17c52&w=826"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center ">
          <form className="w-75 " onSubmit={handleSubmit}>
            <h1 className="mb-5">Login Form</h1>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="text-danger">
                {errors.email && touched.email ? errors.email : null}
              </span>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="exampleFormControlTextarea1"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className="text-danger">
                {errors.password && touched.password ? errors.password : null}
              </span>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-primary mx-2"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>

    
  );
}

export default Signin;
