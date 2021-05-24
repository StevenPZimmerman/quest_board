import React from 'react'
import { NavLink } from "react-router-dom";
import "../client/scss/App.scss"

const navBar = () => {
    return (
        <nav className="navBar">
        
        <NavLink to = "/"
        activeClassName="activeNav"
        className="navLink">
             <img className="image" src="../img/sign_1.jpg" alt="welcomeImage"/>
        </NavLink>
    
        <NavLink to = "/Character"
        activeClassName="activeNav"
        className="navLink">
        <img className="image" src="../img/sign_2.jpg" alt="welcomeImage"/>
        </NavLink>
    
        <NavLink to = "/Shop"
        activeClassName="activeNav"
        className="navLink">
        <img className="image" src="../img/sign_3.jpg" alt="welcomeImage"/>
        </NavLink>

        <NavLink to = "/Dungeon"
        activeClassName="activeNav"
        className="navLink">
        <img className="image" src="../img/sign_4.jpg" alt="welcomeImage"/>
        </NavLink>
        
        
        
        
        </nav>
    )
}

export default navBar