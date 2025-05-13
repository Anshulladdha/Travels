import React, { useState } from "react";
import '../styles/Enquiry.css';

const Enquiry = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    subject: "",
    message: "",
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend API
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message ||  "Enquiry submitted successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          website: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting enquiry. Please check the console.");
    }
  };

  return (
    <div className="enquiry-page">
      <h1 className="enquiry-title">ENQUIRY FORM</h1>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter Name*"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email*"
          required
        />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          placeholder="Website"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Subject*"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message*"
          required
        ></textarea>
        <button type="submit">SEND MAIL</button>
      </form>
    </div>
  );
};

export default Enquiry;
