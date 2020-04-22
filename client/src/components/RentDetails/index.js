import { DateInput } from 'semantic-ui-calendar-react'
import { Icon, Form, Button, Container, Header, Message } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import './style.css'

class RentDetails extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			msg: null
		}
	}

	saveAndContinue = e => {
		e.preventDefault()
		if(this.props.values.price < 1) {
			this.setState({ msg: 'Price must be at least 1 EUR/month' })
		} else if(this.props.values.minStay < 1) {
			this.setState({ msg: 'Minimum rental period is 1 month'})
		} else if(this.props.values.availabilityDate === '') {
			this.setState({ msg: 'Pick the date from when is the room on rent' })
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
                        <Message.Header>{this.state.msg}</Message.Header>
					</Message> 
					: null}
					</div>
				</Container>
				<Form.Field>
						<label>Price in EUR/month</label>
						<Form.Input
							type='number' min={1}
							placeholder='300 EUR/month'
							onChange={this.props.handleChange('price')}
							defaultValue={values.price}
							/>
				</Form.Field>
				<Form.Field>
						<label>Minimum duration of rent in months</label>
						<Form.Input
							type='number' min={1}
							placeholder='5 months'
							onChange={this.props.handleChange('minStay')}
							defaultValue={values.minStay}
							/>
				</Form.Field>
				<Form.Field>
					<label>Available from</label>
					<DateInput
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