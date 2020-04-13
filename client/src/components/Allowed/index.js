import React from 'react'
import { Icon, Container, Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmoking, faDog } from '@fortawesome/free-solid-svg-icons'
import './style.css'


export default function Allowed(props) {
	return (
		<Container>
		<Header as='h3'>Allowed</Header>
		<div id='inline-allow'>
						{props.smoking ?
							(<span><FontAwesomeIcon icon={faSmoking} size='lg' />Smoking allowed</span>)
							:
							(<span><Icon fitted name='dont' size='big' className='no-left-padding' />No smoking</span>)}
						{props.pet ?
							(<span id='pet-allow'><FontAwesomeIcon icon={faDog} size='lg' />Pets allowed</span>)
							:
							(<span id='pet-allow'> <Icon fitted name='dont' size='big' className='no-left-padding' />No pets</span>)}
					</div>
		</Container>
	)
}