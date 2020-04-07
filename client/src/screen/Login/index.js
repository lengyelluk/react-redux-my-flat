import { Link, withRouter } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Register } from '../../components'
import { authenticationService } from '../../_services/authentication.service'
import { connect } from 'react-redux';
import { login } from '../../_actions/user.actions';
import { clearErrors } from '../../_actions/error.actions';
import './style.css'

class LoginScreen extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
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
            if(error.id === 'LOGIN_FAIL') {
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
        const { email, password } = this.state;
        const user = {
            email, 
            password
        };
        //try to login
        this.props.login(user);
    }

    render() {
        return (
                <div className='content-login'>
                    <Form onSubmit={this.onSubmit}>
                        <h1>Login</h1>
                        <h3>You must log in to view the page</h3>
                        <p>{this.state.msg ? <span>{this.state.msg}</span> : null}</p>
                        <Form.Group>	
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
                        <Button color='green'>Login</Button>
                    </Form>
                </div>
        )
    }
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps,{ login, clearErrors })(withRouter(LoginScreen))
export const LOGIN = "/login"
