import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Button, Container, Header, Form, List } from 'semantic-ui-react'
import './style.css'

class Information extends PureComponent {
	constructor(props) {
		super(props)
	}

	saveAndContinue = e => {
		e.preventDefault()
		this.props.nextStep()
	}

	render() {
		const { values } = this.props;
		return (
			<Form>
				<Container id='info-container'>
					<Header as='h1' className='ui centered'>Are you ready to add a new listing?</Header>
					<p>To <strong>rent out a room</strong>, please check that you have all the information below:</p>
					<List size={'medium'}>
						<List.Item>	
							<List.Content>Mothly price of rent in EUR</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Minimum duration of rent in months</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Date from when is the room on rent</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Decent photo of the room</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>The address of your flat</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Number and gender of your flatmates</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferences about your future flatmate (gender, smoker, pet owner)</List.Content>
						</List.Item>
					</List>
				</Container>
				<p>If you have all the details, proceed by clicking on <strong>Rent out a Room</strong></p>
				<Button color='red'><Link id='info-cancel' to="/">Cancel</Link></Button>
				<Button color='green' onClick={this.saveAndContinue}>Rent out a Room</Button>
			</Form>
		)
	}
}

export default Information