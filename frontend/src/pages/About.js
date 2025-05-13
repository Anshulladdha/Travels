import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <>
     
      <div className="about-page">
      <div className="about-content">
        <h1 className="main-title">ABOUT US</h1>

        <h2 className="sub-title">Laddha Travels</h2>
        <p>
        LaddhaTravels is wholesale travel and tour marketing company offering a wide range of inbound related
          products from hotel reservations of all budgets, India packages, sightseeing options & customized solutions
          to the travel agents & tour operator markets.
        </p>
        <p>
          A team of professionals with vast experience in travel industry have come together to create a dedicated
          & strong team, which can cater to every need of the discerning travelers. Currently the company has
          offices in New Delhi.
        </p>
        <p>
          <strong>Operations:</strong> We believe to provide the best tour in terms of quality, value for money, hotel selection,
          transportation, travel assistance, tourism information, and more.
        </p>
        <p>
          <strong>Suppliers:</strong> We have a strong and loyal relationship with our suppliers — hoteliers, transporters and
          tour guides. We cater to all kinds of tours across India including Himachal, Kerala, Goa, Rajasthan, and more.
        </p>
        <p>
          <strong>We are authorized travel agents</strong> of leading hotels and resorts, providing special rates for Fairy Queen,
          Palace on Wheels, Royal Orient and more.
        </p>

        <h3 className="offer-title">Our Unlimited range of offers in India and Abroad...</h3>
        <p className="offer-subtext">
        Laddha Travels offers an endless range of facilities to its clientele from across the world. Here we are proud to present a few of them.
        </p>
        <ul className="offers-list">
          <li>Leisure Travel</li>
          <li>Corporate Travel</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;
