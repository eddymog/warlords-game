import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class Gym extends React.Component {
	render() {
		return (
			<Card body>
				<CardTitle>Gym</CardTitle>
				<CardText>Welcome to Eddy's Workout Club! You have 100/100 energy available to use...</CardText>
				<Row>
					<Col sm="6">
						<Card body>
							<CardTitle>Strength</CardTitle>
							<CardText>Damage takes 5 energy per train</CardText>
							<Button color="primary">Train</Button>
						</Card>
					</Col>
					<Col sm="6">
						<Card body>
							<CardTitle>Defense</CardTitle>
							<CardText>Ability to withstand damage 5 energy per train</CardText>
							<Button color="primary">Train</Button>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col sm="6">
						<Card body>
							<CardTitle>Speed</CardTitle>
							<CardText>Chance of hitting opponent 5 energy per train </CardText>
							<Button color="primary">Train</Button>
						</Card>
					</Col>
					<Col sm="6">
						<Card body>
							<CardTitle>Dexterity</CardTitle>
							<CardText>Ability to evade an attack 5 energy per train</CardText>
							<Button color="primary">Train</Button>
						</Card>
					</Col>
				</Row>
			</Card>

		);
	}
}