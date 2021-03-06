import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Container, Header } from 'semantic-ui-react'
import './style.css'

export default function CardList(props) {
	const cards = props.cards
	
	return (
		<Grid>
			{cards && cards.map(renderCard)}
		</Grid>
	)
}

function renderCard(card, key) {
	return (
		<Grid.Column key={key} computer={5} tablet={8} mobile={16}>
			<Container id="card-container">
				<Header as='h3'>{card.title}</Header>
				<Link to={`/flatList/${card._id}`}>
					{card.url ?
						<Image src={`${card.url}`} alt='room photo' /> :
						null}
				</Link>
				<Header as='h3'>{card.street}, {card.district}</Header>
				<p> {card.price.value} {card.price.currency}/month</p>
			</Container>
		</Grid.Column>
	)
}