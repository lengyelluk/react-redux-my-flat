import React, { PureComponent } from 'react'
import { Form, Button, List, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addCard } from '../../_actions/card.actions'
import { imageAdded } from '../../_actions/image.actions'
import { getUrl } from '../../reducer/image/reducer'
import './style.css'
import { cardService } from '../../_services/card.service';
import storage from 'localforage'

class Confirmation extends PureComponent {

	
	saveAndContinue = async e => {
		e.preventDefault()
		const { values } = this.props;
		const priceObject = {price: {value: values.price, currency: 'EUR'}};
		const userObject = await this.getUserData();
		const urlObject = {url: this.props.url};
		const finalObject = {...values, ...priceObject, ...userObject, ...urlObject};
		//save card
		this.props.addCard(finalObject);
		//clear image url
		this.props.imageAdded();
		const newCard = {
			...finalObject
		};
		//this.props.addCard(newCard);
		//move to confirmation page
       	this.props.nextStep()
	}

	async getUserData() {
		  const username = await storage.getItem('username');
		  const email = await storage.getItem('email');
		  return { user: {username, email} }
	}

    back  = (e) => {
		e.preventDefault()
        this.props.prevStep()
    }


    render() {
    	const {values: { district, street, price, availabilityDate, minStay,
			flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale,
			prefFlatmatesCouple, petAllowed, smokingAllowed, user, photoUrl }} = this.props
			console.log('props: ', this.props);
			return(
				<>
				<Container id='confirmation-container'>
					<Header as='h1'>Is everything correct?</Header>
					<p>Please check all the details. If there is any mistake, use the <strong>Back button</strong>, correct the mistake
						and move forward again.</p> 
					<p>If everything is correct, click <strong>Confirm</strong>. Your listing
						will be visible immediately.
					</p>
				</Container>
				
					<List size={'big'}>
						<List.Item>
							<List.Content>City District: {district}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Street: {street}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Men living in the flat: {flatmatesMale}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Women living in the flat: {flatmatesFemale}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Are you OK to share the flat with men: {prefFlatmatesMale ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Are you OK to share the flat with women: {prefFlatmatesFemale ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Are you OK to share the flat with a couple: {prefFlatmatesCouple ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Are pets allowed: {petAllowed ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Is smoking allowed: {smokingAllowed ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Price of the rent: {price} EUR/month</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Minimum rental period: {minStay} months</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Available from: {availabilityDate}</List.Content>
						</List.Item>
					</List>
					<Button color='red' onClick={this.back}>Back</Button>
					<Button color='green' onClick={this.saveAndContinue}>Confirm</Button>
				</>
			)
    }
}	

const mapStateToProps = state => {
	return {
		card: state.card,
		url: state.image.url
	}
}

export default connect(mapStateToProps, {addCard, getUrl, imageAdded})(Confirmation)