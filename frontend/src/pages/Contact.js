import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">CONTACT US</h1>

      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="Laddha Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.324867020141!2d77.09310252686593!3d28.62361830688956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050f3b3e1a27%3A0x3cbb3702d5e4f66b!2sChirag%20Travels!5e0!3m2!1sen!2sin!4v1715672151432!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Branch Office Details */}
      <div className="contact-info">
        <div className="info-box">
          <FaPhoneAlt className="icon" />
          <p>+91-9413640302</p>
          <p>+91-8619059264</p>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt className="icon" />
          <h2>Branch Office</h2>
          <p>Bhilwara Rajasthan,311001, India</p>
        </div>

        <div className="info-box">
          <FaEnvelope className="icon" />
          <p>
            <a href="mailto:chiragtravels0482@gmail.com">
              anshulladdha2001@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
