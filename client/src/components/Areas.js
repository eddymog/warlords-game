import React from 'react';
import { ListGroup, ListGroupItem, Card, CardTitle } from 'reactstrap';

export default class Areas extends React.Component {
  render() {
    return (
      <Card body>
        <CardTitle>Areas</CardTitle>
        <ListGroup flush>
          <ListGroupItem tag="a" to="#">Home</ListGroupItem>
          <ListGroupItem tag="a" to="#">Crimes</ListGroupItem>
          <ListGroupItem tag="a" to="#">Gym</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}