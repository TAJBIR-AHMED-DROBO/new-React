import React from "react";
import "../Styles/ComponentStyle.css";
import { Link } from "react-router-dom";
import { useAuth } from "../store/Store";
function Navbar() {
  const { isLoggedIn, item } = useAuth();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 py-4 py-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/service">
                  Service
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {!isLoggedIn ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      Login
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {item.isAdmin && (
                    <li class="nav-item">
                      <Link class="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                  )}
                  <li class="nav-item">
                    <Link class="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
