import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Introduction extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">About WarLords!</h1>
          <hr className="my-2" />
          <p>Torn is a text-based online RPG set in Torn City, a dark, murky underworld where only the sharpest survive. In Torn City you can be anyone and do anything. Build your character to infinite strengths and play it your way.
            Torn City is a massively multiplayer game with thousands of active players around the world. Join them, attack them, befriend them, marry them, trade with them, compete with them. Whatever you do - Do it now!.</p>
          <p className="lead">
            <Button color="primary">Log in</Button>
          </p>
        </Jumbotron>
        <div>

          <p>Name: Eddytron</p>
          <p>HP: 100</p>
          <p>Stamina: 100</p>
          <p>Experience: ??</p>
          <p>Strength: ?</p>
          <p>Agility: ?</p>
          <p>Intelligence: ?</p>
          
          <h2>Crimes:</h2>
          <p>Mug someone</p>
        </div>
      </div>
    );
  }

}

export default Introduction;