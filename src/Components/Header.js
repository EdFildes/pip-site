import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img src={require('./../img/logoImage.png')} className="logoImage"></img>
                <img src={require('./../img/logoName.png')} className="logoName"></img>
            </div>
            <div className="navBar">
                <a className="navLink">Home</a>
                <a className="navLink">Pricing</a>
                <a className="navLink">Contact</a>

            </div>
        </div>
    )
}

export default Header