import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'
import './style.css'

class FlatDetails extends PureComponent {
	saveAndContinue = e => {
		e.preventDefault()
		//declare error in case of more validation
		let error = false;
		//check each validation on the stage
		if(this.props.values.street === '') {
			console.log(true)
		}
		this.props.nextStep()
	}

	render() {
		const { values } = this.props
		console.log(values.streetError)
		return (
			<Form>
				<h1>Enter Flat Details</h1>
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
							placeholder='Street name'
							onChange={this.props.handleChange('street')}
							defaultValue={values.street}
							/>
					</Form.Field>
					<Form.Field>
						<label>Title</label>
						<Form.Input
							placeholder='Title'
							onChange={this.props.handleChange('title')}
							defaultValue={values.title}
							/>
					</Form.Field>
				</Form.Group>
				<Button onClick={this.saveAndContinue}>Save and Continue</Button>
			</Form>
		)
	}
}
export default FlatDetails