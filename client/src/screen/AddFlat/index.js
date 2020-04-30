import React, { PureComponent } from 'react'

import { 
    Confirmation, 
    CustomUploadPhoto,
    FlatDetails, 
    FlatmateDetails,
    Information, 
    PreferredFlatmateDetails,
    ProgressBar,
    RentDetails,
    Success
} from '../../components'

import './style.css'

class AddFlatScreen extends PureComponent {
    state = {
		step: 0,
		district: 'Stare Mesto',
		street: '',
		title: '',
		streetError: true,
		price: '',
		availabilityDate: '',
		minStay: '',
		flatmatesMale: 0,
		flatmatesFemale: 0,
		prefFlatmatesMale: false,
		prefFlatmatesFemale: false,
		prefFlatmatesCouple: false,
		smokingAllowed: false,
        petAllowed: false,
		percent: 0,
	}

	nextStep = () => {
		const { step, percent } = this.state;
		this.setState({
			step: step + 1,
			percent: percent + 15
		})
	}

	prevStep = () => {
		const { step, percent } = this.state;
		this.setState({
			step: step - 1,
			percent: percent - 15
		})
	}

	handleChange = input => event => {
		this.setState({ [input]: event.target.value });
    }
    
    handleChangeMale = () => {
		this.setState({ prefFlatmatesMale: !this.state.prefFlatmatesMale })
    }

    handleChangeFemale = () => {
		this.setState({ prefFlatmatesFemale: !this.state.prefFlatmatesFemale })
    }

    handleChangeCouple = () => {
		this.setState({ prefFlatmatesCouple: !this.state.prefFlatmatesCouple })
    }

    handleChangeSmoking = () => {
		this.setState({ smokingAllowed: !this.state.smokingAllowed })
    }

    handleChangePet = () => {
		this.setState({ petAllowed: !this.state.petAllowed })
    }

	handleChecked = input => event => {
        console.log('handle checked executed')
    }
	
	handleDate = input => (event, {name, value}) => {
		if(this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
	}
    render() {
        const { step } = this.state;
        const { district, street, title, price, availabilityDate, minStay,
            flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale, percent,
            streetError, prefFlatmatesCouple, smokingAllowed, petAllowed } = this.state;
        const values = { district, street, title, price, availabilityDate, minStay,
            flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale,
            streetError, prefFlatmatesCouple, smokingAllowed, petAllowed };
        switch(step) {
            case 0:
                return (
                    <>
                        <div className='content-addFlat'>
                            <Information
                                nextStep={this.nextStep}
                                values={values}
                                />
                        </div>
                    </>
                )
            case 1:
                return (
                        <>
                            <div className='content-addFlat'>
                                <FlatDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </div>
                            <ProgressBar percent={percent}/>
                        </>
                        )
            case 2:
                return (
                        <>
                            <div className='content-addFlat'>
                                <FlatmateDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </div>
                            <ProgressBar percent={percent}/>
                        </>
                        )
            case 3:
                return (
                    <>
                        <div className='content-addFlat'>
                            <PreferredFlatmateDetails
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChangeMale={this.handleChangeMale}
                                handleChangeFemale={this.handleChangeFemale}
                                handleChangeCouple={this.handleChangeCouple}
                                handleChangeSmoking={this.handleChangeSmoking}
                                handleChangePet={this.handleChangePet}
                                values={values}
                            />
                        </div>
                        <ProgressBar percent={percent}/>
                    </>
                        )
            case 4:
                return (
                    <>	
                        <div className='content-addFlat'>
                            <RentDetails
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleDate={this.handleDate}
                                values={values}
                            />
                        </div>
                        <ProgressBar percent={percent}/>
                    </>
                    )
            case 5:
                return (
                    <>
                        <div className='content-addFlat'>
                            <CustomUploadPhoto
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                values={values}
                            />
                        </div>
                        <ProgressBar percent={percent}/>
                    </>
                )
            case 6:
                return (
                    <> 
                        <div className='content-addFlat'>
                            <Confirmation
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                values={values}
                            />
                        </div>
                        <ProgressBar percent={percent}/>
                    </>
                    )
            case 7:
                return (
                    <Success 
                        values={values}
                    />
                )
        }
    }
}
export default AddFlatScreen
export const ADD_FLAT = "/addFlat"