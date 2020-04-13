import React from 'react'
import { Icon, Container, Header } from 'semantic-ui-react'
import './style.css'


export default function Availability(props) {
	return (
		<Container>
			<Header as='h3'>Availability</Header>
			<Header as='h5' dividing id='avail-header'><Icon fitted name='calendar alternate outline' size='big' />From {props.availability}, at least for {props.stay} months</Header>
		</Container>
	)
}