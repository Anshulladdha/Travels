import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicle';
// import Tours from './pages/Tours';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        {/* <Route path="/tours" element={<ToursPage />} /> */}
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
      </>
    
  );
}

export default App;
