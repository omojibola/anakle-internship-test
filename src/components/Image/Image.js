import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

import image from '../../assets/image-1.svg';
import image2 from '../../assets/image-2.svg';
import image3 from '../../assets/image-3.svg';

import './Image.css';

const Image = () => {
  const [selectedImg, setSelectedImg] = useState(image);

  return (
    <Container>
      <Row>
        <Col sm="6" md="6" style={{ marginTop: '135px' }}>
          <motion.div className="large-image">
            <img className="selected" src={selectedImg} alt="selected" />
          </motion.div>

          <div className="img-wrapper">
            <div className="img-container">
              <img
                src={image}
                alt="color-1"
                onClick={() => setSelectedImg(image2)}
              />
            </div>
            <div className="img-container">
              <img
                src={image2}
                alt="color-1"
                style={{ opacity: 0.5 }}
                onClick={() => setSelectedImg(image2)}
              />
            </div>
            <div className="img-container">
              <img
                src={image}
                alt="color-1"
                style={{ opacity: 0.5 }}
                onClick={() => setSelectedImg(image3)}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Image;
