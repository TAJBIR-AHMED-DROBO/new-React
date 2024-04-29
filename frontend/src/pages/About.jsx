import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer"
import { useAuth } from "../store/Store";
function About() {
  const {item} = useAuth();
  return (
    <div className="about">
      <Navbar></Navbar>
      <div className="container mb-5" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-2">
              <span className="mb-3">
                welcome,<span className="user">{item.name}</span>
              </span>
            </div>
            <h1 className="mb-3">Why Choose Us?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              facilis et excepturi doloremque doloribus totam nemo eum magnam
              maxime quos.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              veritatis nostrum laboriosam nulla dolorum voluptates?
              Exercitationem eius delectus velit asperiores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              alias aliquid nam facere sint libero quasi debitis dolores dicta
              animi rerum repudiandae, eaque quidem voluptatibus quia vero unde.
              Sint, fugiat.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              voluptates dolor molestias alias dolorum harum.
            </p>
            <div className="my-4">
              <Link to="/contact">
                <button type="button" className="btn btn-outline-success ">
                  Connect Now
                </button>
              </Link>
              <Link to="/about">
                <button type="button" className="btn btn-outline-primary ms-5">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1712665164~exp=1712668764~hmac=b5c8bec4f8ca20059cfd59d915368070eaf36aec54d8dfdf1ea128ce0993b6a8&w=826"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "70%" }}
            />
          </div>
        </div>
      </div>
{/* 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.15173675554!2d90.37778366465409!3d23.763851347041566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a093137aa5%3A0x25dc5b609e8d437c!2sDhaka%201215!5e0!3m2!1sen!2sbd!4v1712666812864!5m2!1sen!2sbd"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}

<div>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.15173675554!2d90.37778366465409!3d23.763851347041566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a093137aa5%3A0x25dc5b609e8d437c!2sDhaka%201215!5e0!3m2!1sen!2sbd!4v1712666812864!5m2!1sen!2sbd"

  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  style={{border:"0",width:"100%",height:"300px"}}>
</iframe>
</div>

    <Footer></Footer>
    </div>
  );
}

export default About;





