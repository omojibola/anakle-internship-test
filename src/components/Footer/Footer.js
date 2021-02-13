import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="section-one">
        <p>Order Summary</p>
      </div>

      <div className="section-two-container">
        <div className="section-two">
          <p className="top">Laptop Pro early 2019 with Touchbar</p>
          <p className="bottom">
            Space Grey | 13.3” 1TB 2.4GHZ Quad Core | 8GB Ram | 1TB SSD | 2
            years warranty
          </p>
        </div>

        <div className="end">
          <h4>$2350.00</h4>
          <button>Add to Cart</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
