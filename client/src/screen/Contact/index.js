import React, { PureComponent } from 'react'
import './style.css'
import { Image, List, Button} from 'semantic-ui-react'

class ContactScreen extends PureComponent {
    render() {
        return (
            <div className='content'>
                <h1>Contact</h1>
            </div>
        )
    }
}
export default ContactScreen
export const CONTACT = "/contact"