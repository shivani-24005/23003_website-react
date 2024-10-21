import React from "react";
import './AboutUs.css';

function AboutUs({ toggleModal }) {
  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>About Us</h2>
        <p>
          Welcome to our sustainable shopping website! We believe in providing our customers with high-quality organic products that are not only good for your health but also good for the planet. Our mission is to promote sustainable living by offering a wide range of eco-friendly groceries, skincare products, and household items.
        </p>
        <p>
          Our team is dedicated to sourcing products from local farmers and suppliers who share our commitment to sustainability. We strive to reduce waste and minimize our carbon footprint while ensuring that our customers have access to the best organic products available.
        </p>
        <p>
          Thank you for choosing us as your partner in sustainable shopping. Together, we can make a positive impact on the environment and support our local communities.
        </p>
        <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
}

export default AboutUs;
