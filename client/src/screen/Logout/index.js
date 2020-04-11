import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { logout } from '../../_actions/user.actions';
import './style.css'

class LogoutScreen extends PureComponent {
    render() {
        return (
            <Container id='logout-content'>
                <Header as='h1'>You will be logged out after clicking the <strong>Logout</strong> button</Header>
                <Button color='red' onClick={this.props.logout} href="#">
                    Logout
                </Button>
            </Container>
        )
    }
}

export default connect(null, {logout})(LogoutScreen);

export const LOGOUT = "/logout"
