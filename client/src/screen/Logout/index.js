import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { logout } from '../../_actions/user.actions';

class LogoutScreen extends PureComponent {
    render() {
        return (
            <>
            <h1>Logout</h1>
                <Button onClick={this.props.logout} href="#">
                    Logout
                </Button>
            </>
        )
    }
}

export default connect(null, {logout})(LogoutScreen);

export const LOGOUT = "/logout"
