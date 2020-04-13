import { Icon, Container, Header } from 'semantic-ui-react'
import React from 'react'

import './style.css'

export default function Flatmates(props) {
	return (
			<Container>
				<Header as='h3'>Flatmates</Header>
				<p id='flatmates-text'><Icon fitted name='male' size='big' />{props.male} males
					<Icon fitted name='female' size='big' />{props.female} females</p>
			</Container>
	)
}