import React from 'react';
import { FaBars } from 'react-icons/fa';

import shoppingBag from '../../assets/Shopping-bag.svg';
import './Navbar.css';

const Navbar = ({ toggle }) => {
  return (
    <nav className="nav-container">
      <div className="wrapper">
        <div className="nav-start">
          <FaBars className="mobile-icon" onClick={toggle} />

          <p className="logo">iStore</p>
          <ul className="nav-menu">
            <li className="nav-item active">Laptop</li>
            <li className="nav-item">Accessories</li>
            <li className="nav-item">Compare Product</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>

        <div className="nav-menu">
          <div className="shopping-bag ">
            <p style={{ marginRight: 10 }}>$445.00</p>
            <img src={shoppingBag} />
          </div>
          <div class="vl"></div>
          <li className="nav-item-end">
            <p>Good Day!</p>
            <h5>Brandon Hicks</h5>
          </li>
          <div className="image"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
