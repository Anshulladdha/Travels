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
        <h2 className="text-2xl font-semibold">Laddha Travels</h2>
        <p className="mt-4 text-sm">
        Welcome to "Laddha Travels",the official website of Laddha Travels, where culture echoes, tradition speaks, beauty enthrals and diversity delights.Bounded by the majestic Himalayan ranges in the north and edged by an endless stretch of golden beaches, India is a vivid kaleidoscope of landscapes, magnificent historical sites and royal cities, misty mountain retreats, colourful people, rich cultures and festivities
        </p>

        <h3 className="text-xl font-semibold mt-6">About Us?</h3>
        <p className="mt-2 text-sm">
        Laddha Travels is wholesale travel and tour marketing company offering a wide range of Inbound related Car Rental from hotel reservations of all budgets, Laddha Travels is wholesale travel and tour marketing company offering a wide range of Inbound related products from hotel reservations of all budgets, India packages, sightseeing options & customized solutions to the travel agents & tour operator markets. We have worldwide tie ups with reputed & professional.read more..
Laddha Travels is a global business based in Singapore that is focused on providing the highest level of customer service to meet the global traveller’s needs for leisure or business. Laddha Travel is a global business based in Singapore that is focused on providing the highest level of customer service to meet the global traveller’s needs for leisure or business.read more..
        </p>
      </div>
    </div>
  );
};

export default Home;
