import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "../store/Store";

function Contactform() {
  const { item } = useAuth();
  console.log(item);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    message: Yup.string().required("Message is required"),
  });

  // Provide default values if item is undefined or if item.name/email is undefined
  const initialName = item ? item.name || "" : "";
  const initialEmail = item ? item.email || "" : "";
  
  const formik = useFormik({
    initialValues: {
      name: initialName,
      email: initialEmail,
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/form/contact",
          values
        );
        console.log(values)
        console.log(res);
        alert(res.data.message);
        resetForm();
      } catch (err) {
        if (err.response && err.response.status === 409) {
          alert(err.response.data.message);
        } else {
          alert("An error occurred. Please try again later.");
        }
      } // You can handle form submission logic here
    },
  });

  return (
    <div className="contactform container mb-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1712653347~exp=1712656947~hmac=28c6d39e7db4468497367389e3f13f1eff894a5725a36fe333983f9a12b81873&w=826"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center ">
          <form className="w-75" onSubmit={formik.handleSubmit}>
            <h1 className="mb-5">Contact Form</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Name"
                value={
                  formik.values.name 
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={
                  formik.values.email 
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="3"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-danger">{formik.errors.message}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
