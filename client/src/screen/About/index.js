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
                <p className='float-left'>Technology stack used</p>
                <br></br>
                <List>
                    <List.Item>
                        <List.Content floated='left'>
                        Built using <strong>MERN stack</strong> (MongoDB, ExpressJS, ReactJS, NodeJS)
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            Deployed using <strong>Heroku</strong> and <strong>Travis CI</strong>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            Tests written in <strong>Jest</strong> and <strong>Selenium</strong>
                        </List.Content>
                    </List.Item>
                </List>

                <p className='float-left'>Type of automated tests used during development</p>
                <br></br>
                <List>
                    <List.Item>
                        <List.Content floated='left'>
                            <strong>Unit tests</strong> - For each component unit tests were written which were executed after each push to common repository
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            <strong>API tests</strong> - For each service, automated tests were written to verify API calls
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            <strong>UI tests</strong> - After each deployment, UI automated tests were executed to verify E2E functionality
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }
}
export default AboutScreen
export const ABOUT = "/about"