import React, { PureComponent } from 'react'
import { Form, Button, List } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addCard } from '../../_actions/card.actions'

class Confirmation extends PureComponent {

	
	saveAndContinue = async e => {
		e.preventDefault()
		const { values } = this.props;
		const priceObject = {price: {value: values.price, currency: 'EUR'}};
		const finalObject = {...values, ...priceObject};
		//const data = await cardService.saveCard(finalObject);

		const newCard = {
			...finalObject
		};
		console.log('card to be added: ', newCard);
		this.props.addCard(newCard);
		//move to confirmation page
       	this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }


    render() {
    	const {values: { district, street, price, availabilityDate, minStay,
			flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale,
			prefFlatmatesCouple, petAllowed, smokingAllowed }} = this.props
			console.log('props: ', this.props);
			return(
				<div>
					<h1>Check all the details</h1>
					<p>Confirm if all details below are correct</p>
					<List>
						<List.Item>
							<List.Content>District: {district}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Street: {street}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Male Flatmates: {flatmatesMale}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Female Flatmates: {flatmatesFemale}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferred Male Flatmates: {prefFlatmatesMale ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferred Female Flatmates: {prefFlatmatesFemale ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferred Couple Flatmates: {prefFlatmatesCouple ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Pet Allowed: {petAllowed ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Smoking Allowed: {smokingAllowed ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Price: {price}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Minimal stay: {minStay}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>AvailabilityDate: {availabilityDate}</List.Content>
						</List.Item>
					</List>

					<Button onClick={this.back}>Back</Button>
					<Button onClick={this.saveAndContinue}>Confirm</Button>
				</div>
			)
    }
}

const mapStateToProps = state => ({
	card: state.card
})

export default connect(mapStateToProps, { addCard })(Confirmation)