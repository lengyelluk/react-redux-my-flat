import React, { PureComponent } from 'react'
import './style.css'
import { Container, Header, Image, List, Button} from 'semantic-ui-react'

class ContactScreen extends PureComponent {
    render() {
        return (
            <Container>
            <div className='content-contact'>
                <Header as='h1'>Contact</Header>
                <p>If you find this website interesting or you simply want to contact me about any topic related to testing,
                     please fell free to do so using email or phone. I would appreciate any feedback and I am always
                     up for a good chat. In the last years of my career, many people helped me to learn more, so I would
                     love to give a litle bit back to the community.
                </p>
                <p id='desc-contact'>
                    If you would like to find out more information, just click on LinkedIn or GitHub profiles.<br></br> Note: I need to do "a bit" of cleaning
                     in my GitHub repositories :)
                </p>
                <List divided relaxed size={"large"}>
                    <List.Item>
                        <List.Icon name='spy' />
                        <List.Content>Lukas Lengyel</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Bratislava, Slovakia</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:lengyel.luk@gmail.com'>lengyel.luk@gmail.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>
                            <a href='tel:+421951481079'>+421 951 481 079</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkedin' />
                        <List.Content>
                            <a href='https://www.linkedin.com/in/lukas-lengyel/'
                            target='_blank'>LinkedIn Profile</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href='https://github.com/lengyelluk'
                            target='_blank'>GitHub Profile</a>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
            </Container>
        )
    }
}
export default ContactScreen
export const CONTACT = "/contact"