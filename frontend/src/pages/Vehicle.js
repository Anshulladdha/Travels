// src/pages/Vehicle.js
import React from 'react';
import '../styles/Vehicle.css';

const vehicles = [
  {
    name: "Indigo",
    image: "/assets/indigo.png",
    description: "Look and Style Looks are sober don't look very attractive or don’t look bad also. Comfort very much comfortable for 4 people. Even 5 can sit at back comfortably.",
    capacity: "4+1",
  },
  {
    name: "Dezire",
    image: "/assets/dezire.png",
    description: "New Maruti Swift Dezire LDI is the base variant of the Maruti Swift DZire. This variant is bestowed with a 1.3 litre 4cyl diesel engine with VGT and a displacement of 1248cc...",
    capacity: "4+1",
  },
  {
    name: "Etios",
    image: "/assets/etios.png",
    description: "Toyota Etios, the affordable luxury car makes no compromise with its entertainment quotient. It is provided with 2DIN DVD MP3 AM/FM...",
    capacity: "4+1",
  },
  {
    name: "Corolla Altis",
    image: "/assets/corolla_altis.png",
    description: "Sitting Capacity - 4+1, Brightening interior with dome light, map pockets, Air-Condition, center-mounted cup holder.",
    capacity: "4+1",
  },
  {
    name: "Camry",
    image: "/assets/camry.png",
    description: "Fresh and inspiring look, Sitting Capacity - 5, Air conditioning, Power driver’s seat and door locks.",
    capacity: "4+1",
  },
  {
    name: "Mercedes",
    image: "/assets/mercedes.png",
    description: "Sitting Capacity - 5, Air conditioning with climate control and rear outlet, 2 Front and rear airbags, Delayed/fade courtesy lights.",
    capacity: "4+1",
  },
  {
    name: "Xylo",
    image: "/assets/Xylo.png",
    description: "Sitting Capacity -6+1, Luxurious Seat Rich Spacious Interiors...",
    capacity: "6+1",
  },
  {
    name: "Innova",
    image: "/assets/Innova.png",
    description: "Community theatres nationwide have found Manhattan Tour & Travel a very useful partner in the growing business of fundraising trips, and MT&T's assistance has been a help to the American Association of Community Theatre (AACT) conventions held in New York City. In 2010, MT&T received the AACT Corporate Award, in appreciation for its nationwide support of community theatre...",
    capacity: "6+1",
  },
  
  {
    name: "Bus",
    image: "/assets/luxury_buses.png",
    description: "with seat belts for extra comfort & safety. Powerful A/C with digital control. Fully loaded with good quality music system with mike.",
    capacity: "27/35",
  },
  {
    name: "Volvo",
    image: "/assets/Volvo.png",
    description: "Luxurious & push back seats with seat belts for extra comfort & safety. Powerful A/C with digital control. Fully loaded with good quality music system with mike.",
    capacity: "Upto 41",
  },
];

const Vehicle = () => {
  return (
    <div className="vehicle-page">
      <h1 className="page-title">Our Vehicles</h1>
      <div className="vehicle-list">
        {vehicles.map((v, i) => (
          <div key={i} className="vehicle-card">
            <div className="vehicle-img-box">
              <img src={v.image} alt={v.name} />
            </div>
            <div className="vehicle-details-box">
              <h2>{v.name}</h2>
              <p>{v.description}</p>
              <p><strong>SEATING CAPACITY:</strong> {v.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
