import { Icon, Header, Container } from 'semantic-ui-react'
import React from 'react'

import './style.css'

export default function Price(props) {
	return (
		<Container>
			<Header as='h3'>Price</Header>
			<Header as='h5' dividing id='price-header'><Icon fitted name='euro sign' size='big' />{props.price} {props.currency}/month</Header>
		</Container>
	)
}