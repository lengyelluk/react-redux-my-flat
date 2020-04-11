import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Form, Button, Container, Header, Message } from 'semantic-ui-react'
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
                <div>
                    <Container id='register-content'>
                        <Header as='h1'>Register to gain access to all sections</Header>
                        <p>To register you need to have an email address. The registration is for free and after registration 
                            you will gain access to all the details of each listing. If you want to rent out a room, this option will
                             be enabled right after successful registration.
                        </p>
                        <p>Put down to the form three basic information: your first name, your email and password. Password should be at least
                             8 characters long.
                        </p>
                        <div>{this.state.msg ? <Message warning>
                                                    <Message.Header>{this.state.msg}</Message.Header>
                                                </Message> : null}</div>
                    </Container>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group id='registration-form'>
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
                        <Button color='green'>Register</Button>
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
