import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);


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

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="brand-title">Shree Kotri Shyam Tour & Travels</h2>
           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/vehicles" onClick={() => setMenuOpen(false)}>Our Vehicles</NavLink>
            <NavLink to="/enquiry" onClick={() => setMenuOpen(false)}>Enquiry</NavLink>
            <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </div>

         
        </div>
      </nav>
    </>
  );
};

export default Header;
