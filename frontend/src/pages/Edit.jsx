import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../store/Store';

function Registration() {
  const [every, setEvery] = useState({ name: "", email: "", phone: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  const { localStore } = useAuth();

  const Schema = object({
    name: string().required("Name is must"),
    email: string().required("Email is must").matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/).email(),
    phone: string().required("Phone is must").length(11),
  });

  useEffect(() => {
    const fetchInitialValues = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/admin/edit/${id}`);
        setEvery(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInitialValues();
  }, [id]);

    const name = every?every.name : '';
    const email = every?every.email : '';
    const phone = every?every.phone : '';
  // Initialize initialValues after setting every state
  const initialValues = {
    name: name,
    email: email,
    phone: phone,
  };
  console.log(every)

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(every);
        const res = await axios.post(`http://localhost:8080/api/admin/edit/${id}`, { ...values});
        console.log(res);
        
        resetForm();
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } catch (err) {
        if (err.message && err.response.status === 409) {
          alert(err.response.data.message);
        }
      }
    }
  });

  return (
    <div className="registrationform container mb-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?t=st=1712658056~exp=1712661656~hmac=e0587510ec9e7c1882ee9846d761c7d439961d6b3ea9dadcc6fb24e8ad5f6574&w=826"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center ">
          <form className="w-75" onSubmit={handleSubmit}>
            <h1 className="mb-5">Edit Form</h1>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput0" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                name="name"
                className="form-control"
                id="exampleFormControlInput0"
                placeholder="Name"
              />
              <span className="text-danger">{errors.name && touched.name ? errors.name : null}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <span className="text-danger">{errors.email && touched.email ? errors.email : null}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Phone
              </label>
              <input
                type='text'
                className="form-control"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder='Phone'
              />
              <span className="text-danger">{errors.phone && touched.phone ? errors.phone : null}</span>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
