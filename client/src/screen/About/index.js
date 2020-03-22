import React, { PureComponent } from 'react'
import './style.css'
import { Image, List, Button} from 'semantic-ui-react'

class AboutScreen extends PureComponent {
    render() {
        return (
            <div className='content'>
                <h1>About My Flat App</h1>
                <h3>This page was built to experience at first hand web development using shift-left approach</h3> 
                <p>What does shift-left mean? In simple terms, it means that testing is not performed at the last stage of software development lifecycle but it starts as close
                    to the beginning of the project as possible.</p>
                <p>This is not a fully working model of web page. The goal was to try shift-left approach in web development</p>
                <br></br>
                <p><strong>Shift-left == test early && test often.</strong></p> 
                <br></br>
                <p className='float-left'></p>
                <br></br>
                <List divided verticalAlign='middle'>
                    <List.Item>
                        <List.Content floated='left'>
                        <strong>Technology stack used</strong>
                        </List.Content>
                        <List.Content floated='right'>
                        <strong>Type of automated tests used during development</strong>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                        Built using <strong>MERN stack</strong> (MongoDB, ExpressJS, ReactJS, NodeJS)
                        </List.Content>
                        <List.Content floated='right'>
                            <strong>Unit tests</strong> - executed after each push to common repository
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            Deployed using <strong>Heroku</strong> and <strong>Travis CI</strong>
                        </List.Content>
                        <List.Content floated='right'>
                            <strong>API tests</strong> - each service tested with automated tests
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            Tests written in <strong>Jest</strong> and <strong>Selenium</strong>
                        </List.Content>
                        <List.Content floated='right'>
                            <strong>UI tests</strong> - to verify E2E functionality after each deployment
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }
}
export default AboutScreen
export const ABOUT = "/about"