import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="welcome container mb-5" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <h5>Welcome to world best It company</h5>
            <h1 className="mt-2" style={{ textAlign: "justify" }}>
              Welcome To A.O.I.S
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repellendus enim totam aliquid, corporis exercitationem quos
              reprehenderit assumenda praesentium nulla laborum cum cumque
              incidunt, temporibus eligendi nobis. Est veniam impedit eligendi
              similique natus voluptatibus minus error commodi dolor obcaecati
              nostrum, sint provident officia labore quaerat maiores, nihil
              magnam illum itaque.
            </p>
            <div className="mt-4">
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
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/premium-photo/copper-patina-welcome-concept-creative-horizontal-art-poster_107173-64925.jpg?w=1380"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="info  container bg-light text-dark mb-5 p-3">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-around mb-3 mb-md-0">
            <div className="text-center">
              <h2>50+</h2>
              <span>Registered Companies</span>
            </div>

            <div className="text-center">
              <h2>10000+</h2>
              <span>Happy Clients</span>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
            <div className="text-center">
              <h2>500+</h2>
              <span>Developers</span>
            </div>

            <div className="text-center">
              <h2>24/7</h2>
              <span>services</span>
            </div>
          </div>
        </div>
      </div>

      <div className="help container mb-4">
        <div className="row">
          <div className="col-md-6 ">
            <img src="https://img.freepik.com/free-vector/flat-background-world-humanitarian-day_23-2150560920.jpg?t=st=1712660248~exp=1712663848~hmac=cd0a4aedf3137ac13491aab053c3fd6aa9427cb34a09984f6ce676dcdabe5c7e&w=1380" alt="" className="img-fluid help"/>
          </div>

          <div className="col-md-6 d-flex flex-column  justify-content-center ">
           
         
            <h5>We Are Here To Help You</h5>
            <h1 className="mt-2">
             Get Started Today
            </h1>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repellendus enim totam aliquid, corporis exercitationem quos
              reprehenderit assumenda praesentium nulla laborum cum cumque
              
            </p>
            <div className="mt-4">
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
          
        </div>
          </div>  
        
      
      <Footer></Footer>
    </div>
  );
}

export default Home;
