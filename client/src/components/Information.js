import React from 'react';
import { ListGroup, ListGroupItem, Badge, Card, CardTitle, Row, Col } from 'reactstrap';

export default class Information extends React.Component {
  render() {
    return (
      <Card body>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Information</CardTitle>
              <ListGroup>
                <ListGroupItem className="justify-content-between">Name: <Badge pill>eddymogs</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Money: <Badge pill>$1,587</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Level: <Badge pill>1</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Energy: <Badge pill>100/100</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Nerve: <Badge pill>15/15</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Life: <Badge pill>150/150</Badge></ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Battle Stats</CardTitle>
              <ListGroup>
                <ListGroupItem className="justify-content-between">Strength: <Badge pill>10</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Defense: <Badge pill>10</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Speed: <Badge pill>10</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Dexterity: <Badge pill>10</Badge></ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}