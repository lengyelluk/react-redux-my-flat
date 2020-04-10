import { Form, Button, Checkbox, Container, Header, Segment } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import './style.css'

class PreferredFlatmateDetails extends PureComponent {
	
	state = {
		prefFlatmatesMale: false
	}

	handleChange = () => {
		this.setState({ prefFlatmatesMale: !this.state.prefFlatmatesMale })
		console.log('test');
	}

	saveAndContinue = e => {
		e.preventDefault()
		this.props.nextStep()
	}

	back = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
		const { values } = this.props;
		return (
			<Form>
				<Container id='pref-flatmate-details-container'>
					<Header as='h1' className='ui centered'>Who would you like to with it?</Header>
					<p>Maybe you do not want to share a flat with a couple or with a smoker.
						Be honest and choose the options based on your real preferences.
					</p>
				</Container>
				<p>Toggle the buttons if you do agree with the statements next to the button</p>
				<Segment compact>
					<Checkbox
						toggle
						label='I am OK to share the flat with men'
						onChange={this.props.handleChangeMale}
						checked={values.prefFlatmatesMale}
					 />
				</Segment>
				<Segment compact>
					 <Checkbox toggle
						label='I am OK to share the flat with women'
						onChange={this.props.handleChangeFemale}
						checked={values.prefFlatmatesFemale}
					 />
				</Segment>
				<Segment compact>
					 <Checkbox toggle  
						label='Couples are also fine'
						onChange={this.props.handleChangeCouple}
						checked={values.prefFlatmatesCouple}
					 />
			</Segment>
			<Segment compact>		
					 <Checkbox toggle  
						label='Pets are welcome'
						onChange={this.props.handleChangePet}
						checked={values.petAllowed}
					 />
			</Segment>
			<Segment compact>
					 <Checkbox toggle  
						label='Smoking is allowed'
						onChange={this.props.handleChangeSmoking}
						checked={values.smokingAllowed}
					 />
			</Segment>
				<Button color='red' onClick={this.back}>Back</Button>
				<Button color='green' onClick={this.saveAndContinue}>Save and Continue</Button>
			</Form>
		)
	}
}
export default PreferredFlatmateDetails