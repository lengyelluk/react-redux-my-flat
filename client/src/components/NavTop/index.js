import { Button, Menu, MenuItem, Sticky, Responsive, Dropdown, DropdownMenu, Item, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { selectIsAuthenticated, getUser } from '../../reducer/auth/reducer'
import './style.css'


class NavTop extends PureComponent {
	
	constructor(props) {
		super(props);
		this.state = { 
			active: 'home' 
		}
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick = (e) => {
		console.log(e.target.name);
		this.setState({ active: e.target.name })
	}

	render() {


		const { isAuthenticated, user } = this.props;
		const { active } = this.state;
		console.log('ACTIVE: ', active)
		console.log('condition: ', this.state.active === 'home' )
		const userWelcomeMsg = <Link to='#'>Welcome {user}</Link>

		
		return (
				<Menu pointing secondary>
				<Responsive 
					id='home'
					as={Item} 
					minWidth={790}>
					<Link to='/'
						name='home'
						onClick={this.handleItemClick}
						className={this.state.active === 'home' ? 'active' : 'nonactive'}>Home</Link>
                </Responsive>
				<Responsive 
					id='addFlat'
					as={Item} 
					minWidth={790} 
					//onClick={this.handleItemClick}
					//active={active === 'addFlat'}>
					>
					<Link to='/addFlat'
						name='addFlat'
						onClick={this.handleItemClick}
						className={this.state.active === 'addFlat' ? 'active' : 'nonactive'} 
						>Rent out a room</Link>
				</Responsive>
				<Responsive 
					as={Item}
					minWidth={790} 
					id='flatList'
					//onClick={this.handleItemClick}
					//active={active === 'flatList'}>
					>
					<Link to='/flatList'
					onClick={this.handleItemClick}
					className={this.state.active === 'flatList' ? 'active' : 'nonactive'}
					name='flatList' 
					>Find a room</Link>
				</Responsive>
				<Responsive 
					as={Item}
					minWidth={790} 
					id='contact'
					//onClick={this.handleItemClick}
					//active={active === 'contact'}>
					>
					<Link to='/contact'
					onClick={this.handleItemClick}
					className={this.state.active === 'contact' ? 'active' : 'nonactive'}
					name='contact' 
					>Contact</Link>
				</Responsive>
				<Responsive 
					id='about' 
					as={Item}
					minWidth={790} 
					//onClick={this.handleItemClick}
					//active={active === 'about'}>
					>
					<Link 
					name='about'
					onClick={this.handleItemClick}
					className={this.state.active === 'about' ? 'active' : 'nonactive'}
					to='/about'>About me</Link>
				</Responsive>
				{isAuthenticated ?
				<Fragment>
				<Responsive 
					as={Item}
					position='right'  
					name='welcome'
					id='welcome'
					minWidth={790}>
					{userWelcomeMsg}
				</Responsive>	
				<Responsive 
					id='logout'
					as={Item} 
					minWidth={790} 
					//onClick={this.handleItemClick}
					//active={active === 'logout'}>
					>
					<Link 
					name='logout'
					onClick={this.handleItemClick}
					className={this.state.active === 'logout' ? 'active' : 'nonactive'}
					to='/logout'>Logout</Link>
				</Responsive> 
				</Fragment>
				:
				<Fragment> 
				<Responsive 
					id='login'
					position='right'
					as={Item} 
					minWidth={790} 
					//onClick={this.handleItemClick}
					//active={active === 'login'}>
					>
					<Link 
					name='login'
					onClick={this.handleItemClick}
					className={this.state.active === 'login' ? 'active' : 'nonactive'}
					to='/login'>Login</Link>
				</Responsive>
				<Responsive
					id='register'
					as={Item} 
					minWidth={790} 
					//onClick={this.handleItemClick}
					//active={active === 'register'}>
					>
					<Link 
					name='register'
					onClick={this.handleItemClick}
					className={this.state.active === 'register' ? 'active' : 'nonactive'}
					to='/register'>Register</Link>
				</Responsive>
				</Fragment>
				}	
				<Responsive id='instructions' as={Header} maxWidth={789}  position='right'>
                   My Flat App
                </Responsive>
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