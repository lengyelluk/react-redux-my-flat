import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon, Container, Header } from 'semantic-ui-react'
import React from 'react'

import './style.css'


export default function PreferredFlatmates(props) {
	const prefFlatmateMale = props.male
	const prefFlatmateFemale = props.female
	const male = prefFlatmateMale ? 'Male' : ''
	const female = prefFlatmateFemale ? 'Female' : ''
	const both = male && female


	return (
		<Container>
			<Header as='h3'>Preferred Flatmates</Header>
			<p id='pref-flat-header'><Icon name='mars' size='big' />
							<Icon fitted name='venus' size='big' className='no-left-padding' />
							{both ? 'Males or females' : { male } ? 'Males only' : 'Females only'}
			</p>
		</Container>
	)
}