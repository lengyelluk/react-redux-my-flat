import React, { PureComponent } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import './style.css'

class UploadPhoto extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			msg: null
		}
	}

	saveAndContinue = e => {
		e.preventDefault()
		this.setState({ msg: null })
		this.props.nextStep()
	}

	back = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
			return (
			<Formik
				initialValues={{ file: null }}
				onSubmit={async (values, actions) => {
				console.log('values: ', values)
				const payload = new FormData();			
				if (values.file) {
					console.log('executed');
					payload.append('file', values.file);
					for(const p of payload) {
						console.log(p);
					}
				} else {
					console.log('No File was selected ya fool!');
					actions.setSubmitting(false);
					actions.resetForm();
					return;
				}

				

				try {
					console.log('do I get here?')
					const response = await axios({
					method: 'post',
					url: 'http://localhost:8080/images/cloudinary/upload/single',
					data: payload,
					config: { headers: { 'Content-Type': 'multipart/form-data' } }
					});

					console.log('response', response);
					actions.setSubmitting(false);
					actions.resetForm();
				} catch (error) {
					console.log('a big fat error', error);
					actions.setSubmitting(false);
					actions.resetForm();
				}
				}}
				// TODO: Write Yup validation for the form
				render={({ isSubmitting, setFieldValue }) => (
				<Form encType='multipart/form-data'>
					<div className='form-group'>
					<label htmlFor='file'>File upload</label>
					<input
						id='file'
						name='file'
						type='file'
						onChange={event => {
						setFieldValue('file', event.currentTarget.files[0]);
						}}
						className='form-control'
					/>
					</div>
					{isSubmitting ? null : (
					<button
						className='btn btn-secondary'
						type='submit'
						disabled={isSubmitting}
					>
						Upload
					</button>
					)}
				</Form>
				)}
      		/>
	);
					}
				}
export default UploadPhoto