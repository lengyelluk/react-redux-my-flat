import { Form, Button, Checkbox, Container, Header, Segment, Message } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import './style.css'

class PreferredFlatmateDetails extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			msg: null
		}
	}

	saveAndContinue = e => {
		e.preventDefault()
		const isValid = this.props.values.prefFlatmatesMale || this.props.values.prefFlatmatesFemale
		if(!isValid) {
			this.setState({ msg: 'With men or with women? Select at least one of those options'})
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
		const { values } = this.props;
		return (
			<Form>
				<Container id='pref-flatmate-details-container'>
					<Header as='h1' className='ui centered'>Who would be your ideal flatmate?</Header>
					<p>Maybe you do not want to share a flat with a couple or with a smoker.
						Be honest and choose the options based on your real preferences.
					</p>
				</Container>
				<p>Toggle the buttons if you do agree with the statements next to the button</p>
				<div>{this.state.msg ? 
					<Message>
                        <Message.Header>{this.state.msg}</Message.Header>
					</Message> 
					: null}
				</div>
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