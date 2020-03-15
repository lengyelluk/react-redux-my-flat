import React from 'react'

import logo from '../../assets/images/logo.png'
import { NavTop } from '../../components'
import './style.css'

export default function TopNavBarLayout(props) {
    return (
        <div>
            <NavTop />
            {props.children}
        </div>
    )
}