import React from 'react';
import { Row, Col } from 'reactstrap';
import Information from './Information';
import Areas from './Areas';
import Crimes from './Crimes';
import Gym from './Gym';

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <Information />
        {/* <Areas /> */}

        <Row>
          <Col sm="6">
            <Crimes />
          </Col>
          <Col sm="6">
            <Gym />
          </Col>
        </Row>
      </div>
    );
  }
}