import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Grid } from 'semantic-ui-react'

import './style.css'

import { ADD_FLAT } from '../AddFlat'
import { FLAT_LIST } from '../FlatList'

class HomeScreen extends PureComponent {
    render() {
        return (
            <div className='home-content'>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <h1>Your new room or a new flatmate just a click away</h1>
                            <h3>With us you can find the right flatmate or the ideal room for you</h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only="computer tablet">
                        <Grid.Column width={8}>
                            <div className='menu-option'>
                                <h4 className='menu-option-heading'>RENT OUT A ROOM</h4>
                                <p>The option <strong>Rent out a room</strong> is the right for you if you want to find a new flatmate</p>
                                <p>It is up to you if you do not mind that your new flatmate has a pet or if you are willing to share your cigarettes with another smoker</p>
                                <p>Basically, you can choose who will be your new flatmate. Just click the image below</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <div className='menu-option'>
                                <h4 className='menu-option-heading'>FIND A ROOM</h4>
                                <p>The option <strong>Find a room</strong> is the right for you if you are looking for a free room</p>
                                <p>You decide how much is too much for rent, which city district is the best for you or how many flamates would you like to have</p>
                                <p>Basically, you can easily find the right room for you. Just click the image below!</p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only="computer tablet">
                        <Grid.Column width={8}>
                            <Link to={ADD_FLAT} ><img src={require("../../assets/images/rentOutRoom.jpg")} alt='rent out a room' className='menu-option-photo' /></Link>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Link to={FLAT_LIST} ><img src={require("../../assets/images/findRoom.jpg")} alt='find a room' className='menu-option-photo' /></Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only='mobile'>
                        <Grid.Column>
                            <div className='menu-option'>
                                <h4 className='menu-option-heading'>RENT OUT A ROOM</h4>
                                <p>The option <strong>Rent out a room</strong> is the right for you if you want to find a new flatmate</p>
                                <p>It is up to you if you do not mind that your new flatmate has a pet or if you are willing to share your cigarettes with another smoker</p>
                                <p>Basically, you can choose who will be your new flatmate. Just click the image below</p>
                                <Link to={ADD_FLAT} ><img src={require("../../assets/images/rentOutRoom.jpg")} alt='rent out a room' className='menu-option-photo' /></Link>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only='mobile'>
                        <Grid.Column>
                            <div className='menu-option'>
                                <h4 className='menu-option-heading'>FIND A ROOM</h4>
                                <p>The option <strong>Find a room</strong> is the right for you if you are looking for a free room</p>
                                <p>You decide how much is too much for rent, which city district is the best for you or how many flamates would you like to have</p>
                                <p>Basically, you can easily find the right room for you. Just click the image below!</p>
                                <Link to={FLAT_LIST} ><img src={require("../../assets/images/findRoom.jpg")} alt='find a room' className='menu-option-photo' /></Link>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>		
            </div>  
            
        )
    }
}
export default HomeScreen
export const HOME = "/"