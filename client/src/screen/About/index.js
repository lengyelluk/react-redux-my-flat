import React, { PureComponent } from 'react'
import './style.css'
import { Container, Header, Image, List, Button, Responsive } from 'semantic-ui-react'

class AboutScreen extends PureComponent {
    render() {
        return (
            <Container>
            <div id='about-content'>
                <Header as='h1'>About My Flat App</Header>
                <Header as='h3'>This page was built to experience at first hand web development using shift-left approach</Header> 
                <p>What does <strong>shift-left</strong> mean? In simple terms, it means that testing is not performed at the last stage of software development lifecycle but it starts as close
                    to the beginning of the project as possible.</p>
                <p>This is not a fully working model of a web page. The goal was to try shift-left approach in web development</p>
                <br></br>
                <q><strong>Shift-left means test early and test often.</strong></q> 
                <br></br>
                <p className='float-left'></p>
                <br></br>
                <Responsive as={List} className={'divided'} minWidth={1080}>
                    <List.Item>
                        <List.Content floated='left'>
                            <List.Header>
                                <strong>Technology stack used</strong>
                            </List.Header>
                        </List.Content>
                        <List.Content floated='right'>
                            <List.Header>
                                <strong>Type of automated tests used during development</strong>
                            </List.Header>
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
                </Responsive>
                <Responsive id='about-first-list' as={List} className={'divided'} maxWidth={1079}>
                    <List.Item>
                        <List.Content>
                            <List.Header>
                                <strong>Technology stack used</strong>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Built using <strong>MERN stack</strong> (MongoDB, ExpressJS, ReactJS, NodeJS)
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Deployed using <strong>Heroku</strong> and <strong>Travis CI</strong>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            Tests written in <strong>Jest</strong> and <strong>Selenium</strong>
                        </List.Content>
                    </List.Item>
                </Responsive>
                <Responsive as={List} className={'divided'} maxWidth={1079}>
                    <List.Item>
                        <List.Content>
                            <List.Header>
                                <strong>Type of automated tests used during development</strong>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <strong>Unit tests</strong> - executed after each push to common repository
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <strong>API tests</strong> - each service tested with automated tests
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <strong>UI tests</strong> - to verify E2E functionality after each deployment
                        </List.Content>
                    </List.Item>
                </Responsive>
            </div>
            </Container>
        )
    }
}
export default AboutScreen
export const ABOUT = "/about"