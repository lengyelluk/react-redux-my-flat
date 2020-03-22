import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Register } from '../../components'
import { authenticationService } from '../../_services/authentication.service'
import { connect } from 'react-redux';
import { register } from '../../_actions/user.actions';
import { clearErrors } from '../../_actions/error.actions';
import './style.css';

class RegisterScreen extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
            username: '',
			email: '',
			password: '',
			msg: null
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    };
    
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            //check for register errors if new error found
            if(error.id === 'REGISTER_FAIL') {
                console.log('is not null:', error.msg.msg)
                this.setState({
                    msg: error.msg.msg
                });
            } else {
                this.setState({
                    msg: null
                });
            }
        }
    }


	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        const newUser = {
            username, email, password
        };
        this.props.register(newUser);
    }

    render() {
        return (
                <div className='content-register'>
                    <Form onSubmit={this.onSubmit}>
                        <h1>Registration</h1>
                        <h2>{this.state.msg ? <span>{this.state.msg}</span> : null}</h2>
                        <Form.Group>
                            <Form.Field
                            name='username'>
                                <label>Name</label>
                                <Form.Input
                                    placeholder='John'
                                    name='username'
                                    onChange={this.onChange}
                                    />
                            </Form.Field>	
                            <Form.Field
                            name='email'>
                                <label>Email</label>
                                <Form.Input
                                    placeholder='john.smith@email.com'
                                    name='email'
                                    onChange={this.onChange}
                                    />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Form.Input
                                    type='password'
                                    name='password'
                                    placeholder='Super secret password'
                                    onChange={this.onChange}
                                    />
                            </Form.Field>
                        </Form.Group>
                        <Button>Register</Button>
                    </Form>
                </div>
        )
    }
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps,{ register, clearErrors })(RegisterScreen)
export const REGISTER = "/register"
