import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

function Service() {
  const [Service, setService] = useState([]);

  useEffect(() => {
    // Function to fetch services
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/service/deep"
        );
        setService(response.data);
        // Update loading state
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchServices(); // Call the fetchServices function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <Navbar />
      <div className="service container mb-3" style={{ marginTop: "120px" }}>
        <div className="row">
          {Service.map((service) => {
            return (
              <div className="col-lg-4 col-md-6 my-2">
                <div class="card" >
                  <img src={service.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <span className="mb-2" style={{fontSize:"0.8rem"}}>{service.st}</span>
                    <h5 class="card-title">{service.title}</h5>
                    <p class="card-text mt-3">
                     {service.description}
                    </p>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
