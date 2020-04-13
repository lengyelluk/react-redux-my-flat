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
		this.setState({ active: e.target.name })
	}

	render() {


		const { isAuthenticated, user } = this.props;
		const { active } = this.state;
		const userWelcomeMsg = <Link to='#'
								className='welcome-msg'>Welcome {user}</Link>

		
		return (
			<Menu pointing secondary>
				<Responsive id='home' as={Item} minWidth={690}>
					<Link to='/' name='home' onClick={this.handleItemClick}
						className={this.state.active === 'home' ? 'active' : 'nonactive'}>Home</Link>
                </Responsive>
				<Responsive id='addFlat' as={Item} minWidth={690} >
					<Link to='/addFlat'name='addFlat' onClick={this.handleItemClick} 
					className={this.state.active === 'addFlat' ? 'active' : 'nonactive'} 
						>Rent out a room</Link>
				</Responsive>
				<Responsive as={Item} minWidth={690} id='flatList'>
					<Link to='/flatList' onClick={this.handleItemClick} className={this.state.active === 'flatList' ? 'active' : 'nonactive'}
					name='flatList'>Find a room</Link>
				</Responsive>
				<Responsive as={Item} minWidth={690} id='contact'>
					<Link to='/contact' onClick={this.handleItemClick} className={this.state.active === 'contact' ? 'active' : 'nonactive'}
					name='contact'>Contact</Link>
				</Responsive>
				<Responsive id='about' as={Item} minWidth={690}>
					<Link name='about' onClick={this.handleItemClick} className={this.state.active === 'about' ? 'active' : 'nonactive'}
					to='/about'>About me</Link>
				</Responsive>
				{isAuthenticated ?
				<Fragment>
				<Responsive as={Menu.Item} position='right'  name='welcome' id='welcome' minWidth={690}>
					{userWelcomeMsg}
				</Responsive>	
				<Responsive id='logout' position='right' as={Item} minWidth={690}>
					<Link name='logout' onClick={this.handleItemClick} className={this.state.active === 'logout' ? 'active' : 'nonactive'}
					to='/logout'>Logout</Link>
				</Responsive> 
				</Fragment>
				:
				<Fragment> 
				<Responsive id='login' position='right'as={Menu.Item} minWidth={690}>
					<Link name='login' onClick={this.handleItemClick} className={this.state.active === 'login' ? 'active' : 'nonactive'}
					to='/login'>Login</Link>
				</Responsive>
				<Responsive id='register' as={Item} minWidth={690}>
					<Link name='register' onClick={this.handleItemClick} className={this.state.active === 'register' ? 'active' : 'nonactive'}
					to='/register'>Register</Link>
				</Responsive>
				</Fragment>	
				}
				<Responsive id='home' as={Item} maxWidth={689}>
					<Link to='/' name='home' onClick={this.handleItemClick}
						className={this.state.active === 'home' ? 'active' : 'nonactive'}>Home</Link>
                </Responsive>
				{isAuthenticated ?
				<Fragment>
				<Responsive as={Menu.Item} position='right' name='welcome' id='welcome' maxWidth={689}>
					{userWelcomeMsg}
				</Responsive>	
				<Responsive id='logout' as={Item} maxWidth={689}>
					<Link name='logout' onClick={this.handleItemClick} className={this.state.active === 'logout' ? 'active' : 'nonactive'}
					to='/logout'>Logout</Link>
				</Responsive> 
				</Fragment>
				:
				<Fragment> 
				<Responsive id='login' position='right' as={Menu.Item} maxWidth={689}>
					<Link name='login' onClick={this.handleItemClick} className={this.state.active === 'login' ? 'active' : 'nonactive'}
					to='/login'>Login</Link>
				</Responsive>
				<Responsive id='register' as={Item} maxWidth={689}>
					<Link name='register' onClick={this.handleItemClick} className={this.state.active === 'register' ? 'active' : 'nonactive'}
					to='/register'>Register</Link>
				</Responsive>
				</Fragment>
				}
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