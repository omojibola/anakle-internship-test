import React, { useState } from 'react';
import selected from '../../assets/Selected.svg';

import './Description.css';

const Description = () => {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const show = () => {
    setActive(!active);
  };

  const showTwo = () => {
    setActiveTwo(!activeTwo);
  };

  return (
    <div className="container">
      <h2 className="title">Laptop Pro 2019</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt labore.
      </p>

      <section>
        <p className="head">Select color:</p>
        <div className="color-select">
          <div
            className={active ? 'active' : 'rectangle'}
            onClick={() => show()}
          >
            <div className="silver-circle"></div>
            <div className="silver-text">Silver</div>
            {active && <img id="select-one" src={selected} />}
          </div>
          <div
            className={activeTwo ? 'active' : 'rectangle'}
            onClick={() => showTwo()}
          >
            <div className="grey-circle"></div>
            <div className="grey-text">Space Grey</div>
            {activeTwo && <img id="select-two" src={selected} />}
          </div>
        </div>
      </section>

      <section>
        <p className="head">Select Specification:</p>
        <div className="specification">
          <div className="spec-select" onClick={() => show()}>
            <p className="heading">13.3” 512GB</p>
            <p className="subtitle">2.4GHZ Quad Core</p>
            <p className="subtitle">8GB RAM | 512GB SSD</p>
          </div>
          <div className="spec-select" onClick={() => show()}>
            <p className="heading">13.3” 1TB</p>
            <p className="subtitle">2.4GHZ Quad Core</p>
            <p className="subtitle">8GB RAM | 1TB SSD</p>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="specification">
          <div className="spec-select">
            <p className="heading">15” 1TB</p>
            <p className="subtitle">3.2GHZ Quad Core</p>
            <p className="subtitle">16GB RAM | 1TB SSD</p>
          </div>
          <div className="spec-select">
            <p className="heading">15” 2TB</p>
            <p className="subtitle">3.6GHZ Quad Core</p>
            <p className="subtitle">16GB RAM | 2TB SSD</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
