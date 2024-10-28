import React, {useState} from 'react';
import './navbar.css';
import logo from '../assets/Pictures/Yosemite National Park.png';
import { NavLink } from "react-router-dom";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
      <nav className='navbar'> 
        <div className='container'>
            
        <div className="logo">
          <img className="logo" src={logo} alt='Yose'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <FontAwesomeIcon color='black'icon={faBars}/>
        </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
                <li>
                <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/about">About</NavLink>
                </li>
                <li>
                <NavLink to="/photos">Photography</NavLink>
                </li>
                <li>
                <NavLink to="/climbing">Climbing</NavLink>
                </li>
            </ul>
            </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar