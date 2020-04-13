import { Link, withRouter } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Form, Button, Container, Header, Message } from 'semantic-ui-react'
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
                this.setState({
                    msg: error.msg.msg,
                    email: '',
                    password: ''
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
                <div>
                    <Container id='login-containter'>
                    <Header as='h1'>Login to access all sections</Header>
                        <p>You do not need to login if you only want to check the listings. However, if you want to
                             either <strong>see specific details of the room</strong> (including the contact info) or if you want to 
                              <strong> rent out a room</strong>, you need to login.</p>
                        <p>If you have not registered yet, please head to the <Link to='/register'><strong>Register</strong></Link> page. If
                        you have already registered, use your email and password set during the registration.
                        </p>                        
                        <div>{this.state.msg ? <Message warning>
                                                    <Message.Header>{this.state.msg}</Message.Header>
                                                </Message> : 
                                                    null}
                                                    </div>
                    </Container>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group id='login-form'>	
                            <Form.Field
                            name='email'>
                                <label>Email</label>
                                <Form.Input
                                    placeholder='john.smith@email.com'
                                    name='email'
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Form.Input
                                    type='password'
                                    name='password'
                                    placeholder='Super secret password'
                                    onChange={this.onChange}
                                    value={this.state.password}
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
