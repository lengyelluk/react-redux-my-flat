import {Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { selectIsAuthenticated, getUser } from '../../reducer/auth/reducer'
import './style.css'


class NavTop extends PureComponent {
	render() {
		const { isAuthenticated, user } = this.props;

		const authLinks = (
			<Fragment>
				<Button as={Link} to="/logout" >Logout</Button>
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<Button as={Link} to="/login" >Login</Button>
				<Button as={Link} to="/register" >Register</Button>
			</Fragment>
		);
			console.log('user: ', user);
		return (
			<Menu>
				<Menu.Item header>
					<span>
					{ user ? `Welcome ${user}`: null}
					</span>
				</Menu.Item>
				<Menu.Item
					as={Link} to="/" >Home
				</Menu.Item>
				<Menu.Item link
					as={Link} to="/addCard" >Rent out a room
				</Menu.Item>
				<Menu.Item>
					<Button as={Link} to="/cards" >Find a room</Button>
				</Menu.Item>
				<Menu.Item>
					<Button as={Link} to="/about" >About us</Button>
				</Menu.Item>
				<Menu.Item>
					<Button as={Link} to="/willBeAdded" >Contact</Button>
				</Menu.Item>
				<Menu.Item>
					{ isAuthenticated ? authLinks : guestLinks }
				</Menu.Item>
			</Menu>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: selectIsAuthenticated(state),
		user: getUser(state)
    }
};

export default connect(mapStateToProps, null)(NavTop);