import { Button, Menu, MenuItem, Sticky, Responsive, Dropdown, DropdownMenu } from 'semantic-ui-react'
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

	handleItemClick = (e, { name }) => this.setState({ active: name })

	render() {
		const { isAuthenticated, user } = this.props;
		const { active } = this.state;
		const userWelcomeMsg = <Link>Welcome {user}</Link>
		return (
				<Menu pointing secondary>
				<Responsive name='home'
					id='home'
					as={Menu.Item} 
					minWidth={790}
					onClick={this.handleItemClick}
					active={active === 'home'}>
					<Link to='/'>Home</Link>
                </Responsive>
				<Responsive 
					name='addFlat'
					id='addFlat' 
					as={Menu.Item} 
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'addFlat'}>
					<Link to='/addFlat'>Rent out a room</Link>
				</Responsive>
				<Responsive 
					as={Menu.Item}
					id='flatList'
					name='flatList' 
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'flatList'}>
					<Link to='/flatList'>Find a room</Link>
				</Responsive>
				<Responsive 
					as={Menu.Item}
					id='contact'
					name='contact' 
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'contact'}>
					<Link to='/contact'>Contact</Link>
				</Responsive>
				<Responsive 
					as={Menu.Item}
					name='about'
					id='about' 
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'about'}>
					<Link to='/about'>About me</Link>
				</Responsive>
				{isAuthenticated ?
				<Fragment>
				<Responsive 
					as={Menu.Item}
					position='right'  
					name='welcome'
					id='welcome'
					minWidth={790}>
					{userWelcomeMsg}
				</Responsive>	
				<Responsive 
					as={Menu.Item} 
					name='logout'
					id='logout'
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'logout'}>
					<Link to='/logout'>Logout</Link>
				</Responsive> 
				</Fragment>
				:
				<Fragment> 
				<Responsive 
					position='right'
					as={Menu.Item} 
					name='login'
					id='login'
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'login'}>
					<Link to='/login'>Login</Link>
				</Responsive>
				<Responsive
					
					as={Menu.Item} 
					name='register'
					id='register'
					minWidth={790} 
					onClick={this.handleItemClick}
					active={active === 'register'}>
					<Link to='/register'>Register</Link>
				</Responsive>
				</Fragment>
				}
                    
                <Responsive as ={Menu.Menu} maxWidth={789}  position='right'>
                    <Dropdown
                        item
						icon ='bars'
						id='icon'
                        >
                        <Dropdown.Menu id='dropdown'>
							<Dropdown.Item text='Home' as={Link} to='/' />
							<Dropdown.Item text='Rent out a room' as={Link} to='/addFlat' />
                            <Dropdown.Item text='Find a room' as={Link} to='/flatList' />
							<Dropdown.Item text='Contact' as={Link} to='/contact' />
							<Dropdown.Item text='About me' as={Link} to='/about' />
							{isAuthenticated ?
							
							<Dropdown.Item text='Logout' as={Link} to='/logout' />
							:
							<Fragment>
								<Dropdown.Item text='Login' as={Link} to='/login' />
								<Dropdown.Item text='Register' as={Link} to='/register' />
							</Fragment>}
                        </Dropdown.Menu>
                    </Dropdown>
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