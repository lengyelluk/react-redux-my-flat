import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectIsAuthenticated } from '../../reducer/auth/reducer'

import './style.css'


class NavBar extends PureComponent {
	
	render() {
		const { closeNav, isAuthenticated } = this.props;

		const authLinks = (
			<Fragment>
				<Link to="/logout" onClick={closeNav}>Logout</Link>
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<Link to="/login" onClick={closeNav}>Login</Link>
				<Link to="/register" onClick={closeNav}>Register</Link>
			</Fragment>
		);

		return (
			<div id="navBar" className="overlay">
			<a className="closeBtn" onClick={closeNav}>&times;</a>
			<div className="overlay-content">
				<Link to="/" onClick={closeNav}>Home</Link>
				{ isAuthenticated ? authLinks : guestLinks }
				<Link to="/addFlat" onClick={closeNav}>Rent out a room</Link>
				<Link to="/flatList" onClick={closeNav}>Find a room</Link>
				<Link to="/contact" onClick={closeNav}>Contact</Link>	
				<Link to="/about" onClick={closeNav}>About me</Link>
			</div>
		</div>
		)
	}
}

const mapStateToProps = state => {
	return {
        isAuthenticated: selectIsAuthenticated(state)
    }
};

export default connect(mapStateToProps, null)(NavBar);