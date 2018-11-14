import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Introduction extends Component {

  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">About WarLords!</h1>
        <hr className="my-2" />
        <p>Torn is a text-based online RPG set in Torn City, a dark, murky underworld where only the sharpest survive. In Torn City you can be anyone and do anything. Build your character to infinite strengths and play it your way.
           Torn City is a massively multiplayer game with thousands of active players around the world. Join them, attack them, befriend them, marry them, trade with them, compete with them. Whatever you do - Do it now!.</p>
        <p className="lead">
          <Button color="primary">Log in</Button>
        </p>
      </Jumbotron>
    );
  }

}

export default Introduction;