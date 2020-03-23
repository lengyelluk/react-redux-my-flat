import React, { PureComponent } from 'react'
import './style.css'
import { Image, List, Button} from 'semantic-ui-react'

class ContactScreen extends PureComponent {
    render() {
        return (
            <div className='content-contact'>
                <h1>Contact</h1>
                <List relaxed size={"large"}>
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
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href='https://github.com/lengyelluk'
                            target='_blank'>lengyelluk@github</a>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }
}
export default ContactScreen
export const CONTACT = "/contact"