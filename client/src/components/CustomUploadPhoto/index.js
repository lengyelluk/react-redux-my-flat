import React, { PureComponent } from 'react'
import { Button, Form, Icon, Progress, Container, Header, Message } from 'semantic-ui-react'
import { addImage } from '../../_actions/image.actions';
import { connect } from 'react-redux';
import './style.css'

class CustomUploadPhoto extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			msg: null,
			fileName: '',
			uploadError: false
		}
	}

	saveAndContinue = e => {
		e.preventDefault()
		let message = ''
		let uploadErrorCheck = false
		if(!this.props.url) {
			uploadErrorCheck = true
			message = 'Photo has not been uploaded'
		}
		if(uploadErrorCheck) {
			this.setState({
				msg: message,
				uploadError: uploadErrorCheck
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

	fileChange = e => {
		this.setState(
		  { file: e.target.files[0], fileName: e.target.files[0].name },
		  () => {
			console.log(
			  "File chosen --->",
			  this.state.file,
			  console.log("File name  --->", this.state.fileName)
			);
		  }
		);
	};

	onFormSubmit = e => {
		e.preventDefault(); // Stop default form submit
		console.log("form submit");
		this.fileUpload(this.state.file);
	  };

	fileUpload = async file => {
		const formData = new FormData();
		formData.append("file", file);
		for(const p of formData) {
			console.log(p);
		}
		
	try {
		  this.props.addImage(formData);
		  this.setState({
			  fileName: '',
			  msg: null
		  })
		} catch (error) {
		  console.error(Error(`Error uploading file ${error.message}`));
		}
		console.log(this.state)
	  }

	render() {
		const { statusCode } = this.props;
			return (
				<>
					<Form onSubmit={this.onFormSubmit}>
						<Container id='photo-details-container'>
							<Header as='h1' className='ui centered'>How does the room look like?</Header>
							<p>Take the best photo of the room, find it on your drive and hit <strong>Upload</strong>. The maximum size 
							of the photo is 4 MB.
							Once you receive back the message that photo has been uploaded, move to the next step by clicking 
							   <strong> Save and Continue</strong> button.</p>
							  <div>{this.state.msg ? 
							<Message>
								<Message.Header id='msg-header'>{this.state.msg}</Message.Header>
								<p>Please choose a file, and hit Upload button. Once you see a confirmation
									 that Everything worked and your photo has been saved, click on Save and Continue button again</p>
							</Message> 
							: null}
						</div>
						</Container>
						<Form.Field>
						<label>Upload photo</label>
						<Button as="label" htmlFor="file" type="button" animated="fade">
							<Button.Content visible>
							<Icon name="file" />
							</Button.Content>
							<Button.Content hidden>Choose a File</Button.Content>
						</Button>
						<input
							type="file"
							id="file"
							hidden
							onChange={this.fileChange}
						/>
						<Form.Input
							fluid
							label="File Chosen: "
							placeholder="Use the above bar to browse your file system"
							readOnly
							value={this.state.fileName}
						/>
						<Button color='teal' style={{ margin: "20px" }} type="submit">
							Upload
						</Button>
						{this.props.url && this.props.url.includes('res.cloudinary.com') ? (
							<Progress
							style={{ marginTop: "20px",
									marginBottom: "50px" }}
							percent={100}
							success
							progress
							>
							Everything worked, your photo has been saved
							</Progress>
						) : this.props.statusCode && this.props.statusCode === 500 ? (
							<Progress
							style={{ marginTop: "20px",
									marginBottom: "50px" }}
							percent={100}
							error
							active
							progress
							>
							Photo upload failed, please try again
							</Progress>
						) : null}
						</Form.Field>
					</Form>
					<Button color='red' onClick={this.back}>Back</Button>
					<Button id='flatmate-button' color='green' onClick={this.saveAndContinue}>Save and Continue</Button>
				</>
			)
		}
	}

const mapStateToProps = state => {
	console.log('state in mapStateToProps', state)
	return {
		statusCode: state.image.statusCode,
		url: state.image.url
	}
}

export default connect( mapStateToProps, { addImage })(CustomUploadPhoto)