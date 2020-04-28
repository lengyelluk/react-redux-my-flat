import { DateInput } from 'semantic-ui-calendar-react'
import { Icon, Form, Button, Container, Header, Message } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import './style.css'

class RentDetails extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			msg: null,
			priceError: false,
			minStayError: false,
			availabilityDateError: false
		}
	}

	saveAndContinue = e => {
		e.preventDefault()
		let message = []
		let priceErrorCheck = false
		let minStayErrorCheck = false
		let availabilityDateErrorCheck = false
		if(this.props.values.price < 1) {
			message.push('Price must be at least 1 EUR/month')
			priceErrorCheck = true
		} 
		if(this.props.values.minStay < 1) {
			message.push('Minimum rental period is 1 month')
			minStayErrorCheck = true
		} 
		if(this.props.values.availabilityDate === '') {
			message.push('Pick the date from when is the room on rent')
			availabilityDateErrorCheck = true
		} 
		if(priceErrorCheck || minStayErrorCheck || availabilityDateErrorCheck) {
			this.setState({
				msg: message,
				priceError: priceErrorCheck,
				minStayError: minStayErrorCheck,
				availabilityDateError: availabilityDateErrorCheck
			})
		} else {
			this.setState({ msg: null })
			this.props.nextStep()
		}
	}

	back = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
		const { values } = this.props
		return (
			<Form>
				<Container id='rent-details-container'>
					<Header as='h1'>How much is the rent and what is the availability?</Header>
					<p>What is the rent for the room? Is there a minimum rental period? And when can your new flatmate move in?</p>
					<div>{this.state.msg ? 
					<Message>
						{this.state.msg.map((message, key) => <Message.Header id='msg-header' key={key}>{message}</Message.Header>)}
						<p>Please make the necessary changes and hit Save and Continue button again</p>
					</Message> 
					: null}
				</div>
				</Container>
				<Form.Field>
						<label>Price in EUR/month</label>
						<Form.Input
							error={this.state.priceError}
							type='number' min={1}
							placeholder='300 EUR/month'
							onChange={this.props.handleChange('price')}
							defaultValue={values.price}
							/>
				</Form.Field>
				<Form.Field>
						<label>Minimum duration of rent in months</label>
						<Form.Input
							error={this.state.minStayError}
							type='number' min={1}
							placeholder='5 months'
							onChange={this.props.handleChange('minStay')}
							defaultValue={values.minStay}
							/>
				</Form.Field>
				<Form.Field>
					<label>Available from</label>
					<DateInput
						error={this.state.availabilityDateError}
						clearable
						inline
						clearIcon={<Icon name='remove' color='red' />}
						name='availabilityDate'
						value={values.availabilityDate}
						iconPosition='left'
						onChange={this.props.handleDate('availabilityDate')}
						/>
				</Form.Field>
				<Button color='red' onClick={this.back}>Back</Button>
				<Button color='green' onClick={this.saveAndContinue}>Save and Continue</Button>
			</Form>
		)
	}
}
export default RentDetails