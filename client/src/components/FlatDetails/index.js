import React, { PureComponent } from 'react'
import { Form, Button, Container, Header, Message } from 'semantic-ui-react'
import './style.css'

class FlatDetails extends PureComponent {
	constructor(props) {
		super(props)
		this.state={
			msg: null,
			streetError: false,
			titleError: false
		}
	}

	back = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	saveAndContinue = e => {
		e.preventDefault()
		//declare error in case of more validation
		let titleErrorCheck = false;
		let streetErrorCheck = false;
		let message = [];
		//check each validation on the stage
		if(this.props.values.street === '') {
			message.push('Street cannot be empty')
			streetErrorCheck = true;
		}
	 	if(this.props.values.title === '') {
			message.push('Title cannot be empty')
			titleErrorCheck = true;
		 }
		if(titleErrorCheck || streetErrorCheck) {	
			this.setState({ 
				msg: message,
				streetError: streetErrorCheck,
				titleError: titleErrorCheck
			 })
		} else {
			this.setState({ msg: null })
			this.props.nextStep()
		}
	}

	render() {
		const { values } = this.props
		console.log('Values in first step: ', values)
		return (
			<>
			<Form>
				<Container id='flat-details-container'>
				<Header as='h1'>Where is the flat?</Header>
				<p>Choose the city district and write down the street</p>
				<p>Title of your listing should in a few words describe the flat/room and attract your potential flatmates. For instance,
					 Cozy room in city centre
				</p>
				<div>{this.state.msg ? 
					<Message>
						{this.state.msg.map((message, key) => <Message.Header id='msg-header' key={key}>{message}</Message.Header>)}
						<p>Please make the necessary changes and hit Save and Continue button again</p>
					</Message> 
					: null}
				</div>
				</Container>
				<Form.Group>	
					<Form.Field label='City District' 
						control='select'
						onChange={this.props.handleChange('district')}
						defaultValue={values.district}
						>
						<option value='Stare Mesto'>Staré Mesto</option>
						<option value='Ruzinov'>Ružinov</option>
						<option value='Vrakuna'>Vrakuňa</option>
						<option value='Podunajske Biskupice'>Podunajské Biskupice</option>
						<option value='Nove Mesto'>Nové Mesto</option>
						<option value='Raca'>Rača</option>
						<option value='Vajnory'>Vajnory</option>
						<option value='Karlova Ves'>Karlova Ves</option>
						<option value='Dubravka'>Dúbravka</option>
						<option value='Lamac'>Lamač</option>
						<option value='Devinska Nova Ves'>Devínska Nová Ves</option>
					</Form.Field>
					<Form.Field>
						<label>Street</label>
						<Form.Input
							error={this.state.streetError}
							placeholder='Street name'
							onChange={this.props.handleChange('street')}
							defaultValue={values.street}
							/>
					</Form.Field>
					<Form.Field>
						<label>Title</label>
						<Form.Input
							error={this.state.titleError}
							placeholder='Title'
							onChange={this.props.handleChange('title')}
							defaultValue={values.title}
							/>
					</Form.Field>
				</Form.Group>
				<Button color='red' onClick={this.back}>Back</Button>
				<Button color='green' 
						onClick={this.saveAndContinue} 
						id='flat-details-button'
						>Save and Continue</Button>
			</Form>
		</>
		)
	}
}
export default FlatDetails