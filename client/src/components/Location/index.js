import { Icon, Container, Header } from 'semantic-ui-react'
import React from 'react'

import './style.css'

export default function Location(props) {
	return (
		<Container>
			<Header as='h3'>Location</Header>
			<Header as='h5' dividing id='location-header'><Icon fitted name='map outline' size='big' />{props.street}, {props.district}</Header>
		</Container>
	)
}