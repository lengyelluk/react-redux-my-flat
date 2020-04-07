import { Grid, Menu, Responsive, Item, Header } from 'semantic-ui-react'
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
		const userWelcomeMsg = <Link to='#'
								className='welcome-msg'>Welcome {user}</Link>

		
		return (
			<Menu pointing secondary>
				<Responsive 
					id='home'
					as={Item} 
					minWidth={768}>
					<Link to='/'
						name='home'
						onClick={this.handleItemClick}
						className={this.state.active === 'home' ? 'active' : 'nonactive'}>Home</Link>
                </Responsive>
				<Responsive 
					id='addFlat'
					as={Item} 
					minWidth={768} 
					>
					<Link to='/addFlat'
						name='addFlat'
						onClick={this.handleItemClick}
						className={this.state.active === 'addFlat' ? 'active' : 'nonactive'} 
						>Rent out a room</Link>
				</Responsive>
				<Responsive 
					as={Item}
					minWidth={768} 
					id='flatList'
					>
					<Link to='/flatList'
					onClick={this.handleItemClick}
					className={this.state.active === 'flatList' ? 'active' : 'nonactive'}
					name='flatList' 
					>Find a room</Link>
				</Responsive>
				<Responsive 
					as={Item}
					minWidth={768} 
					id='contact'
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
					minWidth={768} 
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
					as={Menu.Item}
					position='right'  
					name='welcome'
					id='welcome'
					minWidth={768}>
					{userWelcomeMsg}
				</Responsive>	
				<Responsive 
					id='logout'
					position='right'
					as={Item} 
					minWidth={768} 
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
					as={Menu.Item} 
					minWidth={768} 
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
					minWidth={768} 
					>
					<Link 
					name='register'
					onClick={this.handleItemClick}
					className={this.state.active === 'register' ? 'active' : 'nonactive'}
					to='/register'>Register</Link>
				</Responsive>
				</Fragment>
				}	
				<Responsive id='instructions' as={Header} maxWidth={767}  position='right'>
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