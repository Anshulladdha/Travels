import React from "react";
import { NavLink,} from "react-router-dom";
// import { useAuth } from "../context/auth";
// import { ROUTES } from "../utilities/constants";
// import { toast } from "react-toastify";
import "../styles/Header.css";



const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 +91-9413640302</span>
          <span>✉️ anshulladdha2001@gmail.com</span>
          <span>📍 Bhilwara Rajasthan</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid navbar-content">
          {/* Brand Title */}
          <div className="logo-container">
            <h2 className="brand-title">Shree Kotri Shyam Tour & Travels</h2>
          </div>

          {/* Navigation Menu */}
          <div className="nav-menu">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about-us" className="nav-link">About Us</NavLink>
            <NavLink to="/vehicles" className="nav-link">Our Vehicles</NavLink>
            <NavLink to="/enquiry" className="nav-link">Enquiry</NavLink>
            <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
  
};

export default Header;
