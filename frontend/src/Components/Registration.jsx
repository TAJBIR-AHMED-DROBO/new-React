import React from 'react'
import { useFormik } from 'formik'
import { object, string, number, } from 'yup';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/Store';
function Registration() {
  const navigate = useNavigate();
  const {localStore} = useAuth()
    const Schema = object({
      name:string().required("Name is must"),
      email:string().required("Email is must").matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/).email(),
      phone:string().required("Phone is must").length(11),
      password:string().min(8).max(32).required("Password is must"),
    })

  const {handleBlur,handleChange,handleSubmit,values,touched,errors,} = useFormik({
    initialValues:{
      name:"",
      email:'',
      phone:'',
      password:''
    },
    validationSchema:Schema,
    onSubmit:async(values,{resetForm})=>{
      
    try{
      const res = await axios.post("http://localhost:8080/api/auth/register",{...values,isAdmin:false});
      console.log(res)
      alert(res.data.message)
      localStore(res.data.token)
     resetForm()
     
     setTimeout(()=>{
      navigate("/login")
     },1000)
     
    }catch(err){
      
        if(err.message && err.response.status === 409) {
         alert(err.response.data.message)
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
          
          <form className="w-75 " onSubmit={handleSubmit}>
          <h1 className="mb-5">Registration Form</h1>
          <div class="mb-3">
              <label for="exampleFormControlInput0" class="form-label">
                Name
              </label>
              <input
                type="name"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                name="name"
                class="form-control"
                id="exampleFormControlInput0"
                placeholder="Name"
              />
              
              <span className="text-danger">{errors.name && touched.name ? errors.name : null}</span>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
                <span className="text-danger">{errors.email && touched.email ? errors.email : null}</span>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Phone
              </label>
              <input 
                type='phone'
                class="form-control"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder='phone'
              ></input>
                <span className="text-danger">{errors.phone && touched.phone ? errors.phone : null}</span>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Password
              </label>
              <input 
                type='password'
                class="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder='password'
              ></input>
                <span className="text-danger">{errors.password && touched.password ? errors.password : null}</span>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Registration
