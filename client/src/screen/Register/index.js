import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Register } from '../../components'
import { authenticationService } from '../../_services/authentication.service'

class RegisterScreen extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: '',
				password: '',
			},
			submitted: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};


	handleChange(e) {
		const { name, value } = e.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}

	handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user, submitted } = this.state;
        const values = '';
        return (
            <Form name="form" onSubmit={this.handleSubmit}>
				<h1>Registration</h1>
				<Form.Group>	
					<Form.Field>
						<label>Email</label>
						<Form.Input
							placeholder='john.smith@email.com'
							onChange={this.handleChange('email')}
							/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<Form.Input
                            type='password'
							placeholder='Super secret password'
							onChange={this.handleChange('password')}
							/>
					</Form.Field>
				</Form.Group>
				<Button>Submit</Button>
			</Form>
        )
    }
}

export default RegisterScreen
export const REGISTER = "/register"
