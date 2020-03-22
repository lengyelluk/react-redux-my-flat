import {Button, Menu, MenuItem, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React, { PureComponent, Fragment, createRef	 } from 'react'
import { connect } from 'react-redux'
import { selectIsAuthenticated, getUser } from '../../reducer/auth/reducer'
import './style.css'


class NavTop extends PureComponent {
	
	render() {
		const { isAuthenticated, user } = this.props;

		const authLinks = (
			<Fragment>
				<Menu.Item>
					{ user ? `Welcome ${user}`: null}
				</Menu.Item>
				<MenuItem>
					<Button as={Link} to="/logout" >Logout</Button>
				</MenuItem>
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<MenuItem>
					<Button as={Link} to="/login" >Login</Button>
				</MenuItem>
				<MenuItem>
					<Button as={Link} to="/register" >Register</Button>
				</MenuItem>
			</Fragment>
		);
			console.log('user: ', user);
		return (
					<Menu className='navbar'>
						<Menu.Item header>
							My Flat App
						</Menu.Item>
						<Menu.Item
							as={Link} to="/" >Home
						</Menu.Item>
						<Menu.Item
							as={Link} to="/addFlat" >Rent out a room
						</Menu.Item>
						<Menu.Item
							as={Link} to="/flatList" >Find a room
						</Menu.Item>
						<Menu.Item
							as={Link} to="/willBeAdded" >Contact
						</Menu.Item>
						<Menu.Item
							as={Link} to="/about" >About us
						</Menu.Item>
							{ isAuthenticated ? authLinks : guestLinks }	
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