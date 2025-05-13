import React from 'react';
import vehicles from '../data/Vehicles.json';

const DashBoard= () => {
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

      <div className="mt-12 px-4 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Chirag Travels</h2>
        <p className="mt-4 text-sm">
          Welcome to "Chirag Travels", the official website of Chirag Travels, where culture echoes, tradition speaks...
        </p>

        <h3 className="text-xl font-semibold mt-6">About Us?</h3>
        <p className="mt-2 text-sm">
          Chirag Travels is a wholesale travel and tour marketing company offering a wide range of Inbound related Car Rental...
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
