import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Container, Header, Message, Dimmer, Loader, Segment } from 'semantic-ui-react'
import './style.css'

export default function EmptyCardList(props) {
	const activateLoader = props.loader;
	console.log('activate loader: ', activateLoader)
	return (
			<Container id='empty-card-container'>
				{activateLoader ? 
					<Dimmer active>
						<Loader>Loading rooms</Loader>
					</Dimmer>
				:
				<Message>
					<Message.Header>No matching rooms found</Message.Header>
					<p>We do not have any room matching your filter criteria, please change them.</p>
				</Message>
			}
			</Container>
	)
}