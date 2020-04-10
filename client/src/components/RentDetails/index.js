import { DateInput } from 'semantic-ui-calendar-react'
import { Icon, Form, Button, Container, Header } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import './style.css'

class RentDetails extends PureComponent {
	saveAndContinue = e => {
		e.preventDefault()
		this.props.nextStep()
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
				</Container>
				<Form.Field>
						<label>Price in EUR</label>
						<Form.Input
							type='number' min={1}
							placeholder='300 EUR'
							onChange={this.props.handleChange('price')}
							defaultValue={values.price}
							/>
				</Form.Field>
				<Form.Field>
						<label>Minimal duration of rent in months</label>
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
						clearIcon={<Icon name='remove' color='red' />}
						name='availabilityDate'
						value={values.availabilityDate}
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