import React, { useEffect, useState } from 'react';
// import vehicles from './data/vehicles.json';
import '../styles/Home.css'

const Home = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
      fetch('/data/vehicles.json')
        .then((res) => res.json())
        .then((data) => setVehicles(data))
        .catch((err) => console.error("Failed to load vehicles", err));
    }, []);


  return (
    <div className="home-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mt-8">
        OUR VEHICLES <span className="text-red-600">RANGE</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
        {vehicles.map((vehicle, index) => (
          <div key={index}>
            <img src={vehicle.src} alt={vehicle.name} className="mx-auto w-32 h-auto" />
            <p className="mt-2 font-medium">{vehicle.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 px-4 text-left  mx-auto">
        <h2 className="text-2xl font-semibold">Shree Kotri Shyam Tour & Travels</h2>
        <p className="mt-4 text-sm">
       <b>Welcome to Shree Kotri Shyam Tour & Travels</b>. Your trusted travel partner in Rajasthan and beyond! We specialize in comfortable and affordable car rentals, luxury buses, and customized tour packages. Whether you're planning a family trip, a pilgrimage, a wedding event, or a corporate tour, we offer well-maintained vehicles and experienced drivers to make every journey safe, smooth, and memorable.

Discover the beauty of India with us – where every trip is planned with care, comfort, and commitment.
        </p>

        <h3 className="text-xl font-semibold mt-6">About Us?</h3>
        <p className="mt-2 text-sm">
       <b>Shree Kotri Shyam Tour & Travels</b> is a trusted name in the travel and tourism industry, known for delivering reliable, affordable, and comfortable travel experiences across Rajasthan and beyond. With a strong commitment to customer satisfaction, we specialize in providing well-maintained vehicles, courteous drivers, and tailor-made travel solutions to suit every need...
        </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
