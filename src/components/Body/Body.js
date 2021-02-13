import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Description from '../Description/Description';

import Image from '../Image/Image';

const Body = () => {
  return (
    <Container>
      <Row>
        <Col sm="6">
          <Image />
        </Col>
        <Col sm="6">
          <Description />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
