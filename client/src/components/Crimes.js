import React from 'react';
import { ListGroup, ListGroupItem, Card, CardTitle, Badge } from 'reactstrap';

export default class Crimes extends React.Component {
  render() {
    return (
      <Card body>
        <CardTitle>Crimes</CardTitle>
        <ListGroup>
          <ListGroupItem className="justify-content-between">Search for cash: <Badge pill>-2</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between">Sell copied media: <Badge pill>-3</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between">Shoplift: <Badge pill>-4</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between">Pickpocket someone: <Badge pill>-5</Badge></ListGroupItem>
          <ListGroupItem className="justify-content-between">Larceny: <Badge pill>-6</Badge></ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}