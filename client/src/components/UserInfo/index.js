import React from 'react'
import { Icon, Container, Header } from 'semantic-ui-react'
import './style.css'


export default function UserInfo(props) {
	return (
		<Container>
			<Header as='h3'>Contact person</Header>
			<p dividing id='contact-header'><Icon fitted name='mail outline' size='big' />Drop an email to {props.username} at <strong>{props.email}</strong></p>		
		</Container>
	)
}