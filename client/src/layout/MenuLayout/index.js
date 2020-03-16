import React from 'react'

import logo from '../../assets/images/logo.png'
import { NavBar } from '../../components'
import './style.css'
import TopNavBarLayout from '../TopNavBarLayout';

function closeNav() {
    document.getElementById("navBar").style.width = "0%";
}
function openNav() {
    document.getElementById("navBar").style.width = "100%";
}
function toggleLogo() {
    let element = document.getElementById("h1-menu-tag")
    if (element.classList.contains('menu-hidden')) {
        element.classList.remove('menu-hidden')
        element.classList.add('menu')
    } else {                
        element.classList.remove('menu')
        element.classList.add('menu-hidden')
    }
}
export default function MenuLayout(props) {
    return (
        <div>
           
                <img src={logo} alt="logo" className='static-logo' onClick={openNav}/>
                <NavBar closeNav={closeNav} />
           
            {props.children}
        </div>
    )
}