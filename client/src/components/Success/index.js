import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import './style.css'

class Success extends PureComponent {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<Container id='success-container'>
				<Header as='h1'>Your listing has been successfully added</Header>
				<Button><Link to="/">Go Back Home</Link></Button>
			</Container>
		)
	}
}
export default Success