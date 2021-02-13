import React from 'react';
import { FaTimes } from 'react-icons/fa';

import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? 'show' : 'hide'}>
      <FaTimes className="close-icon" onClick={toggle} />
      <div className="menu">
        <p className="menu-items">Laptop</p>
        <p className="menu-items">Accessories</p>
        <p className="menu-items">Compare Products</p>
        <p className="menu-items">Contact</p>
      </div>
    </div>
  );
};

export default Sidebar;
